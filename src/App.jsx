
import { useEffect, useState } from 'react';
import './App.css';

function UseEffect() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log("Use Effect Chal Gaya");
    getProducts();
  }, []);

  const getProducts = () => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((res) => {
        console.log("res->", res);
        setProducts(res.products); // Assuming the API response has a 'products' property
      });
  };

  const searched = products?.filter((data) =>
    data.title.toLowerCase().indexOf(search.toLowerCase()) !== -1
  );

  console.log("Component chal gaya", search);

  return (
    <>
      <div>
        <h1 class="text-4xl font-bold text-amber-300 mb-4">Learning Use Effect</h1>
        <input
          placeholder='Search'
          type='search'
          className='border w-3/4 p-4 rounded-full'
          onChange={(e) => setSearch(e.target.value)}
        />
        {searched.map((data) => (
          <h1 className='text-left p-1 my-3 h-1/8 bg-red-500 rounded-bl-full overflow-hidden font-bold'  key={data.id}>
            {data.id + ") "} {data.title}
          </h1>
        ))}
      </div>
    </>
  );
}

export default UseEffect;