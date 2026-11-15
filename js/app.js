import { modules, posts, statements, eras, scenes, debates, identityCards, scenarios } from "./data.js";
import { analyzeMessage, classifyPhrase } from "./analyzer.js";

const app = document.querySelector("#app");
const nav = document.querySelector("#site-nav");
const menuToggle = document.querySelector(".menu-toggle");
const installButton = document.querySelector(".install-button");
const STORAGE_KEY = "fuera-de-marco";
let installPrompt;
let pendingPhrase = "";
let selectedStatementIndex = null;
let state = loadState();

function loadState() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || { visited: [], reflections: {}, identity: [] };
  } catch (error) {
    console.warn("No se pudo leer el progreso guardado.", error);
    return { visited: [], reflections: {}, identity: [] };
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    return true;
  } catch (error) {
    console.warn("No se pudo guardar el progreso.", error);
    const notice = document.querySelector("[data-storage-notice]");
    if (notice) notice.textContent = "No se pudo guardar en este dispositivo. Puedes continuar sin guardar.";
    return false;
  }
}

function escapeHTML(value = "") {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);
}

function moduleFor(id) {
  return modules.find((item) => item.id === id);
}

function moduleHeading(id, kicker = "") {
  const item = moduleFor(id);
  return `<div class="module-heading">
    <p class="eyebrow">${item.number} · ${escapeHTML(kicker || item.kind)}</p>
    <h1>${escapeHTML(item.title)}</h1>
    <p class="module-subtitle">${escapeHTML(item.subtitle)}</p>
  </div>`;
}

function homePage() {
  const cards = modules.map((item, index) => `
    <a class="module-card card-${index + 1}" href="#${item.id}">
      <span class="card-number">${item.number}</span>
      <span class="card-title">${escapeHTML(item.title)}</span>
      <span class="card-subtitle">${escapeHTML(item.subtitle)}</span>
      <span class="card-link">${escapeHTML(item.kind)} <span aria-hidden="true">↗</span></span>
      ${state.visited.includes(item.id) ? '<span class="visited-mark" aria-label="Visitado">✿</span>' : ""}
    </a>`).join("");
  return `<section class="home-shell">
    <div class="hero">
      <div class="hero-copy">
        <p class="eyebrow"><span class="eyebrow-flower">✿</span> Un espacio para mirar con curiosidad</p>
        <h1>FUERA <em>DE</em><br>MARCO<span class="hero-period">.</span></h1>
        <p class="hero-question">¿Quién te enseñó a mirarte así?</p>
        <a class="button button-dark" href="#feed">Entrar a la revista <span aria-hidden="true">↗</span></a>
        <p class="hero-quote">«No eres una imagen que necesita ser corregida. Eres una persona cuya identidad no cabe en un marco»</p>
      </div>
      <div class="hero-art">
        <img class="hero-image" src="./assets/arte.png" alt="Collage artístico de un rostro rodeado de flores." fetchpriority="high">
        <span class="art-sun"></span><span class="art-frame"></span><span class="art-figure"></span>
        <span class="art-flower flower-one">✿</span><span class="art-flower flower-two">❀</span>
        <span class="art-ribbon">mirar<br>también<br>se aprende</span>
        <span class="art-caption">una mirada<br>en construcción</span>
      </div>
      <span class="hero-sticker" aria-hidden="true">tu historia<br>es más grande<br>que una foto</span>
    </div>
    <div class="intro-strip">
      <span class="strip-star" aria-hidden="true">✳</span>
      <p>Un recorrido abierto para explorar cómo se construyen las imágenes, las ideas y las expectativas. La apariencia no mide tu valor.</p>
      <span class="strip-note">sin ruta obligatoria · a tu ritmo</span>
    </div>
    <aside class="digital-care-note"><p class="eyebrow">Una nota de cuidado</p><h2>No tienes que ganarte el respeto con tu apariencia.</h2><p>Los TCA son problemas de salud complejos; no son una elección, una moda ni falta de voluntad. Si este tema te toca de cerca, puedes saltarte cualquier parte y buscar apoyo a tu ritmo.</p><a href="#bienestar">Ver información y recursos de apoyo ↗</a></aside>
    <section class="home-image-story"><div class="home-image-copy"><p class="eyebrow">Una portada no cuenta toda una vida</p><h2>Hay más en ti que lo que cabe en el marco.</h2><p>Intereses, afectos, preguntas, recuerdos y formas de cuidar también construyen quién eres. Este recorrido mira las imágenes con curiosidad, sin convertir el cuerpo en una tarea.</p><a href="#identidad" class="text-button">Descubrir “Más allá del espejo” ↗</a></div><img src="./assets/diversidad.jpg" alt="Collage artístico de muchos rostros diferentes." loading="lazy"><img class="home-image-sticker" src="./assets/flormorado.png" alt="" aria-hidden="true" loading="lazy"></section>
    <section class="home-photo-wall" aria-labelledby="photo-wall-title"><div class="photo-wall-heading"><p class="eyebrow">Recortes del archivo</p><h2 id="photo-wall-title">Una imagen abre preguntas.<br><em>No dicta respuestas.</em></h2><p>Ideas, pantallas, espejos, afectos y mensajes forman parte del paisaje visual que miramos cada día.</p></div><div class="photo-wall-grid">
      <figure class="wall-wide"><img src="./assets/concepto general.jpg" alt="Collage ilustrado de una cabeza rodeada por iconos de redes, pantallas y mensajes." loading="lazy"><figcaption>lo que vemos también se diseña</figcaption></figure>
      <figure><img src="./assets/amo.jpg" alt="Composición artística editorial sobre identidad y expresión personal." loading="lazy"><figcaption>identidad · expresión</figcaption></figure>
      <figure class="wall-tall"><img src="./assets/cara dividida.png" alt="Ilustración de un rostro dividido en fragmentos de color." loading="lazy"><figcaption>ningún fragmento lo cuenta todo</figcaption></figure>
      <figure><img src="./assets/boca.jpg" alt="Composición gráfica de labios en una página de estilo revista." loading="lazy"><figcaption>mensajes que se repiten</figcaption></figure>
      <figure><img src="./assets/amor.jpg" alt="Edificios y flores en una composición artística." loading="lazy"><figcaption>también habitamos el mundo</figcaption></figure>
      <figure class="wall-wide"><img src="./assets/estereotipos.jpg" alt="Ilustración de perfiles y tarjetas que representan estereotipos sociales." loading="lazy"><figcaption>preguntar quién puso la etiqueta</figcaption></figure>
      <figure><img src="./assets/revista.png" alt="Ilustración de una revista abierta." loading="lazy"><figcaption>la página elige qué mostrar</figcaption></figure>
      <figure><img src="./assets/telefono.jpg" alt="Teléfono móvil como símbolo de las imágenes cotidianas en pantalla." loading="lazy"><figcaption>la pantalla no es el mundo entero</figcaption></figure>
      <figure><img src="./assets/arteconceptual.png" alt="Ilustración conceptual para explorar las imágenes y la mirada." loading="lazy"><figcaption>mirar con curiosidad</figcaption></figure>
      <figure><img src="./assets/ventana.png" alt="Ilustración de una ventana como marco visual." loading="lazy"><figcaption>¿qué queda fuera del marco?</figcaption></figure>
      <figure><img src="./assets/espejo.png" alt="Ilustración de un espejo." loading="lazy"><figcaption>una imagen no define a nadie</figcaption></figure>
      <figure><img src="./assets/marcoig.png" alt="Marco gráfico inspirado en una publicación de redes sociales." loading="lazy"><figcaption>publicar también es encuadrar</figcaption></figure>
    </div><div class="sticker-shelf" aria-hidden="true"><img src="./assets/boton.png" alt="" loading="lazy"><img src="./assets/camara.png" alt="" loading="lazy"><img src="./assets/caracol.png" alt="" loading="lazy"><img src="./assets/chats.png" alt="" loading="lazy"><img src="./assets/corazon.png" alt="" loading="lazy"><img src="./assets/decorado.png" alt="" loading="lazy"><img src="./assets/descarga.png" alt="" loading="lazy"><img src="./assets/estrella.png" alt="" loading="lazy"><img src="./assets/mensaje.png" alt="" loading="lazy"><img src="./assets/moño.png" alt="" loading="lazy"><img src="./assets/ositosgominola.png" alt="" loading="lazy"><img src="./assets/pin.png" alt="" loading="lazy"></div></section>
    <section class="hub-section">
      <div class="section-title-row"><div><p class="eyebrow">La revista</p><h2>Ocho puertas.<br><em>Ningún orden obligatorio.</em></h2></div><span class="hand-note">elige por dónde<br>te da curiosidad ↘</span></div>
      <div class="module-grid">${cards}</div>
      <p class="storage-notice" data-storage-notice aria-live="polite"></p>
    </section>
    <div class="home-signoff"><span aria-hidden="true">❦</span> No hay una forma correcta de recorrer este espacio.</div>
  </section>`;
}

function feedPage() {
  return `<section class="page-shell">${moduleHeading("feed", "Explorar · 5 publicaciones")}
    <div class="page-intro"><p>Las publicaciones son ficticias. Mira el mensaje, nota qué te hace pensar y, si quieres, activa los rayos X.</p>
    <button class="button button-rose" type="button" data-action="toggle-xray" aria-pressed="false">Revelar lo oculto <span aria-hidden="true">✳</span></button></div>
    <div class="feed-layout"><aside class="margin-note"><span class="note-tape">para mirar</span><p>Una publicación es una selección. ¿Qué quedó fuera del encuadre?</p><p>Un feed puede repetir ideales y hacer que parezcan universales; eso no los vuelve saludables ni ciertos.</p><span class="note-spark">✧</span></aside>
    <div class="feed-list">${posts.map((post, index) => `
      <article class="post-card paper-card" data-post="${index}">
        <div class="post-top"><span class="avatar avatar-${post.visual}">${post.author.slice(0, 1)}</span><div><strong>${escapeHTML(post.author)}</strong><small>${escapeHTML(post.handle)} · ${escapeHTML(post.time)}</small></div><span class="post-menu">···</span></div>
        <div class="post-visual visual-${post.visual}"><img src="${escapeHTML(post.image)}" alt="${escapeHTML(post.imageAlt)}" loading="lazy" decoding="async"><span class="visual-label">${escapeHTML(post.category)}</span><span class="visual-stamp">${index % 2 ? "un instante" : "escena elegida"}</span></div>
        <p class="post-label">${escapeHTML(post.label)}</p>
        <p class="post-caption">${escapeHTML(post.caption)}</p>
        <div class="xray-notes" aria-live="polite">${post.hidden.map((note) => `<span>✳ ${escapeHTML(note)}</span>`).join("")}</div>
        <div class="classification">
          <label for="classify-${index}">¿Cómo clasificarías esta frase? <strong>“${escapeHTML(post.phrase)}”</strong></label>
          <div class="classify-row"><select id="classify-${index}" aria-label="Clasificación de la publicación ${index + 1}"><option value="">Elige una opción</option><option>Opinión</option><option>Generalización</option><option>Afirmación que requiere evidencia</option></select>
          <button class="button button-small" type="button" data-action="classify" data-index="${index}">Explorar</button></div>
          <p class="feedback" data-feedback="${index}" aria-live="polite"></p>
          <button class="text-button" type="button" data-action="carry-phrase" data-index="${index}">Llevar frase a Desmonta el Discurso <span aria-hidden="true">↗</span></button>
        </div>
      </article>`).join("")}</div></div></section>`;
}

function imagePage() {
  return `<section class="page-shell">${moduleHeading("imagen", "Investigar · 2 escenas")}
    <p class="page-lede">Desliza para cambiar la escena y abre los detalles para descubrir decisiones detrás de una imagen. No se evalúan cuerpos: observamos cómo se producen imágenes.</p>
    <div class="scene-grid">${scenes.map((scene, index) => `
      <article class="scene-card paper-card">
        <div class="scene-art scene-art-${index + 1}" data-scene="${index}" data-view="after">
          <div class="scene-before"></div><div class="scene-after"></div>
          <span class="scene-frame"></span><span class="scene-object">✿</span><span class="scene-sun">☼</span>
          <span class="scene-tag">${escapeHTML(scene.setting)}</span>
          ${scene.hotSpots.map((_, spot) => `<button class="hotspot hotspot-${spot + 1}" type="button" aria-label="Inspeccionar ${escapeHTML(scene.hotSpots[spot])}" data-action="hotspot" data-scene="${index}" data-spot="${spot}">+</button>`).join("")}
          <span class="scene-state">${index === 0 ? "Selección final" : "Escena de campaña"}</span>
        </div>
        <div class="scene-controls"><label for="scene-range-${index}">Ver dos momentos</label><input id="scene-range-${index}" type="range" min="0" max="100" value="100" data-action="compare" data-scene="${index}" aria-label="Comparar escena original y final"><div class="range-labels"><span>Preparación</span><span>Imagen final</span></div></div>
        <div class="scene-copy"><p class="eyebrow">${escapeHTML(scene.setting)}</p><h2>${escapeHTML(scene.title)}</h2><p>${escapeHTML(scene.description)}</p><div class="hotspot-info" data-hotspot-info="${index}" aria-live="polite">Toca un punto + para inspeccionar las decisiones de esta escena.</div></div>
      </article>`).join("")}</div>
    <p class="small-caveat">El comparador es una metáfora visual educativa; no representa un proceso real de edición ni un estándar de apariencia. Comparar imágenes editadas con la vida cotidiana puede aumentar la vigilancia del cuerpo y el malestar en algunas personas.</p>
    <aside class="image-reflection"><img src="./assets/arquitectura.jpg" alt="Collage conceptual de una cabeza rodeada por iconos de redes, medios y mensajes." loading="lazy"><div><p class="eyebrow">Una pausa visual</p><h2>¿Quién está dentro del encuadre?</h2><p>Las imágenes que vemos están seleccionadas y ordenadas por personas y plataformas. Mira también quién falta, qué se retoca y qué mensaje acompaña a la foto.</p></div></aside>
  </section>`;
}

function museumPage() {
  return `<section class="page-shell">${moduleHeading("museo", "Recorrer · 4 salas")}
    <p class="page-lede">Los ideales no han sido iguales ni universales: cambian con la historia, la cultura y las relaciones de poder. Estas salas son pequeñas ventanas, no una historia completa.</p>
    <div class="museum-grid">${eras.map((era, index) => `
      <article class="museum-card paper-card">
        <div class="museum-art museum-${era.motif}"><img class="museum-cover" src="${escapeHTML(era.cover)}" alt="${escapeHTML(era.coverAlt)}" loading="lazy" decoding="async"><span class="museum-number">0${index + 1}</span><span class="museum-art-note">archivo visual · ${escapeHTML(era.date)}</span></div>
        <div class="museum-gallery" aria-label="Más imágenes de ${escapeHTML(era.title)}">${era.images.map((image) => `<img src="${escapeHTML(image.src)}" alt="${escapeHTML(image.alt)}" loading="lazy" decoding="async">`).join("")}</div>
        <div class="museum-copy"><p class="eyebrow">Sala ${String(index + 1).padStart(2, "0")} · ${escapeHTML(era.date)}</p><h2>${escapeHTML(era.title)}</h2><p>${escapeHTML(era.context)}</p><div class="economy-note"><span>✿</span><p><strong>Contexto y circulación</strong><br>${escapeHTML(era.economy)}</p></div><a class="museum-source" href="${escapeHTML(era.source)}" target="_blank" rel="noopener noreferrer">${escapeHTML(era.sourceLabel)} ↗</a></div>
        ${era.archiveImages ? `<aside class="museum-archive"><p class="eyebrow">${escapeHTML(era.archiveLabel)}</p><p>${escapeHTML(era.archiveText)}</p><div class="archive-gallery">${era.archiveImages.map((image) => `<img src="${escapeHTML(image.src)}" alt="${escapeHTML(image.alt)}" loading="lazy" decoding="async">`).join("")}</div></aside>` : ""}
      </article>`).join("")}</div>
    <p class="small-caveat">Las tendencias describen ciertos contextos documentados; no representan a todas las personas de una época o cultura. Un ideal estético cambia: no es una medida objetiva de salud ni de valor humano.</p>
  </section>`;
}

function phraseStep(statement) {
  if (!statement) {
    return `<div class="phrase-step-empty"><span aria-hidden="true">✿</span><h2>Primero, tu lectura.</h2><p>Elige una frase. Después podrás decir qué tanto estás de acuerdo y abrir una lectura crítica, sin nota ni respuesta correcta.</p></div>`;
  }
  const ratings = [
    ["1", "Nada de acuerdo"],
    ["2", "Poco de acuerdo"],
    ["3", "Depende / no sé"],
    ["4", "Bastante de acuerdo"],
    ["5", "Muy de acuerdo"],
    ["paso", "Prefiero pasar"]
  ];
  return `<div class="phrase-step">
    <p class="eyebrow">Tu primera impresión</p>
    <blockquote>“${escapeHTML(statement.text)}”</blockquote>
    <fieldset class="agreement-options"><legend>¿Qué tan de acuerdo estás?</legend>
      ${ratings.map(([value, label]) => `<label><input type="radio" name="phrase-agreement" value="${value}"><span>${label}</span></label>`).join("")}
    </fieldset>
    <p class="rating-reassurance">Tu respuesta habla de una reacción a una frase; no te define. También puedes pasar.</p>
    <button class="button button-dark" type="button" data-action="reveal-statement" disabled>Ahora, leer entre líneas <span aria-hidden="true">↘</span></button>
    <div class="statement-revelation" data-statement-revelation aria-live="polite"></div>
  </div>`;
}

function statementReveal(statement, response) {
  const responseCopy = response === "paso"
    ? "No responder también es válido. Puedes leer esta reflexión sin compartir una postura."
    : Number(response) <= 2
      ? "Que la frase te convenza poco también es una lectura. Observa qué ideas intenta dar por sentadas."
      : Number(response) === 3
        ? "Es normal que el acuerdo dependa del contexto. La frase puede sonar distinta según quién la dice y a quién."
        : "Que te resulte familiar o convincente no te hace culpable. Las ideas repetidas pueden influir en cualquiera.";
  return `<article class="reveal-card">
    <p class="eyebrow">Una lectura crítica posible</p>
    <p class="response-reflection">${responseCopy}</p>
    <div class="reveal-part"><h3>Lo que comunica</h3><p>${escapeHTML(statement.meaning)}</p></div>
    <div class="reveal-part"><h3>El contexto que suele faltar</h3><p>${escapeHTML(statement.context)}</p></div>
    <div class="reveal-part reveal-impact"><h3>Lo que puede generar</h3><p>${escapeHTML(statement.possibleImpact)}</p></div>
    <div class="reveal-question"><span aria-hidden="true">✿</span><p><strong>Para seguir pensando</strong><br>${escapeHTML(statement.question)}</p></div>
    <div class="reframe-note"><span>Una forma más cuidadosa de decirlo</span><p>“${escapeHTML(statement.reframe)}”</p></div>
    <p class="ethical-note">Una frase no causa por sí sola un TCA y tu respuesta no permite diagnosticarte. Observamos el mensaje y el contexto, no a las personas.</p>
  </article>`;
}

function discoursePage() {
  const options = statements.map((statement, index) => `
    <button class="quote-chip${selectedStatementIndex === index ? " is-selected" : ""}" type="button" aria-pressed="${selectedStatementIndex === index}" data-action="select-statement" data-index="${index}">
      <span class="quote-number">0${index + 1}</span><span>“${escapeHTML(statement.text)}”</span><span class="quote-arrow" aria-hidden="true">↗</span>
    </button>`).join("");
  return `<section class="page-shell">${moduleHeading("discurso", "Pausa · responde · descubre")}
    <p class="page-lede">Estos refranes se repiten como si fueran verdades. Elige uno, nota qué te provoca y luego abre el contexto que suele quedar fuera. No hay respuestas correctas.</p>
    <div class="phrase-safety-note"><span aria-hidden="true">✿</span><p><strong>Antes de empezar:</strong> aquí aparecen expresiones que juzgan la apariencia y una hipérbole con la palabra “muerta”. Puedes saltarte cualquiera, cerrar la actividad o volver cuando quieras.</p></div>
    <div class="phrase-activity-layout">
      <div class="phrase-picker"><p class="eyebrow">Paso 1 · Elige una frase</p><div class="statement-list">${options}</div></div>
      <div class="phrase-step-panel" id="phrase-step" aria-live="polite">${phraseStep(statements[selectedStatementIndex])}</div>
    </div>
    <aside class="digital-care-note"><p class="eyebrow">Pensamientos sobre TCA en redes</p><h2>La presión no es una identidad.</h2><p>En búsquedas públicas de etiquetas como tc4 aparecen mensajes que convierten la comparación, el desprecio al cuerpo y el aislamiento en algo cotidiano. Detrás de esa estética puede haber ambivalencia: querer pertenecer o sentir control, y a la vez vivir miedo, vergüenza o pensamientos que no dan tregua. No todas las personas ni todas las publicaciones son iguales; esto habla de sufrimiento, no de una meta ni de una comunidad representativa.</p><p>Un estudio de publicaciones públicas de Tumblr y Twitter encontró mensajes de promoción, crítica y recuperación, con más publicaciones críticas y de recuperación que promotoras en su muestra; las redes pueden ofrecer compañía y también reforzar ideas dañinas. No reproducimos publicaciones ni consejos. Si un contenido te altera, puedes salir, silenciarlo y hablar con alguien de confianza. Una frase o un nivel de acuerdo no explica ni diagnostica un TCA.</p><p><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5554530/" target="_blank" rel="noopener noreferrer">Investigación sobre publicaciones públicas de Tumblr y Twitter ↗</a></p></aside>
    <section class="free-analysis-section">
      <div><p class="eyebrow">¿Viste otra frase?</p><h2>También puedes analizarla.</h2><p>Esta herramienta observa el lenguaje; una lectura automática es orientativa y puede pasar por alto ironías o contexto.</p></div>
      <div class="analyzer-layout">
        <div class="analyzer-main paper-card">
          <form id="analyzer-form"><label for="message-input">Escribe una frase que viste o escuchaste</label><textarea id="message-input" rows="3" maxlength="500" placeholder="No incluyas nombres ni datos de quien la dijo...">${escapeHTML(pendingPhrase)}</textarea>
            <div class="analyzer-form-foot"><span>Hasta 500 caracteres</span><button class="button button-dark" type="submit">Explorar el lenguaje <span aria-hidden="true">↗</span></button></div>
          </form>
          <p class="small-caveat">No evalúa ni diagnostica a personas. Puedes reformularla sin compartirla.</p>
        </div>
        <div class="analysis-result" id="analysis-result" aria-live="polite"><div class="result-placeholder"><span>✿</span><h2>El contexto importa.</h2><p>Escribe una frase para explorar qué presupone y qué preguntas abre.</p></div></div>
      </div>
    </section>
  </section>`;
}

function conversationPage() {
  const saved = state.reflections || {};
  return `<section class="page-shell">${moduleHeading("conversacion", "Reflexionar · 3 preguntas abiertas")}
    <p class="page-lede">No hay una postura que tengas que adoptar. Puedes explorar una idea, cambiar de opinión o dejar la pregunta abierta. Si alguien expresa angustia con la comida o su cuerpo, escuchar sin debatir su apariencia puede ayudar; no hace falta que demuestre estar “lo bastante mal” para merecer apoyo.</p>
    <aside class="conversation-art"><img src="./assets/emotividad.jpg" alt="Collage en blanco y negro de una persona abrazando una figura hecha con texto." loading="lazy"><p><span>✿</span> La experiencia de alguien no se ve completa desde afuera. Preguntar y escuchar con respeto puede abrir espacio para conversar.</p></aside>
    <div class="debate-list">${debates.map((debate, index) => `
      <article class="debate-card paper-card">
        <div class="debate-number">0${index + 1}</div><div class="debate-content"><h2>${escapeHTML(debate.question)}</h2>
        <fieldset class="stance-field"><legend>¿Desde dónde quieres explorarla?</legend><label><input type="radio" name="stance-${index}" value="0"> Me resuena más esta idea</label><label><input type="radio" name="stance-${index}" value="1"> También veo esta posibilidad</label><label><input type="radio" name="stance-${index}" value="2"> Quiero sostener la pregunta</label></fieldset>
        <div class="stance-arguments" data-arguments="${index}" aria-live="polite">Elige una opción para leer perspectivas distintas.</div>
        <label class="reflection-label" for="reflection-${index}">Mi reflexión, si quiero dejarla por escrito</label><textarea id="reflection-${index}" data-reflection="${index}" rows="3" maxlength="1000" placeholder="No hace falta llegar a una conclusión...">${escapeHTML(saved[index] || "")}</textarea>
        <div class="reflection-footer"><span class="save-state" data-save-state="${index}" aria-live="polite">Se guarda solo en este dispositivo.</span><span class="word-count" data-count="${index}">${(saved[index] || "").length}/1000</span></div>
        </div>
      </article>`).join("")}</div>
    <div class="reflection-evolution"><span class="evolution-flower">✿</span><div><p class="eyebrow">Tu recorrido</p><h2>Las ideas también pueden cambiar.</h2><p>Has dejado <strong>${Object.values(saved).filter(Boolean).length}</strong> reflexión${Object.values(saved).filter(Boolean).length === 1 ? "" : "es"} en este dispositivo. No es una puntuación: es una huella de tu propio proceso.</p></div></div>
    <p class="storage-notice" data-storage-notice aria-live="polite"></p>
  </section>`;
}

function labPage() {
  return `<section class="page-shell">${moduleHeading("laboratorio", "Experimentar · 2 pruebas")}
    <div class="lab-grid">
      <article class="lab-card paper-card"><p class="eyebrow">Experimento 01 · Recomendaciones</p><h2>Lo que el algoritmo repite</h2><p>En esta simulación, cada vez que eliges un contenido similar, aparecen más publicaciones de ese tipo. No es un modelo de una plataforma real. La repetición puede hacer que una idea parezca normal o inevitable; puedes cambiar de tema, dejar de seguir una cuenta o tomar distancia.</p>
        <div class="algorithm-sim"><div class="sim-header"><span>tu feed simulado</span><span data-feed-count>0 señales</span></div><div class="sim-feed" data-sim-feed><div class="sim-post sim-original"><span>✿</span><p>Un consejo sobre apariencia</p><small>PUBLICACIÓN INICIAL</small></div><div class="sim-empty">Elige el contenido que mirarías para ver cómo se transforma el feed.</div></div></div>
        <div class="sim-choices"><button class="choice-button" type="button" data-action="algorithm-choice" data-choice="appearance">Ver otro consejo similar <span>↗</span></button><button class="choice-button" type="button" data-action="algorithm-choice" data-choice="varied">Explorar un tema distinto <span>✿</span></button></div>
        <button class="text-button" type="button" data-action="reset-algorithm">Reiniciar experimento</button>
      </article>
      <article class="lab-card campaign-card paper-card"><p class="eyebrow">Experimento 02 · Una campaña inventada</p><h2>¿Quién gana con esta inseguridad?</h2>
        <div class="campaign-art"><span class="campaign-flower">✿</span><span class="campaign-product">NUBE<br><small>crema luminosa</small></span><span class="campaign-copy">Tu mañana<br>perfecta empieza aquí.</span><span class="campaign-price">ANUNCIO</span></div>
        <div class="campaign-reference"><img src="./assets/consumismo.jpg" alt="Mosaico de rostros e imágenes editoriales recortadas, como páginas de una revista." loading="lazy"><p><strong>La imagen también vende.</strong><br>Una campaña puede convertir la comparación en una razón para comprar. Observa a quién representa y qué sensación intenta dejar.</p></div>
        <p>Una marca ficticia presenta una crema como respuesta a un problema cotidiano. Investiga cómo arma el mensaje.</p>
        <div class="campaign-questions">
          <fieldset><legend>¿Qué problema parece inventar o amplificar?</legend><label><input type="radio" name="campaign-problem" value="normalidad"> Una variación normal se presenta como defecto</label><label><input type="radio" name="campaign-problem" value="otro"> Otro problema / no estoy segura, quiero explorar</label></fieldset>
          <fieldset><legend>¿Qué emoción podría activar?</legend><label><input type="radio" name="campaign-feeling" value="insuficiencia"> La sensación de que falta algo</label><label><input type="radio" name="campaign-feeling" value="curiosidad"> Curiosidad por probar una novedad</label></fieldset>
          <fieldset><legend>¿Qué se vende?</legend><label><input type="radio" name="campaign-sell" value="product"> El producto, junto con una promesa de bienestar</label><label><input type="radio" name="campaign-sell" value="unclear"> No lo tengo claro todavía</label></fieldset>
        </div><p class="campaign-feedback" data-campaign-feedback aria-live="polite">Las respuestas son puntos de partida, no una prueba con nota.</p>
      </article>
    </div>
  </section>`;
}

function identityPage() {
  const selected = new Set(state.identity || []);
  return `<section class="page-shell">${moduleHeading("identidad", "Crear · retrato no estético")}
    <div class="identity-intro"><p>Elige las tarjetas que te representen hoy y añade tus propias palabras. No hace falta compartirlas con nadie. Tu identidad incluye vínculos, intereses, valores e historia: no cabe en un cuerpo ni en una foto.</p><span class="identity-doodle" aria-hidden="true">✿</span></div>
    <div class="identity-grid">${identityCards.map((card, index) => `
      <article class="identity-prompt prompt-${index + 1}"><span class="prompt-icon">${card.icon}</span><h2>${escapeHTML(card.title)}</h2>
      <div class="prompt-options">${card.prompts.map((prompt) => `<button class="prompt-chip${selected.has(prompt) ? " selected" : ""}" type="button" aria-pressed="${selected.has(prompt)}" data-action="identity-prompt" data-value="${escapeHTML(prompt)}">${escapeHTML(prompt)}</button>`).join("")}</div>
      <label class="sr-only" for="identity-${card.id}">Añade una idea para ${escapeHTML(card.title)}</label><input id="identity-${card.id}" type="text" maxlength="100" placeholder="También podría ser..." data-action="identity-custom" data-card="${card.id}">
      </article>`).join("")}</div>
    <aside class="identity-image-note"><img src="./assets/personasdistintas.jpg" alt="Retrato colectivo de personas con distintos tonos de piel y peinados." loading="lazy"><p>Las personas somos distintas y ninguna imagen puede resumir todo lo que alguien es.</p></aside>
    <div class="identity-controls"><button class="button button-dark" type="button" data-action="make-portrait">Crear mi tarjeta collage <span aria-hidden="true">✧</span></button><span class="small-caveat">Solo aparece en tu pantalla.</span></div>
    <div class="portrait-output" data-portrait-output aria-live="polite"></div>
  </section>`;
}

function wellbeingPage() {
  return `<section class="page-shell">${moduleHeading("bienestar", "Acompañarse · información y orientación")}
    <div class="care-callout"><span class="callout-flower">✿</span><div><p class="eyebrow">Información para comprender</p><h2>Los TCA son problemas de salud complejos, no decisiones ni defectos personales.</h2><p>Una persona puede necesitar apoyo con cualquier cuerpo, edad, género o historia. No es posible reconocer o descartar un TCA por una fotografía, un peso o una sola conducta. Los pensamientos pueden sentirse insistentes y ocupar cada vez más espacio; por fuera no siempre se ve cuánto está sufriendo alguien. Con atención adecuada, la recuperación es posible.</p></div></div>
    <section class="factors-section"><p class="eyebrow">Una mirada amplia</p><h2>Los factores pueden interactuar.</h2><div class="factor-grid">
      <article><span>01</span><h3>Biológicos</h3><p>La genética, el desarrollo y distintos procesos físicos pueden influir. Ningún factor por sí solo explica todas las experiencias.</p></article>
      <article><span>02</span><h3>Psicológicos</h3><p>El estrés, el estado de ánimo, la autoexigencia o experiencias difíciles pueden relacionarse con el bienestar de maneras distintas.</p></article>
      <article><span>03</span><h3>Socioculturales</h3><p>La presión por la apariencia, la discriminación, los mensajes mediáticos y las normas de género también forman parte del contexto. Las redes pueden mezclar apoyo entre pares con mensajes que normalizan el sufrimiento o el aislamiento.</p></article>
    </div></section>
    <section class="scenario-section"><p class="eyebrow">Actividad · 3 situaciones</p><h2>Preocupación estética o señal para pedir apoyo</h2><p>No se trata de diagnosticar: observa si algo causa malestar o interfiere con la vida diaria.</p>
      <div class="scenario-list">${scenarios.map((scenario, index) => `<article class="scenario-card paper-card"><span class="scenario-number">0${index + 1}</span><h3>${escapeHTML(scenario.title)}</h3><p>${escapeHTML(scenario.text)}</p><fieldset><legend>¿Qué te parece importante notar?</legend><label><input type="radio" name="scenario-${index}" value="contexto"> Un cambio o preferencia, sin suficiente contexto para concluir</label><label><input type="radio" name="scenario-${index}" value="señal"> Malestar o interferencia que merece atención</label></fieldset><button type="button" class="button button-small" data-action="scenario-check" data-index="${index}">Ver una perspectiva</button><p class="scenario-feedback" data-scenario-feedback="${index}" aria-live="polite"></p></article>`).join("")}</div>
    </section>
    <section class="resources-section"><p class="eyebrow">No tienes que resolverlo a solas</p><h2>Buscar orientación también es una forma de cuidarse.</h2><p>Si te preocupa lo que estás viviendo, puedes hablar con una persona adulta de confianza y pedir una consulta con profesionales de salud. La orientación puede empezar sin tener un diagnóstico.</p>
      <div class="resource-links"><a href="https://www.who.int/news-room/fact-sheets/detail/eating-disorders" target="_blank" rel="noopener noreferrer">OMS · información sobre trastornos alimentarios <span>↗</span></a><a href="https://www.minsalud.gov.co/salud/publica/salud-mental/Paginas/linea-106.aspx" target="_blank" rel="noopener noreferrer">Colombia · Línea 106 de orientación en salud mental <span>↗</span></a><a href="https://www.nimh.nih.gov/health/publications/eating-disorders" target="_blank" rel="noopener noreferrer">NIMH · tratamiento y recuperación <span>↗</span></a><a href="https://www.unicef.org/parenting/mental-health" target="_blank" rel="noopener noreferrer">UNICEF · salud mental y adolescencia <span>↗</span></a></div>
      <p class="urgent-note"><strong>En Colombia:</strong> la Línea 106 ofrece escucha y orientación en salud mental; la disponibilidad de canales puede variar por territorio. Si hay peligro inmediato, llama al número local de emergencias o acude a un servicio de urgencias. No tienes que esperar a una crisis para pedir ayuda.</p>
    </section>
    <p class="ethical-note">Este espacio es educativo y no sustituye la evaluación, el diagnóstico ni el tratamiento profesional. No analizamos cuerpos ni fotografías.</p>
  </section>`;
}

const pageRenderers = {
  inicio: homePage, feed: feedPage, imagen: imagePage, museo: museumPage,
  discurso: discoursePage, conversacion: conversationPage, laboratorio: labPage,
  identidad: identityPage, bienestar: wellbeingPage
};

function render() {
  const route = location.hash.slice(1) || "inicio";
  const renderer = pageRenderers[route] || homePage;
  if (route !== "inicio" && moduleFor(route) && !state.visited.includes(route)) {
    state.visited.push(route);
    saveState();
  }
  app.innerHTML = renderer();
  nav.querySelectorAll("a").forEach((link) => {
    if (link.dataset.route === route) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
  menuToggle.setAttribute("aria-expanded", "false");
  nav.classList.remove("nav-open");
  if (route === "discurso" && pendingPhrase) {
    runAnalysis(pendingPhrase);
    pendingPhrase = "";
  }
  window.scrollTo(0, 0);
}

function runAnalysis(text) {
  const cleaned = text.trim();
  if (!cleaned) {
    document.querySelector("#message-input")?.focus();
    return;
  }
  const result = analyzeMessage(cleaned);
  const output = document.querySelector("#analysis-result");
  if (!output) return;
  output.innerHTML = `<div class="analysis-card"><p class="eyebrow">Lectura posible · no es una sentencia</p><div class="category-tags">${result.categories.map((category) => `<span>${escapeHTML(category)}</span>`).join("")}</div><h2>¿Qué hace esta frase?</h2><p>${escapeHTML(result.explanation)}</p><h3>Tres preguntas para seguir</h3><ol>${result.questions.map((question) => `<li>${escapeHTML(question)}</li>`).join("")}</ol><label for="rewrite-input">¿Cómo la reescribirías para incluir más contexto?</label><textarea id="rewrite-input" rows="3" maxlength="500" placeholder="Una versión más abierta podría ser..."></textarea><p class="ethical-note">Analizamos discursos, no personas. La lectura automática es orientativa y puede pasar por alto ironías, contextos o significados.</p></div>`;
}

function showStance(index, value) {
  const output = document.querySelector(`[data-arguments="${index}"]`);
  const debate = debates[index];
  if (!output || !debate) return;
  const perspectives = value === "0" ? [debate.sides[0][0], debate.sides[1][0]]
    : value === "1" ? [debate.sides[1][0], debate.sides[0][1]]
      : [debate.sides[0][1], debate.sides[1][1]];
  output.innerHTML = `<p>${escapeHTML(perspectives[0])}</p><p>${escapeHTML(perspectives[1])}</p>`;
}

function updateCampaignFeedback() {
  const selected = ["problem", "feeling", "sell"].every((name) => document.querySelector(`input[name="campaign-${name}"]:checked`));
  const output = document.querySelector("[data-campaign-feedback]");
  if (selected && output) output.textContent = "Has identificado distintas piezas del mensaje. La campaña convierte una inquietud en una oportunidad de venta; puedes cuestionarla sin juzgar a quien la encuentra atractiva.";
}

function handleClick(event) {
  const button = event.target.closest("[data-action]");
  if (!button) return;
  const { action } = button.dataset;

  if (action === "toggle-xray") {
    const expanded = button.getAttribute("aria-pressed") !== "true";
    button.setAttribute("aria-pressed", String(expanded));
    button.innerHTML = expanded ? 'Ocultar rayos X <span aria-hidden="true">✳</span>' : 'Revelar lo oculto <span aria-hidden="true">✳</span>';
    document.querySelectorAll(".post-card").forEach((post) => post.classList.toggle("xray-on", expanded));
  }
  if (action === "classify") {
    const index = Number(button.dataset.index);
    const select = document.querySelector(`#classify-${index}`);
    const feedback = document.querySelector(`[data-feedback="${index}"]`);
    if (!select.value) {
      feedback.textContent = "Elige una opción para comparar tu lectura.";
      return;
    }
    const expected = classifyPhrase(posts[index].phrase);
    feedback.textContent = select.value === expected
      ? `Tu lectura coincide con una clasificación posible: ${expected}. La pregunta también importa más que una etiqueta.`
      : `No hay una única respuesta evidente. Una lectura posible es «${expected}»; observa qué palabras te hicieron elegir otra.`;
  }
  if (action === "carry-phrase") {
    pendingPhrase = posts[Number(button.dataset.index)].phrase;
    location.hash = "discurso";
  }
  if (action === "select-statement") {
    selectedStatementIndex = Number(button.dataset.index);
    document.querySelectorAll(".quote-chip").forEach((item, index) => {
      const selected = index === selectedStatementIndex;
      item.classList.toggle("is-selected", selected);
      item.setAttribute("aria-pressed", String(selected));
    });
    document.querySelector("#phrase-step").innerHTML = phraseStep(statements[selectedStatementIndex]);
    document.querySelector("[name='phrase-agreement']")?.focus();
  }
  if (action === "reveal-statement") {
    const response = document.querySelector("input[name='phrase-agreement']:checked");
    const output = document.querySelector("[data-statement-revelation]");
    if (!response) {
      output.innerHTML = '<p class="feedback">Elige una respuesta o marca “Prefiero pasar”.</p>';
      return;
    }
    output.innerHTML = statementReveal(statements[selectedStatementIndex], response.value);
  }
  if (action === "hotspot") {
    const { scene, spot } = button.dataset;
    const sceneInfo = scenes[Number(scene)];
    const details = [
      "La posición de la cámara, la luz y el fondo guían lo que se nota primero.",
      "El retoque puede alterar textura, color u objetos de una escena; no revela una apariencia más verdadera.",
      "En una sesión se producen muchas tomas y se selecciona una pequeña parte para publicar.",
      "Una pose puede ser sostenida para la cámara y no representar una postura cotidiana.",
      "La imagen puede formar parte de una estrategia para llamar la atención sobre una marca o una idea."
    ];
    const target = document.querySelector(`[data-hotspot-info="${scene}"]`);
    target.innerHTML = `<strong>${escapeHTML(sceneInfo.hotSpots[Number(spot)])}</strong><br>${details[Number(spot)]}`;
  }
  if (action === "identity-prompt") {
    const value = button.dataset.value;
    const selected = new Set(state.identity || []);
    if (selected.has(value)) selected.delete(value);
    else selected.add(value);
    state.identity = [...selected];
    button.classList.toggle("selected", selected.has(value));
    button.setAttribute("aria-pressed", String(selected.has(value)));
    saveState();
  }
  if (action === "make-portrait") {
    const customValues = [...document.querySelectorAll("[data-action='identity-custom']")].map((input) => input.value.trim()).filter(Boolean);
    const values = [...new Set([...(state.identity || []), ...customValues])];
    const output = document.querySelector("[data-portrait-output]");
    output.innerHTML = values.length
      ? `<article class="portrait-collage"><p class="eyebrow">Un retrato en palabras</p><h2>Lo que queda fuera de las fotos que publico</h2><div>${values.map((value, index) => `<span class="portrait-word word-${index % 5}">${escapeHTML(value)}</span>`).join("")}</div><p>Esto también forma parte de mí, hoy.</p></article>`
      : `<p class="feedback">Elige alguna tarjeta o añade una palabra para armar tu retrato.</p>`;
  }
  if (action === "algorithm-choice") {
    const feed = document.querySelector("[data-sim-feed]");
    const count = feed.querySelectorAll(".sim-generated").length + 1;
    const type = button.dataset.choice;
    const content = type === "appearance" ? ["Otro consejo de apariencia", "Una rutina para cambiar tu imagen", "Un nuevo producto para tu reflejo"][Math.min(count - 1, 2)] : ["Ideas de jardinería", "Una recomendación musical", "Curiosidades del océano"][Math.min(count - 1, 2)];
    feed.insertAdjacentHTML("beforeend", `<div class="sim-post sim-generated ${type === "appearance" ? "sim-repeat" : "sim-varied"}"><span>${type === "appearance" ? "↻" : "✿"}</span><p>${content}</p><small>${type === "appearance" ? "TEMA REPETIDO" : "NUEVA CATEGORÍA"}</small></div>`);
    document.querySelector("[data-feed-count]").textContent = `${count} ${count === 1 ? "señal" : "señales"}`;
  }
  if (action === "reset-algorithm") {
    document.querySelector("[data-sim-feed]").innerHTML = '<div class="sim-post sim-original"><span>✿</span><p>Un consejo sobre apariencia</p><small>PUBLICACIÓN INICIAL</small></div><div class="sim-empty">Elige el contenido que mirarías para ver cómo se transforma el feed.</div>';
    document.querySelector("[data-feed-count]").textContent = "0 señales";
  }
  if (action === "scenario-check") {
    const index = Number(button.dataset.index);
    const selected = document.querySelector(`input[name="scenario-${index}"]:checked`);
    const output = document.querySelector(`[data-scenario-feedback="${index}"]`);
    if (!selected) {
      output.textContent = "Elige qué te parece importante notar para continuar.";
      return;
    }
    const scenario = scenarios[index];
    output.textContent = selected.value === scenario.answer
      ? scenario.feedback
      : `Otra lectura posible es notar ${scenario.answer === "señal" ? "malestar o interferencia que merece atención" : "un cambio o preferencia que necesita contexto"}. ${scenario.feedback}`;
  }
}

app.addEventListener("click", handleClick);
app.addEventListener("submit", (event) => {
  if (event.target.id !== "analyzer-form") return;
  event.preventDefault();
  runAnalysis(document.querySelector("#message-input").value);
});
app.addEventListener("change", (event) => {
  if (event.target.matches("input[name='phrase-agreement']")) {
    document.querySelector("[data-action='reveal-statement']").disabled = false;
  }
  if (event.target.matches("[data-action='compare']")) {
    const art = document.querySelector(`[data-scene="${event.target.dataset.scene}"].scene-art`);
    art.dataset.view = Number(event.target.value) > 50 ? "after" : "before";
    art.style.setProperty("--compare", `${event.target.value}%`);
  }
  if (event.target.matches("[name^='stance-']")) showStance(Number(event.target.name.split("-")[1]), event.target.value);
  if (event.target.matches("[name^='campaign-']")) updateCampaignFeedback();
});
app.addEventListener("input", (event) => {
  if (event.target.matches("[data-reflection]")) {
    const index = event.target.dataset.reflection;
    state.reflections[index] = event.target.value;
    const count = document.querySelector(`[data-count="${index}"]`);
    const status = document.querySelector(`[data-save-state="${index}"]`);
    count.textContent = `${event.target.value.length}/1000`;
    status.textContent = saveState() ? "Guardado en este dispositivo." : "No se pudo guardar; puedes continuar.";
  }
});

menuToggle.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") !== "true";
  menuToggle.setAttribute("aria-expanded", String(open));
  nav.classList.toggle("nav-open", open);
});

window.addEventListener("hashchange", render);
render();

if ("serviceWorker" in navigator && location.protocol !== "file:") {
  window.addEventListener("load", () => navigator.serviceWorker.register("./service-worker.js").catch((error) => {
    console.warn("No se pudo registrar el service worker.", error);
  }));
}

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  installPrompt = event;
  installButton.hidden = false;
});
installButton.addEventListener("click", async () => {
  if (!installPrompt) return;
  await installPrompt.prompt();
  installPrompt = null;
  installButton.hidden = true;
});
