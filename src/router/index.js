import { createRouter, createWebHistory } from "vue-router";


import SignupHome from "@/views/SignupHome.vue";
import AdministrateurHome from "@/views/AdministrateurHome.vue";



import AdministrateurCreateEvent from "@/views/AdministrateurCreateEvent.vue";
import AdministrateurEvents from "@/views/AdministrateurEvents.vue";
import AdministrateurParticiant from "@/views/AdministrateurParticiant.vue";
import AdministrateurSoumission from "@/views/AdministrateurSoumission.vue";
import CertificatesStatistics from "@/views/CertificatesStatistics.vue";
import AdministrateurEventDetails from "@/views/AdministrateurEventDetails.vue";
import Home from "@/views/Home.vue";
import PublicEvents from "@/views/PublicEvents.vue";
import SignupEvent from "@/views/SignupEvent.vue";

import EvaluationMembre from "@/views/EvaluationMembre.vue";
import membrecomithome from "@/views/membrecomithome.vue";
import Profile from "@/views/Profile.vue";
import PublicDetilsEvent from "@/views/PublicDetilsEvent.vue";
import SoumissionFormulare from "@/views/SoumissionFormulare.vue";
import InvitiePage from "@/views/InvitiePage.vue";
import InviteForm from "@/views/InviteForm.vue";
//import SoumissionParticipant from "@/views/SoumissionParticipant.vue";
//import SoumissionFormulare from "@/views/SoumissionFormulare.vue";




const routes = [
{
  path: "/adminHome",
  name: "adminHome",
  component: AdministrateurHome
},
{
    path: "/invitie",
    name: "invitie",
    component: InvitiePage
  },
  {
    path: "/invite-form",
    name: "invite-form",
    component: InviteForm
  },
{
    path: "/evaluatin-membre",
    name: "evaluatin-membre",
    component: EvaluationMembre
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile
  },
  {
    path: "/",
    name: "membrecomithome",
    component: membrecomithome
  },
  {
    path: "/home",
    name: "home",
    component: Home
  },
  {
  path: "/public-event-details",
  name: "public-event-details",
  component: PublicDetilsEvent
},
   {
  path: "/public-events",
  name: "public-events",
  component: PublicEvents
},
{
  path: "/signup-event",
  name: "signup-event",
  component: SignupEvent
},
   {
    path: "/signup",
    name: "signup",
    component: SignupHome
  },
  
  
  {
    path: "/create-event",
    name: "create-event",
    component: AdministrateurCreateEvent
  },
  {
    path: "/events",
    name: "events",
    component: AdministrateurEvents
  },
  {
    path: "/proposals",
    name: "proposals",
    component: AdministrateurParticiant
  },
  {
    path: "/registration",
    name: "registration",
    component: AdministrateurSoumission
  },
  {
   path:"/event-details/:id",
   name:"event-details",
   component:AdministrateurEventDetails,
   props: true
  },
  {
  path: "/certificates",
  name: "certificates",
  component: CertificatesStatistics 
},
{
  path: "/soumission-form",
  name: "soumission-form",
  component: SoumissionFormulare
}  
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
