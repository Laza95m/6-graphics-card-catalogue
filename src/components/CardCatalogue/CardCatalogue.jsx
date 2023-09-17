import s from './CardCatalogue.module.css';
import CardItem from './CardItem/CardItem';
import CreateCardForm from './CreateCardForm/CreateCardForm';
import { useContext } from 'react';
import { graphicCardService } from '../../services/graphicCard.service';
import { AuthContext } from '../../providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const CardCatalogue = () => {
  const { data, isLoading } = useQuery(['graphicCards'], () =>
    graphicCardService.getAll()
  );

  const { user, setUser } = useContext(AuthContext);

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <section className={s.section}>
        <h1 className={s.title}>Graphics card catalogue</h1>
        {user ? (
          <>
            <h2>Welcome, {user.name}</h2>
            <button onClick={() => setUser(null)}>Logout</button>
          </>
        ) : (
          <>
            <button
              onClick={() =>
                setUser({
                  name: 'Laziz',
                })
              }
            >
              Login
            </button>
          </>
        )}
        <CreateCardForm />
        <div className={s.container}>
          {data?.length ? (
            data?.map((card) => <CardItem key={card.id} card={card} />)
          ) : (
            <p>There are no graphic Cards</p>
          )}
        </div>
      </section>
    </>
  );
};

export default CardCatalogue;
