import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import CourseDeatilAccordion from './CourseDetailAccordion';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import Typography from '@material-ui/core/Typography';
import { CourseContents } from '../contents/CourseContents';
import { DateUtil } from '../util/DateUtil';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    block: {
        flex: 'none',
        marginRight: 0
    },
    maxWidth20: {
        maxWidth: '20vw'
    },
    maxWidth40: {
        maxWidth: '50vw'
    },
    maxWidth66: {
        maxWidth: '66vw'
    }
}));

const legacyPeriod = 8;

export default function CourseTimeline() {
    const classes = useStyles();
    const period = useParams().period || legacyPeriod;
    const contents = CourseContents[period];

    return (
        <Timeline align="left" className={classes.maxWidth66}>
            {generateTimelineItems()}
        </Timeline>
    );

    function generateTimelineItems() {
        if (!contents) {
            return <div>没有此期课程</div>;
        }
        return contents.map(content => (
            <TimelineItem key={content.title}>
                <TimelineOppositeContent className={classes.maxWidth20}>
                    <Typography color="textSecondary">{DateUtil.displayTimeInUserTimeZone(content.startTime, content.timezone)}</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color={content.type === 'expirement' ? "secondary" : "primary"} />
                    <TimelineConnector />
                </TimelineSeparator >
                <TimelineContent className={classes.maxWidth40}>
                    <CourseDeatilAccordion {...content} />
                </TimelineContent>
            </TimelineItem>
        ));
    }
}
