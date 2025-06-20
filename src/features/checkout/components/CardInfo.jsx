import React from "react";

const CardInfo = () => {
  return (
    <>
      <div className="mt-3">
        <label htmlFor="cardNumber" className="form-label">
          Card Number
        </label>
        <input
          type="text"
          className="form-control"
          id="cardNumber"
          name="cardNumber"
          placeholder="XXXX XXXX XXXX XXXX"
        />
      </div>
      <div className="row mt-3">
        <div className="col-md-6">
          <label htmlFor="cardName" className="form-label">
            Name on Card
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Ex: John Doe"
            id="cardName"
            name="cardName"
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="cardExpiryDate" className="form-label">
            Expiry Date
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="MM/YY"
            id="cardExpiryDate"
            name="cardExpiryDate"
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="cardCvv" className="form-label">
            CVV Code
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="XXX"
            id="cardCvv"
            name="cardCvv"
          />
        </div>
      </div>
    </>
  );
};

export default React.memo(CardInfo);
