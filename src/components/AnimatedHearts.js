import React from 'react';
import './AnimatedHearts.css'; // We'll create this CSS file

const AnimatedHearts = () => {
  // Generate an array of hearts
  const hearts = Array.from({ length: 20 }, (_, i) => i);

  return (
    <div className="animated-hearts">
      {hearts.map((heart) => (
        <div
          key={heart}
          className="heart"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${5 + Math.random() * 5}s`,
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
};

export default AnimatedHearts;