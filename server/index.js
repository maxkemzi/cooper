import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import {errorMiddleware} from "./common/error";
import {router} from "./common";
import {HeaderName} from "./common/constants";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(fileUpload({}));
app.use(express.json());
app.use(express.static("static"));
app.use(cookieParser());
app.use(
	cors({
		credentials: true,
		origin: process.env.CLIENT_URL,
		exposedHeaders: Object.values(HeaderName)
	})
);

// Router
app.use("/api", router);

// Error handler
app.use(errorMiddleware);

const startApp = async () => {
	try {
		await mongoose.connect(process.env.DB_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		});
		app.listen(PORT, () => {
			console.log("Server is working");
		});
	} catch (e) {
		console.log(e);
	}
};

startApp();
