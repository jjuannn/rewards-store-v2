import { User } from "entity/user";

interface IApiResponse {
  _id: string;
  name: string;
  points: number;
}

function userMapper(apiResponse: IApiResponse): User {
  const { _id, name, points } = apiResponse;
  return new User(_id, name, points);
}

export { userMapper };
