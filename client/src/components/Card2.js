// Card2.jsx
export default function Card2({ url, description }) {
    return (
      <div className="max-w-sm overflow-hidden rounded shadow-lg">
        <img className="w-full" src={url} alt="Sankh" />
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold">Peacock Sankh</div>
          <p className="text-base text-gray-700">{description}</p>
        </div>
      </div>
    );
  }
  