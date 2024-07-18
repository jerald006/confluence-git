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
  },
  {
    component: CNavGroup,
    name: 'Projects',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Projects',
        to: '/base/projects',
      },
      {
        component: CNavGroup,
        name: 'Flat amount of Markup',
        to: '/base/Flat amount of Markup',
        icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'Flat amount of Markup',
            to: '/base/flat-amount-markup',
          },
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
            component: CNavItem,
            name: 'Split payment',
            to: '/base/split-payment',
          },
          {
            component: CNavGroup,
            name: 'BRD - Split payment - 2023-11-15',
            to: '/base/BRD - Split payment - 2023-11-15',
            icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
            items: [
              {
                component: CNavItem,
                name: 'BRD - Split payment - 2023-11-15',
                to: '/base/BRD-split-payment',
              },
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
        name: 'Display Flights by Component',
        to: '/base/Display Flights by Component',
        icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'Display Flights by Component',
            to: '/base/display-flights-component',
          },
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
            name: 'Seat map',
            to: '/base/seat-map',
          },
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
            name: 'Ancillaries',
            to: '/base/ancillaries',
          },
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
            name: 'Passenger Additional Information',
            to: '/base/passenger-additional-information',
          },
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
            to: '/base/BRD-users-session-control',
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
        component: CNavGroup,
        name: 'Cruises Integration',
        to: '/base/cruises-integration',
        icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'Cruises Integration',
            to: '/base/cruises-integration',
          },
          {
            component: CNavItem,
            name: 'BRD - Cruises Integration - 2024-01-04',
            to: '/base/BRD-cruises-integration',
          },
          {
            component: CNavGroup,
            name: 'FRD - Cruises Integration - Get content - Static data to cache - MVP1',
            to: '/base/FRD-cruises-integration-content',
            icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
            items: [
              {
                component: CNavItem,
                name: 'FRD - Cruises Integration - Get content - Static data to cache - MVP1',
                to: '/base/FRD-cruises-integration-content',
              },
              {
                component: CNavItem,
                name: 'Cache cruises Ship data.',
                to: '/base/cache-cruises-ship-data',
              },
              {
                component: CNavItem,
                name: 'What to Hydrate',
                to: '/base/hydrate',
              },
              {
                component: CNavItem,
                name: '2024-04-08 - Cruises Static Data - What we need? - Meeting Notes',
                to: '/base/cruises-meeting-notes',
              },
            ],
          },
          {
            component: CNavGroup,
            name: 'FRD - Cruises Integration - Shopping - MVP1',
            to: '/base/FRD-cruises-integration-shopping',
            icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
            items: [
              {
                component: CNavItem,
                name: 'FRD - Cruises Integration - Shopping - MVP1',
                to: '/base/FRD-cruises-integration-shopping',
              },
              {
                component: CNavItem,
                name: 'FRD - Front-end presentation',
                to: '/base/FRD-front-end-presentation',
              },
            ],
          },
          {
            component: CNavItem,
            name: 'FRD - Cruises Integration-Booking-MVP1',
            to: '/base/FRD-cruises-integration-booking',
          },
          {
            component: CNavItem,
            name: '2024-02-16 - Cruise PoC - Meeting Notes',
            to: '/base/cruise-poc-meeting-notes',
          },
          {
            component: CNavItem,
            name: 'XENI API: Cruise data.',
            to: '/base/cruise-data',
          },
          {
            component: CNavItem,
            name: '2024-02-23 - Cruise PoC - Review advance and planning Demo - Meeting notes',
            to: '/base/cruises-poc-review-planning',
          },
          {
            component: CNavItem,
            name: '2024-03-03 - Cruise PoC - Demo - Meeting notes',
            to: '/base/cruises-demo-meeting-notes',
          },
          {
            component: CNavItem,
            name: 'Cruise Lines agreements',
            to: '/base/cruises-line-agreements',
          },
        ],
      },
      {
        component: CNavGroup,
        name: 'Hot Deals',
        to: '/base/hot-deals',
        icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'Hot Deals',
            to: '/base/hot-deals',
          },
          {
            component: CNavGroup,
            name: 'RCI - Integration',
            to: '/base/RCI-Integration',
            icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
            items: [
              {
                component: CNavItem,
                name: 'RCI - Integration',
                to: '/base/RCI-Integration',
              },
              {
                component: CNavItem,
                name: 'BRD - RCI Integration - 2023-11-30',
                to: '/base/BRD-RCI-Integration',
              },
              {
                component: CNavItem,
                name: 'FRD - RCI Integration - MVP1 - static Data',
                to: '/base/FRD-RCI-Integration-static-data',
              },
              {
                component: CNavItem,
                name: 'FRD - RCI Integration - MVP1 - Availability and Shopping',
                to: '/base/FRD-RCI-Integration-availability-shopping',
              },
              {
                component: CNavItem,
                name: 'FRD - RCI Integration - MVP1 - Booking and checkout',
                to: '/base/FRD-RCI-Integration-booking-checkout',
              },
            ],
          },
          {
            component: CNavGroup,
            name: 'HyperGuest Integration',
            to: '/base/hyperguest-integration',
            icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
            items: [
              {
                component: CNavItem,
                name: 'HyperGuest Integration',
                to: '/base/hyperguest-integration',
              },
              {
                component: CNavItem,
                name: 'FRD - HyperGuest Integration - Get Hotels List - property IDs - MVP1',
                to: '/base/FRD-hyperguest-integration-get-hotel-list',
              },
              {
                component: CNavItem,
                name: 'FRD - HyperGuest Integration - Availability - MVP1 **Under Construction **',
                to: '/base/FRD-hyperguest-integration-availability',
              },
            ],
          },
        ],
      },
      {
        component: CNavGroup,
        name: 'Agents association with Clients',
        to: '/base/agents-association-clients',
        icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'Agents association with Clients',
            to: '/base/agents-association-clients',
          },
          {
            component: CNavItem,
            name: '2024-04-08 - Agents association with Clients - Enhancements - Meeting notes',
            to: '/base/agents-association-clients-enhancements-meeting-notes',
          },
        ],
      },
      {
        component: CNavGroup,
        name: 'Flights proposal product',
        to: '/base/flights-proposal',
        icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'Flights proposal product',
            to: '/base/flights-proposal',
          },
          {
            component: CNavGroup,
            name: 'Flight Product Strategy',
            to: '/base/flight-product-strategy',
            icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
            items: [
              {
                component: CNavItem,
                name: 'Flight Product Strategy',
                to: '/base/flight-product-strategy',
              },
              {
                component: CNavItem,
                name: 'Middleware',
                to: '/base/middleware',
              },
              {
                component: CNavItem,
                name: 'Proposal Cache solution',
                to: '/base/proposal-cache-solution',
              },
              {
                component: CNavItem,
                name: 'Super Admin flights dashboard',
                to: '/base/super-admin-flights-dashboard',
              },
              {
                component: CNavItem,
                name: 'Metrics that matters',
                to: '/base/FRD-RCI-Integration-booking-checkout',
              },
            ],
          },
          {
            component: CNavGroup,
            name: 'Vendors',
            to: '/base/vendors',
            icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
            items: [
              {
                component: CNavItem,
                name: 'Vendors',
                to: '/base/vendors',
              },
              {
                component: CNavItem,
                name: 'KIWI.com Integration',
                to: '/base/KIWI-Integration',
              },
              {
                component: CNavItem,
                name: 'Travel Fusion Integration',
                to: '/base/travel-fusion-integration',
              },
              {
                component: CNavGroup,
                name: 'Travelinq',
                to: '/base/Travelinq',
                icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
                items: [
                  {
                    component: CNavItem,
                    name: 'Travelinq',
                    to: '/base/Travelinq',
                  },
                  {
                    component: CNavItem,
                    name: 'Travelinq-Authentication',
                    to: '/base/travelinq-authentication',
                  },
                ],
              },
              {
                component: CNavGroup,
                name: 'Mondee',
                to: '/base/mondee',
                icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
                items: [
                  {
                    component: CNavItem,
                    name: 'Mondee',
                    to: '/base/mondee',
                  },
                  {
                    component: CNavItem,
                    name: '2024-01-02 - Vendors - Mondee I - Meeting Notes',
                    to: '/base/vendors-mondee-meeting-notes',
                  },
                ],
              },
            ],
          },
          {
            component: CNavGroup,
            name: 'Flights - PoC',
            to: '/base/flights-poc',
            icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
            items: [
              {
                component: CNavItem,
                name: 'Flights - PoC',
                to: '/base/flights-poc',
              },
              {
                component: CNavItem,
                name: 'Roadmap - Development',
                to: '/base/roadmap-development',
              },
              {
                component: CNavGroup,
                name: 'Consolid',
                to: '/base/consolid',
                icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
                items: [
                  {
                    component: CNavItem,
                    name: 'Consolid',
                    to: '/base/consolid',
                  },
                  {
                    component: CNavItem,
                    name: 'Consolid - Authentication',
                    to: '/base/consolid-authentication',
                  },
                  {
                    component: CNavGroup,
                    name: 'Consolid - Offer Management',
                    to: '/base/consolid-offer-management',
                    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
                    items: [
                      {
                        component: CNavItem,
                        name: 'Consolid - Offer Management',
                        to: '/base/consolid-offer-management',
                      },
                      {
                        component: CNavItem,
                        name: 'Build Consolid Itinerary option',
                        to: '/base/build-consolid-itinerary-option',
                      },
                    ],
                  },
                ],
              },
              {
                component: CNavGroup,
                name: 'Mystify Integration',
                to: '/base/mystify-integration',
                icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
                items: [
                  {
                    component: CNavItem,
                    name: 'Mystify Integration',
                    to: '/base/mystify-integration',
                  },
                  {
                    component: CNavItem,
                    name: 'Authentication',
                    to: '/base/authentication',
                  },
                  {
                    component: CNavGroup,
                    name: 'Offer Management',
                    to: '/base/offer-management',
                    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
                    items: [
                      {
                        component: CNavItem,
                        name: 'Offer Management',
                        to: '/base/offer-management',
                      },
                      {
                        component: CNavItem,
                        name: 'Air Shopping Request',
                        to: '/base/air-shopping-request',
                      },
                      {
                        component: CNavItem,
                        name: 'Air Shopping Response',
                        to: '/base/air-shopping-response',
                      },
                      {
                        component: CNavItem,
                        name: 'Air Shopping Multi-destinations.',
                        to: '/base/air-shopping-multi-destinations',
                      },
                      {
                        component: CNavItem,
                        name: 'Build Mystifly Itineary',
                        to: '/base/build-mystifly-itineary',
                      },
                      {
                        component: CNavItem,
                        name: 'Confirm Option',
                        to: '/base/confirm-option',
                      },
                      {
                        component: CNavItem,
                        name: 'Fare rules',
                        to: '/base/fare-rules',
                      },
                    ],
                  },
                  {
                    component: CNavGroup,
                    name: 'Order-Management',
                    to: '/base/order-management',
                    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
                    items: [
                      {
                        component: CNavItem,
                        name: 'Order-Management',
                        to: '/base/order-management',
                      },
                      {
                        component: CNavItem,
                        name: 'Ticket Order',
                        to: '/base/ticket-order',
                      },
                    ],
                  },
                  {
                    component: CNavGroup,
                    name: 'Mystify - Meeting Notes',
                    to: '/base/mystify-meeting-notes',
                    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
                    items: [
                      {
                        component: CNavItem,
                        name: 'Mystify - Meeting Notes',
                        to: '/base/mystify-meeting-notes',
                      },
                      {
                        component: CNavItem,
                        name: '2024-04-10 - Travellnq- Benchmark- Meeting notes',
                        to: '/base/travellnq-benchmark-meeting-notes',
                      },
                      {
                        component: CNavItem,
                        name: '2024-06-04 - Mystifly- Tech Queries- Meeting notes',
                        to: '/base/mystifly-techqueries-meeting-notes',
                      },
                    ],
                  },
                  {
                    component: CNavGroup,
                    name: 'Mystifly Wrapper',
                    to: '/base/mystifly-wrapper',
                    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
                    items: [
                      {
                        component: CNavItem,
                        name: 'Mystifly Wrapper',
                        to: '/base/mystifly-wrapper',
                      },
                      {
                        component: CNavItem,
                        name: 'airshopping',
                        to: '/base/airshopping',
                      },
                      {
                        component: CNavItem,
                        name: 'confirmOption',
                        to: '/base/confirmoption',
                      },
                      {
                        component: CNavItem,
                        name: 'create',
                        to: '/base/create',
                      },
                      {
                        component: CNavItem,
                        name: 'retrieve',
                        to: '/base/retrieve',
                      },
                      {
                        component: CNavItem,
                        name: 'cancel',
                        to: '/base/cancel',
                      },
                      {
                        component: CNavItem,
                        name: 'purchase',
                        to: '/base/purchase',
                      },
                    ],
                  },
                ],
              },
              {
                component: CNavGroup,
                name: 'Poc - Meeting Notes',
                to: '/base/poc-meeting-notes',
                icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
                items: [
                  {
                    component: CNavItem,
                    name: 'Poc - Meeting Notes',
                    to: '/base/poc-meeting-notes',
                  },
                  {
                    component: CNavItem,
                    name: '2024-01-02 - Flight Revamp - Phase I - Planning - Meeting Notes',
                    to: '/base/flight-revamp-phaseI-planning',
                  },
                ],
              },
              {
                component: CNavItem,
                name: 'Target Vendors',
                to: '/base/target-vendors',
              },
            ],
          },
        ],
      },
      {
        component: CNavItem,
        name: 'Restricted Agents Markup Blinded',
        to: '/base/restricted-agents-markup-blinded',
      },
      {
        component: CNavGroup,
        name: 'Target Locations',
        to: '/base/target-locations',
        icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'Target Locations',
            to: '/base/target-locations',
          },
          {
            component: CNavItem,
            name: 'FRD - Target destination - feature',
            to: '/base/target-destination-feature',
          },
          {
            component: CNavItem,
            name: '2024-07-08 - Target Locations - Refinement - Meeting Notes',
            to: '/base/target-location-refinement-meeting-notes',
          },
        ],
      },
      // {
      //   component: CNavItem,
      //   name: 'Navs & Tabs',
      //   to: '/base/navs',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Pagination',
      //   to: '/base/paginations',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Placeholders',
      //   to: '/base/placeholders',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Popovers',
      //   to: '/base/popovers',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Progress',
      //   to: '/base/progress',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Spinners',
      //   to: '/base/spinners',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Tables',
      //   to: '/base/tables',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Tabs',
      //   to: '/base/tabs',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Tooltips',
      //   to: '/base/tooltips',
      // },
    ],
  },
  {
    component: CNavItem,
    name: 'About Xeni',
    to: '/base/about-xeni',
  },
  {
    component: CNavGroup,
    name: 'Product Architecture - XeniApp',
    to: '/base/product-architecture',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Product Architecture - XeniApp',
        to: '/base/product-architecture',
      },
      {
        component: CNavItem,
        name: 'Actors - XeniApp',
        to: '/base/actors-xeni-app',
      },
      {
        component: CNavItem,
        name: 'Functional Requirements',
        to: '/base/functional-requirements',
      },
      {
        component: CNavItem,
        name: 'Commissions',
        to: '/base/commissions',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Technical Documents - XeniApp',
    to: '/base/technical-documents-xeni-app',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Technical Documents - XeniApp',
        to: '/base/technical-documents-xeni-app',
      },
      {
        component: CNavGroup,
        name: 'Environment Setup - XeniApp',
        to: '/base/environment-setup-xeni-app',
        icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'Environment Setup - XeniApp',
            to: '/base/environment-setup-xeni-app',
          },
          {
            component: CNavItem,
            name: 'XeniApp-infra-vpc',
            to: '/base/xeniapp-infra-vpc',
          },
          {
            component: CNavItem,
            name: 'xeniapp-infra-backend',
            to: '/base/xeniapp-infra-backend',
          },
          {
            component: CNavItem,
            name: 'xeniapp-infra-frontend',
            to: '/base/xeniapp-infra-frontend',
          },
          {
            component: CNavItem,
            name: 'xeniapp-infra-database',
            to: '/base/xeniapp-infra-database',
          },
          {
            component: CNavItem,
            name: 'xeniapp-packer',
            to: '/base/xeniapp-packer',
          },
        ],
      },
      {
        component: CNavItem,
        name: 'Environment setup - Multi-Tenant',
        to: '/base/environment-setup-multi-tenant',
      },
      {
        component: CNavItem,
        name: 'Database-Xeniapp',
        to: '/base/database-xeniapp',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Xeni 3.0',
    to: '/base/xeni-3.0',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Xeni 3.0',
        to: '/base/xeni-3.0',
      },
      {
        component: CNavGroup,
        name: 'Xeni 3.0 - CTQs',
        to: '/base/xeni-ctqs',
        icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'Xeni 3.0 - CTQs',
            to: '/base/xeni-ctqs',
          },
          {
            component: CNavGroup,
            name: 'Frontend',
            to: '/base/frontend',
            icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
            items: [
              {
                component: CNavItem,
                name: 'Frontend',
                to: '/base/frontend',
              },
              {
                component: CNavItem,
                name: 'Decision Guide',
                to: '/base/decision-guide',
              },
              {
                component: CNavItem,
                name: 'Definition of done',
                to: '/base/definition-of-done',
              },
              {
                component: CNavItem,
                name: 'Local workstation setup',
                to: '/base/local-workstation-setup',
              },
              {
                component: CNavItem,
                name: 'API Compatibility',
                to: '/base/API-compatibility',
              },
              {
                component: CNavItem,
                name: 'Gap Analysis for PROD Ready',
                to: '/base/gap-analysis-for-PROD-ready',
              },
            ],
          },
        ],
      },
      {
        component: CNavGroup,
        name: 'Xeni 3.0 Testing',
        to: '/base/xeni-testing',
        icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'Xeni 3.0 Testing',
            to: '/base/xeni-testing',
          },
          {
            component: CNavItem,
            name: 'Xeni 3.0 Mobile Browser Testing',
            to: '/base/xeni-mobile-browser-testing',
          },
          {
            component: CNavItem,
            name: 'UT(Unit Testing)/Integration Testing',
            to: '/base/xeni-testing',
          },
        ],
      },
      {
        component: CNavGroup,
        name: 'Sprint Demos',
        to: '/base/sprint-demos',
        icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'Sprint Demos',
            to: '/base/sprint-demos',
          },
          {
            component: CNavItem,
            name: 'Demo - 02/22/2022 - Car Features',
            to: '/base/demo-car-features',
          },
          {
            component: CNavItem,
            name: 'Demo - 15/04/2022 - Hotel Features',
            to: '/base/demo-hotel-features',
          },
          {
            component: CNavItem,
            name: 'Sprint 8- 2.0 Features for 3.0- Demo 1- 17May2022',
            to: '/base/sprint-features-demo-may',
          },
        ],
      },
      {
        component: CNavGroup,
        name: 'Grooming Sessions and Information Sharing',
        to: '/base/grooming-sessions-and-information-sharing',
        icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'Grooming Sessions and Information Sharing',
            to: '/base/grooming-sessions-and-information-sharing',
          },
          {
            component: CNavItem,
            name: '2.0 Features for 3.0- Story Grooming 1- 21Apr2022',
            to: '/base/2.0-features-story-grooming-1',
          },
          {
            component: CNavItem,
            name: '2.0 Features for 3.0- Story Grooming 2- 10May2022',
            to: '/base/2.0-features-story-grooming-2',
          },
          {
            component: CNavItem,
            name: '2.0 Features for 3.0- Story Grooming 3- 12May2022',
            to: '/base/2.0-features-story-grooming-3',
          },
          {
            component: CNavItem,
            name: '2.0 Features for 3.0- Story Sizing Sprint 9- 13May2022',
            to: '/base/2.0-features-story-sizing-sprint-9',
          },
          {
            component: CNavItem,
            name: '2.0 Features for 3.0- Story Grooming 4- 25May2022',
            to: '/base/2.0-features-story-grooming-4',
          },
          {
            component: CNavItem,
            name: '2.0 Features for 3.0- Story Grooming 5- 7Jun2022',
            to: '/base/2.0-features-story-grooming-5',
          },
          {
            component: CNavItem,
            name: '2.0 Features for 3.0- Story Grooming 6- 23Jun2022',
            to: '/base/2.0-features-story-grooming-6',
          },
          {
            component: CNavItem,
            name: 'Clarification regarding Confirmation Page for Booking Reports-My Trips- 14Jun22',
            to: '/base/clarification-regarding-confirmation-page-booking-reports',
          },
          {
            component: CNavItem,
            name: '3.0- Hotel- Room Grouping Issue Discussion- 15Jun2022',
            to: '/base/hotel-room-grouping-issue-discussion',
          },
          {
            component: CNavItem,
            name: 'Xeni 3.0- BitPay Integration Grooming Session- 7Nov2022',
            to: '/base/bitpay-integration-grooming-session',
          },
        ],
      },
      {
        component: CNavGroup,
        name: 'X3UI 3.0 Sprint Retrospectives',
        to: '/base/x3ui-3.0-sprint-retrospectives',
        icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'X3UI 3.0 Sprint Retrospectives',
            to: '/base/x3ui-3.0-sprint-retrospectives',
          },
          {
            component: CNavItem,
            name: 'X3UI Sprint 6 Retrospective',
            to: '/base/x3ui-sprint-6-retrospective',
          },
          {
            component: CNavItem,
            name: 'X3UI Sprint 8 Retrospective',
            to: '/base/x3ui-sprint-8-retrospective',
          },
        ],
      },
      {
        component: CNavItem,
        name: 'Xeni 3.0- Refactoring- Brainstorming Session- 4Nov2022',
        to: '/base/xeni-3.0-refactoring-brainstorming-session',
      },
      {
        component: CNavItem,
        name: 'Manual Subscription',
        to: '/base/manual-subscription',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Production Deployments',
    to: '/base/production-deployments',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Production Deployments',
        to: '/base/production-deployments',
      },
      {
        component: CNavItem,
        name: 'Xeni 3.0 Production Push Plan',
        to: '/base/xeni-3.0-production-push-plan',
      },
      {
        component: CNavItem,
        name: 'Prod Deployment - 29 Jan 2022',
        to: '/base/prod-depoyment',
      },
      {
        component: CNavItem,
        name: 'Activities Go Live Plan',
        to: '/base/activities-go-live-plan',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Process Management',
    to: '/base/production-deployments',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Process Management',
        to: '/base/production-deployments',
      },
      {
        component: CNavGroup,
        name: 'API - Improvements',
        to: '/base/x3ui-3.0-sprint-retrospectives',
        icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'API - Improvements',
            to: '/base/x3ui-3.0-sprint-retrospectives',
          },
          {
            component: CNavItem,
            name: 'Xeni Refactoring',
            to: '/base/x3ui-sprint-6-retrospective',
          },
        ],
      },
      {
        component: CNavItem,
        name: 'Git Strategies',
        to: '/base/xeni-3.0-production-push-plan',
      },
      {
        component: CNavItem,
        name: 'Centralized Logging',
        to: '/base/prod-depoyment',
      },
      {
        component: CNavGroup,
        name: 'Development Process',
        to: '/base/x3ui-3.0-sprint-retrospectives',
        icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'Development Process',
            to: '/base/x3ui-3.0-sprint-retrospectives',
          },
          {
            component: CNavGroup,
            name: 'Setting Up XeniApp WebApp in Local Environment',
            to: '/base/x3ui-3.0-sprint-retrospectives',
            icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
            items: [
              {
                component: CNavItem,
                name: 'Setting Up XeniApp WebApp in Local Environment',
                to: '/base/x3ui-3.0-sprint-retrospectives',
              },
              {
                component: CNavGroup,
                name: 'For Mac',
                to: '/base/x3ui-3.0-sprint-retrospectives',
                icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
                items: [
                  {
                    component: CNavItem,
                    name: 'For Mac',
                    to: '/base/x3ui-3.0-sprint-retrospectives',
                  },
                  {
                    component: CNavItem,
                    name: 'API',
                    to: '/base/x3ui-3.0-sprint-retrospectives',
                  },
                  {
                    component: CNavItem,
                    name: 'React',
                    to: '/base/x3ui-3.0-sprint-retrospectives',
                  },
                ],
              },
            ],
          },
          {
            component: CNavItem,
            name: 'QA Deployment',
            to: '/base/x3ui-3.0-sprint-retrospectives',
          },
          {
            component: CNavItem,
            name: 'Auditing requests and responses to Vendors',
            to: '/base/x3ui-3.0-sprint-retrospectives',
          },
          {
            component: CNavItem,
            name: 'Git Flow Process',
            to: '/base/x3ui-3.0-sprint-retrospectives',
          },
          {
            component: CNavItem,
            name: 'Handling SMTP credentials provided by agency owner',
            to: '/base/x3ui-3.0-sprint-retrospectives',
          },
          {
            component: CNavItem,
            name: 'Deploy to prod',
            to: '/base/x3ui-3.0-sprint-retrospectives',
          },
        ],
      },
      {
        component: CNavGroup,
        name: 'Significance of Epics, User Stories, Tasks and Bugs',
        to: '/base/x3ui-3.0-sprint-retrospectives',
        icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'Significance of Epics, User Stories, Tasks and Bugs',
            to: '/base/x3ui-3.0-sprint-retrospectives',
          },
          {
            component: CNavItem,
            name: 'Bug/Task Development Process',
            to: '/base/x3ui-sprint-6-retrospective',
          },
          {
            component: CNavItem,
            name: 'Story Creation',
            to: '/base/x3ui-sprint-6-retrospective',
          },
          {
            component: CNavItem,
            name: 'Bug Creation',
            to: '/base/x3ui-sprint-6-retrospective',
          },
        ],
      },
      {
        component: CNavItem,
        name: 'UI/UX Component & Application Pages',
        to: '/base/x3ui-sprint-6-retrospective',
      },
      {
        component: CNavItem,
        name: 'Xeni Cleanup Plan',
        to: '/base/x3ui-sprint-6-retrospective',
      },
      {
        component: CNavGroup,
        name: 'Customer Service',
        to: '/base/x3ui-3.0-sprint-retrospectives',
        icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'Customer Service',
            to: '/base/x3ui-3.0-sprint-retrospectives',
          },
          {
            component: CNavItem,
            name: 'New Sign Up Outreach',
            to: '/base/x3ui-sprint-6-retrospective',
          },
        ],
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Project Management',
    to: '/base/product-architecture',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Project Management',
        to: '/base/product-architecture',
      },
      {
        component: CNavItem,
        name: 'UI Improvements',
        to: '/base/actors-xeni-app',
      },
      {
        component: CNavGroup,
        name: 'Meeting notes',
        to: '/base/x3ui-3.0-sprint-retrospectives',
        icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'Meeting notes',
            to: '/base/x3ui-3.0-sprint-retrospectives',
          },
          {
            component: CNavItem,
            name: '2021-10-25 Meeing notes',
            to: '/base/x3ui-sprint-6-retrospective',
          },
          {
            component: CNavItem,
            name: '2023-11-21 Meeing notes',
            to: '/base/x3ui-sprint-6-retrospective',
          },
          {
            component: CNavItem,
            name: '2021-10-11 Meeing notes',
            to: '/base/x3ui-sprint-6-retrospective',
          },
          {
            component: CNavItem,
            name: '2021-10-04 Meeing notes',
            to: '/base/x3ui-sprint-6-retrospective',
          },
          {
            component: CNavItem,
            name: '2021-09-27 Meeing notes',
            to: '/base/x3ui-sprint-6-retrospective',
          },
          {
            component: CNavItem,
            name: '2021-09-20 Meeing notes',
            to: '/base/x3ui-sprint-6-retrospective',
          },
          {
            component: CNavItem,
            name: '2021-09-13 Meeing notes',
            to: '/base/x3ui-sprint-6-retrospective',
          },
          {
            component: CNavItem,
            name: '2021-09-06 Meeing notes',
            to: '/base/x3ui-sprint-6-retrospective',
          },
          {
            component: CNavItem,
            name: '2021-08-30 Meeing notes',
            to: '/base/x3ui-sprint-6-retrospective',
          },
          {
            component: CNavItem,
            name: '2021-08-15 Meeing notes',
            to: '/base/x3ui-sprint-6-retrospective',
          },
          {
            component: CNavItem,
            name: '2021-08-22 Meeing notes',
            to: '/base/x3ui-sprint-6-retrospective',
          },
          {
            component: CNavItem,
            name: '2021-08-10 Meeing notes',
            to: '/base/x3ui-sprint-6-retrospective',
          },
          {
            component: CNavItem,
            name: '2021-08-01 Meeing notes',
            to: '/base/x3ui-sprint-6-retrospective',
          },
          {
            component: CNavItem,
            name: '2021-07-26 Meeing notes',
            to: '/base/x3ui-sprint-6-retrospective',
          },
          {
            component: CNavItem,
            name: '2021-07-19 Meeing',
            to: '/base/x3ui-sprint-6-retrospective',
          },
          {
            component: CNavItem,
            name: '2021-07-05 Team Meeing',
            to: '/base/x3ui-sprint-6-retrospective',
          },
          {
            component: CNavItem,
            name: '2021-07-12 Team Meeing',
            to: '/base/x3ui-sprint-6-retrospective',
          },
          {
            component: CNavItem,
            name: '2021-10-18 Team Meeing',
            to: '/base/x3ui-sprint-6-retrospective',
          },
          {
            component: CNavItem,
            name: '2024-01-03 - Product Discussion - Meeing notes',
            to: '/base/x3ui-sprint-6-retrospective',
          },
        ],
      },
      {
        component: CNavItem,
        name: 'Revenue Optimizer',
        to: '/base/functional-requirements',
      },
      {
        component: CNavItem,
        name: 'Xeni 2.0/3.0',
        to: '/base/commissions',
      },
      {
        component: CNavItem,
        name: 'Blockchain',
        to: '/base/commissions',
      },
      {
        component: CNavItem,
        name: 'CSI Document',
        to: '/base/commissions',
      },
      {
        component: CNavItem,
        name: 'Travalla Document',
        to: '/base/commissions',
      },
      {
        component: CNavItem,
        name: 'Phocus Wright',
        to: '/base/commissions',
      },
      {
        component: CNavItem,
        name: 'Issue List',
        to: '/base/commissions',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Features - XeniApp',
    to: '/base/features-xeniapp',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Features - XeniApp',
        to: '/base/features-xeniapp',
      },
      {
        component: CNavItem,
        name: 'Super Admin Features',
        to: '/base/super-admin-features',
      },
      {
        component: CNavItem,
        name: 'Agency Owner Features',
        to: '/base/agency-owner-features',
      },
      {
        component: CNavGroup,
        name: 'Flights Booking',
        to: '/base/flights-booking',
        icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'Flights Booking',
            to: '/base/flights-booking',
          },
          {
            component: CNavItem,
            name: 'Flight Flow',
            to: '/base/flight flow',
          },
          {
            component: CNavItem,
            name: 'cabin selecvtion issue',
            to: '/base/cabin-selecvtion-issue',
          },
          {
            component: CNavGroup,
            name: 'Flight Module architecture',
            to: '/base/flight-module-architecture',
            icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
            items: [
              {
                component: CNavItem,
                name: 'Flight Module architecture',
                to: '/base/flight-module-architecture',
              },
              {
                component: CNavItem,
                name: 'Frontend module breakdown',
                to: '/base/frontend-module-breakdown',
              },
              {
                component: CNavItem,
                name: 'backend api breakdown',
                to: '/base/backend-api-breakdown',
              },
            ],
          },
        ],
      },
      {
        component: CNavGroup,
        name: 'Hotels',
        to: '/base/hotels',
        icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'Hotels',
            to: '/base/hotels',
          },
          {
            component: CNavItem,
            name: 'Hotel Features',
            to: '/base/hotel-features',
          },
          {
            component: CNavItem,
            name: 'Hotel Testing',
            to: '/base/hotel-testing',
          },
          {
            component: CNavItem,
            name: 'Hotelbed',
            to: '/base/hotelbed',
          },
          {
            component: CNavGroup,
            name: 'Hotel Development',
            to: '/base/hotel-development',
            icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
            items: [
              {
                component: CNavItem,
                name: 'Hotel Development',
                to: '/base/hotel-development',
              },
              {
                component: CNavItem,
                name: 'Hotel Mapping - Vervotech API',
                to: '/base/hotel-mapping-vervotech-api',
              },
            ],
          },
          {
            component: CNavGroup,
            name: 'CTW Tech One Pager',
            to: '/base/ctw-tech-one-pager',
            icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
            items: [
              {
                component: CNavItem,
                name: 'CTW Tech One Pager',
                to: '/base/ctw-tech-one-pager',
              },
              {
                component: CNavItem,
                name: 'CTW Design Document Questions',
                to: '/base/ctw-design-document-questions',
              },
            ],
          },
          {
            component: CNavItem,
            name: 'Hotelbeds Certification',
            to: '/base/hotelbeds-certification',
          },
          {
            component: CNavItem,
            name: 'Unit Testing for hotelBeds',
            to: '/base/unit-testing-for-hotelbeds',
          },
          {
            component: CNavItem,
            name: 'Hotel Integration',
            to: '/base/hotel-integration',
          },
          {
            component: CNavItem,
            name: 'Hotel Filters API Requirements',
            to: '/base/hotel-filters-api-requirements',
          },
        ],
      },
      {
        component: CNavGroup,
        name: 'Car Rental Features',
        to: '/base/car-rental-features',
        icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'Car Rental Features',
            to: '/base/car-rental-features',
          },
          {
            component: CNavItem,
            name: 'Car Rental MApping - Canect API',
            to: '/base/Car Rental MApping - canect-api',
          },
          {
            component: CNavItem,
            name: 'Xeni 3.0 Car Enhancements',
            to: '/base/xeni-car-enhancements',
          },
          {
            component: CNavItem,
            name: 'Rental Car Testing',
            to: '/base/rental-car-testing',
          },
        ],
      },
      {
        component: CNavGroup,
        name: 'Activities',
        to: '/base/activities',
        icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'Activities',
            to: '/base/activities',
          },
          {
            component: CNavItem,
            name: 'Activity Testing',
            to: '/base/activity-testing',
          },
        ],
      },
      {
        component: CNavItem,
        name: 'Flight Cancellation and Repricing',
        to: '/base/flight-cancellation-and-repricing',
      },
      {
        component: CNavItem,
        name: 'Flight Module',
        to: '/base/flight-module',
      },
      {
        component: CNavItem,
        name: 'Book Now',
        to: '/base/book-now',
      },
      {
        component: CNavItem,
        name: 'Xeniapp Cart',
        to: '/base/xeniapp-cart',
      },
      {
        component: CNavGroup,
        name: 'XeniPay',
        to: '/base/xenipay',
        icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'XeniPay',
            to: '/base/xenipay',
          },
          {
            component: CNavItem,
            name: 'Blockchain Milestones',
            to: '/base/blockchain-milestones',
          },
          {
            component: CNavItem,
            name: 'About',
            to: '/base/about',
          },
          {
            component: CNavItem,
            name: 'Xenipay Edge Case',
            to: '/base/xenipay-edge-case',
          },
          {
            component: CNavItem,
            name: 'API List',
            to: '/base/api-list',
          },
          {
            component: CNavItem,
            name: 'Questions',
            to: '/base/questions',
          },
          {
            component: CNavItem,
            name: 'Notes - XeniPay',
            to: '/base/notes-xenipay',
          },
          {
            component: CNavItem,
            name: 'Process Overview',
            to: '/base/process-overview',
          },
          {
            component: CNavGroup,
            name: 'Postman Testing',
            to: '/base/postman-testing',
            icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
            items: [
              {
                component: CNavItem,
                name: 'Postman Testing',
                to: '/base/Postman-testing',
              },
              {
                component: CNavItem,
                name: 'Booings-1',
                to: '/base/bookings-1',
              },
            ],
          },
          {
            component: CNavItem,
            name: 'Notes for XApp Integration',
            to: '/base/notes-for-xapp-interation',
          },
          {
            component: CNavGroup,
            name: 'Meetings',
            to: '/base/meetings',
            icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
            items: [
              {
                component: CNavItem,
                name: 'Meetings',
                to: '/base/meetings',
              },
              {
                component: CNavItem,
                name: '2021 14th September - 11:00',
                to: '/base/september-14',
              },
              {
                component: CNavItem,
                name: '2021 8th September - 18:00',
                to: '/base/september-8',
              },
              {
                component: CNavItem,
                name: '2021 9th September - 12:00',
                to: '/base/september-9',
              },
              {
                component: CNavItem,
                name: '2021 Sep 16 - 12:30',
                to: '/base/september-16',
              },
              {
                component: CNavItem,
                name: '2021 09 17 - 12:30 (17th September)',
                to: '/base/september-17',
              },
              {
                component: CNavItem,
                name: '2022 Aug 4th',
                to: '/base/auguest-4',
              },
              {
                component: CNavItem,
                name: '2022 Aug 3rd',
                to: '/base/auguest-3',
              },
              {
                component: CNavItem,
                name: '2022 Aug 5th',
                to: '/base/auguest-5',
              },
              {
                component: CNavItem,
                name: '2022 Aug 4th USER FLOW',
                to: '/base/auguest-4-user-flow',
              },
              {
                component: CNavItem,
                name: 'Bitpay Customization Call 11/10/2022',
                to: '/base/bitpay-customization-call',
              },
            ],
          },
          {
            component: CNavGroup,
            name: 'Processes',
            to: '/base/processes',
            icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
            items: [
              {
                component: CNavItem,
                name: 'Processes',
                to: '/base/processes',
              },
              {
                component: CNavItem,
                name: 'User',
                to: '/base/user',
              },
              {
                component: CNavItem,
                name: 'Bookings',
                to: '/base/bookings',
              },
            ],
          },
          {
            component: CNavItem,
            name: 'XeniPay Requirement Specification',
            to: '/base/xenipay-requirement-specification',
          },
          {
            component: CNavItem,
            name: 'Integrating XeniPay',
            to: '/base/integrating-xenipay',
          },
        ],
      },
      {
        component: CNavGroup,
        name: 'XeniPayment',
        to: '/base/xenipayment',
        icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'XeniPayment',
            to: '/base/xenipayment',
          },
          {
            component: CNavItem,
            name: 'About - XeniPayment',
            to: '/base/about-xenipayment',
          },
          {
            component: CNavItem,
            name: 'ERD - XeniPayment',
            to: '/base/ERD - xenipayment',
          },
          {
            component: CNavGroup,
            name: 'Architecture - XeniPayment',
            to: '/base/architecture-xenipayment',
            icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
            items: [
              {
                component: CNavItem,
                name: 'Architecture - XeniPayment',
                to: '/base/architecture-xenipayment',
              },
              {
                component: CNavGroup,
                name: 'Gateway',
                to: '/base/gateway',
                icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
                items: [
                  {
                    component: CNavItem,
                    name: 'Gateway',
                    to: '/base/gateway',
                  },
                  {
                    component: CNavItem,
                    name: 'HTTP Endpoints',
                    to: '/base/http-endpoints',
                  },
                  {
                    component: CNavItem,
                    name: 'Technical Document',
                    to: '/base/technical-document',
                  },
                ],
              },
              {
                component: CNavGroup,
                name: 'Bitpay',
                to: '/base/bitpay',
                icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
                items: [
                  {
                    component: CNavItem,
                    name: 'Bitpay',
                    to: '/base/bitpay',
                  },
                  {
                    component: CNavItem,
                    name: 'Technical Document - Bitpay',
                    to: '/base/technical-document-bitpay',
                  },
                ],
              },
              {
                component: CNavItem,
                name: 'Security',
                to: '/base/security',
              },
              {
                component: CNavGroup,
                name: 'Developers Guide',
                to: '/base/developers-guide',
                icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
                items: [
                  {
                    component: CNavItem,
                    name: 'Developers Guide',
                    to: '/base/developers-guide',
                  },
                  {
                    component: CNavItem,
                    name: 'Repositories',
                    to: '/base/repositories',
                  },
                  {
                    component: CNavItem,
                    name: 'Git Strategy',
                    to: '/base/git-strategy',
                  },
                ],
              },
              {
                component: CNavItem,
                name: 'Technical Document - XeniPayment',
                to: '/base/technical-document-xenipayment',
              },
            ],
          },
          {
            component: CNavItem,
            name: 'Commissions',
            to: '/base/commissions',
          },
        ],
      },
    ],
  },

  // {
  //   component: CNavGroup,
  //   name: 'Product Architecture - XeniApp',
  //   to: '/base/product-architecture',
  //   icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Product Architecture - XeniApp',
  //       to: '/base/product-architecture',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Actors - XeniApp',
  //       to: '/base/actors-xeni-app',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Functional Requirements',
  //       to: '/base/functional-requirements',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Commissions',
  //       to: '/base/commissions',
  //     },
  //   ],
  // },

  // {
  //   component: CNavGroup,
  //   name: 'Buttons',
  //   to: '/buttons',
  //   icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Buttons',
  //       to: '/buttons/buttons',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Buttons groups',
  //       to: '/buttons/button-groups',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Dropdowns',
  //       to: '/buttons/dropdowns',
  //     },
  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Forms',
  //   icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Form Control',
  //       to: '/forms/form-control',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Select',
  //       to: '/forms/select',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Checks & Radios',
  //       to: '/forms/checks-radios',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Range',
  //       to: '/forms/range',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Input Group',
  //       to: '/forms/input-group',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Floating Labels',
  //       to: '/forms/floating-labels',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Layout',
  //       to: '/forms/layout',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Validation',
  //       to: '/forms/validation',
  //     },
  //   ],
  // },
  // {
  //   component: CNavItem,
  //   name: 'Charts',
  //   to: '/charts',
  //   icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Icons',
  //   icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'CoreUI Free',
  //       to: '/icons/coreui-icons',
  //       badge: {
  //         color: 'success',
  //         text: 'NEW',
  //       },
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'CoreUI Flags',
  //       to: '/icons/flags',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'CoreUI Brands',
  //       to: '/icons/brands',
  //     },
  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Notifications',
  //   icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Alerts',
  //       to: '/notifications/alerts',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Badges',
  //       to: '/notifications/badges',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Modal',
  //       to: '/notifications/modals',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Toasts',
  //       to: '/notifications/toasts',
  //     },
  //   ],
  // },
  // {
  //   component: CNavItem,
  //   name: 'Widgets',
  //   to: '/widgets',
  // icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
  // badge: {
  //   color: 'info',
  //   text: 'NEW',
  // },
  // },
  // {
  //   component: CNavTitle,
  //   name: 'Extras',
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Pages',
  //   icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Login',
  //       to: '/login',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Register',
  //       to: '/register',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Error 404',
  //       to: '/404',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Error 500',
  //       to: '/500',
  //     },
  //   ],
  // },
  // {
  //   component: CNavItem,
  //   name: 'Docs',
  //   href: 'https://coreui.io/react/docs/templates/installation/',
  //   icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  // },
]

export default _nav
