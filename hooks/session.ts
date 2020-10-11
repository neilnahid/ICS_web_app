import { gql } from '@apollo/client';
import React, { createContext } from 'react';

// ts-ignore
const CURRENT_USER = gql`
  query user($id: ID!) {
    user(id: $id) {
      id
      username
    }
  }
`;
export interface ISession {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

export default createContext({} as ISession);
