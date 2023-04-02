import { useEffect, useState } from "react";

export const Filters = () => {
  const [products, setProducts] = useState<any | null>([]);
  const [catagory, setCatagory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState<String>();
  const [load, setLoad] = useState(false);
  const [loadcat, setCatLoad] = useState(false);

  const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCategory(event.target.value);
  };

  const getProds = async () => {
    const data = await fetch("/api/product")
      .then((responseP) => responseP.json())
      .then((resP) => {
        setProducts(resP.products);
        setLoad(true);
      });
  };

  const getCats = async () => {
    const dataCat = await fetch("/api/category")
      .then((response) => response.json())
      .then((data) =>
        data.map((item: any) => {
          return { cat: item };
        })
      )
      .then((data) => {
        setCatagory(data);
        setCatLoad(true);
      });
  };
  useEffect(() => {
    getProds();
    getCats();
  }, []);

  // useEffect(() => {
  //   fetch(
  //     process.env.NEXT_PUBLIC_API_ENDPOINT +
  //       `/api/category?category=${selectedCategory}`
  //   )
  //     .then((response) => response.json())
  //     .then((res) => setProducts(res));
  //   console.log("products from category - ");
  // }, [selectedCategory]);

  const getCatProd = async (selectedCategory: string) => {
    const data = await fetch("/api/category?category=" + selectedCategory)
      .then((res) => res.json())
      .then((res) => {
        setProducts(res.products);
      });
  };
  const loadCatProducts = (cat: string) => {
    getCatProd(cat);
  };

  return (
    <>
      <div className="container-fluid pt-5">
        <div className="row px-xl-5">
          <div className="col-lg-3 col-md-12">
            <div className="border-bottom mb-4 pb-4">
              <h5 className="font-weight-semi-bold mb-4">Filter by Category</h5>
              <form>
                {loadcat == false ? (
                  <h1>loading</h1>
                ) : (
                  catagory.map((cat: any) => (
                    <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                      <input
                        type="radio"
                        className="custom-control-input"
                        name="category"
                        id={cat.cat}
                        value={cat.cat}
                      />
                      <label
                        className="custom-control-label"
                        htmlFor={cat.cat}
                        onClick={() => loadCatProducts(cat.cat)}
                      >
                        {cat.cat}
                      </label>
                    </div>
                  ))
                )}
              </form>
            </div>
          </div>
          <div className="col-lg-9 col-md-12">
            <div className="row pb-3">
              <div className="col-12 pb-1">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <form action="">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search by name"
                      />
                      <div className="input-group-append">
                        <span className="input-group-text bg-transparent text-primary">
                          <i className="fa fa-search"></i>
                        </span>
                      </div>
                    </div>
                  </form>
                  <div className="dropdown ml-4">
                    <button
                      className="btn border dropdown-toggle"
                      type="button"
                      id="triggerId"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Sort by
                    </button>
                    <div
                      className="dropdown-menu dropdown-menu-right"
                      aria-labelledby="triggerId"
                    >
                      <a className="dropdown-item" href="#">
                        Latest
                      </a>
                      <a className="dropdown-item" href="#">
                        Popularity
                      </a>
                      <a className="dropdown-item" href="#">
                        Best Rating
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {load == false ? (
                <h1>loading</h1>
              ) : (
                <>
                  {products &&
                    products.map((prod: any) => (
                      <div className="col-lg-4 col-md-6 col-sm-12 pb-1">
                        <div className="card product-item border-0 mb-4">
                          <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                            <img
                              className="img-fluid w-100"
                              src={prod.thumbnail}
                              alt={prod.title}
                            />
                          </div>
                          <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                            <h6 className="text-truncate mb-3">{prod.title}</h6>
                            <div className="d-flex justify-content-center">
                              <h6>${prod.price}</h6>
                              <h6 className="text-muted ml-2">
                                <del>$99999.00</del>
                              </h6>
                            </div>
                          </div>
                          <div className="card-footer d-flex justify-content-between bg-light border">
                            <a href="" className="btn btn-sm text-dark p-0">
                              <i className="fas fa-eye text-primary mr-1"></i>
                              View Detail
                            </a>
                            <a href="" className="btn btn-sm text-dark p-0">
                              <i className="fas fa-shopping-cart text-primary mr-1"></i>
                              Add To Cart
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
