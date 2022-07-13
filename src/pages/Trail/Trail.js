import { CssBaseline } from '@material-ui/core';
import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import { isUserExists } from '../../api/common';
import ResponsiveAppBar from '../../components/ResponsiveNavBar/ResponsiveNavBar';
import Cards from '../../components/Cards/Cards';
import Container from "@mui/material/Container";
import Footer from '../../components/Footer/Footer';
function Trail(props) {

    const navigate = useNavigate();
    
    // useEffect(()=>{
    //    isUserExists().then((data) => {
    //     if(!data){
    //         navigate('/login');
    //     }
    //    })
    // },[navigate]);


  

    return (
        <>
        <CssBaseline />
        <ResponsiveAppBar />
      
        <Container sx={{display:'flex',flexWrap:'wrap',margin:'10px 10px 0 30px',justifyContent:'center'}}>
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
        </Container>

        <Footer />
        </>
    );
}

export default Trail;

