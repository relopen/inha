function getCategory() {
  category = {};
  a = document.querySelectorAll("#content-category > div > div");
  a.forEach((el) => {
    elTitle = el.querySelector(".category-title");
    elSubCategories = el.querySelectorAll(".sub-category-container");

    c = { title: el.innerText, sub: {} };

    elSubCategories.forEach((el2) => {
      elSub = el2.querySelector(".sub-category-title");
      sub = { title: elSub.innerText, sub: {} };

      elSubSub = el2.querySelectorAll(".sub");
      elSubSub.forEach((el3) => {
        sub.sub[el3.getAttribute("value")] = el3.innerText;
      });

      if (Object.keys(sub.sub).length === 0) {
        delete sub.sub;
      }

      c.sub[elSub.getAttribute("value")] = sub;
    });

    if (Object.keys(c.sub).length === 0) {
      delete c.sub;
    }
    category[elTitle.getAttribute("value")] = c;
  });
  return category;
}
