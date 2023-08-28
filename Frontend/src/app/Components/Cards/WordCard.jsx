'use client'
import React from 'react';

//typescript interface
/*interface WordCardProps {
    term: string;
    definition: string;
    pronunciation: string;
}*/

const WordCard = ({ term, definition, pronunciation}) => {
  return (
    <div className='w-full max-w-md mx-auto bg-fuchsia-400 rounded-md shadow:md'>
        <div className='p-4'>
            <h2 className='text-xl font-bold text-lavender-dark'>
                Term: {term}
            </h2>
            <p className='text-gray-500 mb-4'>
                Definition: {definition}
            </p>
            <p className='text-gray-500'>
                Pronunciation: {pronunciation}
            </p>
        </div>
    </div>
  );
}

export default WordCard