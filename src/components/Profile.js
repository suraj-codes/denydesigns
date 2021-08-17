import React from "react";
import { Link, useHistory } from "react-router-dom";

const Profile = () => {
  const history = useHistory();
  return (
    <div className="profile">
      <div className="profile__container">
        <h2>Wholesale Login</h2>

        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          name=""
          id="email"
          placeholder="you@your-company.com"
        />

        <label htmlFor="password">Password</label>
        <input type="password" name="" id="password" />
        <Link to="/">Forgot Password?</Link>
        <button>let's go!</button>
        <p>Not a wholesale partner?</p>
        <div className="profile__buttons">
          <button>Keep browsing</button>
          <button
            onClick={() => {
              history.push("/signup");
            }}
          >
            apply here
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
