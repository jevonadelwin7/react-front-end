import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import countryApi from '../api/countryApi'
import CountryAdd from './CountryAdd'

export default function CountryView() {
 const [country,setcountry] = useState([])
 const [display,setDisplay] = useState(false)
 const [refresh,setRefresh] = useState(false)
 const region_id = useSelector(state => state.region_id)
 const [values,setValues] = useState ({
    country_id : undefined,
    country_name : '',
    region_id : undefined
    
}) 

    useEffect(() => {
        countryApi.list().then(data => {
            setcountry(data)
        })
        setRefresh(false)
    },[refresh])



    const handleOnChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
    }

    const onSubmit = async() => {
        const payload = {
            country_name :   (values.country_name) 
        }
        await countryApi.create(payload)
        .then(()=>{
            setRefresh(true)
            setDisplay(false) 
           window.alert('Data Successfully Insert')
        })
      
    }
    const onDelete = async(id) => {
        countryApi.deleted(id)
        .then(()=>{
            setRefresh(true)
            window.alert('Data Successfully Delete')
        })
    }

  return (
    <div>
        <div>
                <h2>List country</h2>
                <button onClick={() => setDisplay(true)}> Add country </button>
                {
                    display ?
                    <CountryAdd
                    onSubmit = {onSubmit}
                    handleOnChange = {handleOnChange}
                    Region={region_id}
                    setDisplay = {setDisplay}
                    /> 
                    :
                        <>
                            <table>
                                <th>country ID</th>
                                <th>country Name</th>
                                
                                <tbody>
                                    {
                                        country&&country.map( reg => (
                                            <tr key={reg.country_id}>
                                                <td>{reg.country_id}</td>
                                                <td>{reg.country_name}</td>
                                                <td>{reg.region_id}</td>
                                                <button onClick={() => onDelete(reg.country_id)}> Delete country </button>
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
