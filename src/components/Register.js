import React from "react";

const Register = () => {
  return (
    <div className="register">
      <form>
        <p>
          <span style={{ color: "red" }}>*</span> indicates a required field
        </p>
        <div className="row">
          <div>
            <label htmlFor="firstname">
              first name <span style={{ color: "red" }}>*</span>
            </label>
            <input type="text" id="firstname" required />
          </div>
          <div>
            <label htmlFor="lastname">
              last name <span style={{ color: "red" }}>*</span>
            </label>
            <input type="text" id="lastname" required />
          </div>
        </div>
        <div className="row">
          <div>
            <label htmlFor="phone">
              phone <span style={{ color: "red" }}>*</span>
            </label>
            <input type="text" id="phone" required />
          </div>
          <div>
            <label htmlFor="mobile">mobile phone</label>
            <input type="text" id="mobile" />
          </div>
        </div>
        <div className="row">
          <div>
            <label htmlFor="email">
              email <span style={{ color: "red" }}>*</span>
            </label>
            <input type="text" id="email" required />
          </div>
        </div>
        <hr />
        <div className="row">
          <div>
            <label htmlFor="company">
              company name <span style={{ color: "red" }}>*</span>
            </label>
            <input type="text" id="company" required />
          </div>
          <div>
            <label htmlFor="website">
              company website <span style={{ color: "red" }}>*</span>
            </label>
            <input type="text" id="website" required />
          </div>
        </div>
        <div className="row">
          <div>
            <label htmlFor="address">
              company address <span style={{ color: "red" }}>*</span>
            </label>
            <input type="text" id="address" required />
          </div>
          <div>
            <label htmlFor="address2">Address 2</label>
            <input type="text" id="address2" />
          </div>
        </div>
        <div className="row">
          <div>
            <label htmlFor="city">
              city <span style={{ color: "red" }}>*</span>
            </label>
            <input type="text" id="city" required />
          </div>
          <div>
            <label for="state">State</label>
            <select id="state" name="state">
              <option value="maha">Maharashtra</option>
              <option value="bihar">Bihar</option>
              <option value="gujrat">Gujrat</option>
              <option value="karnatak">Karnataka</option>

              <option value="up">Uttar Pradesh</option>
              <option value="punjab">Punjab</option>
              <option value="rajastan">Rajastan</option>
            </select>
          </div>
        </div>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default Register;
