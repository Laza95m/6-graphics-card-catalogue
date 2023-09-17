import s from './CardDetail.module.css';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import CardItem from '../CardCatalogue/CardItem/CardItem';
import { graphicCardService } from '../../services/graphicCard.service';
import { AuthContext } from '../../providers/AuthProvider';

const CardDetail = () => {
  const { id } = useParams();
  const [graphCard, setGraphCard] = useState({});

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      const data = await graphicCardService.getById(id);

      setGraphCard(data);
    };

    fetchData();
  }, [id]);

  if (!graphCard?.name) {
    return (
      <>
        <div className={s.container}>
          <Link className={s.link} to={'/'}>
            Back
          </Link>
          <p>Card not found</p>
        </div>
      </>
    );
  }

  const { user } = useContext(AuthContext);

  if (!user)
    return (
      <>
        <div className={s.container}>
          <Link className={s.link} to={'/'}>
            Back
          </Link>
          <p>You are not authorized to view this page</p>
        </div>
      </>
    );

  return (
    <>
      <div className={s.container}>
        <Link className={s.link} to={'/'}>
          Back
        </Link>
        <CardItem card={graphCard} />
      </div>
    </>
  );
};

export default CardDetail;
