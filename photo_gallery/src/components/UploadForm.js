import React,{useState, useEffect} from "react";
import {connect} from 'react-redux';
import {Form, Button} from 'react-bootstrap';
import { beginAddPhoto} from '../actions/photos';

const UploadForm = ({errors, dispatch}) => {
    const [photo, setPhoto] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        setErrorMsg(errors);
    },[errors]);


    useEffect(() => {
        setErrorMsg('');
    },[]);

    const handleOnChange = (event) => {
        const file = event.target.files[0];
        setPhoto(file);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if(photo){
            setErrorMsg('');
            dispatch(beginAddPhoto(photo));
            setIsSubmitted(true);
        }
    }
};

// return (

// )


//some more code is to be added here
