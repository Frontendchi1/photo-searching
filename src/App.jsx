import React, { createContext, useState } from 'react';
import Jumbotron from './components/Jumbutron';
import SearchField from './components/SearchField';
import Images from './components/Images';
import useAxios from './components/hooks/useAxios';


const REACT_APP_ACCESS_KEY='4zvQePIL-f2HZxFocuUArEnnP6jXiXrP46PwULRkKZo'
export const ImageContext = createContext();

function App() {
   const [searchImage, setSearchImage] = useState("");
  const { response, isLoading, error, fetchData } = useAxios(
    `search/photos?page=1&query=${searchImage}&client_id=${REACT_APP_ACCESS_KEY}`
  );
 
  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage
  };

  return (
    <ImageContext.Provider value={value} >
      
      <Jumbotron>
        <SearchField />
      </Jumbotron>
      <Images />
    </ImageContext.Provider>
  );
}

export default App;
