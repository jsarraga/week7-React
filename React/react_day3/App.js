import React, { Fragment, useState, useEffect } from 'react'
import axios from "axios"



function App () {
    const [data, setData] = useState ({data: null});
    const [query, setQuery] = useState(' '); /* thing we're adding to the endpoint i.e. + ticker */
    const [url, setUrl = useState(" ")]; /* endpoint */
    const [isLoading, setIsLoading] = useState(false); 
    const [isError, setIsError] = useState(false);

    // listens to a state variable and runs anytime the state variable changes 
    useEffect( () => {
        const fetchData = async () => {   // must assign a variable to async fuction in React
            setIsLoading(true); // create a variable. create a function to set. then set with value(true)
            setIsError(false);
            try {
                const result = await axios(url);

                setData(result.data);
            } catch (error) {
                setIsError(true); // setting a state, and passing it a value rather than a k,v pair
            }
            setIsLoading(false);
        };
        fetchData()
    },  [url]) // when dependency: [url] changes, do the function (first part of this) --> useEffect(function, dependency)

    return (
        <Fragment>
            <form onSubmit={event => {setUrl('${query} '); // everytime we submit, we set url, and re-fire useEffect and load again.
            event.preventDefault();}} > 
                <input type="text" value={query}
                onChange={event => setQuery(event.target.value)} />
                <button type="submit">Search</button>
            </form>

            {isError && <div>Something went wrong...</div>} 
            {/* shows one thing or not  */}

            {isLoading ? (<div>Loading...</div>) : 
            (<div>{data.name}</div>)}
            {/* shows one thing or the other */}
        </Fragment>  
    );
}

export default App;