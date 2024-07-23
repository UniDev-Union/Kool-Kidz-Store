document.addEventListener('DOMContentLoaded', () => {
    const loginCard = document.getElementById('loginCard');
    const signupCard = document.getElementById('signupCard');
    const showSignup = document.getElementById('showSignup');
    const showLogin = document.getElementById('showLogin');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    const addActiveClass = (card) => {
        card.classList.add('active');
    };

    const removeActiveClass = (card) => {
        card.classList.remove('active');
    };

    const handleFocus = (event, card) => {
        addActiveClass(card);
    };

    const handleBlur = (event, card) => {
        if (!card.contains(event.relatedTarget)) {
            removeActiveClass(card);
        }
    };

    loginForm.querySelectorAll('input').forEach(input => {
        input.addEventListener('focus', (e) => handleFocus(e, loginCard));
        input.addEventListener('blur', (e) => handleBlur(e, loginCard));
    });

    signupForm.querySelectorAll('input').forEach(input => {
        input.addEventListener('focus', (e) => handleFocus(e, signupCard));
        input.addEventListener('blur', (e) => handleBlur(e, signupCard));
    });

    showSignup.addEventListener('click', (e) => {
        e.preventDefault();
        loginCard.classList.add('opacity-0', 'pointer-events-none');
        signupCard.classList.remove('opacity-0', 'pointer-events-none');
    });

    showLogin.addEventListener('click', (e) => {
        e.preventDefault();
        signupCard.classList.add('opacity-0', 'pointer-events-none');
        loginCard.classList.remove('opacity-0', 'pointer-events-none');
    });

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Perform login validation here
        console.log('Login submitted');
        // Redirect to home page
        window.location.href = 'home.html';
    });

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Perform signup validation here
        console.log('Signup submitted');
        // Redirect to home page
        window.location.href = 'home.html';
    });

    // Clear form fields after submission
    function clearForm(form) {
        form.reset();
    }

    loginForm.addEventListener('submit', () => clearForm(loginForm));
    signupForm.addEventListener('submit', () => clearForm(signupForm));
});