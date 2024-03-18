export default function Gallery() {
    return (
        <div className="container px-4 py-8 mx-auto">
            <h1 className="mb-8 text-3xl font-bold">Gallery</h1>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {/* Gallery items */}
                <div className="p-4 bg-gray-200 rounded-lg">
                    <img src="https://via.placeholder.com/150" alt="Placeholder" className="w-full h-auto rounded-lg" />
                    <div className="mt-2">
                        <p className="text-lg font-semibold">Item Name</p>
                        <p className="text-gray-500">Price: $100</p>
                        <p className="text-gray-500">Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                {/* Repeat this for each gallery item */}
            </div>
        </div>
    );
}
