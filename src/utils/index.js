export const sumDays = (days, date) => {
  let tempDate = date ? date : new Date()
  return tempDate.setDate(tempDate.getDate() + days)
}

export const formatDate = (date) => {
  if (date) {
    let tempDate = new Date(date)
    return tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear()
  }
}

export const formatDateTime = (date) => {
  if (date) {
    let tempDate = new Date(date)
    return tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear() + ' - ' + tempDate.getHours() + ':' + tempDate.getMinutes()
  }
}

export const truncateString = (value, quantity) => {
  return `${ value.substring(0, quantity) }${ value.length > quantity ? '...' : '' }`
}

export const boolCell = (value) => {
  return value ? 'Yes' : 'No'
}