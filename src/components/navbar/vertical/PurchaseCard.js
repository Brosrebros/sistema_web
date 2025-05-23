import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import FalconCloseButton from 'components/common/FalconCloseButton';

const PurchaseCard = () => {
  const [show, setShow] = useState(true);
  return (
    show && (
      <div className="settings my-3">
        <Card className="p-0 rounded-2 position-relative">
          <div
            className="position-absolute"
            style={{ right: '6px', top: '3px' }}
          >
            <FalconCloseButton
              size="sm"
              className="fs-11"
              noOutline
              onClick={() => setShow(false)}
            />
          </div>
          {/* <Card.Body className="text-center">
            <img src={image} alt="" width={80} />
            <p className="fs-11 mt-2">
              Loving what you see?
              <br />
              Get your copy of <Link to="#!">Falcon</Link>
            </p>
            <div className="d-grid gap-2">
              <Button
                as={'a'}
                href="https://themes.getbootstrap.com/product/falcon-admin-dashboard-webapp-template-react/"
                target="_blank"
                size="sm"
                className="btn-primary"
              >
                Purchase
              </Button>
            </div>
          </Card.Body> */}
        </Card>
      </div>
    )
  );
};

export default PurchaseCard;
