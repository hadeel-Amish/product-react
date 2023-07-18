import { Link } from "react-router-dom";

function Product(props) {
  const { product, showButton } = props;

  return (
    <>
      <div className=" mb-4  ">
        <div className="card  h-100 text-center p-4 shadow ">
          <img
            src={product.image}
            className="card-img-top"
            height="200px"
            width="250px"
            alt={product.title}
          />
          <div className="card-body ">
            <h5 className="card-title mb-0">{product.title.substring(0, 8)}</h5>

            <p>price:${product.price}</p>

            {showButton && (
              <Link
                className="btn btn-outline-dark"
                to={`/product/${product.id}`}
              >
                Buy Now
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
