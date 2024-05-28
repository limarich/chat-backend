import App from "./app";
import { config } from "dotenv";

config();
const app = new App();

app.server.listen(process.env.SERVER_PORT, () => {
  console.log(`server funcionando na porta ${process.env.SERVER_PORT}`);
});
