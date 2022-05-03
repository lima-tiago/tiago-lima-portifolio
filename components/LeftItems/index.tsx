/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { ItemCard } from '../ItemCard';

import * as S from './styles';

export const LeftItems = () => {
  return (
    <S.Content>
      <S.About>
        <img src="/assets/icon-about.png" alt="About Tiago" />
        <div className="text">
          <h2>About me</h2>
          <p>
            A solver problem, actually working as Frontend developer at{' '}
            <a target="_blank" href="https://oli.live/" rel="noreferrer">
              Oli Live
            </a>{' '}
            with React and React Native.
            <br />
            My objective of life is to solve problems and make people's lives easier.
          </p>
        </div>
      </S.About>

      <ItemCard
        icon="/assets/skills.png"
        title="Skills"
        text={
          <ul>
            <li>More than 4 years with:</li>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>ReactJs</li>
              <li>VueJs</li>
            </ul>
          </ul>
        }
      />
      <ItemCard
        exotic
        icon="/assets/graduated.png"
        title="Graduation"
        text={
          <>
            <p>
              Graduated at AESPI in Analysis and Systems Development at 2020. <br />
            </p>
            <p>
              Also started Physics at UFPI - Federal University of Piauí at 2016, but i fell in love with development.
            </p>
          </>
        }
      />
      {/* <ItemCard />
      <ItemCard />
      <ItemCard /> */}
    </S.Content>
  );
};
