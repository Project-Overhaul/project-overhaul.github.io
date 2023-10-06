// Welcome to another episode of all your pain in a file
// Just try not to have coding nightmares after this, ok?





class CustomHeader extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
 
        // Create a shadow root
        const shadow = this.attachShadow({
            mode: 'open'
        });

      const wrapper = document.createElement('div');
      
        wrapper.innerHTML = `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"><link rel="stylesheet" href="themes.css"><div class="topnav" id="myTopnav"><a href="#home" class="active">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
  ${this.innerHTML}
  <a href="javascript:void(0);" class="icon" onclick="toggleNav()">
    <i class="fa fa-bars"></i>
  </a>
</div>

    <div id="mobileNav" class="overlay">
      <div class="overlay-content">
        <!--<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>!-->
  <slot></slot>
      </div>
    </div>`
      this.innerHTML = "";
      
      
        // Create some CSS to apply to the shadow dom
        const style = document.createElement('style');

        let styling = `/* Add a black background color to the top navigation */
.topnav {
  background-color: var(--bg-secondary);
  overflow: hidden;
}

/* Style the links inside the navigation bar */
.topnav a {
  float: left;
  display: block;
  color: var(--text-primary);
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

/* Hide the link that should open and close the topnav on small screens */
.topnav .icon {
  display: none;
}

/* When the screen is less than 600 pixels wide, hide all links, except for the first one ("Home"). Show the link that contains should open and close the topnav (.icon) */
@media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {display: none;}
  .topnav a.icon {
    float: right;
    display: block;
  }
}



/* The Overlay (background) */
.overlay {
  /* Height & width depends on how you want to reveal the overlay (see JS below) */    
  height: 0;
  width: 100%;
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 48px;
  background-color: var(--bg-secondary); /* Black fallback color */
  overflow-y: hidden; /* Disable horizontal scroll */
  transition: 0.5s; /* 0.5 second transition effect to slide in or slide down the overlay (height or width, depending on reveal) */
}

/* Position the content inside the overlay */
.overlay-content {
  position: relative;
  top: 25%; /* 25% from the top */
  width: 100%; /* 100% width */
  text-align: center; /* Centered text/links */
  margin-top: 30px; /* 30px top margin to avoid conflict with the close button on smaller screens */
}

/* The navigation links inside the overlay */
.overlay ::slotted(a) {
  padding: 8px;
  text-decoration: none;
  font-size: 36px;
  color: var(--text-primary) !important;
  display: block; /* Display block instead of inline */
  transition: 0.3s; /* Transition effects on hover (color) */
}


@media screen and (max-height: 450px) {
  .overlay ::slotted(a) {font-size: 20px}
}`;
        style.textContent = styling;
 
        // Attach the created elements to the shadow dom
        
        shadow.appendChild(wrapper);
        wrapper.appendChild(style);
        console.log(style.isConnected);
    }
}
 
// Define the new element
customElements.define('cstm-header', CustomHeader);