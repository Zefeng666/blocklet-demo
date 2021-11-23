import React, { useState, useEffect } from 'react';

export default ({ data, initCurrentPage = 1, initSize = 10 }) => {
  const [currentPage, setCurrentPage] = useState(initCurrentPage);
  const [size, setSize] = useState(initSize);
  const [currentList, setCurrentList] = useState(null);
  console.log(currentPage, 'currentPage');
  useEffect(() => {
    const start = (currentPage - 1) * size;
    const end = currentPage * size;
    const _data = [...data];
    const list = _data.slice(start, end);
    console.log(list, 'list');
    setCurrentList(list);
  }, [currentPage, size]);

  return {
    currentList,
    currentPage,
    total: data.length,
    pages: Math.ceil(data.length / size),
    setCurrentPage,
    setSize,
  };
};
