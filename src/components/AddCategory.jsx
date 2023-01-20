import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setInputValue] = useState('');

  // Cuando existe un "on" antes del nombre del método, significa que está emitiendo algo.
  const onInputChange = (event) => {
    setInputValue( event.target.value );
  }

  const onSubmit = (event) => {
    event.preventDefault();
    const inputValueTrim = inputValue.trim();
    if ( inputValueTrim.length <= 1) return;

    //setCategories( categories => [ ...categories, inputValue ] );
    onNewCategory( inputValueTrim );
    setInputValue('');
  }
 
  return (
    <form onSubmit={ onSubmit }> {/* === <form onSubmit={ (event) => onSubmit(event) }>*/}
        <input 
            type="text"
            placeholder="Buscar GIFTS"
            value={ inputValue }
            onChange={ onInputChange }
        />
    </form>
  )
}
