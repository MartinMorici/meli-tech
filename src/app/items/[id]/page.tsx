import Breadcrumb from '@/app/components/Breadcrumb';
import Error from '@/app/components/Error';
import getBreadcrumb from '@/app/helpers/getBreadcrumb';
import { Product } from '@/app/types';
import React, { Suspense } from 'react';

const page = async ({ params }: { params: { id: string } }) => {
  const resItems = await fetch(`https://api.mercadolibre.com/items/${params.id}`);
  const data = await resItems.json();

  const resDesc = await fetch(`https://api.mercadolibre.com/items/${params.id}/description`);
  const desc = await resDesc.json();

  const breadcrumb = await getBreadcrumb({
    category: data.category_id,
    results: null,
  });

  if (data.error) {
    return <Error />;
  }

  const producto: Product = {
    author: {
      name: 'Martin',
      lastname: 'Morici',
    },
    item: {
      id: data.id,
      title: data.title,
      price: {
        currency: data.currency_id,
        amount: data.price,
        decimals: 0,
      },
      picture: data.pictures[0].secure_url,
      condition: data.condition,
      sold_quantity: data.sold_quantity,
      description: desc.plain_text,
    },
  };

  return (
    <>
      <Breadcrumb categories={breadcrumb} />
      <section className='bg-white max-w-7xl mx-auto p-8'>
        <div className='flex justify-between'>
          <img
            className='max-w-[500px] w-full'
            src={producto.item.picture}
            alt={producto.item.title}
          />

          <div>
            <span>
              {producto.item.condition === 'new' ? 'Nuevo' : 'Usado'} -{' '}
              {producto.item.sold_quantity} vendidos
            </span>
            <h1 className='font-semibold text-xl mt-2'>
              {producto.item.title}
            </h1>
            <h2 className='font-semibold text-4xl mt-4'>
              {Math.trunc(producto.item.price.amount).toLocaleString('es-AR', {
                style: 'currency',
                currency: producto.item.price.currency,
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </h2>
            <button className='bg-blue-600 text-white w-full max-w-[260px] mt-12 py-2 rounded-md'>
              Comprar
            </button>
          </div>
        </div>
        <h3 className='font-semibold text-2xl mt-4'>
          Descripción del producto
        </h3>
        <p className='mt-4'>{producto.item.description}</p>
      </section>
    </>
  );
};

export default page;
