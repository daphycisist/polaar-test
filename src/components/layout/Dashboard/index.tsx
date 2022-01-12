import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { IData } from '../../../types';
import Card from '../../molecules/Card';

const Dashboard: React.FC = (props) => {
  const [fetchedData, setFetchedData] = useState<IData[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const data = await axios.get(
          'https://jsonplaceholder.typicode.com/photos'
        );
        const response = data.data;
        setFetchedData(response);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  console.log({ fetchedData });

  return (
    <>
      {loading ? (
        <div className='loading-screen'>
          <h1>LOADING.......</h1>
        </div>
      ) : (
        <div className="content-grid text-center">
          {fetchedData.map((data) => (
            <Card {...data} />
          ))}
        </div>
      )}
    </>
  );
};

export default Dashboard;
