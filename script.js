// Dropdown Menu
var dropdown = document.querySelectorAll('.dropdown1');
var dropdownArray = Array.prototype.slice.call(dropdown,0);
dropdownArray.forEach(function(el){
	var button = el.querySelector('a[data-toggle="dropdown"]'),
			menu = el.querySelector('.dropdown-menu1'),
			arrow = button.querySelector('i.icon-arrow');

	button.onclick = function(event) {
		if(!menu.hasClass('show')) {
			menu.classList.add('show');
			menu.classList.remove('hide');
			arrow.classList.add('open');
			arrow.classList.remove('close');
			event.preventDefault();
		}
		else {
			menu.classList.remove('show');
			menu.classList.add('hide');
			arrow.classList.remove('open');
			arrow.classList.add('close');
			event.preventDefault();
		}
	};
})

Element.prototype.hasClass = function(className) {
    return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
};


// dropdown search

function dropdownSearch() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }

//   function activebrand() {
//     var x = document.getElementById("mydiv");
//     if (x.style.display === "block") {
//       x.style.display = "none";
//     } else {
//       x.style.display = "block";
//     }
//   }

function activeBtn() {
    var x = document.getElementById("myDIV");
    var a = document.getElementById("mydiv");
    if (x.style.display === "block") {
      x.style.display = "none";
      a.style.display = "block";
    } else {
      x.style.display = "block";
      a.style.display = "none";

    }
  }

  function activeDropdown() {
    var y = document.getElementById("myDIV2");
    var a = document.getElementById("mydiv");
    if (y.style.display === "block") {
      y.style.display = "none";
      a.style.display = "block";
    } else {
      y.style.display = "block";
      a.style.display = "none";
    }
  }

  function activetoggle() {
    var y = document.getElementById("myDIV3");
    var a = document.getElementById("mydiv");
    if (y.style.display === "block") {
      y.style.display = "none";
      a.style.display = "block";
    } else {
      y.style.display = "block";
      a.style.display = "none";
    }
  }

  function activeCheck() {
    var y = document.getElementById("myDIV4");
    var a = document.getElementById("mydiv");
    if (y.style.display === "block") {
      y.style.display = "none";
      a.style.display = "block";
    } else {
      y.style.display = "block";
      a.style.display = "none";
    }
  }

  function activeRadio() {
    var y = document.getElementById("myDIV5");
    var a = document.getElementById("mydiv");
    if (y.style.display === "block") {
      y.style.display = "none";
      a.style.display = "block";
    } else {
      y.style.display = "block";
      a.style.display = "none";
    }
  }

  function activeForms() {
    var y = document.getElementById("myDIV6");
    var a = document.getElementById("mydiv");
    if (y.style.display === "block") {
      y.style.display = "none";
      a.style.display = "block";
    } else {
      y.style.display = "block";
      a.style.display = "none";
    }
  }

  function activeMenu() {
    var y = document.getElementById("myDIV7");
    var a = document.getElementById("mydiv");
    if (y.style.display === "block") {
      y.style.display = "none";
      a.style.display = "block";
    } else {
      y.style.display = "block";
      a.style.display = "none";
    }
  }

  function activeSearch() {
    var y = document.getElementById("myDIV8");
    var a = document.getElementById("mydiv");
    if (y.style.display === "block") {
      y.style.display = "none";
      a.style.display = "block";
    } else {
      y.style.display = "block";
      a.style.display = "none";
    }
  }

  function activePagination() {
    var y = document.getElementById("myDIV9");
    var a = document.getElementById("mydiv");
    if (y.style.display === "block") {
      y.style.display = "none";
      a.style.display = "block";
    } else {
      y.style.display = "block";
      a.style.display = "none";
    }
  }

  function activeSlider() {
    var y = document.getElementById("myDIV10");
    var a = document.getElementById("mydiv");
    if (y.style.display === "block") {
      y.style.display = "none";
      a.style.display = "block";
    } else {
      y.style.display = "block";
      a.style.display = "none";
    }
  }