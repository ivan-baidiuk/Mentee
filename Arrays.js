let arr1 = [1, 2, 3, 4, 4, 5];
let arr2 = [2, 2, 3, 3, 4, 4, 8, 9];

const unique = (array1, array2) => {
  const res = [];
  array1.map((item) => {
    if (array2.includes(item)) {
      res.push(item)
    }
  })
  return [... new Set(res)];
}

const Orders = [
    {"id":1,"productIds":[11, 12, 13, 15],"createdAt":{"$date":"2020-06-01T21:14:10.000Z"}},
    {"id":2,"productIds":[11, 12, 13],"createdAt":{"$date":"2019-12-29T02:31:52.000Z"}},
    {"id":3,"productIds":[11, 12],"createdAt":{"$date":"2020-07-24T08:49:35.000Z"}},
    {"id":4,"productIds":[12, 13],"createdAt":{"$date":"2020-08-30T13:01:23.000Z"}},
    {"id":5,"productIds":[14, 13, 11],"createdAt":{"$date":"2019-12-03T09:59:33.000Z"}}
]

const Products = [
  {
    "id": 11,
    "name": "Arnoldo",
    "price": 90
  },
  {
    "id": 12,
    "name": "Bronnie",
    "price": 93
  },
  {
    "id": 13,
    "name": "Wren",
    "price": 23
  },
  {
    "id": 14,
    "name": "Leupold",
    "price": 37
  },
  {
    "id": 15,
    "name": "Stanley",
    "price": 36
  }
]

const OrdersWithProduct = (ordersList, productsList) => {
  return ordersList.map((order) => {
    order.products = productsList.filter((item) => {
      return order.productIds.includes(item.id);
    });
    delete order.productIds;
    return order;
  })
}

const OrdersWithProductMy = (ordersList, productsList) => {
  return ordersList.map((order) => {
    const newProducts = [];
    order.productIds.forEach((productId,  ) => {
      newProducts.push(productsList.find((item) => {
        return productId === item.id;
      }))
    })
    order.products = order.productIds;
    delete order.productIds;
    order.products = [...newProducts]
    return order;
  })
}

console.log(JSON.stringify(OrdersWithProduct(Orders, Products)));