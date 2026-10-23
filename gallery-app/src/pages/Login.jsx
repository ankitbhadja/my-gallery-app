import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const schema = yup.object().shape({
  email: yup.string(),
  password: yup.string().required("Password is required"),
});

const Login =() => {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      
      const payload = {
        username: data.email,
        password: data.password
      }

      const response = await axios.post("https://myxfwc9qnl.execute-api.ap-south-1.amazonaws.com/dev/login", payload);

      if (response.status === 200 && response.data?.token) {
        localStorage.setItem('token', response.data?.token);
        navigate("/");
        reset();
      } else {
        setErrorMessage("Login failed. Please check your credentials.");
        reset();
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage("An error occurred during login.");
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        {/* <div className="py-4">
          <img className="mx-auto w-auto h-18" src="/logo.jpeg" alt="logo" />
        </div> */}
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              {...register("email")}
              placeholder="Email"
              className="w-full p-2 border rounded"
            />
            <p className="text-red-500 text-sm">{errors.email?.message}</p>
          </div>
          <div>
            <input
              {...register("password")}
              type="password"
              placeholder="Password"
              className="w-full p-2 border rounded"
            />
            <p className="text-red-500 text-sm">{errors.password?.message}</p>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded bg-dark"
          >
            Submit
          </button>

          {errorMessage && (
            <p className="text-center text-red-500 mt-2">{errorMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
}

export default Login;