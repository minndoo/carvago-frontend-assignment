
import { fetchClient } from "../api/fetchClient";
import { authStore } from "./authStore";

export const registerUser = async (username: string, password: string) => {
    const response = await fetchClient.POST('/api/register' , {body: {username, password}} );

    if(response.data) authStore.setAccessToken(response.data.accessToken);

    return response;
};