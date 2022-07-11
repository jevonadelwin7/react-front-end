import React,{useState,useEffect} from 'react'
import locationApi from '../api/locationApi'
import LocationAdd from './LocationAdd'

export default function LocationView() {
 const [location,setlocation] = useState([])
 const [display,setDisplay] = useState(false)
 const [refresh,setRefresh] = useState(false)
 const [values,setValues] = useState ({
    location_id : undefined,
    street_address: '',
    country_id:''

}) 

    useEffect(() => {
        locationApi.list().then(data => {
            setlocation(data)
        })
        setRefresh(false)
    },[refresh])

    const handleOnChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
    }

    const onSubmit = async() => {
        const payload = {
            location_id: (values.location_id), 
            street_address: (values.street_address), 
            country_id: (values.country_id) 
        }
        await locationApi.create(payload)
        .then(()=>{
            setRefresh(true)
            setDisplay(false) 
           window.alert('Data Successfully Insert')
        })
      
    }
    const onDelete = async(id) => {
        locationApi.deleted(id)
        .then(()=>{
            setRefresh(true)
            window.alert('Data Successfully Delete')
        })
    }

  return (
    <div>
        <div>
                <h2>List location</h2>
                <button onClick={() => setDisplay(true)}> Add location </button>
                {
                    display ?
                    <LocationAdd
                    onSubmit = {onSubmit}
                    handleOnChange = {handleOnChange}
                    setDisplay = {setDisplay}
                    /> 
                    :
                        <>
                            <table>
                                <th>location ID</th>
                                <th>street address</th>
                                <tbody>
                                    {
                                        location&&location.map( reg => (
                                            <tr key={reg.location_id}>
                                                <td>{reg.location_id}</td>
                                                <td>{reg.street_address}</td>
                                
                                                <button onClick={() => onDelete(reg.location_id)}> Delete location </button>
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
