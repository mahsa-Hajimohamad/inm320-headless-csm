// start an ajax call
$.ajax({
  url: "/assets/data/data.json",
  success: function (result) {
    // appending data through functions
    userInformation(result.userName, result.userPic);
    leftSidebarGenerator(result.leftSidebar);
    ticketStatsGenerator(result.ticketStats);
    graphStatsGenerator(result.graphStats);
    unresolvedTicketsGenerator(result.unresolvedTickets);
    tasksGenerator(result.tasks);
    prioritiesGenerator(result.priorities);
    blogPostGenerator(result.blogPost);
  },
});
// defining functions
// appending user name and profile picture
function userInformation(userName, pic) {
  $("#username").text(userName);
  $("#profile-pic").attr("src", pic);
}
// appending sidebar items and icons
function leftSidebarGenerator(obj) {
  $.each(obj.reverse(), function () {
    let content = `<li class="list-item ${
      this.isActive ? "bg-gray-sidebar border-3 border-start" : ""
    }">
                    <a href="${
                      this.url
                    }" class="text-secondary text-decoration-none">
                        <div class="ms-3 py-2 row">
                            <div class="menu-item-icon text-center text-sm-start">
                                <img class="pb-1 me-1" src="./assets/img/${
                                  this.icon
                                }" alt="${this.title}">
                                <div class="d-inline fs16 pt-1 light">
                                    ${this.title}
                                </div>
                            </div>
                        </div>
                    </a>
                </li>`;
    $("#left-sidebar").prepend(content);
  });
}
// appending ticket statuses data
function ticketStatsGenerator(obj) {
  $.each(obj.reverse(), function () {
    let content = `<div class="col-sm-3 pe-1 mb-2" role="button">
                        <a href="${this.url}" data-bs-toggle="modal" data-bs-target="#${this.modal_id}">
                            <div class="card-item card rounded-4 shadow-sm">
                                <div class="card-body text-center">
                                    <div class="card-subtitle fs20 gray p-2">${this.title}</div>
                                    <div class="card-title fs40 fw-bold black p-1 mb-0">${this.count}</div>
                                </div>
                            </div>
                        </a>
                    </div>`;
    $("#ticket-stats").prepend(content);
  });
}
// appending graph statistics data
function graphStatsGenerator(obj) {
  $.each(obj.reverse(), function () {
    let content = `<div class="card card-item" role="button">
                        <div class="card-body text-center">
                            <div class="card-subtitle gray fs16 p-2">${this.title}</div>
                            <div class="card-title fs24 black fw-bold p-1 mb-0">${this.value}</div>
                        </div>
                    </div>`;
    $("#graph-stats").prepend(content);
  });
}
// appending unresolved tickets data
function unresolvedTicketsGenerator(obj) {
  $.each(obj, function (index) {
    let content = `<div class="px-4 mx-0 py-3 row 
    ${index != obj.length ? "border-1 border-bottom" : ""} 
    ">
                        <div class="col text-start fs14 black"> 
                        ${this.title}
                        </div>
                        <div class="col-3 text-end fs14 gray">
                        ${this.value}
                        </div>
                    </div>`;
    $("#unresolved-tickets").append(content);
  });
}
// appending tasks data
function tasksGenerator(obj) {
  $.each(obj, function (index) {
    let content = `<div class="
                        ${index != obj.length ? "border-1 border-bottom" : ""} 
                        px-4 mx-0 py-3 row">
                        <div class="col text-start fs14 black">
                            <input class="form-check-input mt-0 me-2" type="checkbox" value=""
                                id="flexCheckChecked" 
                                ${this.checked ? "checked" : ""}
                                >
                            <label class="form-check-label" for="flexCheckChecked">
                            ${this.title}
                            </label>
                        </div>
                        <div class="col-4 d-flex justify-content-end">
                            <span
                                class="badge 
                                ${this.class} rounded-4 fs12 
                                  fw-bold text-uppercase"> 
                                ${this.tag}
                            </span>
                        </div>
                    </div>`;
    $("#tasks").append(content);
  });
}
// appending priorities data
function prioritiesGenerator(obj) {
  $.each(obj, function (index) {
    let content = `<div class="px-4 mx-0 py-3 row 
        ${index != obj.length ? "border-1 border-bottom" : ""} 
        ">
                      <div class="col text-start fs14 black"> 
                      ${this.title}
                      </div>
                      <div class="col-3 text-end fs14 fw-bold gray ">
                      ${this.priority}
                      </div>
                  </div>`;
    $("#priorities").append(content);
  });
}
// appending blog posts data
function blogPostGenerator(obj) {
  $.each(obj, function (index) {
    let content = `<div class="px-4 mx-0 py-3 row 
        ${index != obj.length ? "border-1 border-bottom" : ""} 
        ">
                    <div class="col text-start fs14 black"> 
                    ${this.title}
                    </div>
                    <div class="col-3 text-end fs14 gray">
                    ${Math.floor(Math.random() * 1000)} views
                    </div>
                </div>`;
    $("#blog-posts").append(content);
  });
}
