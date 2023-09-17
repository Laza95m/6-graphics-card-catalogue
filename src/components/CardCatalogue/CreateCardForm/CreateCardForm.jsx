import { useMutation, useQueryClient } from '@tanstack/react-query';
import s from './CreateCardForm.module.css';
import { useForm } from 'react-hook-form';
import { graphicCardService } from '../../../services/graphicCard.service';

const CreateCardForm = () => {
  const { register, reset, handleSubmit } = useForm({
    mode: 'onChange',
  });

  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    ['create graphic card'],
    (data) => graphicCardService.create(data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('graphicCards');
        reset();
      },
    }
  );

  const createCard = (data) => {
    mutate(data);
  };

  return (
    <>
      <form className={s.form} onSubmit={handleSubmit(createCard)}>
        <input
          {...register('name')}
          className={s.inp}
          placeholder="Name"
          required
        />
        <input
          {...register('price')}
          className={s.inp}
          placeholder="Price"
          required
        />
        <input
          {...register('img')}
          className={s.inp}
          placeholder="Img"
          required
        />
        <button className={s.btn}>Create card</button>
      </form>
    </>
  );
};

export default CreateCardForm;
