export interface LoginParams {
    username: string;
    password: string;
}

export interface UserInfo {
    token: string;
    username: string;
    email: string;
}

export interface NewItem {
    index: number
    title: string
    href: string
    hot: string
  }
