import React from "react";
import cls from "./AddComment.module.scss";
import { Button, Form, HStack, Icon } from "@/shared/ui";

const AddComment = () => {
  const onSubmit = () => {};

  return (
    <HStack max className={cls.addComment}>
      <Icon type="Emoji" className={cls.icon} />
      <Form onSubmit={onSubmit} className={cls.form}>
        <input type="text" placeholder="Add a comment..." />
        <Button className={cls.btn}>Post</Button>
      </Form>
    </HStack>
  );
};

export default AddComment;
