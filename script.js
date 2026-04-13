/* NAVIGACIJA */
function showSection(id) {
    document.querySelectorAll("main section")
        .forEach(s => s.classList.add("hidden"));

    document.getElementById(id).classList.remove("hidden");
}

/* ŠRIFTAS */
let currentFontSize = 16;

function changeFontSize(change) {
    currentFontSize += change;

    if (currentFontSize < 12) currentFontSize = 12;
    if (currentFontSize > 26) currentFontSize = 26;

    document.body.style.fontSize = currentFontSize + "px";
}

/* PASKAITOS */
function addLecture() {
    const name = document.getElementById("lectureName").value;
    const day = document.getElementById("lectureDay").value;
    const time = document.getElementById("lectureTime").value;

    if (!name || !time) return alert("Užpildyk!");

    const id = Date.now();

    const time24 = time.slice(0, 5);

    document.getElementById("lectureList").innerHTML += `
    <li data-id="${id}">
        ${day} - ${name} (${time24})
        <button onclick="removeItem(${id})">x</button>
    </li>
`;

    document.getElementById("lectureTable").innerHTML += `
        <tr data-id="${id}">
            <td>${name}</td>
            <td>${day} ${time24}</td>
            <td><button onclick="removeItem(${id})">x</button></td>
        </tr>
    `;
}

/* EGZAMINAI */
function addExam() {
    const name = document.getElementById("examName").value;
    const date = document.getElementById("examDate").value;

    if (!name || !date) return alert("Užpildyk!");

    const id = Date.now();

    document.getElementById("examList").innerHTML += `
        <li data-id="${id}">
            ${name} (${date})
            <button onclick="removeItem(${id})">x</button>
        </li>
    `;

    document.getElementById("examTable").innerHTML += `
        <tr data-id="${id}">
            <td>${name}</td>
            <td>${date}</td>
            <td><button onclick="removeItem(${id})">x</button></td>
        </tr>
    `;
}

/* UŽDUOTYS */
function addTask() {
    const input = document.getElementById("taskInput");
    const deadline = document.getElementById("taskDeadline");

    if (!input.value) return;

    const id = Date.now();

    const name = input.value;
    const date = deadline.value ? deadline.value : "-";

    let listText = name;
    if (deadline.value) {
        listText += " (iki: " + deadline.value + ")";
    }

    document.getElementById("taskList").innerHTML += `
        <li data-id="${id}">
            ${listText}
            <button onclick="removeItem(${id})">x</button>
        </li>
    `;

    document.getElementById("taskTable").innerHTML += `
        <tr data-id="${id}">
            <td>${name}</td>
            <td>${date}</td>
            <td><button onclick="removeItem(${id})">x</button></td>
        </tr>
    `;
}

/* IŠTRINIMAS */
function removeItem(id) {
    document.querySelectorAll(`[data-id='${id}']`)
        .forEach(el => el.remove());
}

function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

function showSection(id) {
    document.querySelectorAll("main section")
        .forEach(s => s.classList.add("hidden"));

    const section = document.getElementById(id);
    section.classList.remove("hidden");

    document.getElementById(id).classList.remove("hidden");

}