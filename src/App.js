import './App.css';
import CourseTimeline from './components/CourseTimeline';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router basename="/course_table">
                <Switch>
                    <Route path={["/:period", "/"]}>
                        <CourseTimeline />
                    </Route>
                </Switch>
            </Router>
        </div>

    );
}

export default App;
