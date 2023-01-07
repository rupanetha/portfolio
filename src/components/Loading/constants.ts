import { keyframes } from '@chakra-ui/react';

const pulse = keyframes`
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
}
`;

export const pulseAnimation = `${pulse} infinite 2s linear`;
