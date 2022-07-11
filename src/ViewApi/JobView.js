import React,{useState,useEffect} from 'react'
import jobApi from '../api/jobApi'
import JobAdd from './JobAdd'

export default function JobView() {
 const [job,setjob] = useState([])
 const [display,setDisplay] = useState(false)
 const [refresh,setRefresh] = useState(false)
 const [values,setValues] = useState ({
    job_id : undefined,
    job_id : '',
    job_title :'',
    min_salary :'',
    max_salary:''
}) 

    useEffect(() => {
        jobApi.list().then(data => {
            setjob(data)
        })
        setRefresh(false)
    },[refresh])

    const handleOnChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
    }

    const onSubmit = async() => {
        const payload = {
            job_id :   (values.job_id),
            job_title :(values.job_title),
            min_salary :(values.min_salary),
            max_salary:(values.max_salary)
        }
        await jobApi.create(payload)
        .then(()=>{
            setRefresh(true)
            setDisplay(false) 
           window.alert('Data Successfully Insert')
        })
      
    }
    const onDelete = async(id) => {
        jobApi.deleted(id)
        .then(()=>{
            setRefresh(true)
            window.alert('Data Successfully Delete')
        })
    }

  return (
    <div>
        <div>
                <h2>List job</h2>
                <button onClick={() => setDisplay(true)}> Add job </button>
                {
                    display ?
                    <jobAdd
                    onSubmit = {onSubmit}
                    handleOnChange = {handleOnChange}
                    setDisplay = {setDisplay}
                    /> 
                    :
                        <>
                            <table>
                                <th>job ID</th>
                                <th>job title</th>
                                <th>min salary</th>
                                <th>max salary</th>
                                
                                <tbody>
                                    {
                                        job&&job.map( reg => (
                                            <tr key={reg.job_id}>
                                                <td>{reg.job_id}</td>
                                                <td>{reg.job_title}</td>
                                                <td>{reg.min_salary}</td>
                                                <td>{reg.max_salary}</td>
                                                <button onClick={() => onDelete(reg.job_id)}> Delete job </button>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </>
                }
            </div>
    </div>
  )
}
