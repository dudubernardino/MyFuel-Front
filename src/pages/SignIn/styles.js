import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  
  to {
    transform: rotate(360deg);
  }
`;

const move = keyframes`
  from {
    opacity: 0;
    transform: translateX(-35px);
  }

  to {
    opacity: 1;
    transform: translateX(0%);
  }
`;

export const Container = styled.div`
  img {
    animation: ${move} 800ms;
  }

  input:nth-child(1) {
    animation: ${move} 800ms;
    animation-delay: 100ms;
  }

  input:nth-child(2) {
    animation: ${move} 800ms;
    animation-delay: 150ms;
    animation-fill-mode: backwards;
  }

  button {
    animation: ${move} 800ms;
    animation-delay: 250ms;
    animation-fill-mode: backwards;
  }
`;

export const Loading = styled.div`
  svg {
    animation: ${rotate} 2s linear infinite;
  }
`;
