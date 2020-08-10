import MOCK_RATES from 'data/rates'

export const getMockRates = async () => {
  return new Promise(resolve => resolve(MOCK_RATES))
}
