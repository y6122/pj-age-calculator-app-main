//form contansers
const formContent = document.querySelectorAll("form>div");
const dayCon = document.querySelector(".day-con>.erorr");
const monthCon = document.querySelector(".month-con>.erorr");
const yearCon = document.querySelector(".year-con>.erorr");

//all inputs
const inputDay = document.querySelector("#day");
const inputMonth = document.querySelector("#month");
const inputYear = document.querySelector("#year");
//the result
const outPutDay = document.querySelector(".aw-days");
const outPutmonthes = document.querySelector(".aw-months");
const outPutyears = document.querySelector(".aw-years");
//buttton
const butt = document.querySelector("button");
//message error
const dayMsg = document.createTextNode("Must be a valid day");
const monthMsg = document.createTextNode("Must be a valid month");
const yearMsg = document.createTextNode("Must be in the past");

//erorr message
formContent.forEach((element) => {
  const label = element.querySelector("label");
  const inputValue = element.querySelector("input");
  const error = element.querySelector(".erorr");
  function redInput() {
    error.innerHTML = "";

    label.style.color = "red";
    inputValue.style.borderColor = "red";
  }
  //empty mssage message
  const emptyMsg = document.createTextNode("This field is required");
  //empty input
  butt.addEventListener("click", () => {
    outPutmonthes.innerHTML = "";
    outPutyears.innerHTML = "";
    outPutDay.innerHTML = "";

    const datePast = new Date(
      `${inputYear.value}/${inputMonth.value}/${inputDay.value}`
    );
    const dateNaw = new Date();
    let yearsOutPut = dateNaw.getFullYear() - datePast.getFullYear();
    let monthOutPut = dateNaw.getMonth() - datePast.getMonth();
    const dayOutPut = dateNaw.getDate() - datePast.getDate();

    dateNaw.getMonth() < datePast.getMonth()
      ? (monthOutPut = datePast.getMonth() - dateNaw.getMonth())
      : dateNaw.getMonth() - datePast.getMonth();

    console.log("now:" + dateNaw);

    outPutmonthes.innerHTML = `- -<span>months</span>`;
    outPutyears.innerHTML = `- -<span>years</span>`;
    outPutDay.innerHTML = `- -<span>days</span>`;

    if (inputValue.value == "") {
      redInput();
      error.appendChild(emptyMsg);
    } else if (inputDay.value > 31) {
      redInput();
      dayCon.appendChild(dayMsg);
    } else if (inputMonth.value > 12) {
      redInput();

      monthCon.appendChild(monthMsg);
    } else if (inputYear.value > dateNaw.getFullYear()) {
      redInput();
      yearCon.appendChild(yearMsg);
    } else if (monthOutPut < 0 || (monthOutPut === 0 && dayOutPut < 0)) {
      yearsOutPut--;
    } else {
      error.innerHTML = "";
      label.style.color = "#000";
      inputValue.style.borderColor = "#000";
      outPutmonthes.innerHTML = `${Math.round(monthOutPut)}<span>months</span>`;
      outPutyears.innerHTML = `${Math.round(yearsOutPut)}<span>years</span>`;
      outPutDay.innerHTML = `${Math.round(dayOutPut)}<span>days</span>`;
    }
  });
});
