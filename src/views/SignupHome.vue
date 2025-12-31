<template>
  <div class="register-page">
    
    <h1 class="page-title">Create Account</h1>

    <div class="form-container">
      <form class="register-form" @submit.prevent="createAccount">
        <input type="text" placeholder="Nom" v-model="user.nom" required />
        <input type="text" placeholder="Prenom" v-model="user.prenom" required />
        <input type="email" placeholder="Email" v-model="user.email" required />
        <input type="password" placeholder="Mot de passe" v-model="user.mot_de_passe" required />

        <button type="submit">Create</button>
      </form>
    </div>
  </div>
</template>

<script>
// استدعاء api.js للتواصل مع الباك
import api from "../services/api"; 

export default {
  name: "CreateAccount",
  data() {
    return {
      user: {
        nom: "",
        prenom: "",
        email: "",
        mot_de_passe: ""
      }
    };
  },
  methods: {
    async createAccount() {
      try {
        // إرسال البيانات إلى API
        const response = await api.post("/register", this.user);
        alert("Account created successfully!");
        console.log(response.data);
        //  إعادة التوجيه لصفحة تسجيل الدخول
      } catch (error) {
        console.error(error.response ? error.response.data : error);
        alert("Failed to create account. Check console for details.");
      }
    }
  }
};
</script>

<style scoped>
.register-page {
  min-height: 100vh;
  background-image: url("@/assets/2.png");
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.page-title {
  color: white;
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 20px;
}

.form-container {
  background: white;
  padding: 50px 20px;
  border-radius: 30px;
  width: 400px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.register-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.register-form input {
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 16px;
}

.register-form button {
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
</style>

