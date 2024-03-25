
export const apiDomain = 'https://bcoins.dterra.eu'
export const webApiDomain = 'https://autoro.ru/webauthn'
export const GRANT_TYPE = 'password'
export const CLIENT_ID = 2
export const CLIENT_SECRET = 'xaZawT4WR6gxyCJgZAPc8uV1CtOQxB6M7pHwHnOA'

export const api = {
  USER_AUTH: `${apiDomain}/oauth/token`,
  USER_INFO: `${apiDomain}/api/user`,
  DEVICE_TOKEN_CREATE: `${apiDomain}/api/user/token`,
  DEVICE_TOKEN_DELETE: `${apiDomain}/api/user/token/delete`,
  WEBAUTHN_REGISTER_OPTIONS: `${webApiDomain}/keys/options`,
  WEBAUTHN_REGISTER: `${webApiDomain}/auth/keys`,
  WEBAUTHN_AUTH_OPTIONS: `${webApiDomain}/auth/options`,
  WEBAUTHN_AUTH: `${webApiDomain}/auth`
} as const

type Keys = keyof typeof api
export type TEndpoint = typeof api[Keys]
