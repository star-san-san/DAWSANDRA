<template>
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
.register-page {
  min-height: 110vh;
  background-color: white; /* الخلفية بيضاء */
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
</style>
