import React,{useState,useEffect} from 'react'
import dependentApi from '../api/dependentApi'
import DependentAdd from './DependentAdd'

export default function DependentView() {
 const [dependent,setdependent] = useState([])
 const [display,setDisplay] = useState(false)
 const [refresh,setRefresh] = useState(false)
 const [values,setValues] = useState ({
    dependent_id : undefined,
    first_name : '',
    last_name :'',
    relationship:'',
    employee_id:''
}) 

    useEffect(() => {
        dependentApi.list().then(data => {
            setdependent(data)
        })
        setRefresh(false)
    },[refresh])

    const handleOnChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
    }

    const onSubmit = async() => {
        const payload = {
            dependent_name :(values.dependent_name),
            first_name : (values.first_name),
            last_name :(values.last_name),
            relationship:(values.relationship),
            employee_id:(values.employee_id)
        }
        await dependentApi.create(payload)
        .then(()=>{
            setRefresh(true)
            setDisplay(false) 
           window.alert('Data Successfully Insert')
        })
      
    }
    const onDelete = async(id) => {
        dependentApi.deleted(id)
        .then(()=>{
            setRefresh(true)
            window.alert('Data Successfully Delete')
        })
    }

  return (
    <div>
        <div>
                <h2>List dependent</h2>
                <button onClick={() => setDisplay(true)}> Add dependent </button>
                {
                    display ?
                    <DependentAdd
                    onSubmit = {onSubmit}
                    handleOnChange = {handleOnChange}
                    setDisplay = {setDisplay}
                    /> 
                    :
                        <>
                            <table>
                                <th>dependent ID</th>
                                <th>dependent Name</th>
                                
                                <tbody>
                                    {
                                        dependent&&dependent.map( reg => (
                                            <tr key={reg.dependent_id}>
                                                <td>{reg.dependent_id}</td>
                                                <td>{reg.first_name}</td>
                                                <td>{reg.last_name}</td>
                                                <td>{reg.relationship}</td>
                                                <button onClick={() => onDelete(reg.dependent_id)}> Delete dependent </button>
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
