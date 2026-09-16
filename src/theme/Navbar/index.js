import React from "react";
import Navbar from "@theme-original/Navbar";

export default function NavbarWrapper(props) {
  return (
    <>
      <div
        style={{
          background: "#8a2c0d",
          color: "white",
          textAlign: "center",
          padding: "0.5rem 1rem",
          fontSize: "0.9rem",
        }}
      >
        You are viewing a project that is currently in draft state for the
        Standards Working Group in the Green Software Foundation. This
        project should not be considered finished or officially supported in
        any way by the Green Software Foundation or its members.
      </div>
      <Navbar {...props} />
    </>
  );
}
