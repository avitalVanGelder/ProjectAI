import React, { FC, useState } from 'react';
import UploudFile from '../UploudFile/UploudFile';
import ItemGarbage from '../ItemGarbage/ItemGarbage';
import Image from '../Image/Image';

interface ClassifiedPhoto {
  photo: File;
  result: string;
  classStyle: string;
}

const Parent: FC = () => {
  const [classifiedPhotos, setClassifiedPhotos] = useState<ClassifiedPhoto[]>([]);
  const [classifiedResult, setClassifiedResult] = useState<string | null>(null);

  const handleClassification = (result: string, photo: File,classStyle:string) => {
    setClassifiedResult(result);
    const newPhoto: ClassifiedPhoto = { photo, result, classStyle };
    setClassifiedPhotos(prevState => [...prevState, newPhoto]);
  }

  const resetState = () => {
    setClassifiedPhotos([]);
    setClassifiedResult(null);
  }

  return (
    <div dir='rtl' className="Parent " >
      

      <div className="row m-auto">
        <UploudFile reset={resetState} onClassification={handleClassification} />
      </div>

      {classifiedPhotos.length > 0 ? (
        <div className="d-flex justify-content-center">
          {classifiedPhotos.map((classifiedPhoto, index) => (
            <ItemGarbage
              key={index}
              photo={classifiedPhoto.photo}
              result={classifiedPhoto.result}
              classStyle={classifiedPhoto.classStyle}
            />
          ))}
        </div>
      ) : (
        ''
      )}

      <div className="col-sm-12">
        <Image classifiedResult={classifiedResult} />
      </div>
    </div>
  );
}

export default Parent;
