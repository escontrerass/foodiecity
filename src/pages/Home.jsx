import React from 'react';
import { Layout } from '../containers/Layout';
import { Main } from '../containers/Main';
import { Carousel } from '../containers/Carousel';
import { sitesList, categoryList } from '../data';
import { Categories } from '../components/Categories';
import { Extras } from '../components/Extras';

export const Home = () => {
  const news = sitesList.slice(sitesList.length - 4);
  const top = sitesList.filter((site) => site.rating >= 4.7);
  const categoryHome = categoryList.slice(1, 7);

  return (
    <Layout>
      <Extras />
      <Main>
        <Carousel
          title='Sitios nuevos'
          buttonTitle='Ver más'
          data={news}
          link='/news'
        />
        <Carousel
          title='Sitios populares'
          buttonTitle='Ver más'
          data={top}
          link='/popular'
        />
        <Categories categories={categoryHome} link='/category' />
      </Main>
    </Layout>
  );
};
