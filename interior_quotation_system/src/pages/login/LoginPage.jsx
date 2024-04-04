import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useMutation } from "@tanstack/react-query";
import { Button, Col, Form, Input, Row, message } from "antd";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router";
import AuthenticateAPI from "../../api/authen";
import { FORM_RULES, PAGE_ROUTES } from "../../utils/constant";

const LoginPage = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();

  const {
    isLoading: isLoadingUserProfile,
    refetch: getUserProfile,
    isError: isErrorGetUserProfile,
    data: userProfileResponse,
    isSuccess: isSuccessUserProfile,
  } = useQuery({
    queryKey: ["user-profile-key"],
    queryFn: AuthenticateAPI.GetUserInformation,
    enabled: false,
  });

  const {
    mutate,
    isPending,
    data: accessToken,
  } = useMutation({
    mutationFn: AuthenticateAPI.LoginAccount,
    onSuccess: (response) => {
      localStorage.setItem("accessToken", response.token);
      const userDecode = jwtDecode(response.token);
      console.log(userDecode);
      navigate("/shop");
      if (userDecode.Role == "staff") {
        navigate("/staff/quotation");
      } else if (userDecode.Role == "admin") {
        navigate("/staff/quotation");
      } else {
        navigate("/shop");
      }
    },
    onError: () => {
      messageApi.open({
        type: "error",
        content: "Your account is invalid. Please  try again !!",
      });
    },
  });

  const rememberHandler = () => {
    setValue({ ...value, remember: !value.remember });
  };

  const submitForm = (values) => {
    mutate(values);
  };

  const onAuthenticateUser = () => {
    const userDecode = jwtDecode(accessToken?.token || "");
    navigate("/shop");
    if (userDecode.Role == "staff") {
      navigate("/staff/quotation");
    } else if (userDecode.Role == "admin") {
      navigate("/staff/quotation");
    } else {
      navigate("/shop");
    }
  };

  if (isErrorGetUserProfile) {
    message.error("Error when get user profile");
  }

  if (isSuccessUserProfile && userProfileResponse) {
    dispatch(
      updateUserProfile({
        userId: userProfileResponse.userId,
        username: userProfileResponse.username,
        fullname: userProfileResponse.fullname,
        email: userProfileResponse.email,
        phoneNumber: userProfileResponse.phoneNumber,
        avtUrl: userProfileResponse.avtUrl,
      })
    );

    onAuthenticateUser();
  }

  return (
    <Grid className="loginWrapper">
      {contextHolder}
      <Grid className="loginForm">
        <h2>Sign In</h2>
        <p>Sign in to your account</p>
        <Form
          layout="vertical"
          requiredMark={false}
          form={form}
          onFinish={submitForm}
        >
          <Row>
            <Col span={24}>
              <Form.Item
                name="username"
                label="User Name"
                rules={[FORM_RULES.required]}
              >
                <Input />
              </Form.Item>{" "}
            </Col>
            <Col span={24}>
              <Form.Item
                name="password"
                label="Password"
                rules={[FORM_RULES.required]}
              >
                <Input.Password />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Row gutter={[14, 14]}>
                <Col span={24}>
                  <div className="formAction">
                    <FormControlLabel
                      control={<Checkbox onChange={rememberHandler} />}
                      label="Remember Me"
                    />
                    <a href="/forgot-password">Forgot Password?</a>
                  </div>
                </Col>

                <Col span={24}>
                  <Button
                    loading={isPending || isLoadingUserProfile}
                    htmlType="submit"
                    className="cBtnTheme"
                    style={{
                      width: "100%",
                      fontSize: "18px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    Login Account
                  </Button>
                </Col>

                <Col span={24}>
                  <p className="noteHelp">
                    Do not have an account?{" "}
                    <a href={PAGE_ROUTES.REGISTER}>Create free account</a>
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Form>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
