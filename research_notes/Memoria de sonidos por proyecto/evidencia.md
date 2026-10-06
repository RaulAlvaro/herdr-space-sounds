# Aprendizaje y uso de señales sonoras para proyectos

## ¿Existe un máximo de sonidos que una persona pueda aprender y asociar?

### Takeaway
No se encontró un máximo universal para asociaciones aprendidas entre sonidos breves y proyectos. Los límites clásicos de memoria inmediata y de identificación de tonos puros miden tareas distintas; la evidencia aplicada muestra que personas pueden aprender al menos diez correspondencias sonido→categoría, pero la precisión depende del diseño, la práctica y el tiempo sin exposición.

### Cited Findings
- Miller (1956) describe el resultado de Pollack: para identificar **tonos que difieren solo en altura**, con cuatro tonos las confusiones eran raras y con cinco o más frecuentes; la información transmitida se aproximaba a 2,5 bits, equivalentes a unas seis categorías de altura sin error. El propio texto presenta excepciones para oyentes con tono absoluto y explica que agregar dimensiones perceptivas puede aumentar las categorías distinguibles. Esto no es un techo para sonidos de interfaz con timbres, ritmos y melodías distintos. — [Miller, Psychological Review 1956, texto del artículo](https://labs.la.utexas.edu/gilden/files/2016/04/MagicNumberSeven-Miller1956.pdf)
- Miller distingue explícitamente el «span of absolute judgment» (nombrar un estímulo en una dimensión) de la memoria inmediata (retener una secuencia) y considera sospechosa la coincidencia numérica del siete en esos experimentos. — [Miller 1956](https://labs.la.utexas.edu/gilden/files/2016/04/MagicNumberSeven-Miller1956.pdf)
- Garzonis et al. estudiaron **10 iconos auditivos y 10 earcons**, cada conjunto asignado a 10 categorías de servicios. Tras una semana de exposición con feedback, el promedio en el segundo laboratorio fue 15,07/20 identificaciones para iconos auditivos y 4,2/20 para earcons (la prueba presentaba cada uno de los 10 sonidos dos veces); hubo un entrenamiento de laboratorio posterior hasta 100% o seis rondas. La propia prueba de entrenamiento permite concluir que las 10 correspondencias eran aprendibles al menos para algunos participantes y, en promedio, los iconos requerían 1,13 rondas frente a 3,73 de los earcons. No permite inferir un máximo personal ni que todos llegaran al 100%. — [Garzonis et al., CHI 2009, DOI 10.1145/1518701.1518932](https://purehost.bath.ac.uk/ws/portalfiles/portal/110773883/garzonis_chi09.pdf)
- El artículo de Garzonis llama «identificación» a escoger una categoría entre opciones visibles; eso es distinto de recordar libremente el nombre al oír un sonido sin opciones. Su muestra fue pequeña (16 participantes completaron las fases principales; 2 no completaron la fase web), con teléfonos Nokia N95 y servicios móviles de 2009. — [Garzonis et al. 2009](https://purehost.bath.ac.uk/ws/portalfiles/portal/110773883/garzonis_chi09.pdf)

### Inferences
- Para el plugin, seis sonidos individualmente distinguibles no parecen sobrepasar una capacidad humana fija; el riesgo real es confundir sonidos o no reforzar las asociaciones, en especial los eventos poco frecuentes. El número seis es una decisión de diseño inicial, no un «máximo científico».
- Una prueba con lista de seis proyectos/estados visible facilita identificación por elección múltiple; responder el nombre mentalmente antes de mirar la pantalla evalúa algo más cercano al uso diario. La memoria de trabajo de una secuencia simultánea no es lo mismo que recuperar una asociación estable al oír un único aviso.

### Gaps
- No se localizó un estudio que estime un límite máximo individual de asociaciones entre sonidos de macOS y seis combinaciones concretas proyecto/estado durante programación. Tampoco una cifra universal extrapolable de las tareas existentes.

## ¿Qué factores hacen funcionales o confusas las seis señales durante el trabajo?

### Takeaway
La correspondencia semántica, la diferencia acústica entre señales, el entrenamiento con feedback, la frecuencia de exposición y las interrupciones simultáneas pesan más que el número seis aislado. La evidencia favorece sonidos con un significado intuitivo y advierte que los earcons abstractos pueden requerir más aprendizaje y carga mental.

### Cited Findings
- Garzonis et al. hallaron que los iconos auditivos con relación reconocible con su evento se identificaban más rápido y correctamente que earcons abstractos antes y después de la exposición de campo. La exactitud aumentó del primer al segundo laboratorio para ambos tipos; después de una y cuatro semanas sin exposición, cayó para ambos. El artículo informa mejor retención de iconos auditivos, aunque su estadístico de interacción «tipo × tiempo» aparece **inconsistente: F(8)=5,07, p=0,38**; no se debe repetir su conclusión de que un tipo *se olvidó significativamente más rápido* sin aclarar ese error. — [Garzonis et al. 2009](https://purehost.bath.ac.uk/ws/portalfiles/portal/110773883/garzonis_chi09.pdf)
- En Garzonis et al., algunos sonidos cotidianos tuvieron asociaciones intuitivas pobres: un sonido de recordatorio se confundió con SMS (56% de respuestas SMS frente a 9% correctas para recordatorio en la primera sesión); dos metáforas mejoraron a 100% después de que se explicaran. Los participantes necesitaron explicación y unos cuatro minutos de exploración para que los earcons abstractos alcanzaran resultados comparables, aunque inferiores, a los iconos antes de entrenamiento. — [Garzonis et al. 2009](https://purehost.bath.ac.uk/ws/portalfiles/portal/110773883/garzonis_chi09.pdf)
- En el experimento de Brewster, Wright y Edwards, los earcons estructurados superaron ráfagas sin estructura y los timbres musicales funcionaron mejor que tonos simples; ajustes al diseño mejoraron significativamente el reconocimiento. — [Brewster et al., INTERCHI 1993, DOI 10.1145/169059.169179, repositorio universitario](https://eprints.gla.ac.uk/3257/)
- McGookin y Brewster estudiaron earcons **reproducidos a la vez**: reducir el número concurrente mejoró la identificación; timbres únicos o separar los inicios 300 ms también la mejoraron. Es evidencia sobre solapamiento temporal, no sobre cuántos sonidos se pueden aprender a largo plazo. — [McGookin y Brewster, ACM TAP 2004, DOI 10.1145/1024083.1024087](https://eprints.gla.ac.uk/3281/)
- Lei et al. (2022) entrenaron cuatro avisos de cada tipo en dos experimentos (72 participantes en cada uno) y los insertaron durante tareas de recuerdo verbal o espacial. Identificar earcons, y en la tarea verbal también spearcons, redujo la precisión del recuerdo respecto a la condición sin aviso o de ignorar aviso; identificar iconos auditivos no mostró esa reducción. Los avisos duraban 903–1078 ms. No es una medición de programación real ni de seis sonidos. — [Lei et al., Frontiers in Psychology 2022, DOI 10.3389/fpsyg.2022.780657](https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2022.780657/pdf)

### Inferences
- Conviene que cada **proyecto** tenga una identidad sonora claramente distinta (timbre/ritmo/contorno), y que «terminó» versus «bloqueado» también sean inequívocos. Si dos presets suenan parecidos al volumen real de trabajo, cambiarlos es más prometedor que esperar memorización por pura repetición.
- La cola de reproducción prevista en el MVP es coherente con el hallazgo de solapamiento, aunque el intervalo de 300 ms de McGookin/Brewster no es necesariamente óptimo para este plugin.
- La prioridad percibida del sonido no queda demostrada por identificar bien el proyecto. Habría que comprobar por separado si el aviso hace que el usuario decida correctamente qué revisar primero y si le interrumpe demasiado.

### Gaps
- No hay en estas fuentes medición de sonidos específicos de macOS, volumen bajo de un portátil, auriculares personales ni ambiente de programación con agentes. Tampoco una comparación directa de «seis sonidos independientes» frente a «tres identidades de proyecto + dos estados compartidos».

## ¿Cómo probar si funciona en el caso del usuario?

### Takeaway
Una prueba personal de identificación sin mirar la pantalla, repetida después de uso real, dará una respuesta más útil que extrapolar un límite general. Debe medir los seis pares por separado, rapidez de identificación y confusiones entre proyectos o estados.

### Cited Findings
- Garzonis et al. usaron un diseño con primera identificación, una semana de avisos en contexto real y feedback de la categoría correcta, una segunda identificación y pruebas diferidas a una y cuatro semanas. Es un precedente directo para observar aprendizaje y retención en lugar de preguntar solo si «parece memorable». — [Garzonis et al. 2009](https://purehost.bath.ac.uk/ws/portalfiles/portal/110773883/garzonis_chi09.pdf)
- El estudio de Lei et al. separó identificar un aviso de ignorarlo mientras se realiza una tarea de memoria; esa distinción muestra que identificar correctamente un sonido y causar poca interrupción son resultados distintos. — [Lei et al. 2022](https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2022.780657/pdf)

### Inferences
- Protocolo casero propuesto, **no validado como estándar**: (1) al comienzo, reproducir cada uno de los seis sonidos en orden aleatorio dos o tres veces, sin mirar el proyecto, y anotar proyecto, estado, confianza y tiempo aproximado; (2) usar el plugin durante 1–2 semanas, sin cambiar el mapeo, y cuando suene un evento real identificarlo mentalmente antes de mirar Herdr; anotar fallos y si se decide correctamente qué atender; (3) repetir una sesión de prueba aleatoria al final, incluido algún día con menos exposición. Registrar una matriz de confusión: ¿se equivoca de proyecto, de estado, o ambos? Comparar antes/después y, si hay errores persistentes, cambiar solo el sonido conflictivo y repetir.
- Por seis categorías, azar en selección forzada sería 1/6 si todas equiprobables y se elige una de seis opciones; en uso real puede haber probabilidades desiguales o pistas de contexto, por lo que ese punto de comparación es limitado. Priorizar ausencia de errores de proyecto en sonidos que señalan tareas importantes por encima de perseguir un porcentaje agregado.
- Mantener los sonidos estables durante la prueba ayuda a evaluar aprendizaje; dar una explicación breve («este sonido = proyecto X, bloqueado») y feedback inmediato podría acelerarlo, conforme al entrenamiento de Garzonis.

### Gaps
- La literatura encontrada no ofrece un umbral universal de precisión ni un número de días que defina «el plugin ya funciona» para una sola persona. Esos criterios deben fijarse según el costo de confundir proyectos y la tolerancia a interrupciones del usuario.
