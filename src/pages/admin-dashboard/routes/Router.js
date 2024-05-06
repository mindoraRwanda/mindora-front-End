import { Settings } from "@mui/icons-material";
import { lazy } from "react";
import { Navigate } from "react-router-dom";
import { About } from "../../about.js";
import { BookAppointments } from "../../book-appointments.jsx";
import ContactUs from "../../contact-page.jsx";
import { Calendar } from "../../TherapistDashboard/calendar.js";
import { Chat } from "../../TherapistDashboard/chat.js";
import { Dashboard } from "../../TherapistDashboard/dashboard.js";
import { Edit } from "../../TherapistDashboard/edit.js";
import { RealDashboard } from "../../TherapistDashboard/overview.js";
import { Homepage } from "../../homepage.js";
import { PricingPage } from "../../pricing-page.jsx";
import ProfileView from "../../profile-view.jsx";
import { Services } from "../../services.jsx";
import { TherapistsList } from "../../therapists-list.jsx";
import { AdminTherapist } from "../views/admin-therapist/adminTherapist.jsx";
import Appointments from "../views/appointments/appointments.jsx";
import Complaints from "../views/complaints/complaints.jsx";
import Message from "../views/message/message.jsx";
import { UserList } from "../views/users-list/UserList.jsx";
import {Patients} from "../../TherapistDashboard/patients"
import { Payment } from "../../payment.js";

// User List
// const UserList = lazy(()=> import("../views/users-list/user-list.jsx"));
// const UserList = lazy(() => import("../views/users-list/user-list.jsx"));


/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout/FullLayout.js"));
/****End Layouts*****/

/*****Pages******/
const Dashboard1 = lazy(() => import("../views/dashboards/Dashboard1"));

// /*****Tables******/
// const BasicTable = lazy(() => import("../views/tables/BasicTable"));

// const ExButton = lazy(() => import("../views/FormElements/ExButton"))
const ExSlider = lazy(() => import("../views/FormElements/ExSlider"));
const ExSwitch = lazy(() => import("../views/FormElements/ExSwitch"));

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <Homepage/>,
  },
  {
    path: '/about',
    element: <About/>,
  },
  {
    path: '/therapists-list',
    element: <TherapistsList/>,
  },
  {
    path: '/contact-us',
    element: <ContactUs/>,
  },
  {
    path: '/pricing',
    element: <PricingPage/>,
  },
  {
    path: '/services',
    element: <Services/>,
  },
  {
    path: '/profile-view/:id',
    element: <ProfileView/>,
  },
  {
    path: '/book-appointments/',
    element: <BookAppointments/>,
  },
  {
    path: '/payment/',
    element: <Payment/>,
  },
  {
    path: "/dashboard",
    element: <FullLayout />,
    children: [
      { path: "/dashboard", element: <Navigate to="/dashboard/home" /> },
      { path: "/dashboard/home", exact: true, element: <Dashboard1 /> },
      { path: "/dashboard/therapist-list", element: <AdminTherapist/> },
      { path: "/dashboard/user-list", element: <UserList/> },
      { path: "/dashboard/message", element: <Message/> },
      { path: "/dashboard/appointments", element: <Appointments/> },
      { path: "/dashboard/complaints", element: <Complaints/> },
      { path: "/dashboard/settings", element: <Settings/> },
      { path: "/dashboard/form-elements/slider", element: <ExSlider /> },
      { path: "/dashboard/form-elements/switch", element: <ExSwitch /> },
    ],
  },
  {
    path: '/therapist-dashboard',
    element: <Dashboard/>,
    children: [
      { path: '/therapist-dashboard', element: <Navigate to={'/therapist-dashboard/overview'}/> },
      { path: "/therapist-dashboard/overview", element: <RealDashboard/> },
      { path: "/therapist-dashboard/dashboard-chat", element: <Chat/> },
      { path: "/therapist-dashboard/calendar", element: <Calendar/> },
      { path: "/therapist-dashboard/edit-account", element: <Edit/> },
      { path: "/therapist-dashboard/patients", element: <Patients/> }
    ]
  }
];

export default ThemeRoutes;
