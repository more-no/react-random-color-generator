import { useState } from 'react';
import randomColor from 'randomcolor';

export default function App() {
  const initialColor = randomColor();
  const [bgColor, setBgColor] = useState(initialColor);
  const [hexColor, setHexColor] = useState('red');
  const newColor = randomColor();
  let userWidth = '400';
  let userHeight = '200';

  const handlePrompt = () => {
    const userHue = window.prompt('Hue:');
    const userLuminosity = window.prompt('Luminosity:');

    if (userLuminosity != null && userHue != null) {
      const userColor = randomColor({
        luminosity: userLuminosity,
        hue: userHue,
      });
      setHexColor(userColor);
    }
  };

  const handleSizePrompt = () => {
    userWidth = window.prompt('Width: ');
    userHeight = window.prompt('Height: ');
  };

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
        Generated Color: {bgColor}
      </div>
      <br />

      <button
        onClick={() => {
          handlePrompt();
          handleSizePrompt();
        }}
      >
        Choose color and size
      </button>
      <br />
      <br />
      <div
        style={{
          color: 'black',
          backgroundColor: hexColor,
          width: `${userWidth}px`,
          height: `${userHeight}px`,
        }}
      >
        User Color: {hexColor}
      </div>
    </div>
  );
}
