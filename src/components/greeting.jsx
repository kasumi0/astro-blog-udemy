import { useState } from "preact/hooks";

export const Greeting = ({ messages }) => {
  const [greeting, setGreeting] = useState(messages[0])
  const setRandMessage = () => {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    setGreeting(randomMessage);
  };

  return (
    <div>
      <h3>{greeting}！訪問いただきましてありがとうございます！</h3>
      <button onClick={setRandMessage}>新しい挨拶</button>
    </div>
  );
};
