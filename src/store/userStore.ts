import { makeAutoObservable } from "mobx";

class UserStore {
  private _profile: API.Profile | any;
  private _token: string = ""; // Token

  constructor() {
    makeAutoObservable(this);
  }
  // 用户信息
  get profile(): API.Profile {
    return (
      this._profile || JSON.parse(localStorage.getItem("profile") as string)
    );
  }
  public setProfile(profile: API.Profile): void {
    localStorage.setItem("profile", JSON.stringify(profile));
  }

  public getToken(): string {
    return this._token;
  }

  public loginAction(profile: API.Profile, token: string): void {
    this._profile = profile;
    this._token = token;
    localStorage.setItem("profile", JSON.stringify(profile));
    localStorage.setItem("token", token);
  }

  /**
   * 状态管理中的退出登录
   */
  public logout(): void {
    this._profile = undefined;
    this._token = "";
    localStorage.removeItem("profile");
    localStorage.removeItem("token");
  }
}

export default UserStore;
