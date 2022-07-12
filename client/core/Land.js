import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button'
import Background from "./../assets/images/bg.jpg"


const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: `url(${Background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100vh',
    position: 'fixed',
    textAlign: 'center',
  },
  floatleft: {
    height: '100vh',
    width: '50%',
    float: 'left',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  floatright: {
    height: '100vh',
    width: '50%',
    float: 'left',
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  enterlink: {
    backgroundColor: "#ffffff",
  }
}));


export default function Land(props) {
  const classes = useStyles();
  // const [redirect, setRedirect] = useState(false);

  const handleClick = () => {
    props.setRedirectNow(true);
  }

  return (
    <>
      <div className={classes.container}>
       
        <div className={classes.floatleft}>
          <h1 style={{ paddingTop: '250px', fontSize: '80px', color: 'white' }}>
            Grow Market
          </h1>
          <div>
          <p style={
            {
              fontSize : '30px' ,
              color : 'gray' ,
              marginLeft :'200px',
              marginRight : '200px',
            }}> 
            A virtual space for selling and buying products. We bring your market at your fingertips.
          </p>
          </div>
        </div>
        <div className={classes.floatright}>
          <h1 style={{ paddingTop: '280px', fontSize: '60px' }}>
            Check Us Out
          </h1>
          <Button className={classes.enterlink}  variant="contained"  size ="large"  onClick={handleClick}>Enter</Button>
        </div>
      </div>
    </>
  );
}