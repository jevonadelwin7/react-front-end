import React,{useState,useEffect} from 'react'
import departmentApi from '../api/departmentApi'
import DepartmentAdd from './DepartmentAdd'

export default function DepartmentView() {
 const [department,setdepartment] = useState([])
 const [display,setDisplay] = useState(false)
 const [refresh,setRefresh] = useState(false)
 const [values,setValues] = useState ({
    department_id : undefined,
    department_name : '',
    location_id :''
}) 

    useEffect(() => {
        departmentApi.list().then(data => {
            setdepartment(data)
        })
        setRefresh(false)
    },[refresh])

    const handleOnChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
    }

    const onSubmit = async() => {
        const payload = {
            department_name :   (values.department_name) ,
            location_id: (values.location_id)
        }
        await departmentApi.create(payload)
        .then(()=>{
            setRefresh(true)
            setDisplay(false) 
           window.alert('Data Successfully Insert')
        })
      
    }
    const onDelete = async(id) => {
        departmentApi.deleted(id)
        .then(()=>{
            setRefresh(true)
            window.alert('Data Successfully Delete')
        })
    }

  return (
    <div>
        <div>
                <h2>List department</h2>
                <button onClick={() => setDisplay(true)}> Add department </button>
                {
                    display ?
                    <DepartmentAdd
                    onSubmit = {onSubmit}
                    handleOnChange = {handleOnChange}
                    setDisplay = {setDisplay}
                    /> 
                    :
                        <>
                            <table>
                                <th>department ID</th>
                                <th>department Name</th>
                                
                                <tbody>
                                    {
                                        department&&department.map( reg => (
                                            <tr key={reg.department_id}>
                                                <td>{reg.department_id}</td>
                                                <td>{reg.department_name}</td>
                                                <button onClick={() => onDelete(reg.department_id)}> Delete department </button>
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
