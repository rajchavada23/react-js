import React from "react";
import UserContextProvider from "./context/UserContextProvider";
import Login from "./components/ContextComponents/Login";
import Profile from "./components/ContextComponents/Profile";

function MiniContext() {
  return (
    <>
      <UserContextProvider>
        <h1>React with Chai and share is important</h1>
        <Login />
        <Profile />
      </UserContextProvider>
    </>
  );
}

export default MiniContext;
