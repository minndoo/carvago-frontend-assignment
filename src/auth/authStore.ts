let accessToken: string | null | undefined = null;

export const authStore = {
  getAccessToken: () => accessToken,
  setAccessToken: (token: string) => (accessToken = token),
};
