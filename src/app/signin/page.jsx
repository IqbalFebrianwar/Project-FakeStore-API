"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SigninPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router=useRouter()
  const [isLoading, setIsloading] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault()
    setIsloading(true)

    try {
      const res = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });


      if(res.ok){
        const getToken = await res.json()
        localStorage.setItem("token", getToken.token)
        router.push('/')
      }else{
        setErrorMessage("Email or password is invalid!");
      }

      setIsloading(false)
      
    } catch (error) {
      setIsloading(false)
    }
  };
  return (
    <div className="w-full flex h-screen items-center justify-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="w-full grid space-y-5 my-10 justify-center">
          <p className="text-lg font-bold">Sign In</p>
          {errorMessage && <div>{errorMessage}</div>}
          <form onSubmit={handleLogin} className="w-full grid space-y-5 my-10 justify-center">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="input input-bordered input-accent w-full max-w-xs"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="input input-bordered input-accent w-full max-w-xs"
            />
            <button type="submit"  className="btn bg-black text-white" disabled={isLoading}>
              { isLoading ? <div className="loading"></div> : null }
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SigninPage;
