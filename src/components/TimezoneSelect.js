import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeTimezone} from "../redux/reducer/timezoneReducer";
import {DateUtil} from "../util/DateUtil";
import {Autocomplete} from "@material-ui/lab";
import {Button, TextField} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  autoComplete: {
    width: 300,
  },
  centerAligned: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  }
}));

export default function TimezoneSelect() {
  const classes = useStyles();
  const timezone = useSelector(state => state.timezone.timezone);
  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    dispatch(changeTimezone(newValue))
  };

  return (
    <div className={classes.centerAligned}>
      <Autocomplete
        id="combo-box-demo"
        options={DateUtil.getAllValidTimezones()}
        className={classes.autoComplete}
        value={timezone}
        onChange={handleChange}
        disableClearable
        renderInput={(params) => <TextField {...params} label="Time zone" variant="outlined"/>}
      />
      <Button variant="contained" color="secondary" onClick={reset}>
        Reset
      </Button>
    </div>
  );

  function reset() {
    dispatch(changeTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone));
  }
}
