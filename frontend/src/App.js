import data from "./data.js";
function App() {
  return (
    <div classNameName="App">
      <html>
        <head>
          <link rel="stylesheet" href="style.css" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />
          <title>Amazona</title>
        </head>
        <body>
          <div className="grid-container">
            <header className="row">
              <div>
                <a className="brand" href="/">
                  amazona
                </a>
              </div>
              <div>
                <a href="/cart">Cart</a>
                <a href="/signin">Sign In</a>
              </div>
            </header>
            <main>
              <div>
                <div className="row center">
                  {data.products.map((product) => (
                    <div key={product._id} className="card">
                      <a href={`/products/${product._id}`}>
                        <img
                          className="medium"
                          src={require(`./images/${product.image}`)}
                        />
                      </a>
                      <div className="card`-body">
                        <div className="card-body">
                          <a href={`/products/${product}`}>
                            <h2>{product.name}</h2>
                          </a>
                          <div className="rating">
                            <span>
                              {" "}
                              <i className="fa fa-star"></i>{" "}
                            </span>
                            <span>
                              {" "}
                              <i className="fa fa-star"></i>{" "}
                            </span>
                            <span>
                              {" "}
                              <i className="fa fa-star"></i>{" "}
                            </span>
                            <span>
                              {" "}
                              <i className="fa fa-star"></i>{" "}
                            </span>
                            <span>
                              {" "}
                              <i className="fa fa-star"></i>{" "}
                            </span>
                          </div>
                          <div className="price">${product.price}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </main>
            <footer className="row center">All right reserved</footer>
          </div>
        </body>
      </html>
    </div>
  );
}

export default App;
