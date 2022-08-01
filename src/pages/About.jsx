import React from 'react';
import { Layout } from '../containers/Layout';
import { Main } from '../containers/Main';
import { Extras } from '../components/Extras';

export const About = () => {
  return (
    <Layout>
      <Extras />
      <Main>
        <div className='flex flex-col gap-3 mt-10 px-3'>
          <h4 className='font-bebas text-xl mb-2'>Quienes somos</h4>
          <p className='text-s'>
            Somos personas amantes de la comida y la tecnología. Juntando esto
            nació Foodie City, buscando las mejores formas de clasificar, buscar
            y ubicar deliciosos restaurantes de nuestra ciudad de diferentes
            tipos. Nuestro sitio web está diseñado para ayudar a cualquier
            persona a encontrar un buen sitio y una excelente comida.
          </p>
          <p className='text-s'>
            Ofreciendo una lista de restaurantes de diferentes tipos donde
            tendrás una sección de comentarios para que los clientes escriban su
            experiencia, observando además los menú, información de contacto y
            los diferentes ambientes y áreas donde podrán compartir con
            familiares y amigos.
          </p>
        </div>
      </Main>
    </Layout>
  );
};
