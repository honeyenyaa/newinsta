/** @format */

import { Alert, AlertIcon,  } from "@chakra-ui/react";
import { useState } from "react";
import useLogin from "../../hooks/useLogin";
import { Button, Form, Input } from "antd";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const { loading, error, login } = useLogin();
  const onFinish = (e)=>{
	console.log(e)
  }
  return (
    <>
      <Form onFinish={onFinish}>
        <Form.Item name="email">
          <Input placeholder='Email' />
        </Form.Item>
        <Form.Item  name="password">
          <Input.Password placeholder="Password"/>
        </Form.Item>
		<Button loading={loading}>Login</Button>
      </Form>
      {/* <Input
        placeholder='Email'
        fontSize={14}
        type='email'
        size={"sm"}
        value={inputs.email}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
      />
      <Input
        placeholder='Password'
        fontSize={14}
        size={"sm"}
        type='password'
        value={inputs.password}
        onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
      /> */}
      {error && (
        <Alert status='error' fontSize={13} p={2} borderRadius={4}>
          <AlertIcon fontSize={12} />
          {error.message}
        </Alert>
      )}
      {/* <Button
        w={"full"}
        colorScheme='blue'
        size={"sm"}
        fontSize={14}
        isLoading={loading}
        onClick={() => login(inputs)}>
        Log in
      </Button> */}
    </>
  );
};

export default Login;
