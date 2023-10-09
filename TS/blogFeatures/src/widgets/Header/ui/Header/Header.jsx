import React from "react";
import { useIsOpenModal } from "../../model/consts/useIsOpenModal";

const Header = () => {
  const { isOpen, onClose, onOpen } = useIsOpenModal();

  return <div>Header</div>;
};

export default Header;
