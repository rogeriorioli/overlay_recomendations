import { NextResponse } from "next/server";


export async function GET(){
  const data  =  [
    {
      "id": "e87a3d9c-4155-4f25-8f2a-6c52d8dbf1c7",
      "name": "Product 1",
      "image_url": "https://images.squarespace-cdn.com/content/v1/570f2cbe40261d443ff72669/1649399823719-HVOAUIUTC39G79SSJVJ6/Vital+C+Hydrating+Recovery+Eye+Gel.jpg?format=1000w",
      "price": 29.99,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      "id": "a8b4e1f2-6d7c-4e9a-9b3d-8e1f6c7a2b4e",
      "name": "Product 2",
      "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh5wZi-q9OVeCwHfJCGDLqWnu7f05LeXNC4ousXHxPX1r7AODc4bnmWN3_l_lLV7BYUAk&usqp=CAU",
      "price": 49.99,
      "description": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
    },
    {
      "id": "f3d7a1e5-c2b1-4e8f-9d6a-7b5e6c4d3a2f",
      "name": "Product 3",
      "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfL2W2Qu7bRjWdwkir-dl9xtDqcTURimTj0jrpRdDewLeKMRwakqHY0DGHWCE9OjKuFso&usqp=CAU",
      "price": 19.99,
      "description": "Aenean euismod bibendum laoreet."
    }
  ]


   return NextResponse.json(data)

}

