let students = [];

function addStudent() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const type = document.getElementById('type').value;

    if (name && age && type) {
        const student = { name, age, type };
        students.push(student);
        renderStudents();
        clearForm();
    } else {
        alert('Please fill out all fields');
    }
}

function renderStudents() {
    const studentTableBody = document.getElementById('student-table-body');
    studentTableBody.innerHTML = '';

    students.forEach((student, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.type}</td>
            <td><button class="delete-button" onclick="deleteStudent(${index})">Delete</button></td>
        `;

        studentTableBody.appendChild(row);
    });
}

function deleteStudent(index) {
    students.splice(index, 1);
    renderStudents();
}

function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('type').value = 'Regular';
}
