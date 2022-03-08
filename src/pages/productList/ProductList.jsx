import React from 'react'
import axios from "axios";
import { useQuery } from "react-query";
export default function ProductList() {
  const { isLoading, error, data } = useQuery("user", () =>
  axios("https://editor.swagger.io/api/User/GetJustUsers")
);
console.log(data)
if (isLoading)
  return (
      <h3>productli...</h3>
  );
  return (
    <div>
      
    </div>
  )
}
