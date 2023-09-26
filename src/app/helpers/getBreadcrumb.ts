type Props = {
  category: string | null;
  results: any[] | null;
};

const getBreadcrumb = async ({ category, results }: Props) => {
  let cat = category;
  
  if (!cat && !results) {
    return;
  }

  if (!cat) {
    const catArray = results!.map((res: any) => res.category_id);
    const catCount = catArray.reduce((acc: any, val: any) => {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {});

    const mostFrequentCat = Object.keys(catCount).reduce((a, b) =>
      catCount[a] > catCount[b] ? a : b
    );

    cat = mostFrequentCat;
  }

  const catRes = await fetch(`https://api.mercadolibre.com/categories/${cat}`);
  const catData = await catRes.json();
  const breadcrumb = catData.path_from_root.map((cat: any) => cat.name);

  return breadcrumb;
};

export default getBreadcrumb;
