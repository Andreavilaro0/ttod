# Defensa oral — banco de preguntas (2026-10-15)

**Audiencia:** solo instructor.  
**Rúbrica:** [`PHASE-V-FEII-COHORT-COLLABORATION-AND-ASSESSMENT.md`](../PHASE-V-FEII-COHORT-COLLABORATION-AND-ASSESSMENT.md) §6  
**Versión EN:** [`ORAL-DEFENSE-QUESTIONS-2026-10-15.md`](./ORAL-DEFENSE-QUESTIONS-2026-10-15.md)  
**Uso:** elige **una** pregunta del trío del grupo en sala; guarda las otras dos como respaldo / seguimiento. Reserva ~3–4 minutos para el bloque de método al final (cualquier estudiante, o un voluntario por equipo).

Cada trío de grupo está construido así: **(1) decisión del propio módulo** · **(2) uso crítico de la IA** · **(3) costura / fluidez del sistema**.

---

## E1 — Contenido (`gontugithub`) · costura: Content

*Tips aún abiertos: #65 proveniencia · #67 test de componente del formulario de propuesta · #68 documento de decisión de diseño.*

1. **Aprendizaje — la proveniencia como superficie, no como campo.**  
   La tarea 5 pide source/rights/proveniencia en *todas* las vistas de cita (tarjetas del índice, listados de faceta y detalle). ¿Por qué no basta con «lo pusimos en la página de detalle»? ¿Qué se rompe para quien nunca abre la ruta de detalle?

2. **Uso crítico de la IA — qué pide de verdad el amend.**  
   #67 se rechazó porque un test unitario de `frequencies()` solo no cumple la tarea 6. Si un asistente te dijo «el test unitario cubre el formulario», ¿cómo desmentirías esa afirmación sin relanzar toda la suite? Nombra el *comportamiento* que un test de componente del formulario de propuesta debe ejercer y que `frequencies()` no puede.

3. **Fluidez del sistema — `loadWisdom()` como frontera de confianza.**  
   La tarea 9 es un tip de decisión de diseño sobre el manejo centralizado de errores. Señala dónde un fallo de fetch debe convertirse en UI vacía/error visible, y dónde *no* debe filtrarse a una página 200 que parece vacía por el motivo equivocado. ¿Cómo toca esa decisión a Graph o Accounts si más adelante llaman al mismo camino de wisdom?

---

## E2 — Grafo (`gpfc-git`) · costura: Graph

*Tareas 1–6 en `main` (#48 → #52 → #55 → #71 → #75 → #76). Abiertos: #77 (task7 tests) · #78 (task8 cross-module).*

1. **Aprendizaje — la URL como fuente de verdad.**  
   En #71, las acciones del usuario usan `pushState` y la carga/correcciones usan `replaceState`. Explica un bug concreto que tendrías si *toda* escritura de URL usara `pushState` (incluido el limpio de un tag inválido en el primer paint).

2. **Uso crítico de la IA — navegación rechazada o revisada.**  
   El amend de #52 sustituyó el foco por flechas lista ±1 por navegación espacial. Explica a la sala *por qué* ±1 en un layout radial es el modelo equivocado. ¿Propuso primero un asistente la versión de lista? ¿Qué evidencia (coordenadas de layout, e2e fallido, Tab manual) te hizo mantenerla o rechazarla?

3. **Fluidez del sistema — filtro × selección × foco.**  
   Cuando un filtro por tag elimina el nodo enfocado, el foco vuelve al filtro (#55 / #76). ¿Quién posee ese contrato: la matemática de layout, la sync de URL, o el `applyTag` de la isla? ¿Qué no deberían asumir Accounts o Content sobre el foco del grafo al deep-linkear `?node=`?

---

## E3 — Oráculo (`Andreavilaro0` / fork `nbfrodri`) · costura: Oracle

*Costura completa vía #42 acumulativo; PRs por tarea #44/#45/#38–#41 cerrados como supersedidos.*

1. **Aprendizaje — tips acumulativos vs por tarea.**  
   El producto de las tareas 1–6 entró por la pila de #42 mientras los PRs sueltos por tarea parecían `DIRTY` / inmergeables. Con tus palabras: ¿qué diferencia hay entre «la feature está en `main`» y «este tip es mergeable»? ¿Por qué cerrar tips supersedidos no borra el trabajo?

2. **Uso crítico de la IA — UX de streaming sin mentir.**  
   Elige preparing-state, live region o recovery error del stack Oracle. Muestra un sitio donde un asistente podría haber prometido de más (p. ej. anunciar una respuesta completa antes de que acabe el stream, u ocultar «preparing» ante un fallo inmediato). ¿Cómo verificaste el orden de estados en un test o en el navegador?

3. **Fluidez del sistema — Oráculo offline vs online.**  
   La tarea 2 de PWA cachea el *shell* del Oráculo; no responde sin el modelo. ¿Dónde termina la confianza de vuestro módulo y dónde empieza la cola offline de PWA? ¿Qué debe oír/ver un usuario al enviar offline — y el código de qué equipo posee ese mensaje?

---

## E4 — PWA (`PRNovoa`) · costura: PWA & Local Operations

*Costura completa (#51→#69); memoria de uso de IA #74 mergeada.*

1. **Aprendizaje — Cache-First vs Network-First.**  
   Nombra una clase de asset que deba ser Cache-First y un path que deba quedarse Network-First (o saltarse la caché) para el stream del Oráculo. ¿Qué fallo visible aparece si los intercambias?

2. **Uso crítico de la IA — el rechazo de quitar `tsc` (#74 / #49).**  
   Un asistente propuso eliminar la fase `tsc` del monitor de compatibilidad porque los imports de Astro lo confundían. ¿Por qué era inseguro? ¿Qué clase de bug (`TS17001` / atributos JSX duplicados) habría pasado un monitor en verde? ¿Qué mantuvisteis en su lugar?

3. **Fluidez del sistema — flush de la cola y auth.**  
   Cuando la cola offline hace flush en `online`, ¿qué credenciales (si alguna) debe usar, y cuáles debe rechazar? ¿Cómo interactúa eso con la separación cookie de sesión vs Bearer PAT de Accounts?

---

## E5 — Cuentas (`alexxblaro16` / `Gonsiii11`) · costura: Accounts

*Costura completa (#53→#58→#57→#72→#56→#73→#59).*

1. **Aprendizaje — dos credenciales, una API.**  
   Explica por qué una cookie de sesión no debe autorizar `GET /api/v1/wisdom/random`, y por qué un Bearer PAT no debe actuar como sesión de navegador. ¿Qué ataque o trampa evita esa separación?

2. **Uso crítico de la IA — ubicación del FavoriteButton (#58).**  
   Un amend temprano movió guardar-favorito del índice a la ficha de detalle. Si un asistente argumentara «pon el botón dondequiera que aparezca el texto de la cita», ¿cómo argumentarías desde a11y / SSR / densidad de tarjeta que la ruta de detalle es la superficie de confianza correcta?

3. **Fluidez del sistema — proponer → revisar → corpus público.**  
   Recorre una propuesta desde el formulario con sesión hasta la puerta del rol reviewer y la aceptación. ¿Dónde termina la UI de propuesta de Content y dónde empieza vuestro `ProposalStore` / campos `origin` en backend? ¿Qué no debe nunca ser autoría del cliente?

---

## Evaluación del método — el alumnado valora la enseñanza (3 preguntas)

Pregúntalas al cohort (o rota una por equipo). Están **evaluando tu método**, no su código. Puntúa con ligereza por honestidad y concreción, no por elogio.

**M1 — Producto real vs repo de juguete.**  
   Usamos una sola app TTOD compartida, PRs del tamaño de un tip, higiene de merge del instructor (Update branch / resolver DIRTY) y rechazos «solo código/verificar». ¿Os ayudó a aprender la revisión profesional, u ocultó demasiado el git sucio? Dad un momento concreto (basta un número de PR) donde el método aclaró u oscureció la lección.

**M2 — La IA como proceso obligatorio, no herramienta prohibida.**  
   Unidad 6 + AI Review Logs + «la IA nunca aprueba» + ejemplos de sugerencia rechazada (caso `tsc` de #74, navegación espacial de Graph, empty-login / FavoriteButton de Accounts). Como aprendiz: ¿cuál de esos rituales cambió de verdad cómo usáis asistentes, y cuál os pareció papeleo? ¿Qué conservaríais si rediseñarais el curso?

**M3 — Propiedad de la costura y defensa oral.**  
   Poseíais una costura, pero la defensa exige fluidez de todo el sistema y contraexamen. ¿Construir en paralelo sobre un `main` real compartido fue la forma correcta de forzar esa amplitud, o un monorepo secuenciado / costuras con stubs habría enseñado la misma idea con menos fricción? Argumentad con una dependencia que hayáis tocado (o evitado) entre equipos.

---

## Tips rápidos para el examinador

- Prefiere respuestas que nombren **archivos, números de PR o checks fallidos** a los eslóganes.
- «Miraría X» es una respuesta válida de recuperación (§6 Recovery under question).
- En tips de Content abiertos (#65–#68), no trates los amends incompletos como defensa fallida — pregunta qué cambiarían a continuación y por qué el motivo del rechazo era correcto o no.
- Bloque de método (M1–M3): interrumpe el elogio; empuja a un **coste** del método (tiempo, confusión, injusticia) además de un beneficio.

---

_Creado 2026-10-14 para la defensa 2026-10-15; traducción ES 2026-10-15. Anclado en scorecard en vivo + motivos formales AMEND + historial mergeado de Graph/PWA/Accounts/Oracle._
