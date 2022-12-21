import { useRouter } from "next/router";
import React from "react";

const users = () => {
  const router = useRouter();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <span
        style={{
          marginBottom: "10px",
        }}
      >
        {" "}
        This is users page
      </span>
      <button onClick={() => router.push("/")}>Click here to home</button>
    </div>
  );
};

export default users;
