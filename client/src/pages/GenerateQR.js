import React from 'react'
import { useState } from 'react';
import QRCode from 'react-qr-code'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const GenerateQR = (props) => {

    const [pid,setPid] =  useState('');
    const [pCompany,setPCompany] = useState('');
    const [pType,setPType] =useState('');
    const[formData ,setFormData] = useState(undefined);
    const[qrValue,setQrValue] = useState('');

    const handlePid = event => {
        setPid(event.target.value);
      };

      const handleCompany = event => {
        setPCompany(event.target.value);
      };
      const handlePtype = event => {
        setPType(event.target.value);
      };
     
      const handleSubmit=()=>{
            const fd ={
                pid: pid,
                pCompany:pCompany,
                pType:pType
            }

            setFormData(fd);

            const st=JSON.stringify(fd);
            console.log(st);
            // console.log("fd :"+formData);
            const qrLink =`http://localhost:6000/api/verify?pid=${pid}&pCompany=${pCompany}&pType=${pType}`
            setQrValue(qrLink);
      }
      


      

  return (
<>
<Navbar />
    <div className=' mt-20 flex  font-Varela w-4/5'>
        <div className='ml-40'>
      <h1 className=' font-Varela text-3xl ' >
        Generate QR
      </h1>

      <form className="">
        <div className="mt-10">
          <label >
            Product type:
          <input
            onChange={handlePtype}
            className="h-1/2 font-sans ml-20 focus:outline-none p-2 rounded-xl bg-[#F1FBF9] mb-4"
            placeholder="Enter the product Type"
            type="text"
            value={pType}
            
          />
          </label>
          <label className='mr-12'>
           Product UID :
          <input
            onChange={handlePid}
            className="h-1/2 ml-20 font-sans bg-[#F1FBF9]  focus:outline-none p-2 rounded-xl  mb-4"
            placeholder="Enter the product Type"
            type="text"
            value={pid}
            autoFocus={true}
          />
          </label>
          <label >
            Producer Company:
          <input
            onChange={handleCompany}
            className="h-1/2 font-sans mx-4  focus:outline-none p-2 rounded-xl  bg-[#F1FBF9] mb-4"
            placeholder="Enter the product Type"
            type="text"
            value={pCompany}
            autoFocus={true}
          />
          </label>
        </div>
        
        <div className="mt-10 bg-[#028187] hover:bg-[#3EA0A4] hover:cursor-pointer text-center text-white w-1/4 py-2 rounded-xl" onClick={handleSubmit}>
          Generate
        </div>
      </form>
      </div>
      <div className='qr ml-40'>
        <QRCode value={qrValue} />
      </div>
    </div>
    <Footer />
    </>
  )
}

export default GenerateQR
