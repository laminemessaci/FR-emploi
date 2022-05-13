/**
 * Return a badge color according to status
 * @param {*} status from contact's object
 */
const crmColorStatus = status => {
  switch (status) {
    case 'client':
      return 'rgb(134, 188, 37)'
    case 'prospect':
      return 'rgb(1, 33, 105)'
    case 'out_going':
      return 'rgb(243, 145, 0)'
    case 'closed':
      return 'rgb(244, 67, 54)'
    case 'abandoned':
      return 'rgb(244, 67, 54)'
    default:
      return 'rgb(235, 221, 71)'
  }
}

export default crmColorStatus
