import express from "express";
import cors from "cors";
import administradores from "./routes/admin.routes.js";

const PORT = 3001;
const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/admin', administradores)

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
