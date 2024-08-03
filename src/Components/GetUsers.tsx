import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { GET_DATA_QUERY } from "../GraphQL/Queries";

// Define TypeScript types for your query response
interface YourDataType {
    temperatureC: number;
    temperatureF: number;
    summary: string
}

interface GetDataResponse {
  weather: YourDataType[];
}

function GetUsers() {
  const { error, loading, data } = useQuery<GetDataResponse>(GET_DATA_QUERY);
  const [users, setUsers] = useState<any>([]);
  useEffect(() => {
    console.log(GET_DATA_QUERY);
    if (data) {
      const res: any = data;
      console.log(data);
      setUsers(res);
      console.log(users.weathers);
    }
  }, [data]);

  return (
    <div>
      {" Graph QL Integration "}
      <br />
      {loading && `Loading..`}
      <br />
      {error && `Error! ${error.message}`}
      <br />
      {users?.weathers?.map((val: any) => {
        return <h1> {val.temperatureC}</h1>;
      })}
    </div>
  );
}

export default GetUsers;
