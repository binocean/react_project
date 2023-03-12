import { useState } from 'react';

const Workbench: React.FC = () => {
  const [text, setText] = useState('123');
  return (
    <>
      <div>{text}</div>
      <button onClick={() => setText('456')}>change</button>
    </>
  );
};

export default Workbench;
