// Varibals
let input = document.querySelector(`input`); // Input
let allBtns = document.querySelectorAll(`.buttons button`); // btns
let result = document.querySelector(`.results > span`); // Result

allBtns.forEach((btn) => {
  // Check
  btn.addEventListener(`click`, (e) => {
    btn.classList.contains(`check`) ? check() : null;
  });

  // Add
  btn.addEventListener(`click`, (e) => {
    btn.classList.contains(`add`) ? add() : null;
  });
  // Delete
  btn.addEventListener(`click`, (e) => {
    btn.classList.contains(`delete`) ? del() : null;
  });
  // Show
  btn.addEventListener(`click`, (e) => {
    btn.classList.contains(`show`) ? show() : null;
  });
});

//Empty input
let noInput = () => (result.innerHTML = `Input can't be empty`);

// check Func
let check = () => {
  input.value == ``
    ? noInput()
    : localStorage.getItem(input.value)
    ? (result.innerHTML = `<span>${input.value}</span> Exist`)
    : (result.innerHTML = `<span>${input.value}</span> Not exist`);
};

// Add Func
let add = () => {
  if (input.value !== ``) {
    result.innerHTML = `<span>${input.value}</span> Added`;
    localStorage.setItem(input.value, `test`);
    input.value == ``;
  } else {
    noInput();
  }
};

// Delete Func
let del = () => {
  if (input.value !== ``) {
    if (localStorage.getItem(input.value)) {
      localStorage.removeItem(input.value);
      result.innerHTML = `<span>${input.value}</span> Deleted`;
    } else {
      result.innerHTML = `<span>${input.value}</span> Not found`;
    }
  } else {
    noInput();
  }
};

// Show Func
let show = () => {
  if (localStorage.length) {
    result.innerHTML = ``;
    for (let [key, value] of Object.entries(localStorage)) {
      result.innerHTML += `<span>${key}</span> - `;
    }
  } else {
    result.innerHTML = `There's no items`;
  }
};
