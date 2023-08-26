'use client'
import React, { useEffect, useState } from 'react';

function Flashcard() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [practiceMode, setPracticeMode] = useState(false);
  const [grade, setGrade] = useState(null);
  const [repetition, setRepetition] = useState(0);
  const [easinessFactor, setEasinessFactor] = useState(2.5); // Initial value
  const [currentInterval, setCurrentInterval] = useState(1);
  const [vocab, setVocabList] = useState([])

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
    let newInterval;
    //implement SM2 algorithm here
    if (q === 0) {
      newInterval = 5 * 60 * 1000; // 5 minutes in milliseconds
    } else if (q === 1) {
      newInterval = 10 * 60 * 1000; // 10 minutes in milliseconds
    } else if (q === 2 || q === 3) {
      newInterval = 25 * 60 * 1000; // 25 minutes in milliseconds 
    } else if (q === 4 || q === 5) {
      newInterval = 5 * 24 * 60 * 60 * 1000; // 5 days in milliseconds
    }
    
    //calculate updated easiness factor and interval
    const updatedEF = easinessFactor + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02));
    setEasinessFactor(Math.max(1.3, updatedEF));

    setCurrentInterval(newInterval);
    setRepetition(repetition + 1);
    setGrade(null); //reset grade
    setPracticeMode(false); //exit practice mode

    moveToNextCard();
  };

  useEffect(() => {
    async function fetchData() {
        try {
            const response = await fetch('http://localhost:3000/vocab');
            const data = await response.json();
            setVocabList(data);
        } catch (error) {
            console.error("Error fetching data", error);
        }
    }
    fetchData();
}, []);

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
    <div className='flex flex-col items-center'>
      {practiceMode ? (
        <div className='bg-blue p-4 rounded-lg shadow-md'>
          <p className='text-lg font-semibold mb-4'>Question: {term}</p>
          <p className='text-gray-600'>Answer: {definition}</p>
          <div className='grid grid-cols-3 gap-4 mt-4'>
            {[0, 1, 2, 3, 4, 5].map((q) => (
              <button 
                key={q}
                onClick={() => handlePractice(q)}
                className='py-2 px-4 rounded transition-colors duration-300 hover:text-white border border-green-500 text-green-500 font-semibold'>
                {q}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className='bg-rose-600 p-4 rounded-lg shadow-md'>
          <p className='text-lg font-semibold mb-4'>Question: {vocab[(currentCardIndex) % vocab.length].term} </p>
          <button 
            onClick={() => setPracticeMode(true)}
            className='py-2 px-4 rounded transition-colors duration-300 hover:bg-green-500 hover:text-white border border-green-500 text-green-500 font-semibold'
            >Practice</button>
        </div>
      )}
    </div>
  );
}

export default Flashcard;
