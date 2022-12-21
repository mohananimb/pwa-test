import { useRouter } from "next/router";
import React from "react";

const Documents = () => {
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
        This is documents Documents page
      </span>
      <button onClick={() => router.push("/users")}>
        Click here to go users page
      </button>
    </div>
  );
};

export default Documents;
