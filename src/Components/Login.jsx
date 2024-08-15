import React, { useReducer } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const initialLoginValues = {
  email: '',
  password: '',
};

const loginValidationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().min(3, 'Password must be at least 3 characters').required('Password is required'),
});

const LOGIN_FORM_UPDATE = 'LOGIN_FORM_UPDATE';

const loginFormReducer = (state, action) => {
  switch (action.type) {
    case LOGIN_FORM_UPDATE:
      return {
        ...state,
        [action.field]: action.value,
      };
    default:
      return state;
  }
};

const Login = () => {
  const navigate = useNavigate();

  const [formState, dispatch] = useReducer(loginFormReducer, initialLoginValues);

  const onLoginSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const response = await axios.post('http://localhost:5000/login', values);
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard');

      alert('Login successful');
      // Redirect or handle successful login
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
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Login</h2>
        <Formik
          initialValues={formState}
          validationSchema={loginValidationSchema}
          onSubmit={onLoginSubmit}
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
                    dispatch({ type: LOGIN_FORM_UPDATE, field: 'email', value });
                    setFieldValue('email', value);
                  }}
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700">Password</label>
                <Field
                  type="password"
                  name="password"
                  autoComplete="current-password"
                  className="mt-1 block w-full border border-gray-300 rounded p-2"
                  onChange={(e) => {
                    const value = e.target.value;
                    dispatch({ type: LOGIN_FORM_UPDATE, field: 'password', value });
                    setFieldValue('password', value);
                  }}
                />
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              {errors.server && <div className="text-red-500 text-sm mb-4">{errors.server}</div>}

              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                  disabled={isSubmitting}
                >
                  Login
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
