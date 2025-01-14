const socialIcons = [
  {
    icon: "<i class='bx bx-envelope'></i>",
    url: "mailto:mwalt.cs@gmail.com",
  },
  {
    icon: "<i class='bx bxl-linkedin-square' ></i>",
    url: "https://www.linkedin.com/in/walt-moss/",
  },
  {
    icon: "<i class='bx bxl-github'></i>",
    url: "https://github.com/w-alt-m",
  },
];

const socialList = document.querySelector("#social-list");
console.log(socialList);

socialIcons.forEach((icon) => {
  socialList.innerHTML += `
  <li>
  <a href="${icon.url}" target="_blank">${icon.icon}</a>
  </li>
  `;
});
