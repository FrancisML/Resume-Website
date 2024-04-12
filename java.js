document.addEventListener("DOMContentLoaded", function () {
  // Get the list items and corresponding divs
  var testHeadingsLinks = document.querySelectorAll("#testHeadingsLink");
  var strengthsDivs = document.querySelectorAll(".testTextBox");

  //Apply default style to set white bottom border for all items except the first one
  testHeadingsLinks.forEach(function (link, index) {
    link.addEventListener("click", function () {
      // Change bottom border color for all list items
      testHeadingsLinks.forEach(function (item) {
        item.style.border = "solid"; // Reset bottom border color for all list items
      });
      // Change bottom border color for the clicked list item
      link.style.borderBottomColor = strengthsDivs[index].style.backgroundColor;

      // Show the corresponding div based on the clicked list item
      strengthsDivs.forEach(function (div, i) {
        div.style.display = index === i ? "flex" : "none"; // Show the clicked div, hide others
      });
    });
  });
});

function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "francismlasalvia@gmail.com",
    Password: "",
    To: "francismlasalvia@gmail.com",
    From: document.getElementById("email").value,
    Subject: "SOMEONE IS REACHING OUT",
    Body:
      "Name: " +
      document.getElementById("name").value +
      "<br> Company: " +
      document.getElementById("company").value +
      "<br> Email: " +
      document.getElementById("email").value +
      "<br> Phone: " +
      document.getElementById("phone").value +
      "<br> Message: " +
      document.getElementById("message").value,
  }).then(showMessage());
}

function hideElement() {
  var element = document.getElementById("formWrapper");
  if (element.style.visibility === "visible") {
    element.style.visibility = "hidden";
  } else {
    element.style.visibility = "visible";
  }
}
function showElement() {
  var element = document.getElementById("formWrapper");
  if (element.style.visibility === "hidden") {
    element.style.visibility = "visible";
  } else {
    element.style.visibility = "hidden";
  }
}
function showMessage() {
  var element = document.getElementById("messageWrapper");
  if (element.style.visibility === "hidden") {
    element.style.visibility = "visible";
  } else {
    element.style.visibility = "hidden";
  }
}
function hideMessage() {
  var element = document.getElementById("messageWrapper");
  if (element.style.visibility === "visible") {
    element.style.visibility = "hidden";
  } else {
    element.style.visibility = "visible";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const workItems = document.querySelectorAll(".work");
  const jobExpandedElements = document.querySelectorAll(".jobExpanded");

  workItems.forEach((workItem, index) => {
    workItem.addEventListener("click", () => {
      // Hide work wrapper
      document.getElementById("Workwrapper").style.display = "none";

      // Hide all job expanded elements
      jobExpandedElements.forEach((element) => {
        element.style.display = "none";
      });

      // Show the corresponding job expanded element
      jobExpandedElements[index].style.display = "flex";
    });
  });

  const jobExitButtons = document.querySelectorAll(".jobExpanded #jobExit");
  jobExitButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Show work wrapper
      document.getElementById("Workwrapper").style.display = "block";

      // Hide all job expanded elements
      jobExpandedElements.forEach((element) => {
        element.style.display = "none";
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Get the list items and corresponding divs
  var testHeadingsLinks = document.querySelectorAll(".mobleStrengthsLink");
  var strengthsDivs = document.querySelectorAll(".mobileTextBox");

  // Apply default style to set white bottom border for all items except the first one
  testHeadingsLinks.forEach(function (link, index) {
    link.addEventListener("click", function () {
      // Change bottom border color for all list items
      testHeadingsLinks.forEach(function (item) {
        item.style.borderRight = "solid"; // Reset bottom border color for all list items
      });
      // Change bottom border color for the clicked list item
      link.style.borderRightColor = strengthsDivs[index].style.backgroundColor;

      // Show the corresponding div based on the clicked list item
      strengthsDivs.forEach(function (div, i) {
        div.style.display = index === i ? "block" : "none"; // Show the clicked div, hide others
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var mobileMenuButton = document.getElementById("mobleMenuBTN");
  var mobileNav = document.getElementById("mobileNav");
  var mobileNavLinks = document.querySelectorAll(".mobileNavLink");

  // Function to hide mobileNav
  function hideMobileNav() {
    mobileNav.style.display = "none";
  }

  // Toggle mobileNav when mobileMenuButton is clicked
  mobileMenuButton.addEventListener("click", function () {
    if (mobileNav.style.display === "none" || mobileNav.style.display === "") {
      mobileNav.style.display = "flex";
    } else {
      mobileNav.style.display = "none";
    }
  });

  // Hide mobileNav when a mobileNavLink is clicked
  mobileNavLinks.forEach(function (link) {
    link.addEventListener("click", hideMobileNav);
  });
});
