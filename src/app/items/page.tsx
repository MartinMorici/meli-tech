'use client';
import React, { useEffect, useState } from 'react';
import { SearchResult } from '../types';
import Breadcrumb from '../components/Breadcrumb';
import ProductCard from '../components/ProductCard';
import Error from '../components/Error';

const page = ({ searchParams }: { searchParams: string }) => {
  const [products, setProducts] = useState<SearchResult>();
  const [error, setError] = useState<boolean>(false);
  console.log('mounted');

  const fetchData = async () => {
    const res = await fetch(
      `https://api.mercadolibre.com/sites/MLA/search?q=${searchParams.search}&limit=4`
    );
    const data = await res.json();

    if (data.results.length === 0) {
      setError(true);
      return;
    } else {
      setError(false);
    }

    //categoría mas repetida
    const catArray = data.results.map((res: any) => res.category_id);
    const catCount = catArray.reduce((acc: any, val: any) => {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {});

    const mostFrequentCat = Object.keys(catCount).reduce((a, b) =>
      catCount[a] > catCount[b] ? a : b
    );
    const catRes = await fetch(
      `https://api.mercadolibre.com/categories/${mostFrequentCat}`
    );
    const catData = await catRes.json();
    const breadcrumb = catData.path_from_root.map((cat: any) => cat.name);

    const itemArray = data.results.map((item: any) => {
      return {
        id: item.id,
        title: item.title,
        price: {
          currency: item.currency_id,
          amount: item.price,
          decimals: 0,
        },
        picture: 'http://http2.mlstatic.com/D_' + item.thumbnail_id + '-L.jpg',
        condition: item.condition,
        free_shipping: item.shipping.free_shipping,
      };
    });

    const results = {
      author: {
        name: 'Martín',
        lastname: 'Morici',
      },
      categories: breadcrumb,
      items: itemArray,
    };

    setProducts(results);
  };

  useEffect(() => {
    fetchData();
  }, [searchParams]);

  return (
    <div className='bg-[#ebebeb] min-h-screen flex flex-col'>
      <main className='flex-grow flex justify-center items-center flex-col'>
        {products && (
          <>
            <Breadcrumb categories={products.categories} />
            <section className='max-w-7xl w-full mx-auto bg-white px-4 '>
              {products?.items.map((item) => (
                <ProductCard key={item.id} {...item} />
              ))}
            </section>
          </>
        )}
        {error && <Error />}
      </main>
    </div>
  );
};

export default page;
