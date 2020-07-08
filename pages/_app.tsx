import App from 'next/app'
import { ThemeProvider } from 'styled-components'
import theme from '../theme'
import GlobalStyles from '../global-styles'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
