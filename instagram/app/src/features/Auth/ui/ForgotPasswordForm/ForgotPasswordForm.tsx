import React from "react";
import cls from "./ForgotPasswordForm.module.scss";
import { Button, Form, HStack, Input, Text, VStack } from "@/shared/ui";
import { Link } from "react-router-dom";

const ForgotPasswordForm = () => {
  return (
    <HStack justify="center">
      <VStack className={cls.forgot} align="center" gap={16}>
        <Text as="h2" size={16} fw={600}>
          Не удается войти?
        </Text>
        <Text as="p" color="solid" align="center">
          Введите свой электронный адрес, имя пользователя или номер телефона, и
          мы отправим вам ссылку для восстановления доступа к аккаунту.
        </Text>
        <Form onSubmit={() => {}}>
          <VStack gap={16}>
            <Input placeholder="Телефон, имя пользователя или эл.адрес  " />
            <Button variant="solid" max>
              Получить код для смены пароля
            </Button>
          </VStack>
        </Form>

        <HStack gap={8}>
          <div className={cls.line}></div>
          <Text color="solid">Или</Text>
          <div className={cls.line}></div>
        </HStack>

        <Link to="/register">
          <Text>Создать новый аккаунт</Text>
        </Link>

        <HStack className={cls.footer} justify="center">
          <Link to="/login">
            <Text as="span" fw={600}>
              Вернуться к входу
            </Text>
          </Link>
        </HStack>
      </VStack>
    </HStack>
  );
};

export default ForgotPasswordForm;
