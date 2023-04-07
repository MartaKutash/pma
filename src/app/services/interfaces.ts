export interface User {
  login: string
  password: string

}

export interface Token {
  token: string
}

export interface RegisterUser {
  login: string
  name: string
  password: string
}

export interface ResponseObj {
  obj: {
    id: string
    name: string
    login: string
  }
}
