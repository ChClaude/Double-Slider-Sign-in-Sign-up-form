const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

/**
 * This code adds class right-panel-active to tags with class container
 */
signUpButton.addEventListener('click', ()=>
container.classList.add('right-panel-active'));

/**
 * This code removes class right-panel-active to tags with class container
 */
signInButton.addEventListener('click', ()=>
container.classList.remove('right-panel-active'));
