import './App.css';
import CourseTimeline from './components/CourseTimeline';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import TimezoneSelect from "./components/TimezoneSelect";

function App() {
  return (
    <div>
      <Router basename="/course_table">
        <Switch>
          <Route path={["/:period", "/", "/course_table", "/course_table/", "/course_table/:period"]}>
            <TimezoneSelect />
            <CourseTimeline/>
          </Route>
        </Switch>
      </Router>
    </div>

  );
}

export default App;
