const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeMode = document.querySelector(".theme-toggler");

//Open Menu
menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

//Close menu
closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

//Change Theme
themeMode.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");

  themeMode.querySelector("span:nth-child(1)").classList.toggle("active");
  themeMode.querySelector("span:nth-child(2)").classList.toggle("active");
});

Orders.forEach((order) => {
  const tr = document.createElement("tr");
  const trContent = ` 
  <td>${order.productName}</td>
  <td>${order.productNumber}</td>
  <td>${order.paymentStatus}</td>
 
  <td class=""
 >
${order.shipping}
</td>
   <td class="primary">Details</td>

   
   `;

  tr.innerHTML = trContent;
  document.querySelector("table tbody").appendChild(tr);
});
