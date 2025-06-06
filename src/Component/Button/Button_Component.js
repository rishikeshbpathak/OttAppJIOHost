import React from 'react';

export default function Button_Component({ ActionUrl, Title, BtnType }) {
  return (
    <div className="flex space-x-3 rounded-lg overflow-hidden">
      <a href={`/watch/${ActionUrl}`} className="block hover:scale-103 transition-transform duration-300">
        <button
          aria-label="Watch Now"
          className={
            BtnType === 'gradient'
              ? 'items-center cursor-pointer space-x-3 bg-gradient-to-r from-[#007AFF] to-[#D4145A] px-24 py-3 rounded-lg font-bold overflow-hidden text-ellipsis whitespace-nowrap'
              : 'items-center cursor-pointer space-x-3 bg-gray-500 px-16 py-3 ml-2 rounded-lg font-bold hover:scale-100 transition-transform duration-300 overflow-hidden text-ellipsis whitespace-nowrap'
          }
        >
          <i className="fas fa-play"></i>
          <span>{Title}</span>
        </button>
      </a>
      <button
  aria-label="Add to WatchList"
  className="flex items-center space-x-2 bg-gray-600 text-white px-3 py-3 border border-gray-500 rounded-lg font-bold hover:bg-gray-500 transition duration-300"
>
  <i className="fas fa-plus"></i>
</button>

    </div>
  );
}