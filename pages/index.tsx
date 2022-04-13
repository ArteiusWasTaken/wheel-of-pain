import { NextPage } from 'next'
import { Layout } from '../components/layouts';
import { GetStaticProps } from 'next'
import { championApi } from '../api';
import { ChampionList, SmallChampion } from '../interfaces';
import Champion from '../components/wheel/Champion';
import { Grid } from '@nextui-org/react';
import { Playstyle, Role } from '../components/wheel';

interface Props {
  champions: SmallChampion[];
}
const Home: NextPage<Props> = ({champions}) => {
      
  return (
    
    <Layout title="Listado de pokémon">
      <Grid.Container gap ={3} alignItems='center' justify='center'>
      <Champion champions={champions}/>
      <Role />
      <Playstyle /> 
     </Grid.Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {

  const {data} = await championApi.get<ChampionList>('/champions')  // your fetch function here 
  
  const version = data.results[0].version
  
  const champions: SmallChampion[] = data.results.map(champion => ({
    ...champion,
    img:`https://cdn.communitydragon.org/${champion.version}/champion/${champion.key}/square`
  }))
  
  return {
    props: {
      champions
    }
  }
}

export default Home
