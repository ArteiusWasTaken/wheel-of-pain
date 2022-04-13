import { NextPage } from "next";
import { SmallChampion } from "../../interfaces";
import { useState } from "react";
import { Wheel } from "react-custom-roulette";
import { Button } from "@nextui-org/react";

interface Props {
  champions: SmallChampion[];
}

interface Data {
  option: string;
}

const Champion: NextPage<Props> = ({ champions }) => {
  const championNames: string[] = champions
    .map((item) => item.name)
    .filter((rell) => rell !== "Rell");

  const data: Data[] = championNames.map((item) => ({
    option: item,
  }));

  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  return (
    <div>
      <Wheel
        backgroundColors={["#8C4B12", "#054956"]}
        textColors={["#fff", "#fff"]}
        outerBorderColor={"#071726"}
        radiusLineColor={"#071726"}
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        fontSize={5}
        data={data}
        onStopSpinning={() => {
          setMustSpin(false);
        }}
      />
      <Button onClick={handleSpinClick}> Champion </Button>
    </div>
  );
};

export default Champion;
