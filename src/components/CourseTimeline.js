import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import CourseDetailAccordion from './CourseDetailAccordion';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import Typography from '@material-ui/core/Typography';
import {CourseContents} from '../contents/CourseContents';
import {DateUtil} from '../util/DateUtil';
import {useParams} from 'react-router-dom';
import {Container, useMediaQuery} from "@material-ui/core";
import WebIcon from '@material-ui/icons/Web';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import {useSelector} from "react-redux";

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

const legacyPeriod = 17;

export default function CourseTimeline() {
  const classes = useStyles();
  const period = useParams().period || legacyPeriod;
  const contents = CourseContents[period];
  const isLargeScreen = useMediaQuery('(min-width:600px)');
  let assignedCss = false;
  const timezone = useSelector(state => state.timezone.timezone);

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
            <Typography color="textSecondary">
              {renderTimes(content)}
            </Typography>
          </TimelineOppositeContent>
        </Container>
        {renderTimelineDot(content.type)}
        <Container>
          <TimelineContent className={isLargeScreen ? classes.width40 : classes.width50}>
            <CourseDetailAccordion {...content} />
          </TimelineContent>
        </Container>
      </TimelineItem>
    ));
  }

  function renderTimes(content) {
    if (Array.isArray(content.startTime)) {
      const elements = []
      let i = 0;
      for (; i < content.startTime.length - 1; i++) {
        elements.push(
            <div className={getTimeStyle(content.startTime[i], content.endTime[i], content.timezone[i])}>
              {DateUtil.displayTimeInUserTimeZone(content.startTime[i], content.timezone[i], timezone, 'MM-dd ccc hh:mm a')}
            </div>
        )
      }
      elements.push(
          <div className={getTimeStyle(content.startTime[i], content.endTime[i], content.timezone[i])}>
            {DateUtil.displayTimeInUserTimeZone(content.startTime[i], content.timezone[i], timezone)}
          </div>
      )
      return elements;
    }
    return (<div className={getTimeStyle(content.startTime, content.endTime, content.timezone)}>
      {DateUtil.displayTimeInUserTimeZone(content.startTime, content.timezone, timezone)}
    </div>);
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
