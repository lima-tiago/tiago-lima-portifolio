import styled from 'styled-components';

export const Content = styled.main`
  width: 100%;
  height: 100vh;
  video {
    position: fixed;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
