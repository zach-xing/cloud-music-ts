import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import useStores from "../../store";
import { doLogout } from "../../utils/auth";
import { StyleLayout, FlexDiv } from "./style";

/**
 * 个人页面
 */
const Profile = () => {
  const navigate = useNavigate();
  const { userStore } = useStores();
  const [nickname, setNickname] = useState(userStore.profile.nickname);
  const [signature, setSignature] = useState(userStore.profile.signature);

  // 更改昵称
  const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  // 更改签名
  const changeSignature = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignature(e.target.value);
  };

  // 保存个人信息
  const handleSave = async () => {
    // const data = await updateUserInfo({
    //   nickname,
    //   signature,
    // });
    // const tmp = userStore.profile;
    // tmp.nickname = nickname;
    // tmp.signature = signature;
    // userStore.setProfile(tmp);
    // console.log("success", data);
    alert("在官方改去，我没权限");
  };

  // 退出登录
  const logout = () => {
    userStore.logout();
    doLogout(); // 权限中的退出登录
    navigate("/");
  };

  return (
    <StyleLayout>
      <h2>个人信息</h2>
      <FlexDiv>
        <h4>昵称</h4>
        <Input defaultValue={nickname} onChange={changeName} />
      </FlexDiv>
      <FlexDiv>
        <h4>个人介绍</h4>
        <Input defaultValue={signature} onChange={changeSignature} />
      </FlexDiv>
      <div style={{ margin: "0 40%" }}>
        <Button size="block" onClick={handleSave}>
          保存
        </Button>
      </div>
      <h2>操作</h2>
      <div style={{ margin: "0 40%" }}>
        <Button size="block" danger onClick={logout}>
          退出登录
        </Button>
      </div>
    </StyleLayout>
  );
};

export default Profile;
