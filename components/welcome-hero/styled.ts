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
  position: absolute;
  margin: 10vh 0 0 20vw;
  color: ${({
    theme: {
      colors: { secondary },
    },
  }) => secondary};

  h1 {
    position: relative;
    display: block;
    width: fit-content;
    font-family: 'Patrick Hand SC', cursive;
    font-size: clamp(1rem, 8vw, 5rem);
    font-weight: normal;
    background: ${({ theme }) =>
      `linear-gradient(90deg, ${theme.colors.primary} 0, ${theme.colors.primary} 100%)`};
    background-size: 1000px 400px;
    background-position: 50vw 50vh;
    will-change: background-position;
    background-repeat: no-repeat;
    animation: ${backgroundSlide} 0.5s;
    animation-delay: 0.5s;
    animation-timing-function: linear;
    z-index: 100;

    span {
      position: relative;
      display: inline;
      margin: 0;
      color: transparent;
      animation: ${({
          theme: {
            colors: { secondary },
          },
        }) => fadeIn(secondary)}
        1s forwards;
      animation-delay: 0.8s;
      z-index: -1;
    }
  }
`

export { WelcomeHero }
