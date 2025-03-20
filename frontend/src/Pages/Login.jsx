import { useState,useEffect } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";


export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate=useNavigate()
  useEffect(()=>{
    document.body.style.backgroundColor='black'
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
  
    console.log("Email:", email, "Password:", password);
    axios.post('http://localhost:3000/auth/login', {
      email: email,
      password: password
    })
      .then((response) => {
        if (response.status !==200) throw new Error("Login failed");

        console.log(response)
    const token = response.data.token

    if (token) {
      localStorage.setItem("token", token);
      console.log("Login successful, token saved!");
      navigate('/');
    } else {
      console.error("No token received");
      alert("Login failed, try again!");
    }
  }).catch ((err)=> {
    console.error("Error:", err);
  })
  };
  

  return (
    <>
      {/**
        This example requires updating your template:

        <html class="h-full bg-white">
        <body class="h-full">
      */}
      <div className="h-screen w-screen bg-black">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
         
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-white left"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-white left"
              >
                Password
              </label>
              <div className="mt-2 relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <div

                  
                  onClick={() => setShowPassword(!showPassword)}
                  className="size-8 absolute inset-y-0 right-0 flex items-center pr-3 text-white hover:text-white"
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.98 8.466C4.955 7.364 7.276 5.25 12 5.25c4.723 0 7.045 2.114 8.02 3.216a3.984 3.984 0 01.89 2.284c0 .88-.324 1.696-.89 2.284-.975 1.102-3.297 3.216-8.02 3.216-4.723 0-7.045-2.114-8.02-3.216a3.984 3.984 0 01-.89-2.284c0-.88.324-1.696.89-2.284z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.98 8.466C4.955 7.364 7.276 5.25 12 5.25c4.723 0 7.045 2.114 8.02 3.216a3.984 3.984 0 01.89 2.284c0 .88-.324 1.696-.89 2.284-.975 1.102-3.297 3.216-8.02 3.216-4.723 0-7.045-2.114-8.02-3.216a3.984 3.984 0 01-.89-2.284c0-.88.324-1.696.89-2.284z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <line
                        x1="4.5"
                        y1="4.5"
                        x2="19.5"
                        y2="19.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                  )}
                </div>
              </div>
              <div className="mt-2 text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-white"
                >
                  Remember me
                </label>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
            <div className="mt-2 text-sm text-center">
              <p>
                Don’t have an account?{' '}
                <a
                  href="/sign-up"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Sign up
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
      </div>
    </>
  );
}