import { useContext } from "react";
import {CounterContext} from '../context/CounterContext'

export const useCounterContext = () => {
  const context = useContext(CounterContext)

  //motivos: código de contexto errado, algum bug na criação. Para Devs

  if(!context){
    console.log("Contexto não encontrado!")
    
  }
  return context;
}