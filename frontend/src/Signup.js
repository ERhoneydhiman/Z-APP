import React, { useState } from "react";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState();

  const API_URL = process.env.REACT_APP_API_URL;

  const collectUserDetail = async () => {
    const user = { name, email, password, gender };
    console.log(name, password, email, gender);
    const responce = await fetch(`${API_URL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const result = await responce.json();
    localStorage.setItem("user", JSON.stringify(result));
    console.log(result);
  };

  return (
    <div className="signup">
      <div className="form">
        <input
          required
          value={name}
          id="name"
          type="text"
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          required
          value={email}
          id="email"
          type="email"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label for="m">
          <input
            type="radio"
            name="gender"
            id="m"
            value="male"
            checked={gender === "male"}
            onChange={(e) => setGender(e.target.value)}
          />
          male
        </label>
        <label for="f">
          <input
            type="radio"
            name="gender"
            id="f"
            value="female"
            checked={gender === "female"}
            onChange={(e) => setGender(e.target.value)}
          />
          female
        </label>

        <input
          required
          value={password}
          id="password"
          type="password"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={collectUserDetail}>Submit</button>
      </div>
    </div>
  );
}

export default Signup;
