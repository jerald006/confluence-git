import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'content',
    to: '/dashboard',
    // icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // },
  },
  // {
  //   component: CNavTitle,
  //   name: 'Theme',
  // },
  // {
  //   component: CNavItem,
  //   name: 'Colors',
  //   to: '/theme/colors',
  //   icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavItem,
  //   name: 'Typography',
  //   to: '/theme/typography',
  //   icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavTitle,
  //   name: 'C',
  // },
  {
    component: CNavGroup,
    name: 'Project',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavGroup,
        name: 'Flat amount of Markup',
        to: '/base/Flat amount of Markup',
        icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'FRD - Markups - Flat amount',
            to: '/base/cards',
          },
        ],
      },

      {
        component: CNavGroup,
        name: 'Split payment',
        to: '/base/Split payment',
        icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
        items: [
          {
            component: CNavGroup,
            name: 'BRD - Split payment - 2023-11-15',
            to: '/base/BRD - Split payment - 2023-11-15',
            icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
            items: [
              {
                component: CNavItem,
                name: 'POC - Split payment Skybird',
                to: '/base/carousels',
              },
            ],
          },
        ],
      },
      {
        component: CNavGroup,
        name: 'Display Flights ny Component',
        to: '/base/Display Flights ny Component',
        icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'BRD - Display Flights by Component and Include family price - 2023-11-16',
            to: '/base/collapses',
          },
        ],
      },
      {
        component: CNavGroup,
        name: 'Seat map',
        to: '/base/Seat map',
        icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'BRD - Seat map - 2023-11-15',
            to: '/base/list-groups',
          },
          {
            component: CNavItem,
            name: 'FRD - Seat map implementaton - MVP1',
            to: '/base/FRD-seatmap',
          },
        ],
      },
      {
        component: CNavGroup,
        name: 'Ancillaries',
        to: '/base/Ancillaries',
        icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'BRD - Ancillaries - 2023-11-16',
            to: '/base/BRD-Ancillaries',
          },
        ],
      },
      {
        component: CNavGroup,
        name: 'Passenger Additional Information',
        to: '/base/Passenger Additional Information',
        icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'BRD - Standard Travel Documentaion - 2023-11-16',
            to: '/base/BRD-Standard',
          },
          {
            component: CNavGroup,
            name: 'FOID inclusion',
            to: '/base/FOID--Inclusions',
            icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
            items: [
              {
                component: CNavItem,
                name: 'FOID Inclusion',
                to: '/base/FOID-Inclusions',
              },
              {
                component: CNavItem,
                name: 'FRD - FOID Inclusion - MVP1',
                to: '/base/FOID-Inclusion',
              },
            ],
          },
          {
            component: CNavGroup,
            name: 'Frequent Traveler Inclusions',
            to: '/base/Frequent Traveler Inclusions',
            icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
            items: [
              {
                component: CNavItem,
                name: 'Frequent Traveler Inclusions',
                to: '/base/Frequent-Traveler',
              },
              {
                component: CNavItem,
                name: 'FRD - Frequent Traveler Inclusion - MVP1',
                to: '/base/FRD-Frequent',
              },
            ],
          },
        ],
      },
      {
        component: CNavItem,
        name: 'Private Fares',
        to: '/base/private-fares',
      },
      {
        component: CNavItem,
        name: 'Tracking plan_draft',
        to: '/base/tracking-plan-draft',
      },
      {
        component: CNavGroup,
        name: 'Users Session Control',
        to: '/base/Users-Session-Control',
        icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'Users Session Control',
            to: '/base/users-session-control',
          },
          {
            component: CNavItem,
            name: 'BRD - Users session Control',
            to: '/base/BRD-Users-Sesion-Control',
          },
        ],
      },
      {
        component: CNavGroup,
        name: 'Delray integration',
        to: '/base/delray-integration',
        icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'Delray integration',
            to: '/base/delray-integration',
          },
          {
            component: CNavItem,
            name: 'BRD - Delray integration - 2023-12-05',
            to: '/base/BRD-delray-integration',
          },
          {
            component: CNavItem,
            name: 'Sign up and Login scenarios (Testing cases)',
            to: '/base/signup-login-scenarios',
          },
        ],
      },
      {
        component: CNavGroup,
        name: 'Expedia Integration',
        to: '/base/expedia-integration',
        icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'Expedia Integration',
            to: '/base/expedia-integration',
          },
          {
            component: CNavItem,
            name: 'FRD - Expedia Integration - Get content property IDs - MVP1',
            to: '/base/expedia-integration-content-property',
          },
          {
            component: CNavItem,
            name: 'FRD - Expedia Integration - Availability - MVP1',
            to: '/base/expedia-integration-availability',
          },
          {
            component: CNavItem,
            name: 'FRD - Expedia Integration - Booking - MVP1',
            to: '/base/expedia-integration-booking',
          },
          {
            component: CNavGroup,
            name: 'Expedia Meeting Notes',
            to: '/base/expedia-meeting-notes',
            icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
            items: [
              {
                component: CNavItem,
                name: 'Expedia Meeting Notes',
                to: '/base/expedia-meeting-notes',
              },
              {
                component: CNavItem,
                name: '2023-12-22 Meeting notes - Expedia Project Coordination(Internal)',
                to: '/base/expedia-meeting-notes-coordination',
              },
              {
                component: CNavItem,
                name: '2024-01-02 - Expedia Integration - Phase I - Meeting Notes',
                to: '/base/expedia-meeting-notes-phase1',
              },
            ],
          },
        ],
      },
      {
        component: CNavGroup,
        name: 'Xeni API',
        to: '/base/xeni-api',
        icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'Xeni API',
            to: '/base/xeni-api',
          },
          {
            component: CNavGroup,
            name: 'Flights API',
            to: '/base/flights-api',
            icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
            items: [
              {
                component: CNavItem,
                name: 'Flights API',
                to: '/base/flights-api',
              },
              {
                component: CNavItem,
                name: 'Air Shopping',
                to: '/base/air-shopping',
              },
              {
                component: CNavItem,
                name: 'Miscellaneous endpoints',
                to: '/base/miscellaneous-endpoints',
              },
            ],
          },
        ],
      },
      {
        component: CNavItem,
        name: 'Navs & Tabs',
        to: '/base/navs',
      },
      {
        component: CNavItem,
        name: 'Pagination',
        to: '/base/paginations',
      },
      {
        component: CNavItem,
        name: 'Placeholders',
        to: '/base/placeholders',
      },
      {
        component: CNavItem,
        name: 'Popovers',
        to: '/base/popovers',
      },
      {
        component: CNavItem,
        name: 'Progress',
        to: '/base/progress',
      },
      {
        component: CNavItem,
        name: 'Spinners',
        to: '/base/spinners',
      },
      {
        component: CNavItem,
        name: 'Tables',
        to: '/base/tables',
      },
      {
        component: CNavItem,
        name: 'Tabs',
        to: '/base/tabs',
      },
      {
        component: CNavItem,
        name: 'Tooltips',
        to: '/base/tooltips',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Buttons',
    to: '/buttons',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Buttons',
        to: '/buttons/buttons',
      },
      {
        component: CNavItem,
        name: 'Buttons groups',
        to: '/buttons/button-groups',
      },
      {
        component: CNavItem,
        name: 'Dropdowns',
        to: '/buttons/dropdowns',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Forms',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Form Control',
        to: '/forms/form-control',
      },
      {
        component: CNavItem,
        name: 'Select',
        to: '/forms/select',
      },
      {
        component: CNavItem,
        name: 'Checks & Radios',
        to: '/forms/checks-radios',
      },
      {
        component: CNavItem,
        name: 'Range',
        to: '/forms/range',
      },
      {
        component: CNavItem,
        name: 'Input Group',
        to: '/forms/input-group',
      },
      {
        component: CNavItem,
        name: 'Floating Labels',
        to: '/forms/floating-labels',
      },
      {
        component: CNavItem,
        name: 'Layout',
        to: '/forms/layout',
      },
      {
        component: CNavItem,
        name: 'Validation',
        to: '/forms/validation',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Charts',
    to: '/charts',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Icons',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'CoreUI Free',
        to: '/icons/coreui-icons',
        badge: {
          color: 'success',
          text: 'NEW',
        },
      },
      {
        component: CNavItem,
        name: 'CoreUI Flags',
        to: '/icons/flags',
      },
      {
        component: CNavItem,
        name: 'CoreUI Brands',
        to: '/icons/brands',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Notifications',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Alerts',
        to: '/notifications/alerts',
      },
      {
        component: CNavItem,
        name: 'Badges',
        to: '/notifications/badges',
      },
      {
        component: CNavItem,
        name: 'Modal',
        to: '/notifications/modals',
      },
      {
        component: CNavItem,
        name: 'Toasts',
        to: '/notifications/toasts',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Widgets',
    to: '/widgets',
    // icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // },
  },
  {
    component: CNavTitle,
    name: 'Extras',
  },
  {
    component: CNavGroup,
    name: 'Pages',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Login',
        to: '/login',
      },
      {
        component: CNavItem,
        name: 'Register',
        to: '/register',
      },
      {
        component: CNavItem,
        name: 'Error 404',
        to: '/404',
      },
      {
        component: CNavItem,
        name: 'Error 500',
        to: '/500',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Docs',
    href: 'https://coreui.io/react/docs/templates/installation/',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  },
]

export default _nav