import { NextPage } from 'next'
import { Layout } from '../components/layouts';
import { GetStaticProps } from 'next'
import { championApi } from '../api';
import { ChampionList, SmallChampion } from '../interfaces';
import { useState } from 'react';
import { Button, Image } from '@nextui-org/react';

interface Props {
  champions: SmallChampion[];
  
}
interface Data {
  option: string;
}

const Home: NextPage<Props> = ({champions}) => {
    
  const [champ, setChamp] = useState("")
  const [visible, setVisible] = useState(false)

  const championNames: string[] = champions
  .map((item) => item.name)
  .filter((rell) => rell !== "Rell");

  const handleSpinClick = () => {
    const newPrizeNumber = championNames[Math.floor(Math.random() * championNames.length)]
    setChamp(newPrizeNumber)
    setVisible(true)
  }

  return (
    
    <Layout title="Listado de pokémon">

      <Button onClick={handleSpinClick}> Champion </Button>

    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {

  const {data} = await championApi.get<ChampionList>('/champions')  // your fetch function here 
  
  const version = data.results[0].version
  
  const champions: SmallChampion[] = data.results.map(champion => ({
    ...champion,
    img:`https://cdn.communitydragon.org/${champion.version}/champion/${champion.key}/square.png`
  }))
  
  return {
    props: {
      champions
    }
  }
}

export default Home
