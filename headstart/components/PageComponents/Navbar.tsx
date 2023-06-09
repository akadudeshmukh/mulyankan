import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid mb-5">
        <div className="row border-top px-xl-5">
          <div className="col-lg-9">
            <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
              <Link href="" className="text-decoration-none d-block d-lg-none">
                <h1 className="m-0 display-5 font-weight-semi-bold">
                  <span className="text-primary font-weight-bold border px-3 mr-1">
                    E
                  </span>
                  Shopper
                </h1>
              </Link>
              <button
                type="button"
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarCollapse"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse justify-content-between"
                id="navbarCollapse"
              >
                <div className="navbar-nav mr-auto py-0">
                  <Link href="/" className="nav-item nav-link active">
                    Home
                  </Link>
                  <Link href="/shop" className="nav-item nav-link">
                    Shop
                  </Link>
                  <Link href="/product/7" className="nav-item nav-link">
                    Shop Detail
                  </Link>
                  <Link href="/shopping-cart" className="nav-item nav-link">
                    Shopping Cart
                  </Link>

                  <Link href="/contact" className="nav-item nav-link">
                    Contact
                  </Link>
                </div>
                <div className="navbar-nav ml-auto py-0">
                  <Link href="" className="nav-item nav-link">
                    Login
                  </Link>
                  <Link href="" className="nav-item nav-link">
                    Register
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
