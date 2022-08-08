import React from 'react';
import { Select, Option } from '@material-tailwind/react';
import { Layout } from '../containers/Layout';
import { Main } from '../containers/Main';
import { sitesList, categoryList } from '../data';
import { SiteCarousel } from '../components/SiteCarousel';
import { PrimaryButton } from '../components/PrimaryButton';
import { Extras } from '../components/Extras';
import { useNavigate, useLocation } from 'react-router-dom';

export const PopularSites = () => {
  const sitesPopular = sitesList.filter((site) => site.rating >= 4.7);
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.split('/');
  const handlePopular = (idCategory) => navigate(`/popular/${idCategory}`);
  const sitesFilter = sitesPopular.filter(
    (site) =>
      site.category === parseInt(path[2]) ||
      0 === parseInt(path[2]) ||
      2 === path.length
  );

  return (
    <Layout>
      <Extras />
      <Main>
        <div className='flex justify-between items-center'>
          <h3 className='font-bebas text-xl'>Sitios populares</h3>
          <div className='w-4/6'>
            <Select
              label='Elige una categoría'
              color='orange'
              onChange={(e) => handlePopular(e)}
            >
              {categoryList &&
                categoryList.map((category) => (
                  <Option key={category.id} value={category.id.toString()}>
                    {category.name}
                  </Option>
                ))}
            </Select>
          </div>
        </div>
        <div className='flex flex-col gap-5 w-full tablet:items-center'>
          {sitesFilter &&
            sitesFilter.map((site) => (
              <SiteCarousel key={site.id} {...site} more={true} />
            ))}
        </div>
        {sitesFilter.length > 3 && (
          <div className='w-3/6 self-center'>
            <PrimaryButton title='Ver más' />
          </div>
        )}
      </Main>
    </Layout>
  );
};
