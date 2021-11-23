import React from 'react';
import Pagination from '@material-ui/core/Pagination';
import { handleBTC, handleTime } from '../../utils';
import usePagination from '../../hooks/usePagination';

import './Transactions.css';

const Transactions = ({ data }) => {
  const { currentList, pages, currentPage, setCurrentPage } = usePagination({ data });
  const handleOutFee = (out) => {
    let outFee = 0;
    out.map((i) => {
      outFee = outFee + i.value;
    });
    return handleBTC(outFee);
  };
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };
  return (
    <div className="transactions">
      <h2>Block Transactions</h2>
      {currentList?.map((item) => {
        return (
          <div key={item.hash}>
            <div className="list-fee">
              <div className="list-col-one">Fee</div>
              <div className="list-col-two text-ellipsis">{handleBTC(item.fee)}</div>
              <div className="list-col-three">{handleOutFee(item.out)}</div>
            </div>
            <div className="list-fee">
              <div className="list-col-one">Hash</div>
              <div className="list-col-two text-ellipsis">
                <span className="list-hash">{item.hash}</span>
                <div>
                  {item.inputs.map((i) => {
                    return (
                      <span className="list-out-item" key={i.index}>
                        <span className="list-out-item-addr text-ellipsis">{i.prev_out?.addr}</span>
                        <span className="list-out-item-val text-ellipsis">
                          {i.prev_out ? handleBTC(i.prev_out.value) : 'COINBASE (Newly generated coins)'}
                        </span>
                        <br />
                      </span>
                    );
                  })}
                </div>
              </div>
              <div className="list-col-three">
                <span>{handleTime(item.time)}</span>
                <div>
                  {item.out.map((i) => {
                    return (
                      <span className="list-out-item" key={i.n}>
                        <span className="list-out-item-addr text-ellipsis">{i.addr ? i.addr : 'OP_RETURN'}</span>
                        <span className="list-out-item-val">{handleBTC(i.value)}</span>
                        <br />
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <Pagination count={pages} variant="outlined" shape="rounded" page={currentPage} onChange={handlePageChange} />
    </div>
  );
};

export default Transactions;
