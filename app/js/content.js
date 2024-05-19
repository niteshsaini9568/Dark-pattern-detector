

// -------------------------------Making the function to make HTMl --------------------------
 function createDynamicHTML() {
  // Create the main container div
  let mainDiv = document.createElement('div');
  mainDiv.classList.add('maindiv');

  // Array of symbols 
  var symbols = ['<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 48 48"><path fill="none" stroke="#eff6c0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.15" d="M22 43c-4.726-1.767-8.667-7.815-10.64-11.357c-.852-1.53-.403-3.408.964-4.502a3.83 3.83 0 0 1 5.1.283L19 29V17.5a2.5 2.5 0 0 1 5 0v6a2.5 2.5 0 0 1 5 0v2a2.5 2.5 0 0 1 5 0v2a2.5 2.5 0 0 1 5 0v7.868c0 1.07-.265 2.128-.882 3.003C37.095 39.82 35.256 42.034 33 43c-3.5 1.5-6.63 1.634-11 0m7-31a8 8 0 1 0-15.748 2m0 0c.088.343.199.677.33 1z"/></svg>'
  , '<svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 16 16"><path fill="white" fill-rule="evenodd" d="M11.096.644a2 2 0 0 1 2.791.036l1.433 1.433a2 2 0 0 1 .035 2.791l-.413.435l-8.07 8.995a.5.5 0 0 1-.372.166h-3a.5.5 0 0 1-.234-.058l-.412.412A.5.5 0 0 1 2.5 15h-2a.5.5 0 0 1-.354-.854l1.412-1.412A.5.5 0 0 1 1.5 12.5v-3a.5.5 0 0 1 .166-.372l8.995-8.07zm-.115 1.47L2.727 9.52l3.753 3.753l7.406-8.254zm3.585 2.17l.064-.068a1 1 0 0 0-.017-1.396L13.18 1.387a1 1 0 0 0-1.396-.018l-.068.065zM5.293 13.5L2.5 10.707v1.586L3.707 13.5z"/></svg>'
  , '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><path fill="white" fill-rule="evenodd" d="M8 14v-4h1v4h5V5h1v9a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2h1v2zm4.853-10.146l-2.999 3a1.5 1.5 0 0 1-2.538 1.568l-2.714.904L4 9.527a1.5 1.5 0 1 1-.316-.948L7 7.473a1.5 1.5 0 0 1 2.146-1.327l3-3a1.5 1.5 0 1 1 .707.707"/></svg>'
  , '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="white" d="M30 15a6 6 0 1 0-10 4.46V29l4-1.884L28 29v-9.54A5.98 5.98 0 0 0 30 15m-4 10.848l-2-.942l-2 .942V20.65a5.888 5.888 0 0 0 4 0ZM24 19a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4"/><path fill="white" d="M14 2a6.007 6.007 0 0 0-6 6v6H6a2.002 2.002 0 0 0-2 2v12a2.002 2.002 0 0 0 2 2h11v-2H6V16h9v-2h-5V8a4 4 0 0 1 7.92-.8l1.96-.4A6.017 6.017 0 0 0 14 2"/></svg>'
  , '<svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 512 512"><path fill="white" d="M258.594 24.875c-73.387 0-122.254 46.017-120.594 98.375c.417 13.16 3.075 26.14 8.313 38.03c16.764 23.135 48.402 34.675 73.843 37.064l-47.72 6.937l-13.092 32.814c7.57 7.656 15.72 14.35 24.312 20.062l11.688-41.53l17.97 5.03l-12.94 46.125a150.144 150.144 0 0 0 32.095 11.533l3.936-46.063l18.625 1.594l-4.093 47.625c11.22 1.202 22.543 1.17 33.75-.158l-4.125-47.468l18.594-1.625l4 45.718a150.425 150.425 0 0 0 29.438-10.657L319.5 221.657l17.97-5.03l11.874 42.155a153.795 153.795 0 0 0 22.03-17.5l-15.968-36.436l-44.72-6.5c24.866-2.334 55.656-13.404 72.69-35.5c6.22-13.203 8.7-27.83 7.874-43.53c-2.973-56.486-59.27-94.44-132.656-94.44zm-74.156 82.75c17.97 24.493 35.356 31.6 63.062 34.75c-34.05 58.587-110.778 10.01-63.063-34.75zm168.03 0c47.716 44.76-29.01 93.337-63.062 34.75c27.706-3.15 45.094-10.257 63.063-34.75zm-84.53 45.656l23.03 53.72c-11.685 7.06-33.11 7-44.406 1.938l21.375-55.657zm95.593 118.407c-55.816 38.673-129.347 40.137-186.5 4.375l.97 219.625h18.688v-.187c8.22-40.85 36.346-34.88 45.5.188h20.562V417.03c5.387-68.955 34.254-62.802 38.875-13.717v92.375h18.688v-74.032c4.78-29.54 24.89-62.024 33.343 5.594zm-52.874 44.875c7.31 0 14.594 7.55 14.594 18.782c0 11.23-7.283 18.78-14.594 18.78c-7.31 0-14.625-7.55-14.625-18.78s7.316-18.78 14.626-18.78zm-82.094 8.657c4.173 0 9.164 3.062 13.688 10.81c4.524 7.75 7.72 19.454 7.72 32.533c0 13.078-3.196 24.813-7.72 32.562c-4.524 7.75-9.515 10.813-13.688 10.813c-4.172 0-9.163-3.064-13.687-10.813c-4.524-7.75-7.75-19.484-7.75-32.563c0-13.078 3.226-24.78 7.75-32.53s9.515-10.813 13.688-10.813z"/></svg>'
  , '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 2048 2048"><path fill="#ffffff" d="m910 1664l-64 128H256V0h1536v1179l-128-256V128H384v1536zM640 896H512V768h128zm654 0H768V768h590zm-782 256h128v128H512zm256 0h398l-64 128H768zM640 512H512V384h128zm896 0H768V384h768zm0 896v320h-128v-320zm-128 384h128v128h-128zm640 256H896l576-1152zm-971-112h790l-395-790z"/></svg>'
  , '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><path fill="white" d="M9.5 1A1.5 1.5 0 0 0 8 2.5v2a1.5 1.5 0 0 0 1 1.414V7a.5.5 0 0 0 .82.384L11.48 6h2.02A1.5 1.5 0 0 0 15 4.5v-2A1.5 1.5 0 0 0 13.5 1zM9 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2.2a.5.5 0 0 0-.32.116l-.98.816V5.5a.5.5 0 0 0-.5-.5a.5.5 0 0 1-.5-.5zM3 6a2 2 0 1 1 4 0a2 2 0 0 1-4 0m2-1a1 1 0 1 0 0 2a1 1 0 0 0 0-2M2.5 9h5A1.5 1.5 0 0 1 9 10.5c0 1.116-.459 2.01-1.212 2.615C7.047 13.71 6.053 14 5 14c-1.053 0-2.047-.29-2.788-.885C1.46 12.51 1 11.616 1 10.5A1.5 1.5 0 0 1 2.5 9m5 1h-5a.5.5 0 0 0-.5.5c0 .817.325 1.423.838 1.835C3.364 12.757 4.12 13 5 13c.88 0 1.636-.243 2.162-.665c.513-.412.838-1.018.838-1.835a.5.5 0 0 0-.5-.5"/></svg>']
  // Loop through symbols and create div elements
  for (var i = 0; i < symbols.length; i++) {
      var div = document.createElement('div');

      // Add specific class based on position
      switch (i) {
          case 0:
              div.classList.add('one');
              break;
          case 1:
              div.classList.add('two', 'styles');
              break;
          case 2:
              div.classList.add('three', 'styles');
              break;
          case 3:
              div.classList.add('four', 'styles');
              break;
          case 4:
              div.classList.add('five', 'styles');
              break;
          case 5:
              div.classList.add('six', 'styles');
              break;
          case 6:
              div.classList.add('seven', 'styles');
              break;
          default:
              break;
      }

      var span = document.createElement('span');
      span.innerHTML = `${symbols[i]}`;

      div.appendChild(span);

      mainDiv.appendChild(div);
  }

  // Append the mainDiv to the body
  document.body.appendChild(mainDiv);
}

// Call the function to create the dynamic HTML
createDynamicHTML();

//---------------------------------Making the Visibility funtion on Click  ------------------------------


let mainButton = document.querySelector(".one");
let icons = document.querySelectorAll(".styles"); // Corrected class name

function delay(ms) {
  return new Promise((resolve, reject) => setTimeout(resolve, ms));
}

async function showIcons() {
  let mainButton = document.querySelector(".one"); 
  mainButton.style.backgroundColor = "#990000";
  mainButton.style.backgroundImage = "linear-gradient(147deg, #990000 0%, #ff0000 74%)"
  mainButton.style.Color = "#000000";
  mainButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 21 21"><g fill="none" fill-rule="evenodd" stroke="white" stroke-linecap="round" stroke-linejoin="round" transform="translate(2 2)"><circle cx="8.5" cy="8.5" r="8"/><path d="m5.5 5.5l6 6m0-6l-6 6"/></g></svg>'
  for (const icon of icons) {
      icon.style.visibility = "visible";
      await delay(75);
  }
}

async function hideIcons() {
  let mainButton = document.querySelector(".one"); 
  mainButton.style.backgroundColor = " #000000";
  mainButton.style.backgroundImage = "linear-gradient(315deg, #000000 0%, #060363 74%)"
  mainButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 48 48"><path fill="none" stroke="#eff6c0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.15" d="M22 43c-4.726-1.767-8.667-7.815-10.64-11.357c-.852-1.53-.403-3.408.964-4.502a3.83 3.83 0 0 1 5.1.283L19 29V17.5a2.5 2.5 0 0 1 5 0v6a2.5 2.5 0 0 1 5 0v2a2.5 2.5 0 0 1 5 0v2a2.5 2.5 0 0 1 5 0v7.868c0 1.07-.265 2.128-.882 3.003C37.095 39.82 35.256 42.034 33 43c-3.5 1.5-6.63 1.634-11 0m7-31a8 8 0 1 0-15.748 2m0 0c.088.343.199.677.33 1z"/></svg>';
  for (let i = icons.length - 1; i >= 0; i--) {
      icons[i].style.visibility = "hidden";
      await delay(75);
  }
}

async function toggleIconsVisibility() {
  // Check the visibility of the first icon to determine the current state
  const currentState = icons[0].style.visibility === "visible" ? "visible" : "hidden";

  if (currentState === "visible") {
      await hideIcons();
  } else {
      await showIcons();
  }
}

mainButton.addEventListener("click", toggleIconsVisibility); // Changed event from "dblclick" to "click"

//------------------------------------------Making the Draggable Function----------------------

let mainDiv = document.querySelector(".maindiv");
let isDraggable = false;

// Function to enable dragging when double-clicked
function enableDragging() {
  isDraggable = true;
  mainDiv.style.position = "absolute";
}

// Disable dragging and fix the mainDiv the bottom right
function disableDragging() {
  isDraggable = false;
  mainDiv.style.position = "fixed";
  mainDiv.style.bottom = "10px";
  mainDiv.style.right = "10px";
}

// Dragging behavior only when enabled
function dragElement(elmnt) {
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

  function dragMouseDown(e) {
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }

  elmnt.onmousedown = dragMouseDown;
}

// Initially position the mainDiv to the bottom right
disableDragging();

// Add event listener for double-click
mainDiv.ondblclick = enableDragging;

// Add event listener for right arrow key
document.addEventListener("keydown", function(event) {
  if (event.key === "ArrowRight" && !isDraggable) {
    enableDragging();
  }
});

// Add event listener for keyup to disable draggable mode when a key is released
document.addEventListener("keyup", function(event) {
  if (event.key === "ArrowRight") {
    disableDragging();
  }
});

dragElement(mainDiv); 

//-----------------------------Making the program for reporting--------------------------

let reportingButton = document.querySelector(".six");
reportingButton.addEventListener("click", redirectToReporting);

function redirectToReporting() {
  window.open("http://localhost:8080/reporting","_blank");
}

//-----------------------------Making the program for rating-----------------------------

let ratingButton = document.querySelector(".seven");
ratingButton.addEventListener('click', displayRatingForm);
function displayRatingForm(){
    window.open("http://localhost:8080/rating","_blank");
}
// -----------------------------------Making the function for Data breach ---------------------

let dataBreach = document.querySelector(".five");
dataBreach.addEventListener('click', displayDatabreachForm);
function displayDatabreachForm(){
    window.open("http://localhost:8080/data-breach","_blank");
}

//-----------------------------------making Count Function--------------------------------------

let count = () => {
  const content = `
  <div class="container hidden" id="container">
      <div class="main">
          <div class="slider">
              <h1 style="color: #fd3838; text-align: center;">Attention</h1> 
              <div class="slider-content">
                  <div class="item active"><h1>Sneaking</h1><p>Sneaky dark patterns in e-commerce websites <br> manipulate user behavior through subtle design <br> tactics, often exploiting psychological vulnerabilities. <br> They hide fees, create false urgency, <br> and steer users towards company benefits. <br> Recognizing and resisting these manipulations is <br> crucial for informed and empowered consumer <br> decision-making in the online marketplace. <br> By promoting transparency and ethical practices, <br> we can foster trust and fairness online.</p></div>
                  <div class="item"><h1>Urgency</h1><p>The Urgency dark pattern in e-commerce nudges<br>users to make quick decisions by creating<br>a false sense of urgency. Phrases like<br>"Limited time offer" or "Only X left"<br>instill a fear of missing out,<br>leading to impulsive purchases. This technique<br>exploits psychological triggers, pressuring users<br>to buy without careful consideration.<br>It can manipulate emotions and cloud<br>rational judgment, ultimately benefiting the<br>seller at the expense of the consumer.<br>However, transparency and honesty in marketing<br>build trust and foster long-term relationships.<br></div>
                  <div class="item"><h1>Misdirection</h1><p>Misdirection dark patterns in e-commerce websites <br> are designed to steer users towards actions they didn't intend. <br> They often employ tactics like hidden checkboxes <br> or misleading button placement to manipulate <br> users into unwanted purchases or subscriptions. <br> These patterns exploit human psychology <br> and undermine user autonomy and trust. <br> Businesses employing such practices risk <br> damaging their reputation and losing <br> customer loyalty in the long run.</p></div>
                  <div class="item"><h1>Social Proof</h1><p>Social proof dark pattern in e-commerce websites <br> exploits human psychology to influence buying decisions. <br> It often displays fake notifications or reviews, <br> creating a sense of urgency and trust. <br> However, these tactics can deceive consumers, <br> leading to regrettable purchases and eroding trust. <br> E-commerce platforms should prioritize transparency <br> and authenticity over manipulative tactics. <br> Building genuine relationships with customers fosters loyalty <br> and long-term success in the online marketplace.</p></div>
                  <div class="item"><h1>Scarcity</h1>The Scarcity dark pattern in e-commerce websites exploits <br> the fear of missing out (FOMO) to <br> manipulate customers into making hurried purchases. <br> By displaying limited stock or countdown timers, <br> it creates a sense of urgency, urging <br> users to buy quickly before the <br> item runs out. This tactic can lead <br> to impulse buying and regretful purchases <br> as customers feel pressured to act fast.</div>
                  <div class="item"><h1>Obstruction</h1><p>The Obstruction dark pattern in e-commerce sites <br> introduces barriers to hinder users' actions. <br> These barriers can include excessive form fields, <br> confusing navigation, or hidden information, <br> making it difficult for customers to <br> complete tasks like checkout or finding <br> product details. Such obstacles frustrate users, <br> potentially leading to abandoned carts and <br> decreased customer satisfaction. This tactic prioritizes <br> the website's goals over the user's experience.</p></div>
                  <div class="item"><h1>Forced Action</h1><p>The Forced Action dark pattern in e-commerce <br> websites compels users into unwanted actions. <br> This may include automatically adding items <br> to carts, difficult-to-find opt-out options, <br> or misleading checkboxes during checkout processes. <br> Users feel pressured or tricked into <br> taking actions they didn't intend to, <br> leading to frustration and mistrust. Such <br> tactics prioritize the website's objectives over <br> the user's autonomy and can damage <br> the relationship between the site and <br> its customers.</p></div>
              </div>
              <div class="arrow left" id="leftArrow">&#8592;</div>
              <div class="arrow right" id="rightArrow">&#8594;</div>
              <div class="links">
                  <a href="https://en.wikipedia.org/wiki/Dark_pattern">Dark pattern ?</a>
              </div>
          </div>
          <div>
              <h2>Comprehensive Overview of Dark Patterns in UX Design</h2>
              <p>A plethora of significant dark patterns have been discerned by the tool.</p>
              <ul>
                  <li class="item1 active">1-&nbsp;Sneaking&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>${categoriesCount.Sneaking}</span></li>
                  <li class="item2">2-&nbsp;Urgency&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>${categoriesCount.Urgency}</span></li>
                  <li class="item3">3-&nbsp;Misdirection&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>${categoriesCount.Misdirection}</span></li>
                  <li class="item4">4-&nbsp;Social Proof&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>${categoriesCount["Social Proof"]}</span></li>
                  <li class="item5">5-&nbsp;Scarcity&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>${categoriesCount.Scarcity}</span></li>
                  <li class="item6">6-&nbsp;Obstruction&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>${categoriesCount.Obstruction}</span></li>
                  <li class="item7">7-&nbsp;Forced Action&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>${categoriesCount["Forced Action"]}</span></li>
              </ul>
          </div>
      </div>
  </div>
  `;

  let count_container = document.createElement('DIV');
  count_container.innerHTML = content;
  document.body.appendChild(count_container);


  // Attach content to the container
  let currentIndex = 0;
  const totalItems = document.querySelectorAll('.slider-content .item').length;

  function slide(direction) {
      // Hide all items
      document.querySelectorAll('.slider-content .item').forEach(item => {
          item.classList.remove('active');
      });

      // Calculate the new index
      currentIndex = (currentIndex + direction + totalItems) % totalItems;

      // Show only the active item
      document.querySelector('.slider-content .item:nth-child(' + (currentIndex + 1) + ')').classList.add('active');

      // Update the active item in the list
      document.querySelector('.main ul li.active').classList.remove('active');
      document.querySelector('.main ul li.item' + (currentIndex + 1)).classList.add('active');
  }

  function showItem(index) {
      currentIndex = index;
      document.querySelectorAll('.slider-content .item').forEach(item => {
          item.classList.remove('active');
      });
      document.querySelector('.slider-content .item:nth-child(' + (index + 1) + ')').classList.add('active');
      document.querySelector('.main ul li.active').classList.remove('active');
      document.querySelector('.main ul li.item' + (index + 1)).classList.add('active');
  }

  // Event listener for arrow key navigation
  document.addEventListener('keydown', function(event) {
      if (event.key === 'ArrowLeft') { // Left arrow key
          slide(-1);
      } else if (event.key === 'ArrowRight') { // Right arrow key
          slide(1);
      }
  });

  // Event listeners for item clicks
  document.querySelectorAll('.main ul li').forEach((item, index) => {
      item.addEventListener('click', function() {
          showItem(index);
      });
  });

  // Event listeners for arrow clicks
  document.getElementById('leftArrow').addEventListener('click', function() {
      slide(-1);
  });

  document.getElementById('rightArrow').addEventListener('click', function() {
      slide(1);
  });

  const dynamicCSS = `
  .container {
      width: 100%;
      max-width: 1000px;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 60px; /* Space for links */
  }
  .hidden {
      display: none;
  }

  .main {
      width: 98%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-top: 40px;
      text-align: center;
      font-family: sans-serif;
      background-color : white;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      border-radius: 30px;
  }

  .main > div {
      width: calc(50%);
      background-color: #ffffff;
      padding: 20px;
      box-sizing: border-box;
      border-radius: 30px;
      position: relative; /* Add position relative */
  }

  .slider {
      overflow: hidden;
      position: relative;
      border-radius: 30px;
  }

  .slider-content {
      display: flex;
      flex-wrap: wrap;
      justify-content: center; /* Center the items horizontally */
      text-align: center;
      transition: all 0.5s ease;
  }

  .item {
      min-width: calc(100% / 7);
      flex-shrink: 0;
      display: none; /* Initially hide all items */
  }

  .item.active {
      display: block; /* Show only the active item */
  }

  .arrow {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
      font-size: 24px;
      color: #fe8a39;
  }

  .arrow.left {
      left: 10px;
  }

  .arrow.right {
      right: 10px;
  }

  ul {
      list-style-type: none;
      padding: 0;
  }

  ul li {
      padding: 10px;
      cursor: pointer;
  }

  ul li.active {
      background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%);
      padding: 15px 35px;
      border-radius: 50px;
      color: #fff;
      box-shadow: 0px 14px 80px rgba(252, 56, 56, 0.4);
      text-decoration: none;
      font-weight: 500;
      justify-content: center;
      text-align: center;
      letter-spacing: 1px;
  }

  .links {
      position: absolute;
      bottom: 0;
      left: 40px;
      margin-bottom: 20px;
      margin-right: 20px;
  }

  .links a {
      display: inline-flex;
      background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%);
      padding: 15px 35px;
      border-radius: 50px;
      color: #fff;
      box-shadow: 0px 14px 80px rgba(252, 56, 56, 0.4);
      text-decoration: none;
      font-weight: 500;
      justify-content: center;
      text-align: center;
      letter-spacing: 1px;
  }
  `;

  const style = document.createElement('style');
  style.textContent = dynamicCSS;
  document.head.appendChild(style);

  //Adding event listener to toggle visibility
 
}

// ---------------------------------------Main WebScrapping Program----------------------


const endpoint = "http:/127.0.0.1:5000/";
const descriptions = {
  "Sneaking": "ATTENTION : Manipulates user behavior through obscured information, coercing actions contrary to their natural inclinations.",
  "Urgency":"ATTENTION : Imposes artificial deadlines to heighten desirability.",
  "Misdirection":"ATTENTION : Guides users towards one choice while diverting attention from alternatives.",
  "Social Proof":"ATTENTION : Creates the illusion of approval from others for actions or products.",
  "Scarcity":"ATTENTION : Enhances perceived value by presenting items as limited in availability.",
  "Obstruction":"ATTENTION : Adds barriers to make actions less convenient and discourage users.",
  "Forced Action":"ATTENTION : Compels users to perform unnecessary tasks alongside intended actions.",
};
const categoriesCount = {
  'Urgency': 0,
  'Misdirection': 0,
  'Social Proof': 0,
  'Scarcity': 0,
  'Obstruction': 0,
  'Forced Action': 0,
  'Sneaking': 0
};

function scrape() {
 // website has already been analyzed
  if (document.getElementById("insite_count")) {
    return;
  }

  // aggregate all DOM elements on the page
  let elements = segments(document.body);
  let filtered_elements = [];

  for (let i = 0; i < elements.length; i++) {
    let text = elements[i].innerText.trim().replace(/\t/g, " ");
    if (text.length == 0) {
      continue;
    }
    filtered_elements.push(text);
  }

  // post to the web server
  fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ tokens: filtered_elements }),
  })
    .then((resp) => resp.json())
    .then((data) => {
      
      
      data = data.replace(/'/g, '"');
      json = JSON.parse(data);
      let dp_count = 0;
      let element_index = 0;
      for (let i = 0; i < elements.length; i++) {
        let text = elements[i].innerText.trim().replace(/\t/g, " ");
        if (text.length == 0) {
          continue;
        }

        if (json.result[i] !== undefined) { // Check if the type is not undefined
          highlight(elements[element_index], json.result[i]);
          dp_count++;
        } else {
          removeHighlight(elements[element_index]); // Remove the highlight if the type is undefined
        }
        element_index++;
      }

      // store number of dark patterns
      let g = document.createElement("div");
      g.id = "insite_count";
      g.value = dp_count;
      g.style.opacity = 0;
      g.style.position = "fixed";
      document.body.appendChild(g);
      sendDarkPatterns(g.value);

      for (let i = 0; i < json.result.length; i++) {
        const category = json.result[i];
        if (categoriesCount.hasOwnProperty(category)) {
            categoriesCount[category]++;
        }
      }

    count();
    document.querySelector('.three').addEventListener('click', function() {
    const container = document.getElementById('container');
    container.classList.toggle('hidden');
    });

    

    })
    .catch((error) => {
      alert(error);
      alert(error.stack);
    });
}



function removeHighlight(element) {
  if (element.classList.contains("insite-highlight")) {
    element.classList.remove("insite-highlight");
    // Remove the modal-like structure
    if (element.lastChild.classList.contains("insite-highlight-body")) {
      element.removeChild(element.lastChild);
    }
  }
}
function highlight(element, type) {
  const darkPatternTypes = ["Sneaking", "Urgency", "Misdirection", "Social Proof", "Scarcity", "Obstruction"];

  if (darkPatternTypes.includes(type)) {
    element.classList.add("insite-highlight");

    let body = document.createElement("span");
    body.classList.add("insite-highlight-body");

    /* header */
    let header = document.createElement("div");
    header.classList.add("modal-header");
    let headerText = document.createElement("h1");
    headerText.innerHTML = type + " Pattern";
    header.appendChild(headerText);
    body.appendChild(header);

    /* content */
    let content = document.createElement("div");
    content.classList.add("modal-content");
    content.innerHTML = descriptions[type];
    body.appendChild(content);

    element.appendChild(body);
  }
}

function sendDarkPatterns(number) {
  chrome.runtime.sendMessage({
    message: "update_current_count",
    count: number,
  });
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === "analyze_site") {
    scrape();
  } else if (request.message === "popup_open") {
    let element = document.getElementById("insite_count");
    if (element) {
      sendDarkPatterns(element.value);
    }
  }
});

let isScraped = false;
document.body.querySelector(".two").onclick = function () {
    if (!isScraped) {
        scrape();
        isScraped = true; // Set the flag to true after the function is executed
    } else {
        removeHighlights(); // Function to remove the highlights
        isScraped = false; // Reset the flag to false
    }
};

function removeHighlights() {
    const highlightedElements = document.querySelectorAll('.insite-highlight');
    highlightedElements.forEach(element => {
        element.classList.remove('insite-highlight');
        // Remove the modal-like structure
        if (element.lastChild.classList.contains('insite-highlight-body')) {
            element.removeChild(element.lastChild);
        }
    });

    // Remove the hidden count div
    const countElement = document.getElementById('insite_count');
    if (countElement) {
        countElement.remove();
    }
}

//---------------------------------------API for Terms and Condition---------------------------

document.querySelector(".four").addEventListener("click", () => {
    Terms_and_Condtion  = "Terms and Condition";

    const url = window.location.href;
    const startIndex = url.indexOf("//") + 2; // Find the index after the first //
    const endIndex = url.indexOf("/", startIndex); // Find the index of the next /
    const wordBetweenSlashes = url.substring(startIndex, endIndex);
    
    Terms_and_Condtion_link = wordBetweenSlashes + " "+ Terms_and_Condtion ;
  console.log("clicked");
  window.open(`http://localhost:8080/terms?terms=${encodeURIComponent(Terms_and_Condtion_link )}`, "_blank");
});

// function Speech_To_Test() {
//      let content = `
//         <div class="Extensio121_container"> 
//             <div class="Extensio121_card">
//                 <h1 class="Extensio121_heading">The Highlights and Summary of the Terms and Condition</h1>
//                 <div class="Extensio121_highlightSection">
//                     <div class="Extensio121_highlightHeading">
//                         <h2 class="Extensio121_highlightHeading">Highlights</h2>
//                         <ul>
//                             <li>${data.response.summary[0]}</li>
//                             <li>${data.response.summary[1]}</li>
//                             <li>${data.response.summary[2]}</li>
//                         </ul>
//                     </div>
//                     <div class="Extensio121_summarySection">
//                         <h2 class="Extensio121_summaryHeading">Summary</h2>
//                         <ul>
//                           <li>${data.response.highlight[0]}</li>
//                           <li>${data.response.highlight[1]}</li>
//                           <li>${data.response.highlight[2]}</li>
//                           <li>${data.response.highlight[3]}</li>
//                           <li>${data.response.highlight[4]}</li>
//                           <li>${data.response.highlight[5]}</li>
//                           <li>${data.response.highlight[6]}</li>
//                           <li>${data.response.highlight[7]}</li>
//                           <li>${data.response.highlight[8]}</li>
//                           <li>${data.response.highlight[9]}</li>
//                           <li>${data.response.highlight[10]}</li>
//                         </ul>
//                     </div>
//                     <button class="Extensio121_closeButton">Close</button>
//                 </div>
//             </div>
//         </div>
//     `;

//     const count_container2 = document.createElement('DIV');
//     count_container2.innerHTML = content;
//     document.body.appendChild(count_container2);

//     document.querySelector('.Extensio121_closeButton').addEventListener('click', function () {
//         document.querySelector('.Extensio121_container').style.display = 'none';
//     });

//     const Speech_to_text = document.querySelector('.four');
//     const sTMin = document.querySelector('.Extensio121_container');

//     Speech_to_text.addEventListener("click", () => {
//         sTMin.style.display = "flex";
//     });

//   }
    // Terms_and_Condtion  = "Terms and Condition";

    // const url = window.location.href;
    // const startIndex = url.indexOf("//") + 2; // Find the index after the first //
    // const endIndex = url.indexOf("/", startIndex); // Find the index of the next /
    // const wordBetweenSlashes = url.substring(startIndex, endIndex);
    
    // Terms_and_Condtion_link = wordBetweenSlashes + " "+ Terms_and_Condtion ;
    
    // // Getting the URl from the First Google search
    
    // const apiUrl = `https://app.zenserp.com/api/v2/search?apikey=6b176dd0-c9d3-11ee-869d-1bd8d77fac5f&q=Terms_and_Condtion_link`;
    
    // fetch(apiUrl)
    //   .then(response => {
    //     if (!response.ok) {
    //       throw new Error('Network response was not ok');
    //     }
    //     return response.json();
    //   })
    //   .then(data => {
    //     let T_and_C_Url = data.organic[0].url;
    
    //   // Web-Scrapping the  Terms and Condition Page for its content
    
    //   const url = `https://website-to-text-converter.p.rapidapi.com/convert?url=${T_and_C_Url}`;
    //   const options = {
    //   method: 'GET',
    //   headers: {
    //     'X-RapidAPI-Key': 'fa72dc1f26msh5e304cb6e71545ep19e194jsn1e640d220fe6',
    //     'X-RapidAPI-Host': 'website-to-text-converter.p.rapidapi.com'
    //   }
    //   };
    //   let response = async ()=>{
    //   try {
    //   await fetch(url, options).then(res => res.json()).then(result => {
    //     let web_content = result.data.text.replace(/\n/g, '.').replace(/\s{2,}/g, ' ').replaceAll('"', "'");
    
    //     // Making the Web-Scrapping Content to Summary
    //     const apiUrl = `https://api.textgears.com/summarize?key=Wam0Sk1yJkMWADMP&language=en-GB&text=${web_content}`;
    
    //     fetch(apiUrl)
    //       .then(response => {
    //           if (!response.ok) {
    //             throw new Error('Network response was not ok');
    //         }
    //       return response.json();
    //       })
    //       .then(data => {
    //         // Process the fetched data here
    //       console.log(data.response.keywords);
    //       console.log(data.response.summary);
    //       console.log(data.response.highlight);
    //       })
    //       .catch(error => {
    //         console.error('There was a problem with the fetch operation:', error);
    //       });
    //       }).catch(err => console.error(err));
      
    // } catch (error) {
    //   console.error(error);
    // }}
    // response();
    //   })
    //   .catch(error => {
    //     console.error('There was a problem with the fetch operation:', error);
    //   });