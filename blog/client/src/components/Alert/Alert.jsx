import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading";
import Toast from "./Toast";

const Alert = () => {
  const { loading, error, success } = useSelector((state) => state.global);
  const dispatch = useDispatch();

  const onClose = () => {
    dispatch({ type: "SUCCESS", payload: "" });
    dispatch({ type: "ERROR", payload: "" });
  };

  useEffect(() => {
    if (error || success) {
      const timer = setTimeout(() => {
        onClose();
      }, 2000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [error, success]);

  return (
    <>
      {loading && <Loading />}
      <Toast
        message={error || success}
        status={error ? "error" : success ? "success" : ""}
        onClose={onClose}
      />
    </>
  );
};

export default Alert;
