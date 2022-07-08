import AXIOS from "axios";

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
};

const axios = AXIOS.create({
  baseURL: "https://coding-challenge-api.aerolab.co",
  headers,
});

export { axios };
