'use client';
import Breadcrumb from './components/Breadcrumb';
import { FormEvent, useState } from 'react';
import { SearchResult }  from './types';
import Error from './components/Error';
import  ProductCard  from './components/ProductCard';

export default function Home() {
  // const [products, setProducts] = useState<SearchResult>();
  // const [query, setQuery] = useState<string>('');
  // const [error, setError] = useState<boolean>(false);

  // const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  

  //   const res = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=4`);
  //   const data = await res.json();

  //   if (data.results.length === 0) {
  //     setError(true);
  //     setProducts(undefined);
  //     return;
  //   } else {
  //     setError(false);
  //   }

  //   //categoría mas repetida
  //   const catArray = data.results.map((res: any) => res.category_id);
  //   const catCount = catArray.reduce((acc: any, val: any) => {
  //     acc[val] = (acc[val] || 0) + 1;
  //     return acc;
  //   }, {});

  //   const mostFrequentCat = Object.keys(catCount).reduce((a, b) =>catCount[a] > catCount[b] ? a : b);
  //   const catRes = await fetch(`https://api.mercadolibre.com/categories/${mostFrequentCat}`);
  //   const catData = await catRes.json();
  //   const breadcrumb = catData.path_from_root.map((cat: any) => cat.name);

  //   const itemArray = data.results.map((item: any) => {
  //     return {
  //       id: item.id,
  //       title: item.title,
  //       price: {
  //         currency: item.currency_id,
  //         amount: item.price,
  //         decimals: 0,
  //       },
  //       picture: 'http://http2.mlstatic.com/D_' + item.thumbnail_id + '-L.jpg',
  //       condition: item.condition,
  //       free_shipping: item.shipping.free_shipping,
  //     };
  //   });

  //   const results = {
  //     author: {
  //       name: 'Martín',
  //       lastname: 'Morici',
  //     },
  //     categories: breadcrumb,
  //     items: itemArray,
  //   };

  //   setProducts(results);
  // };

  return <div className=''></div>
}
