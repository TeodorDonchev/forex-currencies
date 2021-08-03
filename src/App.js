import { useState, useEffect, useRef } from 'react';
import Currencies from './components/Currencies';
import './App.css';

function App() {
  const [base, setBase] = useState('');
  const [currencies, setCurrencies] = useState({});
  let [color, setColor] = useState('green');

  const countRef = useRef(0);

  useEffect(() => {
    const getCurrencies = async () => {
      let fetchedData = await fetchData();

      setBase(fetchedData[0].base);
      setCurrencies(fetchedData[0].rates);

      const interval = setInterval(() => {
        countRef.current += 5;

        if ((countRef.current >= 61 && countRef.current <= 121) 
        || (countRef.current >= 181 && countRef.current <= 241)) {
          lowerRates();
          setColor('red');
        } else {
          riseRates();
          setColor('green');
        }

        if (countRef.current >= 300) {
          clearInterval(interval);
          return;
        }

      }, 5000)
    }

    getCurrencies();
  }, []);

  const lowerRates = () => {

    setCurrencies((prevState) => {
      let newState = Object.assign({}, prevState);

      Object.keys(newState).map(function (key, i) {

        if (newState[key] - 0.0001 < 1.0001) {
          newState[key] = 1.0001;
        } else {
          newState[key] -= 0.0001;
        }
      });

      return newState;
    });
  }

  const riseRates = () => {
    setCurrencies((prevState) => {
      let newState = Object.assign({}, prevState);
      Object.keys(newState).map(function (key, i) {
        newState[key] += 0.0001;
      });
      
      return newState;
    });
  }

  const fetchData = async () => {
    const response = await fetch('http://localhost:5000/currencies');
    const data = await response.json();
    return data;
  }

  return (
    <div className="App">
      <h1>FOREX TRADING</h1>
      <Currencies color={color} base={base} currencies={currencies} />
    </div>
  );
}

export default App;
