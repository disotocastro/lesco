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
    ],
    alfabeto: [
        { 'id': 'alf1', 'title': 'A', 'name': 'a.mp4' },
        { 'id': 'alf2', 'title': 'B', 'name': 'b.mp4' },
        { 'id': 'alf3', 'title': 'C', 'name': 'c.mp4' },
        { 'id': 'alf4', 'title': 'D', 'name': 'd.mp4' },
        { 'id': 'alf5', 'title': 'E', 'name': 'e.mp4' },
        { 'id': 'alf6', 'title': 'F', 'name': 'f.mp4' },
        { 'id': 'alf7', 'title': 'G', 'name': 'g.mp4' },
        { 'id': 'alf8', 'title': 'H', 'name': 'h.mp4' },
        { 'id': 'alf9', 'title': 'I', 'name': 'i.mp4' },
        { 'id': 'alf10', 'title': 'J', 'name': 'j.mp4' },
        { 'id': 'alf11', 'title': 'K', 'name': 'k.mp4' },
        { 'id': 'alf12', 'title': 'L', 'name': 'l.mp4' },
        { 'id': 'alf13', 'title': 'LL', 'name': 'll.mp4' },
        { 'id': 'alf14', 'title': 'M', 'name': 'm.mp4' },
        { 'id': 'alf15', 'title': 'N', 'name': 'n.mp4' },
        { 'id': 'alf16', 'title': 'O', 'name': 'o.mp4' },
        { 'id': 'alf17', 'title': 'P', 'name': 'p.mp4' },
        { 'id': 'alf18', 'title': 'Q', 'name': 'q.mp4' },
        { 'id': 'alf19', 'title': 'R', 'name': 'r.mp4' },
        { 'id': 'alf20', 'title': 'RR', 'name': 'rr.mp4' },
        { 'id': 'alf21', 'title': 'S', 'name': 's.mp4' },
        { 'id': 'alf22', 'title': 'T', 'name': 't.mp4' },
        { 'id': 'alf23', 'title': 'U', 'name': 'u.mp4' },
        { 'id': 'alf24', 'title': 'V', 'name': 'v.mp4' },
        { 'id': 'alf25', 'title': 'W', 'name': 'w.mp4' },
        { 'id': 'alf26', 'title': 'X', 'name': 'x.mp4' },
        { 'id': 'alf27', 'title': 'Y', 'name': 'y.mp4' },
        { 'id': 'alf28', 'title': 'Z', 'name': 'z.mp4' },
    ],
    animales: [
        { 'id': 'ani1', 'title': 'Ave', 'name': 'ave.mp4' },
        { 'id': 'ani2', 'title': 'Cocodrilo', 'name': 'cocodrilo.mp4' },
        { 'id': 'ani3', 'title': 'Conejo', 'name': 'conejo.mp4' },
        { 'id': 'ani4', 'title': 'Gato', 'name': 'gato.mp4' },
        { 'id': 'ani5', 'title': 'Jirafa', 'name': 'jirafa.mp4' },
        { 'id': 'ani6', 'title': 'León', 'name': 'leon.mp4' },
        { 'id': 'ani7', 'title': 'Pez', 'name': 'pez.mp4' },
        { 'id': 'ani8', 'title': 'Serpiente', 'name': 'serpiente.mp4' },
    ],
    comidas: [
        { 'id': 'com1', 'title': 'Arroz', 'name': 'arroz.mp4' },
        { 'id': 'com2', 'title': 'Azúcar', 'name': 'azucar.mp4' },
        { 'id': 'com3', 'title': 'Café', 'name': 'cafe.mp4' },
        { 'id': 'com4', 'title': 'Camarones', 'name': 'camarones.mp4' },
        { 'id': 'com5', 'title': 'Frijoles', 'name': 'frijoles.mp4' },
        { 'id': 'com6', 'title': 'Gallopinto', 'name': 'gallopinta.mp4' },
        { 'id': 'com7', 'title': 'Huevos', 'name': 'huevos.mp4' },
        { 'id': 'com8', 'title': 'Leche', 'name': 'leche.mp4' },
        { 'id': 'com9', 'title': 'Natilla', 'name': 'natillo.mp4' },
        { 'id': 'com10', 'title': 'Sal', 'name': 'sal.mp4' },
        { 'id': 'com11', 'title': 'Té', 'name': 'te.mp4' },
        { 'id': 'com12', 'title': 'Tortillas', 'name': 'tortillas.mp4' },
    ],
    deportes: [
        { 'id': 'dep1', 'title': 'Baloncesto', 'name': 'baloncesto.mp4' },
        { 'id': 'dep2', 'title': 'Béisbol', 'name': 'beisbol.mp4' },
        { 'id': 'dep3', 'title': 'Boxeo', 'name': 'boxe.mp4' },
        { 'id': 'dep4', 'title': 'Caminata', 'name': 'caminata.mp4' },
        { 'id': 'dep5', 'title': 'Ciclismo', 'name': 'ciclismo.mp4' },
        { 'id': 'dep6', 'title': 'Fútbol', 'name': 'futbol.mp4' },
        { 'id': 'dep7', 'title': 'Karate', 'name': 'karate.mp4' },
        { 'id': 'dep8', 'title': 'Natación', 'name': 'natacion.mp4' },
        { 'id': 'dep9', 'title': 'Patinar', 'name': 'patinar.mp4' },
        { 'id': 'dep10', 'title': 'Tenis', 'name': 'tenis.mp4' },
        { 'id': 'dep11', 'title': 'Vóley', 'name': 'volley.mp4' },
    ],
    emociones: [
        { 'id': 'emo1', 'title': 'Aburrido', 'name': 'aburrido.mp4' },
        { 'id': 'emo2', 'title': 'Alegría', 'name': 'alegria.mp4' },
        { 'id': 'emo3', 'title': 'Ansiedad', 'name': 'ansiedad.mp4' },
        { 'id': 'emo4', 'title': 'Asustado', 'name': 'austado.mp4' },
        { 'id': 'emo5', 'title': 'Cansancio', 'name': 'cansancio.mp4' },
        { 'id': 'emo6', 'title': 'Decepción', 'name': 'decepcion.mp4' },
        { 'id': 'emo7', 'title': 'Enamorado', 'name': 'enamorado.mp4' },
        { 'id': 'emo8', 'title': 'Estrés', 'name': 'estres.mp4' },
        { 'id': 'emo9', 'title': 'Llorar', 'name': 'llorar.mp4' },
        { 'id': 'emo10', 'title': 'Miedo', 'name': 'miedo.mp4' },
        { 'id': 'emo11', 'title': 'Preocupado', 'name': 'preocupado.mp4' },
        { 'id': 'emo12', 'title': 'Risa', 'name': 'risa.mp4' },
    ],
    salud: [
        { 'id': 'sal1', 'title': 'Taquicardia', 'name': 'taquicardia.mp4' },
        { 'id': 'sal2', 'title': 'Temperatura', 'name': 'temperatura.mp4' },
        { 'id': 'sal3', 'title': 'Tiroides', 'name': 'tiroides.mp4' },
        { 'id': 'sal4', 'title': 'Todos los días', 'name': 'todos_los_dias.mp4' },
        { 'id': 'sal5', 'title': 'Tomar cada 8 horas', 'name': 'tomar_cada_8.mp4' },
        { 'id': 'sal6', 'title': 'Tomar cada 12 horas', 'name': 'tomar_cada_12.mp4' },
        { 'id': 'sal7', 'title': 'Tomar la presión', 'name': 'tomar_la_presion.mp4' },
        { 'id': 'sal8', 'title': 'Tos', 'name': 'tos.mp4' },
        { 'id': 'sal9', 'title': 'Tratamiento', 'name': 'tratamiento.mp4' },
        { 'id': 'sal10', 'title': 'Último papa nicolado', 'name': 'ultimo_papa_nicolado.mp4' },
        { 'id': 'sal11', 'title': 'Vacuna', 'name': 'vacuna.mp4' },
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
populateVideoPlaylist('alfabeto');
populateVideoPlaylist('animales');
populateVideoPlaylist('comidas');
populateVideoPlaylist('deportes');
populateVideoPlaylist('emociones');
populateVideoPlaylist('salud');

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
    ['numeros', 'lugares', 'relaciones', 'atencion', 'alfabeto', 'animales', 'comidas', 'deportes', 'emociones', 'salud'].forEach(category => {
        const firstVideo = document.querySelector(`.video[data-category="${category}"]`);
        if (firstVideo) {
            handleVideoSelection(firstVideo);
        }
    });

}

// Call the initialization function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializeFirstVideos);