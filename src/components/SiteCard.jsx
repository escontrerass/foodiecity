import React from 'react';

const SiteCard = (props) => {
  const { sitesList } = props;

  return (
    <div className='container border-2 border-rose'>
      {sitesList.map((site) => {
        return (
          <div
            key={site.name}
            className='border-2 border-black mb-4 rounded w-96'
          >
            <a href={site.url} target='_blank'>
              <img src={site.image} alt={site.name} />
            </a>
            <p>{site.name}</p>
            <p>{site.description}</p>
            <p>{site.category}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SiteCard;
