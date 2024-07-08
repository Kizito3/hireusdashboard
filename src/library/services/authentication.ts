import { useMutation } from "@tanstack/react-query";
import { signup } from "../api";

export const useSignup = () => {
  return useMutation({
    mutationKey: ["signup"],
    mutationFn: (data: SignUp) => signup(data),
    onSettled: (data, error) => {
      if (!error && data) {
        const token = data.headers["authorization"];
        localStorage.setItem("token", token);
      }
    },
  });
};
