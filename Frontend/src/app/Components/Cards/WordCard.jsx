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
    <div className='w-full  bg-yellow-400 rounded-md shadow:md p-9'>
        <div className='p-4'>
            <h2 className='text-xl font-bold text-lavender-dark pb-4'>
                Term: {term}
            </h2>
            <p className='text-white mb-4'>
                Definition: {definition}
            </p>
            <p className='text-white'>
                Pronunciation: {pronunciation}
            </p>
        </div>
    </div>
  );
}

export default WordCard