import { X } from "lucide-react";

const SearchItem = ({ isSearchFormVisible, toggleSearchForm, searchQuery, handleSearchInputChange, searchResults }) => {
  return (
    <div
      className={`fixed top-0 right-0 bottom-0 ${
        isSearchFormVisible ? "translate-x-0" : "translate-x-full"
      } w-full max-w-xs md:max-w-md bg-white z-50 transform transition-transform duration-700 ease-in-out shadow-lg`}
    >
      <div className="p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Tìm kiếm</h2>
          <button
            onClick={toggleSearchForm}
            aria-label="Close search form"
            className="hover:text-gray-700 transition-transform transform hover:scale-110 ease-in-out duration-300"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <form className="mt-6 space-y-4">
          <div>
            <input
              type="text"
              id="search"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              placeholder="Tìm kiếm sản phẩm..."
              value={searchQuery}
              onChange={handleSearchInputChange}
            />
          </div>
        </form>
        {searchResults.length > 0 && (
          <div className="mt-6 space-y-4 divide-y divide-gray-200">
            {searchResults.map((result, index) => (
              <div key={index} className="flex items-center justify-between space-x-4 py-4">
                <div className="flex-grow">
                  <h3 className="text-sm font-medium">{result.name}</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-bold text-black">{result.price}</span>
                    {result.oldPrice && (
                      <span className="text-xs line-through text-gray-500">{result.oldPrice}</span>
                    )}
                  </div>
                </div>
                <div className="w-16 h-16 bg-gray-200 rounded-md overflow-hidden flex-shrink-0">
                  <img src={result.img} alt={result.name} className="w-full h-full object-cover" />
                </div>
              </div>
            ))}
            <div className="text-center text-sm font-medium text-blue-600 cursor-pointer hover:underline">
              Xem thêm 14 sản phẩm
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchItem;
