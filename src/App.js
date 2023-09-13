import { useState } from 'react';
import randomColor from 'randomcolor';
import { Div, Div1 } from './components';

export default function App() {
  const initialColor = randomColor();
  const [bgColor, setBgColor] = useState(initialColor);
  const [hexColor, setHexColor] = useState('red');
  const [userWidth, setUserWidth] = useState('400');
  const [userHeight, setUserHeight] = useState('200');
  const newColor = randomColor();

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
    setUserWidth(window.prompt('Width: '));
    setUserHeight(window.prompt('Height: '));
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
      <Div backgroundColor={bgColor}>Generated Color: {bgColor}</Div>
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
      <Div1
        backgroundColor={hexColor}
        width={`${userWidth}px`}
        height={`${userHeight}px`}
      >
        User Color: {hexColor}
      </Div1>
    </div>
  );
}
