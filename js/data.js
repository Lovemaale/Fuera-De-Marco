export const modules = [
  { id: "feed", number: "01", title: "El feed", subtitle: "Lo que vemos, lo que creemos", kind: "Explorar" },
  { id: "imagen", number: "02", title: "Detrás de la imagen", subtitle: "Lo que no te muestran", kind: "Investigar" },
  { id: "museo", number: "03", title: "El museo de la belleza", subtitle: "Una historia que cambia", kind: "Recorrer" },
  { id: "discurso", number: "04", title: "Desmonta el discurso", subtitle: "¿Qué hay detrás de lo que dicen?", kind: "Analizar" },
  { id: "conversacion", number: "05", title: "La conversación incómoda", subtitle: "Preguntas que merecen discutirse", kind: "Reflexionar" },
  { id: "laboratorio", number: "06", title: "Laboratorio de pensamiento crítico", subtitle: "Pon a prueba lo que consumes", kind: "Experimentar" },
  { id: "identidad", number: "07", title: "Más allá del espejo", subtitle: "Mi identidad no cabe en una fotografía", kind: "Crear" },
  { id: "bienestar", number: "08", title: "Cuando la presión deja de ser estética", subtitle: "Comprender para reconocer", kind: "Acompañarse" }
];

export const posts = [
  {
    author: "Nina en movimiento", handle: "@nina.entrena", label: "Colaboración pagada · VitaForma",
    category: "Fitness", time: "hace 12 min", visual: "sunrise",
    caption: "Mi rutina de las 5:30 cambió mi vida. Si de verdad quieres, siempre encuentras tiempo.",
    phrase: "Si de verdad quieres, siempre encuentras tiempo.",
    hidden: ["Luz dorada y encuadre preparado para esta toma.", "Una experiencia personal se presenta como regla para todo el mundo.", "La relación comercial aparece en letra pequeña."]
  },
  {
    author: "Mesa de todos los días", handle: "@mesacotidiana", label: "Diario personal",
    category: "Alimentación", time: "hace 38 min", visual: "table",
    caption: "Lo que como en un día para sentirme con energía. Cada cuerpo y cada jornada tienen necesidades distintas.",
    phrase: "Lo que como en un día me funciona a mí.",
    hidden: ["Un día editado no cuenta toda una historia.", "La alimentación depende de muchos factores personales.", "La cámara muestra lo elegido, no lo que quedó fuera."]
  },
  {
    author: "Pausa bonita", handle: "@pausabonita", label: "Rutina compartida",
    category: "Autocuidado", time: "hace 1 h", visual: "bath",
    caption: "Domingo de reset: mascarilla, velas y volver a ser mi mejor versión.",
    phrase: "Cuidarme es convertirme en mi mejor versión.",
    hidden: ["El autocuidado se vincula aquí con productos y apariencia.", "Descansar o pedir ayuda también puede ser cuidarse.", "La idea de una versión 'mejor' merece una pregunta."]
  },
  {
    author: "Piel de cerca", handle: "@pieldecerca", label: "Publicidad · producto enviado",
    category: "Belleza", time: "hace 2 h", visual: "skincare",
    caption: "No sabía cuánto necesitaba este sérum hasta que lo probé. #ad escondido entre etiquetas.",
    phrase: "No sabía cuánto necesitaba este producto.",
    hidden: ["La publicación promociona un producto.", "La etiqueta publicitaria está poco visible.", "La sensación de necesitarlo puede formar parte del mensaje de venta."]
  },
  {
    author: "En tendencia", handle: "@entendencia", label: "Tendencia · #miantesyahora",
    category: "Tendencias", time: "hace 4 h", visual: "mirror",
    caption: "El mismo espejo, dos momentos distintos. ¿Cuál versión prefieres?",
    phrase: "¿Cuál versión de mí prefieres?",
    hidden: ["Una comparación invita a evaluar dos imágenes como si fueran la persona completa.", "Pose, ropa, luz y momento pueden cambiar la fotografía.", "La pregunta desplaza la atención hacia la aprobación externa."]
  }
];

export const statements = [
  "Si de verdad quieres, siempre encuentras tiempo.",
  "Lo que como en un día me funciona a mí.",
  "Cuidarme es convertirme en mi mejor versión.",
  "No sabía cuánto necesitaba este producto.",
  "¿Cuál versión de mí prefieres?"
];

export const eras = [
  {
    title: "Renacimiento Europeo", date: "Siglos XV–XVI", motif: "portrait",
    context: "En algunos retratos de élite, la piel clara y los cuerpos de formas suaves podían comunicar estatus, acceso a recursos y distancia del trabajo manual. No existía un único ideal compartido por todas las comunidades.",
    economy: "El arte de corte, el mecenazgo y la posición social influían en quién podía ser retratado y cómo se representaba."
  },
  {
    title: "Años 20 · Flappers", date: "Década de 1920", motif: "jazz",
    context: "La silueta recta y el cabello corto se asociaron en ciertos espacios urbanos con nuevas formas de vida y expresión. La moda también imponía normas y no describía la experiencia de todas las mujeres.",
    economy: "Revistas, cine, publicidad y una industria de moda en expansión hicieron circular estilos a mayor velocidad."
  },
  {
    title: "Años 90 · Heroin chic", date: "Década de 1990", motif: "editorial",
    context: "Parte de la fotografía de moda popularizó una estética pálida, delgada y desaliñada. El estilo editorial no era una medida de salud, valor ni bienestar.",
    economy: "La fotografía de alta moda y las revistas globales dieron visibilidad a imágenes que podían convertirse en aspiraciones de consumo."
  },
  {
    title: "Era digital y filtros", date: "Presente", motif: "digital",
    context: "Filtros, edición y recomendaciones algorítmicas hacen que imágenes muy producidas aparezcan junto a momentos cotidianos. Las plataformas no reflejan una muestra neutral del mundo.",
    economy: "La atención, los datos y la publicidad financian muchas plataformas; la apariencia puede convertirse en una vía para vender productos."
  }
];

export const scenes = [
  {
    title: "La portada de primavera", setting: "Editorial de moda ficticia",
    description: "Una escena suave de estudio con flores, telas y una figura enmarcada.",
    hotSpots: ["Iluminación y encuadre", "Retoque digital", "Selección de 1 foto entre 200", "Pose forzada"]
  },
  {
    title: "La campaña de la mañana perfecta", setting: "Anuncio ficticio de cuidado personal",
    description: "Una rutina cotidiana convertida en una escena impecable para promocionar una marca.",
    hotSpots: ["Iluminación y encuadre", "Retoque digital", "Selección de 1 foto entre 200", "Estrategia de marketing"]
  }
];

export const debates = [
  {
    question: "¿Cuándo el autocuidado se convierte en presión estética?",
    sides: [
      ["Puede ser difícil separar lo que deseo de lo que aprendí a desear.", "Preguntarse por el origen de una rutina puede ayudar a recuperar elección."],
      ["Una práctica también puede dar placer o sentido sin tener que justificarse.", "La intención no siempre es fija; puede cambiar según el momento."]
    ]
  },
  {
    question: "¿Tenemos que amar nuestro cuerpo para respetarlo?",
    sides: [
      ["El respeto no debería depender de sentir entusiasmo por la propia apariencia.", "La neutralidad puede ser un lugar válido en días difíciles."],
      ["Para algunas personas, cultivar aprecio ha sido una experiencia importante.", "No hay una emoción correcta ni una obligación de llegar a ella."]
    ]
  },
  {
    question: "¿Las redes reflejan lo que nos gusta o moldean lo que vemos?",
    sides: [
      ["Elegimos seguir cuentas, pero no controlamos todos los criterios de recomendación.", "Observar qué se repite puede revelar patrones que pasan inadvertidos."],
      ["También podemos crear comunidades y encontrar referentes diversos.", "La agencia personal y el diseño de las plataformas pueden coexistir."]
    ]
  }
];

export const identityCards = [
  { id: "intereses", title: "Lo que me da curiosidad", icon: "✿", prompts: ["Aprender algo nuevo", "Música / libros / arte"] },
  { id: "habilidades", title: "Lo que sé hacer", icon: "✳", prompts: ["Escuchar con atención", "Resolver problemas"] },
  { id: "valores", title: "Lo que quiero cuidar", icon: "♡", prompts: ["La honestidad", "La justicia"] },
  { id: "experiencias", title: "Lo que he atravesado", icon: "❋", prompts: ["Un cambio importante", "Algo que me enseñó paciencia"] },
  { id: "vinculos", title: "Con quién comparto", icon: "⌂", prompts: ["Amistades", "Personas que me acompañan"] },
  { id: "proyectos", title: "Lo que imagino", icon: "✧", prompts: ["Un plan pequeño", "Algo que quiero construir"] }
];

export const scenarios = [
  {
    title: "La foto antes de salir",
    text: "Alex revisa muchas veces una foto antes de publicarla y se inquieta si no recibe las reacciones que esperaba. En los últimos días ha dejado de juntarse con amistades para editar imágenes.",
    answer: "señal",
    feedback: "La preocupación empieza a interferir con vínculos y actividades. No permite concluir un diagnóstico, pero sí puede ser un motivo para conversar con alguien de confianza y buscar orientación profesional."
  },
  {
    title: "Un cambio de estilo",
    text: "Sam quiere probar un peinado distinto porque le gusta cómo se ve en una artista. Lo comenta con amistades y sigue participando en sus actividades habituales.",
    answer: "contexto",
    feedback: "Explorar un estilo no es por sí solo una señal de un problema. Importan el bienestar, la libertad de elección y el impacto que tiene en la vida cotidiana."
  },
  {
    title: "Las reglas ocupan cada vez más espacio",
    text: "Dani siente cada vez más ansiedad alrededor de la comida y el ejercicio, evita planes para seguir reglas estrictas y le cuesta concentrarse en otras cosas.",
    answer: "señal",
    feedback: "La ansiedad, las reglas rígidas y el impacto en la vida diaria merecen atención y apoyo profesional. No hace falta esperar a tener certeza o a que la situación empeore para pedir ayuda."
  }
];
