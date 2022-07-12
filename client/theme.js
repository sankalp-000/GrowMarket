import { createMuiTheme } from '@material-ui/core/styles'
import { indigo, pink } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#6573c3',
      main: '#25636b',
      dark: '#2c387e',
      contrastText: '#fff',
    },
    secondary: {
      light: '#df487f',
      main: '#d81b60',
      dark: '#971243',
      contrastText: '#000',
    },
    openTitle: indigo['600'],
    protectedTitle: pink['400'],
    type: 'light'
  }
})

export default theme



// palette: {
//   primary: {
//     light: '#6573c3',
//     main: '#3f51b5',
//     dark: '#2c387e',
//     contrastText: '#fff',
//   },
//   secondary: {
//     light: '#df487f',
//     main: '#d81b60',
//     dark: '#971243',
//     contrastText: '#000',
//   },
//   openTitle: indigo['600'],
//   protectedTitle: pink['400'],
//   type: 'light'
// }