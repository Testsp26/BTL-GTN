const menu = document.querySelector(".navbar__links");
const menuButton = document.querySelector("#menuToggle");
const overlay = document.querySelector("#overlay");

if (menuButton) {
  menuButton.addEventListener("click", () => {
    menu.classList.toggle("navbar__open");
    menuButton.classList.toggle("open");
    overlay.classList.toggle("show");
  });
}

let fnbProducts = [
  {
    id: 1,
    title: "Túi Bánh Ngọt ",
    category: "bakery",
    categoryName: "Tiệm Bánh",
    storeName: "The Daily Bakery - Q1",
    price: 45000,
    originalPrice: 110000,
    priceFormatted: "45.000 đ",
    originalPriceFormatted: "110.000 đ",
    discountTag: "-59%",
    stock: 5,
    image: "./img/tuibanhngot.jpg",
    description:
      "Túi món ngẫu nhiên chứa 3-4 loại bánh ngọt mặn mới làm trong ngày còn mới 100%.",
    pickupTime: "20:30 - 21:30",
    date: "2026-06-15",
  },
  {
    id: 2,
    title: "Suất Cơm Văn Phòng & Canh Nóng Cuối Ca",
    category: "restaurant",
    categoryName: "Quán Ăn",
    storeName: "Bếp Cơm Mẹ Nấu - Q3",
    price: 30000,
    originalPrice: 70000,
    priceFormatted: "30.000 đ",
    originalPriceFormatted: "70.000 đ",
    discountTag: "-57%",
    stock: 8,
    image: "./img/Com.jpg",
    description:
      "Khay cơm đạm bạc đầy đặn gồm cơm trắng, món mặn và canh rau tươi nóng hổi.",
    pickupTime: "20:00 - 21:00",
    date: "2026-06-14",
  },
  {
    id: 3,
    title: "Combo 2 Cà Phê Size Lớn",
    category: "cafe",
    categoryName: "Cà Phê",
    storeName: "Highlands & Tea Corner",
    price: 35000,
    originalPrice: 85000,
    priceFormatted: "35.000 đ",
    originalPriceFormatted: "85.000 đ",
    discountTag: "-58%",
    stock: 4,
    image: "./img/Cafe.jpg",
    description: " cà phê sữa đá bảo quản lạnh.",
    pickupTime: "21:00 - 22:00",
    date: "2026-06-13",
  },
  {
    id: 4,
    title: "Hộp Bánh Mì Sandwich & Pate Tươi",
    category: "bakery",
    categoryName: "Tiệm Bánh",
    storeName: "Paris Baguette - Q1",
    price: 25000,
    originalPrice: 60000,
    priceFormatted: "25.000 đ",
    originalPriceFormatted: "60.000 đ",
    discountTag: "-58%",
    stock: 6,
    image: "./img/Bmsw.jpg",
    description:
      "Bánh mì sandwich mềm kèm hộp pate gan thơm ngon dùng cho bữa sáng.",
    pickupTime: "21:30 - 22:30",
    date: "2026-06-12",
  },
  {
    id: 5,
    title: "Phở Bò Tái Nạm Cuối Ca ",
    category: "restaurant",
    categoryName: "Quán Ăn",
    storeName: "Phở 24h - Bình Thạnh",
    price: 40000,
    originalPrice: 90000,
    priceFormatted: "40.000 đ",
    originalPriceFormatted: "90.000 đ",
    discountTag: "-55%",
    stock: 3,
    image: "./img/pho.jpg",
    description:
      "Túi nước dùng đậm đà kèm bánh phở và thịt bò tươi ngon cuối ngày.",
    pickupTime: "21:00 - 22:00",
    date: "2026-06-11",
  },
  {
    id: 6,
    title: "Set 3 Bánh Su Kem Pháp",
    category: "bakery",
    categoryName: "Tiệm Bánh",
    storeName: "Tous les Jours - Q1",
    price: 30000,
    originalPrice: 75000,
    priceFormatted: "30.000 đ",
    originalPriceFormatted: "75.000 đ",
    discountTag: "-60%",
    stock: 7,
    image: "./img/sukem.jpg",
    description: "Bánh su kem vỏ giòn nhân kem vani mát lạnh thơm béo.",
    pickupTime: "20:00 - 21:00",
    date: "2026-06-10",
  },
  {
    id: 7,
    title: "Bánh Kem Mini Trái Cây",
    category: "bakery",
    categoryName: "Tiệm Bánh",
    storeName: "ABC Bakery - Quận 5",
    price: 70000,
    originalPrice: 160000,
    priceFormatted: "70.000 đ",
    originalPriceFormatted: "160.000 đ",
    discountTag: "-56%",
    stock: 2,
    image: "./img/cake.jpg",
    description:
      "Bánh kem trái cây tươi trang trí đẹp mắt làm quà tặng hoặc ăn vội.",
    pickupTime: "21:00 - 22:00",
    date: "2026-06-09",
  },
  {
    id: 8,
    title: "Mì Ý Sốt Băm Bò (Spaghetti)",
    category: "restaurant",
    categoryName: "Quán Ăn",
    storeName: "The Pizza Company - Q10",
    price: 45000,
    originalPrice: 95000,
    priceFormatted: "45.000 đ",
    originalPriceFormatted: "95.000 đ",
    discountTag: "-52%",
    stock: 5,
    image: "./img/miy.jpg",
    description: "Hộp mì ý sốt cà chua thịt bò băm phủ phô mai thơm ngậy.",
    pickupTime: "20:30 - 21:30",
    date: "2026-06-08",
  },
  {
    id: 9,
    title: "Trà Trái Cây Nhiệt Đới ",
    category: "cafe",
    categoryName: "Cà Phê",
    storeName: "Phúc Long Coffee & Tea",
    price: 25000,
    originalPrice: 65000,
    priceFormatted: "25.000 đ",
    originalPriceFormatted: "65.000 đ",
    discountTag: "-61%",
    stock: 9,
    image: "./img/tea.jpg",
    description: "Trà đào cam sả thanh mát giải nhiệt cuối ngày.",
    pickupTime: "21:30 - 22:30",
    date: "2026-06-07",
  },
  {
    id: 10,
    title: "Bánh Hamburger Gà Giòn",
    category: "restaurant",
    categoryName: "Quán Ăn",
    storeName: "KFC - Ký Túc Xá ĐHQG",
    price: 35000,
    originalPrice: 75000,
    priceFormatted: "35.000 đ",
    originalPriceFormatted: "75.000 đ",
    discountTag: "-53%",
    stock: 6,
    image: "./img/gagion.jpg",
    description:
      "Hamburger nhân thịt gà phi lê chiên giòn kèm xà lách sốt mayonnaise.",
    pickupTime: "21:00 - 22:00",
    date: "2026-06-06",
  },
];

fnbProducts.sort((a, b) => new Date(b.date) - new Date(a.date));

let productReviews = {
  1: [
    {
      author: "Nguyễn Văn A",
      rating: 5,
      comment: "Bánh mì cuối ngày mà vẫn giòn thơm lắm, giá lại rẻ bất ngờ!",
    },
    {
      author: "Nguyễn Văn B",
      rating: 5,
      comment: "Quán đóng gói sạch sẽ, nhân viên thân thiện khi đến nhận.",
    },
  ],
  2: [
    {
      author: "Lê Thị C",
      rating: 4,
      comment: "Cơm nóng hổi, ăn ngon hợp khẩu vị. Sẽ ghé ủng hộ tiếp.",
    },
  ],
};

let currentShopCategory = "all";
let currentShopPage = 1;
const ITEMS_PER_PAGE = 8;
let cart = JSON.parse(localStorage.getItem("ecosave_resq_cart")) || [];

const productGrid = document.getElementById("productGrid");
const shopPagination = document.getElementById("shopPagination");
const tabBtns = document.querySelectorAll(".tab-btn");
const searchInput = document.getElementById("searchInput");

const cartCount = document.getElementById("cartCount");
const openCartBtn = document.getElementById("openCartBtn");
const closeCartBtn = document.getElementById("closeCartBtn");
const cartDrawer = document.getElementById("cartDrawer");
const cartBody = document.getElementById("cartBody");
const cartTotalAmount = document.getElementById("cartTotalAmount");

const productModal = document.getElementById("productModal");
const closeModal = document.getElementById("closeModal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalCategory = document.getElementById("modalCategory");
const modalPrice = document.getElementById("modalPrice");
const modalOriginalPrice = document.getElementById("modalOriginalPrice");
const storeNameVal = document.getElementById("storeNameVal");
const pickupVal = document.getElementById("pickupVal");
const modalDesc = document.getElementById("modalDesc");
const modalQty = document.getElementById("modalQty");
const modalAddToCartBtn = document.getElementById("modalAddToCartBtn");

let activeModalProduct = null;
let selectedReviewRating = 5;
function renderShop() {
  if (!productGrid) return;

  const keyword = searchInput ? searchInput.value.toLowerCase().trim() : "";
  let filtered =
    currentShopCategory === "all"
      ? fnbProducts
      : fnbProducts.filter((p) => p.category === currentShopCategory);

  if (keyword) {
    filtered = filtered.filter(
      (p) =>
        p.title.toLowerCase().includes(keyword) ||
        p.storeName.toLowerCase().includes(keyword),
    );
  }

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE) || 1;
  if (currentShopPage > totalPages) currentShopPage = totalPages;

  const start = (currentShopPage - 1) * ITEMS_PER_PAGE;
  const paginatedItems = filtered.slice(start, start + ITEMS_PER_PAGE);

  if (paginatedItems.length === 0) {
    productGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; padding: 40px; color: #64748b;">Không tìm thấy suất đồ ăn thanh lý nào phù hợp.</p>`;
    renderShopPagination(0);
    return;
  }

  productGrid.innerHTML = paginatedItems
    .map(
      (item) => `
    <div class="fnb-card">
      <div class="fnb-img-box" onclick="openDetailModal(${item.id})">
        <img src="${item.image}" alt="${item.title}" onerror="this.src='https://via.placeholder.com/300x200?text=Food+Package'" />
        <span class="discount-badge-tag">${item.discountTag}</span>
        <span class="stock-left-tag">Còn ${item.stock} suất</span>
      </div>
      <div class="fnb-info">
        <div>
          <div class="store-title"><i class="fa-solid fa-store"></i> ${item.storeName}</div>
          <div class="item-title" onclick="openDetailModal(${item.id})">${item.title}</div>
          <div class="pickup-time-box"><i class="fa-solid fa-clock"></i> Nhận: ${item.pickupTime}</div>
          <div class="price-container">
            <span class="price-discount">${item.priceFormatted}</span>
            <span class="price-original">${item.originalPriceFormatted}</span>
          </div>
        </div>
        <div class="fnb-actions">
          <button class="btn-detail" onclick="openDetailModal(${item.id})">Chi Tiết</button>
          <button class="btn-add-cart" onclick="addToCart(${item.id}, 1)">Đặt Trước</button>
        </div>
      </div>
    </div>
  `,
    )
    .join("");

  renderShopPagination(totalPages);
}

function renderShopPagination(totalPages) {
  if (!shopPagination) return;
  if (totalPages <= 1) {
    shopPagination.innerHTML = "";
    return;
  }
  let html = "";
  for (let i = 1; i <= totalPages; i++) {
    html += `<button class="page-btn ${i === currentShopPage ? "active" : ""}" onclick="changeShopPage(${i})">${i}</button>`;
  }
  shopPagination.innerHTML = html;
}

window.changeShopPage = function (page) {
  currentShopPage = page;
  renderShop();
  document.getElementById("shop").scrollIntoView({ behavior: "smooth" });
};

if (searchInput) {
  searchInput.addEventListener("input", () => {
    currentShopPage = 1;
    renderShop();
  });
}

tabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentShopCategory = btn.getAttribute("data-category");
    currentShopPage = 1;
    renderShop();
  });
});

window.openDetailModal = function (id) {
  const product = fnbProducts.find((m) => m.id === id);
  if (!product) return;

  activeModalProduct = product;
  modalImg.src = product.image;
  modalTitle.innerText = product.title;
  modalCategory.innerText = product.categoryName;
  modalPrice.innerText = product.priceFormatted;
  modalOriginalPrice.innerText = product.originalPriceFormatted;
  storeNameVal.innerText = product.storeName;
  pickupVal.innerText = product.pickupTime;
  modalDesc.innerText = product.description;
  modalQty.value = 1;
  modalQty.max = product.stock;

  selectedReviewRating = 5;
  updateStarPickerUI(5);

  renderModalReviews(id);

  if (productModal) productModal.classList.add("active");
  if (overlay) overlay.classList.add("show");
};

// Xử lý chọn sao đánh giá
const starPicker = document.getElementById("starRatingPicker");
if (starPicker) {
  const stars = starPicker.querySelectorAll("i");
  const ratingText = document.getElementById("ratingText");

  stars.forEach((star, index) => {
    star.addEventListener("click", () => {
      selectedReviewRating = index + 1;
      updateStarPickerUI(selectedReviewRating);
    });
  });
}

function updateStarPickerUI(rating) {
  const starPicker = document.getElementById("starRatingPicker");
  if (!starPicker) return;
  const stars = starPicker.querySelectorAll("i");
  const ratingText = document.getElementById("ratingText");

  stars.forEach((s, idx) => {
    if (idx < rating) {
      s.classList.add("active");
    } else {
      s.classList.remove("active");
    }
  });
  if (ratingText) ratingText.innerText = `(${rating}/5 sao)`;
}

function renderModalReviews(productId) {
  const reviewListContainer = document.getElementById("modalReviewList");
  if (!reviewListContainer) return;

  const reviews = productReviews[productId] || [
    {
      author: "Khách hàng EcoSave",
      rating: 5,
      comment: "Món ăn rất ngon và ý nghĩa!",
    },
  ];

  reviewListContainer.innerHTML = reviews
    .map(
      (r) => `
    <div class="review-item">
      <div>
        <span class="review-author">${r.author}</span>
        <span class="review-stars">${"★".repeat(r.rating)}${"☆".repeat(5 - r.rating)}</span>
      </div>
      <div class="review-comment">${r.comment}</div>
    </div>
  `,
    )
    .join("");
}

const submitReviewBtn = document.getElementById("submitReviewBtn");
if (submitReviewBtn) {
  submitReviewBtn.addEventListener("click", () => {
    const reviewInput = document.getElementById("reviewInput");
    const commentText = reviewInput ? reviewInput.value.trim() : "";

    if (!commentText) {
      alert("Vui lòng nhập nội dung đánh giá!");
      return;
    }

    if (activeModalProduct) {
      if (!productReviews[activeModalProduct.id]) {
        productReviews[activeModalProduct.id] = [];
      }

      productReviews[activeModalProduct.id].unshift({
        author: "Khách hàng (Bạn)",
        rating: selectedReviewRating,
        comment: commentText,
      });

      renderModalReviews(activeModalProduct.id);
      reviewInput.value = "";
      alert("Cảm ơn bạn đã gửi đánh giá về món ăn!");
    }
  });
}

if (closeModal) {
  closeModal.addEventListener("click", () => {
    if (productModal) productModal.classList.remove("active");
    if (overlay) overlay.classList.remove("show");
  });
}

if (modalAddToCartBtn) {
  modalAddToCartBtn.addEventListener("click", () => {
    if (activeModalProduct) {
      const qty = parseInt(modalQty.value) || 1;
      addToCart(activeModalProduct.id, qty);
      if (productModal) productModal.classList.remove("active");
      if (overlay) overlay.classList.remove("show");
    }
  });
}

const openMerchantBtn = document.getElementById("openMerchantBtn");
const merchantModal = document.getElementById("merchantModal");
const closeMerchantModal = document.getElementById("closeMerchantModal");
const merchantLoginBtn = document.getElementById("merchantLoginBtn");
const merchantAuthSection = document.getElementById("merchantAuthSection");
const merchantUploadSection = document.getElementById("merchantUploadSection");
const uploadProductForm = document.getElementById("uploadProductForm");
const merchantLogoutBtn = document.getElementById("merchantLogoutBtn");
const partnerNameDisplay = document.getElementById("partnerNameDisplay");

if (openMerchantBtn) {
  openMerchantBtn.addEventListener("click", () => {
    if (merchantModal) merchantModal.classList.add("active");
    if (overlay) overlay.classList.add("show");
  });
}

if (closeMerchantModal) {
  closeMerchantModal.addEventListener("click", () => {
    if (merchantModal) merchantModal.classList.remove("active");
    if (overlay) overlay.classList.remove("show");
  });
}

if (merchantLoginBtn) {
  merchantLoginBtn.addEventListener("click", () => {
    const user = document.getElementById("merchantUser").value.trim();
    if (!user) {
      alert("Vui lòng nhập tên quán!");
      return;
    }
    partnerNameDisplay.innerText = user;
    merchantAuthSection.style.display = "none";
    merchantUploadSection.style.display = "block";
    alert(`Đăng nhập Kênh Đối Tác thành công: ${user}`);
  });
}

if (merchantLogoutBtn) {
  merchantLogoutBtn.addEventListener("click", () => {
    merchantAuthSection.style.display = "block";
    merchantUploadSection.style.display = "none";
    document.getElementById("merchantUser").value = "";
    document.getElementById("merchantPass").value = "";
  });
}

if (uploadProductForm) {
  uploadProductForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.getElementById("prodTitle").value;
    const originalPrice =
      parseInt(document.getElementById("prodOriginalPrice").value) || 0;
    const price = parseInt(document.getElementById("prodPrice").value) || 0;
    const category = document.getElementById("prodCategory").value;
    const stock = parseInt(document.getElementById("prodStock").value) || 1;
    const pickupTime = document.getElementById("prodPickupTime").value;
    const description = document.getElementById("prodDesc").value;
    const image =
      document.getElementById("prodImage").value || "./img/ETROLAI.jpg";
    const storeName = partnerNameDisplay.innerText || "Quán F&B";

    const discountPercent = Math.round(
      ((originalPrice - price) / originalPrice) * 100,
    );

    const newProduct = {
      id: fnbProducts.length + 1,
      title: title,
      category: category,
      categoryName:
        category === "bakery"
          ? "Tiệm Bánh"
          : category === "cafe"
            ? "Cà Phê"
            : "Quán Ăn",
      storeName: storeName,
      price: price,
      originalPrice: originalPrice,
      priceFormatted: price.toLocaleString("vi-VN") + " đ",
      originalPriceFormatted: originalPrice.toLocaleString("vi-VN") + " đ",
      discountTag: `-${discountPercent}%`,
      stock: stock,
      image: image,
      description: description,
      pickupTime: pickupTime,
      date: new Date().toISOString().split("T")[0],
    };

    fnbProducts.unshift(newProduct);
    currentShopPage = 1;
    renderShop();

    alert("Đăng tải suất đồ ăn thanh lý thành công!");
    if (merchantModal) merchantModal.classList.remove("active");
    if (overlay) overlay.classList.remove("show");
    uploadProductForm.reset();
  });
}

function addToCart(id, qty = 1) {
  const item = fnbProducts.find((m) => m.id === id);
  if (!item) return;

  const existing = cart.find((c) => c.id === id);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ ...item, qty });
  }

  updateCartUI();
  openCartDrawer();
}

function updateCartUI() {
  localStorage.setItem("ecosave_resq_cart", JSON.stringify(cart));
  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  if (cartCount) cartCount.innerText = totalCount;

  if (!cartBody) return;

  if (cart.length === 0) {
    cartBody.innerHTML = `<p style="text-align: center; color: #94a3b8; margin-top: 30px;">Chưa có suất đồ ăn nào.</p>`;
  } else {
    cartBody.innerHTML = cart
      .map(
        (item) => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.title}" class="cart-item-img" />
        <div class="cart-item-info">
          <div class="cart-item-title">${item.title}</div>
          <div class="cart-item-price">${item.priceFormatted}</div>
          <div style="display:flex; align-items:center; gap:6px; margin-top:4px;">
            <button class="qty-btn" onclick="changeQty(${item.id}, -1)">-</button>
            <span><b>${item.qty}</b></span>
            <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
            <i class="fa-solid fa-trash cart-item-remove" onclick="removeFromCart(${item.id})"></i>
          </div>
        </div>
      </div>
    `,
      )
      .join("");
  }

  const totalMoney = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  if (cartTotalAmount)
    cartTotalAmount.innerText = totalMoney.toLocaleString("vi-VN") + " đ";
}

window.changeQty = function (id, delta) {
  const item = cart.find((c) => c.id === id);
  if (item) {
    item.qty += delta;
    if (item.qty <= 0) removeFromCart(id);
    else updateCartUI();
  }
};

window.removeFromCart = function (id) {
  cart = cart.filter((c) => c.id !== id);
  updateCartUI();
};

function openCartDrawer() {
  if (cartDrawer) cartDrawer.classList.add("open");
  if (overlay) overlay.classList.add("show");
}

function closeCartDrawer() {
  if (cartDrawer) cartDrawer.classList.remove("open");
  if (overlay) overlay.classList.remove("show");
}

if (openCartBtn) openCartBtn.addEventListener("click", openCartDrawer);
if (closeCartBtn) closeCartBtn.addEventListener("click", closeCartDrawer);

const checkoutBtn = document.getElementById("checkoutBtn");
const checkoutModal = document.getElementById("checkoutModal");
const closeCheckoutModal = document.getElementById("closeCheckoutModal");
const confirmPaidBtn = document.getElementById("confirmPaidBtn");
const transferSyntax = document.getElementById("transferSyntax");

if (checkoutBtn) {
  checkoutBtn.addEventListener("click", () => {
    if (cart.length === 0) {
      alert("Giỏ hàng trống!");
      return;
    }
    closeCartDrawer();
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    if (transferSyntax) transferSyntax.innerText = "RESQ" + randomCode;
    if (checkoutModal) checkoutModal.classList.add("active");
    if (overlay) overlay.classList.add("show");
  });
}

if (closeCheckoutModal) {
  closeCheckoutModal.addEventListener("click", () => {
    if (checkoutModal) checkoutModal.classList.remove("active");
    if (overlay) overlay.classList.remove("show");
  });
}

if (confirmPaidBtn) {
  confirmPaidBtn.addEventListener("click", () => {
    if (cart.length === 0) return;

    cart.forEach((cartItem) => {
      const foundProduct = fnbProducts.find((p) => p.id === cartItem.id);
      if (foundProduct) {
        foundProduct.stock -= cartItem.qty;
        if (foundProduct.stock < 0) foundProduct.stock = 0;
      }
    });

    alert(
      "Thanh toán thành công! Đơn hàng đã ghi nhận và số lượng tồn kho đã được cập nhật.",
    );
    cart = [];
    updateCartUI();
    renderShop();

    if (checkoutModal) checkoutModal.classList.remove("active");
    if (overlay) overlay.classList.remove("show");
  });
}

if (overlay) {
  overlay.addEventListener("click", () => {
    closeCartDrawer();
    if (productModal) productModal.classList.remove("active");
    if (checkoutModal) checkoutModal.classList.remove("active");
    if (merchantModal) merchantModal.classList.remove("active");
    if (menu) menu.classList.remove("navbar__open");
    if (menuButton) menuButton.classList.remove("open");
  });
}

// Khởi chạy ứng dụng
renderShop();
updateCartUI();
