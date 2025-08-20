import "./style.css";

import products from "../public/api/product.json";

import { showProductContainer } from "./homeProductCards";

import { productQuantityToggle } from "./productQuantityToggle";

// A "showProductContainer" function that takes array of products as input.

showProductContainer(products);
