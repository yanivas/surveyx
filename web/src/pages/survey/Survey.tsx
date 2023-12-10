import React, { useContext } from 'react'
import "./Survey.scss"
import SurveyCards from '../../components/survey-cards/SurveyCards'
import { SURVEY_LIST } from '../../services/SurveryList'
import { UserContext } from '../../App'
import logo from "./../../assets/images/logo.jpeg"

const Survey = () => {
    const userDetails = useContext(UserContext);

    return (
        <div className='survey-container'>
            <header className='tw-m-4 tw-flex tw-justify-between section-heading'>
                <p className='section-heading tw-m-4'>SurveyX </p>
                
                <div className='amount-heading tw-p-4'>
                    <div className='tw-flex'>
                        <p className='section-subheading '>Current Balance: {userDetails?.userDetails.balance}</p>
                        {/* <div className='survey-logo'>
                            <img className='logo' src={`${logo}`}></img>
                        </div> */}
                    </div>

                    <p>Your address: {userDetails?.userDetails.address}</p>
                </div>
            </header>
            <button className='btn btn--blue tw-bottom-4 tw-left-4'>Create Survey</button>
            <br/>
            <p className='section-heading tw-m-4'>Take Survey: </p>
            <div className='card-container tw-grid  tw-gap-4'>
                {SURVEY_LIST.map(s => {
                    return (
                        <SurveyCards {...s} />
                    )
                })}
            </div>

        </div>
    )
}

export default Survey