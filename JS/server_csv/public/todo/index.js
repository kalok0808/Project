console.log("hello");
const date = document.querySelector(".date > h1");
date.innerHTML = moment().format("L");
const input = document.querySelector("input#enterAdd");
const btn = document.querySelector(".addTask button");


const reformatDate = (inputDate) => {
  return inputDate.getDate() + "-" + inputDate.getMonth() + 1 + "-" + inputDate.getFullYear()
}
let currentDate = new Date();
let selectDate = reformatDate(currentDate)

let itemList = [];

btn.addEventListener("click", addList);
input.addEventListener("keyup", (e) => {
  e.preventDefault()
  if (e.key === "Enter") {
    addList();
    //console.log('enter:   ' + e.key)
  }
});

async function addList(e) {
  console.log("hi" + e + ": " + input.value);

  itemList.push({
    name: input.value,
    date: selectDate,
    completed: "no"
  })

  const newItem = {
    name: input.value,
    date: selectDate,
    completed: "no"
  }
  const res = await fetch('http://localhost:8080/todolist',
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(newItem)
    })
  const data = await res.json()
  const id = data.id

  const notCompleted = document.querySelector(".notCompleted");
  const Completed = document.querySelector(".complete");

  const newLi = document.createElement("li");
  const checkBtn = document.createElement("button");
  const delBtn = document.createElement("button");

  checkBtn.innerHTML = `<i class="fa fa-check" id="not-complete-check-${id}" onClick="udpateItemContent(${id})"></i>`;
  delBtn.innerHTML = `<i class="fas fa-trash-alt" id="not-complete-del-${id}"></i>`;

  if (input.value !== "") {
    newLi.textContent = input.value;
    input.value = "";
    notCompleted.appendChild(newLi);
    newLi.appendChild(checkBtn);
    newLi.appendChild(delBtn);
  }

  checkBtn.addEventListener("click", function () {
    const parent = this.parentNode;
    parent.remove();
    Completed.appendChild(parent);
    checkBtn.style.display = "none";
  });
  delBtn.addEventListener("click", function () {
    const parent = this.parentNode;
    parent.remove();
  });
}

document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridMonth",
    selectable: true,
    dateClick: async function (info) {
      // info.dateStr 係你click的日期
      console.log("clicked " + info.dateStr);
      selectDate = info.dateStr
      // items 係你click的日期有邊d items


      const res = await fetch('http://localhost:8080/todolist',
        {
          method: 'GET'
        })
      const dataArr = await res.json()
      console.log(dataArr)

      let items = dataArr.filter((item) => item.duedate === info.dateStr);
      let html = "";
      // 清空另一日的item
      const notCompleted = document.querySelector(".notCompleted");
      const Completed = document.querySelector(".complete");
      notCompleted.innerHTML = "";
      Completed.innerHTML = "";

      // display item 出 網站
      console.log(items);
      for (let item of items) {
        if (item.completed === 'no') {
          addNotCompletedItem(selectDate, item.name, item.id);
        } else {
          addCompletedItem(selectDate, item.name, item.id)
        }
      }

    },
  });
  calendar.render();
});

function addNotCompletedItem(selectDate, input, id) {
  const notCompleted = document.querySelector(".notCompleted");
  const Completed = document.querySelector(".complete");

  const newLi = document.createElement("li");
  const checkBtn = document.createElement("button");
  const delBtn = document.createElement("button");

  checkBtn.innerHTML = `<i class="fa fa-check" id="not-complete-check-${id}" onClick="udpateItemContent(${id})"></i>`;
  delBtn.innerHTML = `<i class="fas fa-trash-alt" id="not-complete-del-${id}"></i>`;

  if (input !== "") {
    newLi.textContent = input;
    input = "";
    notCompleted.appendChild(newLi);
    newLi.appendChild(checkBtn);
    newLi.appendChild(delBtn);
  }

  checkBtn.addEventListener("click", function () {
    const parent = this.parentNode;
    parent.remove();
    Completed.appendChild(parent);
    checkBtn.style.display = "none";
  });


  delBtn.addEventListener("click", async function () {
    const url = 'http://localhost:8080/todolist/' + id
    const setting = {
      method: 'DELETE'
    }
    const res = await fetch(url, setting)
    const parent = this.parentNode;
    parent.remove();

  });

}




function addCompletedItem(selectDate, input, id) {
  const notCompleted = document.querySelector(".notCompleted");
  const Completed = document.querySelector(".complete");

  const newLi = document.createElement("li");
  const checkBtn = document.createElement("button");
  const delBtn = document.createElement("button");

  checkBtn.innerHTML = `<i class="fa fa-check" id="complete-check-${id}"></i>`;
  delBtn.innerHTML = `<i class="fas fa-trash-alt" id="complete-del-${id}"></i>`;

  if (input !== "") {
    newLi.textContent = input;
    input = "";
    Completed.appendChild(newLi);
    newLi.appendChild(delBtn);
  }

  delBtn.addEventListener("click", async function () {
    const url = 'http://localhost:8080/todolist/' + id
    const setting = {
      method: 'DELETE'
    }
    const res = await fetch(url, setting)
    const parent = this.parentNode;
    parent.remove();
  });

}

async function udpateItemContent(id){
  console.log('updateItemContent: ' + id)
  const res = await fetch("http://localhost:8080/todolist/" + id, {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json"
    },
    body: "",
    //body: JSON.stringify(dataObj)
  })
  if (res.ok){
    console.log('updated completed')
  } else {
    console.log('update failed')
  }
}
