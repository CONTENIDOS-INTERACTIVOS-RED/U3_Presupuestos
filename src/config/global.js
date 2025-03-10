export default {
  global: {
    componenteFormativo:
      'Componente Formativo con un nombre extremadamente largo y extenso',
    descripcionCurso:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis vestibulum quam bibendum varius.<br/><br/>Quisque pretium at nulla sit amet placerat. Vestibulum consequat suscipit accumsan. Proin pharetra congue enim et tempus. Sed sodales dui volutpat, placerat tellus accumsan, semper est. Phasellus nec lorem elementum, mattis quam eget, vestibulum nibh. Sed.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2.svg'),
      },
    ],
    numeroUnidad: '3',
    tituloUnidad: 'Presupuesto de administración y tesorería',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Fundamentos del presupuesto de administración y tesorería',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Conceptos básicos del presupuesto',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Importancia del presupuesto en la toma de decisiones',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Tipologías de presupuestos y su aplicación',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Gestión de ingresos y gastos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Ingresos y gastos operacionales',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Ingresos y gastos no operacionales',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Análisis y proyección financiera',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Análisis del flujo de caja',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Estado de flujo de efectivo y su interpretación',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Métodos de pronóstico de ventas y tendencias del mercado',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Buitrago Ibáñez, J. V. (2021). Presupuestos en Excel: (1 ed.). Editorial UPTC.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/219237?page=1',
    },
    {
      referencia:
        'Piedra Aguilera, M. A. & Cubero Abril, T. (2024). Presupuestos. Un enfoque práctico: (1 ed.). Universidad del Azuay.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/278951?page=2',
    },
    {
      referencia:
        'Pacheco Coello, C. E. (2020). Presupuestos un enfoque gerencial: ( ed.). Instituto Mexicano de Contadores Públicos.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/151225',
    },
    {
      referencia:
        'Vásquez Rojas, F. A. (2021). Costos y Presupuestos para financieros junior: ( ed.). Grupo Editorial Nueva Legislación SAS.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/160288?page=1',
    },
    {
      referencia:
        'Checa Hinojo, E. J. (2024). Elaboración del presupuesto editorial. ARGN0109: (1 ed.). IC Editorial.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/274320?page=1',
    },
    {
      referencia:
        'Moreno Castro, T. F. (2023). Plan de ventas: productos, pronósticos y presupuestos: (1 ed.). RIL editores.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/268333?page=1',
    },
    {
      referencia:
        'Antón Pérez, J. J. & Garijo de Miguel, S. (2024). Empresa y administración: (1 ed.). Macmillan Iberia, S.A.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/267631',
    },
    {
      referencia:
        'Gutiérrez Aragón, Ó. (2015). Fundamentos de administración de empresas: ( ed.). Difusora Larousse - Ediciones Pirámide.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/49039',
    },
    {
      referencia:
        'Reza Trosino, J. C. (2019). El gerente efectivo: los fundamentos de la administración, el trabajo en equipo y el liderazgo: (1 ed.). Universidad Nacional Autónoma de México (UNAM).',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/228831',
    },
    {
      referencia:
        'Salgado Benítez, J. Guerrero López, L. & Salgado Hernández, N. (2016). Fundamentos de Administración: ( ed.). Grupo Editorial Éxodo.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/130328',
    },
    {
      referencia:
        'Cárdenas, R. A., & Nápoles, R. A. (2009). Presupuestos: Teoría y práctica (2.ª ed.).',
      link:
        'https://rashellrivas.files.wordpress.com/2017/04/cardenas-y-napoles-raul-andres-presupuestos-teoria-y-practica-2ed-1-1.pdf',
    },
    {
      referencia:
        'Guajardo, M., & Andrade de Guajardo, S. (2018). Análisis financiero y económico para la toma de decisiones. TecnoHumanismo. Revista Científica, 2(3), 125-135.',
      link: 'https://dialnet.unirioja.es/descarga/articulo/8356016.pdf',
    },
    {
      referencia:
        'Redalyc. (2001.). Proyección de estados financieros, utilizando información pública disponible.',
      link: 'https://www.redalyc.org/pdf/299/29901009.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Activo',
      significado:
        'Recursos controlados por una entidad, obtenidos con el fin de generar beneficios futuros.',
    },
    {
      termino: 'Análisis financiero',
      significado:
        'Evaluación de la información contable para conocer la situación y el desempeño económico de una organización.',
    },
    {
      termino: 'Balance general',
      significado:
        'Informe financiero que presenta los activos, pasivos y el patrimonio de una empresa en un momento determinado.',
    },
    {
      termino: 'Capital de trabajo',
      significado:
        'Diferencia entre los activos corrientes y los pasivos corrientes; mide la liquidez operativa.',
    },
    {
      termino: 'Costo de ventas',
      significado:
        'Gastos directos asociados a la producción de los bienes o servicios vendidos por una empresa.',
    },
    {
      termino: 'Dividendos',
      significado:
        'Parte de las ganancias de una empresa que se distribuye entre sus accionistas.',
    },
    {
      termino: 'Endeudamiento',
      significado:
        'Obligaciones financieras que una entidad debe cumplir, derivadas de préstamos u otras fuentes de financiamiento.',
    },
    {
      termino: 'Estado de flujo de efectivo',
      significado:
        'Documento que muestra las entradas y salidas de efectivo de una empresa en un periodo dado.',
    },
    {
      termino: 'Estado de resultados',
      significado:
        'Informe financiero que muestra los ingresos, costos y gastos, así como la utilidad o pérdida neta.',
    },
    {
      termino: 'Financiamiento',
      significado:
        'Obtención de recursos financieros para llevar a cabo actividades operativas o de inversión.',
    },
    {
      termino: 'Gasto operacional',
      significado:
        'Costos incurridos en el día a día de las operaciones de la empresa, como salarios, alquileres y servicios.',
    },
    {
      termino: 'Ingreso operacional',
      significado:
        'Ingresos obtenidos de la actividad principal de la empresa, como la venta de bienes o servicios.',
    },
    {
      termino: 'Liquidez',
      significado:
        'Capacidad de una empresa para convertir sus activos en efectivo y cumplir con sus obligaciones a corto plazo.',
    },
    {
      termino: 'Margen de utilidad',
      significado:
        'Relación entre la utilidad neta y las ventas totales; mide la rentabilidad.',
    },
    {
      termino: 'Pasivo',
      significado:
        'Obligaciones financieras que una empresa tiene con terceros, como deudas o compromisos contractuales.',
    },
    {
      termino: 'Patrimonio',
      significado:
        'Diferencia entre los activos y los pasivos de una empresa; representa la participación de los propietarios.',
    },
    {
      termino: 'Presupuesto',
      significado:
        'Plan financiero detallado que proyecta los ingresos y gastos futuros de una empresa.',
    },
    {
      termino: 'Proyección financiera',
      significado:
        'Estimación del desempeño futuro de una empresa en términos financieros.',
    },
    {
      termino: 'Rentabilidad',
      significado:
        'Capacidad de una empresa para generar beneficios en relación con los recursos utilizados.',
    },
    {
      termino: 'Utilidad neta',
      significado:
        'Resultado final de los ingresos menos los costos y gastos totales, incluyendo impuestos y otros cargos.',
    },
  ],
  complementario: [
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Maria Camila Garcia Santamaria',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Responsable del equipo',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Leyson Fabian Castaño Perez',
          cargo: 'Soporte organizacional',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
        {
          nombre: ['Nombre 1', 'Nombre 2'],
          cargo: 'Diseño web',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Desarrollo Front-End',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'GESTORES DE REPOSITORIO',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
