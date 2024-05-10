/*Search*/
function myFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  if (filter === "") {
    ul.style.display = "none";
    return;
  } else {
    ul.style.display = "block";
  }

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

/*Maps*/
let prevButton = null;

function toggleMap(mapNum, buttonId) {
  const maps = document.getElementsByClassName("map");
  for (let i = 0; i < maps.length; i++) {
    if (i + 1 === mapNum) {
      maps[i].style.display = "block";
    } else {
      maps[i].style.display = "none";
    }
  }
}