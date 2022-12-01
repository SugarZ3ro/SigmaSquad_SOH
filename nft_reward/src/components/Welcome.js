import React from 'react'
// import { AiFillAlipayCircle } from 'react-icons/ai';
import { ethers } from 'ethers';
import { useState } from 'react';
import { SiEthereum } from 'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';
import CharactersNFT from '../CharactersNFT.json';
import WarrantyNFT from '../WarrantyNFT.json';
import RewardCardNFT from '../RewardCardNFT.json'
import Axios from 'axios'

import { Loader } from './';

const commonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const warrantyAddress = '0x2ce7540f52087103646f8A88Ef734E8EFC7Eb14f';
const charactersAddress = '0x7ddF8CaF5c7D0b10Dc236b2b4Bc980898f15E480';
const rewardCardAddress = '0x4994B7B1865677a93F1E428Cb234953f84A4a63E';

const privateKey = process.env.REACT_APP_PRIVATE_KEY;


const provider = new ethers.providers.Web3Provider(window.ethereum);


const warrantyAddressABI = WarrantyNFT.abi;
const CharactersNFTABI = CharactersNFT.abi;
const rewardCardNFTABI = RewardCardNFT.abi;


const WcontractInstance = new ethers.Contract(warrantyAddress, warrantyAddressABI, provider)
const CcontractInstance = new ethers.Contract(charactersAddress, CharactersNFTABI, provider)
const RcontractInstance = new ethers.Contract(rewardCardAddress,rewardCardNFTABI, provider)

async function getGasPrice() {
  let feeData = await provider.getFeeData()
  return feeData.gasPrice
}

async function getWallet(privateKey) {
  const wallet = await new ethers.Wallet(privateKey, provider)
  return wallet
}



async function getNonce(signer) {
  return (await signer).getTransactionCount()
}


const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    value={value}
    onChange={(e) => handleChange(e, name)}
    required
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);



const Welcome = ({ accounts, setAccounts, isConnected, setIsConnected }) => {

  const [count, setcount] = useState(0);
  const handleClick= async ()=>{
    let got = "";
    await  Axios.get("/api/rewards/all").then(x=>{
      got=x.data.count
      
      if(got > 10)  mintRewardCard();
    }).catch(err=>console.log(err))
    setcount(got);
    console.log(got)
  }


  const [isLoading, setIsLoading] = React.useState(false);
  let txHash;
  let blockNo;

  const mintRewardCard = async ()=>{
    try {
      const wallet = getWallet(privateKey)
      const nonce = await getNonce(wallet)
      const gasFee = await getGasPrice()
      let rawTxn = await RcontractInstance.populateTransaction.makeNFT(characterName, warrantyHolderName,productId,recieverAccountAddress, {
        gasPrice: gasFee,
        nonce: nonce
      })
      console.log("...Submitting transaction with gas price of:", ethers.utils.formatUnits(gasFee, "gwei"), " - & nonce:", nonce)
      let signedTxn = (await wallet).sendTransaction(rawTxn)
      let reciept = (await signedTxn).wait()
      if (reciept) {
        txHash = (await signedTxn).hash;
        blockNo = (await reciept).blockNumber;
        console.log("Transaction is successful!!!" + '\n' + "Transaction Hash:", txHash + '\n' + "Block Number:" + blockNo + '\n')
        
        alert("Your Character NFT card has been minted. Please check your Openseas.Testnet account after sometime.")
      } else {
        console.log("Error submitting transaction")
        return;
      }
      
    } catch (e) {
      console.log("Error Caught in Catch Statement: ", e)
      return ;
    }
    
  }


  const [isNewUser, setIsNewUser] = React.useState(true);
  const [characterName, setCharacterName] = React.useState('');
  const [recieverAccountAddress, setRecieverAccountAddress] = React.useState("");
  const [productId, setProductId] = React.useState("");
  const [warrantyHolderName, setWarrantyHolderName] = React.useState('');
  const [characterTokenId, setCharacterTokenId] = React.useState('');


  const connectWallet = async () => {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccounts(accounts);
      setIsConnected(true);
      setRecieverAccountAddress(accounts[0]);
    }
  }

  const handleChange = (event, name) => {
    if (name === 'characterName') setCharacterName(event.target.value);
    if (name === 'recieverAccountAddress') setRecieverAccountAddress(event.target.value);
    if (name === 'productId') setProductId(event.target.value);
    if (name === 'warrantyHolderName') setWarrantyHolderName(event.target.value);
    if (name === 'characterToken') setCharacterTokenId(event.target.value);

  }


  return (
    <div className='flex flex-col w-full justify-center items-center '>
      <div className='flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4'>
        <div className='flex flex-1 justify-start flex-col mf:mr-10'>
          <h1 className='text-3xl sm:text-5xl text-white  py-1 mx-auto  font-Varela'>
             {count} <br /> 
          </h1>
          {/* <p className='text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base'>
            Register your product to get your warranty NFT and your character card. <br /> Gain level points and get amazing offers.
            <br/>Please note that as this is a test webpage , your NFT will decay after 24 hours.
          </p> */}
          {isConnected ? <div

            className=' justify-center items-center my-5 bg-[#2546bd] p-3 rounded-full  opacity-50 disabled'
          >
            <p className='text-white text-base font-semibold '>Wallet Connected</p>
          </div> : <button
            type='button'
            onClick={connectWallet}
            className='flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]'
          >
            <p className='text-white text-base font-semibold '>Connect Wallet</p>
          </button>}

          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
            <div className='flex w-full mb-2'>
              {/* <button
                type="button"
                onClick={() => setIsNewUser(true)}
                className="text-white w-full mt-2 border-[1px] p-2 border-[#70FACB] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
              >
                New User
              </button> */}
              {/* <button
                type="button"
                onClick={() => setIsNewUser(false)}
                className="text-white w-full ml-4 mt-2 border-[1px] p-2 border-[#70FACB] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
              >
                Existing User
              </button>
            </div> */}

              <div>
                <div className="h-[1px] w-full bg-gray-400 my-2" />
                <p className=" bg-transparent text-white font-semibold text-lg mt-1  ">New User :</p>
                <Input placeholder="Level " value={productId} name="productId" type="text" handleChange={handleChange} />
                <Input placeholder="Card Holder Name" value={warrantyHolderName} name="warrantyHolderName" type="text" handleChange={handleChange} />
                <Input placeholder="Card Title" value={characterName} name="characterName" type="text" handleChange={handleChange} />
                <Input placeholder="Reciever account address" value={recieverAccountAddress} name="recieverAccountAddress" type="text" handleChange={handleChange} />
              </div> 
              {/* // <div>
              //   <div className="h-[1px] w-full bg-gray-400 my-2" />
              //   <p className=" bg-transparent text-white font-semibold text-lg mt-1  ">Existing User :</p>
              //   <Input placeholder="Your character NFT token Id" value={characterTokenId} name="characterToken" type="text" handleChange={handleChange} />
              //   <Input placeholder="Warranty Holder Name" value={warrantyHolderName} name="warrantyHolderName" type="text" handleChange={handleChange} />
              //   <Input placeholder="Reciever account address" value={recieverAccountAddress} name="recieverAccountAddress" type="text" handleChange={handleChange} />
              //   <Input placeholder="Product Id" value={productId} name="productId" type="text" handleChange={handleChange} />
              // </div>} */}

            <div className="h-[1px] w-full bg-gray-400 my-2" />

            <p className="text-white font-semibold text-lg mt-1"></p>

            {isLoading
              ? <Loader />
              : (
                <button
                  type="button"
                  onClick={isNewUser ? mintRewardCard : mintRewardCard}
                  className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                >
                  Mint Rewards NFT
                </button>
              )}

          </div>
          </div>
          </div>
          </div>
          <button
                  type="button"
                  onClick={handleClick}
                  className="text-white w-full mt-2 border-[1px] p-2  border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                >
                  Get Count
                </button>
          </div>
                    


         
          
        
  )
}

export default Welcome
