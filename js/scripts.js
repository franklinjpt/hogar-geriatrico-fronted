
const formularioRegistro = document.querySelector('#formularioRegistro');
const nombreUsuario = document.querySelector('input[name=usuario]');
const correo = document.querySelector('input[name=correo]');
const contraseña = document.querySelector('input[name=pass]');
const confirmarContra = document.querySelector('input[name=passConfirm]');
const rol = document.querySelector('select');

cargarEventListeners();
function cargarEventListeners(){
    formularioRegistro.addEventListener('submit', enviarRegistro);
}

function enviarRegistro(e) {
    e.preventDefault();
    let name = nombreUsuario.value;
    let email = correo.value;
    let role = rol.value;
    let password = contraseña.value;
    let passwordConfirm = confirmarContra.value;
    
    axios.post('https://tercer-amigo-api.herokuapp.com/api/users/signup', {
        name,
        email,
        role,
        password,
        passwordConfirm
      },{ crossdomain: true })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

      axios({
        method: 'post',
        url: 'https://tercer-amigo-api.herokuapp.com/api/users/signup',
        data: {
            name,
            email,
            role,
            password,
            passwordConfirm
        },
        headers: {
            Accepts: "application/json",
            // Authorization: localStorage.getItem('token')
        }
      });
}


