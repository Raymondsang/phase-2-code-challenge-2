import React from 'react';

const BotCard = ({ bot, onAddBot }) => {
  return (
    <div className="bots">
      <h2>{bot.name}</h2>
      <p>{bot.description}</p>
      <button
        onClick={() => onAddBot(bot)}
        
      >
        Add to Army
      </button>
    </div>
  );
};

export default BotCard;