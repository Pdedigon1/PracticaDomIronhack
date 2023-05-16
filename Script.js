document.addEventListener('DOMContentLoaded', function() {
    var foto = document.getElementById('foto');

    foto.addEventListener('click', function() {
        if (foto.src.endsWith('audiLandjet1.jpg')) {
            foto.src = 'Imagenes/audi2.jpg';
        } else {
            foto.src = 'Imagenes/audiLandjet1.jpg';
        }
    });
});

let cocheImg = document.getElementById('coche-img');
let imagenes = ['Imagenes/Alpine2.jpg' , "Imagenes/Alpine.jpg"];
let index = 0;

setInterval(function() {
    index = (index + 1) % imagenes.length;
    cocheImg.src = imagenes[index];
}, 10000);




document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('btn-agregar').addEventListener('click', function() {
        var marc = prompt('Ingresa el nombre del marcca:');

        if (marc) {
            var listaMarca = document.getElementById('marca-lista');
            var nuevoMarc = document.createElement('li');
            nuevoMarc.textContent = marc;
            nuevoMarc.classList.add('marc');
            listaMarca.appendChild(nuevoMarc);
        }
    });


    document.getElementById('btn-remover').addEventListener('click', function() {
        var listaMarca = document.getElementById('marca-lista');
        var ultMarc = listaMarca.lastElementChild;

        if (ultMarc) {
            listaMarca.removeChild(ultMarc);
        }
    });


    // Obtener los valores de los campos de nombre y comentario
    const nameInput = document.getElementById('name');
    const commentInput = document.getElementById('comment');
    const name = nameInput.value;
    const comment = commentInput.value;

    // Crear un nuevo elemento de comentario
    const newComment = document.createElement('div');
    newComment.innerHTML = `<strong>${name}</strong>: ${comment}`;

    // Agregar el nuevo comentario a la lista
    commentList.appendChild(newComment);

    // Limpiar los campos de nombre y comentario
    nameInput.value = '';
    commentInput.value = '';
});
