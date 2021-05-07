import React, { useState } from "react";

const AccessList = ({ colors, mint, price, route }) => {
  // const [code, setCode] = useState("");

  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <main role="main" className="col-lg-12 d-flex text-center">
          <div className="content mr-auto ml-auto">
            <h1>Purchase Access Token</h1>
            <form
              onSubmit={event => {
                event.preventDefault();
                // mint(code);
                mint();
                // setCode("");
              }}
            >
              {/*<input
                type="text"
                className="form-control mb-1"
                placeholder="ID number"
                onChange={e => setCode(e.target.value)}
                value={code}
              />*/}
              <input
                type="submit"
                className="btn btn-block btn-primary"
                value="Buy Now"
              />
            </form>
            <div>Price: {price / 1000000000000000000} eth</div>
          </div>
        </main>
      </div>
      <hr />
      <div className="row justify-content-md-center">
        <div style={{display: "flex", margin: "35px"}}>
          <img
            className="product-image"
            src="https://productization.pearsoned.com/public/products/650dee77-8f5c-46e1-87f4-7aa319b6314c/images/catalogUrl/catalog.jpg"
            style={{marginRight: "20px"}}
          />
          <div className="product-info">
            <h2 className="product-title console-title">
              Revel Essentials of Sociology: A Down to Earth Approach 13e Update
            </h2>
            <div className="product-author console-label--small console-bold">
              <span>By</span>&nbsp;Jim M. Henslin
            </div>
            <div className="product-description console-font-color--secondary">
              For courses in Introductory Sociology A down-to-earth approach to
              sociology With Revel™ Essentials of Sociology: A Down-to-Earth
              Approach, author Jim Henslin takes students on an intellectual
              adventure of discovery through firsthand accounts of his travels
              around the world, original photographs, and ...
            </div>
            <div className="product-isbn">
              <span className="console-bold">ISBN-13: &nbsp;</span>9780134739892
              <span className="console-bold product-type">Revel™</span>
            </div>
          </div>
        </div>
        <ul className="list-group col-lg-4">

        {colors.length > 0 && (<h4 style={{textAlign: 'center'}}>Your Access Codes:</h4>)}
          {colors.map((color, key) => {
            return (
              <a
                key={key}
                href={`?navCode=${color}`}
                className="list-group-item list-group-item-action text-center"
                onClick={e => {
                  e.preventDefault();
                  route("restricted");
                }}
              >
                {color}
              </a>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default AccessList;
