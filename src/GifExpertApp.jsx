import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

  const [ categories, setCategories ] = useState([ 'One Punch' ]); // No poder condiciones a los hooks eso es una regla de oro para react

  const onAddCategory = ( newCategory ) => {

    if( categories.includes( newCategory ) ) return;
    setCategories([newCategory, ...categories]);
  }

  return (
    <>
        {/* Título */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory 
          onNewCategory={ event => onAddCategory(event) }
        />

        {/* Listado de items */}
        { 
          categories.map( category => (
              <GifGrid 
              key={ category }
              category={ category } />
            )) 
        }
          {/* Gif Item */}
    </>
  )
}
