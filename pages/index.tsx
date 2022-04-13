import { NextPage } from "next";
import { Layout } from "../components/layouts";
import { GetStaticProps } from "next";
import { championApi } from "../api";
import { ChampionList, SmallChampion } from "../interfaces";
import { useState } from "react";
import { Button, Grid } from "@nextui-org/react";
import { dataRole, dataPLaystyle } from "../components/wheel";
import { SimpleCard } from "../components/ui";
interface Props {
  champions: SmallChampion[];
}

const Home: NextPage<Props> = ({ champions }) => {
  const [champ, setChamp] = useState("");
  const [champImg, setChampImg] = useState("");
  const [role, setRole] = useState("");
  const [roleImg, setroleImg] = useState("");
  const [playStyle, setPlayStyle] = useState("");
  const [playStyleImg, setplayStyleImg] = useState("");

  const handleSpinClick = () => {
    const ran = Math.floor(Math.random() * champions.length);
    const role = dataRole[Math.floor(Math.random() * dataRole.length)];
    const playstyle =
      dataPLaystyle[Math.floor(Math.random() * dataPLaystyle.length)];
    setChamp(champions[ran].name);
    setChampImg(champions[ran].img);
    setRole(role.option);
    setPlayStyle(playstyle.option);
    setroleImg(role.img);
    setplayStyleImg(playstyle.img);
  };

  return (
    <Layout title="Wheel of Pain!">
      <Grid.Container
        style={{
          display: "flex",
          width: "50%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {champ !== "" ? (
          <>
            <SimpleCard img={champImg} text={champ} />
            <SimpleCard img={roleImg} text={role} />
            <SimpleCard img={playStyleImg} text={playStyle} />
          </>
        ) : (
          <h1>Aqui no hay nada</h1>
        )}

        <Button
          ghost
          shadow
          color="gradient"
          size="lg"
          onClick={handleSpinClick}
        >
          Champion
        </Button>
      </Grid.Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await championApi.get<ChampionList>("/champions"); // your fetch function here

  const version = data.results[0].version;

  const champions: SmallChampion[] = data.results.map((champion) => ({
    ...champion,
    img: `https://cdn.communitydragon.org/${champion.version}/champion/${champion.key}/square.png`,
  }));

  return {
    props: {
      champions,
    },
  };
};

export default Home;
