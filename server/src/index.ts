import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
import express from "express";
import fileUpload from "express-fileupload";
import mongoose from "mongoose";
import {router} from "./common";
import {HeaderName} from "./common/constants";
import {errorMiddleware} from "./common/error";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(fileUpload({}));
app.use(express.json());
app.use(express.static("static"));
app.use(cookieParser());
app.use(
	cors({
		credentials: true,
		origin: process.env.PUBLIC_CLIENT_URL,
		exposedHeaders: [
			HeaderName.PAGE,
			HeaderName.TOTAL_COUNT,
			HeaderName.TOTAL_PAGES
		]
	})
);

// Router
app.use("/api", router);

// Error handler
app.use(errorMiddleware);

const startApp = async () => {
	try {
		await mongoose.connect(process.env.DB_URI as string);
		app.listen(PORT, () => {
			console.log("Server is working");
		});
	} catch (e) {
		console.log(e);
	}
};

startApp();
