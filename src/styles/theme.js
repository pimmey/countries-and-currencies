import { grommet } from 'grommet/themes'
import { deepMerge } from 'grommet/utils'

const customTheme = deepMerge(grommet, {
  global: {
    font: {
      family:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      size: '18px'
    }
  }
})

export default customTheme
