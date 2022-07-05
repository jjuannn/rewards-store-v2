import { User } from "entity/user";
import { FC, useReducer } from "react";
import { UserContext } from "./userContext";
import { userReducer } from "./userReducer";

export interface IContextValues {
  userData: { loading: boolean; data: null | User; error: any };
  userAddCoins: { loading: boolean; success: boolean; error: any };
}

const INITIAL_VALUES: IContextValues = {
  userData: { loading: false, data: null, error: null },
  userAddCoins: { loading: false, success: false, error: null },
};

interface IUserContextProvider {
  children: JSX.Element | JSX.Element[];
}

const UserContextProvider: FC<IUserContextProvider> = ({ children }) => {
  const [userState, dispatch] = useReducer(userReducer, INITIAL_VALUES);

  return (
    <UserContext.Provider
      value={{
        userState,
        dispatch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContextProvider };
