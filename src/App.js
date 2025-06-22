import React from "react";
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <img src="https://img.icons8.com/color/96/shopify.png" alt="Logo" className="logo" />
        <nav className="nav">
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <div className="icons">
            <i className="fa fa-search"></i>
            <i className="fa fa-user"></i>
            <i className="fa fa-shopping-cart"></i>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <img
          src="https://images.pexels.com/photos/5704849/pexels-photo-5704849.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=600&w=1600"
          alt="New Arrivals"
          className="hero-img"
        />
        <div className="hero-content">
          <h1>NEW ARRIVALS</h1>
          <p>Check out our latest arrivals</p>
          <button className="shop-now">Shop Now</button>
        </div>
      </section>

      {/* Categories */}
      <section className="categories">
        <div className="category">
          <img
            src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=400"
            alt="Shoes"
          />
          <h3>Shoes</h3>
        </div>
        <div className="category">
          <img
            src="https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=400"
            alt="Bags"
          />
          <h3>Bags</h3>
        </div>
        <div className="category">
          <img
            src="https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=400"
            alt="Accessories"
          />
          <h3>Accessories</h3>
        </div>
        <div className="category">
          <img
            src="https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=400"
            alt="Clothing"
          />
          <h3>Clothing</h3>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 Your Company</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
        <div className="social-icons">
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-facebook"></i>
        </div>
      </footer>
    </div>
  );
}

export default App;