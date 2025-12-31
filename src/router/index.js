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

import membrecomithome from "@/views/membrecomithome.vue";



const routes = [
  {
  path: "/adminHome",
  name: "adminHome",
  component: AdministrateurHome
},
 {
    path: "/membrecomithome",
    name: "membrecomithome",
    component: membrecomithome
  },
  {
    path: "/",
    name: "home",
    component: Home
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
    name: "createEvent",
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
}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
