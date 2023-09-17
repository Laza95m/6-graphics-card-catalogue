import s from './CardItem.module.css';
import { Link } from 'react-router-dom';

const CardItem = ({ card }) => {
  return (
    <>
      <div key={card.id} className={s.item}>
        <div
          className={s.img}
          style={{ backgroundImage: `url(${card.img})` }}
        ></div>
        <div className={s.info}>
          <h2 className={s.name}>{card.name}</h2>
          <p className={s.price}>{card.price} $</p>
          <Link to={`/CardDetail/${card.id}`} className={s.btn}>
            Read more
          </Link>
        </div>
      </div>
    </>
  );
};

export default CardItem;
