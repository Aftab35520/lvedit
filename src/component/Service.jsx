import React from 'react'
import { Link } from "react-router-dom"
import "../componentStyles/Service.css"
import logo from "../photo/logo.png"
import video from "../video/v.mp4"
import Products from './product'
export default function Service() {
  return (
    <div className='Service'>
      <div className='Service_Nav'>
        <div className='Service_routes'>
          <p children="BrandName"><Link to={"/"} ><img style={{width:"80px",height:"40px"}} src={logo} alt=''/></Link></p>
          <Link  className='FooterRoutes'></Link>
        </div>
        <div className='ServiceAnimation'>
          <video autoPlay loop  muted src={video} height={"100%"} width={"100%"}  />
        </div> 
        <div className='ServiceLatter'>
          <p>We help you in Getting Your Needs</p>
        </div>
      </div>
      <div className='Service_contant'>
          <p className='Service_tag'>Product</p>
            <div className='ServiceGiven'>             
              <div className='ServiceDetails'>
                {
                  Products.map((product,i)=>{
                    return(
                      <div className='ServiceImage ' key={i} onClick={()=>window.location.assign(product.url)}>
                        <img src={product.img} alt=''/>
                      </div>
                    )
                  })
                }
 
              </div>
              
              
            </div>
      </div>

      <p className='FooTer'>Shop Smart, Live Better - <i style={{color:"red"}}>LVE</i>, Always Here for You</p>
      
    </div>
  )
}
