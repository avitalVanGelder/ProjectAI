import React, { FC } from 'react';
import './Image.scss';
import BlueGarbage from '../../garbageImage/blue.png';
import GreenGarbage from '../../garbageImage/green.png';
import GrayGarbage from '../../garbageImage/grey.png';
import OrangeGarbage from '../../garbageImage/orange.jpg';
import PurpleGarbage from '../../garbageImage/purple.jpg';

interface ImageProps {
  classifiedResult: string | null; // Add a prop for the currently classified result
}

const Image: FC<ImageProps> = ({ classifiedResult }) => {
  const arrGarbage = [
    { image: OrangeGarbage, result: 'orange' },
    { image: GreenGarbage, result: 'green' },
    { image: BlueGarbage, result: 'blue' },
    { image: PurpleGarbage, result: 'purple' },
    { image: GrayGarbage, result: 'gray' },
  ];

  return (
    <div className='image-container'>
      {arrGarbage.map(({ image, result }) => (
        <div
          key={result}
          className={`garbage-image`}
        >
          <img src={image} alt={`Garbage Image ${result}`} />
        </div>
      ))}
    </div>
  );
};

export default Image;
