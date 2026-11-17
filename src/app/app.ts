
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal
} from '@angular/core';

type ProjectCategory = 'SaaS' | 'Financeiro' | 'Saúde';
type ProjectFilter = 'Todos' | ProjectCategory;

interface PortfolioProject {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  description: string;
  category: ProjectCategory;
  technologies: string[];
  status: string;
  githubUrl: string;
  demoUrl: string;
}

interface SkillGroup {
  title: string;
  icon: string;
  description: string;
  skills: string[];
}

interface Experience {
  company: string;
  role: string;
  period: string;
  summary: string;
  highlights: string[];
  technologies: string[];
}

interface ComplementaryCourse {
  name: string;
  provider: string;
  year: string;
}

interface TechnicalCompetency {
  title: string;
  description: string;
  skills: string[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {

  readonly profile = {
    name: 'Eduardo Krakhecke Godoi',
    role: 'Desenvolvedor Front-end Angular',
    location: 'Brasil',
    email: 'eduardokg.mi6@gmail.com',
    github: 'https://github.com/eduardoKrakhecke?tab=repositories',
    linkedin: 'https://www.linkedin.com/in/eduardo-krakhecke-godoi-173933107/',
    introduction:
      'Desenvolvo aplicações web modernas com foco em ' +
      'performance, organização de código e experiência do usuário.',
    about:
      'Sou desenvolvedor Front-end com experiência na criação ' +
      'de aplicações empresariais utilizando Angular, TypeScript ' +
      'e tecnologias modernas. Gosto de transformar requisitos ' +
      'complexos em interfaces intuitivas, escaláveis e bem estruturadas.'
  };

  readonly professionalSummary =
    'Desenvolvedor Front-end com experiência profissional no ' +
    'desenvolvimento e manutenção de aplicações web, atuando ' +
    'principalmente com Angular, TypeScript, JavaScript e RxJS. ' +
    'Experiência na integração de aplicações com APIs REST, ' +
    'desenvolvimento de interfaces, criação de componentes ' +
    'reutilizáveis e implementação de funcionalidades para sistemas ' +
    'corporativos. Vivência em projetos para empresas de diferentes ' +
    'segmentos, incluindo soluções para o varejo e sistemas de gestão ' +
    'pública. Experiência no desenvolvimento de geradores de relatórios ' +
    'e gráficos com Chart.js, além de aplicações com mapas interativos ' +
    'e visualização de dados geoespaciais utilizando Mapbox GL. Atuação ' +
    'em equipes ágeis e processos de CI/CD.';

  readonly projects: PortfolioProject[] = [
    {
      id: 'enterprise',
      number: '01',
      name: 'EnterpriseFlow',
      subtitle: 'Gestão empresarial SaaS',
      description:
        'Plataforma empresarial com organizações, usuários, ' +
        'controle de permissões, gestão de projetos, tarefas ' +
        'e visualização Kanban.',
      category: 'SaaS',
      technologies: [
        'Angular',
        'TypeScript',
        'Firebase',
        'PrimeNG'
      ],
      status: 'Projeto de portfólio',
      githubUrl:
        'https://github.com/eduardoKrakhecke/enterprise-flow',
      demoUrl: 'https://enterprise-flow-22665.web.app/'
    },
    {
      id: 'finance',
      number: '02',
      name: 'FinanceFlow',
      subtitle: 'Gestão financeira pessoal',
      description:
        'Aplicação financeira com gerenciamento de transações, ' +
        'categorias, acompanhamento de receitas e despesas ' +
        'e visualização de informações.',
      category: 'Financeiro',
      technologies: [
        'Angular',
        'TypeScript',
        'SCSS',
        'Chart.js'
      ],
      status: 'Projeto de portfólio',
      githubUrl: '',
      demoUrl: ''
    },
    {
      id: 'psycare',
      number: '03',
      name: 'PsyCare',
      subtitle: 'Gestão de clínicas de psicologia',
      description:
        'Sistema de gestão com pacientes, profissionais, ' +
        'agendamentos, prontuários, financeiro e geração ' +
        'de documentos em PDF.',
      category: 'Saúde',
      technologies: [
        'Angular',
        'Firebase',
        'FullCalendar',
        'TypeScript'
      ],
      status: 'Em desenvolvimento',
      githubUrl:
        'https://github.com/eduardoKrakhecke/psycare',
      demoUrl: 'https://psycare-ce0b9.web.app/'
    }
  ];

  readonly experiences: Experience[] = [
    {
      company: 'Tributech',
      role: 'Desenvolvedor Angular',
      period: 'Outubro/2024 – Junho/2026',
      summary:
        'Desenvolvimento e manutenção de aplicações front-end ' +
        'com foco em dados, visualização e integrações.',
      highlights: [
        'Desenvolvimento de gerador de relatórios e gráficos dinâmicos com Chart.js.',
        'Implementação de gráficos configuráveis integrados a dados de negócio.',
        'Integração com APIs REST e fluxos assíncronos utilizando RxJS.',
        'Desenvolvimento de mapas interativos e recursos de geolocalização com Mapbox GL.',
        'Participação em processos de CI/CD e rotinas de desenvolvimento ágil.'
      ],
      technologies: [
        'Angular',
        'TypeScript',
        'Chart.js',
        'RxJS',
        'Mapbox GL'
      ]
    },
    {
      company: 'B2ML Sistemas',
      role: 'Desenvolvedor Angular',
      period: 'Junho/2023 – Fevereiro/2024',
      summary:
        'Desenvolvimento de páginas, componentes e funcionalidades ' +
        'orientadas a requisitos de negócio.',
      highlights: [
        'Desenvolvimento de interfaces e funcionalidades com Angular e TypeScript.',
        'Integração de aplicações com APIs REST e utilização de RxJS.',
        'Utilização de Microsoft Azure no contexto dos projetos.',
        'Colaboração na implementação de soluções conforme necessidades de negócio e interface.'
      ],
      technologies: [
        'Angular',
        'TypeScript',
        'RxJS',
        'Microsoft Azure'
      ]
    },
    {
      company: 'CWI Software',
      role: 'Desenvolvedor Web Front-end',
      period: 'Setembro/2019 – Abril/2023',
      summary:
        'Atuação em projetos front-end para empresas como Lojas Renner e Via.',
      highlights: [
        'Desenvolvimento e manutenção de aplicações com React, AngularJS, Angular 2+, JavaScript, HTML5 e CSS3.',
        'Criação e manutenção de interfaces utilizando Styled Components.',
        'Integração com APIs REST e utilização de RxJS.',
        'Participação em equipes ágeis e processos de CI/CD.',
        'Apoio à integração de funcionalidades com aplicações ASP.NET Core.'
      ],
      technologies: [
        'React',
        'Angular',
        'AngularJS',
        'JavaScript',
        'Styled Components',
        'RxJS'
      ]
    },
    {
      company: 'Digifred',
      role: 'Desenvolvedor Web Front-end',
      period: 'Setembro/2017 – Setembro/2019',
      summary:
        'Desenvolvimento e manutenção de sistemas para gestão pública.',
      highlights: [
        'Desenvolvimento de sistemas utilizando AngularJS, Angular 6, TypeScript e JavaScript.',
        'Implementação de interfaces com HTML5, CSS3 e Bootstrap.',
        'Integração com APIs REST e utilização de RxJS.',
        'Participação no desenvolvimento de novas funcionalidades e manutenção de aplicações existentes.'
      ],
      technologies: [
        'AngularJS',
        'Angular 6',
        'TypeScript',
        'JavaScript',
        'Bootstrap'
      ]
    },
    {
      company: 'Marca RS Technology',
      role: 'Estagiário de Engenharia de Software',
      period: 'Março/2016 – Maio/2017',
      summary:
        'Primeira experiência profissional com desenvolvimento de interfaces web e integrações.',
      highlights: [
        'Desenvolvimento de interfaces web utilizando jQuery, JavaScript, HTML e CSS.',
        'Utilização de Bootstrap para construção de interfaces responsivas.',
        'Integração com serviços e APIs REST.',
        'Utilização de Git Flow e participação em rotinas de desenvolvimento de software.'
      ],
      technologies: [
        'jQuery',
        'JavaScript',
        'HTML',
        'CSS',
        'Bootstrap',
        'Git Flow'
      ]
    }
  ];

  readonly education = {
    institution:
      'Universidade do Vale do Rio dos Sinos (Unisinos)',
    course: 'Tecnólogo em Gestão da Tecnologia da Informação',
    status: 'Em andamento',
    expectedCompletion: 'Previsão de conclusão: dezembro/2027'
  };

  readonly complementaryCourses: ComplementaryCourse[] = [
    {
      name: 'ASP.NET Core',
      provider: 'Udemy Online',
      year: '2022'
    },
    {
      name: 'Microsoft Azure',
      provider: 'Udemy Online',
      year: '2023'
    },
    {
      name: 'NestJS',
      provider: 'Udemy Online',
      year: '2023'
    },
    {
      name: 'Atualização Angular — versão 17',
      provider: 'Udemy Online',
      year: '2024'
    }
  ];

  readonly skillGroups: SkillGroup[] = [
    {
      title: 'Front-end',
      icon: '</>',
      description: 'Interfaces modernas e responsivas',
      skills: [
        'Angular',
        'TypeScript',
        'JavaScript',
        'HTML5',
        'CSS3',
        'SCSS'
      ]
    },
    {
      title: 'Ecossistema Angular',
      icon: '{}',
      description: 'Arquitetura, estado e componentes',
      skills: [
        'Signals',
        'RxJS',
        'Standalone',
        'Lazy Loading',
        'PrimeNG',
        'Angular Router'
      ]
    },
    {
      title: 'Ferramentas & Cloud',
      icon: '⚙',
      description: 'Integração e desenvolvimento',
      skills: [
        'Firebase',
        'Firestore',
        'Git',
        'GitHub',
        'REST APIs',
        'Bootstrap'
      ]
    }
  ];

  readonly technicalCompetencies: TechnicalCompetency[] = [
    {
      title: 'Front-end',
      description: 'Desenvolvimento de interfaces e aplicações web.',
      skills: [
        'Angular',
        'AngularJS',
        'TypeScript',
        'JavaScript',
        'HTML5',
        'CSS3'
      ]
    },
    {
      title: 'Interfaces e frameworks',
      description: 'Bibliotecas para componentes e experiências responsivas.',
      skills: [
        'Bootstrap',
        'Angular Material',
        'PrimeNG',
        'ReactJS',
        'Styled Components'
      ]
    },
    {
      title: 'Dados e integração',
      description: 'Visualização de dados, APIs e programação reativa.',
      skills: [
        'Chart.js',
        'APIs REST',
        'RxJS',
        'Observables',
        'Fluxos assíncronos',
        'Mapbox GL',
        'Geolocalização'
      ]
    },
    {
      title: 'Cloud e processos',
      description: 'Ferramentas de entrega e práticas de desenvolvimento.',
      skills: [
        'Microsoft Azure',
        'Git',
        'Git Flow',
        'CI/CD',
        'Metodologias ágeis',
        'Node.js (básico)',
        'Java (básico)'
      ]
    }
  ];

  readonly filters: ProjectFilter[] = [
    'Todos',
    'SaaS',
    'Financeiro',
    'Saúde'
  ];

  readonly activeFilter = signal<ProjectFilter>('Todos');
  readonly menuOpen = signal(false);

  readonly visibleProjects = computed(() => {
    const filter = this.activeFilter();

    return filter === 'Todos'
      ? this.projects
      : this.projects.filter(
        project => project.category === filter
      );
  });

  readonly currentYear = new Date().getFullYear();

  setFilter(filter: ProjectFilter): void {
    this.activeFilter.set(filter);
  }

  toggleMenu(): void {
    this.menuOpen.update(value => !value);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
