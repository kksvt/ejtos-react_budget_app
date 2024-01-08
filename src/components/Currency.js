import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import './Currency.css'

const Currency = () => {
    const {dispatch, currency } = useContext(AppContext);

    const changeCurrency = (val) => {
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }
    
//$ Dollar,£ Pound,€ Euro,₹ Ruppee
  return (
    <div className="alert alert-success" style={{backgroundColor: "#95e49a", borderColor: "#b6ecb9", color: "#ffffff"}}>Currency {
      <select className="currency-select" defaultValue={currency} name="Currency" id="Currency" onChange={event=>changeCurrency(event.target.value)}>
        <option value="$">$ Dollar</option>
        <option value="£">£ Pound</option>
        <option value="€">€ Euro</option>
        <option value="₹">₹ Ruppee</option>
      </select>	
      }	
    </div>
    );

}

export default Currency;