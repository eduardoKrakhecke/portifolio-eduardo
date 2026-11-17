
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
      githubUrl: '',
      demoUrl: ''
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
      githubUrl: '',
      demoUrl: ''
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
