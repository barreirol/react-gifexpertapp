
import React, { useState } from 'react';
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Dragon Ball']);

    const onAddCategory = ( newCategory) => {
        // setCategories ( (cat) => cat.concat('Valorant'));
        // setCategories([...categories, 'Valorant']);
        if (categories.includes(newCategory)) return;
        console.log(newCategory);
        setCategories ( [newCategory, ...categories]);
    }
    return (
    <>
    {/* titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory 
          onNewCategory= { (value) => onAddCategory(value) }
        />

        {/* Listado de Gifs */}
        
        { categories.map( category => (
                <GifGrid 
                    key={ category } 
                    category={ category }
                />
            ))
        }
        
            
         
            {/* Gif Item */}
    </>
  )
}
