import "../../css/menu.css";
import * as menuItems from "./menu-items";

// Image imports
import largePastryDisplay from "../../assets/product_images/large_product_display.jpg";
import coffee from "../../assets/product_images/coffee2.png";
import assortedPastries2 from "../../assets/product_images/assorted_pastries2.jpg";
import turkeySandwich from "../../assets/product_images/turkey_sandwich.jpg";
import assortedPastries from "../../assets/product_images/assorted_pastries.jpg";

function Menu() {
  const dollarFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "CAD",
    currencyDisplay: "narrowSymbol",
  });

  // Dots for separating menu item names and prices. Will cut off automatically to fit size.
  const dots =
    "..................................................................";

  return (
    <div className="menu">
      <div className="heading-area">
        <img
          src={largePastryDisplay}
          alt="Large Pastry Display"
          className="menu-heading-background-image"
        />
        <h1 className="title">Our Menu</h1>
        <h2 className="subtitle">
          Browse a variety of beautifully brewed coffees and homemade pastries.
        </h2>
      </div>

      <div className="section-separator"></div>

      <div className="menu-list">
        {/* Menu section 1 */}
        <div className="menu-section-1 menu-section">
          {/* Left side, for menu */}
          <div className="left-side">
            <div className="menu-paper-background">
              <h2 className="menu-paper-heading">Cafe Essentials</h2>
              <div className="beverages-container menu-category-container">
                <h3 className="menu-category-title">Beverages</h3>
                <ul className="beverages-list menu-item-list">
                  {menuItems.beverages.map((item, index) => (
                    <li key={index}>
                      <p className="menu-item-name">{item.name}</p>
                      <p className="dots-price-separator">{dots}</p>
                      <p className="menu-item-price">
                        {dollarFormat.format(item.price)}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pastries-container menu-category-container">
                <h3 className="menu-category-title">Pastries</h3>
                <ul className="pastries-list menu-item-list">
                  {menuItems.pastries.map((item, index) => (
                    <li key={index}>
                      <p className="menu-item-name">{item.name}</p>
                      <p className="dots-price-separator">{dots}</p>
                      <p className="menu-item-price">
                        {dollarFormat.format(item.price)}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right side, for images */}
          <div className="right-side">
            <img src={coffee} alt="Coffee" className="coffee-image" />
            <img
              src={assortedPastries}
              alt="Assorted Pastries"
              className="assorted-pastries-image"
            />
          </div>
        </div>

        {/* Large Image Divider */}
        <div className="large-image-container-1">
          <img
            src={assortedPastries2}
            alt="Assorted Pastries"
            className="assorted-pastries-image"
          />
        </div>

        {/* Menu Section 2 */}
        <div className="menu-section-2 menu-section">
          {/* Left side, for images */}
          <div className="left-side">
            <img
              src={turkeySandwich}
              alt="Turkey Sandwich"
              className="turkey-sandwich-image"
            />
          </div>

          {/* Right side, for menu */}
          <div className="right-side">
            <div className="menu-paper-background">
              <h2 className="menu-paper-heading">Food</h2>
              <div className="breakfast-container menu-category-container">
                <h3 className="menu-category-title">Breakfast</h3>
                <ul className="breakfast-list menu-item-list">
                  {menuItems.breakfast.map((item, index) => (
                    <li key={index}>
                      <p className="menu-item-name">{item.name}</p>
                      <p className="dots-price-separator">{dots}</p>
                      <p className="menu-item-price">
                        {dollarFormat.format(item.price)}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lunch-container menu-category-container">
                <h3 className="menu-category-title">Lunch</h3>
                <ul className="lunch-list menu-item-list">
                  {menuItems.lunch.map((item, index) => (
                    <li key={index}>
                      <p className="menu-item-name">{item.name}</p>
                      <p className="dots-price-separator">{dots}</p>
                      <p className="menu-item-price">
                        {dollarFormat.format(item.price)}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <h2 className="menu-paper-heading">Sweets & Specialties</h2>
              <div className="desserts-container menu-category-container">
                <h3 className="menu-category-title">Desserts</h3>
                <ul className="desserts-list menu-item-list">
                  {menuItems.desserts.map((item, index) => (
                    <li key={index}>
                      <p className="menu-item-name">{item.name}</p>
                      <p className="dots-price-separator">{dots}</p>
                      <p className="menu-item-price">
                        {dollarFormat.format(item.price)}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="specialty-drinks-container menu-category-container">
                <h3 className="menu-category-title">Specialty Drinks</h3>
                <ul className="specialty-drinks-list menu-item-list">
                  {menuItems.specialtyDrinks.map((item, index) => (
                    <li key={index}>
                      <p className="menu-item-name">{item.name}</p>
                      <p className="dots-price-separator">{dots}</p>
                      <p className="menu-item-price">
                        {dollarFormat.format(item.price)}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
