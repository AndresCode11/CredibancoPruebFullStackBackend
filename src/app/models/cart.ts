export interface Product {
  "id": number,
  "title": String,
  "price": number,
  "description": String,
  "category": Category,
  "images": Array<String>,
  "quantity": number
}

export interface Category {
  "id": number,
  "name": String,
  "image": String
}


