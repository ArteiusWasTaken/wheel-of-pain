import { Button } from '@nextui-org/react';
import React, { useState } from 'react'
import { Wheel } from 'react-custom-roulette';

const data = [
  { option: "Fighter" },
  { option: "Marksman" },
  { option: "Lethality" },
  { option: "Mage" },
  { option: "Tank" },
  { option: "Support" },
  { option: "On-Hit" },
  { option: "Predator" },
];  

const [mustSpin, setMustSpin] = useState(false);
const [prizeNumber, setPrizeNumber] = useState(0);

const handleSpinClick = () => {
const newPrizeNumber = Math.floor(Math.random() * data.length);
setPrizeNumber(newPrizeNumber);
setMustSpin(true);
};

export const Playstyle = () => {

return (
    <div>
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
            <Button onClick={handleSpinClick}> Playstyle </Button>
    </div>
    
)
}
