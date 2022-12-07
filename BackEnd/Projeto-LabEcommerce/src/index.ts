import app from "./app"

import createProduct from './endpoints/createProduct'
import createUser from './endpoints/createUser'
import searchAllProducts  from './endpoints/searchAllProducts'
import searchAllUsers from './endpoints/searchAllUsers'

app.post("/users", createUser);
app.post("/products", createProduct);

app.get("/products", searchAllProducts);
app.get("/users", searchAllUsers);

app.listen(3003, () => {
    console.log("O servidor está Online.");
});
