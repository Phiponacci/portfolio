var options = {
  strings: [
    `<h1 class="ff-sofia fw-bold my-5">I am <span class="bg-dark ps-3 pe-1 text-white fw-bolder">Leo</span>, here is a brief description about me</h1>
            <li class="h4 ff-sofia ms-2">Exprienced Software Engineer</li>
            <li class="h4 ff-sofia ms-2">Full Stack Developer</li>
            <li class="h4 ff-sofia ms-2">Freelancer at fiverr and Upwork</li>`,
  ],
  typeSpeed: 30,
  cursorChar: "",
};

var briefDesc = new Typed(".jobs", options);
briefDesc.stop();

var greetingOptions = {
  strings: ["Hello, World!"],
  typeSpeed: 100,
  cursorChar: "<span class='h1 ff-space-mono'>_</span>",
  onComplete: (self) => {
    briefDesc.start();
  },
};

const greetingTyped = new Typed(".greeting", greetingOptions);
