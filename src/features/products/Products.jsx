import React from 'react'
import { useDeleteProductMutation, useGetAllProductsQuery, useLazyGetAllProductsQuery } from '../../services/products'
import axios from 'axios'
function Products() {
    var{data,isLoading}=useGetAllProductsQuery();
       var[rfn] = useLazyGetAllProductsQuery();
       var[fn,s] = useDeleteProductMutation();

       function deleteProduct(id){
            fn(id).then((res)=>{
                alert("product deleted")
                rfn();
            })
       }


    // console.log(data)
    // function deleteProduct(id){
    //     axios.delete(`http://localhost:4000/products/${id}`)
    //     .then(()=>{
    //         alert("delete ipai")
    //     })
    // }
    return (
    <div className='mybox'>
        <h1>products</h1>
        {
            isLoading && <img src="https://media4.giphy.com/media/3o7bu3XilJ5BOiSGic/giphy.gif" alt="" />
        }
        {
            data && data.map((product)=>{
                return <li>
                    {product.title}
                    <button onClick={()=>{deleteProduct(product.id)}}>Delete</button>
                       </li>
            })
        }
    </div>
  )
}

export default Products