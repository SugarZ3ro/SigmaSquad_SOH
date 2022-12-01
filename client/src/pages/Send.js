import { useState } from "react";

import Axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";








const Send = () => {
    const [message, setMessage] = useState("");

    const handleChange = (e)=>{
        setMessage(e.target.value);
        console.log(e.target.value);
    }

    const send=()=>{
        Axios.post("/api/mail/send",{message:message}).then(x=>{
            console.log(x);
          }).catch(x=>{
            console.log(x);
          })
    }

  return (
    <div>
      <Navbar />
      <div className='flex mx-auto mt-20  font-Varela w-4/5'>
        <div className='mx-auto w-full'>
      <h1 className=' font-Varela text-3xl text-center' >
        Send mails
      </h1>

      <form c>
        <div className="mt-10 ">
          <textarea
            className="h-1/2 font-sans w-full m-10  focus:outline-none p-10 rounded-xl bg-[#F1FBF9] mb-4"
            placeholder="Enter the message"
            type="text"
            onChange={handleChange}
            value={message}
          />
          

        </div>
        
        <div className="mt-10 bg-[#028187] hover:bg-[#3EA0A4] hover:cursor-pointer text-center mx-auto  text-white w-1/4 py-2 rounded-xl" onClick={send}>
          Generate
        </div>
      
    </form>
      </div>
    </div>
      <Footer />
    </div>
  )
}

export default Send
