import { makeAutoObservable } from "mobx";

class UserStore {
  private profile: any = {}; // 用户信息
  private token: string = ""; // Token
  private isLogin: boolean = false; // 是否登录
  constructor() {
    makeAutoObservable(this);
  }

  public getId(): number {
    return this.profile.userId;
  }
  public getProfile(): object {
    return this.profile;
  }
  public getToken(): string {
    return this.token;
  }
  public getIsLogin(): boolean {
    return this.isLogin;
  }

  // 登录操作
  public loginAction(profile: object, token: string): void {
    this.profile = profile;
    this.token = token;
    this.isLogin = true;
  }
}

export default UserStore;
