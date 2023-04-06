# Cooper
A team search full-stack app. Front-end: Typescript, React, Redux Toolkit, Styled-components, Formik. Back-end: Node JS, Express, MongoDB.

## Deployment instructions
### 1. Run the react app build
Go to the "client" folder and type:
```
npm run build
```
### 2. Move all files from "client/build" folder to the "server/static" folder
```
cd cooper
mkdir ./server/static
mv ./client/build/* ./server/static/
```
### 3. Add following code to the "server/index.js" file
```
app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "static/index.html"));
});
```
### 4. Create .env file in the "server" folder
.env file structure:
```
DB_URI=your_mongodb_uri
PORT=your_port_number
CLIENT_URL=your_client_url
API_URL=your_api_url
SMTP_HOST=your_smtp_host
SMTP_PORT=your_smtp_port
SMTP_FROM=your_smtp_sender_email
SMTP_TO=your_smtp_receiver_email
SMTP_PASSWORD=your_smtp_password
JWT_ACCESS_SECRET=your_jwt_access_token_secret_key
JWT_REFRESH_SECRET=your_jwt_refresh_token_secret_key
STATIC_PATH=your_path_to_the_server_static_folder
```
