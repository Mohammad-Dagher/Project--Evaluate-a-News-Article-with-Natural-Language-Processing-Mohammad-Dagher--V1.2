//// check if input  legale input or no in if statment  " if (Client.checkForName(formText) !== null) " .

function checkForName(inputText) {
  console.log("::: Running checkForName :::", inputText);

  const matching_string_URL = inputText.match(
    /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/g
  );

  console.log(
    "  checkForName(inputText) matching_string_URL =====>>>>>  " +
      matching_string_URL
  );

  if (matching_string_URL !== null) {
    alert("Welcome, Captain!");
  }

  return matching_string_URL;
}

export { checkForName };
