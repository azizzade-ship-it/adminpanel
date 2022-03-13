import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import Avatar from "@material-ui/core/Avatar";



export default function User() {
  /*const { isLoading, error, data } = useQuery("user", () =>
    axios("https://api.hamrahamlak.ir/api/User/GetRealStateUsers")
  );
  if (isLoading)
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );*/
 // console.log("data",data);
 
  return (
      <div className="users">
        {/*data.data.map((val) => (
          <div className="user-card">
            <Avatar src={val.image} alt={val.name} />
            <div>
              <p>
                {val.firstName} {val.lastName}
              </p>
            </div>
          </div>
        ))*/}
      </div>
  );
}
