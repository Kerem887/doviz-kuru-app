import React, { useState } from 'react';
import '../css/currency.css';
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import axios from 'axios';

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_XURFCn0clS9MvrDj8UceJgHjYAJfBsFPyFEFeBXE";

function Currency() {
  
  const [amount, setAmount]  = useState()
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('TRY');
  const [result, setResult] = useState(0);  

  const exchange = async ()=> {
   //  console.log(amount)
   // console.log(fromCurrency)
   // console.log(toCurrency)

   const response =  await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`)
   const result = (response.data.data[toCurrency] * amount).toFixed(2);
   setResult(result);

  }

  return (
    <div className='currency-div'>

       <div> 
  <h3 style={{ marginTop: '-20px', color: 'black', fontWeight: 'bold' }}>
  Döviz Kuru Uygulaması
</h3>



        </div>  
          <div> 
         <input value={amount} onChange={(e) =>setAmount(e.target.value)} type='number' className='amount' />
         <select onChange={(e) => setFromCurrency(e.target.value)} className='from-currency-option'>
         <option>USD</option>
         <option>EUR </option>
         <option>TRY</option>
       </select>

    <FaRegArrowAltCircleRight style={{ fontSize: '30px', marginRight: '10px', position: 'relative', top: '9px' }} />


        <select onChange={(e)=> setToCurrency(e.target.value)} className='to-currency-option'>
        <option>TRY</option>
        <option>USD </option>
        <option>EUR</option>
        </select>

        <input value={result} onChange={(e)=> setResult(e.target.value)} type='number' className='result' />
         </div>

         <div>
            <button onClick={exchange} 
             className='exchange-button '> Çevir</button>
         </div>
    
    </div>
  );
}

export default Currency;
