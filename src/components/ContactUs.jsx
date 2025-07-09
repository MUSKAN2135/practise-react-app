import React, { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";

export default function ContactUs({ onSubmitForm }) {
  const [formData, setFormData] = useState({});
  const [showPassword, setShowPassword] = useState();

  //we use this handlechange to control all input fields not just one
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitForm(formData); // pass data to parent
    setFormData({ 
    First_Name: '',
    Last_Name: '', 
    Email: '', 
    Password: '' });
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label>First Name</label>
          <input
            type="text"
            name="First_Name"
            value={formData.First_Name}
            onChange={handleChange}
            className="w-full border px-2 py-1"
            required
          />
        </div>
        <div className="mb-4">
          <label>Last Name</label>
          <input
            type="text"
            name="Last_Name"
            value={formData.Last_Name}
            onChange={handleChange}
            className="w-full border px-2 py-1"
            required
          />
        </div>
        <div className="mb-4">
          <label>Email</label>
          <input
            type="email"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
            className="w-full border px-2 py-1"
            required
          />
        </div>
        <div className="mb-4">
          <label>Password</label>
          <div className="flex items-center border">
            <input
              type={showPassword ? "text" : "password"}
              name="Password"
              value={formData.Password}
              onChange={handleChange}
              className="w-full px-2 py-1"
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="px-2"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}
