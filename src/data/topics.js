export const topics = {
  economia: {
    path: '/economia',
    nextPath: '/pemex',
    nextLabel: 'Pemex y finanzas',
    navLabel: 'Economía y nearshoring',
    eyebrow: 'Oportunidad vs realidad',
    title: 'Economía y nearshoring',
    imageKey: 'economia',
    summary:
      'Mexico tiene una oportunidad historica por su cercania con Estados Unidos, pero el nearshoring no se convierte en desarrollo si faltan agua, energia, talento, seguridad, vivienda, transporte y reglas claras.',
    keyIdea:
      'La geografia abre la puerta; la infraestructura, la educacion y el Estado de derecho deciden si Mexico entra.',
    sourceIds: ['banxico-pib', 'reuters-banxico', 'imco-ied', 'imco-nearshoring'],
    problemIntro:
      'El problema economico de Mexico no es un colapso inmediato, sino un crecimiento demasiado lento para el tamano de sus rezagos. Una economia con informalidad, pobreza regional, baja productividad y presion fiscal no puede conformarse con crecer cerca de 1%. Ese ritmo no transforma la estructura productiva ni alcanza para cerrar brechas sociales profundas.',
    background:
      'El Banco de Mexico proyecto para 2026 un crecimiento puntual de 1.6% en su informe trimestral, aunque reportes posteriores mencionaron un ajuste hacia 1.1%. Al mismo tiempo, el sistema financiero conserva solidez, capital y liquidez, pero enfrenta riesgos por menor crecimiento, inflacion, tensiones externas y posible deterioro crediticio. La estabilidad macroeconomica importa, pero estabilidad sin crecimiento suficiente se vuelve estancamiento ordenado.',
    causes: [
      {
        title: 'Crecimiento insuficiente',
        text: 'El pais avanza, pero no al ritmo que necesita una economia que quiere absorber jovenes, formalizar empleo, elevar salarios y financiar infraestructura. Crecer poco significa recaudar menos, invertir menos y resolver mas lento los rezagos acumulados.',
      },
      {
        title: 'IED que no siempre es inversion nueva',
        text: 'IMCO reporto 23,591 millones de dolares de IED en el primer trimestre de 2026, pero la inversion nueva fue solo 7.2% del total. La reinversion de utilidades es positiva, aunque no prueba por si sola una oleada de nuevas plantas o cadenas productivas.',
      },
      {
        title: 'Condiciones regionales desiguales',
        text: 'El norte y algunos estados industriales tienen ventajas, mientras otras regiones arrastran falta de talento, transporte, tratamiento de aguas, vivienda y servicios. El nearshoring puede concentrar beneficios si no se construyen condiciones en mas territorios.',
      },
      {
        title: 'Recursos basicos como cuello de botella',
        text: 'Las empresas no se instalan solo por estar cerca de Estados Unidos. Necesitan suministro continuo de agua y energia, seguridad para operar, reglas estables y una ciudad capaz de alojar trabajadores.',
      },
    ],
    consequences: [
      {
        title: 'Oportunidad limitada',
        text: 'Mexico puede recibir anuncios de inversion sin que eso se traduzca automaticamente en nuevos empleos de alto valor, mayor productividad o desarrollo regional equilibrado.',
      },
      {
        title: 'Brecha territorial',
        text: 'Los estados mejor preparados atraen mas proyectos, mientras los estados con rezagos educativos, logisticos o regulatorios se alejan de la oportunidad.',
      },
      {
        title: 'Dependencia de Estados Unidos',
        text: 'La integracion con Norteamerica es una ventaja, pero tambien vuelve al pais vulnerable a desaceleraciones, cambios arancelarios o tensiones comerciales estadounidenses.',
      },
    ],
    realChallenges: [
      {
        title: 'Convertir estabilidad en crecimiento',
        text: 'La estabilidad financiera es necesaria, pero no basta. Mexico necesita inversion publica productiva, certidumbre regulatoria y condiciones locales para elevar productividad.',
      },
      {
        title: 'Separar anuncio de transformacion',
        text: 'Una cifra alta de IED no significa por si sola llegada masiva de nuevas plantas. El reto es atraer inversion nueva, sofisticada y con encadenamientos locales.',
      },
      {
        title: 'Evitar un nearshoring de pocos polos',
        text: 'Si solo ganan los territorios ya competitivos, el nearshoring puede ampliar la desigualdad regional en lugar de reducirla.',
      },
    ],
    connections:
      'Educacion se conecta con productividad y nearshoring; seguridad con inversion y empleo; agua con industria, agricultura y vivienda; instituciones con confianza y reglas claras; Pemex con el espacio fiscal para infraestructura.',
    conclusion:
      'El nearshoring es una ventana, no una garantia. Mexico puede aprovecharla si deja de tratar sus cuellos de botella como temas separados y entiende que agua, energia, seguridad, educacion e instituciones son parte de la politica economica.',
    matrix: {
      title: 'Semáforo de condiciones para nearshoring',
      items: [
        ['Talento tecnico', 'Alto'],
        ['Agua', 'Critico'],
        ['Energia', 'Alto'],
        ['Seguridad', 'Critico'],
        ['Vivienda', 'Medio'],
        ['Transporte', 'Medio'],
        ['Estado de derecho', 'Alto'],
        ['Regulacion', 'Pendiente'],
      ],
    },
    table: {
      columns: ['Oportunidad', 'Obstaculo', 'Consecuencia'],
      rows: [
        ['Cercania con Estados Unidos', 'Infraestructura desigual', 'La inversion se concentra en pocos polos'],
        ['T-MEC y base manufacturera', 'Talento tecnico insuficiente', 'Menos empleos de alto valor'],
        ['Reinversion de empresas instaladas', 'Poca inversion nueva', 'Menor transformacion productiva'],
        ['Mercado interno grande', 'Inseguridad y reglas inciertas', 'Mayor costo de operar e invertir'],
      ],
    },
  },
  pemex: {
    path: '/pemex',
    nextPath: '/pobreza',
    nextLabel: 'Pobreza y desigualdad',
    navLabel: 'Pemex y finanzas públicas',
    eyebrow: 'Presion fiscal',
    title: 'Pemex y finanzas públicas',
    imageKey: 'pemex',
    summary:
      'Pemex es estrategica, pero tambien una carga financiera. El problema de fondo no es ideologico: es fiscal, operativo y de costo de oportunidad.',
    keyIdea:
      'Cada peso usado para sostener deuda o flujo operativo de Pemex no puede usarse al mismo tiempo en agua, salud, educacion, seguridad, transporte o infraestructura.',
    sourceIds: ['infobae-pemex', 'ciep-salud'],
    problemIntro:
      'Pemex arrastra deuda elevada, necesidades constantes de liquidez y dependencia del apoyo federal. El tema no se reduce a estar a favor o en contra de una empresa estatal; la pregunta publica es cuanto espacio fiscal absorbe y que prioridades desplaza.',
    background:
      'Moodys advirtio, segun la cobertura de Infobae, que Pemex mantendra alta presion financiera al menos hasta 2028 por debil flujo de caja libre, vulnerabilidades operativas y dependencia del gobierno. Tambien se reportan apoyos superiores a 40,000 millones de dolares en 2025 y alrededor de 14,000 millones presupuestados en 2026 para obligaciones de corto plazo.',
    causes: [
      {
        title: 'Deuda y vencimientos',
        text: 'La empresa debe cubrir compromisos financieros grandes. Cuando su flujo no alcanza, el gobierno federal se convierte en respaldo, lo que traslada el problema al presupuesto publico.',
      },
      {
        title: 'Refinanciar no equivale a invertir',
        text: 'Refinanciar deuda sirve para cambiar plazos o cubrir obligaciones existentes. Invertir productivamente significa mejorar exploracion, produccion, mantenimiento, eficiencia o transicion energetica.',
      },
      {
        title: 'Dependencia de apoyo federal',
        text: 'Cuando la operacion depende de inyecciones recurrentes, la empresa entra en una logica defensiva: sobrevivir financieramente antes que transformarse.',
      },
    ],
    consequences: [
      {
        title: 'Menos espacio fiscal',
        text: 'Los recursos destinados a rescatar o sostener a Pemex reducen margen para infraestructura hidraulica, hospitales, escuelas, transporte, ciencia o seguridad.',
      },
      {
        title: 'Costo de oportunidad permanente',
        text: 'El costo no es solo el monto transferido, sino lo que no se construye mientras esos recursos se destinan a cubrir obligaciones petroleras.',
      },
      {
        title: 'Riesgo para inversion publica',
        text: 'Si el presupuesto se vuelve mas rigido, Mexico tiene menos capacidad para financiar las condiciones que exige el nearshoring.',
      },
    ],
    realChallenges: [
      {
        title: 'Separar rescate de transformacion',
        text: 'Cubrir deuda evita crisis inmediatas, pero no garantiza que Pemex produzca mejor ni que reduzca su dependencia futura.',
      },
      {
        title: 'Transparentar el costo fiscal',
        text: 'La sociedad necesita distinguir entre apoyo operativo, refinanciamiento, inversion productiva y transicion energetica.',
      },
      {
        title: 'Proteger prioridades sociales',
        text: 'El reto es impedir que la presion de Pemex desplace salud, agua, educacion y seguridad, areas que ya tienen deficits severos.',
      },
    ],
    connections:
      'Pemex se conecta con economia porque limita recursos para infraestructura; con salud y educacion porque compite por presupuesto; con agua porque reduce margen para redes y tratamiento; y con instituciones porque requiere transparencia fiscal.',
    conclusion:
      'Sostener a Pemex puede evitar problemas financieros de corto plazo, pero no debe confundirse con una estrategia de desarrollo. Si la empresa no cambia su dinamica operativa, seguira presionando el futuro fiscal del pais.',
    flow: ['Deuda de Pemex', 'Apoyo federal', 'Menor espacio fiscal', 'Menos inversion publica', 'Infraestructura insuficiente'],
    explainerBlocks: [
      {
        title: 'Refinanciar deuda',
        text: 'Cubrir o reordenar obligaciones existentes. Ayuda a evitar vencimientos, pero no crea por si mismo nueva capacidad productiva.',
      },
      {
        title: 'Invertir en produccion',
        text: 'Destinar recursos a exploracion, mantenimiento, tecnologia y eficiencia para que la empresa genere mas valor operativo.',
      },
      {
        title: 'Sostener flujo operativo',
        text: 'Cubrir necesidades inmediatas de liquidez para que la empresa siga funcionando, aun si el problema estructural permanece.',
      },
      {
        title: 'Transicion energetica',
        text: 'Preparar a la empresa para un mercado energetico menos dependiente de combustibles fosiles y mas exigente en eficiencia.',
      },
    ],
  },
  pobreza: {
    path: '/pobreza',
    nextPath: '/educacion',
    nextLabel: 'Educación',
    navLabel: 'Pobreza y desigualdad',
    eyebrow: 'Derechos sociales',
    title: 'Pobreza y desigualdad',
    imageKey: 'sociedad',
    summary:
      'La pobreza bajo, pero Mexico no puede cantar victoria: casi 40 millones de personas siguen en pobreza y las carencias pesan de forma desigual segun el territorio.',
    keyIdea:
      'En Mexico el codigo postal pesa demasiado: el lugar donde naces condiciona salud, escuela, empleo, seguridad y movilidad social.',
    sourceIds: ['inegi-pobreza', 'ibero-pobreza'],
    problemIntro:
      'La pobreza no es solo falta de ingreso. Tambien significa rezago educativo, falta de acceso efectivo a salud, vivienda insuficiente, servicios debiles, inseguridad social y pocas oportunidades locales. Por eso la pobreza multidimensional permite mirar mejor como se acumulan las carencias.',
    background:
      'INEGI reporto en 2024 a 38.5 millones de personas en pobreza multidimensional, equivalente a 29.6% de la poblacion, y a 7.0 millones en pobreza extrema, 5.3%. La reduccion es real, pero la cifra sigue siendo grave. Tambien reporto 24.2 millones de personas con rezago educativo y 44.5 millones con carencia por acceso a servicios de salud.',
    causes: [
      {
        title: 'Carencias acumuladas',
        text: 'Una persona puede mejorar su ingreso y aun vivir sin atencion medica efectiva, educacion suficiente, seguridad social o servicios basicos. Las carencias se refuerzan entre si.',
      },
      {
        title: 'Desigualdad territorial',
        text: 'Chiapas, Guerrero y Oaxaca siguen con rezagos fuertes. El desarrollo nacional esta partido entre regiones industriales y urbanas con mas capacidades y regiones rurales o del sur con menos servicios.',
      },
      {
        title: 'Medicion bajo debate',
        text: 'La desaparicion de CONEVAL traslado funciones al INEGI. INEGI tiene capacidad tecnica, pero el debate de fondo es la independencia, la comparabilidad historica y la evaluacion autonoma de la politica social.',
      },
    ],
    consequences: [
      {
        title: 'Futuro condicionado desde la infancia',
        text: 'Un joven que nace sin buena escuela, internet, transporte, hospital cercano o empleo formal local no compite desde el mismo punto que uno nacido en una ciudad con servicios.',
      },
      {
        title: 'Movilidad social limitada',
        text: 'El esfuerzo individual importa, pero no cancela las condiciones de arranque. Para millones, subir de condicion es mas excepcion que regla.',
      },
      {
        title: 'Politica social vulnerable al discurso',
        text: 'Si se debilitan instrumentos independientes de medicion, la reduccion de pobreza puede convertirse en propaganda o disputa politica en lugar de diagnostico verificable.',
      },
    ],
    realChallenges: [
      {
        title: 'No confundir mejora con solucion',
        text: 'La reduccion de pobreza debe reconocerse, pero casi 40 millones de personas pobres siguen siendo una emergencia social.',
      },
      {
        title: 'Atender servicios, no solo ingreso',
        text: 'La politica social debe incluir salud, educacion, vivienda, seguridad social y servicios, no solo transferencias monetarias.',
      },
      {
        title: 'Cuidar medicion independiente',
        text: 'Sin datos confiables y comparables, el pais no sabe si sus programas funcionan o solo cambian el relato publico.',
      },
    ],
    connections:
      'Pobreza se conecta con educacion porque el rezago limita movilidad; con salud porque la carencia de atencion golpea mas a hogares pobres; con agua porque el acceso desigual cuesta mas a periferias; con instituciones porque medir bien es parte de gobernar bien.',
    conclusion:
      'La pobreza mexicana no es una cifra abstracta: es una red de obstaculos. Reducirla exige ingresos, pero tambien servicios publicos efectivos y evaluacion independiente.',
    table: {
      columns: ['Dimension', 'Dato clave', 'Lectura social'],
      rows: [
        ['Pobreza multidimensional', '38.5 millones de personas', 'La mejora no elimina la gravedad del rezago'],
        ['Pobreza extrema', '7.0 millones de personas', 'Carencia profunda que requiere intervencion prioritaria'],
        ['Rezago educativo', '24.2 millones de personas', 'Limita empleo, productividad y movilidad'],
        ['Carencia de salud', '44.5 millones de personas', 'Muestra distancia entre derecho formal y acceso real'],
      ],
    },
  },
  educacion: {
    path: '/educacion',
    nextPath: '/salud',
    nextLabel: 'Salud pública',
    navLabel: 'Educación',
    eyebrow: 'Futuro nacional',
    title: 'Educación',
    imageKey: 'educacion',
    summary:
      'La educacion es uno de los danos silenciosos mas graves: PISA muestra una crisis de aprendizaje que limita productividad, movilidad social y futuro tecnologico.',
    keyIdea:
      'Mexico quiere industrias de mayor valor, pero una parte enorme de sus estudiantes no domina herramientas basicas para entrar a ese futuro.',
    sourceIds: ['imco-pisa', 'imco-espiral', 'sep-calendario'],
    problemIntro:
      'El problema educativo no son solo malas calificaciones. Es una crisis de aprendizaje que afecta lectura, matematicas, ciencia y pensamiento critico. Cuando los estudiantes no desarrollan competencias basicas, el pais pierde capacidad para formar tecnicos, ingenieros, medicos, programadores, cientificos y emprendedores.',
    background:
      'En PISA 2022, Mexico obtuvo 407 puntos frente a 478 del promedio OCDE y se ubico en el lugar 35 de 37 paises OCDE evaluados, segun el resumen de IMCO. El mismo analisis senala que dos de cada tres estudiantes mexicanos no alcanzan competencias basicas en matematicas.',
    causes: [
      {
        title: 'Aprendizajes basicos debilitados',
        text: 'Si lectura y matematicas fallan, todo lo demas se vuelve mas dificil: ciencia, tecnologia, formacion tecnica, comprension de informacion publica y aprendizaje autonomo.',
      },
      {
        title: 'Evaluacion educativa reducida',
        text: 'IMCO advierte que Mexico perdio instrumentos como el INEE y Mejoredu, y que pruebas nacionales dejaron de aplicarse con continuidad. Sin medicion, el sistema no sabe donde esta el dano.',
      },
      {
        title: 'Reformas sin diagnostico suficiente',
        text: 'Un modelo educativo puede tener principios valiosos, pero ningun sistema debe quedar exento de evaluacion honesta y comparable.',
      },
    ],
    consequences: [
      {
        title: 'Menor capital humano',
        text: 'Sin habilidades basicas, Mexico compite con empleos de menor valor y tiene menos capacidad de atraer industrias complejas.',
      },
      {
        title: 'Movilidad social mas dificil',
        text: 'Los hogares con menos recursos tienen menos posibilidades de compensar por fuera lo que la escuela no logra ensenar.',
      },
      {
        title: 'Nearshoring limitado',
        text: 'La relocalizacion requiere tecnicos y profesionales preparados. Sin ellos, la oportunidad se queda en actividades de bajo valor agregado.',
      },
    ],
    realChallenges: [
      {
        title: 'Recuperar matematicas, lectura y ciencias',
        text: 'El pais necesita politicas de recuperacion de aprendizajes, materiales adecuados, maestros apoyados y seguimiento real de resultados.',
      },
      {
        title: 'Rehabilitar evaluacion tecnica',
        text: 'Evaluar no debe significar castigar: debe servir para saber que escuelas, regiones y grados necesitan apoyo urgente.',
      },
      {
        title: 'Manejar con cuidado el calendario escolar',
        text: 'El debate del ciclo 2025-2026 debe tratarse como punto a verificar. No debe presentarse como hecho cerrado sin documento oficial vigente de SEP o DOF.',
      },
    ],
    connections:
      'Educacion se conecta con economia porque define productividad; con pobreza porque condiciona movilidad social; con instituciones porque necesita evaluacion independiente; y con seguridad porque oportunidades educativas reducen vulnerabilidad social.',
    conclusion:
      'La educacion no es una pagina mas del diagnostico: es el suelo del futuro. Si Mexico no corrige aprendizajes basicos, su oportunidad industrial tendra un limite humano.',
    flow: ['Bajo aprendizaje', 'Menor capital humano', 'Menor productividad', 'Empleos de bajo valor', 'Menor movilidad social'],
    warning: {
      title: 'Punto a verificar',
      text: 'El debate sobre un posible recorte del ciclo escolar 2025-2026 debe validarse contra el calendario oficial vigente de la SEP o el Diario Oficial. No debe presentarse como hecho cerrado.',
    },
    table: {
      columns: ['Area', 'Problema', 'Consecuencia'],
      rows: [
        ['Matematicas', 'Dos de cada tres estudiantes sin nivel basico, segun IMCO', 'Menor acceso a formacion tecnica'],
        ['Lectura', 'Dificultad para interpretar informacion', 'Menor pensamiento critico'],
        ['Ciencias', 'Menor uso de evidencia', 'Menor preparacion para sectores complejos'],
        ['Evaluacion', 'Menos instrumentos independientes', 'Politicas menos verificables'],
      ],
    },
  },
  salud: {
    path: '/salud',
    nextPath: '/seguridad',
    nextLabel: 'Seguridad e impunidad',
    navLabel: 'Salud pública',
    eyebrow: 'Cobertura vs atencion real',
    title: 'Salud pública',
    imageKey: 'salud',
    summary:
      'Tener derecho a atencion no significa recibirla a tiempo. La salud publica mexicana enfrenta bajo gasto, carencia de acceso, deficit de personal y problemas de abasto.',
    keyIdea:
      'La cobertura formal solo cuenta si se convierte en consulta, diagnostico, medicamento, referencia y tratamiento oportuno.',
    sourceIds: ['ocde-salud', 'inegi-pobreza', 'imss-bienestar', 'ciep-salud', 'elpais-medicamentos', 'animal-medicinas'],
    problemIntro:
      'La salud publica no se mide solo por estar inscrito a un sistema. Una persona necesita llegar a una unidad, encontrar personal, recibir diagnostico, conseguir medicamentos, ser referida si requiere especialista y no quebrar economicamente en el proceso.',
    background:
      'La OCDE reporta que Mexico gasta mucho menos en salud que el promedio de sus miembros: 1,588 dolares por persona frente a 5,967, y 5.9% del PIB frente a 9.3%. Tambien hay deficits: 2.7 medicos por cada mil habitantes frente a 3.9 de la OCDE, 3.0 enfermeras frente a 9.2 y 1.0 cama hospitalaria frente a 4.2.',
    causes: [
      {
        title: 'Financiamiento insuficiente',
        text: 'Con menos gasto por persona y menor proporcion del PIB, el sistema intenta cubrir mas necesidades de las que puede atender con calidad constante.',
      },
      {
        title: 'Deficit de personal e infraestructura',
        text: 'Faltan medicos, enfermeras, camas, especialistas, equipos y mantenimiento. La infraestructura por si sola no garantiza atencion si no hay operacion cotidiana.',
      },
      {
        title: 'Abasto y compras publicas',
        text: 'El problema de medicamentos incluye compras, distribucion, vigilancia, corrupcion y mercado irregular. El periodismo de investigacion se usa como contexto de esas fallas.',
      },
    ],
    consequences: [
      {
        title: 'Atencion tardia',
        text: 'Las citas lejanas, la falta de especialistas y los traslados largos retrasan diagnosticos y tratamientos.',
      },
      {
        title: 'Costo para familias',
        text: 'Cuando faltan medicamentos o estudios, los hogares absorben gastos que deberian estar cubiertos por el sistema.',
      },
      {
        title: 'Desigualdad sanitaria',
        text: 'Las zonas rurales e indigenas enfrentan mas barreras para llegar a segundo o tercer nivel de atencion.',
      },
    ],
    realChallenges: [
      {
        title: 'Convertir derecho en servicio efectivo',
        text: 'La cobertura debe reflejarse en atencion medica real, no solo en una afiliacion o red institucional en papel.',
      },
      {
        title: 'Asegurar personal, medicamentos y equipos',
        text: 'Sin insumos, mantenimiento y especialistas, las unidades se vuelven puertas de entrada sin solucion suficiente.',
      },
      {
        title: 'Ordenar compras y vigilancia',
        text: 'El abasto exige reglas claras, trazabilidad y combate al mercado irregular de medicamentos.',
      },
    ],
    connections:
      'Salud se conecta con pobreza porque las carencias golpean mas a hogares vulnerables; con Pemex porque el presupuesto es finito; con educacion porque la enfermedad afecta aprendizaje; y con instituciones porque compras y vigilancia requieren transparencia.',
    conclusion:
      'El reto sanitario es cerrar la distancia entre cobertura formal y atencion real. Sin personal, insumos, referencia y abasto, la promesa de universalidad queda incompleta.',
    flow: ['Paciente rural', 'Unidad medica', 'Hospital rural', 'Especialista', 'Barreras de acceso'],
    table: {
      columns: ['Indicador', 'Mexico', 'Promedio OCDE', 'Lectura'],
      rows: [
        ['Gasto por persona', '1,588 dolares', '5,967 dolares', 'Menor capacidad de financiar servicios'],
        ['Gasto como % del PIB', '5.9%', '9.3%', 'Brecha estructural de financiamiento'],
        ['Medicos por mil habitantes', '2.7', '3.9', 'Menos capacidad de consulta y diagnostico'],
        ['Enfermeras por mil habitantes', '3.0', '9.2', 'Mayor presion sobre atencion diaria'],
        ['Camas por mil habitantes', '1.0', '4.2', 'Menor capacidad hospitalaria'],
      ],
    },
  },
  seguridad: {
    path: '/seguridad',
    nextPath: '/agua',
    nextLabel: 'Agua y medio ambiente',
    navLabel: 'Seguridad e impunidad',
    eyebrow: 'Justicia penal',
    title: 'Seguridad e impunidad',
    imageKey: 'seguridad',
    summary:
      'La inseguridad no se mide solo con homicidios: tambien hay extorsion, robo, fraude, amenazas, desaparicion, violencia familiar, miedo a denunciar y cifra negra.',
    keyIdea:
      'Si casi nadie denuncia y casi nada se resuelve, el delito se vuelve barato.',
    sourceIds: ['inegi-envipe', 'impunidad-cero', 'mexicoevalua-impunidad', 'ohchr-justicia', 'elpais-extorsion'],
    problemIntro:
      'El problema de seguridad no termina al contar delitos. Importa si la victima denuncia, si la fiscalia investiga, si hay peritajes, si se integra bien la carpeta, si llega a sancion y si la persona recupera confianza en el sistema.',
    background:
      'ENVIPE 2025 estima millones de victimas adultas y delitos, asi como una percepcion de inseguridad muy alta. La cifra negra desnuda al sistema: cuando delitos no se denuncian o no se investigan, la realidad criminal supera lo que dicen los registros oficiales.',
    causes: [
      {
        title: 'Miedo y desconfianza',
        text: 'Muchas personas no denuncian por miedo, tramite largo, revictimizacion o porque sienten que no servira de nada.',
      },
      {
        title: 'Fiscalias debiles',
        text: 'El problema no es solo de jueces. Tambien hay investigaciones mal integradas, falta de peritajes, poca capacidad tecnica y seguimiento insuficiente.',
      },
      {
        title: 'Extorsion como impuesto criminal',
        text: 'El cobro de piso extrae recursos de negocios y familias, sube precios, inhibe empleo y demuestra que grupos criminales pueden imponer reglas paralelas.',
      },
    ],
    consequences: [
      {
        title: 'Delito invisible',
        text: 'Si los delitos no se denuncian, el Estado no los investiga y la estadistica queda incompleta.',
      },
      {
        title: 'Impunidad reproducida',
        text: 'Cuando no hay consecuencias, cometer delitos se vuelve menos riesgoso para el agresor y mas costoso para la victima.',
      },
      {
        title: 'Inversion y vida diaria afectadas',
        text: 'La inseguridad encarece transporte, comercio, horarios, seguros, contratacion y decisiones de inversion.',
      },
    ],
    realChallenges: [
      {
        title: 'Hacer que denunciar tenga sentido',
        text: 'La denuncia debe ser accesible, segura y util. Si no genera investigacion real, la cifra negra seguira alta.',
      },
      {
        title: 'Profesionalizar fiscalias',
        text: 'Se necesitan capacidades de investigacion, peritajes, analisis criminal, atencion a victimas y seguimiento digital.',
      },
      {
        title: 'Atender extorsion como amenaza economica',
        text: 'No es solo violencia: es una estructura de cobro que compite con el Estado y destruye confianza local.',
      },
    ],
    connections:
      'Seguridad se conecta con economia porque la inversion necesita operar sin cobro criminal; con instituciones porque fiscalias y tribunales deben funcionar; con pobreza porque las victimas con menos recursos denuncian menos; y con educacion porque la violencia reduce trayectorias de vida.',
    conclusion:
      'Mexico no puede medir seguridad solo con lo visible. La cifra negra, la extorsion y la impunidad muestran que la justicia debe funcionar antes, durante y despues de la denuncia.',
    flow: ['Delito', 'No denuncia', 'No investigacion', 'Impunidad', 'Desconfianza', 'Mas cifra negra'],
    caseBlocks: [
      {
        title: 'Extorsion: impuesto criminal',
        text: 'Cuando un negocio paga cobro de piso, no solo pierde dinero. Tambien pierde libertad para abrir, contratar, transportar y crecer. Ese costo se pasa a precios, empleo y miedo comunitario.',
      },
    ],
  },
  agua: {
    path: '/agua',
    nextPath: '/instituciones',
    nextLabel: 'Instituciones',
    navLabel: 'Agua y medio ambiente',
    eyebrow: 'Limite economico y social',
    title: 'Agua y medio ambiente',
    imageKey: 'agua',
    summary:
      'El agua ya no es solo un tema ambiental: es un limite para salud, agricultura, vivienda, industria, nearshoring y desigualdad territorial.',
    keyIdea:
      'La crisis hidrica no se resuelve solo con que llueva: depende de acuiferos, redes, tratamiento, distribucion, gobernanza y consumo.',
    sourceIds: ['imco-agua', 'imta-programa', 'conagua-acuiferos', 'unam-cuenca', 'unam-agua-especial'],
    problemIntro:
      'Mexico trata muchas veces el agua como si fuera infinita. No lo es. La disponibilidad depende de cuencas, acuiferos, infraestructura, fugas, tratamiento, concesiones, tarifas, planeacion urbana y desigualdad en el acceso.',
    background:
      'El IMTA senala que cerca de 66% del territorio nacional tiene condiciones aridas o semiaridas y que la disponibilidad natural media por habitante ha caido de 17,742 metros cubicos anuales a 3,656, con proyeccion de 3,285 hacia 2030. Tambien indica que la agricultura consume mas de 70% del agua concesionada.',
    causes: [
      {
        title: 'Sobreexplotacion de acuiferos',
        text: 'Extraer mas agua de la que se recarga reduce disponibilidad futura, agrava hundimientos y vuelve mas fragil el abastecimiento urbano e industrial.',
      },
      {
        title: 'Infraestructura y fugas',
        text: 'La solucion no puede ser solo pedir ahorro domestico mientras redes viejas pierden grandes volumenes. Se requieren medicion, reparacion, tratamiento y reuso.',
      },
      {
        title: 'Gobernanza desigual',
        text: 'Concesiones, tarifas, tomas irregulares, planeacion urbana y consumo agricola o industrial deben revisarse con criterios de eficiencia y justicia.',
      },
    ],
    consequences: [
      {
        title: 'Tandeos y mala calidad',
        text: 'Las colonias pobres suelen recibir agua antes con menor continuidad, peor calidad o mayor dependencia de pipas.',
      },
      {
        title: 'Riesgo sanitario',
        text: 'El manejo insuficiente de aguas residuales y el acceso intermitente pueden afectar higiene, alimentos y salud publica.',
      },
      {
        title: 'Freno a inversion e industria',
        text: 'El nearshoring necesita agua confiable. Sin ella, nuevos proyectos pierden viabilidad o presionan aun mas a comunidades.',
      },
    ],
    realChallenges: [
      {
        title: 'Distinguir lluvia de solucion',
        text: 'Una recuperacion temporal de presas puede aliviar, pero no corrige acuiferos sobreexplotados, fugas ni desigualdad en el acceso.',
      },
      {
        title: 'Tecnificar y medir usos',
        text: 'La agricultura, la industria y las ciudades necesitan medicion real, reuso y eficiencia, no solo llamados generales al ahorro.',
      },
      {
        title: 'Gobernar por cuencas y territorio',
        text: 'La Cuenca de Mexico muestra que una ciudad puede expulsar agua, hundirse y depender de otras regiones al mismo tiempo.',
      },
    ],
    connections:
      'Agua se conecta con salud por riesgos sanitarios; con economia por industria y nearshoring; con pobreza por desigualdad de acceso; con Pemex y finanzas porque requiere inversion; y con instituciones porque exige regulacion y cumplimiento.',
    conclusion:
      'La crisis del agua es una prueba de seriedad publica. Sin infraestructura, medicion y justicia territorial, el agua faltara primero donde ya faltan otros derechos.',
    flow: ['Sobreexplotacion', 'Menor disponibilidad', 'Tandeos', 'Desigualdad', 'Riesgo sanitario y economico'],
    warning: {
      title: 'Lectura cuidadosa',
      text: 'Si se menciona recuperacion temporal de presas, debe explicarse como alivio coyuntural, no como solucion estructural de acuiferos, redes y gobernanza.',
    },
  },
  instituciones: {
    path: '/instituciones',
    nextPath: '/datos',
    nextLabel: 'Datos clave',
    navLabel: 'Instituciones y Estado de derecho',
    eyebrow: 'Contrapesos',
    title: 'Instituciones y Estado de derecho',
    imageKey: 'instituciones',
    summary:
      'Las instituciones no son un tema abstracto: sirven para medir, regular, transparentar, evaluar y limitar abusos de poder.',
    keyIdea:
      'Menos autonomia puede significar menos vigilancia independiente, menos transparencia y mas discrecionalidad.',
    sourceIds: [
      'milenio-autonomos',
      'elpais-autonomos',
      'ine-judicial',
      'reuters-judicial',
      'elpais-ajuste-judicial',
      'coparmex-judicial',
      'vozyvoto-judicial',
      'ibero-pobreza',
    ],
    problemIntro:
      'El debilitamiento de organismos autonomos y los cambios judiciales afectan la forma en que se mide la pobreza, se regula la competencia, se protege informacion publica, se ordena energia, se evalua educacion y se resuelven conflictos.',
    background:
      'El Senado aprobo la desaparicion de siete organismos autonomos y reguladores, entre ellos INAI, CONEVAL, IFT, COFECE, CRE, CNH y Mejoredu. El argumento oficial fue austeridad y simplificacion, pero el riesgo principal es la perdida de vigilancia independiente y la concentracion de funciones en el gobierno.',
    causes: [
      {
        title: 'Concentracion de funciones',
        text: 'Si el gobierno absorbe funciones de medicion, evaluacion y regulacion, disminuye la distancia entre quien decide y quien debe vigilar.',
      },
      {
        title: 'Ahorro administrativo como argumento unico',
        text: 'Ahorrar recursos puede sonar razonable, pero debe compararse con el costo democratico y tecnico de perder contrapesos.',
      },
      {
        title: 'Reforma judicial con riesgos',
        text: 'La eleccion de cargos judiciales puede presentarse como democratizacion, pero abre retos de independencia, profesionalizacion, captura politica y campanas opacas.',
      },
    ],
    consequences: [
      {
        title: 'Menor transparencia',
        text: 'Sin un garante fuerte de informacion publica, la sociedad puede tener mas dificultad para conocer gasto, contratos y decisiones.',
      },
      {
        title: 'Menos evaluacion independiente',
        text: 'Pobreza, educacion y politica social quedan mas expuestas a lectura politica si se pierde autonomia tecnica.',
      },
      {
        title: 'Incertidumbre juridica',
        text: 'La inversion, la seguridad y los derechos necesitan tribunales y reguladores confiables, no decisiones impredecibles.',
      },
    ],
    realChallenges: [
      {
        title: 'Sostener funciones, no solo oficinas',
        text: 'Si cambia la arquitectura institucional, las funciones de transparencia, evaluacion y regulacion deben conservar independencia real.',
      },
      {
        title: 'Proteger independencia judicial',
        text: 'La justicia necesita corregir nepotismo y lentitud sin caer en politizacion o seleccion por popularidad.',
      },
      {
        title: 'Relacionar Estado de derecho con desarrollo',
        text: 'La certidumbre juridica afecta inversion, seguridad, derechos, democracia y confianza publica.',
      },
    ],
    connections:
      'Instituciones se conectan con economia porque la inversion necesita reglas; con seguridad porque fiscalias y jueces deben funcionar; con pobreza y educacion porque se requiere medicion independiente; y con agua y energia porque la regulacion tecnica importa.',
    conclusion:
      'Un pais no se fortalece solo concentrando poder. Se fortalece cuando puede medirse, vigilarse, corregirse y limitar abusos incluso cuando eso incomoda al gobierno en turno.',
    flow: ['Menos autonomia', 'Menor evaluacion independiente', 'Menos transparencia', 'Menor confianza', 'Mas discrecionalidad'],
    institutionsIntro:
      'Estos organismos no resolvian todos los problemas, pero separaban funciones tecnicas del ciclo politico inmediato.',
    institutions: [
      {
        name: 'INAI',
        function: 'Acceso a informacion publica y proteccion de datos.',
        risk: 'Menor capacidad ciudadana para vigilar gasto, contratos y decisiones.',
        area: 'Transparencia',
      },
      {
        name: 'CONEVAL',
        function: 'Medicion de pobreza y evaluacion de politica social.',
        risk: 'Menor independencia y comparabilidad en diagnosticos sociales.',
        area: 'Politica social',
      },
      {
        name: 'COFECE',
        function: 'Competencia economica.',
        risk: 'Mayor riesgo de decisiones politicas o mercados menos competidos.',
        area: 'Economia',
      },
      {
        name: 'IFT',
        function: 'Telecomunicaciones y radiodifusion.',
        risk: 'Regulacion tecnica menos independiente.',
        area: 'Telecomunicaciones',
      },
      {
        name: 'CRE y CNH',
        function: 'Regulacion energetica e hidrocarburos.',
        risk: 'Menor certeza para inversion energetica.',
        area: 'Energia',
      },
      {
        name: 'Mejoredu',
        function: 'Mejora y evaluacion educativa.',
        risk: 'Menos diagnostico independiente del sistema educativo.',
        area: 'Educacion',
      },
    ],
    caseBlocks: [
      {
        title: 'Eleccion judicial',
        text: 'Mexico realizo en 2025 una eleccion judicial inedita. El reto no es negar problemas del Poder Judicial, sino corregirlos sin sacrificar independencia, imparcialidad y profesionalismo.',
      },
    ],
  },
}

export const topicList = Object.values(topics)
