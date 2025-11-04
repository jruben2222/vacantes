import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import StudentPage from "./pages/StudentPage";
import Company from "./pages/CompanyPage";
import ErrorPage from "./pages/ErrorPage";

function App() {

  return (
    <Routes>
  <Route path="/" element={ <HomePage /> }/>
  <Route path="/companies" element={ <Company /> }/>
  <Route path="/students" element={ <StudentPage /> }/>

  
  
  <Route path="*" element={ <ErrorPage /> }/>
</Routes>
  );
}

export default App;