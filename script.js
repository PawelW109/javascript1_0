(function () {
  const button = document.getElementById("ex1_button");
  const content = document.getElementById("ex1_content");

  button.addEventListener("click", function (event) {
    let cont = "0";
    for (let n = 1; n <= 9; n++) cont += `, ${n}`;
    content.textContent = cont;
  });
})();
