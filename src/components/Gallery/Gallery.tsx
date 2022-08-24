import React from 'react'
import { Navbar } from '../../components/Navbar';
import image1 from '../../assets/images/1999IndianChief.png';
import image2 from '../../assets/images/2016HarleyRoadKingCustom.png';
import image3 from '../../assets/images/2016IndianChief.png';
import image4 from '../../assets/images/2014HDRoadKingLow.png';
import image5 from '../../assets/images/2016IndianScoutCustom.png';
import image6 from '../../assets/images/2018IndianSpringFieldDarkHorse.png';
import image7 from '../../assets/images/2019Harley883.jpg';
import image8 from '../../assets/images/2022IndianBobber.png';
import image9 from '../../assets/images/2011CustomHarleyPurple.jpg';
import image10 from '../../assets/images/2014IndianScoutRouge.jpg'
import { makeStyles } from '@material-ui/core';



const useStyles = makeStyles({
  background: {
    backgroundImage: `linear-gradient(82deg, #682407 0%, #F7CE68 100%)`,
    width: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    position: "inherit",
    zIndex: -1,
    paddingTop: '10px',
    padding: '5px',
    height: 'auto'
    
  },
  main_text: {
    textAlign: "center",
    position: "relative",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "Black",
    flexDirection: "column",
  },
  container: {
    width: '45%',
    height:'550px',
    marginTop: '100px',
    alignItems: 'stretch',
    display: 'flex',
    paddingBottom: '0px',
    borderStyle: 'inset',
    borderWidth: '5px',
    justifyContent: 'center',
    marginLeft: '425px',
    maxHeight: '100%'
  },
  containers: {
    marginTop: '100px',
    borderStyle: 'inset',
    borderWidth: '7px',
    width: '45%',
    height:'550px',
    paddingBottom: '0px',
    justifyContent: 'center',
    marginLeft: '425px',
    alignItems: 'stretch',
    marginBottom: '100px'
    
  },
  h1: {
    textDecorationStyle: 'solid',
    fontSize: '10px'
  },
  header: {
  backgroundColor: 'black',
  width: '400px',
  height: '50px',
  margin: 'auto',
  display: 'block',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#b37746',
  textAlign: 'center',
  paddingTop: '10px',
  borderStyle: 'inset',
  borderWidth: '7px',
  borderColor: 'gun metal',
  marginTop: '60px',
  },


});


export const Gallery = () => {
    const classes = useStyles();
    return (
      <>
        <Navbar />
        <div className={`${classes.background}`}>
          <div className={`${classes.header}`}>
            <h1>Click Images for Info</h1>
          </div>
            <div className={`${classes.container}`}>
              <a href='https://www.barrett-jackson.com/Events/Event/Details/1999-INDIAN-CHIEF-MOTORCYCLE-217739'><img src={ image1 }width={711} height={550} className="img-thumbnail" alt="1999 Indian Chief"/></a> <br></br>
            </div>
            <div className={`${classes.containers}`}> 
              <a href='https://www.yupyi.com/details.php?id=18003696'><img src={ image2 } width={712} height={550} className="img-thumbnail" alt="2016 Custom Harley Davidson"/></a> <br></br>
            </div>
            <div className={`${classes.containers}`}> 
              <a href='https://www.triumphofwestchester.com/used-2016-indian-chief-vintage-v5311377.html'><img src={ image3 } width={712} height={550} className="img-thumbnail" alt="2016 Indian Chief"/></a> <br></br>
            </div>
            <div className={`${classes.containers}`}>  
              <a href='https://www.motortrend.com/features/2014-harley-davidson-road-king-a-date-with-fate/'><img src={ image4 } width={712} height={550} className="img-thumbnail" alt="2014 Harley Davidson"/></a> <br></br>
            </div>
            <div className={`${classes.containers}`}>  
              <a href='https://www.youtube.com/watch?v=RwRTeiEeXmc'><img src={ image5 } width={712} height={550} className="img-thumbnail" alt="2019 Indian Scout Custom"/></a> <br></br>
            </div>  
            <div className={`${classes.containers}`}>
              <a href='https://www.exhaustnotes.com.au/ride-on-2018-indian-springfield-dark-horse/'><img src={ image6 } width={712} height={550} className="img-thumbnail" alt="2018 Indian Springfield Dark Horse"/></a> <br></br>
            </div>
            <div className={`${classes.containers}`}>  
              <a href='https://harleydavidsonmotorcycle1.blogspot.com/2012/08/harley-883.html'><img src={ image7 } width={712} height={550} className="img-thumbnail" alt="2019 Harley Davidson 883"/></a> <br></br>
            </div>  
            <div className={`${classes.containers}`}>
              <a href='https://www.motorcyclesdata.com/2022/03/15/indian-motorcycles/'><img src={ image8 } width={712} height={550} className="img-thumbnail" alt="2022 Indian Bobber"/></a> <br></br>
            </div>
            <div className={`${classes.containers}`}> 
              <a href='https://irontradernews.com/fantasy-land-buffalochip/'><img src={ image9 } width={712} height={550} className="img-thumbnail" alt="2011 Purple Harley Davidson"/></a> <br></br>
            </div> 
            <div className={`${classes.containers}`}>
              <a href='https://wallpapercave.com/indian-scout-bobber-wallpapers'><img src={ image10 } width={712} height={550} className="img-thumbnail" alt="2014 Indian Scout Rouge"/></a> <br></br>
            </div>
        </div>
      </>
    );
};



