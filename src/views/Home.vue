<template>
  <div id="app">
    <FullSection :bg="bg1" class="first-section left-aligned-section">
      <div class="section1-text">
        <p class="small-text">welcome to</p>
        <h1 class="big-text">MedCurrent</h1>
      </div>
    </FullSection>

    <FullSection :bg="bg2" class="left-aligned-section">
      <h2 class="big-text-small">Who Are We?</h2>
      <p class="small-text-small">MedCurrent is a specialized digital platform designed to be the definitive hub for organizing, managing, and promoting scientific and medical events globally. </p>
      <p class="small-text-small" >It provides healthcare professionals, researchers, and students with accurate, up-to-date information on the latest conferences, workshops, and CPD activities, allowing for personalized event discovery and registration.</p>
      <p class="small-text-small" >Simultaneously, it offers event organizers a comprehensive suite of tools for end-to-end event management, including sophisticated abstract submission handling, secure registration, and enhanced global promotion, thereby facilitating continuous medical education and critical knowledge exchange within the healthcare community.</p>
    </FullSection>

    <FullSection :bg="bg3" class="left-aligned-section content-column" >
      <div class="image-text-group">
        <div class="image-item">
          <img :src="bg4" />
          <div class="text-and-button">
            <h3 class="big-text-small">Cardiology Conference</h3>
            <p class="small-text-small">A global event focused on the latest advancements in heart disease diagnosis and treatment. Doctors, researchers, and healthcare professionals gather to share knowledge, new research, and innovative techniques.
             Date: 20-05-2026, Location: Oran, Algeria.</p>
           <!---->
             <router-link 
             :to="{ name: 'signup-event', query: { event: 'Cardiology Conference' } }" 
             class="register-button">
              Register
             </router-link>
             <!---->
          </div>
        </div>
        <div class="image-item">
          <img :src="bg5" />
          <div class="text-and-button">
            <h3 class="big-text-small">The Oncology Symposium</h3>
           <p class="small-text-small"> An Oncology Symposium is a specialized medical conference that gathers leading cancer experts to exchange the latest discoveries, research, and clinical trial results in diagnosis and treatment. Its primary goal is to advance cancer fighting methods and improve patient care by transferring knowledge and unifying global best practices</p>
           <p> Date:30-01-2026, Location: Constantine, Algeria. </p>
            <!---->
           <router-link
           :to="{ name: 'signup-event', query: { event: 'Oncology Symposium' } }"
            class="register-button">
            Register
           </router-link>

           <!---->
          </div>
        </div>
      </div>
      <!--see more-->
      <div class="see-more">
        <router-link to ="/public-events" class="see-more-link">see more</router-link>
        </div>
    </FullSection>

    <FullSection :bg="bg3">
      <h2>LOGIN</h2>
      <form class="login-box">
        <input type="email" placeholder="Email" v-model="loginData.email" />
        <input type="password" placeholder="Password "  v-model="loginData.mot_de_passe" />
        <button type="button" @click="login">login</button>
        <p class="signup-text">
           Don’t have an account?
           <router-link to ="/signup">create an account</router-link>

        </p>
      </form>
       <!--foter-->
    <footer class="footer-simple">
  <div class="footer-content">
    <p>Instagram: <a href="#">@medcurrent</a></p>
    <p>Facebook: <a href="#">@MedCurrent</a></p>
    <p>TikTok: <a href="#">@medcurrent</a></p>
    <p>Phone: +213 123 456 789</p>
  </div>
</footer>
    </FullSection>
  </div>
  
</template>

<script>
import FullSection from "../components/FullSection.vue";
import api from "../services/api";

import bg1 from "@/assets/1.png";
import bg2 from "@/assets/2.png";
import bg3 from "@/assets/3.png";
import bg4 from "@/assets/5.jpg";
import bg5 from "@/assets/6.jpg";

export default {
  name: "App",
  components: { FullSection },

  data() {
    return {
      bg1,
      bg2,
      bg3,
      bg4,
      bg5,

      loginData: {
        email: "",
        mot_de_passe: ""
      }
    };
  },

methods: {
  async login() {
    try {
      const response = await api.post("/login", this.loginData);

      localStorage.setItem("token", response.data.token);

      const role = response.data.user.role;

      
      if (role === "organisateur") {
        this.$router.push("/adminHome");
      } 
      else if (role === "participant") {
        this.$router.push("/public-events");
      } 
      else if (role === "super_administrateur") {
        this.$router.push("/create-event");
      } 
      else if (role === "auteur") {
        this.$router.push("/create-event");
      } 
      else if (role === "membre_comite") {
        this.$router.push("/membrecomithome");
      }
      
      else if (role === "animateur_workshop") {
        this.$router.push("/create-event");
      } 

    } catch (error) {
      console.error(error.response?.data || error);
      alert("Email or password incorrect");
    }
  }
}
};
</script>


<style>

body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  height: auto;
  min-height: 100vh;
}
#app {
  height: auto;
  min-height: 100%;
}


.left-aligned-section {
  display: flex !important;
  align-items: center !important; /* توسيط عمودي */
  justify-content: flex-start !important; /* محاذاة لليسار */
  padding-left: 2%;
  height: 100vh !important;
}


.left-aligned-section .content {
  justify-content: flex-start !important;
  text-align: left !important;
  max-width: none !important;
  padding: 0;
  width: 100%;
}



.big-text {
  font-size: 100px;
  font-weight: 700;
  margin: 0;
  line-height: 1.1;
}

.small-text {
  font-size: 24px;
  font-weight: 300;
  margin: 0;
}

.big-text-small {
  font-size: 60px; 
  font-weight: 700;
  margin: 0;
  line-height: 1.1;
}

.small-text-small {
  font-size: 18px; 
  font-weight: 300;
  margin: 0;
}


.left-aligned-section h2.big-text-small,
.left-aligned-section h3.big-text-small {
  font-size: 60px !important;
}

.left-aligned-section p.small-text-small {
  font-size: 18px !important;
}

 
.section1-text {
  color: white;
  text-align: left;
  z-index: 10;
  width: 100%;
}


.left-aligned-section.content-column .content {
  flex-direction: column !important;
  align-items: flex-start !important;
}

/* الحاوية الرئيسية للمجموعات (تظهر تحت بعضها) */
.image-text-group {
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: flex-start;
}

.image-item {
    display: flex;
    align-items: center; 
    gap: 20px;
}

.image-item img {
    width: 150px;
    height: 200px;
    border-radius: 10px;
    object-fit: cover;
}

.text-and-button {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
}

.register-button {
    padding: 10px 20px;
    background: white;
    color: black;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background 0.3s ease;
}

.register-button:hover {
    background: #200cb3ff;
}

.login-box {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 250px;
  margin: auto;
}

.login-box input {
  padding: 10px;
  border-radius: 6px;
  border: none;
}

.login-box button {
  padding: 10px;
  background: white;
  color: black;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.login-box button:hover {
  background: #200cb3ff;
}
.signup-text{
  font-size: 14px;
  text-align: center;
  color: white;
}
.signup-text a{
  color: #ffffff;
  font-weight: 600;
  text-decoration:underline ;
  cursor: pointer;
}
.signup-text a:hover{
  color:  #200cb3ff;
}
.see-more {
  margin-top: 20px;
  text-align: center;
}

.see-more-link {
  color: white;
  font-weight: 600;
  text-decoration: underline;
  cursor: pointer;
  font-size: 18px;
}

.see-more-link:hover {
  color: #200cb3ff;
}
/*footer*/
footer.footer-simple {
  position: relative;
  margin-left: calc(-50vw + 50%); /* تراجع التباعد الأفقي */
  margin-right: calc(-50vw + 50%);
  width: 100vw !important;  
  left: 0 !important;       
  padding: 15px 40px;
  box-sizing: border-box;
  z-index: 10;
}

.footer-simple {
  width: 100vw;
  background: #002244;
  color: white;
  padding:20px 40px;
  text-align: center;
  margin-top: 120px;
  box-sizing: border-box;
  position: relative;
  left:0;
}
.footer-content {
  width: 1200px;
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