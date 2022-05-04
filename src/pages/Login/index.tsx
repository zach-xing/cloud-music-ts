import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useStores from "../../store";
import { loginWithPhone } from "../../api/login";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { StyleLogin, StyleMain } from "./style";
import { setCookie } from "../../utils/auth";

const Login = () => {
  const navigate = useNavigate();
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const { userStore } = useStores();

  // 登录操作
  const handleLogin = async () => {
    if (account === "" || password === "") {
      alert("不能为空！")
      return;
    }
    const res = await loginWithPhone(account, password);
    if (res.code !== 200) {
      alert("登录失败");
    } else {
      console.info("Login Success");
      setCookie(res.cookie);
      userStore.loginAction(res.profile, res.token);
      navigate("/home", { replace: true });
    }
  };

  // 输入手机号
  const handleInputAccount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccount(e.target.value);
  };

  // 输入密码
  const handleInputPasswords = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <StyleMain>
      <StyleLogin>
        <img
          src="https://music.qier222.com/img/logos/netease-music.png"
          alt="music logo"
        />
        <h2>登录网易云账号</h2>
        <form>
          <Input
            defaultValue={""}
            placeholder="手机号"
            onChange={handleInputAccount}
          />
          <Input
            type="password"
            style={{ marginBottom: "20px" }}
            defaultValue={""}
            placeholder="密码"
            onChange={handleInputPasswords}
          />
          <Button size="block" onClick={handleLogin}>
            登录
          </Button>
        </form>
      </StyleLogin>
    </StyleMain>
  );
};

export default Login;
