  "use client";

  import React from "react";
  import { useSearchParams } from "next/navigation";

  const Login = () => {
    const searchParams = useSearchParams();

    const handleSubmit = async (event) => {
      event.preventDefault();

      const formData = new FormData(event.target);
      const username = formData.get("username");
      const password = formData.get("password");
      const res = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
      });

      const { success } = await res.json();
      if (!success) return alert("login fail");

      const nextUrl = searchParams.get("next");
      window.location.pathname = nextUrl || "/";
    };

    return (
      <div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-wrap items-center gap-4"
        >
          <div>
            <label>Username :</label>
            <input
              type="text"
              name="username"
              defaultValue="admin"
              placeholder="Username"
            />
          </div>
          <div>
            <label>Password :</label>
            <input
              type="text"
              name="password"
              defaultValue="admin"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="p-4">
            Login
          </button>
        </form>
      </div>
    );
  };

  export default Login;
