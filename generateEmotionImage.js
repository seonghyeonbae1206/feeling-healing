const puppeteer = require("puppeteer");

const [,, name, scoreStr] = process.argv;
const score = parseInt(scoreStr);

if (!name || isNaN(score)) {
  console.log("❗ 사용법: node generateEmotionImage.js [이름] [점수]");
  process.exit(1);
}

function getResultForScore(score) {
  if (score === 24) {
    return {
      image: "https://yourcdn.com/emotion24.png",
      comment: "하..기분 진짜. 된장 고추장 같네. 야 너 이리와봐."
    };
  } else if (score === 27) {
    return {
      image: "https://yourcdn.com/emotion27.png",
      comment: "심호흡 따위 개나 줘버려. 진정되게 생겼어?"
    };
  } else if (score === 30) {
    return {
      image: "https://yourcdn.com/emotion30.png",
      comment: "뭘봐. 기분 안 좋은 사람 처음봐?"
    };
  } else if (score === 31) {
    return {
      image: "https://yourcdn.com/emotion31.png",
      comment: "멍을 때릴까 베개를 때릴까."
    };
  } else if (score === 34) {
    return {
      image: "https://yourcdn.com/emotion34.png",
      comment: "한숨만 나오는데 말 할 힘도 없다 지금.."
    };
  } else if (score === 37) {
    return {
      image: "https://yourcdn.com/emotion37.png",
      comment: "다 깨부순다 아이언맨 빙의한다 팍씨"
    };
  } else if (score === 40) {
    return {
      image: "https://yourcdn.com/emotion40.png",
      comment: "개킹받네 어쩔건데 마인드 좀 형성할게"
    };
  } else {
    return {
      image: "https://yourcdn.com/default.png",
      comment: "기록된 감정이 없어요 😶"
    };
  }
}


const result = getResultForScore(score);

const html = `
  <html>
    <body style="font-family: sans-serif; text-align: center; padding-top: 50px;">
      <h2>${name}님의 감정 점수는 ${score}점!</h2>
      <img src="${result.image}" width="200" />
      <p style="font-size: 18px; margin-top: 20px;">${result.comment}</p>
    </body>
  </html>
`;

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setContent(html);
  await page.setViewport({ width: 800, height: 600 });

  const filename = `result_${name}_${score}.png`;
  await page.screenshot({ path: filename });
  await browser.close();

  console.log(`✅ 이미지 저장 완료: ${filename}`);
})();
