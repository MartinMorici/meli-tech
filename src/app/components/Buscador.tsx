import React from 'react';

const Buscador = () => {
  return (
    <nav className='bg-[#fff159] w-full p-4 flex gap-8 justify-center items-center'>
      <svg
        className='w-11 text-blue-500'
        aria-hidden='true'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 20 20'
      >
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M6 6h8M6 6v8m0-8V3.5A2.5 2.5 0 1 0 3.5 6H6Zm8 0v8m0-8h2.5A2.5 2.5 0 1 0 14 3.5V6Zm0 8H6m8 0h2.5a2.5 2.5 0 1 1-2.5 2.5V14Zm-8 0H3.5A2.5 2.5 0 1 0 6 16.5V14Z'
        />
      </svg>
      <form
        className='justify-center flex-grow flex max-w-5xl items-center '
        action='/items'
      >
        <input
          name='search'
          className='py-2 px-4 w-full text-black outline-none border-none'
          type='text'
          placeholder='Nunca dejes de buscar'
        />
        <svg
          className='text-black w-9 px-2'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 20 20'
        >
          <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
          />
        </svg>
      </form>
    </nav>
  );
};

export default Buscador;
