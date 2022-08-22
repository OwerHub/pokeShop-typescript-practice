import React, { useEffect, useState } from "react";
import "./App.css";
import { CardComponent } from "./components/PokemonCard";
import { HeaderComponent } from "./components/Header";

interface IpokeReturn {
  name: string;
  url: string;
}

interface IpokemonDatas {
  name: string;
  weigth: number;
  photo: string;
}

interface IneighbourURL {
  prev?: string 
  next?: string
}

function App() {
  const [isPokeArray, setPokeArray] = useState<IpokemonDatas[] | null>();
  const [isMoney, setMoney] = useState<number>(50000);
  const [isActualURL, setActualURL] = useState<string>("https://pokeapi.co/api/v2/pokemon?limit=10")
  const [isNeighbourURL, setNeighbourURL] =  useState<IneighbourURL>()


  const buyedaPokemon = (name:string) => {

    // delete a pokemon from isPokeArray
    // add pokemon to OwnPokeArray

      // + pokeFetch verify the same pokemons in OwnPokeArray and isPokearray
  } 


  const pokeFetch = async () => {
    const response = await fetch(isActualURL);
    const data = await response.json();


    // I could merge this lines, but I need them later
    setNeighbourURL(prevState=>({...prevState,  next: data.next}) )
    setNeighbourURL(prevState=>({...prevState,  prev: data.previous}) )

    let arrayOfPokeURL = data.results.map(
      (pokeData: IpokeReturn) => pokeData.url
    );

    const fetchedDatas: IpokemonDatas[] = await Promise.all(
      arrayOfPokeURL.map(async (PokeURL: string) => {

        const resp = await fetch(PokeURL);
        const respJson = await resp.json();
        
        return {
          name: respJson.name,
          weigth: respJson.weight,
          photo: respJson.sprites.front_default,
        };
      })
    );

    setPokeArray(fetchedDatas);
  };

  useEffect(() => {
    pokeFetch();
  }, [isActualURL]);

  return (
    <div className="App">
      <HeaderComponent
        money={isMoney}
        changePrice={(isMoney) => setMoney(isMoney)}
      />

      <div className="pokeshop">
        <h2>PokeShop</h2>
        <div className="cardContainer">
          {isPokeArray?.map((pokemon, iterator) => (
            <CardComponent
              key={`card${iterator}`}
              name={pokemon.name}
              weigth={pokemon.weigth}
              photo={pokemon.photo}
              money={isMoney}
              changePrice={(isMoney) => setMoney(isMoney)}
            />
          ))}
        </div>
        <div className="pageButtons">
          {isNeighbourURL?.prev && 
            <button onClick={()=>setActualURL(isNeighbourURL.prev as string)}> previous</button>
          }
          {isNeighbourURL?.next && 
            <button onClick={()=>setActualURL(isNeighbourURL.next as string) } > Next</button>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
