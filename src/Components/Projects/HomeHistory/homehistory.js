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
import Image from './home.PNG';
import Link from '@material-ui/core/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt,faReact,faJsSquare,faNodeJs } from '@fortawesome/free-brands-svg-icons'
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    ['@media (max-width:750px)']: { // eslint-disable-line no-useless-computed-key
      marginTop:10
    },
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
    backgroundColor: "#706E6F",
    color:'white'
  },
  header:{
    backgroundColor:"#554237",
    color:"white"
  },
  link:{
    color:"#706E6F"
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

function HomeHistory() {
  const classes = useStyles();
    return (
      <section className='homeHistory'>
      <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="Home History" className={classes.avatar}>
            HH
          </Avatar>
        }
        title="Home History"
        subheader={<span style={{color:'white'}}>Home Data App</span>}
        className={classes.header}
      />
      <CardMedia
        className={classes.media}
        image={Image}
        title="Home History Homepage"
      />
      <CardContent className={classes.content} >
        <Typography className={classes.contentP} variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
        <div className={classes.div}>
          <FontAwesomeIcon icon={faHtml5} size="2x" className={classes.link}/>
          <FontAwesomeIcon icon={faCss3Alt} size="2x" className={classes.link}/>
          <FontAwesomeIcon icon={faJsSquare} size="2x" className={classes.link}/>
          <FontAwesomeIcon icon={faReact} size="2x" className={classes.link}/>
          <FontAwesomeIcon icon={faNodeJs} size="2x" className={classes.link}/>
          <FontAwesomeIcon icon={faMapMarkedAlt} size="2x" className={classes.link}/>
          </div>
      </CardContent>
      <CardActions className={classes.action} disableSpacing>
      <Button size="small">
        <Link href="https://github.com/sshuman95/homehistory" className={classes.link} target="_blank">GitHub</Link>
        </Button>
        <Button size="small">
        <Link href="https://homehistory.org/" className={classes.link} target="_blank">Live</Link>
        </Button>
      </CardActions>
    </Card>
    </section>
    );
  }
  
  export default HomeHistory;
