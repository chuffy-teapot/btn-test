
var btn = document.querySelector(".button")

btn.addEventListener("click", () =>{
  var age = Math.floor(Math.random()*(101-1)+1);

  if (age < 18){
    const school = " - школьный возраст";
    console.log(age + school);
  }
  
  else if (age < 25){
    const university = " - студенческий возраст";
    console.log(age + university)
  }
  
  else if (age < 41){
    const work = " - рабочий возраст";
    console.log(age + work);
  }
  
  else if (age < 101){
    const retired = " - пенсионный возраст";
    console.log(age + retired);
  }
})