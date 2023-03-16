import { Mail } from "@geist-ui/icons";
import { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, Navigate } from "react-router-dom";
import { auth } from "../firebase";
import NavBar from "../components/navbar/NavBar";

function LoginEmail() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const signInWithEmailAndPasswordHandler = (e: React.FormEvent) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  if (error) {
    return (
      <div className="flex h-screen flex-col items-center justify-center">
        <p>Error: {error.message}</p>
        <button
          onClick={() => window.location.reload()}
          className="font-semibold text-blue-500 hover:underline hover:underline-offset-2"
        >
          Try again
        </button>
      </div>
    );
  }
  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }
  if (user) {
    return <Navigate to="/chatroom" />;
  }

  return (
    <>
      <div className="container mx-auto max-w-7xl px-8">
        <NavBar />
      </div>
      <div className="container mx-auto">
        <div className="flex h-screen">
          <div className="m-auto w-full max-w-xs">
            <div className="-mt-60 flex flex-col items-center justify-center gap-4">
              <h1 className="mb-4 text-3xl font-bold">Log in to ChatApp</h1>
              {/* Login with Email */}
              <form
                onSubmit={signInWithEmailAndPasswordHandler}
                className="flex w-full flex-col gap-4"
              >
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-md bg-black p-3 ring ring-neutral-800"
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-md bg-black p-3 ring ring-neutral-800"
                />
                <button
                  type="submit"
                  className="mt-2 w-full rounded-md bg-blue-600 py-3 text-white saturate-150 hover:bg-black hover:text-blue-600 hover:ring hover:ring-blue-600 hover:saturate-150"
                >
                  <div className="flex h-full flex-row items-center justify-center px-3">
                    <Mail className="h-6 w-6" />
                    <div className="w-full font-semibold">
                      Continue with Email
                    </div>
                  </div>
                </button>
              </form>
              <div className="mt-4 flex w-full justify-center">
                <Link
                  to="/login"
                  className="font-semibold text-blue-500 hover:underline hover:underline-offset-2"
                >
                  ← Back to Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginEmail;
