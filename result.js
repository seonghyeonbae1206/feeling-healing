// URL에서 점수와 이름 받아오기
const urlParams = new URLSearchParams(window.location.search);
const score = parseInt(urlParams.get('score'));
const name = decodeURIComponent(urlParams.get('name')) || "익명";

// 점수별 결과 프로필
const resultProfiles = [
  { min: 0, max: 29, title: "조금 지쳐 있는 상태예요", text: "휴식이 필요할 수 있어요. 스스로를 돌보세요.", img: "https://cdn-icons-png.flaticon.com/512/742/742760.png" },
  { min: 30, max: 39, title: "조금 지쳤지만, 잘 해내고 있어요.", text: "마음을 돌아보며 한 걸음씩 나아가 보세요.", img: "https://cdn-icons-png.flaticon.com/512/742/742758.png" },
  { min: 40, max: 50, title: "감정 밸런스를 잘 유지하고 있어요.", text: "지금처럼 잘 해내고 있어요. 스스로를 칭찬해주세요.", img: "https://cdn-icons-png.flaticon.com/512/742/742790.png" }
];

// 점수에 맞는 결과 찾기
function findProfile(score) {
  return resultProfiles.find(p => score >= p.min && score <= p.max);
}

// 구글시트에 결과 저장하는 함수
function sendResultToSheet(nickname, score, exitStage, completed, shared) {
  if (!nickname || isNaN(score)) {
    console.error('닉네임 또는 점수 정보가 없습니다. 서버 전송 생략');
    return;
  }

  navigator.sendBeacon(
    'https://script.google.com/macros/s/AKfycbxlj1pkm0H26S46aeDj-ErYqyzyWSkrFmAQLYgODnMVplKViV3wPYposv6X07GP5crv3Q/exec',
    JSON.stringify({ nickname, score, exitStage, completed, shared })
  );
}

// ✅ 모든 스크립트는 window.onload 이후에 실행
window.onload = function() {
  // Kakao SDK 초기화
  Kakao.init('2facc9f39347ae1f2bca2651543e2ed5');
  console.log('✅ Kakao SDK 초기화 완료');

  // 결과 화면 띄우기
  const profile = findProfile(score);
  document.getElementById('nickname').innerText = `${name}님의 결과`;
  document.getElementById('result-score').innerText = `${score}점`;
  document.getElementById('result-title').innerText = profile.title;
  document.getElementById('result-text').innerText = profile.text;
  document.getElementById('result-img').src = profile.img;
  document.getElementById('result-logo').src = "your-logo-url.png"; // 나중에 교체

  // ✅ 페이지 로드되자마자 기본 데이터(shared: no) 저장
  sendResultToSheet(name, score, 10, "yes", "no");

  // 공유 버튼 이벤트
  document.getElementById('share-btn').addEventListener('click', () => {
    // ✅ 공유 버튼 누르면 shared: yes로 다시 저장
    sendResultToSheet(name, score, 10, "yes", "yes");

    Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: '내 감정 결과',
        description: `${profile.title} - ${profile.text}`,
        imageUrl: profile.img,
        link: {
          mobileWebUrl: 'https://seonghyeonbae1206.github.io/feeling-healing/',
          webUrl: 'https://seonghyeonbae1206.github.io/feeling-healing/'
        }
      },
      buttons: [
        { title: '나도 감정 테스트하기', link: { mobileWebUrl: 'https://seonghyeonbae1206.github.io/feeling-healing/', webUrl: 'https://seonghyeonbae1206.github.io/feeling-healing/' } }
      ]
    });
  });

  // ✅ 페이지 벗어날 때 추가 작업 필요 없음 (beforeunload 삭제)
};
