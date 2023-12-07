import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should show the cover image
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the image's url that will be used as a background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "right", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        instagram: null,

        name: null,
        lastName: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables); // print on the console
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  let photo = `<img src="${variables.avatarURL}" class="photo" />`;
  let name = `<h1>${variables.name} ${variables.lastName}</h1>`;
  let role = `<h2>${variables.role}</h2>`;
  let country = `<h3>${variables.country}</h3>`;
  let city = `<h3>${variables.city}</h3>`;
  let position = `<ul class="${variables.socialMediaPosition}">
  <li><a href="https://twitter.com/${variables.twitter}"><i class="fab fa-twitter"></i></a></li>
  <li><a href="https://github.com/${variables.github}"><i class="fab fa-github"></i></a></li>
  <li><a href="https://linkedin.com/${variables.linkedin}"><i class="fab fa-linkedin"></i></a></li>
  <li><a href="https://instagram.com/${variables.instagram}"><i class="fab fa-instagram"></i></a></li>
  </ul>`;
  let twitter = `<ul class=" "></ul>`;
  let github = `<ul class=" ">`;
  let linkedin = `<ul class=" "></ul>`;
  let instagram = `<ul class=" "></ul>`;

  if (variables.includeCover == false) cover = "<div class='cover'></div>";
  if (variables.avatarURL == false) photo = "<img class='photo' />";
  if (variables.name == null) name = "<h1></h1>";
  if (variables.role == null) role = "<h2></h2>";
  if (variables.country == null) country = "<h3></h3>";
  if (variables.city == null) city = "<h3></h3>";
  // if (variables.twitter == null) twitter = "<a href=''></a>";
  // if (variables.github == null) github = "<a href=''></a>";
  // if (variables.linkedin == null) linkedin = "<a href=''></a>";
  // if (variables.instagram == null) instagram = "<a href=''></a>";
  if (variables.socialMediaPosition == "right") {
    position = "<ul class='position-right'></ul>";
  }
  if (variables.socialMediaPosition == "left") {
    position = "<ul class='position-left'></ul>";
  }

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
            ${photo}
            ${name}
            ${role}
            ${country}
            ${city}
            
            
           

            ${position}

          
      
          <!--<ul class="position-right">
            <li><a href="https://github.com/4geeksacademy"><i class="fab fa-twitter"></i></a></li>
            <li><a href="https://github.com/4geeksacademy"><i class="fab fa-github"></i></a></li>
            <li><a href="https://linkedin.com/school/4geeksacademy"><i class="fab fa-linkedin"></i></a></li>
            <li><a href="https://instagram.com/4geeksacademy"><i class="fab fa-instagram"></i></a></li>
          </ul>-->
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should show the cover image
    includeCover: true,
    // this is the image's url that will be used as a background for the profile cover
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    // this is the url for the profile avatar
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    // social media bar position (left or right)
    socialMediaPosition: "position-left",
    // social media usernames
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: null,
    lastName: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables); // render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new values
    });
  });
};
