import styled from 'styled-components';

export const Content = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: row;
  }
`;

export const About = styled.div`
  position: relative;
  width: 160px;
  height: 160px;

  img {
    object-fit: contain;
    width: 160px;
    height: 160px;
  }

  .text {
    overflow: hidden;
    width: 0;
    height: 0;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(245, 245, 245, 0.15);
    transition: all 0.3s ease-in-out;
    padding: 0;
    font-size: 1.125rem;
    color: #fff;

    h2 {
      position: relative;
      margin: -1rem 0 1rem -1rem;
      width: calc(100% + 2rem);
      padding: 1rem;
      background: #6dbdcb;
    }
  }

  &:hover {
    .text {
      left: 105%;
      padding: 1rem;
      width: 280px;
      height: 280px;
    }
  }

  @media screen and (max-width: 768px) {
    .text {
      /* position: fixed; */
    }
    &:hover {
      .text {
        left: 0;
        right: 0;
        margin: 0 auto;
        top: 180px;
        z-index: 3;
        display: flex;
        flex-direction: column;
        width: calc(100vw - 30px);
        height: 280px;
      }
    }
  }
`;
