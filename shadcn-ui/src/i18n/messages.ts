export type Language = 'es' | 'en';

type Dictionary = Record<string, string>;

type ResumeLocalizedContent = {
  profile: {
    title: string;
    about: string;
    location: string;
  };
  experience: Array<{
    role: string;
    description: string;
  }>;
  education: Array<{
    degree: string;
    thesis?: string;
  }>;
};

type Messages = {
  navbar: Dictionary;
  home: Dictionary;
  resume: Dictionary;
  portfolio: Dictionary;
  blog: Dictionary;
  cards: Dictionary;
  footer: Dictionary;
  ui: Dictionary;
  notFound: Dictionary;
  resumeLocalized: ResumeLocalizedContent;
};

export const messages: Record<Language, Messages> = {
  es: {
    navbar: {
      home: 'Inicio',
      resume: 'CV',
      portfolio: 'Portafolio',
      blog: 'Blog',
      languageShort: 'EN',
      themeLight: 'Claro',
      themeDark: 'Oscuro',
      menuOpen: 'Abrir menú',
      menuClose: 'Cerrar menú',
    },
    home: {
      heroTitle: 'Gabriel Ortega Hernández',
      heroSubtitlePrefix: 'Conectando',
      heroSubtitleMiddle: 'Machine Learning',
      heroSubtitleSuffix: 'y',
      heroSubtitleEnd: 'Evaluación Educativa.',
      viewPortfolio: 'Ver Portafolio',
      checkResume: 'Ver CV',
      journeyTitle: 'El recorrido',
      journeyDescription: 'Un camino definido por rigor analítico e impacto social.',
      ctaTitle: '¿Listo para colaborar?',
      ctaDescription:
        'Siempre me interesa conversar sobre nuevos proyectos y oportunidades en Ingeniería de ML y EdTech.',
      ctaButton: 'Ponte en contacto',
      story1Title: 'Base en Ingeniería Matemática',
      story1Description:
        'Mi camino comenzó con una formación rigurosa en modelamiento matemático y sistemas complejos en la Universidad de Chile. Esta base analítica me permite descomponer problemas y construir soluciones robustas.',
      story2Title: 'Impacto en Educación',
      story2Description:
        'En MIDE UC y DEMRE apliqué estas habilidades en evaluación educacional. Desarrollé sistemas para asegurar justicia y precisión en evaluaciones de alta relevancia.',
      story3Title: 'Investigación en Cognición e IA',
      story3Description:
        'Mi trayectoria incluye investigación en cognición, conectando aprendizaje humano e inteligencia artificial mediante análisis avanzado de datos conductuales como eye-tracking.',
    },
    resume: {
      title: 'Currículum',
      subtitle:
        'Resumen integral de mi experiencia profesional, formación académica y habilidades técnicas.',
      downloadPdf: 'Descargar PDF',
      experienceTitle: 'Experiencia Profesional',
      experienceDetailsTitle: 'Detalle de cargos',
      educationTitle: 'Formación',
      skillsTitle: 'Habilidades Técnicas',
      timelineTitle: 'Línea de tiempo profesional',
      legendCiae: 'CIAE',
      legendMide: 'MIDE UC',
      legendDemre: 'DEMRE',
      legendUbo: 'UBO',
    },
    portfolio: {
      title: 'Portafolio',
      subtitle: 'Demostraciones interactivas y proyectos destacados.',
      project1Title: 'Predicción de Dificultad de Ítems',
      project1Description:
        'Uso de LLMs y NLP para anticipar la dificultad de preguntas de opción múltiple antes de su aplicación.',
      project2Title: 'Análisis de Eye-Tracking',
      project2Description:
        'Diseño experimental y software para analizar atención visual en contextos de evaluación.',
      dataDrivenTitle: 'Insights con Datos',
      dataDrivenDescription: 'Transformando desafíos educativos en soluciones computacionales.',
    },
    blog: {
      title: 'Blog y Publicaciones',
      subtitle: 'Investigación académica, artículos y reflexiones sobre ML y Educación.',
    },
    cards: {
      profileTitle: 'Perfil',
      education: 'Formación',
      thesisPrefix: 'Tesis',
      publications: 'Publicaciones',
      technicalArsenal: 'Arsenal Técnico',
      skillsDataMl: 'Datos e IA',
      skillsLanguages: 'Lenguajes',
      skillsWebTools: 'Web y Herramientas',
      professionalExperience: 'Experiencia Profesional',
      roles: 'Roles',
      modelMetrics: 'Métricas de Entrenamiento',
      modelMetricsSubtitle: 'Predicción de Dificultad de Ítems (Simulado)',
    },
    footer: {
      builtWith: 'Desarrollado con React, Tailwind y Shadcn/ui.',
    },
    ui: {
      loading: 'Cargando...',
    },
    notFound: {
      title: 'Página no encontrada',
      description: 'La página que buscas no existe o fue movida.',
      returnHome: 'Volver al inicio',
      goBack: 'Regresar',
    },
    resumeLocalized: {
      profile: {
        title: 'Perfil híbrido: Ingeniería en ML y Evaluación Educativa',
        about:
          'Construyo herramientas inteligentes que ayudan a crear evaluaciones más justas y efectivas. Mi trabajo está en la intersección de Machine Learning, Ciencia de Datos y Medición Educativa.',
        location: 'Santiago, Chile',
      },
      experience: [
        {
          role: 'Personal técnico (media jornada)',
          description:
            'Soporte técnico y metodológico para proyecto FONDECYT N°11251579. Diseño experimental, programación para presentación de estímulos, análisis de eye-tracking y preparación de manuscritos.',
        },
        {
          role: 'Asesor de investigación',
          description:
            'Proyecto IA y brechas de género. Análisis de datos OCDE, implementación de metodología PRISMA y reportes técnicos.',
        },
        {
          role: 'Apoyo técnico profesional (media jornada)',
          description:
            'Construcción y revisión de ítems (Ciencias, Lectura y Matemática). Coordinación de comités de construcción y ensamblaje de instrumentos.',
        },
        {
          role: 'Administrador de plataforma',
          description:
            'Gestión de plataformas tecnológicas y aulas virtuales para programas de postgrado.',
        },
        {
          role: 'Científico de datos (media jornada)',
          description:
            'Diseño y desarrollo de modelos de predicción de características de ítems usando LLMs y NLP.',
        },
        {
          role: 'Asistente de investigación',
          description:
            'Análisis de datos y coautoría de manuscritos sobre estrategias en preguntas de opción múltiple y eye-tracking.',
        },
        {
          role: 'Jefe de proyectos tecnológicos',
          description:
            'Gestión de proyectos tecno-pedagógicos: integración con Trello, implementación SAP Business One y laboratorio virtual de química (Moodle/H5P).',
        },
        {
          role: 'Analista',
          description:
            'Análisis de rechazo de ítems en pilotos, propuestas metodológicas y desarrollo de plataforma interactiva.',
        },
        {
          role: 'Tesista',
          description:
            'Estudio de simulación sobre el impacto de estrategias de posición de opciones en puntajes de pruebas.',
        },
        {
          role: 'Asistente de investigación',
          description:
            'Desarrollo de software de eye-tracking basado en webcam, modelamiento matemático y análisis de datos.',
        },
      ],
      education: [
        {
          degree: 'Magíster en Ciencias de la Ingeniería, mención Matemática Aplicada',
          thesis:
            'Predicción automática de dificultad de ítems e integración como prior en modelos bayesianos de Teoría de Respuesta al Ítem.',
        },
        {
          degree: 'Ingeniería Civil Matemática',
        },
        {
          degree: 'Licenciatura en Ciencias de la Ingeniería, mención Matemática',
        },
      ],
    },
  },
  en: {
    navbar: {
      home: 'Home',
      resume: 'Resume',
      portfolio: 'Portfolio',
      blog: 'Blog',
      languageShort: 'ES',
      themeLight: 'Light',
      themeDark: 'Dark',
      menuOpen: 'Open menu',
      menuClose: 'Close menu',
    },
    home: {
      heroTitle: 'Gabriel Ortega Hernández',
      heroSubtitlePrefix: 'Bridging the gap between',
      heroSubtitleMiddle: 'Machine Learning',
      heroSubtitleSuffix: 'and',
      heroSubtitleEnd: 'Educational Assessment.',
      viewPortfolio: 'View Portfolio',
      checkResume: 'Check Resume',
      journeyTitle: 'The Journey',
      journeyDescription: 'A path defined by analytical rigor and social impact.',
      ctaTitle: 'Ready to collaborate?',
      ctaDescription:
        "I'm always interested in hearing about new projects and opportunities in ML Engineering and EdTech.",
      ctaButton: 'Get in Touch',
      story1Title: 'Mathematical Engineering Foundation',
      story1Description:
        'My journey began with rigorous training in mathematical modeling and complex systems at Universidad de Chile. This analytical foundation lets me break problems into fundamentals and build robust solutions.',
      story2Title: 'Impact in Education',
      story2Description:
        'At MIDE UC and DEMRE, I applied these skills to educational assessment. I developed systems that support fairness and accuracy in high-stakes testing.',
      story3Title: 'Research in Cognition & AI',
      story3Description:
        'My trajectory includes research in cognition, bridging human learning and machine intelligence through advanced behavioral data analysis such as eye-tracking.',
    },
    resume: {
      title: 'Resume',
      subtitle: 'A comprehensive overview of my professional experience, academic background, and technical skillset.',
      downloadPdf: 'Download PDF',
      experienceTitle: 'Professional Experience',
      experienceDetailsTitle: 'Role details',
      educationTitle: 'Education',
      skillsTitle: 'Technical Skills',
      timelineTitle: 'Career Timeline',
      legendCiae: 'CIAE',
      legendMide: 'MIDE UC',
      legendDemre: 'DEMRE',
      legendUbo: 'UBO',
    },
    portfolio: {
      title: 'Portfolio',
      subtitle: 'Interactive demonstrations and project showcases.',
      project1Title: 'Item Difficulty Prediction',
      project1Description:
        'Using LLMs and NLP to predict multiple-choice question difficulty before testing.',
      project2Title: 'Eye-Tracking Analysis',
      project2Description:
        'Experimental design and software for analyzing visual attention in assessment contexts.',
      dataDrivenTitle: 'Data-Driven Insights',
      dataDrivenDescription: 'Transforming educational challenges into computational solutions.',
    },
    blog: {
      title: 'Blog & Publications',
      subtitle: 'Academic research, articles, and thoughts on ML and Education.',
    },
    cards: {
      profileTitle: 'Profile',
      education: 'Education',
      thesisPrefix: 'Thesis',
      publications: 'Publications',
      technicalArsenal: 'Technical Arsenal',
      skillsDataMl: 'Data & ML',
      skillsLanguages: 'Languages',
      skillsWebTools: 'Web & Tools',
      professionalExperience: 'Professional Experience',
      roles: 'Roles',
      modelMetrics: 'Model Training Metrics',
      modelMetricsSubtitle: 'Item Difficulty Prediction (Simulated)',
    },
    footer: {
      builtWith: 'Built with React, Tailwind & Shadcn/ui.',
    },
    ui: {
      loading: 'Loading...',
    },
    notFound: {
      title: 'Page Not Found',
      description: "The page you're looking for doesn't exist or may have been moved.",
      returnHome: 'Return Home',
      goBack: 'Go Back',
    },
    resumeLocalized: {
      profile: {
        title: 'Hybrid Professional: ML Engineering & Educational Assessment',
        about:
          'I build intelligent tools that help educators create fairer and more effective assessments. My work sits at the intersection of Machine Learning, Data Science, and Educational Measurement.',
        location: 'Santiago, Chile',
      },
      experience: [
        {
          role: 'Technical Staff (Part-time)',
          description:
            'Technical and methodological support for FONDECYT Project N°11251579. Experimental design, software programming for stimulus presentation, eye-tracking data analysis, and manuscript preparation.',
        },
        {
          role: 'Research Advisor',
          description:
            'AI & Gender Gaps project. OECD data analysis, PRISMA methodology implementation, and technical reporting.',
        },
        {
          role: 'Professional Technical Support (Part-time)',
          description:
            'Item construction and review (Science, Reading, Math). Coordination of construction committees and instrument assembly.',
        },
        {
          role: 'Platform Manager',
          description:
            'Management of technological platforms and virtual classrooms for postgraduate programs.',
        },
        {
          role: 'Data Scientist (Part-time)',
          description:
            'Design and development of item characteristic prediction models using Large Language Models (LLM) and NLP.',
        },
        {
          role: 'Research Assistant',
          description:
            'Data analysis and co-authorship of manuscripts regarding multiple-choice question strategies and eye-tracking.',
        },
        {
          role: 'Tech Project Manager',
          description:
            'Managed techno-pedagogical projects: Trello integration, SAP Business One implementation, and Virtual Chemistry Lab (Moodle/H5P).',
        },
        {
          role: 'Analyst',
          description:
            'Analysis of item rejection in pilot tests, methodology proposals, and interactive platform development.',
        },
        {
          role: 'Thesis Student',
          description:
            'Simulation study on the impact of option position strategies on test scores.',
        },
        {
          role: 'Research Assistant',
          description:
            'Eye-tracking software development (webcam-based), mathematical modeling, and data analysis.',
        },
      ],
      education: [
        {
          degree: 'Magister in Engineering Sciences, Mention in Applied Mathematics',
          thesis:
            'Automatic item difficulty prediction and its integration as a prior in Bayesian Item Response Theory models.',
        },
        {
          degree: 'Civil Mathematical Engineering',
        },
        {
          degree: 'Bachelor in Engineering Sciences, Mention in Mathematics',
        },
      ],
    },
  },
};
