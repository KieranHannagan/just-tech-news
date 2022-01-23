function signupFormHandler(event) {
    event.preventDefault();

    // signup login info
    const username = document.querySelector('#username-signup');
    const email = document.querySelector('#email-signup');
    const password = document.querySelector('#password-signup');

    if(username && email && password) {
        fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: { 'Content-Type' : 'application/json' }
        }).then((response) => { console.log(response)})
    }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);

