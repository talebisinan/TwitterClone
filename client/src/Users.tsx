import React, { ReactElement } from "react";
import { gql, useQuery } from "@apollo/client";

const USERS_QUERY = gql`
  query USERS_QUERY {
    users {
      id
      name
    }
  }
`;

export default function Users(): ReactElement {
  const { loading, error, data } = useQuery(USERS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div>
      {data.users.map((user: any) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}
