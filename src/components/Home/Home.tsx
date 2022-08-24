import React from 'react'
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Navbar } from '../../components/Navbar';
import { App } from '../../components/Footer';
import { Link } from 'react-router-dom';
import image from '../../assets/images/backgroundimage.jpg';

interface Props {
    title: string;
}

const useStyles = makeStyles({
    background: {
        backgroundImage: `url(${image})`,
        width: "100%",
        height: "100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        position: "absolute",
        zIndex: -1,
    },
    main_text: {
        textAlign: "center",
        position: "relative",
        top: "40%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        color: "#9a5117",
    },
    button: {
        backgroundColor: '#9a5117',
        color: 'white',
        textDecoration: "none",
        '&:hover': {
          backgroundColor: 'silver'
        },
        display: 'inline-block',
        borderRadius: '4px',
        width: '400px'
        
    },
    footer: {
        display: 'block',
        position: 'absolute'
    }
})

export const Home = ( props: Props) => {
    const classes = useStyles();

    return (
        <>
          <Navbar />
            <div className={`${classes.background}`}>
              <div className={classes.main_text}>
                <h1>{props.title}</h1>
                <Button>
                  <Link to="/Collection" className={classes.button}>
                    Take Me For a Ride!
                  </Link>
                </Button>
              </div>
            </div>
        </>
    );
  };
  
  
