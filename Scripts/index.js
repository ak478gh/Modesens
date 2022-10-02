
let user = document.querySelector('#user')
    let login_popup = document.getElementById('login_popup');
    let login = document.querySelector('#login');
    let loginPage = document.querySelector('#loginPage');
    let close = document.querySelector('#close');

    user.addEventListener('click', function(event) {
        event.preventDefault();
        login_popup.style.display = 'block';
    })
    
    login.addEventListener('click', openloginPage);
    document.querySelector('#join').addEventListener('click', openloginPage);

    function openloginPage(event) {
        event.preventDefault();
        login_popup.style.display = 'none';
        loginPage.style.display = 'grid';
    }

    // Functionality of Cross Mark:
    close.addEventListener('click', function(event) {
        loginPage.style.display = 'none';
    })

    // Functionality of Submit Button:
    document.querySelector('form').addEventListener('submit', formSubmit);
    function formSubmit(event) {
        event.preventDefault();
        let formObj = {
            email:document.querySelector('#email').value,
            password:document.querySelector('#password').value
        }
        localStorage.setItem('credentials', JSON.stringify(formObj));
        loginPage.style.display = 'none';
    }

    // Login Funtionality:
    document.querySelector('#loginLink').addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('#submit').style.display = 'none';
        document.querySelector('#loginBtn').style.display = 'block';
        document.querySelector('#email').value = '';
        document.querySelector('#password').value = '';
    })
    document.querySelector('#loginBtn').addEventListener('click', function(event) {
        event.preventDefault();
        let credentials = JSON.parse(localStorage.getItem('credentials'));
        
        if((document.querySelector('#email').value == credentials.email) && (document.querySelector('#password').value == credentials.password)) {
            alert('Login Succesful');
            loginPage.style.display = 'none';
            login.innerText = 'Sign Out';
        } else {
            let warning = document.createElement('h2');
            warning.innerText = 'Credentials Does not match';
            document.querySelector('form').append(warning);
        }
    });
