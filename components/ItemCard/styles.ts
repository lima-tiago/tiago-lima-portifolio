import styled, { keyframes } from 'styled-components';

const shine = keyframes`
  to {
    background-position: 200% center;
  }
`;

export const Board = styled.div`
  width: 96px;
  height: 96px;
  position: relative;
  margin: 16px 8px;

  .border {
    overflow: hidden;
    position: relative;

    &:before {
      content: '';
      position: absolute;
      display: block;
      top: -50%;
      left: -50%;
      z-index: -9;
      display: block;
      height: 200%;
      width: 200%;
      transform: rotate(-45deg);
      overflow: hidden;
      background: linear-gradient(to right, #ecd08c 20%, #ecd08c 40%, #fff 50%, #fff 55%, #ecd08c 70%, #ecd08c 100%);
      background-size: 200% auto;

      animation: ${shine} 3s linear infinite;
    }

    &:after {
      content: '';
      position: absolute;
      bottom: -30px;
      left: -30px;
      width: 200%;
      height: 200%;
      z-index: 2;
      background: linear-gradient(to right, #ecd08c 0%, transparent 50%);
      opacity: 0.5;
      transform: rotate(-45deg);
    }
  }

  .item {
    background: #542f63;
    width: 90px;
    height: 90px;
    margin: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    &.exotic {
      background: #cfab37;
    }

    img {
      width: 70px;
      height: 70px;
      object-fit: contain;
    }
  }

  .card {
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
    ul {
      margin: 0 0 0 20px;
      > li {
        font-size: 1.125rem;
        font-weight: bold;
      }
      > ul li {
        font-weight: 400;
      }
    }

    h2 {
      position: relative;
      margin: -1rem 0 1rem -1rem;
      width: calc(100% + 2rem);
      padding: 1rem;
      background: #542f63;
      &.exotic {
        background: #cfab37;
      }
    }
  }

  &:hover {
    .card {
      left: 105%;
      padding: 1rem;
      width: 280px;
      height: 280px;
    }
  }

  @media screen and (max-width: 768px) {
    position: inherit;
    &:hover {
      .card {
        left: 0;
        right: 0;
        margin: 0 auto;
        top: 300px;
        z-index: 3;
        display: flex;
        flex-direction: column;
        width: calc(100vw - 30px);
        height: 280px;
      }
    }
  }
`;
