export default {
  global: {
    Name: 'Venta sostenible',
    Description:
      'El componente formativo aborda la aplicación de técnicas de venta en negocios sostenibles, integrando biocomercio, comunicación comercial, certificaciones y experiencia del cliente, permitiendo diseñar propuestas comerciales coherentes con principios de sostenibilidad y necesidades del mercado.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
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
        titulo:
          'Biocomercio (<em>Biotrade</em>), Comercio justo - Certificación FLO - RSE',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: '<em>Greenwashing</em>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Sellos y certificaciones',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo:
          'Comunicación comercial (<em>storytelling</em>, <em>brief</em>)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Propuesta comercial',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Satisfacción del cliente',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Control de la información',
        desarrolloContenidos: true,
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
  glosario: [
    {
      termino: 'Biocomercio',
      significado:
        'Actividad comercial basada en uso sostenible de biodiversidad, generando beneficios económicos, sociales y ambientales responsables.',
    },
    {
      termino: '<em>Brief</em>',
      significado:
        'Documento que organiza información clave para estructurar una propuesta comercial clara y coherente.',
    },
    {
      termino: 'Certificación',
      significado:
        'Reconocimiento otorgado por entidad independiente que valida cumplimiento de estándares sostenibles verificables.',
    },
    {
      termino: '<em>Greenwashing</em>',
      significado:
        'Práctica de comunicar beneficios ambientales engañosos sin respaldo real en acciones sostenibles.',
    },
    {
      termino: 'Indicador',
      significado:
        'Variable que permite medir el desempeño de procesos o estrategias comerciales.',
    },
    {
      termino: 'Propuesta comercial',
      significado:
        'Documento que presenta valor, beneficios y condiciones de un producto al cliente.',
    },
    {
      termino: 'Retroalimentación',
      significado:
        'Respuesta del cliente que permite evaluar y mejorar procesos comerciales.',
    },
    {
      termino: 'Satisfacción',
      significado:
        'Nivel en que el cliente percibe que sus expectativas fueron cumplidas.',
    },
    {
      termino: '<em>Storytelling</em>',
      significado:
        'Técnica que utiliza historias para comunicar valor y generar conexión emocional con el cliente.',
    },
    {
      termino: 'Sostenibilidad',
      significado:
        'Enfoque que integra equilibrio entre lo ambiental, social y económico en decisiones empresariales.',
    },
  ],
  referencias: [
    {
      referencia:
        'Docsity. (s. f.). <em>Tema 8: La comunicación comercial</em>. Apuntes de Investigación Empresarial.',
      link: 'https://www.docsity.com/es/docs/tema-8-la-comunicacion-comercial-la-comunicacion-comercial/3402209/',
    },
    {
      referencia:
        'Domínguez Casas, Á. M. (2017). <em>Los programas de fidelización online: un estudio desde el engagement marketing y las comunidades de marca</em> [Tesis doctoral, Universidad de Valladolid]. Dialnet.',
      link: '',
    },
    {
      referencia:
        'Ellen MacArthur Foundation. (s. f.). <em>What is the circular economy?</em>',
      link: 'https://ellenmacarthurfoundation.org/topics/circular-economy-introduction/overview',
    },
    {
      referencia:
        'Manzanal, M., Chávez, E., & Rivero, A. (2020). <em>Los elementos de la negociación: ¿cómo intervienen dentro de las etapas?</em> <em>Revista CEA</em>, 4(1). Academia.edu.',
      link: '',
    },
    {
      referencia:
        'Miranda Plata, P. A. (2020). <em>Creación e implementación de formatos para el seguimiento de los procesos del área comercial</em>. Universidad Santo Tomás. Repositorio USTA.',
      link: '',
    },
    {
      referencia:
        'Niño Sierra, D. F. (s. f.). <em>Fidelización del cliente</em>. Fundación Universitaria UNIEMPRESARIAL. CCB.',
      link: '',
    },
    {
      referencia:
        'Naciones Unidas. (s. f.). <em>Objetivos de Desarrollo Sostenible</em>.',
      link: 'https://sdgs.un.org/es/goals',
    },
    {
      referencia:
        'Salcedo, J. (2021). <em>Estrategias y táctica de negociación</em>. Universidad San Marcos. USAM.',
      link: '',
    },
    {
      referencia:
        'United Nations. (s. f.). <em>Sustainable Development Goals</em>.',
      link: 'https://sdgs.un.org/goals',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre ',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nicolás Cruz Ríos',
          cargo: 'Experto temático comercio y servicios',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jesus Antonio Vecino Valero',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Donado Molinares',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
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
