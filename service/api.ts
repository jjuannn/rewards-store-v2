import { User } from "entity/user";
import { userMapper } from "mapper/userMapper";
import { axios } from "./_index";

async function fetchUserData(): Promise<User> {
  try {
    const res = await axios.get("/user/me");
    // no se xq devuelve texto plano ¿?
    const data = JSON.parse(res.data);
    return userMapper(data);
  } catch (err: any) {
    throw new Error(err.message);
  }
}

async function addUserPoints(amount: number): Promise<any> {
  try {
    const res = await axios.post("/user/points", { amount });
    const data = JSON.parse(res.data);
    return data;
  } catch (err) {}
}

export { fetchUserData, addUserPoints };
