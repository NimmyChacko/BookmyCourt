
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axiosInstance from '../../config/AxiosInstance';
import MainNavbar from '../../components/Navbar/MainNavbar';
import './CourtDetails.css'

function CourtDetails() {
    const{id} =useParams();
    useEffect(()=>{
        getCourtDatabyId()
    },[])

    const[court,setCourt]=useState({})
    const getCourtDatabyId=()=>{
        axiosInstance.get('/users/getCourtDatabyId',{params:{id}}).then((res)=>{
setCourt(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }
    
  return (
    <>
  <MainNavbar/>
    <div className='courtDetails-container'>
        <img src={`${process.env.REACT_APP_BE_URL}/images/${court.courtPic}`} alt=''/>

    <div>{court.courtName}</div> 
      
    </div>
    </>
  )
}

export default CourtDetails
