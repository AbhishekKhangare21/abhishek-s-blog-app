import React, { useState } from "react";

const Pagination = ({ page, setPage, totalBlogs }) => {
  const selectedPageHandler = (selectedPage) => {
    if (selectedPage >= 1 && selectedPage <= totalBlogs.length / 20)
      setPage(selectedPage);
  };

  return (
    <div className="flex justify-center cursor-pointer pb-16">
      <span
        onClick={() => selectedPageHandler(page - 1)}
        id={page <= 1 ? "pagination__disabled" : ""}
      >
        prev
      </span>
      {[...Array(Math.ceil(totalBlogs.length / 20))].map((_, i) => (
        <span
          onClick={() => selectedPageHandler(i + 1)}
          key={i}
          id={page === i + 1 ? "pagination__selected" : ""}
        >
          {i + 1}
        </span>
      ))}
      <span
        onClick={() => selectedPageHandler(page + 1)}
        id={page >= totalBlogs.length / 20 ? "pagination__disabled" : ""}
      >
        next
      </span>
    </div>
  );
};

export default Pagination;
