import React from 'react'
import { Link } from 'react-router-dom'
import "./Thankyou.scss"
import { Button } from '@mui/material'
import abi from '../../constants/Survey'
import { ethers } from 'ethers'
const Thankyou = () => {
    return (

        <div className="activities-completed-container">
            <div className='tw-flex  r'>
                <Link className='arrow tw-hidden md:tw-block tw-cursor-pointer tw-self-start tw-p-2' to={`/`}>
                    {/* <ArrowBackIcon /> */}
                </Link>
            </div>
            <div className="completed-activities">
                <img
                    className="completed-img"
                    src={`https://mindler-products-images.imgix.net/confluence/my-activities/completed.svg`}
                    alt="completedimg"
                />
                <h1 className="completed-h1 tw-text-center">
                    Thank you for completing your Survey
                </h1>

                <Link to={'/'} className="btn btn--blue bt-xl book-session">
                    Go back to Home
                </Link> 
                <Button onClick={async () => {
                    const signer = await new ethers.BrowserProvider(window.ethereum).getSigner();
                    const contract = new ethers.Contract("0x8b67753427613DedA7F5e57c356c28c153b26E5b", abi, signer);
                    
                    const response = await contract.fillSurvey(1, Math.floor(Date.now() / 1000) , true);
                    console.log(response);
                }} className="btn btn--blue bt-xl book-session">
                    Redeem Rewards
                </Button> 
            </div>
        </div>
    )
}

export default Thankyou