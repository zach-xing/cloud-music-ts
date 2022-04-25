import { makeAutoObservable } from "mobx";

class UserStore {
  private _profile: API.Profile | undefined;
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

  public getToken(): string {
    return this._token;
  }

  public loginAction(profile: API.Profile, token: string): void {
    this._profile = profile;
    this._token = token;
    localStorage.setItem("profile", JSON.stringify(profile));
    localStorage.setItem("token", token);
  }
}

export default UserStore;
