import './App.css';
import CourseTimeline from './components/CourseTimeline';
import {
    HashRouter as Router,
    Switch,
    Route
} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router basename="/course_table">
                <Switch>
                    <Route path={["/:period", "/", "/course_table",  "/course_table/", "/course_table/:period"]}>
                        <CourseTimeline />
                    </Route>
                </Switch>
            </Router>
        </div>

    );
}

export default App;
