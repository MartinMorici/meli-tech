import React from 'react';

interface Props {
  categories: string[];
}

export function Breadcrumb({ categories }: Props) {
  
  return (
    <aside className='max-w-7xl w-full mx-auto text-sm py-4'>
      {categories.map((cat, index) => (
        <span className='text-[rgb(102_102_102)]' key={cat}>
          {cat}
          <span className='mx-1'>
            {index !== categories.length - 1 ? ' > ' : ''}
          </span>
        </span>
      ))}
    </aside>
  );
}

export default Breadcrumb;
