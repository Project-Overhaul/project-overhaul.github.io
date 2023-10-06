
var curtainisopen;
/* Open */
function toggleNav() {
  if (!curtainisopen) {
  document.getElementsByTagName("cstm-header")[0].shadowRoot.getElementById("mobileNav").style.height = "calc(100% - 47px)";
  curtainisopen = true;
  } else {
    document.getElementsByTagName("cstm-header")[0].shadowRoot.getElementById("mobileNav").style.height = "0%";
    curtainisopen = false;
  }
  
}