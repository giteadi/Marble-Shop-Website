export default function Card({ image, price, size, description }) {
  return (
    <div className="max-w-xs overflow-hidden rounded shadow-lg ">
      <img className="w-full" src={image} alt="Product" />
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">{price}</div>
        <p className="text-base text-gray-700">{description}</p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block px-3 py-1 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">{size}</span>
        <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
          Buy
        </button>
      </div>
    </div>
  );
}
