function checkText(text) {
  for (let i = 0; i < text.length; i++) {
    let c = text[i];
    if (c >= "A" && c <= "z") return 1;
    if (c < "0" || c > "9") return 2;
  }
  return 0;
}

(function () {
  const button = document.getElementById("ex1_button");
  const content = document.getElementById("ex1_content");

  button.addEventListener("click", function (event) {
    let cont = "0";
    for (let n = 1; n <= 9; n++) cont += `, ${n}`;
    content.textContent = cont;
  });

  const textNum = document.getElementById("ex2_text");
  const contentNum = document.getElementById("ex2_content");
  textNum.addEventListener("input", function (event) {
    let cont = "";
    let text = textNum.value;
    let check = checkText(text);
    if (check == 1) cont = "Numer nie może zawierać liter";
    if (check == 2) cont = "Numer nie może zawierać znaków specjalnych";
    if (check == 0) {
      if (text.length != 9) cont = "Długość numeru musi być równa 9";
      else cont = "Numer telefonu jest poprawny";
    }
    contentNum.textContent = cont;
  });
})();
