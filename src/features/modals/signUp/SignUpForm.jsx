import React, { useMemo } from "react";

const SignUpForm = () => {
  //Prevents re-rendering of static form/terms JSX
  const termsText = useMemo(
    () => (
      <p className="terms text-muted">
        By signing up, you agree to our <a href="#">Terms of Service</a> &{" "}
        <a href="#">Privacy Policy</a>
      </p>
    ),
    []
  );
  return (
    <form action="">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control border shadow-sm"
          id="name"
          placeholder="Enter Your Name"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="signupEmail" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control border shadow-sm"
          id="signupEmail"
          placeholder="Enter Email Address"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control border shadow-sm"
          id="password"
          placeholder="Enter Password"
          required
        />
      </div>

      {termsText}

      <button type="submit" className="btn text-white btn-signup w-100">
        Sign Up
      </button>
    </form>
  );
};

export default React.memo(SignUpForm);
