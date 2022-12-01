import { providers } from 'ethers';
import { useState } from 'react'
import {Navbar , Welcome , Footer , Services , Transactions} from './components';
import { ethers } from 'ethers';
import Axios from 'axios';

const App = ()=> {

  const [count, setcount] = useState(0);
  const handleClick= async ()=>{
    let got = "";
    await  Axios.get("/api/rewards/all").then(x=>{
      got=x.data.count
    }).catch(err=>console.log(err))
    setcount(got);
    console.log(got)
  }

    const [accounts, setAccounts] = useState([]);
    const[isConnected , setIsConnected] = useState(false);

    const temp = async() =>{
      const provider = new ethers.providers.Web3Provider(window.ethereum);
     const value =  await provider.getTransactionReceipt("0x89e7c8f1aedc29ea952bbc4e4da69bab3fbd62b46419e2668644cccec5a73c82");
     console.log(value);
    }
    temp();
    
    
 
  return (
    <div className="min-h-screen">
      <div className='gradient-bg-welcome'>
        <Navbar />
      {/* <Navbar accounts ={accounts} setAccounts={setAccounts} isConnected={isConnected} setIsConnected={setIsConnected}/> */}
      <Welcome accounts ={accounts} setAccounts={setAccounts} isConnected={isConnected} setIsConnected={setIsConnected}/>
      </div>
      <Footer />
      {/* <Services /> */}
      {/* <Transactions />
      <Footer /> */}
    </div>
  )
}

export default App;
