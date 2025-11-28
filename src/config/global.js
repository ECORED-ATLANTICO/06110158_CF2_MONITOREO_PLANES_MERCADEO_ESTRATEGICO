export default {
  global: {
    Name: 'Análisis estratégico de acciones de mercadeo',
    Description:
      'Este componente permite al aprendiz medir, interpretar y mejorar acciones de mercadeo mediante indicadores, herramientas de seguimiento y análisis estratégico, promueve decisiones basadas en evidencia, fomenta la mejora continua y fortalece la articulación entre resultados, recursos disponibles y equipos responsables.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Medición de resultados',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Propósito',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Tipos',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Técnicas de medición',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Acciones de mercadeo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Tipos de acciones',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Objetivos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Relación con el plan de mercadeo',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Ejecución del sistema de monitoreo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Uso de indicadores',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Herramientas',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Periodicidad',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Formatos de evaluación',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Interpretación de resultados',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Comparación con metas establecidas',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Desviaciones y logros',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Técnicas de comunicación de hallazgos',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Acciones de mejora',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Diagnóstico',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Formulación de acciones',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Justificación técnica',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Viabilidad y pertinencia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Análisis de recursos disponibles',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Estimación de resultados esperados',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Validación con equipos responsables',
            hash: 't_6_3',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Documentación de propuestas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Presentación',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Formatos ejecutivos',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Informes técnicos',
            hash: 't_7_3',
          },
          {
            numero: '7.4',
            titulo: 'Ajustes colaborativos',
            hash: 't_7_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Métricas de marketing digital.',
      referencia:
        'HubSpot. (2024). <em>Las 26 métricas de marketing digital para medir tus resultados.</em>',
      tipo: 'Articulo',
      link:
        'https://blog.hubspot.es/marketing/metricas-para-medir-resultados-de-marketing',
    },
    {
      tema: 'Monitoreo de estrategias de mercadeo.',
      referencia:
        'Servicio Nacional de Aprendizaje - SENA. (2024). <em>Informe gerencial sobre monitoreo de estrategias de mercadeo.</em>',
      tipo: 'Informe',
      link:
        'https://www.studocu.com/co/document/servicio-nacional-de-aprendizaje/planes-de-mercadeo/informe-gerencial-sobre-monitoreo-de-estrategias-de-mercadeo/108751423',
    },
    {
      tema: 'Planes de mercadeo.',
      referencia:
        'Cámara de Comercio de Bogotá. (2020) Taller: Diseña tu plan de mercadeo - Para creadores (emprendimiento). Taller virtual gratuito.',
      tipo: 'Taller',
      link:
        'https://bibliotecadigital.ccb.org.co/items/db83891b-9135-41d2-82f1-81742cb36c14',
    },
  ],
  glosario: [
    {
      termino: 'Análisis',
      significado:
        'Proceso de descomponer información para comprender causas, efectos y oportunidades de mejora en acciones de mercadeo.',
    },
    {
      termino: '<em>Benchmarking</em>',
      significado:
        'Comparación sistemática de indicadores y prácticas con referentes del sector para identificar brechas y buenas prácticas.',
    },
    {
      termino: 'Desempeño',
      significado:
        'Nivel de cumplimiento de objetivos establecidos en el plan de mercadeo, medido mediante indicadores específicos.',
    },
    {
      termino: 'Evidencia',
      significado:
        'Datos, registros o resultados que respaldan el análisis y la toma de decisiones estratégicas.',
    },
    {
      termino: 'Indicador',
      significado:
        'Variable cuantitativa o cualitativa que permite medir el avance, impacto o eficiencia de una acción de mercadeo.',
    },
    {
      termino: 'KPIs (<em>Key Performance Indicator</em>)',
      significado:
        'Indicador clave de rendimiento que refleja el éxito de una estrategia o actividad específica.',
    },
    {
      termino: 'Mejora continua',
      significado:
        'Enfoque sistemático para optimizar procesos, corregir desviaciones y fortalecer resultados a lo largo del tiempo.',
    },
    {
      termino: 'Monitoreo',
      significado:
        'Seguimiento periódico de las acciones y resultados del plan de mercadeo para evaluar su efectividad.',
    },
    {
      termino: 'Objetivo',
      significado:
        'Meta específica que se busca alcanzar mediante estrategias de mercadeo, alineada con la visión organizacional.',
    },
    {
      termino: 'Seguimiento',
      significado:
        'Acción de revisar, registrar y analizar el desarrollo de actividades para asegurar su cumplimiento y ajuste oportuno.',
    },
  ],
  referencias: [
    {
      referencia:
        'Gibson, K. (2024). <em>7 Marketing KPIs You Should Know & How to Measure Them</em>. Harvard Business School Online.',
      link: 'https://online.hbs.edu/blog/post/marketing-kpis',
    },
    {
      referencia:
        'González Betancourt, M. C. (2016). <em>Acciones y estrategias de marketing para mejorar tus ventas</em>. Semrush Blog.',
      link:
        'https://es.semrush.com/blog/acciones-marketing-mejorar-estrategia/',
    },
    {
      referencia:
        'ND Marketing Digital. (2023). <em>Guía completa sobre la elaboración de acciones de mejora</em>.',
      link:
        'https://ndmarketingdigital.com/como-elaborar-una-accion-de-mejora/',
    },
    {
      referencia:
        'Pendino, S. (2024). <em>KPIs de marketing: guía completa</em>.',
      link: 'https://sebastianpendino.com/kpis-de-marketing-guia/',
    },
    {
      referencia:
        'Smartsheet. (2024). <em>Ejemplos y plantillas gratuitas de planes de marketing del mundo real</em>.',
      link: 'https://es.smartsheet.com/content/marketing-plan-examples',
    },
    {
      referencia:
        'VirtualMailer. (2023). <em>Plan de mejora del marketing para el éxito</em>.',
      link: 'https://virtualmailer.com.ar/plan-de-mejora-marketing/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
