window.addEventListener("load", onloadFunction);

function onloadFunction() {
  // FONT
  var x = document.getElementById("font_selection");
  var txt = [];
  var i;
  for (i = 0; i < x.length; i++) {
    txt.push(x.options[i].value);
  }
  let fontArray = Array.from(txt);

  // COLOR
  var x = document.getElementById("fontcolor_selection");
  var fcarray = [];
  var i;
  for (i = 0; i < x.length; i++) {
    fcarray.push(x.options[i].value);
  }
  let fontcolorArray = Array.from(fcarray);

  // SHADOW
  var x = document.getElementById("shadow_selection");
  var shcarray = [];
  var i;
  for (i = 0; i < x.length; i++) {
    shcarray.push(x.options[i].value);
  }
  let shadowArray = Array.from(shcarray);

  let log = document.getElementById("text_field");
  log.addEventListener("click", logKey);
  function logKey() {
    log.addEventListener("keyup", getTerm);
    function getTerm() {
      let term = document.getElementById("text_field").value;
      console.log(term);
      let display = document.getElementById("result_field");
      display.innerHTML = term;
    }
  }
  //FONT////////////////////////////////////////////////////////////////////////////////////////
  let font_ = document.querySelector("#font_selection"); // Using a class instead, see note below.
  let ls = localStorage;
  function getfont() {
    setTimeout(() => {
      let rcl = document.querySelector("#result_field").classList;
      rcl = Array.from(rcl);
      rcl.forEach((element) => {
        if (fontArray.includes(element)) {
          document.querySelector("#result_field").classList.remove(element);
        }
      });
    }, 100);

    setTimeout(() => {
      let el = document.forms[0].font_selection.value;
      let rcl = document.querySelector("#result_field");
      rcl.classList.add(el);
    }, 1000);
  }
  font_.onchange = getfont;

  //SHADOW////////////////////////////////////////////////////////////////////////////////////////
  let shd_ = document.querySelector("#shadow_selection"); // Using a class instead, see note below.
  function getshadow() {
    setTimeout(() => {
      let rcl = document.querySelector("#result_field").classList;
      rcl = Array.from(rcl);
      rcl.forEach((element) => {
        if (shadowArray.includes(element)) {
          document.querySelector("#result_field").classList.remove(element);
        }
      });
    }, 100);

    setTimeout(() => {
      let el = document.forms[1].shadow_selection.value;
      let rcl = document.querySelector("#result_field");
      rcl.classList.add(el);
    }, 500);
  }
  shd_.onchange = getshadow;
  //FONT COLOR////////////////////////////////////////////////////////////////////////////////////////
  let fnc_ = document.querySelector("#fontcolor_selection"); // Using a class instead, see note below.
  function getfontcolor() {
    setTimeout(() => {
      let rcl = document.querySelector("#result_field").classList;
      rcl = Array.from(rcl);
      rcl.forEach((element) => {
        if (fontcolorArray.includes(element)) {
          document.querySelector("#result_field").classList.remove(element);
        }
      });
    }, 100);

    setTimeout(() => {
      let el = document.forms[2].fontcolor_selection.value;
      let rcl = document.querySelector("#result_field");
      rcl.classList.add(el);
    }, 500);
  }
  fnc_.onchange = getfontcolor;

  // RESET ALL STYLES
  function restFunction() {
    document.getElementById("fontcolor_selection").selectedIndex = 0;
    document.getElementById("shadow_selection").selectedIndex = 0;
    document.getElementById("font_selection").selectedIndex = 0;
    document.getElementById("result_field").className = "form-control";
    fn_.selectedIndex = 0;
    styleSelect.selectedIndex = 0;
    fontColor.selectedIndex = 0;
  }
}
