import React, { ReactNode } from 'react'
import Head from 'next/head'

interface Props {
  children?: ReactNode
  title?: string
}

const Layout: React.FC<Props> = ({
  children,
  title = 'This is the default title',
}) => (
  <>
    <Head>
      <title>{`${title} | Lucas Eckman`}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        href="https://fonts.googleapis.com/css2?family=Patrick+Hand+SC&display=swap"
        rel="stylesheet"
      />
    </Head>
    {children}
  </>
)

export default Layout
