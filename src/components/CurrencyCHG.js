import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const CurrencyCHG = () => {
    const {dispatch,currency } = useContext(AppContext);
   function setCurrencey(cur)
   {
    dispatch({
        type: 'CHG_CURRENCY',
                payload: cur,
    })
   }
    return (
        <div  className='alert alert-secondary'>
                  <select className="input-group-text" Style={{color:"green"}} id="inputGroupSelect01" onChange={(event) => setCurrencey(event.target.value)}>
                       <option value='$' selected={currency==='$'}  data-prefix='+44' >$ Dollar</option>
                        <option value='£' selected={currency==='£'}  >£ Pound</option>
                        <option value='€'  selected={currency==='€'} >€ Euro</option>
                        <option value='₹'  selected={currency==='₹'} >₹ Ruppee</option>
                  </select>
        </div>
    );
};

export default CurrencyCHG;
