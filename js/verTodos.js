// girar ponteiro
  var girarPonteiro = document.querySelector('#ponteiro');
  var cont = document.querySelector('#graphicNumber');
  girarPonteiro.style.transform = "rotate(-90deg)";

  if (cont.textContent <= 0) {
      girarPonteiro.style.transform = "rotate(-90deg)";
  } else if (cont.textContent >= 1 && cont.textContent <= 100) {
      girarPonteiro.style.transform = "rotate(-85deg)";
  } else if (cont.textContent >= 101 && cont.textContent <= 200) {
      girarPonteiro.style.transform = "rotate(-80deg)";
  } else if (cont.textContent >= 201 && cont.textContent <= 300) {
      girarPonteiro.style.transform = "rotate(-61deg)";
  } else if (cont.textContent >= 301 && cont.textContent <= 400) {
      girarPonteiro.style.transform = "rotate(-50deg)";
  } else if (cont.textContent >= 401 && cont.textContent <= 500) {
      girarPonteiro.style.transform = "rotate(-40deg)";
  } else if (cont.textContent >= 501 && cont.textContent <= 1000) {
      girarPonteiro.style.transform = "rotate(-20deg)";
  } else if (cont.textContent >= 1001 && cont.textContent <= 2000) {
      girarPonteiro.style.transform = "rotate(0deg)";
  } else if (cont.textContent >= 2001 && cont.textContent <= 2600) {
      girarPonteiro.style.transform = "rotate(10deg)";
  } else if (cont.textContent >= 2601 && cont.textContent <= 3000) {
      girarPonteiro.style.transform = "rotate(35deg)";
  } else if (cont.textContent >= 3001 && cont.textContent <= 3500) {
      girarPonteiro.style.transform = "rotate(45deg)";
  } else if (cont.textContent >= 3501 && cont.textContent <= 4000) {
      girarPonteiro.style.transform = "rotate(55deg)";
  } else if (cont.textContent >= 4001 && cont.textContent <= 4500) {
      girarPonteiro.style.transform = "rotate(65deg)";
  } else if (cont.textContent >= 4501 && cont.textContent <= 4900) {
      girarPonteiro.style.transform = "rotate(77deg)";
  } else {
      girarPonteiro.style.transform = "rotate(90deg)";
  }
// girar ponteiro


// dropdown ações
var acoesBtn = document.querySelector('.verTodosLineActionsWrapper');
var acoesDropdown = document.querySelector('.verTodosDropdownActionsWrapper');

acoesBtn.onclick = function() {
  if (acoesDropdown.style.display == 'none') {
    acoesDropdown.style.display = 'flex';
  } else {
    acoesDropdown.style.display = 'none';
  }
}

function fecharModal() {
  acoesDropdown.style.display = 'none';
}

// hover sort icons
function sortHov(obj) {
  var sortIcon = obj.getElementsByClassName("sortSvgPath")[0];
  sortIcon.style.fill = 'gray';
}

function sortHovOut(obj) {
  var sortIcon = obj.getElementsByClassName("sortSvgPath")[0];
  sortIcon.style.fill = '#eee2df';
}


// classificar tabelas
function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("myTable");
  switching = true;
  //Set the sorting direction to ascending:
  dir = "asc"; 
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /*check if the two rows should switch place,
      based on the direction, asc or desc:*/
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount ++;      
    } else {
      /*If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}