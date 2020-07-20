import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectData } from '../actions';
import axios from '../utils/axios';

const DataFetch = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.data);
  const [loaded, setIsLoaded] = useState(true);

  const fetchData = () => {
    setIsLoaded(false);
    axios.get('/comments')
    .then(res => {
      setIsLoaded(true);
      dispatch(selectData(res.data))
    })
    .catch(err => {
      setIsLoaded(true);
      dispatch(selectData([]))
    });
  }; 

  return (
    <div className="data-fetch-container">
      <div className="data-container">
        {data.map((item) => {
          return (
            <div className="data-item">
              {`${item.id}: ${item.email}`}
            </div>
          )
        })}
      </div>
      <button onClick={() => fetchData()}>Pull Data</button>
    </div>
  )
}

export default DataFetch;
