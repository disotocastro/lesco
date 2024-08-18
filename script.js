// Data structure for all video categories
let data = {
    numeros: [
        { 'id': 'n1', 'title': 'Uno', 'name': 'uno.mp4' },
        { 'id': 'n2', 'title': 'Dos', 'name': 'dos.mp4' },
        { 'id': 'n3', 'title': 'Tres', 'name': 'tres.mp4' },
        { 'id': 'n4', 'title': 'Cuatro', 'name': 'cuatro.mp4' },
        { 'id': 'n5', 'title': 'Cinco', 'name': 'cinco.mp4' },
        { 'id': 'n6', 'title': 'Seis', 'name': 'seis.mp4' },
        { 'id': 'n7', 'title': 'Siete', 'name': 'siete.mp4' },
        { 'id': 'n8', 'title': 'Ocho', 'name': 'ocho.mp4' },
        { 'id': 'n9', 'title': 'Nueve', 'name': 'nueve.mp4' },
        { 'id': 'n10', 'title': 'Diez', 'name': 'diez.mp4' },
    ],
    lugares: [
        { 'id': 'l1', 'title': 'Banco', 'name': 'banco.mp4' },
        { 'id': 'l2', 'title': 'Cine', 'name': 'cine.mp4' },
        { 'id': 'l3', 'title': 'Correo', 'name': 'correo.mp4' },
        { 'id': 'l4', 'title': 'Hospital', 'name': 'hospital.mp4' },
        { 'id': 'l5', 'title': 'Iglesia', 'name': 'iglesia.mp4' },
        { 'id': 'l6', 'title': 'Libreria', 'name': 'libreria.mp4' },
        { 'id': 'l7', 'title': 'Parque', 'name': 'parque.mp4' },
        { 'id': 'l8', 'title': 'Restaurante', 'name': 'restaurante.mp4' },
        { 'id': 'l9', 'title': 'Supermercado', 'name': 'supermercado.mp4' },
        { 'id': 'l10', 'title': 'Tienda', 'name': 'tienda.mp4' },
    ],
    relaciones: [
        { 'id': 'r1', 'title': 'Buenas tardes', 'name': 'buenas_tardes.mp4' },
        { 'id': 'r2', 'title': 'Buenos días', 'name': 'buenos_dias.mp4' },
        { 'id': 'r21', 'title': 'Sí', 'name': 'si.mp4' },
        { 'id': 'r12', 'title': 'No', 'name': 'no.mp4' },
        { 'id': 'r10', 'title': 'Necesito', 'name': 'necesitar.mp4' },
        { 'id': 'r11', 'title': 'No entiendo', 'name': 'no_entiendo.mp4' },
        { 'id': 'r13', 'title': 'Por favor', 'name': 'por_favor.mp4' },
        { 'id': 'r9', 'title': 'Gracias', 'name': 'gracias.mp4' },
        { 'id': 'r17', 'title': 'Hasta luego', 'name': 'hasta_luego.mp4' },
        { 'id': 'r18', 'title': 'No sé', 'name': 'no_se.mp4' },
        { 'id': 'r3', 'title': '¿Cómo está?', 'name': 'como_estas.mp4' },
        { 'id': 'r4', 'title': '¿Cómo?', 'name': 'como_pregunta.mp4' },
        { 'id': 'r6', 'title': '¿Cuándo?', 'name': 'cuando_pregunta.mp4' },
        { 'id': 'r7', 'title': '¿Cuánto?', 'name': 'cuantos_pregunta.mp4' },
        { 'id': 'r8', 'title': '¿Dónde?', 'name': 'donde_pregunta.mp4' },
        { 'id': 'r14', 'title': '¿Qué edad tiene?', 'name': 'que_edad_tiene.mp4' },
        { 'id': 'r15', 'title': '¿Qué hora es?', 'name': 'que_hora_es.mp4' },
        { 'id': 'r16', 'title': '¿Puede repetir?', 'name': 'repetir.mp4' },
        { 'id': 'r19', 'title': '¿Cuál es su número de teléfono?', 'name': 'cual_es_su_numero_de_telefono.mp4' },
        { 'id': 'r20', 'title': '¿Dónde vive?', 'name': 'donde_vive.mp4' },
    ],
    atencion: [
        { 'id': 'a1', 'title': 'Cancelar', 'name': 'cancelar.mp4' },
        { 'id': 'a2', 'title': 'Cédula', 'name': 'cedula.mp4' },
        { 'id': 'a3', 'title': 'Cita', 'name': 'cita.mp4' },
        { 'id': 'a4', 'title': 'Comprobante', 'name': 'comprobante.mp4' },
        { 'id': 'a5', 'title': 'Constancia', 'name': 'constancia.mp4' },
        { 'id': 'a6', 'title': 'Dictamen médico', 'name': 'dictamen_medico.mp4' },
        { 'id': 'a7', 'title': 'Dónde vive', 'name': 'donde_vive.mp4' },
        { 'id': 'a8', 'title': 'Expediente', 'name': 'expediente.mp4' },
        { 'id': 'a9', 'title': 'Incapacidad', 'name': 'incapacidad.mp4' },
        { 'id': 'a10', 'title': 'Reprogramar', 'name': 'reprogramar.mp4' },
        { 'id': 'a11', 'title': '¿Cuál es su número de teléfono?', 'name': 'cual_es_su_numero_de_telefono.mp4' },
        { 'id': 'a12', 'title': '¿Qué edad tiene?', 'name': 'que_edad_tiene.mp4' },


    ]
};
// Function to populate video playlists
function populateVideoPlaylist(category) {
    const playlist = document.querySelector(`.video-playlist[data-category="${category}"]`);
    if (!playlist) return;

    data[category].forEach((video, i) => {
        let video_element = `
            <div class="video" data-id="${video.id}" data-category="${category}">
                <img src="images/play.svg" alt="">
                <p>${i + 1 > 9 ? i + 1 : '0' + (i + 1)}. </p>
                <h3 class="title">${video.title}</h3>
            </div>
        `;
        playlist.innerHTML += video_element;
    });
}

// Populate all playlists
populateVideoPlaylist('numeros');
populateVideoPlaylist('lugares');
populateVideoPlaylist('relaciones');
populateVideoPlaylist('atencion');

// Function to handle video selection
function handleVideoSelection(selected_video) {
    const category = selected_video.dataset.category;
    const videos = document.querySelectorAll(`.video[data-category="${category}"]`);

    videos.forEach(video => {
        video.classList.remove('active');
        video.querySelector('img').src = 'images/play.svg';
    });

    selected_video.classList.add('active');
    selected_video.querySelector('img').src = 'images/pause.svg';

    let match_video = data[category].find(video => video.id == selected_video.dataset.id);

    const container = selected_video.closest('.videos-container');
    const main_video = container.querySelector('.main-video video');
    const main_video_title = container.querySelector('.main-video .title');

    main_video.src = `videos/${category}/${match_video.name}`;
    main_video_title.innerHTML = match_video.title;
}

// Add click event listeners to all videos
document.querySelectorAll('.video').forEach(video => {
    video.onclick = () => handleVideoSelection(video);
});

// Initialize the first video of each category as active
function initializeFirstVideos() {
    ['numeros', 'lugares', 'relaciones', 'atencion'].forEach(category => {
        const firstVideo = document.querySelector(`.video[data-category="${category}"]`);
        if (firstVideo) {
            handleVideoSelection(firstVideo);
        }
    });

}

// Call the initialization function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializeFirstVideos);