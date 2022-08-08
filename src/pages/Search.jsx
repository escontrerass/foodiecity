import React from 'react';
import { Select, Option } from '@material-tailwind/react';
import { Extras } from '../components/Extras';
import { Layout } from '../containers/Layout';
import { Main } from '../containers/Main';
import { categoryList } from '../data';
import { useNavigate } from 'react-router-dom';
import { PrimaryButton } from '../components/PrimaryButton';

export const Search = () => {
  const [searchText, setSearchText] = React.useState('');
  const [select, setSelect] = React.useState(0);
  const navigate = useNavigate();
  const handleSearchText = (text) => setSearchText(text);
  const handleCategory = (idCategory) => setSelect(idCategory);
  const handleSearch = () => navigate(`/results/${select}/${searchText}`);

  return (
    <Layout>
      <Extras />
      <Main>
        <div className='flex flex-col items-center px-5 gap-5 mt-20'>
          <input
            className='w-full border border-blue-gray-300 text-sm rounded-md px-2 py-3'
            type='text'
            placeholder='Buscador'
            onChange={(e) => handleSearchText(e.target.value)}
          />
          <Select
            label='Elige una categoría'
            color='orange'
            onChange={(e) => handleCategory(e)}
          >
            {categoryList &&
              categoryList.map((category) => (
                <Option key={category.id} value={category.id.toString()}>
                  {category.name}
                </Option>
              ))}
          </Select>
          <div className='w-1/2'>
            <PrimaryButton title='Buscar' handle={handleSearch} />
          </div>
        </div>
      </Main>
    </Layout>
  );
};
