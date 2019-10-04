import React, { useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'

function App () {
  const [data, setData] = useState({data: null});
  const [query, setQuery] = useState('ibm');
  const [url, setUrl] = useState(`https://sandbox.iexapis.com/stable/stock/${query}/quote?token=Tpk_14dc380b603b414cb72dc068af927377`);
  const [isLoading, setIsLoading] = useState(false); 
  const [isError, setIsError] = useState(false);

  useEffect( () => {
    const fetchData = async () => {
        setIsLoading(true);
        setIsError(false);
        try {
          const result = await axios(url);
          setData(result.data);
        } catch (error) {
          setIsError(true);
        }
        setIsLoading(false);
    };
    fetchData()
  }, [url])


  return (
    <div>
      <form onSubmit = {event => {setUrl(`https://sandbox.iexapis.com/stable/stock/${query}/quote?token=Tpk_14dc380b603b414cb72dc068af927377`); event.preventDefault();}}>
        <input type="text" value={query} 
        onChange={event => setQuery(event.target.value)} />
        <button type="submit">Submit</button>
      </form>
      {isError && <div>Something went wrong...</div>} 
      {isLoading ? (<div>Loading...</div>) : 
            (<div>{data.name}</div>)}

      Company Name : <div>{data.companyName}</div>
      Ticker Symbol : <div>{data.symbol}</div>
      Latest Price : <div>{data.latestPrice}</div>
    </div>
  );
}

export default App;
