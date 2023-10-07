import React from 'react'
import { useGetAllProductsQuery } from '../../services/products'

function Products() {
    var{data,isLoading}=useGetAllProductsQuery()
  return (
    <div className='mybox'>
        <h1>products</h1>
        {
            isLoading && <img src="https://media4.giphy.com/media/3o7bu3XilJ5BOiSGic/giphy.gif" alt="" />
        }
        {
            data && data.map((product)=>{
                return <li>{product.title}</li>
            })
        }
    </div>
  )
}

export default Products