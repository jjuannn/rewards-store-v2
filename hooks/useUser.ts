import { PointsActions, UserActions } from "context/Users/userActions";
import { UserContext } from "context/Users/userContext";
import { User } from "entity/user";
import { useContext } from "react";
import { addUserPoints, fetchUserData } from "service/user";

function useUser() {
  const { userState, dispatch } = useContext(UserContext);
  const { userAddCoins, userData } = userState;

  const setUserData = (payload: any) => {
    dispatch({ type: UserActions.SET_USER_SUCCESS, payload });
  };

  const getUserData = async () => {
    dispatch({ type: UserActions.SET_USER_LOADING });
    try {
      const data = await fetchUserData();
      dispatch({ type: UserActions.SET_USER_SUCCESS, payload: data });
    } catch (err) {
      dispatch({ type: UserActions.SET_USER_FAILURE, payload: err });
    }
  };
  const addPoints = async (amount: number) => {
    dispatch({ type: PointsActions.ADD_POINTS_LOADING });
    try {
      const newPoints = await addUserPoints(amount);
      dispatch({ type: PointsActions.ADD_POINTS_SUCCESS });
      dispatch({
        type: UserActions.SET_USER_SUCCESS,
        payload: { ...(userData.data as User), points: newPoints },
      });
    } catch (err) {
      dispatch({ type: PointsActions.ADD_POINTS_FAILURE, payload: err });
    }
  };
  return { setUserData, getUserData, addPoints, userData, userAddCoins };
}

export { useUser };
