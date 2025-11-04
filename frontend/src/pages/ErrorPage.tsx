import { Link } from "react-router-dom";
import "./ErrorPage.css";

import Footer from "../components/Footer";

const ErrorPage = () => {
  return (
    <div>
 
      <section id="error-page">
        <h1>ERROR</h1>
        <h2>No puedes entrar ahí.</h2>
        <Link to="/">Ir a Home</Link>
    </section>
     <Footer />
    </div>
    
  )
}

export default ErrorPage