import styled from 'styled-components';

export const Content = styled.main`
  button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 2;
    width: 50px;
    height: 50px;
    border-radius: 4px;
    border: none;
    background: rgba(245, 245, 245, 0.15);

    img {
      width: 25px;
      height: 25px;
      object-fit: contain;
    }
  }
`;
