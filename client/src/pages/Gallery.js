import React, { useState } from 'react';
import GalleryCard from './GalleryCard';
import ganesh from '../imageData/ganesh';
export default function Gallery() {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleClick = (item) => {
        setSelectedItem(item);
    };

    return (
        <div className="container px-4 py-8 mx-auto">
            <h1 className="mb-8 text-3xl font-bold">Gallery</h1>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {ganesh.map(item => (
                    <GalleryCard
                        key={item.id}
                        imageUrl={item.imageUrl}
                        itemName={item.itemName}
                        price={item.price}
                        description={item.description}
                        onClick={() => handleClick(item)}
                        size={item.size}
                    />
                ))}
            </div>
            {selectedItem && (
                <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-75">
                    <img src={selectedItem.imageUrl} alt={selectedItem.itemName} className="max-w-full max-h-full" />
                    <button onClick={() => setSelectedItem(null)} className="absolute text-white top-4 right-4">Close</button>
                </div>
            )}
        </div>
    );
}