import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./page/login";
import Registration from "./page/Registration";
import CreateJob from "./page/createJob";
import Job from "./page/job";
import ViewJobDetails from "./page/viewJobDetails";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/registration" element={<Registration/>}/>
            <Route path="/job" element={<Job/>}/>
            <Route path="/job/:id" element={<ViewJobDetails/>}/>
            <Route path="/createjob" element={<CreateJob/>}/>
            <Route path="/editjob/:id" element={<CreateJob/>}/>
            <Route path="*" element={<h1>Not Found</h1>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
