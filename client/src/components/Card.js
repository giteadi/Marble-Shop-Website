export default function Card({ image, description }) {
  return (
    <div className="max-w-xs overflow-hidden rounded-lg shadow-lg">
      <div className="transition-transform duration-300 transform hover:scale-110">
        <img className="w-full" src={image} alt="Product" />
        <div className="flex flex-wrap px-4 py-2 text-gray-800 bg-white">
          <p className="font-bold text-md">{description}</p>
          <div className="font-bold text-md">Contact: 7974507514</div>
        </div>
      </div>
    </div>
  );
}
