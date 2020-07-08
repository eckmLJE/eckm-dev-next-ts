import styled, { keyframes } from 'styled-components'

const backgroundSlide = keyframes`
  from { background-position: 1000px; }
  to { background-position: -1000px; }
`

const fadeIn = (endColor: string) => keyframes`
  from { color: transparent; }
  to {color: ${endColor}; }
`

const WelcomeHero = styled.header`
  color: ${({
    theme: {
      colors: { secondary },
    },
  }) => secondary};

  h1 {
    margin: 0;
    position: relative;
    display: block;
    width: fit-content;
    background: ${({ theme }) =>
      `linear-gradient(75deg, ${theme.colors.primary} 6%, ${theme.colors.primary} 23%, ${theme.colors.primary})`};
    background-size: 1000px 400px;
    background-position: 50vw 50vh;
    will-change: background-position;
    background-repeat: no-repeat;
    animation: ${backgroundSlide} 0.5s;
    animation-delay: 0.5s;
    animation-timing-function: linear;
    z-index: 100;
    font-size: clamp(1rem, 8vw, 5rem);

    span {
      position: relative;
      display: inline;
      margin: 0;
      color: transparent;
      z-index: -1;
      animation: ${({
          theme: {
            colors: { secondary },
          },
        }) => fadeIn(secondary)}
        1s forwards;
      animation-delay: 0.8s;
    }
  }
`

export { WelcomeHero }
