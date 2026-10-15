# Uso de IA en el Team 4: PWA & Local Operations

Memoria para el profesor · 13 de octubre de 2026 · Tareas 1–7

## 1. Contexto y herramientas

El Team 4 trabajó en las capacidades PWA de TTOD: instalación, apertura de la
interfaz del Oráculo sin conexión, conservación de consultas pendientes y reenvío
al recuperar la red. También abordó las pruebas y el rendimiento de esas funciones.

Durante este trabajo se utilizaron **Claude Code y Codex** para interpretar los
enunciados, explicar el código existente, proponer implementaciones, escribir
pruebas, investigar errores y preparar documentación. Los asistentes también
ejecutaron comprobaciones y ayudaron a adaptar las entregas a las observaciones
del profesor. No se dispone de una identificación uniforme de los modelos o sus
versiones para todas las sesiones, por lo que no se atribuye el trabajo a uno concreto.

Esta memoria describe la asistencia al desarrollo de la PWA. La generación de
respuestas del propio Oráculo pertenece a otro ámbito del proyecto. Las
aportaciones humanas que se indican corresponden al desarrollador que participó
en las sesiones registradas; no se presupone la participación individual de todos
los integrantes en cada paso.

## 2. Cómo se trabajó con los asistentes

El proceso comenzó con la lectura del enunciado y de los archivos afectados. La
IA explicó conceptos como el ciclo de vida del service worker, las transacciones
de IndexedDB o la diferencia entre una prueba unitaria y una prueba de navegador.
Después propuso pasos y fragmentos de código que el desarrollador fue aplicando.
En otras fases se pidió al asistente que implementase pruebas o reparaciones.

Las comprobaciones tuvieron responsables distintos. El desarrollador compartió
resultados de comandos y observaciones del navegador; los asistentes también
ejecutaron tests, builds y mediciones. Por eso, una prueba ejecutada por la IA se
identifica como tal y no se presenta como una revisión manual del equipo.

Las explicaciones ayudaron a delimitar las tareas. Por ejemplo, abrir el Oráculo
offline en la tarea 2 no incluía obtener una respuesta del modelo sin red. Guardar
y reenviar consultas correspondía a la tarea 4. La preparación de commits y PR
incluyó descripciones de la ayuda recibida, siguiendo la separación entre
asistencia y verificación humana de la [plantilla de PR](../.github/pull_request_template.md).

## 3. Uso de IA por tarea

Cada enlace «AI Review Log» lleva al PR de la tarea. El registro se encuentra en
el apartado **AI Review Log** de su descripción, con las columnas de asistencia
de IA y verificación humana.

| Tarea | Ayuda de IA | Aportación humana registrada | Evidencia compartida |
| --- | --- | --- | --- |
| **1. Worker y manifiesto** | Explicó registro, activación, caché y aviso de red; orientó las comprobaciones y añadió pruebas de integración. | Aplicó los cambios guiados de registro y aviso; aportó capturas y resultados de DevTools durante la comprobación. | [Tests del ciclo de vida](../services/frontend/e2e/pwa-lifecycle.spec.ts); [AI Review Log · PR #51](https://github.com/ruvebal/ttod/pull/51) |
| **2. Oráculo offline** | Propuso cómo precargar la página y sus dependencias; escribió pruebas y ejecutó comprobaciones. Posteriormente reparó la entrega. | Eligió la interfaz existente del Oráculo como objetivo, aplicó el worker propuesto y comunicó una recarga offline satisfactoria. | [Tests de carga offline](../services/frontend/e2e/pwa-oracle-offline.spec.ts); [AI Review Log · PR #46](https://github.com/ruvebal/ttod/pull/46) |
| **3. Políticas de caché** | Explicó Cache-First y Network-First, escribió tests y reparó la cobertura de `/assets/` solicitada por el profesor. | Aplicó la implementación inicial del worker sobre la que se añadieron las pruebas. | [Tests de políticas](../services/frontend/e2e/pwa-cache-policies.spec.ts); [AI Review Log · PR #47](https://github.com/ruvebal/ttod/pull/47) |
| **4. Cola y reconexión** | Propuso cambios, revisó orden y confirmación de transacciones, corrigió errores y comprobó el reenvío. Implementó el monitor de compatibilidad y su cobertura. | Aplicó la implementación guiada de la cola y eligió mantener separado el código aún no integrado del Team 3 durante las reparaciones. | [Nota de la cola](pwa-offline-queue.md) y [monitor](pwa-compatibility-monitor.md); [AI Review Log · PR #49](https://github.com/ruvebal/ttod/pull/49) |
| **5. Instalación** | Preparó la guía, propuso pruebas de manifiesto e iconos, corrigió problemas de configuración y verificó una instalación automatizada. | Aplicó los cambios iniciales y comunicó una instalación en Brave. Más adelante aportó observaciones del lanzador, teclado y movimiento reducido. | [Nota de instalación](pwa-install-quality.md); [AI Review Log · PR #50](https://github.com/ruvebal/ttod/pull/50) |
| **6. Rendimiento** | Ejecutó Lighthouse, extrajo métricas y redactó la comparación. Orientó la ubicación de la compresión y ejecutó las comprobaciones posteriores. | Eligió el presupuesto LCP de 2500 ms y aplicó la compresión del frontend en Caddy. | [Presupuesto y resultados](pwa-performance-budget.md); [AI Review Log · PR #60](https://github.com/ruvebal/ttod/pull/60) |
| **7. Tests offline** | Ayudó a completar los tests, los comprobó en una copia desechable, diagnosticó el entorno jsdom y redactó la nota técnica. | Creó la rama, instaló `fake-indexeddb`, incorporó los tests y compartió resultados de su ejecución. | [Nota de tests](pwa-offline-boundary-tests.md); [AI Review Log · PR #69](https://github.com/ruvebal/ttod/pull/69) |

Las notas reflejan etapas diferentes del trabajo. Las atribuciones de esta tabla
se limitan a acciones respaldadas por los registros; no asignan una autoría
exclusiva a partir del nombre del commit ni presuponen revisión humana de cada línea.

## 4. Cuatro ejemplos concretos

### Probar una carga offline real

En la tarea 2 había que distinguir entre conservar una página abierta y poder
volver a cargarla sin conexión. La IA propuso precargar las páginas del Oráculo
y sus recursos, incluidos los scripts necesarios para que los controles siguieran
funcionando. El desarrollador aplicó la propuesta y comunicó que la recarga offline
funcionaba; el envío al modelo fallaba sin red, como se esperaba en esa tarea.

El asistente añadió pruebas de navegador para los dos idiomas y ejecutó
comprobaciones de navegación, recarga y controles. Esto permitió separar la
observación manual del desarrollador de una evidencia automatizada repetible.
El código de esas comprobaciones está en los [tests de carga offline](../services/frontend/e2e/pwa-oracle-offline.spec.ts).

### Medir antes y después de optimizar

En la tarea 6, Claude Code ejecutó cinco mediciones iniciales de Lighthouse y otras
cinco después del cambio, con el mismo procedimiento de carga en frío. El
desarrollador fijó un presupuesto de LCP mediano de **2500 ms** y aplicó la
compresión de respuestas del frontend. La IA ayudó a situarla fuera del bloque de
la API para conservar el comportamiento del streaming.

Según las mediciones del **8 de octubre de 2026**, el LCP mediano pasó de
**3153 ms a 1806 ms**. Son resultados del entorno y procedimiento documentados;
no representan todos los dispositivos ni una nueva medición realizada para esta
memoria. La [nota de rendimiento](pwa-performance-budget.md) explica las condiciones
y enlaza los [diez informes JSON](evidence/pwa-task6/).

### Diagnosticar los tests del aviso de red

En la tarea 7 se simularon eventos `online` y `offline` para comprobar el aviso de
conectividad sin desconectar realmente la máquina. Una ejecución del desarrollador
falló porque faltaba `// @vitest-environment jsdom`: Vitest estaba usando el entorno
Node y no encontraba la propiedad `navigator.onLine` esperada por el test.

La IA comparó el archivo con la propuesta comprobada y señaló la línea ausente.
Tras añadirla, el desarrollador comunicó que los tests pasaban y el asistente
repitió las comprobaciones. La [nota de tests](pwa-offline-boundary-tests.md) registra
13 tests de Vitest el 8 de octubre, incluidos los siete nuevos de cola y aviso.
También explica el límite del test del aviso: ejecuta código extraído del layout,
por lo que las pruebas Playwright siguen siendo necesarias para comprobar la página
renderizada.

### Sugerencia rechazada: quitar la fase `tsc` del monitor

Durante la reparación del monitor de compatibilidad, la IA propuso eliminar su
fase de compilación TypeScript (`tsc`) porque no resolvía imports de componentes
`.astro` presentes en los tests de integración. El monitor pasó con esa propuesta,
pero durante la revisión técnica que Astro no detectaba
ciertos atributos JSX duplicados que `tsc` sí rechazaba con el diagnóstico `TS17001`.

**Se rechazó la sugerencia porque debilitaba la detección de errores.** Se restauró
`tsc` y se mantuvieron las dos comprobaciones. La solución adoptada aisló la
declaración de componentes `.astro` en una configuración TypeScript complementaria,
sin incorporarla al proyecto que comprueba Astro. Así se conservaron tanto la
detección de atributos duplicados como la de imports inexistentes.

El resultado de la reparación y las comprobaciones de esos errores quedaron
recogidos en la [actualización técnica del PR #49](https://github.com/ruvebal/ttod/pull/49),
junto con su AI Review Log. Este caso muestra por qué un monitor que pasa no basta
para aceptar una propuesta: también había que comprobar que seguía rechazando
código incorrecto.

## 5. Límites, aprendizaje y autoría de esta memoria

El trabajo mostró la necesidad de contrastar las propuestas con el proyecto real.
Hubo que corregir configuración de tests, completar rutas de caché y revisar cuándo
se confirma una escritura de la cola. Una propuesta comprobada en una copia temporal
tampoco garantizaba que el archivo incorporado al proyecto fuese idéntico o que
la aplicación desplegada sirviese esa versión.

Las pruebas automáticas aportaron evidencia de comportamientos concretos. La
instalación automatizada y las comprobaciones de accesibilidad se distinguieron
de las observaciones humanas de la ventana instalada y del lanzador. Del mismo modo,
un monitor de compatibilidad no demuestra por sí solo un acuerdo con otro equipo.

La documentación permite explicar por qué se eligió cada solución y qué demuestra
cada prueba. No se cuantifica un ahorro de tiempo ni se incluyen tareas 8–10 como realizadas bajo criterio del profesor.

Esta memoria esta realizada por Pablo Novoa Rodríguez con la ayuda de Claude Opus 5.5 para la estructura y conversión a .md
