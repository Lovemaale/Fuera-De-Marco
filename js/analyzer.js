const patterns = [
  {
    category: "Presión estética",
    match: /\b(deber[ií]as|tienes que|necesitas|arreglar|corregir|perfect[oa]|mejor versi[oó]n)\b/i,
    explanation: "El lenguaje sugiere que existe una apariencia que habría que alcanzar o corregir."
  },
  {
    category: "Comparación corporal",
    match: /\b(antes y despu[eé]s|cu[aá]l versi[oó]n|compar\w*|mejor que|peor que|como ella|como [eé]l)\b/i,
    explanation: "La frase invita a comparar imágenes o personas, aunque una imagen no muestra una vida completa."
  },
  {
    category: "Valor personal condicionado",
    match: /\b(si de verdad quieres|si te esfuerzas|vales|mereces|[eé]xito|disciplina)\b/i,
    explanation: "Puede vincular la valía o el éxito de alguien con una conducta, apariencia o nivel de esfuerzo."
  },
  {
    category: "Cultura de dietas",
    match: /\b(quemar|compensar|permitido|prohibido|culpa|trampa|limpio|detox|calor[ií]as)\b/i,
    explanation: "Usa reglas o juicios morales alrededor de la comida, el ejercicio o el cuerpo."
  },
  {
    category: "Publicidad y consumo",
    match: /\b(necesit[oa]|compra|producto|cambi[oó] mi vida|colaboraci[oó]n|c[oó]digo|descuento|ad\b|s[eé]rum)\b/i,
    explanation: "Puede presentar una necesidad o experiencia personal junto a una invitación a consumir."
  },
  {
    category: "Generalización",
    match: /\b(siempre|nunca|todo el mundo|todos|nadie|cualquiera)\b/i,
    explanation: "Una palabra absoluta puede convertir una experiencia particular en una regla para todo el mundo."
  }
];

export function analyzeMessage(message) {
  const text = message.trim();
  const matches = patterns.filter((pattern) => pattern.match.test(text));
  const categories = matches.length ? matches.map((item) => item.category) : ["Afirmación para explorar"];
  const explanation = matches.length
    ? matches.map((item) => item.explanation).join(" ")
    : "No aparece una señal clara en estas expresiones. Eso no confirma que la frase sea cierta: podemos preguntar qué afirma y en qué contexto.";
  return {
    categories,
    explanation,
    questions: [
      "¿Qué idea o expectativa da por sentada esta frase?",
      "¿A quién incluye o deja fuera? ¿Qué contexto falta?",
      "¿Qué evidencia podría apoyar esta afirmación y quién se beneficia de compartirla?"
    ]
  };
}

export function classifyPhrase(phrase) {
  if (/\b(siempre|nunca|todo el mundo|todos|nadie|cualquiera)\b/i.test(phrase)) return "Generalización";
  if (/\b(creo|me gusta|me funciona|prefiero|siento|para mí)\b/i.test(phrase)) return "Opinión";
  return "Afirmación que requiere evidencia";
}
