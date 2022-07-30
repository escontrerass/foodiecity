import React from 'react';
import { Layout } from '../containers/Layout';
import { Main } from '../containers/Main';
import { menuContext } from '../context/menuContext';
import { AppMenu } from './AppMenu';
import { Login } from '../components/Login';
import { Carousel } from '../containers/Carousel';
import { sitesList, categoryList } from '../data';
import { Categories } from '../components/Categories';
export const Home = () => {
  const { menu, login } = React.useContext(menuContext);
  const news = sitesList.slice(sitesList.length - 4);
  const top = sitesList.filter((site) => site.rating >= 4.7);
  const categoryHome = categoryList.slice(0, 6);
  return (
    <Layout>
      {menu && <AppMenu />}
      {login && <Login />}
      <Main>
        <Carousel title='Sitios nuevos' data={news} link='news' />
        <Carousel title='Sitios populares' data={top} link='popular' />
        <Categories categories={categoryHome} />
      </Main>
    </Layout>
  );
};
