export interface User {
  login: string
  password: string

}

export interface Token {
  token: string
}

export interface RegisterUser {
  login: string
  login_name: string
  password: string
  password_confirmation: string
}
