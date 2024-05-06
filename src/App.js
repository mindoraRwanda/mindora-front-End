import { Route, Routes} from 'react-router-dom';
import './App.css';
// import { ColorModeContext, useMode } from './theme';
// import { About } from './pages/about';
// import { Dashboard } from './pages/admin/views/dashboard';
// import MaterialUI from './pages/admin/views/materialUI';
// import ContactUs from './pages/contact-page';
// import { Homepage } from './pages/homepage';
// import { PricingPage } from './pages/pricing-page';
// import { Services } from './pages/services';
// import { TherapistsList } from './pages/therapists-list';
import { ColorModeContext, useMode } from './theme';
import { ThemeProvider, CssBaseline } from '@mui/material' ;
import {baseTheme} from './pages/admin-dashboard/global/Theme-variable'
import { useRoutes } from 'react-router-dom';
import ThemeRoutes from './pages/admin-dashboard/routes/Router';
import { ProSidebarProvider } from "react-pro-sidebar";
// import ProfileView from './pages/profile-view';
// import { BookAppointments } from './pages/book-appointments';
// import MaterialUI from './pages/materialui-practice';
import { About } from './pages/about';
import ContactUs from './pages/contact-page';
import { Calendar } from './pages/TherapistDashboard/calendar';
import { Chat } from './pages/TherapistDashboard/chat';
import { Dashboard } from './pages/TherapistDashboard/dashboard';
import { Edit } from './pages/TherapistDashboard/edit';
import { RealDashboard } from './pages/TherapistDashboard/overview';
import { Patients } from './pages/TherapistDashboard/patients';
import { Homepage } from './pages/homepage';
import { PricingPage } from './pages/pricing-page';
import { Services } from './pages/services';
import { TherapistsList } from './pages/therapists-list';

function App() {
  // const [theme, colorMode] = useMode();
  const theme = baseTheme;
  const routings = useRoutes(ThemeRoutes);

  return (

  
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <ProSidebarProvider>
        <div>
          {routings}
        </div>
        </ProSidebarProvider>
        </ThemeProvider>
  );
}

  export default App;

      {/* <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/therapists-list' element={ <TherapistsList/> }/>
        <Route path='/contact-us' element = { <ContactUs/> }/>
        <Route path = '/pricing' element = {<PricingPage/>}/>
        <Route path='/services' element = { <Services/> } />
        <Route path='/dashboard' element= {<Dashboard/>}>
          <Route path='/dashboard/dashboard-chat' element = {<Chat/>}/>
          <Route path='/dashboard/dashboard' element = {<RealDashboard/>}/>
          <Route path='/dashboard/calendar' element = {<Calendar/>}/>
          <Route path='/dashboard/patients' element = {<Patients/>}/>
          <Route path='/dashboard/edit-account' element = {<Edit/>}/>
        </Route>
      </Routes>
    </div>
>>>>>>> a11bd7f (addition of dashboard navigation and top bar with the unfinished overview page) */}
//   );
// }

