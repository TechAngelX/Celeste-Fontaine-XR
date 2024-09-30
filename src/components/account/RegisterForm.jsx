import React from "react";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import { Link } from "react-router-dom";
import renderFormGroupField from "../../helpers/renderFormGroupField";
import {
  required,
  maxLength20,
  minLength8,
  email,
} from "../../helpers/validation";
import { ReactComponent as IconUser } from "bootstrap-icons/icons/person.svg";
import { ReactComponent as IconShieldLock } from "bootstrap-icons/icons/shield-lock.svg";
import { ReactComponent as IconEnvelope } from "bootstrap-icons/icons/envelope.svg";

// Helper function to render a field
const renderField = ({ name, type, label, placeholder, icon, validate, required, className }) => (
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

// onSubmit function to handle form submission
const onSubmit = async (formData) => {
  console.log("Form submitted:", formData);
  try {
    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    console.log('Response status:', response.status); // Log the response status

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Signup failed:', errorData.error);
      // You can display an error message to the user here if needed
      return; // Exit the function on error
    }

    console.log('User signed up successfully');
    // Optionally redirect or show a success message here
  } catch (error) {
    console.error('Error in signup process:', error.message);

  }
};

const SignInForm = ({ handleSubmit, submitting, submitFailed }) => (
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
        label: "Your Password",
        placeholder: "******",
        icon: IconShieldLock,
        validate: [required, maxLength20, minLength8],
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

      <Link className="float-start" to="/account/signin" title="Log In">
        Already have an account? Log In
      </Link>

      <div className="clearfix"></div>
      <hr />

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

export default compose(
    reduxForm({
      form: "signin",
    })
)(SignInForm);
