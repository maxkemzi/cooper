require("dotenv").config();
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const {errorMiddleware} = require("./common/error");
const {router} = require("./common");
const {HeaderName} = require("./common/constants");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(fileUpload({}));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "../client/build")));
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

app.get("*", (req, res) => {
	res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

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
