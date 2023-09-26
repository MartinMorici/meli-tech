import React from 'react';
import { Item, Products } from '../types';
import Breadcrumb from '../components/Breadcrumb';
import ProductCard from '../components/ProductCard';
import Error from '../components/Error';
import getBreadcrumb from '../helpers/getBreadcrumb';

const page = async ({ searchParams }: { searchParams: string }) => {
  const res = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${searchParams.search}&limit=4`);
  const data = await res.json();
  
  if (data.results.length === 0) {
    return <Error />;
  }

  const breadcrumb = await getBreadcrumb({category: null, results: data.results });
  
  const itemArray = data.results.map((item: Item) => {
    return {
      id: item.id,
      title: item.title,
      price: {
        currency: item.currency_id,
        amount: item.price,
        decimals: 0,
      },
      picture: 'http://http2.mlstatic.com/D_' + item.thumbnail_id + '-L.jpg',
      free_shipping: item.free_shipping,
    };
  });

  const results: Products = {
    author: {
      name: 'Martín',
      lastname: 'Morici',
    },
    categories: breadcrumb,
    items: itemArray,
  };

  return (
    <section className='bg-[#ebebeb] min-h-screen flex flex-col'>
      <div className='flex-grow flex flex-col'>
        {results && (
          <>
            <Breadcrumb categories={results.categories} />
            <section className='max-w-7xl w-full mx-auto bg-white px-4 '>
              {results?.items.map((item) => (
                <ProductCard key={item.id} {...item} />
              ))}
            </section>
          </>
        )}
      </div>
    </section>
  );
};

export default page;
