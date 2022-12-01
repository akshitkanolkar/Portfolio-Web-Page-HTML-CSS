const id = (id) => document.getElementById(id);
// Grabbing all fields by their ID
const firstName = id("first-name"),
  lastName = id("last-name"),
  email = id("contact-email"),
  phoneNumber = id("phno"),
  selectInterest = id("interest");
contactMessage = id("contact-message");
const genderButtons = document.querySelectorAll('input[name="gender"]');
// First option
const selectOption = id("select-option");
// Small (message container) tags
const firstNameMessage = id("valid-first-name"),
  lastNameMessage = id("valid-last-name"),
  phoneMessage = id("valid-phone-number"),
  emailMessage = id("valid-email"),
  interestMessage = id("valid-select-interest");

//   SUBMIT BUTTON

const contactSubmit = id("contact-submit");

const alertMessages = {
  fNameAlert: {
    firstNameAlert:
      "Your First Name must be 2-10 characters long and can contain only letters",
    emptyFirstName: "Please Enter your First Name",
  },
  lNameAlert: {
    lastNameAlert:
      "Your Last Name must be 2-10 characters long and can contain only letters",
    emptyLastName: "Please Enter your Last Name",
  },

  phoneNumberAlert: {
    phoneAlert: "Your Phone Number must be 10 digits long",
    emptyPhone: "Please Enter your Phone Number",
  },
  emailAddressAlert: {
    emailAlert: "Your Phone Number must be 10 digits long",
    emptyEmail: "Please Enter your Email",
  },
  selectInterestAlert: {
    interestAlert: "Please select what you are interested in.",
    emptyInterest: "Please select Your interest",
  },
};

let validFirstName = false,
  validLastName = false,
  validEmail = false,
  validPhoneNumber = false,
  validInterest = false;

// Name can be start from a-z and A-Z,Name could contain a to z and A to Z
// {1,20} => minimum two characters and max 20 Characters
const regexName = /^[a-zA-Z]([a-zA-Z]){1,20}$/;
// Start from 0 to 9 and It should have exactly 10 values
const regexPhone = /^([0-9]){10}$/;
// . means any character thats why I have written there \.
// + means one or more than these
const regexEmail = /^([_\-\.a-zA-Z0-9]+)@([_\-\.a-zA-Z0-9]+)\.([a-zA-Z]){2,}$/;

const validateField = (field) => {
  if (field === "First Name") {
    validFirstName = true;
  } else if (field === "Last Name") {
    validLastName = true;
  } else if (field === "Email") {
    validEmail = true;
  } else if (field === "Phone Number") {
    validPhoneNumber = true;
  }
};

const {
  fNameAlert: { firstNameAlert, emptyFirstName },
  lNameAlert: { lastNameAlert, emptyLastName },
  phoneNumberAlert: { phoneAlert, emptyPhone },
  emailAddressAlert: { emailAlert, emptyEmail },
  selectInterestAlert: { interestAlert, emptyInterest },
} = alertMessages;

// Validation Helper for all input Fields
const validateInputFields = (regex, element, messageElem, message, field) => {
  const inputVal = element.value;
  if (inputVal.trim() === "") {
    messageElem.innerHTML = `Please Enter your ${field}`;
  } else if (regex.test(inputVal)) {
    messageElem.innerHTML = "";
    validateField(field);
  } else {
    messageElem.innerHTML = message;
  }
};
// Validate First Name
firstName.addEventListener("blur", () => {
  validateInputFields(
    regexName,
    firstName,
    firstNameMessage,
    firstNameAlert,
    "First Name"
  );
});
// Validate Last Name
lastName.addEventListener("blur", () => {
  validateInputFields(
    regexName,
    lastName,
    lastNameMessage,
    lastNameAlert,
    "Last Name"
  );
});
// Validate Email
email.addEventListener("blur", () => {
  validateInputFields(regexEmail, email, emailMessage, emailAlert, "Email");
});
// Validate Phone Number
phoneNumber.addEventListener("blur", () => {
  validateInputFields(
    regexPhone,
    phoneNumber,
    phoneMessage,
    phoneAlert,
    "Phone Number"
  );
});
// Validate Dropdown
selectInterest.addEventListener("blur", () => {
  if (selectInterest.value === "") {
    interestMessage.innerHTML = interestAlert;
  } else {
    selectOption.style.display = "none";
    interestMessage.innerHTML = "";
    validInterest = true;
  }
});

contactSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  let selectedGender;
  for (const gender of genderButtons) {
    if (gender.checked) {
      selectedGender = gender.value;
      break;
    }
  }
  if (
    validFirstName &&
    validLastName &&
    validEmail &&
    validInterest &&
    validPhoneNumber
  ) {
    firstNameMessage.innerHTML = "";
    lastNameMessage.innerHTML = "";
    phoneMessage.innerHTML = "";
    emailMessage.innerHTML = "";
    interestMessage.innerHTML = "";
    const formData = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      phoneNumber: phoneNumber.value,
      selectInterest: selectInterest.value,
      gender: selectedGender,
      contactMessage: contactMessage.value,
    };
    console.log(formData);
  } else {
    firstNameMessage.innerHTML = emptyFirstName;
    lastNameMessage.innerHTML = emptyLastName;
    phoneMessage.innerHTML = emptyPhone;
    emailMessage.innerHTML = emptyEmail;
    interestMessage.innerHTML = emptyInterest;
  }
});
