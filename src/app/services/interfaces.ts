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
  _id?: string
  title: string
  owner: string
  users: String[]
}

export interface Column {
  _id?: string
  title: string
  order: number
  board_id?: String
}

