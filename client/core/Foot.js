import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { FacebookFilled, TwitterSquareFilled, InstagramFilled } from '@ant-design/icons';



const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#D3D3D3",
  },
  rootBox: {
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
    },
  },
  footerNav: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginRight: 'auto',
    marginLeft: theme.spacing(3),
    marginBottom: theme.spacing(0),

    [theme.breakpoints.down('md')]: {
      width: '100%',
      marginLeft: 'auto',
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(2),
    }
  },
  footerLink: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(2),
    }
  },
}));

export default function Foot() {
  const classes = useStyles();

  const content = {
    'brand': { image: 'assets/images/default.png', width: 110 },
    'copy': '© 2022 GROWMARKET All rights reserved.',
    'link1': 'Facebook',
    'link2': 'Twitter',
    'link3': 'Instagram',
    'link4': 'twitter'
  };

  let brand;

  if (content.brand.image) {
    brand = <img src={content.brand.image} alt="" width={content.brand.width} />;
  } else {
    brand = content.brand.text || '';
  }

  return (
    <footer className={classes.root}>
      <Container maxWidth="lg">
        <Box py={6} display="flex" flexWrap="wrap" alignItems="center" className={classes.rootBox}>
          <Link href="#" color="inherit" underline="none">
            {brand}
          </Link>
          <Box component="nav" className={classes.footerNav}>
            <Link href="https://www.facebook.com/" target="_blank" variant="body1" color="textPrimary" className={classes.footerLink}><FacebookFilled style={{ color: '#1877F2', fontSize: '25px' }} /></Link>
            <Link href="https://www.instagram.com/" target="_blank" variant="body1" color="textPrimary" className={classes.footerLink}><InstagramFilled style={{ color: '#E4405F', fontSize: '25px' }} /></Link>
            <Link href="https://twitter.com/login" target="_blank" variant="body1" color="textPrimary" className={classes.footerLink}><TwitterSquareFilled style={{ color: '#1DA1F2', fontSize: '25px' }} /></Link>
          </Box>
          <Box>
            <Typography color="textSecondary" component="p" variant="caption" gutterBottom={false}>{content['copy']}</Typography></Box>
          {/* <Typography color="textSecondary" component="p" variant="caption" gutterBottom={false}>{content['copy']}</Typography> */}
        </Box>
      </Container>
    </footer>
  );
}