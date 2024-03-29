import axios, { AxiosResponse } from 'axios'
import log from '@/utils/log'

export const post = async <T>(reqName: string, endpoint: string, data: object, auth: boolean | undefined = true): Promise<AxiosResponse<T>> => {
  log({ name: reqName, data, type: 'request' })

  return axios
    .post(endpoint, data, { ...auth && { headers: { Authorization: `Bearer ${window.localStorage.auth}` } } })
    .then((res) => {
      log({ name: reqName, data: res, type: 'response' })
      return res
    })
    .catch((res) => {
      log({ name: reqName, data: res.response, type: 'catch' })
      return res
    })
}

export const get = async <T>(reqName: string, endpoint: string, data?: object, auth: boolean | undefined = true): Promise<AxiosResponse<T>> => {
  log({ name: reqName, data: data ?? 'no data', type: 'request' })

  const url = new URL(endpoint)

  if (data) {
    for (let [key, value] of Object.entries(data)) {
      url.searchParams.append(key, value)
    }
  }

  const endpointWithData = url.href

  return axios
    .get(endpointWithData, { ...auth && { headers: { Authorization: `Bearer ${window.localStorage.auth}` } } })
    .then((res) => {
      log({ name: reqName, data: res, type: 'response' })
      return res
    })
    .catch((res) => {
      log({ name: reqName, data: res.response, type: 'catch' })
      return res
    })
}
