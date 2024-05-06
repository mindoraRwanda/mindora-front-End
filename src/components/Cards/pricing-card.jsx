import React from "react";
import bulletPoint from '../../assets/icons/BulletPoints.png';
import { ClickButton } from "../Buttons/ClickButton";
import PropTypes from 'prop-types'
import { Rotate } from "react-awesome-reveal";
// import { Link } from "react-router-dom";
// import { PaymentPopup } from "../popup/payment-popup";

const PricingCard = ({service, description, amount, feature1, feature2, feature3, feature4, feature5})=>{
    // const[showPayment, setShowPayment] = useState(false)
    //  // Try
    //  const[getInput, setGetInput] = useState('')

    // const ShowPaymentPopup = ()=>{
    //     setShowPayment(showPayment=> !showPayment);
    //     setGetInput(amount);
    // }

       if(!service || !amount || !feature1){
        return null
    }
    return(
        <React.Fragment>
            <div className="w-full">

    
            <Rotate   delay={500}  direction=" top right">
    
                <div id="pricingCare__container" className="  p-6 w-96 flex-col m-auto text-center bg-white shadow-2xl rounded-2xl ">
                    <div className="mb-3">
                        <h1 id="Header--font" className=" text-purple-600 font-primaryFont text-xl font-bold " >{service}</h1>
                        <p className="font text-base-primaryFont">{description} </p>
                    </div>
                    <div className="mt-5 mb-4">
                        <h1 id="Header--font" className=" font-primaryFont font-bold text-4xl"  >${amount}.00 <span className="text-sm font-normal">USD</span></h1>
                        <hr />
                    </div>
                    <div className=" flex-col mb-5">
                        <ul >
                            <h1 id="Header--font" className="font-bold text-xl font-primaryFont">Features</h1>
                            
                            
                            <li className="pricingCard--list"><img src={bulletPoint} alt="" /><p>{feature1}</p></li>
                            <li className="pricingCard--list"><img src={bulletPoint} alt="" /><p>{feature2}</p></li>
                            <li className="pricingCard--list"><img src={bulletPoint} alt="" /><p>{feature3}</p></li>
                            <li className="pricingCard--list"><img src={bulletPoint} alt="" /><p>{feature4}</p></li>
                            <li className="pricingCard--list"><img src={bulletPoint} alt="" /><p>{feature5}</p></li>
                        </ul>
                    </div>
                    <div className="flex mb-6 justify-center">
                    <a href="/therapists-list"> 
                        <ClickButton  Name='Get Started' id='pricingCard--btn'/>
                    </a>
                       
              
                        
                    </div>
                    
                </div>
                </Rotate>
                </div>
        </React.Fragment>
    )
}

PricingCard.proptype ={
    service: PropTypes.string.isRequired,
    description: PropTypes.string,
    amount: PropTypes.number.isRequired,
}

export default PricingCard;