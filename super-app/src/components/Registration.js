import React, {useState} from "react";
import './Registration.css'
import image1 from './image1.png'

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

    const submitHandler=(e)=>{
        e.preventDefault();
        setNameInput('');
        setUserNameInput('');
        setEmailInput('');
        setMobileInput('')
        validateName()
        validateUserName()
        validateEmail()
        validateMobile()
        validateCheckbox()
    }
    const validateName=()=>{
        if(nameInput===''){
            setErrorName('name required');
            return true;
        }
        setNameInput(nameInput);
        setErrorName('');
    }
    const validateUserName=()=>{
        if(userNameInput===''){
            setErrorUserName('username required');
            return true;
        }
        setUserNameInput(userNameInput)
        setErrorUserName('');
    }
    const validateEmail=()=>{
        if(emailInput===''){
            setErrorEmail('email required');
            return true;
        }
        setEmailInput(emailInput)
        setErrorEmail('');
    }
    const validateMobile=()=>{
        if(mobileInput===''){
            setErrorMobile('mobile required')
            return true;
        }
        setMobileInput(mobileInput)
        setErrorMobile('');
    }
    const validateCheckbox=()=>{
        const mybox=document.getElementById('mybox')
        if(mybox.checked===false){
            setErrorCheckbox('Check the box to proceed')
            return true;
        }
        setErrorCheckbox('');
    }

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