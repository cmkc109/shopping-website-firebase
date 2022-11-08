import React, {useContext} from 'react';
import { CategoriesContext } from '../../context/categories.context';
import ProductCard from '../../components/product-card/ProductCard';
import './categoriesPreview.scss'
import { Link } from 'react-router-dom';

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext) 

  return (
    <div className='category-preview-container'> 
    { Object.keys(categoriesMap).map(title =>  
      <div>
        <Link className='title' to={title}>{title.toUpperCase()}</Link>
        <div className="products-container">
          {categoriesMap[title].map( (product) => (
           
            <ProductCard key={product.id} product={product} />
             
          ))}
       </div>
      </div>
    )}
    

    </div> 
  )
}

export default CategoriesPreview