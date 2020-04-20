import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Image from './kjp_image.PNG'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt,faReact,faJsSquare,faNodeJs, faCcStripe } from '@fortawesome/free-brands-svg-icons'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    height:480,
  },
  
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: "#60498B",
    color:'white'
  },
  header:{
    backgroundColor:"#679347",
    color:"white"
  },
  link:{
    color:"#679347"
  },
  content:{
    paddingBottom:0,
  },
  contentP:{
    paddingBottom:10,
  },
  action:{
    paddingTop:5,
    paddingBottom:0
  },
  div:{
    display:"flex",
    justifyContent:"space-around"
  },
}));

function KJP() {
  const classes = useStyles();
    return (
      <section id='kjp'>
      <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="KJPresley Designs" className={classes.avatar}>
            KJ
          </Avatar>
        }
        title="KJPresley Designs"
        subheader={<span style={{color:'white'}}>E-Commerce</span>}
        className={classes.header}
      />
      <CardMedia
        className={classes.media}
        image={Image}
        title="KJPresley Designs Homepage"
      />
      <CardContent className={classes.content} >
        <Typography className={classes.contentP} variant="body2" color="textSecondary" component="p">
          This site was built using React, Firebase, and Stripe. The owner can easily update their store through their own custom admin portal. Buyers can customize their cart and pay securely with Stripe. Users can also upload an image and submit a custom design.
        </Typography>
        <div className={classes.div}>
          <FontAwesomeIcon icon={faHtml5} size="2x" className={classes.link}/>
          <FontAwesomeIcon icon={faCss3Alt} size="2x" className={classes.link}/>
          <FontAwesomeIcon icon={faJsSquare} size="2x" className={classes.link}/>
          <FontAwesomeIcon icon={faReact} size="2x" className={classes.link}/>
          <FontAwesomeIcon icon={faNodeJs} size="2x" className={classes.link}/>
          <FontAwesomeIcon icon={faCcStripe} size="2x" className={classes.link}/>
          </div>
      </CardContent>
      
      <CardActions className={classes.action} disableSpacing>
        <Button size="small">
        <Link href="https://github.com/sshuman95/kjpresleydesigns" className={classes.link} target="_blank">GitHub</Link>
        </Button>
        <Button size="small">
        <Link href="https://www.kjpresleydesigns.com/" className={classes.link} target="_blank">Live</Link>
        </Button>
      </CardActions>
    </Card>
    </section>
    );
  }
  
  export default KJP;
