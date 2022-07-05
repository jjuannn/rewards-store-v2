import { createContext, Dispatch } from "react";
import { IContextValues } from "./userProvider";
import { UserAction } from "./userReducer";

export type UserContextProps = {
  userState: IContextValues;
  dispatch: Dispatch<UserAction>;
};

export const UserContext = createContext<UserContextProps>(
  {} as UserContextProps
);
