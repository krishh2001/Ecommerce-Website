import React, { useEffect, useState } from 'react'
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import Footerr from './Footerr';
export default function Electronics() {
  const[apidata,setdata]=useState([])
  useEffect(()=>
  {
    getData()
  },[])
  async function getData()
  {
    var result =await fetch("https://fakestoreapi.com/products/category/electronics")
    var data=await result.json()
    setdata(data)
    console.log(result)
    console.log(data)
  }
  return (
    <div>
     <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
      {
        apidata.map((item)=>
        <MDBCol>
        <MDBCard>
          <center>

          <MDBCardImage
            src={item.image } style={{width:"150px",height:"150px"}}
            alt='...'
            position='top'
            />
            </center>
          <MDBCardBody>

            <MDBCardTitle>{item.title}</MDBCardTitle>
            <MDBCardTitle style={{color:'#7234ef'}}>Rs.{item.price*80}</MDBCardTitle>
            <MDBCardTitle style={{color:'maroon'}}>{item.category}</MDBCardTitle>
            <MDBCardTitle style={{color:'green'}}>{item.rating.rate}*</MDBCardTitle>
            <MDBCardText>
             {item.description}
             {/* This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer. */}
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
        )
      }
      
    </MDBRow>
    <Footerr></Footerr>
    </div>
  )
}
