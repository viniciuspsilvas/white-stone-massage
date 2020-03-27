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

export const formatDateToInput = (date) => {
  let tempDate = date ? new Date(date) : new Date()

  let month = (tempDate.getMonth() + 1).toString()
  let day = tempDate.getDate().toString()
  return tempDate.getFullYear() + '-' + (month.length === 1 ? `0${month}` : month) + '-' + (day.length === 1 ? `0${day}` : day)
}

export const setFormValue = ( obj, setValue ) => {
  Object.keys(obj).forEach( key => {
    setValue(key, obj[key])
  })
}

export const australianStates = [
  { name: 'New South Wales', abbr: 'NSW' },
  { name: 'Queensland', abbr: 'QLD' },
  { name: 'South Australia', abbr: 'SA' },
  { name: 'Tasmania', abbr: 'TAS' },
  { name: 'Victoria', abbr: 'VIC' },
  { name: 'Western Australia', abbr: 'WA' }
]