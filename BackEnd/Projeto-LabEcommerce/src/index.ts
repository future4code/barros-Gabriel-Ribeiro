import app from "./app"

import createProduct from './endpoints/createProduct'
import createUser from './endpoints/createUser'
import{ getProducts }  from './endpoints/searchAllProducts'
import { getUsers } from './endpoints/searchAllUsers'

app.listen(3003, () => {
    console.log("O servidor está Online.")
})

app.post("/users", createUser)
app.post("/products", createProduct)

app.get("/products", getProducts)
app.get("/users", getUsers)


