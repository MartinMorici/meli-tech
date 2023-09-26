import React from 'react';
import SearchImage from '../../assets/search.png';

const Error = () => {

  return (
    <section className='max-w-5xl w-full mx-auto bg-white mt-[10%] px-4 flex gap-16 py-10 justify-center'>
      <img className='object-contain' src={SearchImage.src} alt='' />
      <div>
        <h2 className='font-bold text-xl'>
          No hay publicaciones que coincidan con la búsqueda
        </h2>
        <ul className='list-inside list-disc'>
          <li>Revisá si escribiste bien la palabra</li>
          <li>Probá con otra palabra</li>
          <li>Navegá por las categorías para encontrar un producto similar</li>
        </ul>
      </div>
    </section>
  );
};

export default Error;
