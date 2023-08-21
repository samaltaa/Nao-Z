'use client'
import React, { useEffect, useState } from 'react';

function Flashcard() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [practiceMode, setPracticeMode] = useState(false);
  const [grade, setGrade] = useState(null);
  const [repetition, setRepetition] = useState(0);
  const [easinessFactor, setEasinessFactor] = useState(2.5); // Initial value
  const [currentInterval, setCurrentInterval] = useState(1);
  const [vocab, setVocab] = useState([])

  //handle moving to the next card after practicing 
  const moveToNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex+1)%vocab.length);
    setPracticeMode(false);
    setGrade(null);
    setRepetition(0);
    setCurrentInterval(1);
  };

  //handle practicing the current card
  const handlePractice =(q)=> {
    //implement SM2 algorithm here
    if (q >= 3) {
        const updatedInterval = repetition === 0 ? 1: currentInterval * easinessFactor;
        setCurrentInterval(Math.round(updatedInterval));
        setRepetition(repetition + 1);
    } else{
        setRepetition(0);
        setCurrentInterval(1);
    }
    //calculate updated easiness factor and interval
    const updatedEF = easinessFactor + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02));
    setEasinessFactor(Math.max(1., updatedEF));

    setGrade(null); //reset grade
    setPracticeMode(false); //exit practice mode

    moveToNextCard();
  };

  useEffect(() => {
    async function fetchVocab() {
        try{
            const response = await fetch('/api/getVocabulary');
            if (!response.ok){
                throw new Error(`fetch error: ${response.status}-${response.statusText}`)
            }
            const data = await response.json();
            setVocab(data)
        } catch (error) {
            console.error('error fetching vocabulary', error);
        }
    }
    fetchVocab();
  },[])

  if (vocab.length === 0){
    return <div className='fixed inset-0 flex items-center justify-center z-50'>
      <div className='bg-black bg-opacity-75 absolute inset-0'> 
      <div className='bg-white p-6 rounded-lg shadow-lg z-10'>
        <div className="text-center">
          <p className="text-xl font-semibold mb-4">Loading</p>
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 mx-auto"></div>
        </div>
      </div>
      </div>
    </div>
  }

  const { term, definition } = vocab[currentCardIndex];

  return (
    <div>
      {practiceMode ? (
        <div>
          <p>Question: {term}</p>
          <p>Answer: {definition}</p>
          <button onClick={() => handlePractice(0)}>0</button>
          <button onClick={() => handlePractice(1)}>1</button>
          <button onClick={() => handlePractice(2)}>2</button>
          <button onClick={() => handlePractice(3)}>3</button>
          <button onClick={() => handlePractice(4)}>4</button>
          <button onClick={() => handlePractice(5)}>5</button>
        </div>
      ) : (
        <div>
          <p>Question: {term}</p>
          <button onClick={() => setPracticeMode(true)}>Practice</button>
        </div>
      )}
    </div>
  );
}

export default Flashcard;
