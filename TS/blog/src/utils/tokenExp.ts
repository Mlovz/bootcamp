import jwtDecode from "jwt-decode";

export const tokenExp = (token: string) => {
  const decoded: any = jwtDecode(token);

  let err: string = "";

  if (decoded.exp <= Date.now() / 1000) {
    err = "Время сеанса истек. Пожалуйста перезайдите!";
    return err;
  }
};
