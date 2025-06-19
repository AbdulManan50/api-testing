// import React from 'react'
// import { GoogleLogin } from '@react-oauth/google'
// import { jwtDecode } from 'jwt-decode';
// import { useNavigate } from 'react-router-dom';
// import { SsoLogin } from "../Services/Google";

// const Google = () => {

//   const navigate = useNavigate()


//   const handleLogin = async (token) => {
//     const response = await SsoLogin({
//       provider: 'Google',
//       token: token
//     });

//     console.log("SSO login response", response)
//     localStorage.setItem('token', response.token)
//   }
//   return (
//     <div>
//       <GoogleLogin
//         onSuccess={credentialResponse => {
//           const token = credentialResponse.credential;
//           console.log(token);
//           handleLogin(token)
//           navigate("/home")
//         }}
//         onError={() => {
//           console.log('Login Failed');
//         }}
//         useOneTap
//       />
//     </div>
//   )
// }


// export default Google



import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { SsoLogin } from '../Services/Google'; // Make sure this is a named export

const Google = () => {
  const navigate = useNavigate();

  const handleLogin = async (token) => {
    try {
      const response = await SsoLogin({
        provider: 'Google',
        token: token
      });

      console.log('SSO login response:', response);

      if (response && response.token) {
        localStorage.setItem('token', response.token);
        navigate('/home'); // Redirect only after successful login
      } else {
        console.error('No token received from server');
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div>
      <GoogleLogin
        onSuccess={async (credentialResponse) => {
          const token = credentialResponse.credential;
          console.log('Google token:', token);
          await handleLogin(token); // Wait for login to complete
        }}
        onError={() => {
          console.log('Login Failed');
        }}
        useOneTap
      />
    </div>
  );
};

export default Google;
