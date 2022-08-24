import React from "react";
import { Navbar } from "../Navbar";
import { App } from '../../components/Footer';
import image from '../../assets/images/contactimage.jpg';
import { makeStyles } from "@material-ui/core";
import home from '../../assets/images/jville.png';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'


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
    top: "20%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
    flexDirection: "column",
    padding: '10px'
  },
  container: {
      display: 'inherit',
      height: '25%',
      backgroundColor: 'white',
      width: '550px',
      content: 'align-center',
      bordertStyle: 'groove',
      marginLeft: '200px',
      paddingBottom: '20px',
      zIndex: 1
  },
  h1: {
    display: 'row',
    alignItems: 'center',
  },
  Button: {
    color: 'white',
    backgroundColor: '#82522a',
    fontSize: '20px',
    borderRadius: '12px',
    width: '250px',
    '&:hover': {
      backgroundColor: 'silver'
    },
  },
  image_container: {
    paddingTop:'400px',
    paddingBottom: '40px',
    paddingLeft: '30px',
  },
  a: {
    color: 'white',
    backgroundColor: 'black' 

  },

});

export const Contact = () => {
    const classes = useStyles();
    return (
      <div>
        <Navbar />
        <div className={`${classes.background}`}>
          <div className={classes.main_text}>
            <div className={`${classes.image_container}`}>
            <h1>Click Image and Come See Us</h1>
              <a href="https://duckduckgo.com/?q=map+of+ponte+vedra+beach+fl&ia=web&iaxm=maps"><img src={ home } width={475} height={350}  className="img-responsive" alt="..."></img></a>
            </div>
            <h1> 
            <a href='https://github.com/jturnerFL' style={{color:'white'}}><Button type="submit"></Button>My Github Profile</a> 
            <a href='https://www.linkedin.com/in/james-turner-nsca' style={{color:'white'}}><Button type="submit"></Button>Linkedin Profile </a>
            <a href='mailto:jimturner@fullarmorinc.com' style={{color:'white'}}><Button type="submit"></Button>My Email</a> 
            </h1>         
            </div>
          <App/>
        </div>
      </div>
    );
  };


