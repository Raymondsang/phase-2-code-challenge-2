import React, { useState } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import BotCard from './components/BotCard';


import axios from 'axios';

const App = () => {
  const [army, setArmy] = useState([]);

  const handleAddBot = (bot) => {
    if (!army.some(b => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const handleRemoveBot = (bot) => {
    setArmy(army.filter(b => b.id !== bot.id));
  };

  const handleDischargeBot = (bot) => {
    axios.delete(`http://localhost:3000/bots/${bot.id}`)
      .then(() => {
        setArmy(army.filter(b => b.id !== bot.id));
      })
      .catch(error => console.error('Error discharging bot:', error));
  };

  return (
    <div>
      <h1>Bot Battlr</h1>
      <div> 
        <BotCollection onAddBot={handleAddBot} />
        <YourBotArmy
          bots={army}
          onRemoveBot={handleRemoveBot}
          onDischargeBot={handleDischargeBot}
        />
      </div>
    </div>
  );
};

export default App;