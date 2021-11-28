document.getElementById("form").onsubmit = () => {
  let data = {
    title: document.getElementById("projecttitle").value,
    description: document.getElementById("projectdescription").value,
    email: document.getElementById("projectemail").value,
  };
  console.log("=>" + data.title + " " + data.description + " " + data.email);
  fetch("http://localhost:8080/addProject", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then((res) => {
    console.log("Request complete! response:", res);
  });
};

function getAllProjects() {
  //fetch to get all projects
  fetch("http://localhost:8080/getProjects", {
    method: "GET",
  }).then((res) => {
    for (let i = 0; i < res.length; ++i) {
      console.log(JSON.parse(res[i]));
      projects.push(JSON.parse(res[i]));
    }
    // console.log(res.json);
    res.json().then((projects) => {
      console.log(projects);
      //create the html for each project - change DUMMYPROJECTS to PROJECTS
      let html = "";
      projects.forEach((project) => {
        let htmlSegment = `
            <p name="title">${project.title}<p/>
            <p name="description">${project.description}<p/>
            <p name="email">${project.email}<p/>
            <input  name="accepted" type="text" value="${project.accepted}"></p>
            <hr/>
        `;
        html += htmlSegment;
      });
      document.getElementById("allProjects").innerHTML = html;
    });
  });
}

function saveChanges() {
  console.log("Saving changes...");
  let data = [];
  //add

  let titles = document.querySelectorAll('[name="title"]');
  let descriptions = document.querySelectorAll('[name="description"]');
  let emails = document.querySelectorAll('[name="email"]');
  let accepteds = document.querySelectorAll('[name="accepted"]');
  for (let i = 0; i < titles.length; ++i) {
    let tempJson = {
      title: titles[i].innerHTML,
      descriptions: descriptions[i].innerHTML,
      email: emails[i].innerHTML,
      accepted: accepteds[i].value == "true",
    };
    data.push(tempJson);
  }
  console.log(data);
  fetch("http://localhost:8080/validateProject", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then((res) => {
    console.log("Request complete! response:", res);
  });
}

function sendValidationEmail() {
  console.log("sendValidationEmail...");
  let data = [];
  //add

  let titles = document.querySelectorAll('[name="title"]');
  let descriptions = document.querySelectorAll('[name="description"]');
  let emails = document.querySelectorAll('[name="email"]');
  let accepteds = document.querySelectorAll('[name="accepted"]');
  for (let i = 0; i < titles.length; ++i) {
    let tempJson = {
      title: titles[i].innerHTML,
      descriptions: descriptions[i].innerHTML,
      email: emails[i].innerHTML,
      accepted: accepteds[i].value == "true",
    };
    data.push(tempJson);
  }
  console.log(data);
}

function sendRejectionEmail() {
  console.log("sendRejectionEmail...");
  let data = [];
  //add

  let titles = document.querySelectorAll('[name="title"]');
  let descriptions = document.querySelectorAll('[name="description"]');
  let emails = document.querySelectorAll('[name="email"]');
  let accepteds = document.querySelectorAll('[name="accepted"]');
  for (let i = 0; i < titles.length; ++i) {
    let tempJson = {
      title: titles[i].innerHTML,
      descriptions: descriptions[i].innerHTML,
      email: emails[i].innerHTML,
      accepted: accepteds[i].value == "true",
    };
    data.push(tempJson);
  }
  console.log(data);
}
