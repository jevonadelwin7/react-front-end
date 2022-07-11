
import React from 'react'


export default function countryAdd(props) {
  return (
    <div>
        <form onSubmit={props.onSubmit}>
            <div>
                <label>country ID : </label>
                <input type="text" placeholder="country ID" 
                onChange = {props.handleOnChange('country_id')}/>
                
                <div>
                <label>country Name : </label>
                <input type="text" placeholder="country Name" 
                onChange = {props.handleOnChange('country_name')}/>
                </div>
            </div>
            <div>
                <button type='submit'> Simpan </button>
                <button onClick={()=>props.setDisplay(false)}> Cancel </button>
            </div>
        </form>
    </div>
  )
}
