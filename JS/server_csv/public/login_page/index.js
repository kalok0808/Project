const tmpStorage = window.localStorage;


async function login() {
    const username = document.querySelector('#username').value
    const userpw = document.querySelector('#user-pw').value

    console.log(username)
    console.log(userpw)
    const dataObj = {
        "username": username,
        "password": userpw
    }


    const res = await fetch('http://localhost:8080/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataObj)
    })

    const data = await res.json()
    console.log(res.status)
    console.log(data)
    if (res.status === 200) {
        tmpStorage.setItem('displayName', dataObj.username)
        window.location = '/index.html'
    }
}

document.querySelector('.loginbt').addEventListener('click', () => {
    login()
})


document.addEventListener('keyup', (e) => {
    console.log(e.key)
    if (e.key === 'Enter') {
        login();
    }
})

// // 用fetch的 POST 來送資料去server。
// const res = await fetch('http://localhost:8080/todolist',
// {
//     method: 'POST',
//     // POST，要加headers。如以json格式送出，Content-Type設定要配合返
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     // 送出的資料放在body內。但要以JSON.stringify()來將object轉為json格式
//     body: JSON.stringify(dataObj)
// })

// // 如果資料成功送了去server，res.ok就會等如true
// if (res.ok) {
// console.log(await res.json())
// showData('')
// }