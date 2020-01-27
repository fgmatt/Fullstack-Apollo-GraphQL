import app from "./app";
import { port } from "./keys/keys";

app.listen(port, () => {
    console.log(`Server ready at http://localhost:${port}`);
});
