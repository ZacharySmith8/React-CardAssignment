
import {useState,useEffect} from 'react';
import axios from "axios";
import pokemon from './pokemonList';
import PlayingCard from './PlayingCard';



function useFlipCard(initialState){
    const [state, setState] = useState(initialState);

    const flip = () => {
        
        setState(oldState => !oldState);
    }
    return [state, flip]
}

function useAxios(url){
    const [state,setState] = useState([]);
    
    const addCard = async (pokemonName) => {
        
        if(pokemon.includes(pokemonName)) {
           
            let card = await axios.get(`${url}/${pokemonName}`)
            setState(state => [...state,card])
        }else{
            let card = await axios.get(url);
            setState(state => [...state,card])
        }
        
        
        
        
    }

  

    return [state,addCard]
}




export  {useAxios,useFlipCard};