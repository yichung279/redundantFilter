const targetList = ["console.log", "eslint-disable"];
const isTarget = (row) => {
  for (let target of targetList) {
    if (row.innerHTML.includes(target)) return true;
  }
  return false;
};

const hightLightElements = () => {
  const rows = document.getElementsByClassName("diff-line");
  for (let row of rows) {
    if (isTarget(row)) {
      row.style.backgroundColor = "pink";
    }
  }
};

document.addEventListener("DOMSubtreeModified", function (event) {
  hightLightElements();
});
