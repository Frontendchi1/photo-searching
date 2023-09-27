import React from 'react';

function Image({ data }) {
  return (
    <div>
      <a href={data.urls.regular} target="_blank" rel="noreferrer">
        <img
          className='h-72 w-full object-cover rounded-lg shadow-md'
          src={data.urls.small}
          alt={data.alt_description}
        />
      </a>
    </div>
  );
}

export default Image;
