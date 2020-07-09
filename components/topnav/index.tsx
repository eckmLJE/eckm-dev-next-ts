import * as S from './styled'

interface Props {
  pathname: string
}

const TopNav: React.FC<Props> = ({ pathname }) => (
  <S.TopNav>{pathname}</S.TopNav>
)

export default TopNav
