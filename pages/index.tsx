import { NextPage } from 'next'
import { Layout } from '../components/layouts';
import { Champion, Playstyle, Role } from '../components/wheel';

const Home: NextPage = () => {
    
  return (
    
    <Layout title="Listado de pokémon">
      
      <Champion />
      <Role />
      <Playstyle />
      
    </Layout>
    
  )
}


export default Home
