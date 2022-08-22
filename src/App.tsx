import React, {useEffect, useState} from 'react';
import './App.css';
import  {CardComponent} from "./components/PokemonCard"
import {HeaderComponent} from "./components/Header"

interface IpokeReturn {
  name: string
  url: string
}

interface IpokemonDatas {
  name: string
  weigth: number
  photo: string
}

function App() {

  const [isPokeArray, setPokeArray] = useState<IpokemonDatas[] | null >()
  const [isMoney, setMoney] = useState<number>(50000)

  const pokeFetch = async () => {

    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
    const data = await response.json()

    let arrayOfPokeURL = data.results.map((pokeData: IpokeReturn) => pokeData.url)

    const fetchedDatas:IpokemonDatas[] = await Promise.all(arrayOfPokeURL.map( async (PokeURL:string) => {
      const resp = await fetch(PokeURL);
      const respJson = await resp.json()
      return {name: respJson.name , weigth: respJson.weight, photo: respJson.sprites.front_default }
    }))

    setPokeArray(fetchedDatas)
  }

  useEffect(() => {
      pokeFetch()

  }, [])
  
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
      </div>
    </div>
  );
}

export default App;
