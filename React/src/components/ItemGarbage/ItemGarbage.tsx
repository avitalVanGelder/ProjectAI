import React, { FC } from 'react';
import './ItemGarbage.scss';

interface ItemGarbageProps {
  photo: File;
  result: string;
  classStyle: string;
}

const ItemGarbage: FC<ItemGarbageProps> = ({ photo, result, classStyle }) => {
  return (
    <div className="ItemGarbage">
      <div dir='ltr'>
        <p><strong>Classification Result:</strong></p>
        <p className="classification-result" style={{ color: classStyle, fontWeight: 'bold' }}>{result}</p>
        <span className="badge badge-warning">{classStyle}</span>
        <img src={URL.createObjectURL(photo)} alt="Classified" className="photo" />
      </div>
    </div>
  );
}

export default ItemGarbage;
