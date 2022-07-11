import React from 'react'

export default function dependentAdd(props) {
  return (
    <div>
        <form onSubmit={props.onSubmit}>
            <div>
                <label>first Name: </label>
                <input type="text" placeholder="first Name" 
                onChange = {props.handleOnChange('first_name')}/>
            </div>
            <div>
                <label>last Name: </label>
                <input type="text" placeholder="last Name" 
                onChange = {props.handleOnChange('last_name')}/>
            </div>
            <div>
                <label>Relationship : </label>
                <input type="text" placeholder="Relationship" 
                onChange = {props.handleOnChange('relationship')}/>
            </div>
            <div>
                <label>employee ID: </label>
                <input type="text" placeholder="employee ID" 
                onChange = {props.handleOnChange('employee_id')}/>
            </div>
            <div>
                <button type='submit'> Simpan </button>
                <button onClick={()=>props.setDisplay(false)}> Cancel </button>
            </div>
        </form>
    </div>
  )
}
