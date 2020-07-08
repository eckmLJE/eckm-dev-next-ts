import styled from 'styled-components'

const WelcomeHero = styled.header`
  margin: 0;
  color: ${({
    theme: {
      colors: { secondary },
    },
  }) => secondary};

  h1 {
    margin: 0;
    font-size: clamp(1.5rem, 8vw, 6rem);
    font-weight: normal;
  }
`

export { WelcomeHero }
