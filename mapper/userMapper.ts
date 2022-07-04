import { User } from "entity/user";

interface IApiResponse {
  _id: string;
  name: string;
  points: number;
}

function userMapper(params: IApiResponse) {
  const { _id, name, points } = params;
  return new User(_id, name, points);
}

export { userMapper };
