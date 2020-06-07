let searchBtn = document.querySelector('#search-btn');
let userBlock = document.querySelector('#user-block');
let seachText = document.querySelector('#search-text');
let filterBtn = document.querySelector('#top-filter');
let upadetBtn = document.querySelector('#update-btn');

upadetBtn.addEventListener('click', function () {
    let filterCountry = document.querySelector('#country').value.toLocaleLowerCase();
    let filterGender = document.querySelector('#gender').value.toLocaleLowerCase();
    let filterAge = document.querySelector('#age').value;

    let filteredUsers = users.filter(function (user) {
        return (user.country.toLocaleLowerCase().includes(filterCountry) &&
            user.age.toString().includes(filterAge) &&
            user.gender.toLocaleLowerCase().includes(filterGender) &&
            user.name.toLocaleLowerCase().includes(seachText.value.toLocaleLowerCase()
            )
        );

    });

    userBlock.innerHTML = '';

    for (let user of filteredUsers) {
        let userElement = document.createElement('div');
        userElement.classList.add('user_info')
        userElement.innerHTML = `
        <h3>${user.name}</h3>
        <p>Country: ${user.country}</p>
        <p>Age: ${user.age}</p>
        <p>Gender: ${user.gender}</p>
    `;

        userBlock.appendChild(userElement);
    }
});

filterBtn.addEventListener('click', function () {
    let leftFilter = document.querySelector('#content-filters');
    let contentInfos = document.querySelector('#content_infos');

    if ((leftFilter.style.display === '' || leftFilter.style.display === 'none') && (contentInfos.style.width = '100%')) {
        leftFilter.style.display = 'flex';
        contentInfos.style.width = '80%';

    } else {
        leftFilter.style.display = 'none';
        contentInfos.style.width = '100%';
    }
});


searchBtn.addEventListener('click', function (e) {

    let filteredUsers = users.filter(function (user) {
        return user.name.toLocaleLowerCase().includes(seachText.value.toLocaleLowerCase())
    });

    userBlock.innerHTML = '';

    for (let user of filteredUsers) {
        let userElement = document.createElement('div');
        userElement.classList.add('user_info')
        userElement.innerHTML = `
        <h3>${user.name}</h3>
        <p>Country: ${user.country}</p>
        <p>Age: ${user.age}</p>
        <p>Gender: ${user.gender}</p>
    `;

        userBlock.appendChild(userElement);
    }
});

for (let user of users) {
    let userElement = document.createElement('div');
    userElement.classList.add('user_info')
    userElement.innerHTML = `
        <h3>${user.name}</h3>
        <p>Country: ${user.country}</p>
        <p>Age: ${user.age}</p>
        <p>Gender: ${user.gender}</p>
    `;

    userBlock.appendChild(userElement);
}

