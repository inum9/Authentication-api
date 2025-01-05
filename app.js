import express from "express";
import { rooot } from "./src/routes/auth.routes.js";
const app= express();

//middleware 
app.use(express.json());

// routes for routing 
app.use("/api/v1/user",rooot);

export {app};