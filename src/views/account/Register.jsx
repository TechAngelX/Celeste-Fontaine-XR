import React, { lazy } from "react";
import { Link } from "react-router-dom";
import '../../styles/index.css';

const RegisterForm = lazy(() => import("../../components/account/RegisterForm"));

const RegisterView = () => {
  const onSubmit = async (values) => {
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Failed to register');
      }

      const data = await response.json();
      alert(data.message);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
      <div className="container my-3">
        <div className="row border">
          <div className="col-md-6 bg-light bg-gradient p-3 d-none d-md-block">
            <Link to="/">
              <img
                  src="../../images/banner/Dell.webp"
                  alt="..."
                  className="img-fluid"
              />
            </Link>
            <Link to="/">
              <img
                  src="../../images/banner/Laptops.webp"
                  alt="..."
                  className="img-fluid"
              />
            </Link>
          </div>
          <div className="col-md-6 p-3">
            <h4 className="text-center">Register</h4>
            <RegisterForm onSubmit={onSubmit} />
          </div>
        </div>
      </div>
  );
};

export default RegisterView;
