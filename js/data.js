export const modules = [
  { id: "tca", number: "01", title: "¿Qué es un TCA?", subtitle: "Una guía para empezar", kind: "Comprender" },
  { id: "feed", number: "02", title: "El feed", subtitle: "Lo que vemos, lo que creemos", kind: "Explorar" },
  { id: "imagen", number: "03", title: "Detrás de la imagen", subtitle: "Lo que no te muestran", kind: "Investigar" },
  { id: "museo", number: "04", title: "El museo de la belleza", subtitle: "Una historia que cambia", kind: "Recorrer" },
  { id: "discurso", number: "05", title: "Desmonta el discurso", subtitle: "¿Qué hay detrás de lo que dicen?", kind: "Analizar" },
  { id: "conversacion", number: "06", title: "La conversación incómoda", subtitle: "Preguntas que merecen discutirse", kind: "Reflexionar" },
  { id: "laboratorio", number: "07", title: "Laboratorio de pensamiento crítico", subtitle: "Pon a prueba lo que consumes", kind: "Experimentar" },
  { id: "identidad", number: "08", title: "Más allá del espejo", subtitle: "Mi identidad no cabe en una fotografía", kind: "Crear" },
  { id: "bienestar", number: "09", title: "Cuando la presión deja de ser estética", subtitle: "Comprender para reconocer", kind: "Acompañarse" }
];

export const posts = [
  {
    author: "Nina en movimiento", handle: "@nina.entrena", label: "Colaboración pagada · VitaForma",
    category: "Fitness", time: "hace 12 min", visual: "sunrise", image: "./assets/@nina.entrena.jpg", imageAlt: "Selfi en un gimnasio junto a una caminadora; la publicación plantea una rutina como modelo de éxito.",
    caption: "Mi rutina de las 5:30 cambió mi vida. Si de verdad quieres, siempre encuentras tiempo.",
    phrase: "Si de verdad quieres, siempre encuentras tiempo.",
    hidden: ["Luz dorada y encuadre preparado para esta toma.", "Una experiencia personal se presenta como regla para todo el mundo.", "La relación comercial aparece en letra pequeña."]
  },
  {
    author: "Mesa de todos los días", handle: "@mesacotidiana", label: "Diario personal",
    category: "Alimentación", time: "hace 38 min", visual: "table", image: "./assets/@mesacotidiana.jpg", imageAlt: "Plato servido en una mesa, fotografiado como una publicación de estilo de vida.",
    caption: "Lo que como en un día para sentirme con energía. Cada cuerpo y cada jornada tienen necesidades distintas.",
    phrase: "Lo que como en un día me funciona a mí.",
    hidden: ["Un día editado no cuenta toda una historia.", "La alimentación depende de muchos factores personales.", "La cámara muestra lo elegido, no lo que quedó fuera."]
  },
  {
    author: "Pausa bonita", handle: "@pausabonita", label: "Rutina compartida",
    category: "Autocuidado", time: "hace 1 h", visual: "bath", image: "./assets/@pausabonita.jpg", imageAlt: "Mesa de cuidado de la piel con productos, vela y una tableta.",
    caption: "Domingo de reset: mascarilla, velas y volver a ser mi mejor versión.",
    phrase: "Cuidarme es convertirme en mi mejor versión.",
    hidden: ["El autocuidado se vincula aquí con productos y apariencia.", "Descansar o pedir ayuda también puede ser cuidarse.", "La idea de una versión 'mejor' merece una pregunta."]
  },
  {
    author: "Piel de cerca", handle: "@pieldecerca", label: "Publicidad · producto enviado",
    category: "Belleza", time: "hace 2 h", visual: "skincare", image: "./assets/@pieldecerca.jpg", imageAlt: "Persona aplicando un producto para el cuidado de la piel frente a la cámara.",
    caption: "No sabía cuánto necesitaba este sérum hasta que lo probé. #ad escondido entre etiquetas.",
    phrase: "No sabía cuánto necesitaba este producto.",
    hidden: ["La publicación promociona un producto.", "La etiqueta publicitaria está poco visible.", "La sensación de necesitarlo puede formar parte del mensaje de venta."]
  },
  {
    author: "En tendencia", handle: "@entendencia", label: "Tendencia · #miantesyahora",
    category: "Tendencias", time: "hace 4 h", visual: "mirror", image: "./assets/@entendencia.jpg", imageAlt: "Dos retratos de la misma artista en momentos distintos, presentados en comparación.",
    caption: "El mismo espejo, dos momentos distintos. ¿Cuál versión prefieres?",
    phrase: "¿Cuál versión de mí prefieres?",
    hidden: ["Una comparación invita a evaluar dos imágenes como si fueran la persona completa.", "Pose, ropa, luz y momento pueden cambiar la fotografía.", "La pregunta desplaza la atención hacia la aprobación externa."]
  }
];

export const statements = [
  {
    text: "Aunque la mona se vista de seda, mona se queda.",
    meaning: "Compara a una mujer con un animal y afirma que cambiar su apariencia no cambia su supuesto valor. Convierte un insulto en una sentencia.",
    context: "Es un refrán repetido como si describiera una verdad. En realidad, refleja prejuicios sobre quién puede considerarse bella o digna de respeto.",
    possibleImpact: "Puede alimentar vergüenza, descalificación y la idea de que el aspecto propio siempre será insuficiente.",
    question: "¿Quién decide qué significa “mona” aquí y por qué la apariencia se usa para rebajar a alguien?",
    reframe: "La ropa no determina el valor ni la identidad de nadie."
  },
  {
    text: "Antes muerta que sencilla.",
    meaning: "Usa una hipérbole para presentar la sencillez como algo que habría que evitar a toda costa.",
    context: "La frase puede sonar juguetona, pero también enlaza aceptación social con estar siempre arreglada. No hace falta leerla literalmente para cuestionar esa exigencia.",
    possibleImpact: "Puede hacer que descansar, salir sin arreglarse o elegir comodidad parezcan motivos de vergüenza o de juicio.",
    question: "¿Qué parece estar en juego si una persona decide no arreglarse hoy?",
    reframe: "Puedo elegir cómo presentarme según lo que quiero y necesito, sin tener que demostrar nada."
  },
  {
    text: "Para ser bella hay que ver estrellas.",
    meaning: "Sugiere que el dolor o la incomodidad son el precio normal para alcanzar la belleza.",
    context: "La frase convierte una norma estética aprendida en una regla inevitable. La belleza no exige dolor y ninguna apariencia es una obligación.",
    possibleImpact: "Puede normalizar ignorar las propias señales de malestar y premiar el sacrificio por la apariencia.",
    question: "¿Quién se beneficia cuando se presenta el malestar como requisito para ser aceptada?",
    reframe: "Mi bienestar no tiene que ponerse en riesgo para cumplir una expectativa estética."
  },
  {
    text: "No hay mujer fea, sino mal arreglada.",
    meaning: "Parece un cumplido, pero mantiene la idea de que toda mujer debe ser atractiva y que la apariencia se puede corregir.",
    context: "El juicio no desaparece: cambia de “fea” a “mal arreglada”. Además, coloca sobre las mujeres una obligación especial de cuidar su presentación.",
    possibleImpact: "Puede reforzar la vigilancia constante del aspecto, el temor a ser juzgada y el consumo como solución a una supuesta falta.",
    question: "¿Por qué una mujer tendría que ser bonita para merecer respeto?",
    reframe: "Nadie necesita arreglarse para merecer buen trato."
  },
  {
    text: "Como te ven, te tratan.",
    meaning: "Presenta el trato injusto por apariencia como una regla inevitable, en vez de señalarlo como un prejuicio que puede cuestionarse.",
    context: "La apariencia sí puede influir en cómo otras personas reaccionan, pero eso no vuelve justo ese trato ni define a quien lo recibe.",
    possibleImpact: "Puede generar vigilancia, comparación o la sensación de que cada interacción depende de controlar la propia imagen.",
    question: "¿Qué responsabilidad tiene quien juzga, y no solo quien está siendo juzgada?",
    reframe: "Merecemos respeto por ser personas; los prejuicios sobre la apariencia se pueden cuestionar."
  },
  {
    text: "La primera impresión es la que cuenta.",
    meaning: "Reduce un encuentro a una impresión rápida, donde la apariencia suele ocupar un lugar desproporcionado.",
    context: "Las primeras impresiones son parciales y pueden estar influidas por estereotipos. Conocer a alguien toma más que un vistazo.",
    possibleImpact: "Puede aumentar la presión por preparar cada aparición y el miedo a que una foto o un momento cuente toda una historia.",
    question: "¿Qué información importante queda fuera de una primera impresión?",
    reframe: "Una primera impresión es solo un comienzo; las personas somos más que una imagen."
  },
  {
    text: "Hay que sufrir para estar bella.",
    meaning: "Presenta el sacrificio como una condición natural para cumplir un ideal de belleza.",
    context: "Es una norma cultural, no una verdad sobre los cuerpos ni una recomendación de bienestar.",
    possibleImpact: "Puede hacer que ignorar incomodidad o malestar parezca una prueba de disciplina, y que poner límites parezca fracasar.",
    question: "¿Qué cambiaría si el bienestar importara más que cumplir ese ideal?",
    reframe: "No necesito sufrir ni demostrar disciplina para ser tratada con respeto."
  },
  {
    text: "Una señorita siempre tiene que estar presentable.",
    meaning: "Impone una expectativa de género y apariencia como si fuera una obligación constante.",
    context: "“Presentable” depende de quién mira y de normas que cambian según la época y el lugar. No es una medida de carácter.",
    possibleImpact: "Puede consumir tiempo y energía, limitar la comodidad y hacer que una persona se sienta observada incluso en espacios cotidianos.",
    question: "¿Quién define “presentable” y por qué se exige más a unas personas que a otras?",
    reframe: "Mi forma de vestir puede cambiar; mi dignidad no depende de ella."
  },
  {
    text: "Si te esfuerzas, puedes cambiar cualquier parte de ti.",
    meaning: "Presenta el cuerpo como un proyecto que debe corregirse y atribuye cualquier diferencia a falta de esfuerzo.",
    context: "Los cuerpos, la salud y las circunstancias no responden a una sola fórmula. La frase convierte una preferencia estética en una exigencia moral.",
    possibleImpact: "Puede alimentar culpa, control y la idea de que nunca se está haciendo lo suficiente. Un TCA no se explica por falta de voluntad.",
    question: "¿Qué supone esta frase sobre quién tiene el control y quién merece aprobación?",
    reframe: "No tengo que cambiar mi cuerpo para demostrar disciplina ni merecer respeto."
  },
  {
    text: "Es solo una broma; no seas tan sensible.",
    meaning: "Desplaza la atención del comentario que hirió hacia la reacción de quien lo recibió.",
    context: "La intención humorística no borra el efecto de una burla sobre el cuerpo, la comida o la apariencia.",
    possibleImpact: "Puede enseñar a callar el malestar y dejar a alguien más aislado. Escuchar y disculparse puede reparar mejor que discutir si debía doler.",
    question: "¿Quién decide si un comentario hizo daño: quien lo dijo o quien lo recibió?",
    reframe: "Puedo marcar un límite y merezco que me escuchen sin ridiculizarme."
  },
  {
    text: "Cuando bajes de peso, vas a verte mucho mejor.",
    meaning: "Condiciona el atractivo y la aprobación a un cambio corporal que otras personas consideran deseable.",
    context: "No se puede deducir la salud ni el valor de alguien por su apariencia. Los elogios centrados en cambios físicos pueden ser complejos para quien está pasando por un TCA.",
    possibleImpact: "Puede reforzar comparación y la sensación de que el cuerpo actual merece menos aceptación o cuidado.",
    question: "¿Cómo podrías reconocer a alguien sin evaluar su cuerpo?",
    reframe: "Puedo expresar cariño, admiración o interés sin comentar el tamaño o el cambio del cuerpo de alguien."
  }
];

export const eras = [
  {
    title: "Renacimiento europeo", date: "Siglos XV–XVI", motif: "portrait", source: "https://www.metmuseum.org/es/perspectives/the-ideal-woman", sourceLabel: "The Met · la mujer ideal en el Renacimiento",
    cover: "./assets/canondebellezadelrenacimiento1.jpg", coverAlt: "Detalle de un retrato renacentista de una mujer con cabello claro.",
    images: [
      { src: "./assets/canondebellezadelrenacimiento12.avif", alt: "Retrato pictórico de una mujer con sombrero y vestido claro." }
    ],
    maleReference: {
      title: "El cuerpo como proporción",
      src: "./assets/male-renacimiento-vitruvio.jpg",
      alt: "El Hombre de Vitruvio de Leonardo da Vinci, dibujado dentro de un círculo y un cuadrado.",
      context: "El dibujo de Leonardo da Vinci relaciona el cuerpo masculino con proporciones geométricas e ideas humanistas. Es un ideal de proporción de su época, no un retrato de toda la diversidad corporal.",
      credit: "Leonardo da Vinci; fotografía de Luc Viatour",
      source: "https://commons.wikimedia.org/wiki/File:Da_Vinci_Vitruve_Luc_Viatour.jpg",
      license: "Dominio público"
    },
    context: "En algunos textos y retratos de élite de la Italia renacentista se elogiaban rasgos como el cabello claro y la piel pálida; ciertas prácticas de arreglo buscaban acercarse a esas convenciones. Es un registro parcial de círculos específicos, no un ideal único para todas las mujeres, regiones o clases sociales.",
    economy: "Los retratos de corte, el mecenazgo y los matrimonios entre familias influyentes condicionaban quién aparecía en las imágenes y cómo se presentaba. La pintura muestra convenciones y encargos, no la apariencia cotidiana de toda una población.",
    archiveLabel: "Retratos de otras épocas · una comparación aparte",
    archiveText: "Estas obras también venían en los archivos, pero no corresponden al Renacimiento. Las dejamos en una franja separada para que la galería no confunda sus fechas con las de esta sala.",
    archiveImages: [
      { src: "./assets/canondebellezadelrenacimiento13.jpg", alt: "Retrato pictórico de una mujer con vestido blanco; periodo distinto del Renacimiento." },
      { src: "./assets/canondebellezadelrenacimiento14.jpg", alt: "Retrato pictórico de una mujer con sombrero de ala ancha, de época posterior." },
      { src: "./assets/canondebellezadelrenacimiento15.jpg", alt: "Retrato pictórico de una mujer con vestido claro y cabello largo, de época posterior." }
    ]
  },
  {
    title: "Los años veinte · moda flapper", date: "Década de 1920", motif: "jazz", source: "https://fashionhistory.fitnyc.edu/1920-1929/", sourceLabel: "FIT · moda de 1920–1929",
    cover: "./assets/canondebellezadelosaños201.jpg", coverAlt: "Fotografía de archivo de cuatro mujeres con vestidos y peinados de los años veinte.",
    images: [
      { src: "./assets/canondebellezadelosaños202.jpg", alt: "Retrato de archivo de una mujer con sombrero cloche y abrigo de los años veinte." },
      { src: "./assets/canondebellezadelosaños203.jpg", alt: "Dos mujeres con sombreros cloche y vestidos de los años veinte." },
      { src: "./assets/canondebellezadelosaños205.jpg", alt: "Grupo de bailarinas en una escena callejera de estilo años veinte." }
    ],
    maleReference: {
      title: "Elegancia de estudio",
      src: "./assets/male-anos-20-bojan.jpg",
      alt: "Retrato de estudio de Bojan Smerkolj en los años veinte, con traje formal y cabello peinado.",
      context: "El retrato de Bojan Smerkolj muestra una imagen cuidada con traje, cabello peinado y pose de estudio. Es una convención de presentación masculina en retratos formales, no una expectativa compartida por todos.",
      credit: "Fotografía de Veličan Bešter",
      source: "https://commons.wikimedia.org/wiki/File:Bojan_Smerkolj_1920s.jpg",
      license: "Dominio público"
    },
    context: "En la moda urbana y mediática de los años veinte se difundieron vestidos más rectos, cinturas bajas, faldas más cortas y cortes de cabello breves. La silueta flapper fue una moda visible y cambiante, no una forma de cuerpo que todas tuvieran ni un ideal universal.",
    economy: "Revistas, ilustraciones de moda, cine y tiendas por departamentos aceleraron la circulación de estilos. El acceso a la ropa y la posibilidad de adoptar estas modas dependían de clase, edad, lugar y contexto racial."
  },
  {
    title: "Los años 2000 · cultura pop y moda", date: "2000–2009", motif: "editorial", source: "https://fashionhistory.fitnyc.edu/2000-2009/", sourceLabel: "FIT · moda de 2000–2009",
    cover: "./assets/canondebellezadelosaños2000.jpg", coverAlt: "Grupo de modelos en una presentación de moda de los años 2000.",
    images: [],
    maleReference: {
      title: "Pasarela Ed Hardy, 2008",
      src: "./assets/male-anos-2000-ed-hardy.jpg",
      alt: "Modelos masculinos en una pasarela de Ed Hardy en 2008, con estampados coloridos y accesorios.",
      context: "En esta pasarela aparece un torso masculino expuesto junto con estampados llamativos y accesorios. Es una estética específica de moda urbana y pasarela, no un estándar compartido por todas las personas.",
      credit: "Glenn Francis / Toglenn; miniatura redimensionada",
      source: "https://commons.wikimedia.org/wiki/File:Ed_Hardy_Runway_Models.jpg",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/"
    },
    context: "En la cultura pop y la moda comercial de comienzos de los 2000 se hicieron visibles los jeans de tiro bajo, las camisetas cortas y la exposición del abdomen. La moda cambió dentro de la década; estas prendas son tendencias, no un canon de belleza compartido por todas las personas.",
    economy: "La celebridad, la televisión, la música y las revistas conectaron la moda con el consumo masivo. Las marcas y tallas disponibles también podían excluir a quienes no encajaban en la silueta que promocionaban.",
    archiveLabel: "Una antesala visual: imágenes de moda de los años noventa",
    archiveText: "Estas fotografías pertenecen a otra década. Se muestran como contexto de la cultura editorial que circulaba antes de los 2000, no como parte del mismo periodo ni como una norma universal.",
    archiveImages: [
      { src: "./assets/canondebellezadelosaños901.jpg", alt: "Fotografía de archivo de tres modelos en un evento de moda de los años noventa." },
      { src: "./assets/canondebellezadelosaños902.jpg", alt: "Imagen publicitaria de alta costura de los años noventa." },
      { src: "./assets/canondebellezadelosaños9029.jpg", alt: "Fotografía editorial de moda de los años noventa." },
      { src: "./assets/canondebellezadelosaños903.jpg", alt: "Retrato editorial de moda de los años noventa." },
      { src: "./assets/canondebellezadelosaños905.png", alt: "Collage de fotografías editoriales y modelos de los años noventa." },
      { src: "./assets/canondebellezadelosaños906.jpg", alt: "Fotografía de artista con ropa y accesorios populares de los años noventa." },
      { src: "./assets/canondebellezadelosaños908.jpg", alt: "Retrato de moda de los años noventa." }
    ]
  },
  {
    title: "La era de las plataformas", date: "Presente", motif: "digital", source: "https://www.unicef.org/parenting/mental-health/teens-body-image", sourceLabel: "UNICEF · redes sociales e imagen corporal",
    cover: "./assets/actualidad.jpg", coverAlt: "Retrato colectivo de figuras mediáticas actuales en una producción de moda.",
    images: [
      { src: "./assets/actualidad2.jpg", alt: "Grupo de modelos de diferentes tonos de piel en una producción de moda." },
      { src: "./assets/actualidad3.jpg", alt: "Dos modelos en camerinos durante una producción contemporánea." },
      { src: "./assets/actualidad6.jpg", alt: "Retrato de una figura pública en una imagen digital contemporánea." },
      { src: "./assets/actualidad9.jpg", alt: "Retrato contemporáneo con maquillaje editorial." },
      { src: "./assets/actualidad9090.jpg", alt: "Autorretrato cotidiano frente a un espejo en una plataforma digital." },
      { src: "./assets/actualidad9q0.jpg", alt: "Fotografía cotidiana compartida en redes sociales." }
    ],
    maleReference: {
      title: "Una propuesta de pasarela, 2024",
      src: "./assets/male-presente-fashion-show.jpg",
      alt: "Modelo masculino en un desfile estudiantil de moda de 2024, con un conjunto experimental.",
      context: "En este desfile estudiantil de 2024, el diseño masculino combina una silueta estilizada con ropa experimental. Es una propuesta entre muchas, no una expectativa para todos los cuerpos o identidades.",
      credit: "COD Newsroom; miniatura redimensionada",
      source: "https://commons.wikimedia.org/wiki/File:College_of_DuPage_CODe_Fashion_Show_2024_-_53718908226.jpg",
      license: "CC BY 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by/2.0/"
    },
    context: "Hoy conviven más cuerpos, estilos e identidades en algunas pantallas, pero la representación sigue siendo desigual. Filtros, retoques y sistemas de recomendación pueden hacer que imágenes muy producidas parezcan cotidianas; lo que se vuelve visible no es una muestra neutral de la sociedad.",
    economy: "La atención, los datos y la publicidad sostienen muchas plataformas. La apariencia puede usarse para captar vistas, vender productos o mantener a las personas comparándose; la repetición no convierte un ideal en una verdad."
  }
];

export const scenes = [
  {
    title: "La portada de primavera", setting: "Editorial de moda ficticia",
    description: "Una escena suave de estudio con flores, telas y una figura enmarcada.",
    image: "./assets/La portada de primavera.jpg",
    imageAlt: "Editorial visual de moda inspirada en primavera.",
    details: [
      "La posición de la cámara, la luz y el fondo guían lo que se nota primero.",
      "El retoque puede alterar textura, color u objetos de una escena; no revela una apariencia más verdadera.",
      "En una sesión se producen muchas tomas y se selecciona una pequeña parte para publicar.",
      "Una pose puede ser sostenida para la cámara y no representar una postura cotidiana."
    ],
    hotSpots: ["Iluminación y encuadre", "Retoque digital", "Selección de 1 foto entre 200", "Pose forzada"]
  },
  {
    title: "La campaña de la mañana perfecta", setting: "Anuncio ficticio de cuidado personal",
    description: "Una rutina cotidiana convertida en una escena impecable para promocionar una marca.",
    image: "./assets/Anuncio ficticio de cuidado personal.jpg",
    imageAlt: "Anuncio editorial ficticio de una rutina de cuidado personal.",
    details: [
      "La posición de la cámara, la luz y el fondo construyen una imagen de rutina fácil y ordenada.",
      "El retoque puede mejorar piel, colores y objetos para que todo parezca uniforme.",
      "La campaña elige una sola imagen entre muchas opciones para transmitir su mensaje.",
      "Los anuncios usan una historia aspiracional para relacionar el cuidado personal con una marca."
    ],
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
