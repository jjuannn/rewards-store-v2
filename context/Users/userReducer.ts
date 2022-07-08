import { User } from "entity/user";
import { UserActions, PointsActions } from "./userActions";
import { IContextValues } from "./userProvider";

export type UserAction =
  // to-do tipar esto mejor { type: UserActions | PointsActions; payload?: any };
  | { type: UserActions.SET_USER_LOADING }
  | { type: UserActions.SET_USER_SUCCESS; payload: User }
  | { type: UserActions.SET_USER_FAILURE; payload: any }
  | { type: PointsActions.ADD_POINTS_LOADING }
  | { type: PointsActions.ADD_POINTS_SUCCESS }
  | { type: PointsActions.ADD_POINTS_FAILURE; payload: any };

const userReducer = (
  state: IContextValues,
  action: UserAction
): IContextValues => {
  const { type } = action;
  switch (type) {
    case UserActions.SET_USER_LOADING:
      return {
        ...state,
        userData: {
          loading: true,
          data: null,
          error: null,
        },
      };
    case UserActions.SET_USER_SUCCESS:
      return {
        ...state,
        userData: {
          loading: false,
          data: action.payload,
          error: null,
        },
      };
    case UserActions.SET_USER_FAILURE:
      return {
        ...state,
        userData: {
          loading: false,
          data: null,
          error: action.payload,
        },
      };
    case PointsActions.ADD_POINTS_LOADING:
      return {
        ...state,
        userAddCoins: {
          loading: true,
          success: false,
          error: null,
        },
      };
    case PointsActions.ADD_POINTS_SUCCESS:
      return {
        ...state,
        userAddCoins: {
          loading: false,
          success: true,
          error: null,
        },
      };
    case PointsActions.ADD_POINTS_FAILURE:
      return {
        ...state,
        userAddCoins: {
          loading: false,
          success: false,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};

export { userReducer };
