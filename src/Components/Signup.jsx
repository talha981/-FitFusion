import React, { useReducer } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const initialSignupValues = {
  email: '',
  password: '',
  confirmPassword: '',
};

const signupValidationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().min(3, 'Password must be at least 3 characters').required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Please confirm your password'),
});

const SIGNUP_FORM_UPDATE = 'SIGNUP_FORM_UPDATE';

const signupFormReducer = (state, action) => {
  switch (action.type) {
    case SIGNUP_FORM_UPDATE:
      return {
        ...state,
        [action.field]: action.value,
      };
    default:
      return state;
  }
};

const Signup = () => {
  const [formState, dispatch] = useReducer(signupFormReducer, initialSignupValues);

  const handleSignupSubmit = async (values, { setSubmitting, resetForm, setErrors }) => {
    try {
      const response = await axios.post('http://localhost:5000/signup', values);
      alert('User Created');
      resetForm();
    } catch (error) {
      if (error.response) {
        setErrors({ server: error.response.data.message });
      } else if (error.request) {
        setErrors({ server: 'No response from server' });
      } else {
        setErrors({ server: 'An unexpected error occurred' });
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Sign Up</h2>
        <Formik
          initialValues={formState}
          validationSchema={signupValidationSchema}
          onSubmit={handleSignupSubmit}
        >
          {({ isSubmitting, setFieldValue, errors }) => (
            <Form>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <Field
                  type="email"
                  name="email"
                  autoComplete="email"
                  className="mt-1 block w-full border border-gray-300 rounded p-2"
                  onChange={(e) => {
                    const value = e.target.value;
                    dispatch({ type: SIGNUP_FORM_UPDATE, field: 'email', value });
                    setFieldValue('email', value);
                  }}
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700">Password</label>
                <Field
                  type="password"
                  name="password"
                  autoComplete="new-password"
                  className="mt-1 block w-full border border-gray-300 rounded p-2"
                  onChange={(e) => {
                    const value = e.target.value;
                    dispatch({ type: SIGNUP_FORM_UPDATE, field: 'password', value });
                    setFieldValue('password', value);
                  }}
                />
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div className="mb-6">
                <label htmlFor="confirmPassword" className="block text-gray-700">Confirm Password</label>
                <Field
                  type="password"
                  name="confirmPassword"
                  autoComplete="new-password"
                  className="mt-1 block w-full border border-gray-300 rounded p-2"
                  onChange={(e) => {
                    const value = e.target.value;
                    dispatch({ type: SIGNUP_FORM_UPDATE, field: 'confirmPassword', value });
                    setFieldValue('confirmPassword', value);
                  }}
                />
                <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              {errors.server && <div className="text-red-500 text-sm mb-4">{errors.server}</div>}

              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
                  disabled={isSubmitting}
                >
                  Sign Up
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Signup;
    