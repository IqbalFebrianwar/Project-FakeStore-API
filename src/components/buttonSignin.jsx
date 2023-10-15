"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const ButtonSignin = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const getToken = localStorage.getItem("token");
    setToken(getToken);
  }, []);

  const signOut = () => {
    localStorage.removeItem("token")
    setToken(null)
  }

  return (
    <>
      {token == null ? (
        <Link href={"/signin"} className="btn bg-black text-white">
          Sign In
        </Link>
      ) : (
        <button onClick={signOut} className="btn bg-black text-white">
          Sign Out
        </button>
      )}
    </>
  );
};
export default ButtonSignin;
