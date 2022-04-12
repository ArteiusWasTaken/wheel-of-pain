import { Button } from '@nextui-org/react';
import { useState } from 'react'
import { Wheel } from 'react-custom-roulette';

const data = [
    { option: "Top" },
    { option: "Jungle" },
    { option: "Mid" },
    { option: "Bot" },
  ];

export const Role = () => {
    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(0);

    const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };
  return (
      <>
    <Wheel
        backgroundColors={["#5500FF", "#ffffff"]}
        textColors={["#ffffff", "#5500FF"]}
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        onStopSpinning={() => {
          setMustSpin(false);
        }}
      />
          <Button onClick={handleSpinClick}> A </Button>

      </>
      
  )
}
