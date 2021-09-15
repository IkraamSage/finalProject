fetch("https://sage-automation.herokuapp.com/view/")
  .then((response) => response.json())
  .then((data) => {
    let gamingPhones = data.data;
    console.log(gamingPhones);
    gamingPhones.forEach((phone) => {
      let productContainer = document.querySelector(".project-container");
      productContainer.innerHTML += `
        <div class="product-card">
          <h1 class="title">${phone[1]}</h1>
          <img src="${phone[2]}" alt="images" />
          <p class="category">${phone[5]}</p>
          <p class="price">${phone[4]}</p>
          <p class="description">${phone[3]}</p>
        </div>
          `;
    });
  });
