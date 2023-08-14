'use client'
import React, { useState } from 'react';

function Flashcard({ question, answer }) {
  const [practiceMode, setPracticeMode] = useState(false);
  const [grade, setGrade] = useState(null);
  const [repetition, setRepetition] = useState(0);
  const [easinessFactor, setEasinessFactor] = useState(2.5); // Initial value
  const [interval, setInterval] = useState(1);

  const handlePractice = (q) => {
    if (q >= 3) {
      if (repetition === 0) {
        setInterval(1);
      } else if (repetition === 1) {
        setInterval(6);
      } else {
        setInterval(Math.round(interval * easinessFactor));
      }
      setRepetition(repetition + 1);
    } else {
      setRepetition(0);
      setInterval(1);
    }

    const updatedEF = easinessFactor + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02));
    setEasinessFactor(Math.max(1.3, updatedEF)); // Easiness factor should be at least 1.3

    setGrade(null); // Reset grade
    setPracticeMode(false); // Exit practice mode
  };

  return (
    <div>
      {practiceMode ? (
        <div>
          <p>Question: {question}</p>
          <p>Answer: {answer}</p>
          <button onClick={() => handlePractice(0)}>0</button>
          <button onClick={() => handlePractice(1)}>1</button>
          <button onClick={() => handlePractice(2)}>2</button>
          <button onClick={() => handlePractice(3)}>3</button>
          <button onClick={() => handlePractice(4)}>4</button>
          <button onClick={() => handlePractice(5)}>5</button>
        </div>
      ) : (
        <div>
          <p>Question: {question}</p>
          <button onClick={() => setPracticeMode(true)}>Practice</button>
        </div>
      )}
    </div>
  );
}

export default Flashcard;
