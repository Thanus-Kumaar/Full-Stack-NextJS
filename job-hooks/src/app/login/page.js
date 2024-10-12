"use client";
import { Button, Checkbox, Form, Input, Flex } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import axios from "axios";
import Password from "antd/es/input/Password";

export default function Login() {
  const onFinish = async (values) => {
    console.log("Received values of form: ", values);
    const response = await axios.post("/api/user/login", {
      email: values.email,
      Password: values.password,
    });
    console.log(response);
  };
  return (
    <div>
      <Form
        className="bg-blue-200 p-5 rounded-xl mx-auto mt-36 scale-110"
        name="login"
        initialValues={{
          remember: true,
        }}
        style={{
          maxWidth: 360,
        }}
        onFinish={onFinish}
      >
        <div className="mb-6 text-2xl text-center">LOGIN FORM</div>
        <Form.Item
          className="mb-8"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your Email!",
            },
          ]}
        >
          <Input prefix={<UserOutlined />} placeholder="Email" />
        </Form.Item>
        <Form.Item
          className="mb-8"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Flex justify="space-between" align="center">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <a href="">Forgot password</a>
          </Flex>
        </Form.Item>

        <Form.Item>
          <Button block type="primary" htmlType="submit">
            Log in
          </Button>
          or <a href="">Register now!</a>
        </Form.Item>
      </Form>
    </div>
  );
}
