import Login from "./Login";
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import PrivateRoute from "./PrivateRoute";

const App = () => {
  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <div className="w-100" style={{ maxWidth: '400px' }}>
        <Router>
          <AuthProvider>
            <Routes>
              <Route exact path="/" element = { <PrivateRoute><Dashboard /></PrivateRoute> }></Route>
              <Route path="/update-profile" element = { <PrivateRoute><UpdateProfile /></PrivateRoute> }></Route>
              <Route path="/signup" element = { <Signup /> }></Route>
              <Route path="/login" element = { <Login /> }></Route>
              <Route path="/forgot-password" element = { <ForgotPassword /> }></Route>
            </Routes>
          </AuthProvider>
        </Router>
        
      </div>
    </Container>
  )
}

export default App;
