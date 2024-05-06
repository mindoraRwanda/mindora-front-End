import React from "react";
// import {MdOutlineCancel} from 'react-icons/md'
import VisaCard from '../../assets/images/visaCard.png'
import Paypal from '../../assets/images/Paypal.png'
import MasterCard from '../../assets/images/MasterCard.png'
import { ClickButton } from "../Buttons/ClickButton";






export const PaymentCard = ({Money})=>{
    // const [removePayment, setRemovePayment] = useState(false)

    // const RemovePaymentCard = ()=>{
    //     setRemovePayment(!removePayment)

    // }
    
    return(
        <React.Fragment>
            <div className={`md:container-full w-full md:w-[700px] justify-center items-center  overflow-hidden md:border `}>
                    <div className=" w-full bg-white shadow-lg rounded-md flex-col items-center justify-center">
                        {/* <div className="flex w-full bg-brandColor rounded-md p-3 sm:p-5 px-4 sm:px-8 shadow-md  justify-between items-center text-center">
                            <h1 className="text-white text-xl font-primaryFont ">Payment Method</h1>
                            <MdOutlineCancel onClick={RemovePaymentCard} className=" hover:text-white cursor-pointer transition delay-100 duration-300 w-[25px] h-[25px] text-brownColor"/>
                        </div> */}
                        <form className="flex-col  flex gap-8 w-full px-4 py-2 sm:p-8">
                            {/* Email Input */}
                            <div className=" flex flex-col gap-4 sm:flex sm:flex-row text-start sm:text-center sm:items-center  justify-between">
                                <label className="  text-lg"  htmlFor="emailInput">Email:</label>
                                <input className=" py-4 sm:py-2 px-4 border md:border-2 rounded-md outline-none w-full sm:w-[70%] "   type="Email" id="emailInput" placeholder="tryy@gmail.com" />
                            </div>
                            {/* Phone Input */}
                            <div className=" flex flex-col gap-4 sm:flex sm:flex-row text-start sm:text-center sm:items-center  justify-between">
                                <label className="  text-lg" htmlFor="phoneInput">Phone:</label>
                                <input className=" py-4 sm:py-2 px-4 border md:border-2 rounded-md outline-none w-full sm:w-[70%] "   type="tel" id="phoneInput" placeholder="0#######" />
                            </div>
                            {/* Date of Birthday */}
                            <div className=" flex flex-col gap-4 sm:flex sm:flex-row text-start sm:text-center sm:items-center  justify-between">
                                <label className=" text-lg" htmlFor="birthDate">Date of Birth:</label>
                                <input className=" py-4 sm:py-2 px-4 border md:border-2 rounded-md outline-none w-full sm:w-[70%] "   type="date" id="birthDate" placeholder="Enter DOB" />
                            </div>
                            {/* Gender */}
                            <div className=" flex flex-col gap-4 sm:flex sm:flex-row text-start sm:text-center sm:items-center  justify-between">
                                <label className="text-lg" >Gender:</label>
                                <div className=" flex sm:flex sm:flex-row flex-col w-full sm:w-[70%]  gap-2">
                                    <div className="flex items-center gap-2">
                                          <input name="gender" type="radio" class=" checked:bg-brandColor" />
                                        <label>Female</label>  
                                    </div>
                                    <div className="flex items-center gap-2">
                                          <input name="gender" type="radio" class=" checked:bg-brandColor" />
                                        <label>Male</label>  
                                    </div>
                                </div>
                                
                            </div>
                            {/* Type of Counceling */}
                            <div className=" flex flex-col gap-4 sm:flex sm:flex-row text-start sm:text-center sm:items-center  justify-between">
                                <label className="text-lg" >Type of Therapy:</label>
                                <div className="flex sm:flex sm:flex-row flex-col w-full sm:w-[70%]  gap-2">
                                    <div className="flex items-center gap-2">
                                          <input type="radio" name="therapy" class=" checked:bg-brandColor" />
                                        <label>Couple</label>  
                                    </div>
                                    <div className="flex items-center gap-2">
                                        {/*   <input type="radio" class=" checked:bg-brandColor" /> */}
                                        <input type="radio" name="therapy" class=" checked:bg-brandColor" />
                                        <label>Individual</label>  
                                    </div>
                                    <div className="flex items-center gap-2">
                                          <input type="radio" name="therapy" class=" checked:bg-brandColor" />
                                        <label>Children </label>  
                                    </div>
                                </div>
                                
                            </div>
                            {/* Therapy Session Package */}
                            <div className=" flex flex-col gap-4 sm:flex sm:flex-row text-start sm:text-center sm:items-center  justify-between">
                                <label className=" text-lg " htmlFor="method">Session Package:</label>
                                <div className="flex w-full sm:w-[70%] justify-between ">
                                        <select className="py-16 sm:py-2 px-4 border md:border-2 rounded-md outline-none w-[70%] "   name="paymentMethod" id="method">
                                            <option selected disabled value="method">Select a Package</option>
                                            <option value="Weekly"> Weekly </option>
                                            <option value="Monthly">Monthly</option>
                                            <option value="Yearly">Yearly</option>  
                                    </select>
                                    <div className=" flex-col  flex items-start justify-start gap-1 ">
                                        <input className="py-4 sm:py-2 px-4 w-24 border md:border-2 text-sm rounded-md outline-none "   type="number" id="duration" placeholder="qty" />
                                    </div>
                                </div>
                               
                            </div>
                            {/* Date of Appointment */}
                            <div className=" flex flex-col gap-4 sm:flex sm:flex-row text-start sm:text-center sm:items-center  justify-between">
                                <label className="  text-lg" htmlFor="appointmentDate">Appointment Date:</label>
                                <input className=" py-4 sm:py-2 px-4 border md:border-2 rounded-md outline-none w-full sm:w-[70%] "   type="date" id="appointmentDate" placeholder="Enter DOB" />
                            </div>
                            {/* Time of Appointment */}
                            <div className=" flex flex-col gap-4 sm:flex sm:flex-row text-start sm:text-center sm:items-center  justify-between">
                                <label className="  text-lg" htmlFor="method">Time of Session:</label>
                                <div className="flex justify-between w-[70%] ">
                                    <div className=" w-[40%] flex flex-col  sm:flex sm:flex-col gap-4 text-start sm:text-center sm:items-start  justify-start">
                                         <label  htmlFor="appointmentDate">Start Time:</label>
                                        <input className=" py-4 sm:py-2 px-4 border md:border-2 rounded-md outline-none w-full sm:w-[100%] "   type="time" id="appointmentDate" placeholder="Enter DOB" />
                                    </div>
                                        <div className=" flex w-[40%] flex-col sm:flex sm:flex-col gap-4 text-start sm:text-center sm:items-start  justify-start">
                                             <label  htmlFor="appointmentDate">End Time:</label>
                                            <input className=" py-4 sm:py-2 px-4 border md:border-2 rounded-md outline-none w-full sm:w-[100%] "   type="time" id="appointmentDate" placeholder="Enter DOB" />
                                        </div>
                                </div>
                                   
                            </div>
                            <hr />
                            <h2 className="items-cetner text-brandColor flex justify-center text-2xl font-bold">Payment</h2>
                            {/* Payment Section */}
                            <div className=" flex flex-col gap-4 sm:flex sm:flex-row text-start sm:text-center sm:items-center  justify-between">
                                <label className=" text-lg" htmlFor="cardNumber">Card Number:</label>
                                <input className=" py-4 sm:py-2 px-4 border md:border-2 rounded-md outline-none w-full sm:w-[70%] "   type="text" id="cardNumber" placeholder="enter card#" />
                            </div>
                            <div className=" flex flex-col gap-4 sm:flex sm:flex-row text-start sm:text-center sm:items-center  justify-between">
                                <label className=" text-lg" htmlFor="cardExpiration">Expiration:</label>
                                <input className="py-4 sm:py-2 px-4 border md:border-2 rounded-md outline-none w-full sm:w-[70%] "   type="date" id="cardExpiration" placeholder="enter expiration date" />
                            </div>
                            <div className=" flex flex-col gap-4 sm:flex sm:flex-row text-start sm:text-center sm:items-center  justify-between">
                                <label className=" text-lg" htmlFor="cardCVS"> CVS:</label>
                                <input className="py-4 sm:py-2 px-4 border md:border-2 rounded-md outline-none w-full sm:w-[70%] "   type="text" id="cardCVS" placeholder="enter card cvs" />
                            </div>
                            <div className=" flex flex-col gap-4 sm:flex sm:flex-row text-start sm:text-center sm:items-center  justify-between">
                                <label className=" text-lg " htmlFor="Amount">Amount:</label>
                                <input className="py-4 sm:py-2 px-4 border md:border-2 rounded-md outline-none w-full sm:w-[70%] "  value={`$${Money} USD`}  type="text" id="Amount" placeholder="enter amount" onChange={(e)=> e.target.value} />
                            </div>
                            <div className=" flex flex-col gap-4 sm:flex sm:flex-row text-start sm:text-center sm:items-center  justify-between">
                                <label className="  text-lg" htmlFor="method">Method:</label>
                               <select className="py-16 sm:py-2 px-4 border md:border-2 rounded-md outline-none w-full sm:w-[70%] "   name="paymentMethod" id="method">
                                    <option selected disabled value="method">select payment method</option>
                                    <option value="Visa Card"> <img src={VisaCard} alt="" /> Visa Card </option>
                                    <option value="Paypal"><img src={Paypal} alt="" />Paypal</option>
                                    <option value="Master Card"><img src={MasterCard} alt="" />Master Card</option>
                                    
                               </select>
                            </div>
                            <div className=" flex flex-col gap-4 sm:flex sm:flex-row text-start sm:text-center sm:items-center  justify-between">
                            <label className=" text-lg" htmlFor="country">Country</label>
                            <select className="py-16 sm:py-2 px-4 border md:border-2 rounded-md outline-none w-full sm:w-[70%] "   id="country" name="country">
                                    <option>select country</option>
                                    <option value="AF">Afghanistan</option>
                                    <option value="AX">Aland Islands</option>
                                    <option value="AL">Albania</option>
                                    <option value="DZ">Algeria</option>
                                    <option value="AS">American Samoa</option>
                                    <option value="AD">Andorra</option>
                                    <option value="AO">Angola</option>
                                    <option value="AI">Anguilla</option>
                                    <option value="AQ">Antarctica</option>
                                    <option value="AG">Antigua and Barbuda</option>
                                    <option value="AR">Argentina</option>
                                    <option value="AM">Armenia</option>
                                    <option value="AW">Aruba</option>
                                    <option value="AU">Australia</option>
                                    <option value="AT">Austria</option>
                                    <option value="AZ">Azerbaijan</option>
                                    <option value="BS">Bahamas</option>
                                    <option value="BH">Bahrain</option>
                                    <option value="BD">Bangladesh</option>
                                    <option value="BB">Barbados</option>
                                    <option value="BY">Belarus</option>
                                    <option value="BE">Belgium</option>
                                    <option value="BZ">Belize</option>
                                    <option value="BJ">Benin</option>
                                    <option value="BM">Bermuda</option>
                                    <option value="BT">Bhutan</option>
                                    <option value="BO">Bolivia</option>
                                    <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                                    <option value="BA">Bosnia and Herzegovina</option>
                                    <option value="BW">Botswana</option>
                                    <option value="BV">Bouvet Island</option>
                                    <option value="BR">Brazil</option>
                                    <option value="IO">British Indian Ocean Territory</option>
                                    <option value="BN">Brunei Darussalam</option>
                                    <option value="BG">Bulgaria</option>
                                    <option value="BF">Burkina Faso</option>
                                    <option value="BI">Burundi</option>
                                    <option value="KH">Cambodia</option>
                                    <option value="CM">Cameroon</option>
                                    <option value="CA">Canada</option>
                                    <option value="CV">Cape Verde</option>
                                    <option value="KY">Cayman Islands</option>
                                    <option value="CF">Central African Republic</option>
                                    <option value="TD">Chad</option>
                                    <option value="CL">Chile</option>
                                    <option value="CN">China</option>
                                    <option value="CX">Christmas Island</option>
                                    <option value="CC">Cocos (Keeling) Islands</option>
                                    <option value="CO">Colombia</option>
                                    <option value="KM">Comoros</option>
                                    <option value="CG">Congo</option>
                                    <option value="CD">Congo, Democratic Republic of the Congo</option>
                                    <option value="CK">Cook Islands</option>
                                    <option value="CR">Costa Rica</option>
                                    <option value="CI">Cote D'Ivoire</option>
                                    <option value="HR">Croatia</option>
                                    <option value="CU">Cuba</option>
                                    <option value="CW">Curacao</option>
                                    <option value="CY">Cyprus</option>
                                    <option value="CZ">Czech Republic</option>
                                    <option value="DK">Denmark</option>
                                    <option value="DJ">Djibouti</option>
                                    <option value="DM">Dominica</option>
                                    <option value="DO">Dominican Republic</option>
                                    <option value="EC">Ecuador</option>
                                    <option value="EG">Egypt</option>
                                    <option value="SV">El Salvador</option>
                                    <option value="GQ">Equatorial Guinea</option>
                                    <option value="ER">Eritrea</option>
                                    <option value="EE">Estonia</option>
                                    <option value="ET">Ethiopia</option>
                                    <option value="FK">Falkland Islands (Malvinas)</option>
                                    <option value="FO">Faroe Islands</option>
                                    <option value="FJ">Fiji</option>
                                    <option value="FI">Finland</option>
                                    <option value="FR">France</option>
                                    <option value="GF">French Guiana</option>
                                    <option value="PF">French Polynesia</option>
                                    <option value="TF">French Southern Territories</option>
                                    <option value="GA">Gabon</option>
                                    <option value="GM">Gambia</option>
                                    <option value="GE">Georgia</option>
                                    <option value="DE">Germany</option>
                                    <option value="GH">Ghana</option>
                                    <option value="GI">Gibraltar</option>
                                    <option value="GR">Greece</option>
                                    <option value="GL">Greenland</option>
                                    <option value="GD">Grenada</option>
                                    <option value="GP">Guadeloupe</option>
                                    <option value="GU">Guam</option>
                                    <option value="GT">Guatemala</option>
                                    <option value="GG">Guernsey</option>
                                    <option value="GN">Guinea</option>
                                    <option value="GW">Guinea-Bissau</option>
                                    <option value="GY">Guyana</option>
                                    <option value="HT">Haiti</option>
                                    <option value="HM">Heard Island and Mcdonald Islands</option>
                                    <option value="VA">Holy See (Vatican City State)</option>
                                    <option value="HN">Honduras</option>
                                    <option value="HK">Hong Kong</option>
                                    <option value="HU">Hungary</option>
                                    <option value="IS">Iceland</option>
                                    <option value="IN">India</option>
                                    <option value="ID">Indonesia</option>
                                    <option value="IR">Iran, Islamic Republic of</option>
                                    <option value="IQ">Iraq</option>
                                    <option value="IE">Ireland</option>
                                    <option value="IM">Isle of Man</option>
                                    <option value="IL">Israel</option>
                                    <option value="IT">Italy</option>
                                    <option value="JM">Jamaica</option>
                                    <option value="JP">Japan</option>
                                    <option value="JE">Jersey</option>
                                    <option value="JO">Jordan</option>
                                    <option value="KZ">Kazakhstan</option>
                                    <option value="KE">Kenya</option>
                                    <option value="KI">Kiribati</option>
                                    <option value="KP">Korea, Democratic People's Republic of</option>
                                    <option value="KR">Korea, Republic of</option>
                                    <option value="XK">Kosovo</option>
                                    <option value="KW">Kuwait</option>
                                    <option value="KG">Kyrgyzstan</option>
                                    <option value="LA">Lao People's Democratic Republic</option>
                                    <option value="LV">Latvia</option>
                                    <option value="LB">Lebanon</option>
                                    <option value="LS">Lesotho</option>
                                    <option value="LR">Liberia</option>
                                    <option value="LY">Libyan Arab Jamahiriya</option>
                                    <option value="LI">Liechtenstein</option>
                                    <option value="LT">Lithuania</option>
                                    <option value="LU">Luxembourg</option>
                                    <option value="MO">Macao</option>
                                    <option value="MK">Macedonia, the Former Yugoslav Republic of</option>
                                    <option value="MG">Madagascar</option>
                                    <option value="MW">Malawi</option>
                                    <option value="MY">Malaysia</option>
                                    <option value="MV">Maldives</option>
                                    <option value="ML">Mali</option>
                                    <option value="MT">Malta</option>
                                    <option value="MH">Marshall Islands</option>
                                    <option value="MQ">Martinique</option>
                                    <option value="MR">Mauritania</option>
                                    <option value="MU">Mauritius</option>
                                    <option value="YT">Mayotte</option>
                                    <option value="MX">Mexico</option>
                                    <option value="FM">Micronesia, Federated States of</option>
                                    <option value="MD">Moldova, Republic of</option>
                                    <option value="MC">Monaco</option>
                                    <option value="MN">Mongolia</option>
                                    <option value="ME">Montenegro</option>
                                    <option value="MS">Montserrat</option>
                                    <option value="MA">Morocco</option>
                                    <option value="MZ">Mozambique</option>
                                    <option value="MM">Myanmar</option>
                                    <option value="NA">Namibia</option>
                                    <option value="NR">Nauru</option>
                                    <option value="NP">Nepal</option>
                                    <option value="NL">Netherlands</option>
                                    <option value="AN">Netherlands Antilles</option>
                                    <option value="NC">New Caledonia</option>
                                    <option value="NZ">New Zealand</option>
                                    <option value="NI">Nicaragua</option>
                                    <option value="NE">Niger</option>
                                    <option value="NG">Nigeria</option>
                                    <option value="NU">Niue</option>
                                    <option value="NF">Norfolk Island</option>
                                    <option value="MP">Northern Mariana Islands</option>
                                    <option value="NO">Norway</option>
                                    <option value="OM">Oman</option>
                                    <option value="PK">Pakistan</option>
                                    <option value="PW">Palau</option>
                                    <option value="PS">Palestinian Territory, Occupied</option>
                                    <option value="PA">Panama</option>
                                    <option value="PG">Papua New Guinea</option>
                                    <option value="PY">Paraguay</option>
                                    <option value="PE">Peru</option>
                                    <option value="PH">Philippines</option>
                                    <option value="PN">Pitcairn</option>
                                    <option value="PL">Poland</option>
                                    <option value="PT">Portugal</option>
                                    <option value="PR">Puerto Rico</option>
                                    <option value="QA">Qatar</option>
                                    <option value="RE">Reunion</option>
                                    <option value="RO">Romania</option>
                                    <option value="RU">Russian Federation</option>
                                    <option value="RW">Rwanda</option>
                                    <option value="BL">Saint Barthelemy</option>
                                    <option value="SH">Saint Helena</option>
                                    <option value="KN">Saint Kitts and Nevis</option>
                                    <option value="LC">Saint Lucia</option>
                                    <option value="MF">Saint Martin</option>
                                    <option value="PM">Saint Pierre and Miquelon</option>
                                    <option value="VC">Saint Vincent and the Grenadines</option>
                                    <option value="WS">Samoa</option>
                                    <option value="SM">San Marino</option>
                                    <option value="ST">Sao Tome and Principe</option>
                                    <option value="SA">Saudi Arabia</option>
                                    <option value="SN">Senegal</option>
                                    <option value="RS">Serbia</option>
                                    <option value="CS">Serbia and Montenegro</option>
                                    <option value="SC">Seychelles</option>
                                    <option value="SL">Sierra Leone</option>
                                    <option value="SG">Singapore</option>
                                    <option value="SX">Sint Maarten</option>
                                    <option value="SK">Slovakia</option>
                                    <option value="SI">Slovenia</option>
                                    <option value="SB">Solomon Islands</option>
                                    <option value="SO">Somalia</option>
                                    <option value="ZA">South Africa</option>
                                    <option value="GS">South Georgia and the South Sandwich Islands</option>
                                    <option value="SS">South Sudan</option>
                                    <option value="ES">Spain</option>
                                    <option value="LK">Sri Lanka</option>
                                    <option value="SD">Sudan</option>
                                    <option value="SR">Suriname</option>
                                    <option value="SJ">Svalbard and Jan Mayen</option>
                                    <option value="SZ">Swaziland</option>
                                    <option value="SE">Sweden</option>
                                    <option value="CH">Switzerland</option>
                                    <option value="SY">Syrian Arab Republic</option>
                                    <option value="TW">Taiwan, Province of China</option>
                                    <option value="TJ">Tajikistan</option>
                                    <option value="TZ">Tanzania, United Republic of</option>
                                    <option value="TH">Thailand</option>
                                    <option value="TL">Timor-Leste</option>
                                    <option value="TG">Togo</option>
                                    <option value="TK">Tokelau</option>
                                    <option value="TO">Tonga</option>
                                    <option value="TT">Trinidad and Tobago</option>
                                    <option value="TN">Tunisia</option>
                                    <option value="TR">Turkey</option>
                                    <option value="TM">Turkmenistan</option>
                                    <option value="TC">Turks and Caicos Islands</option>
                                    <option value="TV">Tuvalu</option>
                                    <option value="UG">Uganda</option>
                                    <option value="UA">Ukraine</option>
                                    <option value="AE">United Arab Emirates</option>
                                    <option value="GB">United Kingdom</option>
                                    <option value="US">United States</option>
                                    <option value="UM">United States Minor Outlying Islands</option>
                                    <option value="UY">Uruguay</option>
                                    <option value="UZ">Uzbekistan</option>
                                    <option value="VU">Vanuatu</option>
                                    <option value="VE">Venezuela</option>
                                    <option value="VN">Viet Nam</option>
                                    <option value="VG">Virgin Islands, British</option>
                                    <option value="VI">Virgin Islands, U.s.</option>
                                    <option value="WF">Wallis and Futuna</option>
                                    <option value="EH">Western Sahara</option>
                                    <option value="YE">Yemen</option>
                                    <option value="ZM">Zambia</option>
                                    <option value="ZW">Zimbabwe</option>
                        </select>
                            </div> 
                            <ClickButton type='submit' Name='Proceed'/>
                            <a className="w-full" href='/profile-view/'> <ClickButton type='button' Name='Back' id ='CancelAppointment'/></a>
                           
                        </form>
                        {/* <ClickButton Name='Proceed'/> */}
                    </div>

            </div>
        </React.Fragment>
    )
}