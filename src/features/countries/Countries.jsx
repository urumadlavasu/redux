import React from 'react'
import { useGetAllcountriesQuery } from '../../services/countries'
import { Link, Outlet } from 'react-router-dom'

function Countries() {
    var {isLoading,data} =useGetAllcountriesQuery()
    console.log(isLoading)
  return (
    <div className="mybox">
        <h2>Countries</h2>
        <div style={{display:'flex',flexWrap:"wrap"}}>
        <ul style={{width:"20%"}}>
            {
                isLoading && <img src="https://media4.giphy.com/media/3o7bu3XilJ5BOiSGic/giphy.gif" alt="" />
            }
            {
                data && data.map((country)=>{
                    return <li>
                            <Link to = {`countryDetails/${country.name.common}`}> {country.name.common} </Link>
                        </li>
                })
            }
        </ul>
        <div style={{width:"70%"}}>
        <Outlet></Outlet>
        </div>
        </div>
       
        
    </div>
  )
}

export default Countries