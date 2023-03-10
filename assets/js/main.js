// var nodePs = document.querySelectorAll('.red');

// nodePs.forEach((nodeP) => {
//     nodeP.onclick = (e) => {
//         e.target.style.color = 'orange';
//     }

// })



// var btnElement = document.getElementById('my-btn');

// console.log(btnElement);

// const opacity = getComputedStyle(nodePs[1]).opacity;

// var colors = ['blue', 'black', 'yellow', 'red'];

// var i = 0;

// btnElement.addEventListener ('click', function(e) {
//      i++; // Tăng biến đếm màu nền lên 1 mỗi lần click
//   var newIndex = i % colors.length; // Tính chỉ số màu nền mới
//   e.target.style.backgroundColor = colors[newIndex];
//   }
// )


// console.log(nodePs[1].style.color);
// alert(btnElement.style.backgroundColor);

// btnElement.onclick = (e) => {
//     if(getComputedStyle(nodePs[1]).opacity === '1') {
//         Object.assign(nodePs[1].style, {
//         opacity: '0',
//         transition: 'opacity 1s linear',
//     });
//     }
//     else {
//         Object.assign(nodePs[1].style, {
//         opacity: '1',
//     });
//     }
// }

// const input = document.getElementById('text');
// setInterval(input.oninput = (e) => {
//     console.log(e.target.value);
// }, 3000)


// const pContent = document.createElement('p');

// const newAdd = document.getElementById('add');
// newAdd.style.marginTop = '20px'

// const inputText = document.querySelector('#text');

// newAdd.appendChild(pContent)


// inputText.onchange = setInterval((e) => {
//     let x = inputText.value;
//     newAdd.innerHTML = "Nội dung bạn nhập là: " + x;
// }, 3000);


// const inputChecks = document.querySelectorAll('input[type="radio"]') ;
// var result;


// inputChecks.forEach((inputCheck) => {
//     inputCheck.onchange = (e) => {
//         result = e.target.value;
//         console.log(result);
//     }
// })

// const nodeSelect = document.getElementById('select');


// var resultSelect = nodeSelect.value;

// nodeSelect.onchange = (e) => {
// resultSelect = e.target.value;
// console.log(resultSelect)
// }

// window.onkeyup = (e) => {
//     if (e.shiftKey && e.which == 187) {
//         console.log('+');
//     }
// }

// var aElements = document.links ;

// for (var i = 0; i < aElements.length ; i++) {
//     aElements[i].onclick = (e) => {
//         if (!e.target.href.startsWith('https://google.com')) {
//             e.preventDefault();
//         }
//     }
// }


// var ulElement = document.querySelector('ul');

// ulElement.onclick = (e) => {
//     console.log('ther Ul');
// }

// ulElement.onmousedown = (e) => {
//     e.preventDefault();
// }

// var liElements = document.querySelectorAll('li');

// liElements.forEach((liElement) => {
//     liElement.onclick = (e) => {
//         e.stopPropagation();
//         console.log(e.target);
//     }
// })


// var myPromise = new Promise (
//     function(resolve, reject) {

//         // logic cua mk tao ra:
//         let a = false;
//         a ? resolve('Anh oi, em tim duoc roi!') : reject('Anh oi, em khong tim thay dau huhu :(')

//     }
// )

// myPromise
//     .then((result) => {
//         alert('Chang said: ' + result)
//     })
//     .catch((error) => {
//         alert('Chang said: ' + error)
//     })


// test promise(chain)

// var promise1 = new Promise(
//     (resolve, reject) => {
//         setTimeout(() => {
//             resolve(['JS', 'PHP'])
//         }, 2000);
//     }
// )

// promise1
//     .then((data) => {
//         console.log(data);
//         return 10;
//     })
//     .then((data) => {
//         console.log(data);
//         return new Promise(
//             function(resolve, reject) {
//                 setTimeout(function() {
//                     resolve('day la ket qua then2');
//                 }, 3000)
//             }
//         )
//     })
//     .then((data) => {
//         console.log(data);
//         return 'neu thanh cong het thi in ra dong nay';
//     })
//     .then((data) => {
//         console.log(data);
//         return 2;
//     })
//     .catch((error) => {
//         console.log(error)
//     })

// var promise2 = new Promise(
//     (resolve, reject) => {
//         setTimeout(() => {
//             reject(['Python', 'C++', 'C']);
//         }, 4000);
//     }
// )


// Promise.all([promise1, promise2])
//     .then(
//         ([result1, result2]) => {
//             console.log(result1.concat(result2));
//         }
//     )
//     .then(
//         (data) => {
//             console.log(data);
//         }
//     )

//     .catch(
//         (data) => {
//             console.log('Loi: ' + data);
//         }
//     )


//1. lấy ra content comments
//2. Từ comment lấy ra user_id
//3. từ user_id lấy ra user tương ứng


// const users = [
//     {
//         id: 1,
//         name: 'Giang Truong'
//     },
//     {
//         id: 2,
//         name: 'Son Dang',

//     },
//     {
//         id: 3,
//         name: 'Huy Vu'
//     }

//     //...
// ];

// const comments = [
//     {
//         id: 1,
//         user_id: 1,
//         content: 'Anh Son chua ra video :('
//     },
//     {
//         id: 2,
//         user_id: 2,
//         content: 'Vua ra xong em oi'
//     }
// ]

// //fake API , get ra comments

// function getComments() {
//     return new Promise(function(resolve) {  //hàm return lại 1 promise,
//         setTimeout(() => {
//             resolve(comments)
//         }, 1000);
//     })
// }

// function getUsersIds(userIds) {
//     return new Promise(function(resolve) {
//         const result = users.filter(function(user) {
//             return userIds.includes(user.id);
//         })
//         setTimeout(() => {
//             resolve(result)
//         }, 1000);
//     })
// }


// getComments()
//     .then(function(comments) {
//         const userIds = comments.map(function(comment) {
//             return comment.user_id;
//         });
//         return getUsersIds(userIds)
//         .then (function(result) {
//             return {
//                 users: result,
//                 comments: comments
//             }
//         })
//     })
//     .then (function(data) {
//         let ulElement = document.getElementById('comment-box');
//         let html = '';
//         data.comments.forEach(function(comment) {
//             let user = data.users.find(function(user) {
//                 return user.id === comment.user_id;
//             });
//             html += `<li>${user.name}: ${comment.content}</li>`
//         });

//         console.log(ulElement);

//         ulElement.innerHTML = html;
//     })


//test lần 2

// function getComments() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(comments);
//         }, 1000);
//     });
// }

// function getUserByIds(usersIds) {
//     const result = users.filter((user) => {
//         return usersIds.includes(user.id);
//     });


//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(result);
//         }, 1000);
//     });
// }

// getComments()
//     .then((comments) => {
//         const usersIds = comments.map((comment) => {
//             return comment.user_id;
//         });

//         return getUserByIds(usersIds)
//             .then((result) => {
//                 return {
//                     users: users,
//                     comments: comments,
//                 };
//             });


//     })

//     .then((data) => {
//         let ulElement = document.getElementById('comment-box');
//         let html = '';

//         data.comments.forEach((comment) => {
//             let user = users.find((user) => {
//                 return comment.user_id === user.id;
//             });
//             html += `<li>${user.name}: ${comment.content}</li>`;
//         });

//         ulElement.innerHTML = html;
//         console.log(ulElement);

//     })

//test lần 3

// function getComments() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(comments);
//         }, 1000);
//     });
// }

// function getUserByIds(usersIds) {
//     return new Promise((resolve, reject) => {
//         const result = users.filter((user) => {
//             return usersIds.includes(user.id);
//         });
//         setTimeout(() => {
//             resolve(result);
//         }, 1000);
//     });
// }


// getComments()
//     .then((comments) => {
//         const usersIds = comments.map((comment) => {
//             return comment.user_id;
//         });
//         return getUserByIds(usersIds)
//             .then((result) => {
//                 return {
//                     users: result,
//                     comments: comments,
//                 };
//             });
//     })

//     .then((data) => {
//         let ulElement = document.getElementById('comment-box');
//         let html = '';

//         data.users.forEach(user => {
//             let comment = data.comments.find((comment) => {
//                 return comment.user_id === user.id;
//             });

//             html += `<li>${user.name}: ${comment.content}</li>`;
//         });

//         ulElement.innerHTML = html;
//     })

// const users = [
//     {
//         id: 1,
//         name: 'Chang cho',
//         avatar: 'img1'
//     },
//     {
//         id: 2,
//         name: 'Trang Trau',
//         avatar: 'img2'
//     },
//     {
//         id: 3,
//         name: 'Chang Hee Do',
//         avatar: 'img3'
//     },
//     {
//         id: 4,
//         name: 'Chang Tre Trau',
//         avatar: 'img4'
//     },
//     {
//         id: 5,
//         name: 'Chang Tet',
//         avatar: 'img5'
//     }
// ];


// const comments = [
//     {
//         id: 1,
//         user_id: 1,
//         content: 'm yeu ai the?'
//     },
//     {
//         id: 2,
//         user_id: 2,
//         content: 'tao yeu Giang'
//     },
//     {
//         id: 3,
//         user_id: 3,
//         content: 'vay a, tao cung yeu Giang'
//     },
//     {
//         id: 4,
//         user_id: 4,
//         content: 'Chong tao cung ten Giang luon ne.'
//     }
// ];

//1. lấy ra các comments (Tạo 1 function)
//2. từ comments lấy ra các user_id
//3. từ user_id lấy ra các user tương ứng. (Tạo một function)


// function getComments() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(comments);
//         }, 1000);
//     });
// }

// function getUserByIds(usersIds) {
//     const usersComment = users.filter((user) => {
//         return usersIds.includes(user.id);
//     });
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(usersComment);
//         }, 1000);
//     });
// }



// getComments()
//     .then((comments) => {
//         const usersIds = comments.map((comment) => {
//             return comment.user_id;
//         });
//         return getUserByIds(usersIds)
//             .then((usersComment) => {
//                 return {
//                     users: usersComment,
//                     comments: comments,
//                 };
//             });
//     })
//     .then((data) => {
//         let ulElement = document.getElementById('comment-box');
//         let html = '';
//         data.users.forEach(user => {


//             let comment = comments.find((comment) => {
//                 return comment.user_id === user.id;
//             });
//             html += `<li>${user.avatar} ${user.name}: ${comment.content}</li>`;

//         });
//         ulElement.innerHTML = html;

//     })
//     .catch((error) => {
//         alert(error);
//     })

// const commentsAPI = 'https://jsonplaceholder.typicode.com/comments';

// fetch(commentsAPI)
//     .then((response) => {
//         return response.json();
//     })
//     .then((comments) => {
//         let htmls = comments.map((comment) => {
//             return `<li>${comment.name}(${comment.email}): ${comment.body}</li>`;
//         });
//         let html = htmls.join();
//         document.getElementById('comment-box').innerHTML = html;
//     })


// const imgAPI = 'https://jsonplaceholder.typicode.com/photos';
// fetch(imgAPI)
//     .then((response) => {
//         return response.json();

//     })
//     .then((dataImgs) => {
//         var imgs = dataImgs.map((dataImg) => {
//             return `<li>${dataImg.title}: </br>
//             <img src="${dataImg.url}" alt="${dataImg.albumID}" </li>`;
//         });

//         document.getElementById('-box').innerHTML = imgs.join();
//     })



// fetch(coursesAPI)
//     .then((response) => {
//         return response.json(       );
//     })
//     .then((courses) => {
//         console.log(courses);
//     });


// Tạo chứ năng thêm/ sửa/ xóa khóa học với fetch vs  REST API
// const coursesAPI = "http://localhost:3000/courses";


// function start() {
//     getCourses(renderHTML);
//     dandleCreateForm();
// }

// start();


// // hàm lấy courses ra khỏi API
// function getCourses(callback) {
//     fetch(coursesAPI)               //ham fecth mac dinh se gui di 1 lenh get len API
//         .then((response) => {
//             return response.json();
//         })
//         .then(callback);
// }


// //hàm render courses ra màn hình
// function renderHTML(courses) {
//     let listCourses = document.getElementById('list-courses');
//     let htmls = courses.map((course) => {
//         return `
//         <li class="course-item-${course.id}">
//             <h3>${course.name}:</h3>
//             <p>${course.description}</p>
//             <button onclick="handleDeleteCourse(${course.id})" class="delete-course">Delete</button>
//             <button onclick="handleEditCourse(${course.id})" class="edit-course">Edit</button>

//         </li>
//         `;
//     });

//     return listCourses.innerHTML = htmls.join('');
// }

// // hàm xu ly du lieu trong form

// function dandleCreateForm() {
//     //lang nghe su kien onclick tren nut submit

//     const submitElement = document.getElementById('submit');
//     submitElement.onclick = function () {
//         let name = document.querySelector('input[name="name"]').value;
//         let description = document.querySelector('input[name="description"]').value;
//         let formData = {
//             name: name,
//             description: description
//         };

//         handleCreateCourses(formData,
//             // gọi lại hàm get API và render
//             // () => { getCourses(renderHTML); });

//             // c2 : thêm obj vừa tạo vào cuối của danh sách khóa học
//             addNewCourses);


//         //Xóa nút input khi submit
//         document.querySelector('input[name="name"]').value = "";
//         document.querySelector('input[name="description"]').value = "";
//     };
// }
// //ham them element vua them vao cuoi cua list courses
// function addNewCourses(data) {
//     let listCourses = document.getElementById('list-courses');
//     let newCourse = document.createElement('li');
//     newCourse.classList.add(`course-item-${data.id}`);
//     newCourse.innerHTML = `<h3>${data.name}:</h3>
//                             <p>${data.description}</p>
//                             <button onclick="handleDeleteCourse(${data.id})" class="delete-course">Delete</button>
//                             <button onclick="handleEditCourse(${data.id})" class="edit-course">Edit</button>
//                             `;
//     listCourses.appendChild(newCourse);
// }

// //  ham tao va hien thi khoa hoc moi



// function handleCreateCourses(data, callback) {
//     const option = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//     };
//     //tao 1 lenh post cua fetch len API
//     fetch(coursesAPI, option)
//         .then((response) => {
//             return response.json();
//         })
//         .then(callback);
// }

// //ham xoa course

// function handleDeleteCourse(id) {
//     let option = {
//         method: "DELETE",
//         headers: {
//             "Content-Type": "application/json",
//         },
//     };
//     fetch(coursesAPI + "/" + id, option)
//         .then((response) => {
//             return response.json();
//         })
//         .then(() => {
//             const courseItem = document.querySelector('.course-item-' + id);
//             if (courseItem) {
//                 courseItem.remove();
//             }
//         });

// }

// //Hàm khi ấn vào thì nội dung của thẻ chuyển vào value ô input

// function handleEditCourse(id) {
//     const courseItem = document.querySelector('.course-item-' + id);
//     document.querySelector('input[name="name"]').value = courseItem.querySelector('h3').innerText;
//     document.querySelector('input[name="description"]').value = courseItem.querySelector('p').innerText;

//     let btnForm = document.getElementById('submit');
//     btnForm.innerText = 'Save';
//     btnForm.onclick = () => {
//         let data = {
//             name: document.querySelector('input[name="name"]').value,
//             description: document.querySelector('input[name="description"]').value,
//         };

//         sendRequestPUT(id, data, saveEditCourse);


//         //xóa dữ liệu trong ô input khi ấn save
//         document.querySelector('input[name="name"]').value = "";
//         document.querySelector('input[name="description"]').value = "";

//         //xóa sự kiện lưu khi edit
//         btnForm.onclick = null;
//         btnForm.innerText = 'Submit';

//         //gọi lại hàm tạo course
//         dandleCreateForm();
//     };


//     //Hàm lưu lại những gì đã chỉnh sửa:
//     function saveEditCourse(data) {
//         courseItem.innerHTML = `<h3>${data.name}:</h3>
//                             <p>${data.description}</p>
//                             <button onclick="handleDeleteCourse(${data.id})" class="delete-course">Delete</button>
//                             <button onclick="handleEditCourse(${data.id})" class="edit-course">Edit</button>
//                             `;
//     }

// }

// // Ham luu lai những gì vừa sửa



// // Hàm edit course

// function sendRequestPUT(id, data, callback) {
//     const option = {
//         method: "PUT",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//     };
//     //tao 1 lenh post cua fetch len API
//     fetch(coursesAPI + '/' + id, option)
//         .then((response) => {
//             return response.json();
//         })
//         .then(callback);
// }


const listAPI = 'http://localhost:3000/student';
// Tạo hàm start()

function start() {
    getListAPI(renderHTML);

    getDataForm();
}

start();

// hàm lấy list từ API

function getListAPI(callback) {
    fetch(listAPI)
        .then((response) => {
            return response.json();
        })
        .then(callback);
}


//ham render ra html:
let ulElement = document.getElementById('list-students');
function renderHTML(listStudents) {

    let htmls = listStudents.map((student) => {
        return `<li class="student-item-${student.id}">
        <h3>Name: ${student.name}</h3>
        <p>Age: ${student.age}</p>
        <p>Address: ${student.address}</p>
        <button onclick= "handleDeleteStudent(${student.id})">Delete</button>
        <button onclick= 'handleEditStudent("${student.name}")'>Edit</button>
        </li>`;
    });
    ulElement.innerHTML = htmls.join('');
}

function handleEditStudent(dataStudent) {
    console.log(dataStudent);

}

// ham lay dât tu form:

function getDataForm() {
    let btnSubmit = document.getElementById('submit');
    btnSubmit.onclick = () => {
        let name = document.querySelector('input[name = "name"]').value;
        let age = document.querySelector('input[name = "age"]').value;
        let address = document.querySelector('input[name = "address"]').value;


        let formData = {
            name: name,
            age: age,
            address: address,
        };

        requestPost(formData, (student) => {
            console.log(student);
            let liElement = document.createElement("li");
            liElement.classList.add(`student-item-${student.id}`);
            liElement.innerHTML = `<h3>Name: ${student.name}</h3>
                                    <p>Age: ${student.age}</p>
                                    <p>Address: ${student.address}</p>
                                    <button onclick= "handleDeleteStudent(${student.id})">Delete</button>
                                    <button onclick= "handleEditStudent(${student.id}, ${student}">Edit</button>
                                            `;

            ulElement.appendChild(liElement);
        });
        document.querySelector('input[name = "name"]').value = "";
        document.querySelector('input[name = "age"]').value = "";
        document.querySelector('input[name = "address"]').value = "";
    };
}

//ham gui request post len API

function requestPost(data, callback) {
    let option = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data),
    };
    fetch(listAPI, option)
        .then((response) => {
            return response.json();
        })
        .then(callback);
}


//ham xư ly xoa student

function handleDeleteStudent(id) {
    let option = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    };

    fetch(listAPI + '/' + id, option)
        .then((response) => {
            return response.json();
        })
        .then(() => {
            let LiRemove = document.querySelector(`li.student-item-${id}`);
            if (LiRemove) {
                LiRemove.remove();
            }
        });
}

//ham xu ly edit


// document.querySelector('input[name = "name"]').value = 'hi';
// document.querySelector('input[name = "age"]').value = dataStudent.age;
// document.querySelector('input[name = "address"]').value = dataStudent.address;
