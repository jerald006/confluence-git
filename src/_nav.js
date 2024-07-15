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
    component: CNavItem,
    name: 'About Xeni',
    to: '/base/about-xeni',
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
