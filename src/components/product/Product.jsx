const Product = () => {
  return (
    <div className="col-lg-4">
      <ul className="list-group shadow">
        <li className="list-group-item">
          <div className="media align-items-lg-center flex-column flex-lg-row p-3">
            <div className="media-body order-2 order-lg-1">
              <h5 className="mt-0 font-weight-bold mb-2">Apple iPhone XR</h5>
              <p className="font-italic text-muted mb-0 small">
                128 GB ROM | 15.49 cm (6.1 inch) Display 12MP Rear Camera | 7MP
                Front Camera A12 Bionic Chip Processor
              </p>
              <div className="d-flex align-items-center justify-content-between mt-1">
                <h6 className="font-weight-bold my-2">$120.000</h6>
              </div>
            </div>
            <img
              src="https://i.imgur.com/KFojDGa.jpg"
              alt="Generic placeholder image"
              width="200"
              className="ml-lg-5 order-1 order-lg-2"
            />
            <div className="mt-4">
              <button type="button" className="btn btn-outline-primary">
                MeGusta: 0
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default Product;
