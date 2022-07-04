import { UserActions, PointsActions } from "./userActions";
import { IContextValues } from "./userProvider";

export type UserAction =
  // to-do tipar esto mejor
  { type: UserActions | PointsActions; payload?: any };

const userReducer = (
  state: IContextValues,
  action: UserAction
): IContextValues => {
  const { type, payload } = action;

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
          data: payload,
          error: null,
        },
      };
    case UserActions.SET_USER_FAILURE:
      return {
        ...state,
        userData: {
          loading: false,
          data: null,
          error: payload,
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
          error: payload,
        },
      };
    default:
      return state;
  }
};

export { userReducer };
