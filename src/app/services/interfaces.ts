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
  _id: string
  name: string
  login: string
}

export interface Board {
  _id?: String
  title: string
  owner: string
  users: String[]
}
