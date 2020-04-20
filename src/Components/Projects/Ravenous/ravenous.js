import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Image from './ravenous.PNG';
import Link from '@material-ui/core/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt,faReact,faJsSquare, faYelp } from '@fortawesome/free-brands-svg-icons'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    '@media (max-width:750px)': { // eslint-disable-line no-useless-computed-key
      marginTop:10,
    },
    height:480,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: "#CCA353",
    color:'white'
  },
  header:{
    backgroundColor:"#202528",
    color:"white"
  },
  link:{
    color:"#CCA353"
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

function Ravenous() {
  const classes = useStyles();
    return (
      <section className='Ravenous'>
      <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="Ravenous" className={classes.avatar}>
            R
          </Avatar>
        }
        title="Ravenous"
        subheader={<span style={{color:'white'}}>Food App</span>}
        className={classes.header}
      />
     
      <CardMedia
        className={classes.media}
        image={Image}
        title="Ravenous Homepage"
      />
      <CardContent className={classes.content} >
        <Typography className={classes.contentP} variant="body2" color="textSecondary" component="p">
          Using the Yelp API this app finds restuarants based on the user's search. This app can use multiple search parameters, such as "Best Match", "Highest Rated", or "Most Reviewed". The JSON data is then mapped to create an eye catching design.
        </Typography>
        <div className={classes.div}>
          <FontAwesomeIcon icon={faHtml5} size="2x" className={classes.link}/>
          <FontAwesomeIcon icon={faCss3Alt} size="2x" className={classes.link}/>
          <FontAwesomeIcon icon={faJsSquare} size="2x" className={classes.link}/>
          <FontAwesomeIcon icon={faReact} size="2x" className={classes.link}/>
          <FontAwesomeIcon icon={faYelp} size="2x" className={classes.link}/>
        </div>
      </CardContent>
      <CardActions className={classes.action} disableSpacing>
      <Button size="small">
        <Link href="https://github.com/sshuman95/ravenous" className={classes.link} target="_blank">GitHub</Link>
        </Button>
        <Button size="small">
        <Link href="https://wrong-cherries.surge.sh" className={classes.link} target="_blank">Live</Link>
        </Button>
      </CardActions>
    </Card>
    </section>
    );
  }
  
  export default Ravenous;

