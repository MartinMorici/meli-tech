import React from 'react';
import SearchImage from '../../assets/search.png';
import Image from 'next/image';

const Error = () => {
  return (
    <section className='flex gap-16 px-36 py-10  justify-center  bg-white mx-auto'>
      <Image src={SearchImage} alt='' />
      <div>
        <h2 className='font-bold text-xl'>
          No hay publicaciones que coincidan con la búsqueda
        </h2>
        <ul className='list-inside list-disc'>
          <li>Revisá si escribiste bienevis la palabra</li>
          <li>Probá con otra palabra</li>
          <li>Navegá por las categorías para encontrar un producto similar</li>
        </ul>
      </div>
    </section>
  );
};

export default Error;
