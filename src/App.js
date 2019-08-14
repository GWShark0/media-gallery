import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Modal from './components/Modal';
import Search from './components/Search';
import Image from './components/Image';

import './App.scss';

import animals from './demo.json';

function App() {
  const [size, setSize] = useState(150);
  const [color, setColor] = useState(['#ffffff']);
  const [images, setImages] = useState(animals);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const handleSelectImage = (image) => {
    setImages(images.concat(image))
  };

  const handleColorChange = (color) => {
    setColor(color);
  };

  const handleSizeChange = (size) => {
    setSize(size);
  }

  return (
    <div className="app">
      <Helmet bodyAttributes={{ style: `background-color: ${color}` }}/>
      <div className="controls">
        <div>
          <button onClick={openModal}>
            {'Add photos'}
          </button>
        </div>
        <div>
          <input
            type="color"
            onChange={event => handleColorChange(event.target.value)}
            value={color}
          />
        </div>
        <div>
          <input
            type="range"
            min={150}
            max={500}
            value={size}
            onChange={event => handleSizeChange(event.target.valueAsNumber)}
          />
        </div>
      </div>
      <div>
        {images.map((image) => {
          const {
            id,
            width: nativeWidth,
            height: nativeHeight,
            urls,
            ...rest
          } = image;
          const { small: src } = urls;
          return (
            <Image
              width={size}
              height={size}
              nativeWidth={nativeWidth}
              nativeHeight={nativeHeight}
              src={src}
              key={id}
              {...rest}
            />
          );
        })}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <Search
          onSelectImage={handleSelectImage}
        />
      </Modal>
    </div>
  );
}

export default App;
