import { useState } from 'react';
import randomColor from 'randomcolor';

export default function App() {
  const initialColor = randomColor();
  const [bgColor, setBgColor] = useState(initialColor);
  const newColor = randomColor();
  console.log(newColor);

  return (
    <div>
      <h1> React Random Color Generator</h1>

      <button
        onClick={() => {
          setBgColor(newColor);
        }}
      >
        Generate
      </button>

      <br />
      <br />
      <div
        style={{
          color: 'black',
          backgroundColor: newColor,
          width: '400px',
          height: '200px',
        }}
      >
        Generated Color: {newColor}
      </div>
    </div>
  );
}
