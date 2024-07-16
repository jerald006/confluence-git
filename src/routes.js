import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

// Base
const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'))
const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'))
const Cards = React.lazy(() => import('./views/base/cards/Cards'))
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'))
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'))
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'))
const FRDSeatMap = React.lazy(() => import('./views/base/FRD-seatmap/FRDSeatMap'))
const BRDAncillaries = React.lazy(() => import('./views/base/BRD-Ancillaries/BRDAncillaries'))
const BRDStandard = React.lazy(() => import('./views/base/BRD-Standard/BRDStandard'))
const FOIDInclusion = React.lazy(() => import('./views/base/FOID-Inclusion/FOIDInclusion'))
const FOIDInclusions = React.lazy(() => import('./views/base/FOID-Inclusions/FOIDInclusions'))
const FrequentTraveler = React.lazy(() => import('./views/base/Frequent-Traveler/FrequentTraveler'))
const FRDFrequent = React.lazy(() => import('./views/base/FRD-Frequent/FRDFrequent'))
const PrivateFares = React.lazy(() => import('./views/base/private-fares/PrivateFares'))
const TrackingPlanDraft = React.lazy(() => import('./views/base/tracking-plan-draft/TrackingPlanDraft'))
const UsersSessionControl = React.lazy(() => import('./views/base/users-session-control/UsersSessionControl'))
const BRDUserSessionControl = React.lazy(() => import('./views/base/BRD-users-session-control/BRDUserSessionControl'))
const DelrayIntegration = React.lazy(() => import('./views/base/delray-integration/DelrayIntegration'))
const BRDelrayIntegration = React.lazy(() => import('./views/base/BRD-delray-integration/BRDelrayIntegration'))
const SignUpLoginScenarios = React.lazy(() => import('./views/base/signup-login-scenarios/SignUpLoginScenarios'))
const ExpediaIntegration = React.lazy(() => import('./views/base/expedia-integration/ExpediaIntegration'))
const ExpediaContentProperty = React.lazy(() => import('./views/base/expedia-integration-content-property/ExpediaContentProperty'))
const ExpediaIntegrationAvailability = React.lazy(() => import('./views/base/expedia-integration-availability/ExpediaIntegrationAvailability'))
const ExpediaIntegrationBooking = React.lazy(() => import('./views/base/expedia-integration-booking/ExpediaIntegrationBooking'))
const ExpediaMeetingNotes = React.lazy(() => import('./views/base/expedia-meeting-notes/ExpediaMeetingNotes'))
const ExpediaMeetingCoOrdination = React.lazy(() => import('./views/base/expedia-meeting-notes-coordination/ExpediaMeetingCoOrdination'))
const ExpediaMeetingPhase = React.lazy(() => import('./views/base/expedia-meeting-notes-phase1/ExpediaMeetingPhase'))
const XeniApi = React.lazy(() => import('./views/base/xeniapi/XeniAPIs'))
const FlightsAPI = React.lazy(() => import('./views/base/flights-api/FlightsApi'))
const AirShopping = React.lazy(() => import('./views/base/air-shopping/AirShopping'))
const MiscellaneousEndPoints = React.lazy(() => import('./views/base/miscellaneous-endpoints/MiscellaneousEndPoints'))
const Projects = React.lazy(() => import('./views/base/projects/Projects'))
const FlatAmountMarkup = React.lazy(() => import('./views/base/flat-amount-markup/FlatAmountMarkup'))
const SplitPayment = React.lazy(() => import('./views/base/split-payment/SplitPayment'))
const BRDSplitPayment = React.lazy(() => import('./views/base/BRD-split-payment/BRDSplitPayment'))
const DisplayFlightComponent = React.lazy(() => import('./views/base/display-flights-component/DisplayFlightComponent'))
const SeatMap = React.lazy(() => import('./views/base/seat-map/SeatMap'))
const Ancillaries = React.lazy(() => import('./views/base/ancillaries/Ancillaries'))
const PassengerAdditionalInformation = React.lazy(() => import('./views/base/passenger-additional-information/PassengerAdditionalInformation'))
const CruisesIntegration = React.lazy(() => import('./views/base/cruises-integration/CruisesIntegration'))
const BRDCruisesIntegration = React.lazy(() => import('./views/base/BRD-cruises-integration/BRDCruisesIntegration'))
const FRDCruisesIntegrationContent = React.lazy(() => import('./views/base/FRD-cruises-integration-content/FRDCruisesIntegrationContent'))
const CacheCruisesShipData = React.lazy(() => import('./views/base/cache-cruises-ship-data/CacheCruisesShipData'))
const Hydrate = React.lazy(() => import('./views/base/hydrate/Hydrate'))
const CruisesMeetingNotes = React.lazy(() => import('./views/base/cruises-meeting-notes/CruisesMeetingNotes'))
const FRDCruisesIntegrationShopping = React.lazy(() => import('./views/base/FRD-cruises-integration-shopping/FRDCruisesIntegrationShopping'))
const FRDFrontEndPresentation = React.lazy(() => import('./views/base/FRD-front-end-presentation/FRDFrontEndPresentation'))
const FRDCruisesIntegrationBooking = React.lazy(() => import('./views/base/FRD-cruises-integration-booking/FRDCruisesIntegrationBooking'))
const CruisePocMeetingNotes = React.lazy(() => import('./views/base/cruise-poc-meeting-notes/CruisePocMeetingNotes'))
const CruiseData = React.lazy(() => import('./views/base/cruise-data/CruiseData'))
const CruisesPocReviewPlanning = React.lazy(() => import('./views/base/cruises-poc-review-planning/CruisesPocReviewPlanning'))
const CruisesDemoMeetingNotes = React.lazy(() => import('./views/base/cruises-demo-meeting-notes/CruisesDemoMeetingNotes'))
const CruisesLineAgreements = React.lazy(() => import('./views/base/cruises-line-agreements/CruisesLineAgreements'))
const HotDeals = React.lazy(() => import('./views/base/hot-deals/HotDeals'))
const RCIIntegration = React.lazy(() => import('./views/base/RCI-Integration/RCIIntegration'))
const BRDRciIntegration = React.lazy(() => import('./views/base/BRD-RCI-Integration/BRDRciIntegration'))
const FRDRciIntegrationStaticData = React.lazy(() => import('./views/base/FRD-RCI-Integration-static-data/FRDRciIntegrationStaticData'))
const FRDRciIntegrationAvailabilityShopping = React.lazy(() => import('./views/base/FRD-RCI-Integration-availability-shopping/FRDRciIntegrationAvailabilityShopping'))
const FRDRciIntegrationBookingCheckout = React.lazy(() => import('./views/base/FRD-RCI-Integration-booking-checkout/FRDRciIntegrationBookingCheckout'))
const HyperguestIntegration = React.lazy(() => import('./views/base/hyperguest-integration/HyperguestIntegration'))
const HyperguestIntegrationGetHotelList = React.lazy(() => import('./views/base/FRD-hyperguest-integration-get-hotel-list/HyperguestIntegrationGetHotelList'))
const HyperguestIntegrationAvailability = React.lazy(() => import('./views/base/FRD-hyperguest-integration-availability/HyperguestIntegrationAvailability'))
const AgentsAssociationClients = React.lazy(() => import('./views/base/agents-association-clients/AgentsAssociationClients'))
const AgentsAssociationClientsEnhancementsMeetingNotes = React.lazy(() => import('./views/base/agents-association-clients-enhancements-meeting-notes/AgentsAssociationClientsEnhancementsMeetingNotes'))
const Navs = React.lazy(() => import('./views/base/navs/Navs'))
const Paginations = React.lazy(() => import('./views/base/paginations/Paginations'))
const Placeholders = React.lazy(() => import('./views/base/placeholders/Placeholders'))
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'))
const Progress = React.lazy(() => import('./views/base/progress/Progress'))
const Spinners = React.lazy(() => import('./views/base/spinners/Spinners'))
const Tabs = React.lazy(() => import('./views/base/tabs/Tabs'))
const Tables = React.lazy(() => import('./views/base/tables/Tables'))
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'))

// Buttons
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'))
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'))
const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns'))

//Forms
const ChecksRadios = React.lazy(() => import('./views/forms/checks-radios/ChecksRadios'))
const FloatingLabels = React.lazy(() => import('./views/forms/floating-labels/FloatingLabels'))
const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'))
const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
const Range = React.lazy(() => import('./views/forms/range/Range'))
const Select = React.lazy(() => import('./views/forms/select/Select'))
const Validation = React.lazy(() => import('./views/forms/validation/Validation'))

const Charts = React.lazy(() => import('./views/charts/Charts'))

// Icons
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

// Notifications
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))

const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'content', element: Dashboard },
  // { path: '/theme', name: 'Theme', element: Colors, exact: true },
  // { path: '/theme/colors', name: 'Colors', element: Colors },
  // { path: '/theme/typography', name: 'Typography', element: Typography },
  { path: '/base', name: 'Xeni App', element: Cards, exact: true },
  { path: '/base/accordion', name: 'Accordion', element: Accordion },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', element: Breadcrumbs },
  { path: '/base/cards', name: 'FRD - Markups - Flat amount', element: Cards },
  { path: '/base/carousels', name: 'Carousel', element: Carousels },
  { path: '/base/collapses', name: 'Collapse', element: Collapses },
  { path: '/base/list-groups', name: 'List Groups', element: ListGroups },
  { path: '/base/FRD-seatmap', name: 'FRD seatmap', element: FRDSeatMap },
  { path: '/base/BRD-Ancillaries', name: 'BRD Ancillaries', element: BRDAncillaries },
  { path: '/base/BRD-Standard', name: 'BRD Standard', element: BRDStandard },
  { path: '/base/FOID-Inclusion', name: 'FOID Inclusion', element: FOIDInclusion },
  { path: '/base/FOID-Inclusions', name: 'FOID Inclusions', element: FOIDInclusions },
  { path: '/base/Frequent-Traveler', name: 'Frequent Traveler', element: FrequentTraveler },
  { path: '/base/FRD-Frequent', name: 'FRD Frequent', element: FRDFrequent},  
  { path: '/base/Private-Fares', name: 'Private Fares', element: PrivateFares},
  { path: '/base/Tracking-Plan-Draft', name: 'Tracking Plan', element: TrackingPlanDraft},
  { path: '/base/Users-Session-Control', name: 'Users Session Control', element: UsersSessionControl},
  { path: '/base/BRD-Users-Session-Control', name: 'BRD Users Session Control', element: BRDUserSessionControl},
  { path: '/base/delray-integration', name: 'Delray Integration', element: DelrayIntegration},
  { path: '/base/BRD-delray-integration', name: 'BRD Delray Integration', element: BRDelrayIntegration},
  { path: '/base/signup-login-scenarios', name: 'Sign Up And Login Scenarios', element: SignUpLoginScenarios},
  { path: '/base/expedia-integration', name: 'Expedia Integration', element: ExpediaIntegration},
  { path: '/base/expedia-integration-content-property', name: 'Expedia Integration Content Property', element: ExpediaContentProperty},
  { path: '/base/expedia-integration-availability', name: 'Expedia Integration Availability', element: ExpediaIntegrationAvailability},
  { path: '/base/expedia-integration-booking', name: 'Expedia Integration Booking', element: ExpediaIntegrationBooking},
  { path: '/base/expedia-meeting-notes', name: 'Expedia Meeting Notes', element: ExpediaMeetingNotes},
  { path: '/base/expedia-meeting-notes-coordination', name: 'Expedia Meeting Notes Coordination', element: ExpediaMeetingCoOrdination},
  { path: '/base/expedia-meeting-notes-phase1', name: 'Expedia Meeting Notes Phase', element: ExpediaMeetingPhase},
  { path: '/base/xeni-api', name: 'Xeni API', element: XeniApi},
  {path: '/base/flights-api', name: 'Flights API', element: FlightsAPI},
  {path: '/base/air-shopping', name: 'Air Shopping', element: AirShopping},
  {path: '/base/miscellaneous-endpoints', name: 'Miscellaneous Endpoint', element: MiscellaneousEndPoints},
  {path: '/base/projects', name: 'Projects', element: Projects},
  {path: '/base/flat-amount-markup', name: 'Flat Amount Markup', element: FlatAmountMarkup},
  {path: '/base/split-payment', name: 'Split Payment', element: SplitPayment},
  {path: '/base/BRD-split-payment', name: 'BRD Split Payment', element: BRDSplitPayment},
  {path: '/base/display-flights-component', name: 'Display Flight Component', element: DisplayFlightComponent},
  {path: '/base/seat-map', name: 'Seat Map', element: SeatMap},
  {path: '/base/ancillaries', name: 'Ancillaries', element: Ancillaries},
  {path: '/base/passenger-additional-information', name: 'Passenger Additional Information', element: PassengerAdditionalInformation},
  {path: '/base/cruises-integration', name: 'Cruises Integration', element: CruisesIntegration},
  { path: '/base/BRD-cruises-integration', name: 'BRD Cruises Integration', element: BRDCruisesIntegration },
  { path: '/base/FRD-cruises-integration-content', name: 'FRD Cruises Integration Content', element: FRDCruisesIntegrationContent },
  { path: '/base/cache-cruises-ship-data', name: 'Cache Cruises Ship Data', element: CacheCruisesShipData },
  { path: '/base/hydrate', name: 'Hydrate', element: Hydrate },
  { path: '/base/cruises-meeting-notes', name: 'Cruises Meeting Notes', element: CruisesMeetingNotes },
  { path: '/base/FRD-cruises-integration-shopping', name: 'FRD Cruises Integration Shopping', element: FRDCruisesIntegrationShopping },
  { path: '/base/FRD-front-end-presentation', name: 'FRD Front End Presentation', element: FRDFrontEndPresentation },
  { path: '/base/FRD-cruises-integration-booking', name: 'FRD Cruises Integration Booking', element: FRDCruisesIntegrationBooking },
  { path: '/base/cruise-poc-meeting-notes', name: 'Cruise Poc Meeting Notes', element: CruisePocMeetingNotes },
  { path: '/base/cruise-data', name: 'Cruise Data', element: CruiseData },
  { path: '/base/cruises-poc-review-planning', name: 'Cruises Poc Review Planning', element: CruisesPocReviewPlanning },
  { path: '/base/cruises-demo-meeting-notes', name: 'Cruises Demo Meeting Notes', element: CruisesDemoMeetingNotes },
  { path: '/base/cruises-line-agreements', name: 'Cruises Line Agreements', element: CruisesLineAgreements },
  { path: '/base/hot-deals', name: 'Hot Deals', element: HotDeals },
  { path: '/base/RCI-Integration', name: 'RCI Integration', element: RCIIntegration },
  { path: '/base/BRD-RCI-integration', name: 'BRD RCI Integration', element: BRDRciIntegration },
  { path: '/base/FRD-RCI-integration-static-data', name: 'FRD RCI Integration Static Data', element: FRDRciIntegrationStaticData },
  { path: '/base/FRD-RCI-integration-availability-shopping', name: 'FRD RCI Integration Availability Shopping', element: FRDRciIntegrationAvailabilityShopping },
  { path: '/base/FRD-RCI-integration-booking-checkout', name: 'FRD RCI Integration Booking Checkout', element: FRDRciIntegrationBookingCheckout },
  { path: '/base/hyperguest-integration', name: 'Hyperguest Integration', element: HyperguestIntegration },
  { path: '/base/FRD-hyperguest-integration-get-hotel-list', name: 'FRD Hyperguest Integration Get Hotel List', element: HyperguestIntegrationGetHotelList },
  { path: '/base/FRD-hyperguest-integration-availability', name: 'FRD Hyperguest Integration Availability', element: HyperguestIntegrationAvailability },
  { path: '/base/agents-association-clients', name: 'Agents Association Clients', element: AgentsAssociationClients },
  { path: '/base/agents-association-clients-enhancements-meeting-notes', name: 'Agents Association Clients Enhancements Meeting Notes', element: AgentsAssociationClientsEnhancementsMeetingNotes },
  { path: '/base/navs', name: 'Navs', element: Navs },
  { path: '/base/paginations', name: 'Paginations', element: Paginations },
  { path: '/base/placeholders', name: 'Placeholders', element: Placeholders },
  { path: '/base/popovers', name: 'Popovers', element: Popovers },
  { path: '/base/progress', name: 'Progress', element: Progress },
  { path: '/base/spinners', name: 'Spinners', element: Spinners },
  { path: '/base/tabs', name: 'Tabs', element: Tabs },
  { path: '/base/tables', name: 'Tables', element: Tables },
  { path: '/base/tooltips', name: 'Tooltips', element: Tooltips },
  { path: '/buttons', name: 'Buttons', element: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', element: Buttons },
  { path: '/buttons/dropdowns', name: 'Dropdowns', element: Dropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', element: ButtonGroups },
  { path: '/charts', name: 'Charts', element: Charts },
  { path: '/forms', name: 'Forms', element: FormControl, exact: true },
  { path: '/forms/form-control', name: 'Form Control', element: FormControl },
  { path: '/forms/select', name: 'Select', element: Select },
  { path: '/forms/checks-radios', name: 'Checks & Radios', element: ChecksRadios },
  { path: '/forms/range', name: 'Range', element: Range },
  { path: '/forms/input-group', name: 'Input Group', element: InputGroup },
  { path: '/forms/floating-labels', name: 'Floating Labels', element: FloatingLabels },
  { path: '/forms/layout', name: 'Layout', element: Layout },
  { path: '/forms/validation', name: 'Validation', element: Validation },
  { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', element: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', element: Flags },
  { path: '/icons/brands', name: 'Brands', element: Brands },
  { path: '/notifications', name: 'Notifications', element: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', element: Alerts },
  { path: '/notifications/badges', name: 'Badges', element: Badges },
  { path: '/notifications/modals', name: 'Modals', element: Modals },
  { path: '/notifications/toasts', name: 'Toasts', element: Toasts },
  { path: '/widgets', name: 'Widgets', element: Widgets },
]

export default routes
