import React from 'react';
import { IData } from '../../types';

// {
//     "albumId": 1,
//     "id": 1,
//     "title": "accusamus beatae ad facilis cum similique qui sunt",
//     "url": "https://via.placeholder.com/600/92c952",
//     "thumbnailUrl": "https://via.placeholder.com/150/92c952"
// }

const Card: React.FC<IData> = ({ albumId, id, thumbnailUrl, title, url }) => {
  return (
    <div>
      <p>{title}</p>
      <img src={url} alt={title} />
    </div>
  );
};

export default Card;
