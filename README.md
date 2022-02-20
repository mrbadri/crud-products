# Crud Products
## Get
> GET List Products: `http:localhost:3000/api/products/` 
```sh
[
    {
        "id": 1,
        "name": "shoe",
        "price": 80000,
        "color": "brown",
        "count": 10
    }, 
    ...
]
```

> GET One Product: `http:localhost:3000/api/products/:id` 
```sh
{
    "id": 1,
    "name": "shoe",
    "price": 80000,
    "color": "brown",
    "count": 10
}
```
## POST
> Create A Product: `http:localhost:3000/api/products/` 
```sh
body:
    {
        "name": "pen",
        "price": 3000,
        "color": "blue",
        "count": 1000
    }
```
## PUT
> Edit One Of Product: `http:localhost:3000/api/products/:id` 
## DELETE
> Delete One Product: `http:localhost:3000/api/products/:id` 
