import React from 'react';
import { Item } from '../types';
import Link from 'next/link';

export function ProductCard(item: Item) {
  return (
    <Link href={`/items/${item.id}`}>
      <article className='flex border-b py-4'>
        <img
          src={item.picture}
          className='max-w-[226px] w-full'
          alt={item.title}
          width='226'
          height='226'
          style={{ backgroundColor: '#f3f3f3' }}
        />
        <div className='mt-4 ml-4'>
          <div className='flex items-center'>
            <p className='font-bold text-xl'>
              {Math.trunc(item.price.amount).toLocaleString('es-AR', {
                style: 'currency',
                currency: item.price.currency,
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </p>
            {item.free_shipping && (
              <svg
                className='w-7 h-7 ml-2 p-1 bg-green-500 rounded-full'
                xmlns='http://www.w3.org/2000/svg'
                data-name='Layer 2'
                viewBox='0 0 35 35'
                id='shipping'
              >
                <path d='M25.24 25.31H13.3a1.25 1.25 0 0 1 0-2.5H25.24a1.25 1.25 0 0 1 0 2.5zM32.12 25.31h-.3a1.25 1.25 0 0 1 0-2.5h.3a.62.62 0 0 0 .63-.62V17.9a.63.63 0 0 0-.48-.61H24.9a3.13 3.13 0 0 1-3.13-3.12V7.47a.61.61 0 0 0-.62-.62H6.42a1.25 1.25 0 0 1 0-2.5H21.15a3.12 3.12 0 0 1 3.12 3.12v6.68a.62.62 0 0 0 .63.62h7.22a3.82 3.82 0 0 1 .68.07l.22.07a3.1 3.1 0 0 1 2.23 3v4.29A3.13 3.13 0 0 1 32.12 25.31z'></path>
                <path d='M32.55 17.33a1.24 1.24 0 0 1-1.17-.83l-2-5.56a.6.6 0 0 0-.47-.25H23a1.25 1.25 0 0 1 0-2.5h5.91a3.08 3.08 0 0 1 2.7 1.62 1.42 1.42 0 0 1 .08.18l2 5.67a1.26 1.26 0 0 1-.76 1.6A1.54 1.54 0 0 1 32.55 17.33zM28.53 30.65a4.55 4.55 0 1 1 4.55-4.55A4.55 4.55 0 0 1 28.53 30.65zm0-6.6a2.05 2.05 0 1 0 2 2.05A2.05 2.05 0 0 0 28.53 24.05zM10 30.65a4.55 4.55 0 1 1 4.55-4.55A4.55 4.55 0 0 1 10 30.65zm0-6.6a2.05 2.05 0 1 0 2.05 2.05A2.05 2.05 0 0 0 10 24.05z'></path>
                <path d='M23 25.31a1.24 1.24 0 0 1-1.25-1.25V13.13a1.25 1.25 0 1 1 2.5 0V24.06A1.24 1.24 0 0 1 23 25.31zM10.19 13.17H2a1.25 1.25 0 0 1 0-2.5h8.19a1.25 1.25 0 0 1 0 2.5zM11.73 18.75H7.45a1.25 1.25 0 1 1 0-2.5h4.28a1.25 1.25 0 0 1 0 2.5z'></path>
              </svg>
            )}
          </div>
          <p className='mt-2 text-lg'>{item.title}</p>
        </div>
      </article>
    </Link>
  );
}

export default ProductCard;
