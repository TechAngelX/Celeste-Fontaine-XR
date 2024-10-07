import React, { useState } from "react"; // Import useState for state management
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import renderFormGroupField from "../../helpers/renderFormGroupField";
import { ReactComponent as IconUser } from "bootstrap-icons/icons/person.svg";
import { ReactComponent as IconShieldLock } from "bootstrap-icons/icons/shield-lock.svg";
import { ReactComponent as IconEnvelope } from "bootstrap-icons/icons/envelope.svg";

// Helper function to render a field
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
  const [message, setMessage] = useState(""); // State to hold feedback message
  const navigate = useNavigate(); // Initialize useNavigate for redirection

  const onSubmit = async (formData) => {
    console.log("Form submitted:", formData); // Log the form data

    try {
      const response = await fetch("http://localhost:5503/account/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          pWord: formData.password, // Ensure to send password as pWord
          email: formData.email,
        }), // Send the data without accType
      });

      console.log("Response status:", response.status); // Log the response status

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Signup failed:", errorData.error);
        setMessage(`Signup failed: ${errorData.error}`); // Set error message
        return;
      }

      console.log("User signed up successfully");
      setMessage("Signup successful!"); // Set success message

      // Redirect to home page after successful signup
      navigate("/home");

    } catch (error) {
      console.error("Error in registration process:", error.message);
      setMessage(`Error: ${error.message}`); // Set error message
    }
  };

  return (
      <form
          onSubmit={handleSubmit(onSubmit)} // Handle form submission with Redux Form
          className={`needs-validation ${submitFailed ? "was-validated" : ""}`} // Conditional class for validation
          noValidate
      >
        {renderField({
          name: "firstName",
          type: "text",
          label: "First Name",
          placeholder: "Enter your first name",
          icon: IconUser,
          // validate: [required], // Validation function for first name
          required: true,
          className: "mb-3",
        })}

        {renderField({
          name: "lastName",
          type: "text",
          label: "Last Name",
          placeholder: "Enter your last name",
          icon: IconUser,
          // validate: [required], // Validation function for last name
          required: true,
          className: "mb-3",
        })}

        {renderField({
          name: "email",
          type: "email",
          label: "Email",
          placeholder: "Enter your email",
          icon: IconEnvelope,
          // validate: [required, email], // Validation functions for email
          required: true,
          className: "mb-3",
        })}

        {renderField({
          name: "password",
          type: "password",
          label: "Your Password",
          placeholder: "******",
          icon: IconShieldLock,
          // validate: [required, maxLength20, minLength8], // Validation functions for password
          required: true,
          className: "mb-3",
        })}

        <div className="d-grid">
          <button
              type="submit"
              className="btn btn-primary mb-3"
              disabled={submitting} // Disable button while submitting
          >
            Sign Up
          </button>
        </div>

        <Link className="float-start" to="/account/loginform" title="Log In">
          Already have an account? Log In
        </Link>

        <div className="clearfix"></div>
        <hr />

        {/* Acknowledgment Message */}
        {message && (
            <div className={`alert ${message.includes("failed") ? "alert-danger" : "alert-success"}`} role="alert">
              {message}
            </div>
        )}

        <div className="row">
          <div className="col text-center">
            <p className="text-muted small">Or you can join with</p>
          </div>
          <div className="col text-center">
            <Link to="/" className="btn btn-light text-white bg-twitter me-3">
              <i className="bi bi-twitter-x" />
            </Link>
            <Link to="/" className="btn btn-light text-white me-3 bg-facebook">
              <i className="bi bi-facebook mx-1" />
            </Link>
            <Link to="/" className="btn btn-light text-white me-3 bg-google">
              <i className="bi bi-google mx-1" />
            </Link>
          </div>
        </div>
      </form>
  );
};

export default compose(
    reduxForm({
      form: "registerForm",
    })
)(RegisterForm);
