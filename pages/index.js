
import { useState } from 'react'

const questions = [
  {
    question: "Q1. 드라이버가 전략 실수로 우승을 놓쳤을 때, 너는?",
    options: [
      { text: "아… 진짜 속상하다. 오늘 너무 잘했는데…", type: "F" },
      { text: "전략 타이밍 실수야. 다음엔 보완 가능하겠네.", type: "T" },
    ],
  },
  {
    question: "Q2. 휠투휠 배틀 장면을 볼 때, 너는?",
    options: [
      { text: "으아아아 대박!! 지금 눈빛 봐ㅠㅠ", type: "F" },
      { text: "DRS 구간, 타이어 온도 계산까지 완벽했네.", type: "T" },
    ],
  },
  {
    question: "Q3. 경기 후 다시 보는 영상은?",
    options: [
      { text: "팀 라디오/감정선 하이라이트", type: "F" },
      { text: "전략 분석/피트 타이밍 비교 영상", type: "T" },
    ],
  },
  {
    question: "Q4. 팀에 대한 너의 응원 태도는?",
    options: [
      { text: "잘하든 못하든 내 팀이지. 무조건 사랑.", type: "F" },
      { text: "좋아하지만 잘못하면 비판도 필요하지.", type: "T" },
    ],
  },
  {
    question: "Q5. 경기 예측을 할 때, 너는?",
    options: [
      { text: "그냥 느낌이 좋아! 감이 와!", type: "F" },
      { text: "서킷 특성과 타이어 전략을 고려해서 예측함.", type: "T" },
    ],
  },
  {
    question: "Q6. 드라이버가 무전으로 감정을 드러낼 때 너의 반응은?",
    options: [
      { text: "같이 울고 같이 화남. 이건 내 감정도 됨.", type: "F" },
      { text: "감정도 이해는 하지만, 팀과의 소통이 더 중요하지.", type: "T" },
    ],
  },
  {
    question: "Q7. 피트 전략이 어긋났을 때, 어떤 걸 먼저 생각해?",
    options: [
      { text: "아… 드라이버 멘탈 괜찮을까…", type: "F" },
      { text: "왜 그 타이밍에 들어갔는지부터 분석함", type: "T" },
    ],
  },
  {
    question: "Q8. 경기 중 사고가 나면?",
    options: [
      { text: "심장이 덜컥. 드라이버 무사하길 먼저 빔", type: "F" },
      { text: "세이프티카 나오는 타이밍, 전략 변화 먼저 떠올림", type: "T" },
    ],
  },
  {
    question: "Q9. 드라이버를 좋아하는 이유는?",
    options: [
      { text: "그의 서사, 감정 표현, 인간적인 면", type: "F" },
      { text: "냉정한 실력과 일관된 전략 수행 능력", type: "T" },
    ],
  },
  {
    question: "Q10. 레이스가 끝났을 때 가장 먼저 하는 생각은?",
    options: [
      { text: "와… 감정선 대폭발. 여운 남음…", type: "F" },
      { text: "누가 무슨 전략으로 이겼는지 복기 시작!", type: "T" },
    ],
  },
]

export default function Home() {
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState({ F: 0, T: 0 })
  const [result, setResult] = useState("")

  const handleAnswer = (type) => {
    const updated = { ...score, [type]: score[type] + 1 }
    setScore(updated)

    if (index + 1 === questions.length) {
      const fRatio = updated.F / questions.length
      if (fRatio >= 0.7) setResult("F:T = 70:30 – 감정선 몰입형 팬 (FFLA)")
      else if (fRatio >= 0.5) setResult("F:T = 60:40 – 감정몰입형 전략분석가 (FTLA)")
      else if (fRatio >= 0.3) setResult("F:T = 40:60 – 분석 중심의 공감형 팬 (TFLA)")
      else setResult("F:T = 30:70 – 냉정한 전략 중심 팬 (TTLA)")
    } else {
      setIndex(index + 1)
    }
  }

  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
      {!result ? (
        <div>
          <h2 style={{ fontSize: 24, fontWeight: 'bold' }}>{questions[index].question}</h2>
          <div style={{ marginTop: 20 }}>
            {questions[index].options.map((opt, i) => (
              <button key={i} onClick={() => handleAnswer(opt.type)} style={{ display: 'block', margin: '10px 0', padding: '10px', width: '100%' }}>
                {opt.text}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 28 }}>🎉 결과 도착!</h2>
          <p style={{ fontSize: 20 }}>{result}</p>
          <p style={{ marginTop: 20, fontSize: 14, color: '#888' }}>※ 이 테스트는 재미용입니다 :)</p>
        </div>
      )}
    </div>
  )
}
