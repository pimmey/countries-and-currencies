const BASE_URL = 'https://restcountries.eu/rest/v2'
const FIELDS = [
  'name',
  'capital',
  'population',
  'currencies',
  'alpha2Code',
  'flag',
  'latlng'
]

export const searchByCountryName = async query => {
  const url = `${BASE_URL}/name/${query}?fields=${FIELDS.join(';')}`

  return fetch(url)
    .then(res => res.json())
    .catch(() => ({
      message: 'Something went wrong'
    }))
}
