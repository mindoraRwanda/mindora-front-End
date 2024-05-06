import { configureStore } from "@reduxjs/toolkit";
import linkReducer from './features/holder/links';
import authReducer from './features/authorization/authslice';
import therapistFetch from './reduxSlices/FetchTherapists/FetchTherapists';
import AllTherapists from './reduxSlices/FetchAllTherapists/FetchAllTherapists';
import activateTherapist from './reduxSlices/ActivateTherapist/ActivateTherapist';
import singleTherapist from './reduxSlices/FetchIndividualTherapist/FetchSingleTherapist';
import deleteTherapist from './reduxSlices/DeleteTherapist/DeleteTherapist';
import therapistReducer from './features/therapist/therapist';
import patientsReducer from './features/therapistDashboard/patientSlice';
import messagesReducer from './features/therapistDashboard/chatSlice';

export const store = configureStore({
    reducer:{
        link: linkReducer,
        auth: authReducer,
        therapist: therapistReducer,
        message:messagesReducer,
        patients: patientsReducer,
        deleteTherapist,
        therapistFetch,
        activateTherapist,
        singleTherapist,
        AllTherapists,
    }
})