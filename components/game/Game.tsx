import { Grid } from "@nextui-org/react";
import { NextPage } from "next"
import { SmallChampion } from "../../interfaces";
import { Role, Playstyle } from "../wheel";
import Champion from "../wheel/Champion";

interface Props {
    champions: SmallChampion[];
  }
export const Game: NextPage<Props> = ({champions}) => {
  return (
    <Grid.Container gap ={3} alignItems='center' justify='center'>
      <Champion champions={champions}/>
      <Role />
      <Playstyle /> 
     </Grid.Container>
  )
}
