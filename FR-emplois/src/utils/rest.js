import {getUserLocally} from '@ied/components-mobile'
import * as Sentry from '@sentry/react-native'

import {phpSessId} from '@utils/user'
import {env} from '../../env'

export const getPhpSessId = async () => await phpSessId()

export const rest = async ({...params}, shouldLogError = true) => {
  const token = await getUserLocally('token')

  return fetch(params?.url, {
    method: params?.method || 'GET',
    headers: {
      origin: env.APP_AUTH,
      'Content-Type': 'application/json',
      Authorization: params?.pingToken ? `token ${params?.pingToken}` : `token ${token}`,
    },
    body: params?.body,
    credentials: 'omit',
  })
    .then(async res => {
      // const loadedStore = await store()
      if (res.status === 401 || res.status === 403 || res.status === 500) {
        if (shouldLogError) {
          const error = await res.json()
          Sentry.captureException(JSON.stringify(error))

          // Return status of error and error message
          return {status: res.status, error}
        }
      }
      return res
    })
    .catch(e => console.error('error', e))
}

export const restWithHeaders = async ({...params}, shouldLogError = true) => {
  const token = await getUserLocally('token')

  return fetch(params?.url, {
    method: params?.method || 'GET',
    headers: {'Content-Type': 'application/json', Authorization: `token ${token}`, ...params?.headers},
    credentials: 'include',
    body: params?.body,
  })
    .then(async res => {
      if (res.status === 401 || res.status === 403 || res.status === 500) {
        if (shouldLogError) {
          const error = await res.json()
          Sentry.captureException(JSON.stringify(error))
        }
      }
      return res
    })
    .catch(e => console.error('error', e))
}

export const restFormData = async (params, shouldLogError = true) => {
  const {url, method, headers, body} = params

  const token = await getUserLocally('token')

  const reqHeaders = token ? {...headers, Authorization: `token ${token}`} : headers

  const req = {
    method: method || 'GET',
    headers: {
      'Content-Type': 'multipart/form-data',
      ...reqHeaders,
    },
    credentials: 'include',
    body,
  }

  return fetch(url, req)
    .then(async res => {
      if (res.status === 401 || res.status === 403 || res.status === 500) {
        if (shouldLogError) {
          const error = await res.json()
          Sentry.captureException(JSON.stringify(error))
        }
      }
      return res
    })
    .catch(e => console.error('error', e))
}

export const formatUrlWithQueryParams = (url, params, asc) => {
  let formattedUrl = `${url}?`
  Object.keys(params).forEach(key => {
    formattedUrl = `${formattedUrl}&${key}=${params[key]}`
  })
  return asc ? `${formattedUrl}:${asc}` : formattedUrl
}

export const formatUrlWithParams = (url, params) => {
  let formattedUrl = url
  Object.keys(params).forEach(key => {
    formattedUrl = formattedUrl.replace(`:${key}`, params[key])
  })
  return formattedUrl
}

export const formatUrlWithParamsAndQueryParams = (url, params) => {
  let formattedUrl = url
  Object.keys(params).forEach(key => {
    formattedUrl = formattedUrl.replace(`:${key}`, params[key])
  })
  if (params?.query) formattedUrl = `${formattedUrl}?query=${params.query}`
  if (params?.page) formattedUrl = `${formattedUrl}?page=${params.page}&max_per_page=15`
  if (params?.expand) formattedUrl = `${formattedUrl}?expand=${params.expand}`

  return formattedUrl
}

export const formatUrlWithExpandsArrays = (url, params) => {
  let formattedUrl = url.replace(`:id`, params['id'])

  let paramsString = ''

  params.expand.forEach((param, index) => {
    if (index === 0) paramsString += `expand[]=${param}`
    else paramsString += `&expand[]=${param}`
  })

  if (params?.expand) formattedUrl = `${formattedUrl}?${paramsString}`

  return formattedUrl
}

// execute sequentials API Rest Calls
export const sequentialsRequests = async requests => {
  const waitFor = ms => new Promise(r => setTimeout(r, ms))

  const asyncForEach = async (array, callback) => {
    // eslint-disable-next-line no-plusplus
    for (let index = 0; index < array.length; index++) {
      // eslint-disable-next-line no-await-in-loop
      await callback(array[index], index, array)
    }
  }

  await asyncForEach(requests, async () => {
    await waitFor(2000)
  })
}
