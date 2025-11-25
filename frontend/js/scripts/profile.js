import { API_URL, STATIC_PHOTO_API_URL } from '/config.js';


const getUserData = async () => {
    try {
        const response = await fetch(`${API_URL}/users/1`);

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const userData = await response.json();
        return userData;
    } catch (error) {
        console.error('Error al obtener datos del usuario:', error);
        throw error;
    }
};

const populateForm = (user) => {
  // Inputs (value)
  document.getElementById('name').value = user.name || '';
  document.getElementById('lastname').value = user.lastname || '';
  document.getElementById('username').value = user.username || '';
  document.getElementById('email').value = user.email || '';
  document.getElementById('phone').value = user.phone || '';
  document.getElementById('user_type').value = user.user_type || '';
  document.getElementById('profile_description').value = user.profile_description || '';
  document.getElementById('direction').value = user.direction || '';

  // Texto (innerText o textContent)
  document.getElementById('userFullname').textContent = `${user.name} ${user.lastname}` || '';
  document.getElementById('userPhone').textContent = user.phone || 'unknown';
  document.getElementById('userEmail').textContent = user.email || 'unknown';
  document.getElementById('userDirection').textContent = user.direction || 'unknown';

  // Imagen
  document.getElementById('userPhoto').src = `${STATIC_PHOTO_API_URL}//${user.avatar_url}.webp` || 'default-avatar.png';
};


// # sendFormButton mapear el boton y los elementos del form



getUserData()
  .then(user => {
    console.log('Usuario cargado:', user);
    populateForm(user);
  })
  .catch(error => {
    console.error('No se pudo cargar el usuario:', error);
  });