import { useEffect, useState } from 'react';

const phrases = [
  "Drive Business Growth",
  "Attract Top Talent",
  "Boost Brand Awareness",
  "Maximize Efficiency",
  "Transform Operations",
  "Accelerate Innovation",
  "Enhance Performance"
];

const TYPING_SPEED = 50;
const DELETING_SPEED = 30;
const PAUSE_TIME = 2000;

export const TypeWriter = () => {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const staticText = "for your company using leading technologies.";

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
      if (text === '') {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
        return;
      }

      timeout = setTimeout(() => {
        setText(text.slice(0, -1));
      }, DELETING_SPEED);
    } else {
      if (text === currentPhrase) {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, PAUSE_TIME);
        return;
      }

      timeout = setTimeout(() => {
        setText(currentPhrase.slice(0, text.length + 1));
      }, TYPING_SPEED);
    }

    return () => clearTimeout(timeout);
  }, [text, phraseIndex, isDeleting]);

  return (
    <div className="font-arasaka flex flex-col gap-2">
      <div className="flex items-center">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
          {text}
        </span>
        <span className="animate-pulse ml-1">|</span>
      </div>
      <div className="text-gray-300/90">
        {staticText}
      </div>
    </div>
  );
};