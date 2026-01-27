
import { fetchClient } from "../api/fetchClient";
import { authStore } from "./authStore";

export const loginUser = async (username: string, password: string) => {
    const response = await fetchClient.POST('/api/login', {
        body: {
            username,
            password,
        }
    });

    if(response.data) authStore.setAccessToken(response.data.accessToken);

    return response;
};