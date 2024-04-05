import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import AuthenticateAPI from "../api/authen";
import { message, Spin } from "antd";

const VerifyToken = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const navigate = useNavigate();

  const { isPending: isPendingVerifyToken, mutate: verifyToken } = useMutation({
    mutationFn: AuthenticateAPI.VerifyToken,
    mutationKey: "verify-token",
    onError: (errorResponse) => {
      message.error("Token in invalid . Please try again");
      navigate("/login");
    },
    onSuccess: () => {
      message.success("Token is valid. Welcome to our website");
      localStorage.setItem("accessToken", token);
      navigate("/shop");
    },
  });

  useEffect(() => {
    verifyToken({
      token,
    });
  }, [token]);

  return (
    <Spin spinning={isPendingVerifyToken} tip="Verify token ...">
      123132
    </Spin>
  );
};

export default VerifyToken;
