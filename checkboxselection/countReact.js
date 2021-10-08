import React from 'react'
const CountReact = () => {
const handleIncrease = () =>{
   const [count, setCount] = useState(5);
   const newCount = count + 1;
   setCount(newCount);

  
}

// or shortfrom
const handleIncrease = () => setCount(count + 1);
or
 
   
 


    return ( 
        <>
            <h1>Count:{count}</h1>
            <button onClick={handleIncrease}>Increase Value</button>
            {/* or */}
            <button onClick={() => setCount(count + 1)}>Increase Value</button>
            <button onClick={() => setCount(count - 1)}>Decrease Value</button>
        </>
     );
}
 
export default CountReact;