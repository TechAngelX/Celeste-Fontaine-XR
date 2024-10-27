//RegisterForm.jsx - front-facing pretty register form
import React, { useState } from "react";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import { Link, useNavigate } from "react-router-dom";
import renderFormGroupField from "../../helpers/renderFormGroupField";
import { ReactComponent as IconUser } from "bootstrap-icons/icons/person.svg";
import { ReactComponent as IconShieldLock } from "bootstrap-icons/icons/shield-lock.svg";
import { ReactComponent as IconEnvelope } from "bootstrap-icons/icons/envelope.svg";
import { required, maxLength20, minLength8, email } from "../../helpers/validation";

const renderField = ({
                       name,
                       type,
                       label,
                       placeholder,
                       icon,
                       validate,
                       required,
                       className,
                     }) => (
    <Field
        name={name}
        type={type}
        label={label}
        component={renderFormGroupField}
        placeholder={placeholder}
        icon={icon}
        validate={validate}
        required={required}
        className={className}
    />
);

const RegisterForm = ({ handleSubmit, submitting, submitFailed }) => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (formData) => {
    console.log("Form submitted:", formData);

    try {
      const response = await fetch(`${process.env.HOST}:${process.env.PORT}/account/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          uname: formData.firstName, // Assuming uname corresponds to first name
          pword: formData.password, // Assuming pWord corresponds to password
          fname: formData.firstName,
          lname: formData.lastName,
          email: formData.email,
          accType: 0 // Set the accType directly as per your requirement
        }),
      });

      console.log("Response status:", response.status);

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Signup failed:", errorData.error);
        setMessage(`Signup failed: ${errorData.error}`);
        return;
      }

      console.log("User signed up successfully");
      setMessage("Signup successful!");
      navigate("/home");

    } catch (error) {
      console.error("Error in registration process:", error.message);
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
      <form
          onSubmit={handleSubmit(onSubmit)}
          className={`needs-validation ${submitFailed ? "was-validated" : ""}`}
          noValidate
      >
        {renderField({
          name: "firstName",
          type: "text",
          label: "First Name",
          placeholder: "Enter your first name",
          icon: IconUser,
          validate: [required],
          required: true,
          className: "mb-3",
        })}

        {renderField({
          name: "lastName",
          type: "text",
          label: "Last Name",
          placeholder: "Enter your last name",
          icon: IconUser,
          validate: [required],
          required: true,
          className: "mb-3",
        })}

        {renderField({
          name: "email",
          type: "email",
          label: "Email",
          placeholder: "Enter your email",
          icon: IconEnvelope,
          validate: [required, email],
          required: true,
          className: "mb-3",
        })}

        {renderField({
          name: "password",
          type: "password",
          label: "Your Password (minimum 8 characters)",
          placeholder: "******",
          icon: IconShieldLock,
          validate: [required, minLength8, maxLength20],
          required: true,
          className: "mb-3",
        })}

        <div className="d-grid">
          <button
              type="submit"
              className="btn btn-primary mb-3"
              disabled={submitting}
          >
            Sign Up
          </button>
        </div>

        <Link className="float-start" to="/account/loginform" title="Log In">
          Already have an account? Log In
        </Link>

        <div className="clearfix"></div>
        <hr />

        {message && (
            <div className={`alert ${message.includes("failed") ? "alert-danger" : "alert-success"}`} role="alert">
              {message}
            </div>
        )}
      </form>
  );
};

export default compose(
    reduxForm({
      form: "registerForm",
    })
)(RegisterForm);
