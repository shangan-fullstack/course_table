import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { DateUtil } from '../util/DateUtil';
import {useSelector} from "react-redux";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
        paddingLeft: '2px'
    },
    squareList: {
        listStyleType: 'square'
    },
    leftAlign: {
        textAlign: 'left'
    }
}));

export default function CourseDeatilAccordion(props) {
    const classes = useStyles();
    const [expand, setExpand] = useState(false);
    const timezone = useSelector(state => state.timezone.timezone);

    return (
        <div className={classes.root}>
            <Accordion expanded={expand} onChange={handleExpand}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                >
                    <Typography className={classes.heading + " " + classes.leftAlign}>{props.title}</Typography>
                    <Typography className={classes.secondaryHeading}>{props.subtitle}</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.leftAlign}>
                    <div>
                        <div>
                            时间：{getStartAndEndTime()}
                        </div>
                        <div>
                            <ul className={classes.squareList}>
                                {getContents()}
                            </ul>
                        </div>
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    );

    function handleExpand() {
        setExpand(expend => !expend);
    }

    function getStartAndEndTime() {
        const format = 'HH:mm z';
        return `${DateUtil.displayTimeInUserTimeZone(props.startTime, props.timezone, timezone, format)} - ${DateUtil.displayTimeInUserTimeZone(props.endTime, props.timezone, timezone, format)}`;
    }


    function getContents() {
        return props.topics.map(topic => (
            <li key={topic}>
                {topic}
            </li>
        ));
    }
}
