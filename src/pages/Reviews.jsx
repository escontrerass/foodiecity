import React from 'react';
import { menuContext } from '../context/menuContext';
import { Layout } from '../containers/Layout';
import { Main } from '../containers/Main';
import { Extras } from '../components/Extras';
import { Section } from '../containers/Section';
import { Review } from '../components/Review';
import { SecondaryButton } from '../components/SecondaryButton';
import { useNavigate } from 'react-router-dom';
import { AddReview } from '../components/AddReview';

export const Reviews = () => {
  const { selected } = React.useContext(menuContext);
  const [modal, setModal] = React.useState(false);
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);
  const handleModal = () => setModal(true);

  return (
    <Layout>
      <Extras />
      {modal && <AddReview setModal={setModal} />}
      <Main>
        <div className='flex justify-between items-center'>
          <h2 className='font-bebas text-2xl'>{selected.name}</h2>
          <div className='w-2/6'>
            <SecondaryButton title='Volver' handle={handleBack} />
          </div>
        </div>
        <Section
          title='Reseñas'
          buttonTitle='Agregar nueva'
          handle={handleModal}
        >
          <div className='flex flex-col gap-5'>
            {selected.reviews.map((review) => (
              <Review key={review.id} review={review} />
            ))}
          </div>
        </Section>
      </Main>
    </Layout>
  );
};
