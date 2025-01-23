import axios from "axios";

const baseURL = "https://fitness-tracker-api-two.vercel.app/api";

export const userSignUp = async (data) => {
  try {
    const response = await axios.post(`${baseURL}/user/signup`, data, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Signup failed";
  }
};
export const UserSignIn = async (data) =>
  await axios.post(`${baseURL}/user/signin`, data, {
    headers: { "Content-Type": "application/json" },
  });

export const getDashboardDetails = async (token) =>
  axios.get(`${baseURL}/user/dashboard`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const getWorkouts = async (token, date) =>
  await axios.get(`${baseURL}/user/workout?date=${date}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const addWorkout = async (token, data) =>
  await axios.post(`${baseURL}/user/workout`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
