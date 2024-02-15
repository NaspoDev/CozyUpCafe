import "../../css/menu.css";
import * as menuItems from "./menu-items";
import largePastryDisplay from "../../assets/product_images/large_product_display.jpg";
import coffee from "../../assets/product_images/coffee2.png";
import pastryLong from "../../assets/product_images/pastry_long.jpg";
import turkeySandwich from "../../assets/product_images/turkey_sandwich.jpg";
import cheesecake from "../../assets/product_images/cheesecake.jpg";

function Menu() {
  return (
    <div className="menu">
      <div className="heading-area">
        <img
          src={largePastryDisplay}
          alt="Large Pastry Display"
          className="menu-heading-background-image"
        />
        <h1 className="title">Our Menu</h1>
        <h3 className="subtitle">
          Browse a variety of beautifully brewed coffees and homemade pastries.
        </h3>
      </div>

      <div className="section-separator"></div>

      <div className="menu-list">
        <div className="beverages-container menu-category-container">
          <h2 className="menu-category-title">Beverages</h2>
          <ul className="beverages-list menu-item-list">
            {menuItems.beverages.map((beverage, index) => (
              <li key={index}>{beverage}</li>
            ))}
          </ul>
        </div>

        <div className="pastries-container menu-category-container">
          <h2 className="menu-category-title">Pastries</h2>
          <ul className="pastries-list menu-item-list">
            {menuItems.pastries.map((pastry, index) => (
              <li key={index}>{pastry}</li>
            ))}
          </ul>
        </div>

        <div className="breakfast-container menu-category-container">
          <h2 className="menu-category-title">Breakfast</h2>
          <ul className="breakfast-list menu-item-list">
            {menuItems.breakfast.map((breakfast, index) => (
              <li key={index}>{breakfast}</li>
            ))}
          </ul>
        </div>

        <div className="lunch-container menu-category-container">
          <h2 className="menu-category-title">Lunch</h2>
          <ul className="lunch-list menu-item-list">
            {menuItems.lunch.map((lunch, index) => (
              <li key={index}>{lunch}</li>
            ))}
          </ul>
        </div>

        <div className="desserts-container menu-category-container">
          <h2 className="menu-category-title">Desserts</h2>
          <ul className="desserts-list menu-item-list">
            {menuItems.desserts.map((desserts, index) => (
              <li key={index}>{desserts}</li>
            ))}
          </ul>
        </div>

        <div className="specialty-drinks-container menu-category-container">
          <h2 className="menu-category-title">Specialty Drinks</h2>
          <ul className="specialty-drinks-list menu-item-list">
            {menuItems.specialtyDrinks.map((drink, index) => (
              <li key={index}>{drink}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Menu;
