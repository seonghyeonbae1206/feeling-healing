// 1. URL에서 점수(score)와 이름(name) 받아오기
const urlParams = new URLSearchParams(window.location.search);
const score = parseInt(urlParams.get('score')) || 0;
const userName = decodeURIComponent(urlParams.get('name')) || "익명";

// 2. 퍼센트 텍스트 채우기
document.getElementById('percent-text').innerText = `${score}%`;
document.getElementById('percent-subtext').innerText = `평균 56%`; // 평균은 필요시 변경

// 3. 퍼센트 반원 차트 그리기
const ctx = document.getElementById('percent-chart').getContext('2d');
new Chart(ctx, {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [score, 100 - score],
      backgroundColor: ['#4EAFFF', '#DDE1E6'],
      borderWidth: 0
    }]
  },
  options: {
    cutout: '70%',
    rotation: -90,
    circumference: 180,
    plugins: { legend: { display: false } },
    responsive: false
  }
});

// 4. 점수별 감정 코멘트 설정

if (score >= 94) {
  document.getElementById('emotion-comment').innerText = "내가 제일 행복한 거 같지않아?! 아~ 난 만족스러운 것 같아.";
  document.getElementById('emotion-sub').innerText = "으앙.. 울컥해요. 다 링링이 덕분이죠! 헤헤.";
}
else if (score >= 91) {
  document.getElementById('emotion-comment').innerText = "오랜만에 친구들을 좀 만나볼까. 이 영화 재밌겠다!";
  document.getElementById('emotion-sub').innerText = "저는 포뇨가 제일 재밌었어요..// 포뇨와 저, 닮지않았나요?";
}
else if (score >= 90) {
  document.getElementById('emotion-comment').innerText = "아 갑자기 신나는 노래를 막 들어보고싶은데!";
  document.getElementById('emotion-sub').innerText = "링링이에게는 아주 좋은 플레이리스트가 있어요. 자신있다구요!";
}
else if (score >= 87) {
  document.getElementById('emotion-comment').innerText = "아. 어떤 대학교보다 침대가 가장 엘리트인 것 같아. 좋다.";
  document.getElementById('emotion-sub').innerText = "하하.. 저는 별이 다섯 돌침대가 좋더라구요!";
}
else if (score >= 84) {
  document.getElementById('emotion-comment').innerText = "꽃이 핀게 보이더라. 사진 한 장 찍을까?";
  document.getElementById('emotion-sub').innerText = "링링이가 찍어드릴게요! 어!! 힐필아 거기서 나와!";
}
else if (score >= 81) {
  document.getElementById('emotion-comment').innerText = "음음. 이러면 할만 해. 좋아!";
  document.getElementById('emotion-sub').innerText = "좋은 와중에 살짝 미소지어 볼까요? 링링이는 그 표정이 제일 예뻐보였어요!";
}
else if (score >= 80) {
  document.getElementById('emotion-comment').innerText = "오늘 시간이 빨리가더라! 너무 좋았어.";
  document.getElementById('emotion-sub').innerText = "제가 시간을 좀 건들여봤어요! 매일 해볼까요?!";
}
else if (score >= 77) {
  document.getElementById('emotion-comment').innerText = "계곡을 보러가고 싶어. 힐링을 하면 딱 좋을 것 같아.";
  document.getElementById('emotion-sub').innerText = "!! 그거라면 링링이가 전문이죠! 저희가 안내할게요!";
}
else if (score >= 74) {
  document.getElementById('emotion-comment').innerText = "흠흠~ 아, 콧노래가 나오다니. 날씨 좋네!";
  document.getElementById('emotion-sub').innerText = "링링이는 피크닉이 좋아요! 힐필이는 피그닉 음식이 좋대요..";
}
else if (score >= 71) {
  document.getElementById('emotion-comment').innerText = "뭐.. 평소보다 그럭저럭이었어. 괜찮은 하루야!";
  document.getElementById('emotion-sub').innerText = "내일도 파이팅! 매일 파이팅!";
}
else if (score >= 70) {
  document.getElementById('emotion-comment').innerText = "음, 커피 마시면 좀 나아질라나.";
  document.getElementById('emotion-sub').innerText = "저는 따뜻한 우유가 들어간 라떼가 좋아요! 아 커피는 빼구요.";
}
else if (score >= 67) {
  document.getElementById('emotion-comment').innerText = "지금 기분은 like 기상청 같아. 비가 올 확률은 50%.";
  document.getElementById('emotion-sub').innerText = "비가 오는 듯~ 하면서 안 오는 줄 알았다가~ 올 수도 있고 안 올 수도 있대요!";
}
else if (score >= 64) {
  document.getElementById('emotion-comment').innerText = "나에게 자유를 줘!! 유튜브 봐야한다고.";
  document.getElementById('emotion-sub').innerText = "프리~덤~! 프리허그는 어때요? 그럼 자유를 금방 드릴 수 있어요!";
}
else if (score >= 61) {
  document.getElementById('emotion-comment').innerText = "앞으로도 이렇게 할 일이 쌓인다는 거야? 세상이 날 억까해!!";
  document.getElementById('emotion-sub').innerText = "일단 울지 말고 이야기해봐요... 괜찮..나..? 아닌가..?";
}
else if (score >= 60) {
  document.getElementById('emotion-comment').innerText = "이제 좀 약속 잡을 힘이 생긴 것 같아. 조금 나가볼까? 아니다! 맛있는 걸 먹어야겠어!";
  document.getElementById('emotion-sub').innerText = "마라탕을 다들 좋아하시더라구요! 저는 솜사탕이 너무 맛있어요..// 나랑 비슷해서 그런가?";
}
else if (score >= 57) {
  document.getElementById('emotion-comment').innerText = "조금만 더 자유시간을 줘.. 힐링이 필요해. 나 좀 웃겨줘. 아 물론 혼자 핸드폰으로.";
  document.getElementById('emotion-sub').innerText = "경찰서의 반댓말을 뭘까요? 경찰앉아! 하하하하!! 개그맨 급으로 웃겼죠!?";
}
else if (score >= 54) {
  document.getElementById('emotion-comment').innerText = "자연스럽게 멍 때리게 돼.";
  document.getElementById('emotion-sub').innerText = "멍..멍멍,, 멍멍이! 강아지! 강아지가 생각나네요. 귀여운 강아지를 생각해볼까요?";
}
else if (score >= 51) {
  document.getElementById('emotion-comment').innerText = "누가 내 자유 시간을 잡아먹었어. 이세계로 온 것 같다고!";
  document.getElementById('emotion-sub').innerText = "힐필이가 가장 큰 용의자 같아요. 제가 수갑을 채울게요! 아차차. 손이 없으면 어디에 수갑을..";
}
else if (score >= 50) {
  document.getElementById('emotion-comment').innerText = "내 정신이 가출한 거 같아. 전화 좀 해봐.";
  document.getElementById('emotion-sub').innerText = "제가 잡아올게요!! 근데.. 이미 먼지가 되어버렸으면 어쩌죠? 농담이에요..ㅎㅎ";
}
else if (score >= 47) {
  document.getElementById('emotion-comment').innerText = "내가 웃는게 웃는게 아니야.. 하하하하하하!!!";
  document.getElementById('emotion-sub').innerText = "...미소 무서워 보이긴해요. 혹시 조커를 감명깊게 보셨을까요?ㅠㅠ";
}
else if (score >= 44) {
  document.getElementById('emotion-comment').innerText = "나만 열받아? 다른 애들은!!";
  document.getElementById('emotion-sub').innerText = "기분 이해해요. 근데 다른 사람들은.. 링링이가 공유해드릴게요!";
}
else if (score >= 41) {
  document.getElementById('emotion-comment').innerText = "난..강아지가 되어서 놀고 먹는게 꿈이야.";
  document.getElementById('emotion-sub').innerText = "링링이도 그래요.. 다들 스트레스 그만 받아야 제가 일을 안 할텐데..";
}
else if (score >= 40) {
  document.getElementById('emotion-comment').innerText = "개킹받네 어쩔건데 마인드 좀 형성할게";
  document.getElementById('emotion-sub').innerText = "이미 그런거 아니었나요? 링링이를 본 받아봐요! 보리차 한 잔 캬아 -! 기분이 끝내줘요";
}
else if (score >= 37) {
  document.getElementById('emotion-comment').innerText = "다 깨부순다 아이언맨 빙의한다 팍씨";
  document.getElementById('emotion-sub').innerText = "아이언맨은 영웅이에요.. 당신과는 반대인..아니 제말은 더 멋진 사람같다구요.";
}
else if (score >= 34) {
  document.getElementById('emotion-comment').innerText = "한숨만 나오는데 말 할 힘도 없다 지금..";
  document.getElementById('emotion-sub').innerText = "이하이의 한숨 틀어드릴까요..? 노래가 참 좋답니다.";
}
else if (score >= 31) {
  document.getElementById('emotion-comment').innerText = "멍을 때릴까 베개를 때릴까.";
  document.getElementById('emotion-sub').innerText = "인생 참 힘들다 그쵸..? 소주..아니아니.. 청심환 한 잔 어때요?";
}
else if (score >= 30) {
  document.getElementById('emotion-comment').innerText = "뭘봐. 기분 안 좋은 사람 처음봐?";
  document.getElementById('emotion-sub').innerText = "아니요.. (바들바들), 어! 힐필아 왜이렇게 떨어! 괜찮니!!";
}
else if (score >= 27) {
  document.getElementById('emotion-comment').innerText = "심호흡 따위 개나 줘버려. 진정되게 생겼어?";
  document.getElementById('emotion-sub').innerText = "워워.. 워 우워우워..워워 우 워우어.. 노래를 하나 들어볼까요?";
}
else if (score >= 24) {
  document.getElementById('emotion-comment').innerText = "하..기분 진짜. 된장 고추장 같네. 야 너 이리와봐.";
  document.getElementById('emotion-sub').innerText = "다..다리가 왜이렇게 떨리지. 추운가봐요. 아차차! 난 다리가 없지!";
}
else {
  document.getElementById('emotion-comment').innerText = "오늘 기분이 어떤가요?";
  document.getElementById('emotion-sub').innerText = "힐링이 필요할 때는 언제든 돌아오세요 :)";
}


// 6. 감정 캐릭터 이미지 설정 (점수대별 간단 예시)
function setEmotionImage(score) {
  const img = document.getElementById('emotion-img');
  let src = "images/1_시베리안허스키-24.png"; // 기본

  if (score >= 94) src = "images/8_보더콜리-94.png";
  else if (score >= 91) src = "images/8_보더콜리-91.png";
  else if (score >= 90) src = "images/7_비숑-90.png";
  else if (score >= 87) src = "images/7_비숑-87.png";
  else if (score >= 84) src = "images/7_비숑-84.png";
  else if (score >= 81) src = "images/7_비숑-81.png";
  else if (score >= 80) src = "images/6_웰치코기-80.png";
  else if (score >= 77) src = "images/6_웰치코기-77.png";
  else if (score >= 74) src = "images/6_웰치코기-74.png";
  else if (score >= 71) src = "images/6_웰치코기-71.png";
  else if (score >= 70) src = "images/5_치와와-70.png";
  else if (score >= 67) src = "images/5_치와와-67.png";
  else if (score >= 64) src = "images/5_치와와-64.png";
  else if (score >= 61) src = "images/5_치와와-61.png";
  else if (score >= 60) src = "images/4_코카스페니얼-60.png";
  else if (score >= 57) src = "images/4_코카스페니얼-57.png";
  else if (score >= 54) src = "images/4_코카스페니얼-54.png";
  else if (score >= 51) src = "images/4_코카스페니얼-51.png";
  else if (score >= 50) src = "images/3_시바이누-50.png";
  else if (score >= 47) src = "images/3_시바이누-47.png";
  else if (score >= 44) src = "images/3_시바이누-44.png";
  else if (score >= 41) src = "images/3_시바이누-41.png";
  else if (score >= 40) src = "images/2_닥스훈트-40.png";
  else if (score >= 37) src = "images/2_닥스훈트-37.png";
  else if (score >= 34) src = "images/2_닥스훈트-34.png";
  else if (score >= 31) src = "images/2_닥스훈트-31.png";
  else if (score >= 30) src = "images/1_시베리안허스키-30.png";
  else if (score >= 27) src = "images/1_시베리안허스키-27.png";
  else if (score >= 24) src = "images/1_시베리안허스키-24.png";

  img.src = src;
}
setEmotionImage(score);


// 7. 해시태그 출력
document.getElementById('hashtags').innerText = "#필링 #힐링 #링링이 #힐필이";

// 8. 레이더 차트 그리기
const radarCtx = document.getElementById('radar-chart').getContext('2d');
new Chart(radarCtx, {
  type: 'radar',
  data: {
    labels: ['행복', '평안함', '우울함', '짜증', '불안함', '지루함'],
    datasets: [{
      label: '감정 지수',
      data: [6, 7, 3, 4, 2, 5], // 샘플 데이터, 필요시 연결
      backgroundColor: 'rgba(12, 49, 172, 0.2)',
      borderColor: '#0C31AC',
      pointBackgroundColor: '#0C31AC'
    }]
  },
  options: {
    scales: {
      r: {
        angleLines: { display: false },
        suggestedMin: 0,
        suggestedMax: 10
      }
    },
    plugins: { legend: { display: false } },
    responsive: false
  }
});

let feelingTitle = "";
let feelingQuote = "";

if (score >= 94) {
  feelingTitle = "🎧거북이 - 빙고";
  feelingQuote = "모든게 마음 먹기 달렸어. 사는게 힘이 들다 하지. 쉽게만 살아가면 재미없어 빙고!";
}
else if (score >= 91) {
  feelingTitle = "🎧마이티 마우스 - 랄랄라";
  feelingQuote = "Let's go 나 오늘 떠날 거야 나를 찾지 말아줘. 저 뜨거운 태양을 만나러 갈거야!";
}
else if (score >= 90) {
  feelingTitle = "🎧세븐틴 - 아주 nice";
  feelingQuote = "오늘 날씨 너를 많이 닮아 너에게 가는 길은 꽃길이 되고 보일 듯 말듯한 네 마음.";
}
else if (score >= 87) {
  feelingTitle = "🎧데이식스 - welcome to the show";
  feelingQuote = "너의 결정이 쉽지 않았을 거야 후회 없게 하는 건 이제 나의 몫이야. 끝까지 같이 함께.";
}
else if (score >= 84) {
  feelingTitle = "🎧루시 - 21세기의 어떤 날";
  feelingQuote = "숨 가쁜 오늘 시대는 흘러 달리고 있는데 찰칵 셔터를 누르면, 모두 다 간직할 수 있기를.";
}
else if (score >= 81) {
  feelingTitle = "🎧쏠 - ride";
  feelingQuote = "매일 복잡하고 좀 지루하긴 해도 oh 행복이 뭐 별거 있어 라고 해도 아직은 뭔가 부족해.";
}
else if (score >= 80) {
  feelingTitle = "🎧이클립스 - 소나기";
  feelingQuote = "잊고 싶던 아픈 기억들도 빗방울과 함께 흘려보내면 돼요. 때로는 지쳐도, 하늘이 흐려도.";
}
else if (score >= 77) {
  feelingTitle = "🎧이무진 - 에피소드";
  feelingQuote = "눈 내리던 그 밤 겨울 향이 배어서 더 눈부신, 우리의 에피소드다. 매일이 마지막인 듯이";
}
else if (score >= 74) {
  feelingTitle = "🎧세븐틴 - 청춘찬가";
  feelingQuote = "사무치게 아픈 말 한마디에 내가 더 싫어도, 신경 쓰지 말자 우리 목소리로 어디서라도 부르자";
}
else if (score >= 71) {
  feelingTitle = "🎧루시 - villain";
  feelingQuote = "빛나는 이 세상은 날 초라하게 해. 꼭 눈부신 사람들이 나도 빛나라 해.";
}
else if (score >= 70) {
  feelingTitle = "🎧위클리 - after school";
  feelingQuote = "지금 이 순간은 돌아오지 않아. 여기 눈부시게 반짝이는 걸 모두 담았어 전부 다 찍었어.";
}
else if (score >= 67) {
  feelingTitle = "🎧원필 - 행운을 빌어줘";
  feelingQuote = "아무쪼록 행운을 빌어 줘 내 앞길에 행복을 빌어 줘. 더 나은 내가 되어 있을 테니.";
}
else if (score >= 64) {
  feelingTitle = "🎧데이식스 - 마치 흘러가는 바람처럼";
  feelingQuote = "대단하진 않지만 행복만은 줄 수 있을 거라 생각했는데, 마치 흘러가는 바람처럼.";
}
else if (score >= 61) {
  feelingTitle = "🎧원위 - 한 여름밤의 유성우";
  feelingQuote = "네가 되어 나를 비춰주는구나. 언제까지 너를 보고 있어야 너와 별자리가 될 수 있을까.";
}
else if (score >= 60) {
  feelingTitle = "🎧엔플라잉 - starlight";
  feelingQuote = "진하게 치는 파도 속에 고요하죠. 아름다운 별이 되어서 피어나죠.";
}
else if (score >= 57) {
  feelingTitle = "🎧보이넥스트도어 - i love you";
  feelingQuote = "머리는 붕 떠 부스스해 나 빼고 분주한 창밖은 벚꽃마저 바쁘고 한심하기로 짝이없어.";
} else if (score >= 54) {
  feelingTitle = "🎧온시온 - 우리가 살아가는 방법";
  feelingQuote = "가끔 좋은 것만 보면서 없는 건 투정 부리면서, 같이 행복하면 됐다고 그렇게 살아가자.";
} else if (score >= 51) {
  feelingTitle = "🎧볼빨간 사춘기 - 나만,봄";
  feelingQuote = "벚꽃도 뭐고 다 필요 없어 나는 네 곁에 있고 싶어 딱 붙어서, 다른 사람 다 사라져라.";
} else if (score >= 50) {
  feelingTitle = "🎧데이식스 - afraid";
  feelingQuote = "행복하게 해주지 못할 것 같아서, 나처럼 돼 버릴까 놓을 수도 잡을 수도 없어.";
} else if (score >= 47) {
  feelingTitle = "🎧오혁 - 소녀";
  feelingQuote = "나 항상 그대 곁에 머물겠어요. 떠나지 않아요. 내 곁에만 머물러요 떠나면 안돼요.";
} else if (score >= 44) {
  feelingTitle = "🎧백아 - 첫사랑";
  feelingQuote = "이 시간의 난 너와의 시간을 물 들이고, 첫 사랑이라는 이름으로 지어지나봐.";
} else if (score >= 41) {
  feelingTitle = "🎧손디아 - 어른";
  feelingQuote = "나는 내가 되고 별은 영원히 빛나고 잠들지 않는 꿈을 꾸고 있어. 바보 같은 나는.";
} else if (score >= 40) {
  feelingTitle = "🎧디오 - 괜찮아도 괜찮아";
  feelingQuote = "수많은 별이 그랬듯이 언제나 같은 자리 제 몫의 빛으로 환하게 비출 테니.";
} else if (score >= 37) {
  feelingTitle = "🎧아이오아이 - 소나기";
  feelingQuote = "차디찼던 빗물이 따뜻한 눈물이 되어 흘러내리겠죠. 괜찮아요, 금방 지나갈 소나기죠.";
} else if (score >= 34) {
  feelingTitle = "🎧아이유 - Dear name";
  feelingQuote = "춥고 모진 날 사이로 조용히 잊혀진 네 이름을 알아. 멈추지 않을게 몇 번 이라도 외칠게.";
} else if (score >= 31) {
  feelingTitle = "🎧최유리 - 숲";
  feelingQuote = "나의 눈물 모아 바다로만 흘려보내 나를 다 감추면 기억할게 내가 뭍에 나와있어, 그때 난 숲이려나.";
} else if (score >= 30) {
  feelingTitle = "🎧악동뮤지션 - 그때 그 아이들은";
  feelingQuote = "우리 어린 시절의 간절하고 행복했던 꿈. 너의 두 손에 넘쳐 흘렀던 그 한 움큼은, 꼭 쥐고 살아가길.";
} else if (score >= 27) {
  feelingTitle = "🎧이하이 - 한숨";
  feelingQuote = "숨이 벅차올라도 괜찮아요. 아무도 그댈 탓하진 않아 가끔은 실수해도 돼 누구든 그랬으니까.";
} else if (score >= 24) {
  feelingTitle = "🎧데이먼스 이어 - Salty";
  feelingQuote = "나의 마음속 어딘가 저리죠. 그대 떠난 날 밤에, 아무리 눈을 감아도 난 꿈속으로 도망갈 수 없었네.";
} else {
  feelingTitle = "필링힐링 추천 노래";
  feelingQuote = "오늘 하루, 나를 위한 작은 위로를 찾아보아요.";
}
document.getElementById('feeling-title').innerText = feelingTitle;
document.getElementById('feeling-quote').innerText = feelingQuote;
