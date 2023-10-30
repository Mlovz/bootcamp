import {
  AppLink,
  Button,
  Form,
  HStack,
  Input,
  Text,
  VStack,
} from "@/shared/ui";
import React, { useContext } from "react";
import cls from "../LoginForm/LoginForm.module.scss";
import Logo from "@/shared/assets/Logo.png";
import { ThemeContext } from "@/app/provider";
import { Theme } from "@/shared/consts/theme";
import {
  RegisterFormValues,
  useRegisterForm,
} from "../../model/schema/useRegisterForm";
import { registerByEmail } from "../../model/service/registerByEmail";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { useSelector } from "react-redux";
import { getAuthError } from "../../model/selectors/getAuthError";
import { useNavigate } from "react-router-dom";
import { getAuthLoading } from "../../model/selectors/getAuthLoading";

export const RegisterForm = () => {
  const { theme } = useContext(ThemeContext);
  const { register, watch, errors, isValid, RegisterFormNames, handleSubmit } =
    useRegisterForm();

  const dispatch = useAppDispatch();

  const authError = useSelector(getAuthError);
  const authLoading = useSelector(getAuthLoading);

  const navigate = useNavigate();

  const onSubmit = async (data: RegisterFormValues) => {
    const res = await dispatch(registerByEmail(data));

    if (res.meta.requestStatus === "fulfilled") {
      navigate("/login");
    }
  };

  return (
    <HStack justify="center">
      <VStack className={cls.auth} gap={12}>
        <VStack className={cls.authTop} gap={12} align="center">
          <VStack align="center">
            <img
              className={Theme.DARK === theme && cls.dark}
              src={Logo}
              alt=""
            />
            <Text align="center">
              Зарегистрируйтесь, чтобы смотреть фото и видео ваших друзей.
            </Text>
          </VStack>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <VStack gap={16} align="center">
              <VStack align="center" gap={22}>
                <VStack gap={12}>
                  <Button
                    addonLeft={
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_3_3014)">
                          <path
                            d="M18.2265 0.7547H1.77495C1.21145 0.7547 0.754639 1.21151 0.754639 1.77501V18.2266C0.754639 18.7901 1.21145 19.2469 1.77495 19.2469H18.2265C18.79 19.2469 19.2468 18.7901 19.2468 18.2266V1.77501C19.2468 1.21151 18.79 0.7547 18.2265 0.7547Z"
                            fill="#3D5A98"
                          />
                          <path
                            d="M13.5125 19.2453V12.0843H15.9157L16.275 9.29372H13.5125V7.51247C13.5125 6.70466 13.7375 6.1531 14.8954 6.1531H16.3735V3.6531C15.6577 3.5785 14.9384 3.54303 14.2188 3.54685C12.0907 3.54685 10.625 4.84372 10.625 7.23591V9.29372H8.22192V12.0843H10.625V19.2453H13.5125Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_3_3014">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    }
                    variant="outline"
                    max
                  >
                    Войти через Facebook
                  </Button>
                </VStack>
              </VStack>
              <Text>Или</Text>
              <Input
                {...register(RegisterFormNames.EMAIL)}
                value={watch(RegisterFormNames.EMAIL)}
                error={errors?.email?.message}
                placeholder="Телефон, имя пользователя или эл.адрес"
              />

              <Input
                {...register(RegisterFormNames.FULLNAME)}
                value={watch(RegisterFormNames.FULLNAME)}
                error={errors?.fullname?.message}
                placeholder="Имя и фамилия"
              />

              <Input
                {...register(RegisterFormNames.USERNAME)}
                value={watch(RegisterFormNames.USERNAME)}
                error={errors?.username?.message}
                placeholder="Имя пользователя"
              />
              <Input
                {...register(RegisterFormNames.PASSWORD)}
                value={watch(RegisterFormNames.PASSWORD)}
                error={errors?.password?.message}
                type="password"
                placeholder="Пароль"
              />
              <Input
                {...register(RegisterFormNames.CF_PASSWORD)}
                value={watch(RegisterFormNames.CF_PASSWORD)}
                error={errors?.cf_password?.message}
                type="password"
                placeholder="Повторите пароль"
              />
              {authError && <Text color="error">{authError}</Text>}

              <Text align="center">
                Регистрируясь, вы принимаете Условия. Прочитайте Политика
                конфидициальности, чтобы узнать, как мы получаем, используем и
                передаем ваши данные. Также просмотрите Политику в отношении
                файлов cookie, чтобы узнать, как мы используем файлы cookie и
                подобные технологии.
              </Text>

              <Button
                type="submit"
                max
                disabled={!isValid && authLoading}
                loading={authLoading}
              >
                Регистрация
              </Button>
            </VStack>
          </Form>
        </VStack>

        <HStack
          className={cls.authBottom}
          align="center"
          gap={8}
          justify="center"
        >
          <Text as="span">Есть аккаунт? </Text>
          <AppLink to="/login">
            <Text as="span" size={12} color="blue">
              Вход
            </Text>
          </AppLink>
        </HStack>
      </VStack>
    </HStack>
  );
};
