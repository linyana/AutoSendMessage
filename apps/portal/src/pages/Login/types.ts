export type ILoginType = {
  email: string
  password: string
  agree?: boolean
}

export type ILoginResponseType = {
  data: {
    access: string
    refresh: string
    name:string
    id: string,
    email: string
    ssoTicket: string
    merchant_id: string
  },
  meta: {
    message: string
  }
}