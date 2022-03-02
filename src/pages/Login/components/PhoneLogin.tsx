import React, { useState } from "react";
import useDebounce from "../../../hooks/useDebounce";
import { Signup } from "../login.style";
import { loginWithPhone } from "../../../api/login";

const PhoneLogin = () => {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const res = await loginWithPhone(account, password);
    console.log(res);
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
    <Signup>
      <img
        src="https://music.qier222.com/img/logos/netease-music.png"
        alt="music logo"
      />
      <h2>登录网易云账号</h2>
      <form>
        <input type="text" placeholder="手机号" onInput={handleInputAccount} />
        <input
          type="password"
          placeholder="密码"
          autoComplete="off"
          onInput={handleInputPasswords}
        />
      </form>
      <button onClick={handleLogin}>登录</button>
    </Signup>
  );
};

export default PhoneLogin;
