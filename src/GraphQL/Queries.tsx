import { gql } from "@apollo/client";

// Define your GraphQL query
  export const GET_DATA_QUERY = gql`
  query GetData {
    weathers {
      temperatureC
      temperatureF
      summary
    }
  }
`;
