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
        <div>
            <div className='row'>
            <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                    <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="inputGroupSelect01">Currency</label>
                  </div>
                  <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setCurrencey(event.target.value)}>
                       <option value='$' >$ Dollar</option>

                        <option value='£'  >£ Pound</option>
                        <option value='€'  >€ Euro</option>
                        <option value='₹'  >₹ Ruppee</option>

                       
                  </select>
                 
                </div>
                </div>
        </div>
    );
};

export default CurrencyCHG;
