<template>
  <div class="top-left-link">
      <router-link to="soumission-form">Send the submission ! </router-link>
    </div>
  <div class="register-page">
    <!-- Title -->
    <h1 class="page-title">Create Account</h1>

    <!-- Form Container -->
    <div class="form-container">
      <form class="register-form">
        <input type="text" placeholder="First Name" v-model="user.firstName"/>
        <input type="text" placeholder="Last Name" v-model="user.lastName"/>
        <input type="date" v-model="user.birthDate"/>
        <input type="email" placeholder="Email" v-model="user.email"/>
        <input type="text" placeholder="Place of Residence" v-model="user.location"/>
        
        <!-- Payment Method Dropdown -->
        <select v-model="user.paymentMethod">
          <option disabled value="">Select Payment Method</option>
          <option>Credit Card</option>
          <option>PayPal</option>
          <option>Bank Transfer</option>
        </select>

        <button type="button" @click="createAccount">
          register
        </button>
      </form>
    </div>
  </div>
  <!--foter-->
    <footer class="footer-simple">
  <div class="footer-content">
    <p>Instagram: <a href="#">@medcurrent</a></p>
    <p>Facebook: <a href="#">@MedCurrent</a></p>
    <p>TikTok: <a href="#">@medcurrent</a></p>
    <p>Phone: +213 123 456 789</p>
  </div>
</footer>
</template>

<script>
export default {
  name: "SignupEvent",
  data() {
    return {
      user: {
        firstName: "",
        lastName: "",
        birthDate: "",
        email: "",
        location: "",
        paymentMethod: ""
      }
    };
    
  },
  methods: {
    createAccount() {
      alert(`Account created for ${this.eventName} (frontend only)`);
      console.log(this.user);
    }
  },
  
};
</script>

<style scoped>
  .top-left-link {
  position: fixed;   
  top: 20px;        
  right: 20px;        
  z-index: 1000;     
}
.top-left-link a {
  text-decoration: none;
  color: #003366;
  font-weight: bold;
  font-size: 16px;
  background: #b8c2d133;
  border-radius: 5px;
}
.top-left-link a:hover {
  background: #534bbc;
  color: #002244;
}

.register-page {
  min-height: 110vh;
  background-color: white; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.page-title {
  color: #003366;
  font-size: 40px;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 20px;
}

.form-container {
  background: #ffffff;
  padding: 50px 20px;
  border-radius: 30px;
  width: 400px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  margin-bottom: 50px;
}

.register-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.register-form input,
.register-form select {
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 16px;
}

.register-form button {
  margin-top: 10px;
  padding: 12px;
  background: #003366;
  color: white;
  border: none;
  border-radius: 25px;
  font-size: 18px;
  cursor: pointer;
}

.register-form button:hover {
  background: #193f66;
}
/*footer*/
.footer-simple {
  background: #002244;
  color: white;
  padding: 10px;
  text-align: center;
  margin-top: 120px;
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
