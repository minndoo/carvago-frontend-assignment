import { UsersService } from "../api";
import { authStore } from "./authStore";

export const registerUser = async (username: string, password: string) => {
    try {
        const response = await UsersService.registerUser({
          username,
          password,
        });
      

        authStore.setAccessToken(response.accessToken);
    } catch (error) {
        console.error(error);
    }
};