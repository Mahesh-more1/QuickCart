# QuickCart Ecommerce Website

QuickCart is a modern, responsive ecommerce web application built using **HTML**, **CSS**, **JavaScript**, and **Vite**. It allows users to browse tech gadgets and lifestyle products, add items to their cart, and experience seamless shopping with interactive UI and local storage support. This project is inspired by Thapa Technical’s frontend ecommerce series.

***
## 🌐 Live Demo (GitHub Pages)

Deployed on GitHub Pages:  
👉 [**QuickCart Ecommerce Live Site**](https://mahesh-more1.github.io/QuickCart/)

---

## ✨ Features

- **Responsive Design:** Works on mobile, tablet, and desktop.
- **Product Catalog:** Dynamic listing with product details fetched from a local JSON file (`api/product.json`).
- **Shopping Cart:** Add, remove, and manage product quantities with persistence via local storage.
- **Pages:** Home, Products, About, Contact, Cart, Sign In, and Sign Up.
- **Toast Notifications:** User feedback on adding/removing products.
- **Modern UI:** Stylish design with grid layouts, Font Awesome \& Material Icons, Google Fonts, and smooth animations via CSS.
- **Easy Navigation:** Multi-page structure for user-friendly browsing.
- **No Backend Needed:** All data and logic run on the frontend, ideal for GitHub Pages static hosting.

***

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Build Tool:** Vite
- **Icons:** Font Awesome, Material Symbols
- **Fonts:** Google Fonts (Jost, Urbanist)
- **Data Storage:** LocalStorage API
- **Data Source:** Static JSON at `api/product.json`
- **Design:** CSS Grid \& Flex, custom color variables, animations

***

## 📁 Folder Structure

```
EcommerceProject/
├── api/
│   └── product.json
├── node_modules/
├── public/
│   ├── heroImage.png
│   ├── lapi.png
│   ├── iphone.png
│   ├── headphone.png
│   ├── watch.png
│   ├── speakers.png
│   ├── tv.png
│   ├── laptop.png
│   ├── headphoneEcom.png
│   ├── mobiles.png
│   └── ecompost.png
├── src/
│   ├── about.html
│   ├── add-to-cart.html
│   ├── contact.html
│   ├── products.html
│   ├── sign-in.html
│   ├── singn-up.html
│   ├── style.css
│   ├── main.js
│   ├── addToCart.js
│   ├── cartQuantityToggle.js
│   ├── fetchActualDataFromLS.js
│   ├── getCartFromLS.js
│   ├── homeProductCards.js
│   ├── productQuantityToggle.js
│   ├── removeCartFromLS.js
│   ├── showAddToCartCards.js
│   ├── showToast.js
│   ├── updateCartProductTotal.js
│   └── updateCartValue.js
├── .gitignore
├── index.html
├── logo.svg
├── logo.webp
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```


***

## 📝 Installation \& Setup

### Prerequisites

- Node.js v16 or above
- npm (included with Node.js)


### Steps

1. **Clone the Repository**

```
git clone https://github.com/Mahesh-more1/QuickCart-Ecommerce-Project.git
cd QuickCart-Ecommerce-Project
```

2. **Install Dependencies**

```
npm install
```

3. **Run in Development**

```
npm run dev
```

4. **Build for Production**

```
npm run build
```

5. **Preview the Production Build**

```
npm run preview
```


***

## 📦 Project Highlights

- **Product Loading:** Products load dynamically from `api/product.json`, making it easy to customize the product list.
- **Local Storage Cart:** Cart data stays persistent even if the page is refreshed.
- **Intuitive UI:** CSS grids, cards, and utility classes provide a clean, organized layout.
- **Simple Extensibility:** New products can be added to the JSON file, or you can add features/pages.
- **GitHub Pages Ready:** All files are static, so you can make your project live with GitHub Pages easily.

***

## 🤝 Contributing

1. Fork the repo
2. Create your branch:

```
git checkout -b feature/MyFeature
```

3. Commit changes:

```
git commit -m "Add MyFeature"
```

4. Push branch:

```
git push origin feature/MyFeature
```

5. Submit a Pull Request

***

## 📄 License

MIT License

***

## 🙏 Credits

- [Thapa Technical](https://www.thapatechnical.com/) for frontend inspiration
- Font Awesome \& Google Fonts for icons \& typography
- Created by **Mahesh More** (Mahesh-more1)
[mmore2743@gmail.com](mailto:mmore2743@gmail.com)

***

## 📞 Contact

- Email: mmore2743@gmail.com
- GitHub: [Mahesh-more1](https://github.com/Mahesh-more1)
