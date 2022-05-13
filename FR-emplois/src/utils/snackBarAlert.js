import {DeviceEventEmitter} from 'react-native'
import {v4} from 'uuid'

export const error = () =>
  DeviceEventEmitter.emit('DISPLAY_SNACKBAR_ALERT', {
    type: 'error',
    id: v4(),
    text: 'Something went wrong. Please contact support if problem persists.',
  })

export const mfaSuccess = () => {
  DeviceEventEmitter.emit('DISPLAY_SNACKBAR_ALERT', {
    type: 'success',
    id: v4(),
    text: 'Your access request has been accepted',
  })
}
export const mfaFailed = () =>
  DeviceEventEmitter.emit('DISPLAY_SNACKBAR_ALERT', {
    type: 'error',
    id: v4(),
    text: 'You refuse the access request.',
  })
