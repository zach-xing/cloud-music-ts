import { Main, Signup } from "./login.style";

const Login = () => {
  return (
    <Main>
      <Signup>
        <img
          src="https://music.qier222.com/img/logos/netease-music.png"
          alt="music logo"
        />
        <h2>登录网易云账号</h2>
        <form>
          <input type="text" placeholder="手机号" />
          <input type="password" placeholder="密码" autoComplete="off" />
        </form>
        <button>登录</button>
      </Signup>
    </Main>
  );
};

export default Login;
