import styled from 'styled-components';
import BgBadge from 'public/assets/bg-badge.jpeg';

export const Content = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 24px 0 8px;
  background-image: ${() => `url(${BgBadge.src})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  .container {
    flex-direction: row;
    align-items: center;
  }
`;

export const BadgeIcon = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  display: flex;
  margin-bottom: -80px;
  position: relative;
`;

export const UserName = styled.h3`
  position: relative;
  margin: 8px 16px;
  color: #fff;
  font-size: 2rem;
  font-weight: bold;
`;

export const SubName = styled.p`
  font-size: 1.125rem;
  color: #f5f5f5;
  opacity: 0.75;
  margin: 0 16px;
`;
