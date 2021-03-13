import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import CourseDeatilAccordion from './CourseDetailAccordion';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import Typography from '@material-ui/core/Typography';
import {CourseContents} from '../contents/CourseContents';
import {DateUtil} from '../util/DateUtil';
import {useParams} from 'react-router-dom';
import {Container, useMediaQuery} from "@material-ui/core";
import WebIcon from '@material-ui/icons/Web';
import MenuBookIcon from '@material-ui/icons/MenuBook';

const useStyles = makeStyles((theme) => ({
  block: {
    flex: 'none',
    marginRight: 0
  },
  before: {
    "&::before": {
      padding: "0 !important"
    }
  },
  maxWidth30: {
    maxWidth: '30vw',
    paddingLeft: '0',
    paddingRight: '0',
  },
  width40: {
    width: '40vw'
  },
  width50: {
    width: '50vw'
  },
  maxWidth80: {
    maxWidth: '80vw'
  },
  pastCourse: {
    color: "grey",
    textDecoration: "line-through"
  },
  currentCourse: {
    fontWeight: "bold",
    color: "green"
  }
}));

const legacyPeriod = 8;

export default function CourseTimeline() {
  const classes = useStyles();
  const period = useParams().period || legacyPeriod;
  const contents = CourseContents[period];
  const isLargeScreen = useMediaQuery('(min-width:600px)');
  let assignedCss = false;

  return (
    <Timeline align="left" className={classes.maxWidth80}>
      {generateTimelineItems()}
    </Timeline>
  );

  function generateTimelineItems() {
    if (!contents) {
      return <div>没有此期课程</div>;
    }
    return contents.map(content => (
      <TimelineItem key={content.title} className={classes.before}>
        <Container>
          <TimelineOppositeContent className={classes.maxWidth30}>
            <Typography color="textSecondary" className={getTimeStyle(content.startTime, content.endTime, content.timezone)}>
              {DateUtil.displayTimeInUserTimeZone(content.startTime, content.timezone)}
            </Typography>
          </TimelineOppositeContent>
        </Container>
        {renderTimelineDot(content.type)}
        <Container>
          <TimelineContent className={isLargeScreen ? classes.width40 : classes.width50}>
            <CourseDeatilAccordion {...content} />
          </TimelineContent>
        </Container>
      </TimelineItem>
    ));
  }

  function renderTimelineDot(type) {
    if (type === 'expirement') {
      return (
        <TimelineSeparator>
          <TimelineDot color={"secondary"}>
            <WebIcon />
          </TimelineDot>
          <TimelineConnector/>
        </TimelineSeparator>
      );
    }
    return (
      <TimelineSeparator>
        <TimelineDot color={"primary"}>
          <MenuBookIcon />
        </TimelineDot>
        <TimelineConnector/>
      </TimelineSeparator>
    );
  }

  function getTimeStyle(startTime, endTime, timezone) {
    const compare = DateUtil.compareTime(startTime, endTime, timezone);
    if (compare === -1) {
      return classes.pastCourse;
    }
    if (!assignedCss) {
      assignedCss = true;
      return classes.currentCourse;
    }
    return null;
  }
}
