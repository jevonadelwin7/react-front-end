import React from 'react'

export default function LocationAdd(props) {
  return (
    <div>
        <form onSubmit={props.onSubmit}>
            <div>
                <label>Location ID : </label>
                <input type="text" placeholder="Location ID" 
                onChange = {props.handleOnChange('location_id')}/>
            </div>
            <div>
                <label>Street Address : </label>
                <input type="text" placeholder="street address" 
                onChange = {props.handleOnChange('street_address')}/>
            </div>
            <div>
                <label>country ID : </label>
                <input type="text" placeholder="country_id" 
                onChange = {props.handleOnChange('country_id')}/>
            </div>
            <div>
                <button type='submit'> Simpan </button>
                <button onClick={()=>props.setDisplay(false)}> Cancel </button>
            </div>
        </form>
    </div>
  )
}
