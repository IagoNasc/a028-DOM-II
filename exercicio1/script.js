/* function addElement(){
    const newLi = document.createElement('li');
    const newLiContent = document.createTextNode("Item 0");
    newLi.appendChild(newLiContent);
    const currentLi = document.getElementById("lista")
    currentLi.insertAdjacentElement('afterbegin', newLi);
}

addElement() */

const addElement = () => {
  const lista = document.getElementById("lista");

  const item0 = document.createElement("li");
  item0.innerHTML = "Item 0";
  lista.insertAdjacentElement('afterbegin', item0);

  const item5 = document.createElement("li");
  lista.appendChild(item5);
  item5.innerHTML = "item 5";

/*   const item5 = document.createElement("li");
  item5.innerHTML = "Item 5";
  lista.insertAdjacentElement("beforeend", item5); */
};

addElement()
