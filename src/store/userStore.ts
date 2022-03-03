import { makeAutoObservable } from "mobx";

class UserStore {
  private _profile: any;
  private _token: string = ""; // Token
  constructor() {
    makeAutoObservable(this);
  }
  // 用户信息
  get profile(): object {
    return (
      this._profile || JSON.parse(sessionStorage.getItem("profile") as string)
    );
  }

  public getId(): number {
    return this._profile.userId;
  }

  public getToken(): string {
    return this._token;
  }
  public loginAction(profile: object, token: string): void {
    this._profile = profile;
    this._token = token;
    sessionStorage.setItem("profile", JSON.stringify(profile));
    sessionStorage.setItem("token", JSON.stringify(token));
  }
}

export default UserStore;
