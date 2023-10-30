import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import './Registration.css'
import image1 from './images/image1.png'

export default function Registration(){
    const [nameInput, setNameInput]=useState('')
    const [userNameInput, setUserNameInput]=useState('')
    const [emailInput, setEmailInput]=useState('')
    const [mobileInput, setMobileInput]=useState('')
    const [errorName, setErrorName]=useState('');
    const [errorUserName, setErrorUserName]=useState('');
    const [errorEmail, setErrorEmail]=useState('');
    const [errorMobile, setErrorMobile]=useState('');
    const [errorCheckbox, setErrorCheckbox]=useState('')

    const navigate=useNavigate();

    const submitHandler=(e)=>{
        e.preventDefault();
        validateName()
        validateUserName()
        validateEmail()
        validateMobile()
        validateCheckbox()
        if(validateName() && validateUserName() && validateEmail() && validateMobile() &&
        validateCheckbox()){
            navigate('/genre')
        }
    }
    const validateName=()=>{
        if(nameInput===''){
            setErrorName('name required');
            return false;
        }
        setNameInput(nameInput);
        setErrorName('');
        return true;
    }
    const validateUserName=()=>{
        if(userNameInput===''){
            setErrorUserName('username required');
            return false;
        }
        setUserNameInput(userNameInput)
        setErrorUserName('');
        return true;
    }
    const validateEmail=()=>{
        if(emailInput===''){
            setErrorEmail('email required');
            return false;
        }
        setEmailInput(emailInput)
        setErrorEmail('');
        return true;
    }
    const validateMobile=()=>{
        if(mobileInput===''){
            setErrorMobile('mobile required')
            return false;
        }
        setMobileInput(mobileInput)
        setErrorMobile('');
        return true;
    }
    const validateCheckbox=()=>{
        const mybox=document.getElementById('mybox')
        if(mybox.checked===false){
            setErrorCheckbox('Check the box to proceed')
            return false;
        }
        setErrorCheckbox('');
        return true;
    }
    const userData = {
        name: nameInput,
        username: userNameInput,
        email: emailInput,
        mobile: mobileInput,
      };
      
    localStorage.setItem('userData', JSON.stringify(userData));

    return (
        <>
        <div className="wrapper">
            <div className="content">
                <img src={image1} alt="image1" />
                
                    <form onSubmit={submitHandler}>
                    <h1>Super app</h1>
                    <h4>Create your new account</h4>
                    <input placeholder="Name" className="input" value={nameInput} onChange={(e)=>setNameInput(e.target.value)}/>
                    <p className="errors">{errorName}</p>
                    <input placeholder="Username" className="input" value={userNameInput} onChange={(e)=>setUserNameInput(e.target.value)}/>
                    <p className="errors">{errorUserName}</p>
                    <input placeholder="Email" className="input" value={emailInput} onChange={(e)=>setEmailInput(e.target.value)}/>
                    <p className="errors">{errorEmail}</p>
                    <input placeholder="Mobile" className="input" value={mobileInput} onChange={(e)=>setMobileInput(e.target.value)}/>
                    <p className="errors">{errorMobile}</p>
                    <div className="checkbox-container">
                    <input type="checkbox" id='mybox'/> Share my registration data with Superapp
                    <p className="errors">{errorCheckbox}</p>
                    </div>
                    <button>SIGN UP</button>
                    
                    <p>
                    By clicking on Sign up. you agree to Superapp <span>Terms and Conditions of Use</span> <br/><br/>
                    To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span> Privacy Policy</span>
                    </p>
                    </form>
                
            </div>
        </div>
        </>
    )
}