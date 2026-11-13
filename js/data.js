// ===== DATOS DE FUERA DE MARCO =====
// Todas las publicaciones son ficticias, creadas para el proyecto.

const posts = [
  {
    cuenta: "@vidaenbalance",
    imagen: { src: "assets/amor.jpg", alt: "Collage de dos personas rodeadas de flores" },
    tipo: "Bienestar",
    color: "lavanda",
    texto: "Si realmente te amas, nunca descuidarás tu cuerpo. Tu mejor versión comienza con disciplina.",
    sesgo: "Valor condicionado: presenta el amor propio como premio por cumplir una rutina.",
    idea: "Condiciona el amor propio a la apariencia y a la disciplina. Sugiere que cuidar tu cuerpo es una prueba de que te quieres.",
    proceso: { nombre: "Esquemas y creencias", detalle: "La frase vincula el amor propio con disciplina y apariencia; al repetirse, una asociación aprendida puede sentirse como una regla." },
    queNoSeVe: [
      "La publicación es patrocinada por una marca de suplementos.",
      "La foto es una de 40 tomadas ese día, con luz y ángulo elegidos.",
      "No se mencionan salud, descanso, dinero ni tiempo disponible."
    ],
    preguntas: [
      "¿Una persona que no sigue esa rutina se ama menos?",
      "¿Quién define cuál es la «mejor versión» de alguien?",
      "¿Qué gana la marca si sientes que te falta disciplina?"
    ],
    reformulacion: "Tu bienestar no tiene que convertirse en una obligación estética."
  },
  {
    cuenta: "@glowupdiario",
    imagen: { src: "assets/arte.png", alt: "Retrato artístico con flores sobre el rostro" },
    tipo: "Rutina de belleza",
    color: "rosa",
    texto: "Mi rutina de 12 pasos para una piel perfecta. Sin esto, no hay excusa para verte cansada.",
    sesgo: "Comparación social: una selección editada se presenta como una expectativa cotidiana.",
    idea: "Presenta la apariencia como una responsabilidad individual y trata el cansancio como un defecto que hay que corregir.",
    proceso: { nombre: "Atención selectiva", detalle: "La promesa de piel perfecta concentra la mirada en un rasgo y deja fuera las variaciones normales de piel, salud y contexto." },
    queNoSeVe: [
      "Los 12 productos fueron enviados gratis por las marcas.",
      "El video usa filtro de suavizado de piel.",
      "No se muestra que la piel cambia por genética, clima y salud."
    ],
    preguntas: [
      "¿Verse cansada es una falta o es parte de estar viva?",
      "¿Cuántos de esos 12 pasos son necesarios y cuántos se venden?",
      "¿Qué significa «perfecta» aquí y quién lo decidió?"
    ],
    reformulacion: "Cuidar tu piel puede ser un gusto, no un deber para verte descansada."
  },
  {
    cuenta: "@fit.con.proposito",
    imagen: { src: "assets/estereotipos.jpg", alt: "Ilustración de ideales que circulan en pantallas" },
    tipo: "Motivación",
    color: "crema",
    texto: "No existen excusas cuando quieres tu mejor versión. El cuerpo que sueñas está a una decisión.",
    sesgo: "Esquema de mérito: supone que todos los cuerpos y circunstancias responden igual.",
    idea: "Supone que todos los cuerpos cambian igual y que no lograrlo es falta de voluntad.",
    proceso: { nombre: "Comparación social", detalle: "Presenta un cuerpo ideal como destino común y oculta las diferencias de genética, recursos, tiempo y circunstancias." },
    queNoSeVe: [
      "El cuerpo de la foto es parte del trabajo de la cuenta y de su negocio.",
      "No aparecen la genética, el tiempo libre ni el acceso a recursos.",
      "Se omiten las personas que lo intentaron y no obtuvieron ese resultado."
    ],
    preguntas: [
      "¿Todos los cuerpos pueden llegar al mismo lugar?",
      "Si alguien no lo logra, ¿la culpa es suya?",
      "¿Quién se beneficia de que sientas que te falta voluntad?"
    ],
    reformulacion: "Tu cuerpo no es un proyecto pendiente."
  },
  {
    cuenta: "@modaparatodas",
    imagen: { src: "assets/consumismo.jpg", alt: "Collage de un rostro rodeado de símbolos de redes y consumo" },
    tipo: "Publicidad",
    color: "lavanda",
    texto: "Nueva colección: la talla que todas deberíamos querer. Corrige tu silueta con nuestra línea moldeadora.",
    sesgo: "Norma universal: convierte una preferencia comercial en algo que supuestamente todas desean.",
    idea: "Presenta el cuerpo como algo que necesita corrección y vende un producto como solución.",
    proceso: { nombre: "Esquema de norma", detalle: "La publicidad convierte una preferencia de marca en una expectativa que supuestamente todas comparten." },
    queNoSeVe: [
      "El anuncio vende la inseguridad antes de vender la prenda.",
      "Las modelos fueron editadas y el catálogo sigue ese patrón.",
      "No se aclara que «la talla que todas deberíamos querer» es una opinión comercial."
    ],
    preguntas: [
      "¿Qué cuerpos necesitan corrección y por qué?",
      "¿Qué necesidad crea este anuncio y qué producto la resuelve?",
      "¿Cómo cambiaría el mensaje si vendiera comodidad?"
    ],
    reformulacion: "La ropa debería ajustarse a tu cuerpo, no tu cuerpo a la ropa."
  },
  {
    cuenta: "@mentebonita",
    imagen: { src: "assets/emotividad.jpg", alt: "Collage artístico sobre emoción y mensajes" },
    tipo: "Mensaje positivo",
    color: "rosa",
    texto: "Ámate todos los días. Si hoy no te ves hermosa, no estás haciendo el trabajo.",
    sesgo: "Positividad obligatoria: convierte una emoción variable en otra tarea que cumplir.",
    idea: "Parece positivo, pero exige amar el cuerpo siempre y convierte sentirse mal en un fracaso personal.",
    proceso: { nombre: "Metacognición", detalle: "El mensaje convierte una emoción variable en una obligación. Podemos observar esa exigencia sin asumirla como verdad." },
    queNoSeVe: [
      "La cuenta vende un curso de autoestima de pago.",
      "Se omite que respetar el cuerpo no obliga a amarlo todo el tiempo.",
      "No hay contexto sobre días difíciles ni sobre la diversidad de experiencias."
    ],
    preguntas: [
      "¿Un mensaje positivo puede reproducir una exigencia estética?",
      "¿Es obligatorio amar tu cuerpo, o basta con respetarlo?",
      "¿Qué pasa con quien no se siente así hoy?"
    ],
    reformulacion: "Puedes respetar tu cuerpo incluso en los días en que no te sientes cómoda con él."
  }
];

// Datos ficticios: cada pieza reúne imagen, lectura cognitiva y pistas para explorar.

