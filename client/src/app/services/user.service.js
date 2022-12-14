import httpService from "./http.service";
import localStorageService from "./localStorage.service";

const userEndPoint = "user/";

const userService = {
  get: async () => {
    const { data } = await httpService.get(userEndPoint);
    return data;
  },
  create: async (payload) => {
    const { data } = await httpService.put(userEndPoint + payload._id, payload);
    return data;
  },
  update: async (payload) => {
    const { data } = await httpService.patch(
      userEndPoint + localStorageService.getUserId(),
      payload
    );
    return data;
  },
  getCurrentUser: async () => {
    const { data } = await httpService.get(
      userEndPoint + localStorageService.getUserId()
    );
    return data;
  },
  checkUser: async (email) => {
    const { data } = await httpService.get(userEndPoint + email);
    return data;
  },
  checkToken: async (token, payload) => {
    const { data } = await httpService.patch(
      userEndPoint + "resetpassword/" + token,
      payload
    );
    return data;
  },
};

export default userService;
