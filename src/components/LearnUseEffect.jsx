// import { useEffect, useState } from "react"

// const LearnUseEffect = () => { // functional component

//     const [count, setCount] = useState(0);// state
//     const [name, setName] = useState('');// state
//     const increment = () => {
//         setCount(count + 1);
//     }

//     // runs when component is mounted(rendered on page) or state and prop changes
//     // useEffect(() => {
//     //     console.log("component rendered count",count);
//     // }); 

//     // runs only when component is mounted(rendered on page) (1st time only)
//     // useEffect(() => {
//     //     console.log("component rendered count",count);
//     // },[]); 

//     // runs only when count state changes
//     //  useEffect(() => {
//     //     console.log("component rendered count",count);
//     // },[count]); // dependency array

//     // runs only when count,name state changes
//     //     useEffect(() => {
//     //        console.log("component rendered count",count);
//     //    },[count,name]); // dependency array


//     // runs only when count,name state changes
//     useEffect(() => {
//         console.log("component rendered count", count);
//         return () => { // cleanup function
//             console.log("component unmounted !");
//         }
//     }, [count, name]); // dependency array

//     return (
//         <>
//             <h1 className="text-center text-3xl">Welcome {name} to Our Website ! Count {count} </h1>

//             <div className="flex justify-center  py-10">
//                 <button onClick={increment} className="bg-purple-500 rounded p-2">increment</button>
//                 <input type="text" onChange={(e) => setName(e.target.value)} />
//                 <button onClick={() => setCount(count - 1)} className="bg-purple-500 rounded p-2 ml-3">decrement</button>
//             </div>
//         </>
//     )
// }

// export default LearnUseEffect

import { useState, useEffect } from 'react';

const LearnUseEffect = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        // Function to update the time
        const updateClock = () => {
            setTime(new Date());
        };

        // Set up the interval to update every second
        const intervalId = setInterval(updateClock, 1000);

        // Cleanup function to clear the interval when the component unmounts
        return () => {
            console.log("clock reseted!");
            clearInterval(intervalId);
        };
    }, []); // Empty dependency array to run the effect only once

    return (
        <div>
            <h1>Current Time</h1>
            <p>{time.toLocaleTimeString()}</p>
        </div>
    );
};

export default LearnUseEffect;
