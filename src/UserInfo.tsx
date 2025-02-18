import React from "react";
import { loadableUserAtom } from "./atoms";
import { useAtomValue } from "jotai";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    city: string;
    street: string;
    suite: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  website: string;
}

export const UserInfo = () => {
  const user = useAtomValue(loadableUserAtom);
  const userData: User[] = user.state === "hasData" ? user?.data : [];

  return (
    <div>
      <h1>user Info</h1>
      {userData.map((user) => {
        return (
          <>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
          </>
        );
      })}
    </div>
  );
};
