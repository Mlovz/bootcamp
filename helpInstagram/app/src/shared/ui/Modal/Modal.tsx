import React, { FC, ReactNode } from "react";
import { Portal } from "../Portal/Portal";
import cls from "./modal.module.scss";
import { classNames } from "@/shared/lib";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  return (
    <Portal>
      <div
        className={classNames(cls.modal, { [cls.active]: isOpen })}
        onClick={onClose}
      >
        <div
          className={classNames(cls.box, { [cls.active]: isOpen })}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={cls.close}></div>

          {children}
        </div>
      </div>
    </Portal>
  );
};
