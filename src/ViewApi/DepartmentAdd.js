import React from 'react'

export default function departmentAdd(props) {
  return (
    <div>
        <form onSubmit={props.onSubmit}>

            <div>
                <label>Department Name : </label>
                <input type="text" placeholder="department name" 
                onChange = {props.handleOnChange('department_name')}/>
            </div>
            <div>
                <label>Location ID : </label>
                <input type="text" placeholder="Location ID" 
                onChange = {props.handleOnChange('location_id')}/>
            </div>
            <div>
                <button type='submit'> Simpan </button>
                <button onClick={()=>props.setDisplay(false)}> Cancel </button>
            </div>
        </form>
    </div>
  )
}
