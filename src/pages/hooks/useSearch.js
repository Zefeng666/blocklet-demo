import React, { useState, useEffect } from 'react';
import apiClient from '../../utils/api-client';

export const useSearch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  useEffect(() => {
    // 当 id 不存在，直接返回，不发送请求
    if (!searchValue) return;
    setLoading(true);
    setData(null);
    setError(null);
    apiClient
      .get(`/rawblock/${searchValue}`)
      .then((res) => {
        // 请求成功时设置返回数据到状态
        setLoading(false);
        setData(res.data);
        console.log(res);
      })
      .catch((err) => {
        // 请求失败时设置错误状态
        setLoading(false);
        setError(err);
        console.log(err);
      });
  }, [searchValue]);
  return {
    loading,
    error,
    data,
    setSearchParam: setSearchValue,
  };
};
