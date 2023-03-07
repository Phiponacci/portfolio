var options = {
  strings: [
    `<h2 class="ff-mynerve fw-bolder my-5">I am <span class="bg-dark px-1 text-white fw-bolder">Leo</span>, here is a brief description about me</h2>
            <li class="h3 ff-mynerve ms-2 fw-bold">Exprienced Software Engineer</li>
            <li class="h3 ff-mynerve ms-2 fw-bold">Full Stack Developer</li>
            <li class="h3 ff-mynerve ms-2 fw-bold">Working on <a id="fiverr-link" target="_blank" href="https://www.fiverr.com/phiponatchi" class="bg-success text-white px-1 text-decoration-none">fiverr</a> and <a target="_blank" href="https://www.upwork.com/freelancers/~01556fb0a54a5fa971" class="text-white px-1 text-decoration-none" style="background-color: #108d00">Upwork</a></li>
            <li class="h3 ff-mynerve ms-2 fw-bold">I did many software projects, and contributed in others</li>`,
  ],
  typeSpeed: 30,
  cursorChar: "",
  onComplete: (self) => {
    setTimeout(() => $("#skills-link").click(), 2000);
  },
};

var briefDesc = new Typed(".jobs", options);
briefDesc.stop();

var greetingOptions = {
  strings: [
    `<code class='bg-dark text-danger'>print("Hello, World!")</code>`,
    "Hello, World!",
  ],
  typeSpeed: 100,
  cursorChar: "<span class='h1 ff-space-mono'>_</span>",
  onComplete: (self) => {
    briefDesc.start();
  },
};

const greetingTyped = new Typed(".greeting", greetingOptions);

// smooth scrolling
$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});
