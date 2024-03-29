import axios from 'axios'
import React, { useState } from 'react'

function AddNewCourtBox() {
  const[courtData,setCourtData] =useState({
    courtName:'',
    location:'',
    address:'',
    mobileNumber:'',
 description:'',

  })
const[selectedImage,setSelectedImage]=useState('')
const[courtPic,setCourtPic] =useState('')

  const handleChange=(e)=>{
setCourtData({...courtData,[e.target.name]:e.target.value
 })
}
const imageChange=(e)=>{
setCourtPic(e.target.files[0])
e.target.files[0]?setSelectedImage(URL.createObjectURL(e.target.files[0])):setSelectedImage(null)
}
 const createCourt=()=>{
  let fileData= new FormData()
  fileData.append('image',courtPic)
  axios.post(`${process.env.REACT_APP_BE_URL}/admin/createCourt`,fileData,{params:courtData},
  {headers:{"content-type":'multipart/form-data'}}).then((res)=>{

  }).catch((err)=>{
    console.log(err)
  })
 }
  return (
    <>
    <div className=' p-2 border border-1 rounded-1 d-flex flex-column text-center'>
      <span className='mt-3'>
        <label htmlFor="courtname">Court Name</label>
      <input type='text' name='courtName' value={courtData.courtName} onChange={handleChange}/>
      </span>
     
      <span className='mt-3'>
      <label htmlFor="location">Location</label>
      <input type='text' name='location' value={courtData.location} onChange={handleChange}/>
      </span>

      <span className='mt-3'>
         <label htmlFor="">Address</label>
      <input type='text' name='address' value={courtData.address} onChange={handleChange}/>
      </span>

      <span className='mt-3'>
      <label htmlFor="">Mobile number</label>
      <input type='number' name='mobileNumber' value={courtData.mobileNumber} onChange={handleChange}/>
</span>

      <span className='mt-3'>
      <label htmlFor="">Description</label>
      <textarea name='description' value={courtData.description} onChange={handleChange}></textarea >
        </span>

        <span className='mt-3'>
      <label htmlFor="">Court Image</label>
      <input type='file' name='courtImage' value={courtData.courtImage} onChange={imageChange}/>
        </span>
        {selectedImage &&<img  src={selectedImage }  alt='' width={100} height={100} />}
        
     
    </div>
    <button onClick={createCourt}>Create Court</button>
    </>
  )
}

export default AddNewCourtBox
