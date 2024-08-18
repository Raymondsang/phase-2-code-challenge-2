
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BotCard from './BotCard';

const BotCollection = ({ onAddBot }) => {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/bots')
      .then(response => setBots(response.data))
      .catch(error => console.error('Error fetching bots:', error));
  }, []);

  return (
    <div className="collection">
      {bots.map(bot => (
        <BotCard key={bot.id} bot={bot} onAddBot={onAddBot} />
      ))}
    </div>
  );
};

export default BotCollection;


