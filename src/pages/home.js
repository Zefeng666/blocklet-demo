import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

import apiClient from '../utils/api-client';

import './home.css';

const Home = () => {
  console.log(apiClient, 'apiClient');
  const [searchValue, setSearchValue] = useState('');
  useEffect(() => {
    apiClient
      .get('/rawblock/00000000000000000007878ec04bb2b2e12317804810f4c26033585b3f81ffaa')
      .then((res) => {
        // 请求成功时设置返回数据到状态
        // setLoading(false);
        // setData(res.data);
        console.log(res);
      })
      .catch((err) => {
        // 请求失败时设置错误状态
        // setLoading(false);
        // setError(err);
        console.log(err);
      });
  }, []);
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };
  const handleSearch = () => {
    console.log(searchValue, 'searchValue');
  };
  return (
    <header className="app-header">
      <Input value={searchValue} label="Search field" type="search" variant="outlined" onChange={handleChange} />
      <Button variant="contained" onClick={handleSearch}>
        搜索
      </Button>
    </header>
  );
};

export default Home;
