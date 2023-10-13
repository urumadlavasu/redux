import { useFormik } from 'formik';
import React from 'react'
import { useAddProductMutation } from '../../services/products';

function AddProduct() {
   var [addFn] = useAddProductMutation()
const productForm = useFormik({
    initialValues:{
    "title": "",
    "price": 0,
    "description": "",
    "category": "",
    "image": "",
    "rating": {
        "rate": 0,
        "count": 0
      }
    },
   onSubmit: (values)=>{
       addFn(values).then(()=>{alert("product added success")})
   }
})
  return (
    <div className='mybox'>
        <h1>AddProduct</h1>
        <form onSubmit={productForm.handleSubmit}>
        <input type="title" placeholder='title' name="title" onChange={productForm.handleChange} onBlur={productForm.handleBlur} />
        <br />
        <input type="title" placeholder='price' name="price" onChange={productForm.handleChange} onBlur={productForm.handleBlur} />
        <br />
        <input type="title" placeholder='description' name="description" onChange={productForm.handleChange} onBlur={productForm.handleBlur} />
        <br />
        <input type="title" placeholder='category' name="category" onChange={productForm.handleChange} onBlur={productForm.handleBlur} />
        <br />
        <input type="title" placeholder='image' name="image" onChange={productForm.handleChange} onBlur={productForm.handleBlur} />
       <br />
        <button>Add Product</button>
        </form>
    </div>
  )
}

export default AddProduct