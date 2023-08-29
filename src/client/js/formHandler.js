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
    ///////////////////////////////////////// send to servar to  whith app.post("/PostData", function (req, res) method .
    fetch("http://localhost:8081/PostData", {
      method: "POST",
      // mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Text: formText,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("the respons is " + res);
        const { agreement, subjectivity, confidence, irony } = res;

        //  make html elmante to set in to  ID has  : "results" .
        const html_new = ` 
        
<div class="result" > Agreement result it is  : ${agreement}</div>

<div class="result" > Subjectivity result it is : ${subjectivity}</div>

<div class="result"> Confidence result it is : ${confidence}</div>

<div class="result" > Irony result it is : ${irony}</div>

`;

        results_section.innerHTML = ""; // reset results to add new value .

        results_section.innerHTML = html_new; // add new results value to section has "results" id   .

        alert(" Sacsses add HTML element ! :  Test 2  "); ///  test if add elemante or no .

        return res;
      })
      .catch(function (err) {
        console.log(err);
      });
  } else {
    alert("  please inter a valid url agane : ");
  }
}

export { handleSubmit };
