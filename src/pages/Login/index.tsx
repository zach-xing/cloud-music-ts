import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useStores from "../../store";
import { loginWithPhone } from "../../api/login";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { StyleLogin, StyleMain } from "./style";
import { setCookie } from "../../utils/auth";
import MyInfo from "../../env";

const Login = () => {
  const navigate = useNavigate();
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const { userStore } = useStores();

  // 登录操作
  async function handleLogin() {
    if (account === "" || password === "") {
      alert("不能为空！");
      return;
    }
    /**************** start 这里用的自己本地的数据进行登录，也就是 env.ts  ****************/
    // 注意：env.ts 未开源（毕竟里面有自己账号的敏感信息）
    setCookie(MyInfo.cookie);
    userStore.loginAction(MyInfo.profile, MyInfo.token);
    navigate("/", { replace: true });
    /**************** ent 这里用的自己本地的数据进行登录，也就是 env.ts ****************/

    /**************** start 或者登录（因为 API 好像有点问题，有时候登录不了）  ****************/
    // try {
    //   const res = await loginWithPhone(account, password);
    //   setCookie(res.cookie);
    //   userStore.loginAction(res.profile, res.token);
    //   navigate("/", { replace: true });
    // } catch (error: any) {
    //   console.log("登录失败", error);
    // }
    /**************** end 或者登录（因为 API 好像有点问题，有时候登录不了）  ****************/
  }

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
