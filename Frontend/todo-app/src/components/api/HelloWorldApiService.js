import { apiClient } from "./apiClient";

export const retrieveHelloWorld = () => apiClient.get("/hello-world");

export const retrieveHelloWorldVariable = (username, token) =>
  apiClient.get(`/hello-world/path-variable/${username}`, {
    headers: {
      Authorization: token,
    },
  });

