import React from 'react'

export default function jobAdd(props) {
  return (
    <div>
        <form onSubmit={props.onSubmit}>
            <div>
                <label>job ID: </label>
                <input type="text" placeholder="ID" 
                onChange = {props.handleOnChange('job_id')}/>
            </div>
            <div>
                <label>Job Title: </label>
                <input type="text" placeholder="job title" 
                onChange = {props.handleOnChange('last_name')}/>
            </div>
            <div>
                <label>min salary : </label>
                <input type="text" placeholder="min salary" 
                onChange = {props.handleOnChange('min_salary')}/>
            </div>
            <div>
                <label>max salary: </label>
                <input type="text" placeholder="max salary" 
                onChange = {props.handleOnChange('max_salary')}/>
            </div>
            <div>
                <button type='submit'> Simpan </button>
                <button onClick={()=>props.setDisplay(false)}> Cancel </button>
            </div>
        </form>
    </div>
  )
}
