import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const ImageBox = styled.div`
  width: 360px;
  height: 360px;
  border: 2px solid black;
`;

export default function App() {
  const [previewImg, setPreviewImg] = useState('');

  console.log(previewImg);

  const handleImageDnd = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const formData = new FormData();
    const file = e.target.files;
    if (!file) return;
    console.log(file);
  };

  const handleImageDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  /*
  const handleImageDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (!e.dataTransfer) return;
    const file = e.dataTransfer.files[0];
    console.log(e.dataTransfer.files);
    const imageUrl = URL.createObjectURL(file);
    setPreviewImg(imageUrl);
  };
  */

  const handleImageDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (!e.dataTransfer) return;

    const file = e.dataTransfer.files[0];
    const formData = new FormData();
    formData.append('image', file, 'avatar');
    console.log(formData);
  };

  const resetImage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setPreviewImg('');
  };

  return (
    <div>
      {previewImg ? (
        <>
          <img
            src={previewImg}
            style={{ width: '360px', height: '360px', position: 'relative' }}
          />
          <button
            onClick={resetImage}
            style={{
              width: '120px',
              height: '80px',
              position: 'absolute',
              top: 0,
              left: 0,
            }}
          ></button>
        </>
      ) : (
        <div
          onDragEnter={handleImageDragEnter}
          onDrop={handleImageDrop}
          style={{
            width: '360px',
            height: '360px',
            border: '2px dashed black',
          }}
        >
          <form>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageDnd}
              style={{ width: '360px', height: '360px' }}
            />
            <input type="submit" />
          </form>
        </div>
      )}
    </div>
  );
}
