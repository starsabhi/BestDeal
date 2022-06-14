import { useEffect, useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

export default function OrderList() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <>
      <div>
        {loading ? (
          <div className="loadingScreenDemo">
            <ClipLoader color={'#344441'} loading={loading} size={150} />
          </div>
        ) : (
          <div>Hello</div>
        )}
      </div>
    </>
  );
}
