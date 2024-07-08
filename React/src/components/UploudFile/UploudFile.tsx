import React, { FC, useState } from 'react';
import './UploudFile.scss';
import { FileUploader } from "react-drag-drop-files";
import { RingLoader } from 'react-spinners';
import { FaCamera } from "react-icons/fa";


interface UploudFileProps {
  reset:()=>void
  onClassification: (result: string, photo: File, classStyle: string) => void;
}

const UploudFile: FC<UploudFileProps> = ({ onClassification ,reset}) => {
  const fileTypes = ["JPG", "PNG", "GIF"];
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [classificationResult, setClassificationResult] = useState<string>('');

  const handleChange = (file: any) => {
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      console.error('No file selected');
      return;
    }

    const formData = new FormData();
    formData.append('photo', selectedFile);

    setLoading(true);

    try {
      const response = await fetch('http://127.0.0.1:5000/upload', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();
      console.log('Classification result:', data.message);
      switch (data.message) {
        case 'cardboard':
          let cardboardResule = 'Blue garbage';
          let BlueResulte = 'blue';
          setClassificationResult(cardboardResule);
          onClassification(cardboardResule, selectedFile, BlueResulte);
          return;
        case 'glass':
          let glassResule = 'Purple garbage';
          let PurpleResulte = 'purple';
          setClassificationResult(glassResule);
          onClassification(glassResule, selectedFile, PurpleResulte);
          return;
        case 'metal':
          let metalResule = 'Gray garbage';
          let grayResulte = 'gray';
          setClassificationResult(metalResule);
          onClassification(metalResule, selectedFile, grayResulte);
          return;
        case 'paper':
          let paperResule = 'Blue garbage';
          let blueResulte = 'blue';
          setClassificationResult(paperResule);
          onClassification(paperResule, selectedFile, blueResulte);
          return;
        case 'plastic':
          let plasticResule = 'Orange garbage';
          let orangeResulte = 'orange';
          setClassificationResult(plasticResule);
          onClassification(plasticResule, selectedFile, orangeResulte);
          return;
        case 'trash':
          let trashResule = 'Green garbage';
          let greenResulte = 'green';
          setClassificationResult(trashResule);
          onClassification(trashResule, selectedFile, greenResulte);
          return;
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
      setSelectedFile(null); // Reset selectedFile state
    }
  }

  return (
    <div className="UploudFile col-sm-3 m-auto text-center">
      <h1>Choose photo</h1>
      <div className='col-sm-6 m-auto text-center'>
        <button className="camera-button" onClick={() => console.log("Camera clicked")}><FaCamera /></button>
      </div>
      <br></br>

      <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
      <button className="reset" onClick={reset}>Reset</button>

      {selectedFile && (
        <div>
          <img className="uploaded-image" width={150} height={150} src={URL.createObjectURL(selectedFile)} alt="Selected" />
          {loading && (
            <div className='loader col-sm-6 m-auto text-center'>
              <RingLoader color="#4CAF50" />
            </div>
          )}
          {!loading && (
            <div>
              <button className="upload-button" onClick={handleUpload}>Upload</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default UploudFile;
