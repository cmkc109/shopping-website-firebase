import { Link } from 'react-router-dom';
import './directoryItem.scss';
 

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <div className='directory-item-container'>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <Link  style={{ textDecoration: 'none' }} to={`/shop/${title}`} className='body'>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Link>
    </div>
  );
};

export default DirectoryItem;