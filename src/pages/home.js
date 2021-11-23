import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { setUrl, getQueryVariable } from '../utils';
import { useSearch } from './hooks/useSearch';
import Result from './components/Result';

import './home.css';

const Home = () => {
  const [searchValue, setSearchValue] = useState('');
  const { data: searchResult, loading, error, setSearchParam } = useSearch();

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };
  const handleSearch = () => {
    setSearchParam(searchValue);
    setUrl(searchValue);
  };
  useEffect(() => {
    const _searchValue = getQueryVariable('searchKey');
    setSearchValue(_searchValue);
    setSearchParam(_searchValue);
  }, []);
  return (
    <div>
      <div className="search-box">
        <TextField
          fullWidth
          size="small"
          value={searchValue}
          type="search"
          variant="outlined"
          onChange={handleChange}
        />
      </div>
      <div className="search-button">
        <Button variant="contained" onClick={handleSearch} size="large">
          搜索
        </Button>
      </div>

      {searchResult ? (
        <Result searchResult={searchResult} loading={loading} />
      ) : error ? (
        <div>暂无数据</div>
      ) : (
        <div>加载中...</div>
      )}
    </div>
  );
};

export default Home;
