import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { Card, Button, Alert } from "react-bootstrap";
import Quiz from "./IntroQuiz/Quiz";

const Profile = () => {
    const auth = getAuth();
    const navigate = useNavigate();
    const user = auth.currentUser;
    const [error, setError] = useState("")

    const logoutUser = async (e) => {
        e.preventDefault();

        await signOut(auth);
        navigate("/");
    }

    return(
        <>
            <Card>
                <Card.Body>
                    <h2 className='text-center mb-4'>Profile</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <strong>Email:</strong> {user.email}
                    <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
                        Update Profile
                    </Link>
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'>
                <Button variant="link" onClick = {(e) => logoutUser(e)}>Log Out</Button>
            </div>
        </>
    )
    }
export default Profile
/*
                <div className="container-fluid">
            <div class="row">
                <div class="col-xs-4 justify-content-right">
                    <button type = "submit" className="btn btn-primary btn-sm mt-2" onClick = {(e) => logoutUser(e)}>Logout</button>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-md-4 text-center">
                    <p>Welcome <em className="text-decoration-underline">{ user.email }</em>. You are logged in!</p>
                    <div>
                        <Quiz />
                    </div>
                </div>
            </div>
        </div>
    )
}
*/
