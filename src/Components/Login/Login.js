import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as Components from './Components';
import './Login.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role] = useState(''); // Default as blank, no input field
  const [shopName] = useState(''); // Default as blank, no input field
  const [region] = useState(''); // Default as blank, no input field
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [signIn, setSignIn] = useState(true);

  const navigate = useNavigate();

  const handleSignUp = async (event) => {
    event.preventDefault();

    if (!username || !password) {
      toast.error('Username and Password must be filled!');
      return;
    }

    try {
      const response = await axios.post('http://localhost:9099/person/register', {
        
   
            "username":username ,
            "password": password,
            "role": "ADMIN"     
           
        
      });
      localStorage.setItem('authToken', response.data.token);
      

      if (response.status === 200) {
        toast.success('Signed up successfully! Logging in...');
        console.log("Succes");
        setSignIn(true); // Redirect to sign-in form after successful registration
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        toast.error('User already exists!');
      } else {
        toast.error('There was an error signing up!');
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:9099/person/login', { 
      username, password });
      console.log(response);
      if (response.data.token) {
        localStorage.setItem('authToken', response.data.token);
        onLogin();
        navigate('/overview');
        console.log("logged in")
        setError('Login Sucess');
      } else {
        setError('Invalid credentials.');
      }
    } catch (error) {
      setError('Login failed. Please check your credentials and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="login">
        <Components.Container>
          <Components.SignUpContainer signingIn={signIn}>
            <Components.Form onSubmit={handleSignUp}>
              <Components.Title>Create Account</Components.Title>
              <Components.Input
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
              <Components.Input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <Components.Button type="submit">Sign Up</Components.Button>
            </Components.Form>
          </Components.SignUpContainer>

          <Components.SignInContainer signingIn={signIn}>
            <Components.Form onSubmit={handleSubmit}>
              <Components.Title>Sign In</Components.Title>
              <Components.Input
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
              <Components.Input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              {error && <p className="error">{error}</p>}
              <Components.Anchor href="#">Forgot your password?</Components.Anchor>
              <Components.Button type="submit" disabled={loading}>
                {loading ? 'Signing In...' : 'Sign In'}
              </Components.Button>
            </Components.Form>
          </Components.SignInContainer>

          <Components.OverlayContainer signingIn={signIn}>
            <Components.Overlay signingIn={signIn}>
              <Components.LeftOverlayPanel signingIn={signIn}>
                <Components.Title>Welcome Back!</Components.Title>
                <Components.Paragraph>
                  To keep connected with us please log in with your personal info
                </Components.Paragraph>
                <Components.GhostButton onClick={() => setSignIn(true)}>Sign In</Components.GhostButton>
              </Components.LeftOverlayPanel>
              <Components.RightOverlayPanel signingIn={signIn}>
                <Components.Title>Hello!</Components.Title>
                <Components.Paragraph>
                  Enter your personal details and start your journey with us
                </Components.Paragraph>
                <Components.GhostButton onClick={() => setSignIn(false)}>Sign Up</Components.GhostButton>
              </Components.RightOverlayPanel>
            </Components.Overlay>
          </Components.OverlayContainer>
        </Components.Container>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
