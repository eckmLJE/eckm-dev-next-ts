import styled from 'styled-components'

const WelcomeHero = styled.header`
  margin: 0;
  color: ${({
    theme: {
      colors: { secondary },
    },
  }) => secondary};
  font-size: 3rem;
`

export { WelcomeHero }
