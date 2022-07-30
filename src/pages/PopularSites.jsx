import React from 'react';
import { Select, Option } from '@material-tailwind/react';
import { Layout } from '../containers/Layout';
import { Main } from '../containers/Main';
import { menuContext } from '../context/menuContext';
import { AppMenu } from './AppMenu';
import { Login } from '../components/Login';
import { sitesList, categoryList } from '../data';
import { SiteCarousel } from '../components/SiteCarousel';
import { PrimaryButton } from '../components/PrimaryButton';

export const PopularSites = () => {
  const { menu, login } = React.useContext(menuContext);
  const sitesPopular = sitesList.filter((site) => site.rating >= 4.7);
  return (
    <Layout>
      {menu && <AppMenu />}
      {login && <Login />}
      <Main>
        <div className='flex justify-between items-center'>
          <h3 className='font-bebas text-xl'>Sitios populares</h3>
          <div className='w-4/6'>
            <Select label='Elige una categoria' color='orange'>
              {categoryList &&
                categoryList.map((category) => (
                  <Option value={category.id}>{category.name}</Option>
                ))}
            </Select>
          </div>
        </div>
        <div className='flex flex-col gap-5'>
          {sitesList &&
            sitesPopular.map((site) => (
              <SiteCarousel key={site.id} {...site} more={true} />
            ))}
        </div>
        {sitesList.length > 3 && (
          <div className='w-3/6 self-center'>
            <PrimaryButton title='Ver mas' />
          </div>
        )}
      </Main>
    </Layout>
  );
};
