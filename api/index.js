import express from "express";
import cors from "cors";
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
import cookieParser from "cookie-parser";
import multer from "multer";
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/upload");
  },
  filename: function (req, file, cb) {
    const filename = Date.now() + file.originalname;
    cb(null, filename);
  },
});

const upload = multer({ storage });

app.post("/api/upload", upload.single("file"), function (req, res) {
  const file = req.file;
  res.status(200).json(file.filename);
});

app.use("/api/posts", postRoutes);
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

app.listen(8800, () => {
  console.log("API Backend");
});
