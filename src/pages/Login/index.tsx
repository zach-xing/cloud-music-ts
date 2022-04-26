import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useStores from "../../store";
import useDebounce from "../../hooks/useDebounce";
import { loginWithPhone } from "../../api/login";
import Button from "../../components/Button";
import { StyleLogin, StyleMain } from "./style";
import { setCookie } from "../../utils/auth";

const Login = () => {
  const navigate = useNavigate();
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const { userStore } = useStores();

  // 登录操作
  const handleLogin = async () => {
    const res = await loginWithPhone(account, password);
    if (res.code !== 200) {
      alert("登录失败");
    } else {
      console.info("Login Success");
      setCookie(res.cookie);
      userStore.loginAction(res.profile, res.token);
      navigate("/library", { replace: true });
    }
  };

  const handleInputAccount = useDebounce(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setAccount(e.target.value);
    },
    500
  );

  const handleInputPasswords = useDebounce(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    },
    500
  );

  return (
    <StyleMain>
      <StyleLogin>
        <img
          src="https://music.qier222.com/img/logos/netease-music.png"
          alt="music logo"
        />
        <h2>登录网易云账号</h2>
        <form>
          <input
            type="text"
            placeholder="手机号"
            onInput={handleInputAccount}
          />
          <input
            type="password"
            placeholder="密码"
            autoComplete="off"
            onInput={handleInputPasswords}
          />
        </form>
        <Button size="block" onClick={handleLogin}>
          登录
        </Button>
      </StyleLogin>
    </StyleMain>
  );
};

export default Login;
