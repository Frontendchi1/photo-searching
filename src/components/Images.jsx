import React, { useContext } from 'react';
import Image from './Image';
import Skeleton from './Skeleton'; // Corrected the spelling of 'Skeleton'
// Make sure to provide the correct path to your context
import { ImageContext } from '../App';

function Images() {
  const { response, isLoading, searchImage } = useContext(ImageContext);

  return (
    <>
      <h1 className='text-center mt-6  text-2xl'>Results for {searchImage || "cat"}</h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10 max-w-7xl mx-auto px-4'>
        {isLoading ? (
          <Skeleton item={10} />
        ) : (
          response.map((data, key) => <Image key={key} data={data} />)
        )}
      </div>
    </>
  );
}

export default Images;
