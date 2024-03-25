import { api } from '@/api/service/endpoints'
import { post } from '@/api/service/post'
import {
  IWebauthnOptions as IWebauthnOptionsData
} from '@/ts/requests/post-data/IWebauthn'
import {
  TWebauthnOptions as TWebauthnOptionsRes
} from '@/ts/requests/responses/IWebauthn'

export const api_webauthnRegisterOptions = (data: IWebauthnOptionsData) =>                  post<TWebauthnOptionsRes>('api_webauthnRegisterOptions', api.WEBAUTHN_REGISTER_OPTIONS, data)
export const api_webauthnRegister = (data: Credential) =>                                   post<any>('api_webauthnRegister', api.WEBAUTHN_REGISTER, data)
export const api_webauthnAuthOptions = (data: IWebauthnOptionsData) =>                      post<TWebauthnOptionsRes>('api_webauthnAuthOptions', api.WEBAUTHN_AUTH_OPTIONS, data)
export const api_webauthnAuth = (data: Credential) =>                                       post<any>('api_webauthnAuth', api.WEBAUTHN_AUTH, data)
