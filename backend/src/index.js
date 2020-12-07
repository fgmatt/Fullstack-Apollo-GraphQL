import app from "./app";
import { port } from "./keys/keys";
import { tokenThinker, tokenSign } from "./jwt/jwt";

console.log(tokenThinker());

app.listen(port, () => {
    console.log(`Server ready at http://localhost:${port}`);
});
