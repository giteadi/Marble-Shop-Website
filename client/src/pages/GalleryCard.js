export default function GalleryCard({ imageUrl, itemName, price, description, onClick,size }) {
    return (
        <div className="p-4 transition-transform duration-300 transform bg-gray-200 rounded-lg hover:scale-110" onClick={onClick}>
            <img src={imageUrl} alt={itemName} className="w-full h-auto rounded-lg cursor-pointer" loading="lazy" />
            <div className="mt-2">
                <p className="text-lg font-semibold">{itemName}</p>
                <p className="text-gray-500">{description}</p>
                <p className="text-gray-500">{size}</p>
            </div>
        </div>
    );
}
