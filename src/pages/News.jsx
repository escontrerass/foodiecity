import React from 'react';
import { Select, Option } from '@material-tailwind/react';
import { Layout } from '../containers/Layout';
import { Main } from '../containers/Main';
import { sitesList, categoryList } from '../data';
import { SiteCarousel } from '../components/SiteCarousel';
import { PrimaryButton } from '../components/PrimaryButton';
import { Extras } from '../components/Extras';

export const News = () => {
  const sitesNews = sitesList.slice(0, 3);

  return (
    <Layout>
      <Extras />
      <Main>
        <div className='flex justify-between items-center'>
          <h3 className='font-bebas text-xl'>Sitios nuevos</h3>
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
            sitesNews.map((site) => <SiteCarousel {...site} more={true} />)}
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
