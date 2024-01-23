import { useState } from 'react';
import Spinner from 'react-bootstrap/esm/Spinner';
import data from '../data';

function Contacts() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="contacts">
      <div className="contacts__insert"></div>
      {isLoading && (
        <div className="contacts__spinner">
          <Spinner animation="border" />
        </div>
      )}
      <iframe
        onLoad={() => setIsLoading(false)}
        className={
          isLoading ? 'contacts__map' : 'contacts__map contacts__map--active'
        }
        src={data.googleMapApi}
        loading="lazy"
        referrerPolicy={'no-referrer-when-downgrade'}
        allowFullScreen={false}
      ></iframe>
    </div>
  );
}

export default Contacts;
