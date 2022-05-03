/* eslint-disable @next/next/no-img-element */
import * as S from './styles';

type ItemCardProps = {
  exotic?: boolean;
  icon: string;
  text: string | JSX.Element;
  title: string;
};

export const ItemCard = ({ exotic, icon, title, text }: ItemCardProps) => {
  return (
    <S.Board>
      <div className="border">
        <div className={`item ${exotic ? 'exotic' : ''}`}>
          <img src={icon} alt={title} />
        </div>
      </div>
      <div className="card">
        <h2 className={exotic ? 'exotic' : ''}>{title}</h2>
        {text}
      </div>
    </S.Board>
  );
};
