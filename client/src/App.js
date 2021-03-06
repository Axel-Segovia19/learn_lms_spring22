import { Routes, Route } from "react-router-dom";
import MainNavbar from "./components/shared/MainNavbar";
import Footer from "./components/shared/Footer";
import Home from './components/shared/Home';
import Courses from "./components/courses/Courses";
import Users from "./components/users/Users";
import Nomatch from "./components/shared/NoMatch";
import UserShow from "./components/users/UserShow";
import CourseShow from "./components/courses/CourseShow";
import Enrollments from "./components/enrollments/Enrollments";

const App = () => (
  <>
    <MainNavbar />
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/courses' element={ <Courses /> } />
      <Route path='/courses/:courseId' element={ <CourseShow /> } />
      <Route path='/:courseId/enrollments' element={ <Enrollments /> } />
      <Route path='/users' element={ <Users /> } />
      <Route path='/users/:userId' element={ <UserShow /> } />
      <Route path='*' element={ <Nomatch /> } />
    </Routes>
    <Footer />
  </>
)

export default App;