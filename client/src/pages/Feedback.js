import { useState } from "react";
// import './App.css';
import { FaCentercode, FaStar } from "react-icons/fa";
import Axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
    
};

function Feedback() {
  let [currentValue, setCurrentValue] = useState(0);
  let [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0)

  const handleClick = (value) => {
    setCurrentValue(value)
    
  }
   
  const handleMouseOver = (newHoverValue) => {
   hoverValue= setHoverValue(newHoverValue)
    
  };

  const handleMouseLeave = () => {
    setHoverValue(0);
  } 
  const handleSubmit=(e)=>{
    e.preventDefault();
    const feedback =e.target.feed.value;
    const address =e.target.address.value;
    const name = e.target.name.value;

    const data={
      name:name,
      star:currentValue,
      address:address,
      feedback:feedback,
    }
    console.log(data);
    Axios.post("/api/feedback/add", data).then(x=>console.log(x)).catch(err=>console.log(err));
    // const instance = Axios.create({
    //   baseURL: 'http://localhost:6000/api/',   
    // });
    // instance.get('requests/all').then(res=>{
    //   console.log(res)
    // }).catch(err=>{
    //   console.log(err);
    // })
    // Axios.get('https://localhost:6000/api/')
    // console.log(first,hoverValue);
    // axios.post('/requests/add',data)
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // // });
    //  Axios.get('/api/requests/all').then((res)=>{
    //   console.log(res)
    //  }).catch((err)=>{
    //   console.log(err)
    //  })
    //  Axios.post('/feedback/all',data).then(function(responce){
    //   console.log(responce)
    //  }).catch(function(error){
    //   console.log(error)
    //  })

   }
   const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    form:{
      display:"flex",
      flexDirection: "column",
      alignItems: "center"
    },
    text: {
      display: "flex",
      flexDirection: "column",
      border: "1px solid #a9a9a9",
      alignItems: "center",
      width: 300,
      padding: 10,
      margin: "20px 0",
      borderRadius: 5,
    },
    textname: {
      display: "flex",
      flexDirection: "column",
      border: "1px solid #a9a9a9",
      alignItems: "center",
      width: 300,
      height:1,
      margin: "20px 0",
      borderRadius: 5,
    },
    stars: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
     
    },
    textarea: {
      display: "flex",
      border: "1px solid #a9a9a9",
      borderRadius: 5,
      padding: 10,
      margin: "20px 0",
      minHeight: 100,
      width: 300,
      alignItems: "center",
    },
    button: {
      border: "1px solid #a9a9a9",
      borderRadius: 5,
      width: 300,
      padding: 10,
      display:"flex",
    },
   }  


  return (
    <div className="">
      <Navbar />
    <div className="flex flex-col justify-center  font-varela ">
      <div className="mx-auto mt-16">

      <form onSubmit={handleSubmit}>
      <h2 className="font-Varela text-3xl text-center mb-8"> Rate our work </h2>
      <div className="flex justify-center">
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
              style={{
                marginRight: 10,
                cursor: "pointer"
              }}
            />
          )
        })}
      </div>

      
      <textarea name="name"
        placeholder="Name"
        style={styles.text}
      />

      <textarea name="address"
        placeholder="Address"
        style={styles.text}
      />

      

      <textarea name="feed"
        placeholder="Tell us your experience?"
        style={styles.textarea}
      />

      <button 
      
        className="mt-10 w-full justify-center bg-[#028187] hover:bg-[#3EA0A4] hover:cursor-pointer text-center text-white  py-2 rounded-xl mx-auto"
      >
        Submit
      </button>
      </form>
      
    </div>
    </div>
    <Footer />
    </div>
  );

};

export default Feedback;
 