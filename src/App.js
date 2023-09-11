import { startTransition, useState } from 'react';
import randomColor from 'randomcolor';
import { GetColorName } from 'hex-color-to-color-name';

export default function App() {
  const initialColor = randomColor();
  const [bgColor, setBgColor] = useState(initialColor);
  const newColor = randomColor();
  const colorName = GetColorName(newColor);

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
          backgroundColor: bgColor,
          width: '400px',
          height: '200px',
        }}
      >
        Generated Color: {colorName} {newColor}
      </div>
    </div>
  );
}
