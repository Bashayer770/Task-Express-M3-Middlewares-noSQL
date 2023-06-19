const express = require("express");
const app = express();
const postsRoutes = require("./api/posts/posts.routes");
const connectDb = require("./database");
const notFoundHandler = require("./middleWare/notFound");
const errorHandler = require("./middleWare/errorHandler");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");

connectDb();
app.use("/media/", express.static(path.join(__dirname, "media")));
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/posts", postsRoutes);
app.use(notFoundHandler);
app.use(errorHandler);

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
