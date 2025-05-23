import { useState, useEffect } from 'react';
import styles from './KahootApp.module.css';
import questions from '../../../questions.js';

export default function KahootApp() {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [showAnswers, setShowAnswers] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [questionDelay, setQuestionDelay] = useState(10);
  const [answerDelay] = useState(2);
  const [timerId, setTimerId] = useState(null);

  useEffect(() => {
    if (currentIndex >= 0 && countdown > 0) {
      const id = setTimeout(() => setCountdown(countdown - 1), 1000);
      setTimerId(id);
    } else if (countdown === 0 && currentIndex >= 0) {
      setShowAnswers(true);
      const nextId = setTimeout(() => {
        setShowAnswers(false);
        setCurrentIndex(prev => prev + 1);
        setCountdown(questionDelay);
      }, answerDelay * 1000);
      setTimerId(nextId);
    }
    return () => clearTimeout(timerId);
  }, [countdown, currentIndex]);

  const handleStart = () => {
    setCurrentIndex(0);
    setCountdown(questionDelay);
    setShowAnswers(false);
  };

  const currentQuestion = questions[currentIndex];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Кахут</h1>

      {currentIndex === -1 ? (
        <div>
          <label>
            ⏱ Встановити таймер (сек):
            <input
              type="number"
              min="1"
              value={questionDelay}
              onChange={e => setQuestionDelay(parseInt(e.target.value) || 1)}
              className={styles.input}
            />
          </label>
          <button className={styles.startBtn} onClick={handleStart}>
            Старт
          </button>
        </div>
      ) : currentQuestion ? (
        <div>
          <div className={styles.timer}>⏱ Залишилось: {countdown} сек</div>
          <div className={styles.quizBlock}>
            <div className={styles.questionBox}>
              <div className={styles.question}>{currentQuestion.question}</div>
              <ul className={styles.answers}>
                {currentQuestion.answers.map((a, i) => (
                  <li
                    key={i}
                    className={`${styles.answer} ${
                      showAnswers && a.correct ? styles.correct : ''
                    }`}
                  >
                    {a.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h2>Кінець!</h2>
        </div>
      )}
    </div>
  );
}
