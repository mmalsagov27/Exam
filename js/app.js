let box = document.querySelector('.box');

const fun = async () => {
    const response = await fetch('https://6296e8c014e756fe3b254bdd.mockapi.io/api/v1/users');
    const result = await response.json();

    result.map(e => {

        let createdAt = [e['createdAt']];
        let firstName = [e['firstName']];
        let avatar = [e['avatar']];
        let lastName = [e['lastName']];
        let country = [e['country']];
        let zip = [e['zip']];
        let city = [e['city']];
        let phone = [e['phone']];
        let email = [e['email']];
        let id = [e['id']]


        let tr = document.createElement('tr');
        let tdImage = document.createElement('td')
        let td = document.createElement('td');
        let td01 = document.createElement('td');
        let td02 = document.createElement('td');
        let td03 = document.createElement('td');
        let td04 = document.createElement('td');
        let td05 = document.createElement('td');
        let td06 = document.createElement('td');
        let td07 = document.createElement('td');
        let td08 = document.createElement('td')
        let td09 = document.createElement('td')
        let button1 = document.createElement('button')
        let a = document.createElement('a')

let avatr = tdImage.classList.add('avatar')

        a.href = `index2.html?id=${id}`
        a.innerText = `update`
        a.innerHTML = `update`
        button1.innerHTML = `delete`
        td.innerHTML = createdAt;
        td01.innerHTML = firstName;
        td02.innerHTML = lastName;
        td03.innerHTML = country;
        td04.innerHTML = zip;
        td05.innerHTML = city;
        td06.innerHTML = phone;
        td07.innerHTML = email;
        tdImage.innerHTML = `<img src="${avatar}" >`


        box.append(tr)
        tr.append(tdImage)
        tr.append(td)
        tr.append(td01)
        tr.append(td02)
        tr.append(td03)
        tr.append(td04)
        tr.append(td05)
        tr.append(td06)
        tr.append(td07)
        tr.append(td08)
        td09.append(button1)
        td08.append(a)
        tr.append(td09)

        button1.onclick = async () => {

            const response = await fetch(`https://6296e8c014e756fe3b254bdd.mockapi.io/api/v1/users/${id}`, {
                method: 'DELETE'
            });
        }

    });
}
let newUser = document.querySelector('.login')
newUser.onclick = function(){
    document.location.href = 'index3.html'
}

fun()

