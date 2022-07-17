import React, { useState, useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { GetRegionRequest,DelRegionRequest } from '../Redux-saga/Action/RegionAction'

export default function Region() {
    const dispatch = useDispatch()
    const {regions} = useSelector(state => state.regionStated)
    
    useEffect(() => {
        dispatch(GetRegionRequest())
    }, [])

    const onDelete = async (id) =>{
        dispatch(DelRegionRequest(id))
    }

    return (
        <div class="container">
            <h2 class="">List of Regions</h2>
            <button type="button" class="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 mt-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline">
        Add Region
      </button>
            <table class="rounded-lg overflow-hidden sm:shadow-lg my-5">
                <thead class="text-white bg-teal-400 ">
                <th class="p-3 text-left">Region ID</th>
					<th class="p-3 text-left">Region Name</th>
					<th class="p-3 text-left" width="110px">Actions</th>
                </thead>
                <tbody>
                    {
                        regions && regions.map(regi => {
                            return (
                                <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                                    <td class="border-grey-light border hover:bg-gray-100 p-3 text-center">{regi.region_id}</td>
                                    <td class="border-grey-light border hover:bg-gray-100 p-3">{regi.region_name}</td>
                                    <td class="border-grey-light border hover:bg-gray-100 p-3  text-red-400 hover:text-red-600 hover:font-medium cursor-pointer"><button onClick={()=>{
                                        if(window.confirm('Delete this record')) {
                                            onDelete(regi.region_id)
                                        }
                                    }}>Delete</button></td> 
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}