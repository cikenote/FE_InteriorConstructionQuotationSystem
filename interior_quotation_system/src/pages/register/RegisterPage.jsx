import "../../styles/pages/loginPage.scss";
import Grid from "@mui/material/Grid";
import { Col, Form, Input, Row, message, Button, DatePicker, Select } from "antd";
import { FORM_RULES, PAGE_ROUTES } from "../../utils/constant";
import { useMutation } from "@tanstack/react-query";
import AuthenticateAPI from "../../api/authen";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { isPending, mutate: mutateRegisterAccount } = useMutation({
    mutationFn: AuthenticateAPI.RegisterAccount,
    mutationKey: "Register-account",
    onError: (error) => {
      message.error(error);
    },
    onSuccess: () => {
      message.success("Register new account is successful");
      navigate("/login");
    },
  });

  const submitForm = (values) => {
    mutateRegisterAccount(values);
  };

  return (
    <Grid className="loginWrapper">
      <Grid className="loginForm">
        <h2>Signup</h2>
        <p>Signup your account</p>
        <Form layout="vertical" form={form} requiredMark={false} onFinish={submitForm}>
          <Row>
            <Col span={24}>
              <Form.Item name="username" label="User Name" rules={[FORM_RULES.required]}>
                <Input />
              </Form.Item>{" "}
            </Col>
            <Col span={24}>
              <Form.Item name="password" label="Password" rules={[FORM_RULES.required]}>
                <Input.Password />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item name="fullname" label="Full Name" rules={[FORM_RULES.required]}>
                <Input />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item name="birthdate" label="Birth Date" rules={[FORM_RULES.required]}>
                <DatePicker style={{ width: "100%" }} />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item name="email" label="Email" rules={[FORM_RULES.required]}>
                <Input type="email" />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item name="phoneNumber" label="Phone Number" rules={[FORM_RULES.required]}>
                <Input />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item name="roleId" label="Role" rules={[FORM_RULES.required]}>
                <Select
                  options={[
                    { value: 2, label: "Customer" },
                    { value: 1, label: "Staff" },
                  ]}
                  style={{ width: "100%" }}
                />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Row gutter={[14, 14]}>
                <Col span={24}>
                  <Button
                    loading={isPending}
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
                    Register Account
                  </Button>
                </Col>

                <Col span={24}>
                  <p className="noteHelp">
                    You have already account ? <a href={PAGE_ROUTES.LOGIN}>Login Account</a>
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

export default RegisterPage;
