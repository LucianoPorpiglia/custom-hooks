import { useState } from "react";

export const useCounter = (initialValue = 5) => {

    const [counter, setCounter] = useState(initialValue);
    
    const increment = (value = 1) => {
        setCounter(counter + value);
    }
    const reset = () => {
        setCounter(initialValue); 
    }
    const decrement = (value = 1) => {
        if(counter <= 1) return;
        setCounter(counter - value);
    }

    const multiply = () => {
        setCounter (counter * 2)
    }

    return {
        counter,
        increment,
        reset,
        decrement,
        multiply,
    }
}