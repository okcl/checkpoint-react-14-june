import React, { useEffect, useState } from "react";
import "./App.css";


const API = 'https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new';

function NumberComponent() {

    const [number, setNumber] = useState(0);
    
    useEffect(() => {
        fetch(API)
            .then((resolve) => JSON.stringify(resolve))
            .then((result) => {
                setNumber(result);
            });
    }, [])

    const saveToLocal = () => {
        localStorage.setItem("number,", number);
    }

    const loadFromLocal = () => {
        const localNumber = localStorage.getItem(number);
        setNumber(localNumber);
    }

    const isEven = () => {
        if(number%2 !== 0){
            return "red";
        }else{
            return "blue";
        }
    }
    

    
  return <div>
    <p class={isEven()}>{number}</p>
    <button onClick={() => {
        setNumber( number + 1);
    }}>Increment</button>
    <button onClick={saveToLocal()}>Save to LocalStorage</button>
    <button onClick={loadFromLocal()}>Load from LocalStorage</button>

  </div>;
}

export default NumberComponent;
