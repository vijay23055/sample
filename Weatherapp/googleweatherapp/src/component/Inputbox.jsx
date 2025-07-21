import React, { useState } from 'react'
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';

function Inputbox() {
    const[cityName, setCity]=useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("City submitted:", cityName);
        
      };

    return (
        <div className='inputbox'>
            <div className='inputbox_field'>
                <h1>Google Weather App</h1>
                <p>powered by</p>
                <img src='https://icon2.cleanpng.com/20240216/yhs/transparent-google-logo-google-logo-with-colorful-letters-on-black-1710875297222.webp' alt='log'></img>
                <form onSubmit={handleSubmit}>
                    <Input placeholder="Enter the city" value={cityName} onChange={(e)=> setCity(e.target.value)}/>
                    <br />
                    <br />
                    <Button variant="contained" color="primary" type='submit'>
                        Get Weather
                    </Button>
                </form>
            </div>

        </div>
    )
}

export default Inputbox
