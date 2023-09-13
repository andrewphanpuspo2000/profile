import React, { useEffect, useState } from 'react';

const TypewriterEffect = ({ text,speed }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    },speed?speed: 100); 

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, text]);

  return <p>{displayedText}</p>;
};

export default TypewriterEffect;
