<template>
  <div class="page" @click="closeAll">

    <!-- === TITLE IN TOP CENTER === -->
    <h1 class="title">MedCurrent Dashboard</h1>
  
    <!-- === TOP RIGHT ICONS === -->
    <div class="top-right">

      <!-- NOTIFICATIONS ICON -->
      <div class="notify-icon" @click.stop="toggleNotifications">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 17H9" stroke="#0b3a72" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M18 8a6 6 0 10-12 0v4l-2 2v1h16v-1l-2-2V8" stroke="#0b3a72" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
      </div>

      <!-- PROFILE IMAGE -->
      <img
        src="@/assets/10.jpg"
        class="profile-img"
        @click.stop="toggleProfile"
      />

      <!-- PROFILE MENU -->
      <div
        v-if="showProfile"
        class="dropdown profile"
        @click.stop
      >
        <h3>Profile Info</h3>
        <label>First Name:<input v-model="user.firstName" /></label>
        <label>Last Name:<input v-model="user.lastName" /></label>
        <label>Phone:<input v-model="user.phone" /></label>
        <label>Birthdate:<input type="date" v-model="user.birthdate" /></label>
        <label>Email:<input v-model="user.email" /></label>
      </div>

      <!-- NOTIFICATION MENU -->
      <div
        v-if="showNotifications"
        class="dropdown notify"
        @click.stop
      >
        <h3>Notifications</h3>
        <p>No notifications</p>
      </div>

    </div>
    

    <!-- BUTTONS -->
    <div class="buttons">
      <button @click="goTo('/create-event')" >Create Event</button>
      <button @click="goTo('/events')" >View Events</button>
      <button @click="goTo('/proposals')" >Participants</button>
      <button @click="goTo('/registration')" >Submissions</button>
      <button @click="goTo('/certificates')" >Certificates</button>
      <button @click="goTo('/invitie')" >Guest / Speaker Details</button>
    </div>

  </div>
  <!---->
<footer class="footer-simple">
  <div class="footer-content">
    <p>Instagram: <a href="#">@medcurrent</a></p>
    <p>Facebook: <a href="#">@MedCurrent</a></p>
    <p>TikTok: <a href="#">@medcurrent</a></p>
    <p>Phone: +213 123 456 789</p>
  </div>
</footer>


  <!---->
</template>

<script setup>
  /**/
 import { useRouter } from "vue-router";

 const router = useRouter();
  /**/
import { ref } from "vue";

const showProfile = ref(false);
const showNotifications = ref(false);

const user = ref({
  firstName: "John",
  lastName: "Doe",
  phone: "+123456789",
  birthdate: "1990-01-01",
  email: "john@example.com",
});

function toggleProfile() {
  showProfile.value = !showProfile.value;
}

function toggleNotifications() {
  showNotifications.value = !showNotifications.value;
}

function closeAll() {
  showProfile.value = false;
  showNotifications.value = false;
}
/**/
  function goTo(page) {
  router.push(page);
}

/**/
</script>

<style scoped>
  
.page {
  padding: 40px;
  position: relative;
  min-height: 100vh;
  background: white;
}

/* TITLE AT TOP CENTER */
.title { 
   position: absolute; 
   top: 110px; 
   margin: 0px;
   left: 50%; 
   transform: translateX(-50%); 
   font-size: 33px; 
   color: #003366;
     
  }



/* TOP RIGHT AREA */
.top-right {
  position: absolute;
  top: 15px;
  right: 50px;
  display: flex;
  align-items: center;
  gap: 30px;
}

/* NOTIFICATION ICON STYLE */
.notify-icon {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.notify-icon .bell {
  font-size: 20px;
}

/* PROFILE IMAGE */
.profile-img {
  width: 55px;
  height: 55px;
  border-radius: 50%;
  border: 2px solid #ccc;
  cursor: pointer;
}

/* DROPDOWNS */
.dropdown {
  position: absolute;
  top: 60px;
  background: white;
  padding: 15px;
  width: 230px;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.2);
  text-align: left;
  z-index: 1000;
}

.notify {
  right: 70px;
}

.profile {
  right: 0;
}

.dropdown label {
  display: block;
  margin-bottom: 12px;
  font-weight: bold;
  font-size: 14px;
}

.dropdown input {
  width: 100%;
  padding: 6px;
  border: 1px solid #aaa;
  border-radius: 5px;
  margin-top: 3px;
}

/* BUTTONS */
.buttons {
  margin-top: 190px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  align-items: center;
}

button {
  width: 500px;
  padding: 12px;
  background: #003366;
  color: white;
  border: none;
  border-radius: 30px;
  font-size: 20px;
  cursor: pointer;
}

button:hover {
  background: #002244;
}
/*footer*/
.footer-simple {
  background: #002244;
  color: white;
  padding: 20px;
  text-align: center;
}

.footer-simple a {
  color: white;
  text-decoration: underline;
  margin: 0 5px;
}

.footer-simple a:hover {
  color: #ffd700;
}

</style>
