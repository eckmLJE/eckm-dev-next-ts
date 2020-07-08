import React, { ReactNode } from 'react'
import Head from 'next/head'
import * as S from './styled'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout: React.FC<Props> = ({
  children,
  title = 'This is the default title',
}) => (
  <S.Layout>
    <Head>
      <title>{`${title} | Lucas Eckman`}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {children}
  </S.Layout>
)

export default Layout
