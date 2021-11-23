import React from 'react';
import { handleTime } from '../../utils';
import Transactions from './Transactions';

import './Result.css';

const Result = ({ searchResult, loading }) => {
  const { block_index, hash, time, height, size, weight, tx } = searchResult;
  return (
    <div>
      {!loading ? (
        <div className="result">
          <h2>Block&nbsp;{block_index}</h2>
          <div>
            <p className="info-list-item">
              <b className="info-list-item-title">Hash</b>
              <span className="text-ellipsis">{hash}</span>
            </p>
            <p className="info-list-item">
              <b className="info-list-item-title">Time</b>
              <span>{handleTime(time)}</span>
            </p>
            <p className="info-list-item">
              <b className="info-list-item-title">Height</b>
              <span>{height}</span>
            </p>
            <p className="info-list-item">
              <b className="info-list-item-title">Size</b>
              <span>{size}</span>
            </p>
            <p className="info-list-item">
              <b className="info-list-item-title">Weight</b>
              <span>{weight}</span>
            </p>
          </div>
          <Transactions data={tx} />
        </div>
      ) : (
        <div>加载中...</div>
      )}
    </div>
  );
};

export default Result;
