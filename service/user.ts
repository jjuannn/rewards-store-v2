import { User } from "entity/user";
import { userMapper } from "mapper/userMapper";
import { axios } from "./_index";

async function fetchUserData(): Promise<User> {
  try {
    const res = await axios.get("/user/me");
    return userMapper(res.data);
  } catch (err: any) {
    throw new Error(err.message);
  }
}

async function addUserPoints(amount: number): Promise<number> {
  try {
    const res = await axios.post("/user/points", { amount });
    return res.data["New Points"];
  } catch (err: any) {
    throw new Error(err.message);
  }
}

export { fetchUserData, addUserPoints };
