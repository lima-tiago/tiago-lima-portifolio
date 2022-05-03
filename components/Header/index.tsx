/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';

import * as S from './styles';

export const Header = () => {
  return (
    <S.Content>
      <div className="container">
        <S.BadgeIcon
          className="logo"
          src="/assets/icon-badge.png"
          alt={`Badge from new expansion "The Witcher Queen"`}
        />
        <div>
          <S.UserName>Tiago Lima</S.UserName>
          <S.SubName>{'// Season 24 / @tiagof.ts'}</S.SubName>
        </div>
      </div>
    </S.Content>
  );
};
