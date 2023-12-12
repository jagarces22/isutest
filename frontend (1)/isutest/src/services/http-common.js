import axios from "axios";

export default axios.create({
    baseURL: "https://localhost:7282/api",
    headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET"
    }
});