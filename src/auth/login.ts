import { OpenAPI, UsersService } from "../api";
import { authStore } from "./authStore";

export const loginUser = async (username: string, password: string) => {
    try {
        const response = await UsersService.loginUser({
            username,
            password,
        });

        OpenAPI.TOKEN = response.accessToken;
        const currentUser = await UsersService.getCurrentUser()
        authStore.setSession(response.accessToken, currentUser);
    } catch (error) {
        throw(error);
    }
};