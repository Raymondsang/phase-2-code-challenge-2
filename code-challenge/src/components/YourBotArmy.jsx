import React from 'react';

const YourBotArmy = ({ bots, onRemoveBot, onDischargeBot }) => {
  return (
    <div className="bot-army">
      <h2>Your Bot Army</h2>
      <div>
        {bots.map(bot => (
          <div key={bot.id}>
            <h3 className="text-2xl font-semibold mb-2">{bot.name}</h3>
            <button
              onClick={() => onRemoveBot(bot)}
              aria-label={`Remove ${bot.name}`}
            >
              Remove
            </button>
            <button
              onClick={() => onDischargeBot(bot)}
              aria-label={`Discharge ${bot.name}`}
            >
              Discharge
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourBotArmy;