const products = [
    {
      "id": 1,
      "name": "Nike Air Zoom Pegasus 38",
      "price": 119.99,
      "quantity": 50
    },
    {
      "id": 2,
      "name": "Adidas Ultraboost 21",
      "price": 179.99,
      "quantity": 100
    },
    {
      "id": 3,
      "name": "New Balance Fresh Foam 1080v11",
      "price": 149.99,
      "quantity": 20
    },
    {
      "id": 4,
      "name": "Puma Future Rider Twofold",
      "price": 89.99,
      "quantity": 75
    },
    {
      "id": 5,
      "name": "Under Armour HOVR Phantom 2",
      "price": 139.99,
      "quantity": 200
    },
    {
      "id": 6,
      "name": "Brooks Ghost 13",
      "price": 129.99,
      "quantity": 30
    },
    {
      "id": 7,
      "name": "Asics Gel-Nimbus 23",
      "price": 149.99,
      "quantity": 150
    },
    {
      "id": 8,
      "name": "Saucony Triumph 18",
      "price": 159.99,
      "quantity": 40
    },
    {
      "id": 9,
      "name": "Mizuno Wave Rider 24",
      "price": 129.99,
      "quantity": 100
    },
    {
      "id": 10,
      "name": "Hoka One One Clifton 7",
      "price": 129.99,
      "quantity": 25
    }
  ]
  
  const customers = [
    {
      "id": 1,
      "firstName": "Emma",
      "lastName": "Garcia",
      "city": "Los Angeles"
    },
    {
      "id": 2,
      "firstName": "Noah",
      "lastName": "Smith",
      "city": "New York"
    },
    {
      "id": 3,
      "firstName": "Olivia",
      "lastName": "Martinez",
      "city": "Chicago"
    },
    {
      "id": 4,
      "firstName": "Liam",
      "lastName": "Davis",
      "city": "San Francisco"
    },
    {
      "id": 5,
      "firstName": "Ava",
      "lastName": "Johnson",
      "city": "Houston"
    },
    {
      "id": 6,
      "firstName": "William",
      "lastName": "Rodriguez",
      "city": "Miami"
    },
    {
      "id": 7,
      "firstName": "Sophia",
      "lastName": "Brown",
      "city": "Boston"
    },
    {
      "id": 8,
      "firstName": "James",
      "lastName": "Gonzalez",
      "city": "Seattle"
    },
    {
      "id": 9,
      "firstName": "Isabella",
      "lastName": "Lopez",
      "city": "Dallas"
    },
    {
      "id": 10,
      "firstName": "Benjamin",
      "lastName": "Wilson",
      "city": "Washington DC"
    }
  ]

  const purchases = [
    {
      "id": 1,
      "customerID": 4,
      "productID": 1,
      "date": "2022-01-15"
    },
    {
      "id": 2,
      "customerID": 8,
      "productID": 1,
      "date": "2022-02-03"
    },
    {
      "id": 3,
      "customerID": 2,
      "productID": 1,
      "date": "2022-03-08"
    },
    {
      "id": 4,
      "customerID": 5,
      "productID": 2,
      "date": "2022-04-21"
    }, {
        "id": 5,
        "customerID": 5,
        "productID": 2,
        "date": "2022-04-27"
    },
    {
      "id": 6,
      "customerID": 5,
      "productID": 2,
      "date": "2022-05-01"
    },
    {
      "id": 7,
      "customerID": 6,
      "productID": 2,
      "date": "2022-06-19"
    },
    {
      "id": 8,
      "customerID": 1,
      "productID": 8,
      "date": "2022-07-11"
    },
    {
      "id": 9,
      "customerID": 10,
      "productID": 6,
      "date": "2022-08-05"
    },
    {
      "id": 10,
      "customerID": 9,
      "productID": 1,
      "date": "2022-09-16"
    },
    {
      "id": 11,
      "customerID": 7,
      "productID": 5,
      "date": "2022-10-02"
    },
    {
      "id": 12,
      "customerID": 7,
      "productID": 2,
      "date": "2022-09-02"
    },
    {
      "id": 13,
      "customerID": 7,
      "productID": 6,
      "date": "2022-09-15"
    }
  ]
  
  const init = {products,customers,purchases}
  export default init