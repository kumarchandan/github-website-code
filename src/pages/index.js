import React from "react"
import { GitHub, Linkedin, Hash, Mail } from "react-feather";
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import Chip from "@material-ui/core/Chip";
import { makeStyles } from '@material-ui/core/styles';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import ChildCareIcon from '@material-ui/icons/ChildCare';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SchoolIcon from '@material-ui/icons/School';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import WorkIcon from '@material-ui/icons/Work';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

const IndexPage = () => {
  const classes = useStyles()
  return (
    <Layout class={classes.root}>
      <SEO title="Home" />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <h1>Hey! I'm <b>Chandan Kumar</b>.</h1>
          <h1>I'm a <b>Full Stack</b></h1>
          <h1>Developer from India</h1>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: "70px" }}>
            <a href="https://github.com/kumarchandan" target="_blank" rel="noopener noreferrer">
              <GitHub size={20} color="grey" fill="grey" />
            </a>
            <a href="https://www.linkedin.com/in/enchandan/" target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} color="grey" fill="grey" />
            </a>
            <a href="mailto:chandankumar99341@gmail.com?Subject=Hey%20Chandan" target="_top">
              <Mail size={20} color="grey" />
            </a>
          </div>
          <div style={{ marginTop: '50px', }}>
            <h3>Skills</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between'}}>
              <Chip className={classes.chip} color="secondary" label="Python" />
              <Chip className={classes.chip} color="secondary" label="JavaScript" />
              <Chip className={classes.chip} color="secondary" label="React" />
              <Chip className={classes.chip} color="secondary" label="Angular" />
              <Chip className={classes.chip} color="secondary" label="Python" />
              <Chip className={classes.chip} color="secondary" label="NodeJS" />
              <Chip className={classes.chip} color="secondary" label="ABAP" />
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', height: `400px`, width: `300px`, marginBottom: `1.45rem` }}>
          <Image />
          <div style={{ textAlign: 'center'}}>
            <h3><Hash size={25} color="grey" />A nerd crashed into a viking</h3>
          </div>
        </div>
      </div>
      <h3>Life and Projects</h3>
      <div>
        <Timeline align="alternate">
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                1992
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="secondary" variant="outlined">
                <ChildCareIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography>
                  I was born
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                2007
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="secondary" variant="outlined">
                <FavoriteIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography>
                  Graduated from School
                </Typography>
                <Typography>Got myself a Girlfriend</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                2012
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="secondary" variant="outlined">
                <SchoolIcon />
              </TimelineDot>
              <TimelineConnector className={classes.secondaryTail} />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography>
                  Got my Bachelors degree from St. Xavier's College
                </Typography>
                <Typography>Got my first Job at SAP</Typography>
                <Typography>My first project - GamePlay - A Talent Assessment Platform</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                2013-14
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="secondary" variant="outlined">
                <WorkIcon />
              </TimelineDot>
              <TimelineConnector className={classes.secondaryTail} />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography>Launch of GamePlay</Typography>
                <Typography>Built UI5 apps called Fiori for SAP PS module</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                2015-18
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="secondary" variant="outlined">
                <LocalShippingIcon />
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography>
                  Business By Design - Responsible for designing and developing new features for the Customer specific
                  requirements for modules such as Production and Manufacturing, Customer Demand etc
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                2018-Present
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="secondary" variant="outlined">
                <TagFacesIcon />
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography>
                  Working on internal SAP Chat platform Tobi
                </Typography>
                <Typography>Enhancement of chatbot's language understanding and interpretation</Typography>
                <Typography>Maintaining entire lifecycle of the project</Typography>
                <Typography>Tech Stack - UI (Typescript, Angular), Backend (NodeJS), and DevOps (GCP, Docker, Kubernetes, Azure, TravisCI)</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </Layout>
  )
}

export default IndexPage
