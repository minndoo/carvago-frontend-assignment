import { UserResponse } from "../api";

let accessToken: string | null = null; 
let user : UserResponse | null = null;

export const authStore = {
  getAccessToken: () => accessToken,
  setAccessToken: (token: string) => accessToken = token,
  getUser: () => user,
  setUser: (user: UserResponse) => user = user,
};