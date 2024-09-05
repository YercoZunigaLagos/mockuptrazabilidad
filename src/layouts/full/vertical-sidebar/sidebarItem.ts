import {
  CircleIcon,
  WindmillIcon,
  TypographyIcon,
  ShadowIcon,
  PaletteIcon,
  KeyIcon,
  BugIcon,
  DashboardIcon,
  BrandChromeIcon,
  HelpIcon
} from 'vue-tabler-icons';

export interface menu {
  header?: string;
  title?: string;
  icon?: object;
  to?: string;
  divider?: boolean;
  chip?: string;
  chipColor?: string;
  chipVariant?: string;
  chipIcon?: string;
  children?: menu[];
  disabled?: boolean;
  type?: string;
  subCaption?: string;
}

const sidebarItem: menu[] = [
  
  {
    title: 'Dashboard',
    icon: DashboardIcon,
    to: '/dashboard/default'
  },
  { divider: true },
  { header: 'Analisis' },
  {
    title: 'Reportes',
    icon: KeyIcon,
    to: '/auth',
    children: [
      {
        title: 'Personal En Planta',
        icon: CircleIcon,
        to: '/auth/login'
      },
      {
        title: 'Produccion Turno',
        icon: CircleIcon,
        to: '/auth/login'
      }
      
    ]
  },
  
  { divider: true },
  { header: 'Materia Prima' },
  {
    title: 'Recepcion',
    icon: KeyIcon,
    to: '/auth',
    children: [
      {
        title: 'Añadir Recepcion',
        icon: CircleIcon,
        to: '/auth/login'
      },
      {
        title: 'Revisor recepciones',
        icon: CircleIcon,
        to: '/auth/login'
      }
    ]
  },
  { divider: true },
  { header: 'Procedimiento' },
  {
    title: 'P. Fresco',
    icon: KeyIcon,
    to: '/auth',
    children: [
      {
        title: 'Lavado',
        icon: CircleIcon,
        to: '/auth/login'
      },
      {
        title: 'Escaldado',
        icon: CircleIcon,
        to: '/auth/login'
      },
      {
        title: 'Corte y calibrado',
        icon: CircleIcon,
        to: '/auth/login'
      },
      {
        title: 'Desgrane',
        icon: CircleIcon,
        to: '/auth/login'
      },
      {
        title: 'Despesonado',
        icon: CircleIcon,
        to: '/auth/login'
      }

    ]
  },
  {
    title: 'Congelado',
    icon: KeyIcon,
    to: '/auth',
    children: [
      {
        title: 'Camara 0',
        icon: CircleIcon,
        to: '/auth/login'
      },
      {
        title: 'Tuneles',
        icon: CircleIcon,
        to: '/auth/login'
      },
      {
        title: 'Producto por envasar',
        icon: CircleIcon,
        to: '/auth/login'
      },
      {
        title: 'Proceso Envasado',
        icon: CircleIcon,
        to: '/auth/login'
      }

    ]
  },
  {
    title: 'P. Envasado',
    icon: KeyIcon,
    to: '/auth',
    children: [
      {
        title: 'Envasado',
        icon: CircleIcon,
        to: '/auth/login'
      },
      {
        title: 'Informes Proceso',
        icon: CircleIcon,
        to: '/auth/login'
      }

    ]
  },
  { divider: true },
  { header: 'Inventario' },
  {
    title: 'Stock',
    icon: KeyIcon,
    to: '/auth',
    children: [
      {
        title: 'Camara 0',
        icon: CircleIcon,
        to: '/auth/login'
      },
      {
        title: 'Camara 1',
        icon: CircleIcon,
        to: '/auth/login'
      },
      {
        title: 'Camara 2',
        icon: CircleIcon,
        to: '/auth/login'
      },
      {
        title: 'Tuneles',
        icon: CircleIcon,
        to: '/auth/login'
      },
      {
        title: 'Reefers',
        icon: CircleIcon,
        to: '/auth/login'
      }

    ]
  },
  { divider: true },
  { header: 'Distribucion' },
  {
    title: 'Despacho',
    icon: KeyIcon,
    to: '/auth',
    children: [
      {
        title: 'Generar Despacho',
        icon: CircleIcon,
        to: '/auth/login'
      },
      {
        title: 'Historico',
        icon: CircleIcon,
        to: '/auth/login'
      }

    ]
  },
  { divider: true },
  { header: 'Utilities' },
  {
    title: 'Typography',
    icon: TypographyIcon,
    to: '/utils/typography'
  },
  {
    title: 'Shadows',
    icon: ShadowIcon,
    to: '/utils/shadows'
  },
  {
    title: 'Colors',
    icon: PaletteIcon,
    to: '/utils/colors'
  },

  {
    title: 'Icons',
    icon: WindmillIcon,
    to: '/forms/radio',
    children: [
      {
        title: 'Tabler Icons',
        icon: CircleIcon,
        to: '/icons/tabler'
      },
      {
        title: 'Material Icons',
        icon: CircleIcon,
        to: '/icons/material'
      }
    ]
  },
  { divider: true },
  {
    title: 'Sample Page',
    icon: BrandChromeIcon,
    to: '/starter'
  },
  {
    title: 'Documentation',
    icon: HelpIcon,
    to: 'https://codedthemes.gitbook.io/berry-vuetify/',
    type: 'external'
  }
];

export default sidebarItem;
