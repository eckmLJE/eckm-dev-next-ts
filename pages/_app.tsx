import App from 'next/app'
import { ThemeProvider } from 'styled-components'
import theme from '../theme'
import GlobalStyles from '../global-styles'
import Layout from '../layout'
import { withRouter } from 'next/router'
import TopNav from '../components/topnav'

class MyApp extends App {
  render() {
    const {
      Component,
      pageProps,
      router: { pathname },
    } = this.props
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Layout>
          <TopNav pathname={pathname} />
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    )
  }
}

export default withRouter(MyApp)
