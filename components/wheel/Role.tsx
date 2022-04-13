import { Button } from '@nextui-org/react';
import { useState } from 'react'
import { Wheel } from 'react-custom-roulette';

const data = [
    { option: "Top" },
    { option: "Jungle" },
    { option: "Mid" },
    { option: "Bot" },
  ];
  
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
  const newPrizeNumber = Math.floor(Math.random() * data.length);
  setPrizeNumber(newPrizeNumber);
  setMustSpin(true);
};

export const Role = () => {
    
  return (
    <>
        <Wheel
            backgroundColors={["#8C4B12", "#054956"]}
            textColors={["#fff", "#fff"]}
            outerBorderColor={"#071726"}
            radiusLineColor={"#071726"}
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={data}
            onStopSpinning={() => {
              setMustSpin(false);
            }}
          />
          <Button onClick={handleSpinClick}> Role </Button>
      </>
      
  )
}
