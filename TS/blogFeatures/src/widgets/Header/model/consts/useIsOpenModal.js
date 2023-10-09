export const useIsOpenModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(true);
  };

  return {
    isOpen,
    onClose,
    onOpen,
  };
};
