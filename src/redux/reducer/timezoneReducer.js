import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
}

export const timezoneSlice = createSlice({
  name: "timezone slice",
  initialState,
  reducers: {
    changeTimezone: function (state, action) {
      console.log(state, action);
      state.timezone = action.payload;
    }
  }
});

export const { changeTimezone } = timezoneSlice.actions;

export default timezoneSlice.reducer;
