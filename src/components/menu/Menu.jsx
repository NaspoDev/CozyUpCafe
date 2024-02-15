import "../../css/menu.css";
import * as menuItems from "./menu-items";

function Menu() {
  return (
    <div className="menu">
      <div className="heading-area">
        <h1 className="title">Our Menu</h1>
        <h3 className="subtitle">
          Browse a variety of beautifully brewed coffees and homemade pastries.
        </h3>
      </div>

      <div className="menu-list">
        <div className="beverages-container menu-category-container">
          <h2 className="menu-category-title">Beverages</h2>
          <ul className="beverages-list menu-item-list">
            {menuItems.beverages.map((beverage, index) => (
              <li key={index}>{beverage}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Menu;
