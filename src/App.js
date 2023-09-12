import { useState } from 'react';
import randomColor from 'randomcolor';

export default function App() {
  const initialColor = randomColor();
  const [bgColor, setBgColor] = useState(initialColor);
  const [hexColor, setHexColor] = useState('red');
  const newColor = randomColor();

  let userHue = null;
  let userLuminosity = null;
  let userColor = null;

  const handlePrompt = () => {
    userHue = window.prompt('Hue:');
    userLuminosity = window.prompt('Luminosity:');

    if (userLuminosity != null && userHue != null) {
      userColor = randomColor({
        luminosity: userLuminosity,
        hue: userHue,
      });
      setHexColor(userColor);
    }
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
          width: '400px',
          height: '200px',
        }}
      >
        User Color: {hexColor}
      </div>
    </div>
  );
}
