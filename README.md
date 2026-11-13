# FUERA DE MARCO

Exposición digital educativa e interactiva sobre ideales de belleza, redes sociales, percepción corporal y pensamiento crítico.

> «No todo lo que ves es real. No todo lo que parece perfecto es saludable».

## Recorrido presencial

Abre `index.html` en un navegador. La visita funciona sin instalar dependencias: cada estación es HTML, CSS y JavaScript local, y las ilustraciones están en `assets/`.

- **Portada**: collage con piezas clicables que llevan a las salas y botón de entrada al recorrido.
- **Modo feria**: control de pantalla completa disponible desde la navegación de cada sala.
- **Feed**: publicaciones ficticias con filtros por tema, lente de rayos X, análisis cognitivo, contexto omitido y reformulación.
- **Museo**: comparador deslizable de imágenes artísticas y fichas de archivo que se abren al tocar cada pieza.
- **Cuerpo**: tarjetas desplegables sobre industria, entorno, plataformas y agencia.
- **Foro**: tótem de dilemas con tres posturas, argumentos y una pregunta para seguir conversando. No registra votos.
- **Laboratorio**: mini-juego de seis tarjetas con clic, teclado o arrastre, más un analizador de frases basado en reglas.
- **Espejo**: preguntas desplegables y muro de manifiesto con huellas anónimas temporales en la página actual.
- **Recursos**: rutas desplegables de orientación y enlaces oficiales para Colombia.

## Arquitectura

- `index.html` + `css/Style.css` + `js/exposicion.js` + `js/kiosco.js`: portada, navegación de entrada y modo feria.
- `feed.html` + `css/feed.css` + `js/data.js` + `js/feed.js`: contenido estructurado por publicación y capas interactivas.
- `museo.html` + `css/museo.css` + `js/museo.js`: comparador y fichas.
- `foro.html` + `css/foro.css` + `js/foro.js`: dilemas y perspectivas.
- `laboratorio.html` + `css/lab.css` + `js/lab.js`: clasificación y pistas explicables.
- `espejo.html` + `css/manifiesto.css` + `js/manifiesto.js`: manifiesto local sin nombres ni persistencia.
- `recursos.html` + `css/recursos.css`: recursos y rutas de apoyo.
- `assets/`: archivo de imágenes de la exposición.

El clasificador es un prototipo educativo de reglas explícitas: no usa un modelo entrenado, no evalúa personas y puede pasar por alto ironía o contexto. El proyecto no diagnostica ni reemplaza atención profesional. Las publicaciones y las posturas del foro son ficticias. El muro del manifiesto solo cuenta interacciones de la visita actual y se borra al recargar.

