
// import { Link } from "react-router-dom";
// import {ImFacebook,ImInstagram,ImTwitter,ImYoutube} from "react-icons/im";
  const Navbar = ()=> {
      return ( 
      <header className="bg-[#F1FBF9] opacity-90  top-0 z-50">
        <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
        <div className="shrink w-80  sm:order-2">
         <div className="font-bold text-2xl font-Varela focus:no-underline hover:">Mo Swaccha Rajya</div> 
        </div>
        {/* <div className="w-92 order-3 flex justify-center mr-6">
            <div className="flex gap-6 font-Varela"> */}
             
              {/* <Link to="/qr"  style={{ textDecoration: 'none' }}>QR</Link>
            {/* <a href={'/'}>QR</a> */}
            {/* <Link to="/maps"  style={{ textDecoration: 'none' }}>Mapping</Link>
            <Link to="/feedback"  style={{ textDecoration: 'none' }}>Feedback</Link>
            <Link to="/"  style={{ textDecoration: 'none' }}>Services</Link>
            <Link to="/"  style={{ textDecoration: 'none' }}>Rewards</Link>
            <Link to="/"  style={{ textDecoration: 'none' }}>Login</Link> */}
           
            {/* </div>  */}
        </div>
    
    </header>
    )
  }

  export default Navbar ;