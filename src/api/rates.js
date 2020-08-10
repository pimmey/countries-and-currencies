import throttle from 'lodash.throttle'

const BASE_URL = 'https://data.fixer.io/api'
const API_KEY = ''
const BASE_CURRENCY = 'SEK'
const THROTTLE_TIME = 1000 * 60 * 60 // due to hourly updates with current pricing plan

export const getLatestRates = async () => {
  const url = `${BASE_URL}/latest?base=${BASE_CURRENCY}&access_key=${API_KEY}`

  return fetch(url)
    .then(res => res.json())
    .catch(() => ({
        message: 'Something went wrong'
      })
    )
}

export const getThrottledRates = throttle(
  getLatestRates,
  THROTTLE_TIME, {
  trailing: false
})
