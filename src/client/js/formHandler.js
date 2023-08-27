function handleSubmit(event) {
  event.preventDefault();

  const results_section = document.getElementById("results");

  // check what text was put into the form field
  let formText = document.getElementById("name").value;

  // console.log("formText>>>>>>>>>>>   "+formText);

  console.log(Client.checkForName(formText));

  if (Client.checkForName(formText) !== null) {
    console.log("::: Form Submitted :::");

    // alert(" Sacsses add HTML element ! : Test 1  ") ;

    fetch('http://localhost:8081/PostData',{
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Text: formText,
      })

      
    })
      .then((res) => { 
        res.json();

        alert(" Sacsses respon data  element ! :  Test 2  ");

      })
      .then((res) => {
        console.log(res);
        const { agreement, subjectivity, confidence, irony } = res;

        const html_new = ` 
<div class="result" Agreement result it is  : >${agreement}</div>
<div class="result" Subjectivity result it is : >${subjectivity}</div>
<div class="result" Confidence result it is : >${confidence}</div>
<div class="result" Irony result it is : >${irony}</div>
`;

        results_section.innerHTML = ""; // reset results to add new value .

        results_section.innerHTML = html_new; // add new results value to section has "results" id   .

        alert(" Sacsses add HTML element ! :  Test 3  ");

        return res;
      })
      .catch(function (err) {
        console.log(err);
      });
  } else {
    alert("  please inter a valid url agane : ");
  }
}

export { handleSubmit }



