<template>
  <div class="page-wrapper">
    <!-- الـ Header -->
    <header class="topbar">
      <div class="left-title">My Evaluations</div>

      <div class="center-search">
        <input type="text" placeholder="search" v-model="search"
         />
        <span class="icon">🔍</span>
      </div>

      <div class="right-icons" style="position: relative;" >
        <!-- notification icon -->
        <button class="icon-btn" aria-label="notifications" @click="showNotifications = !showNotifications" >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 17H9" stroke="#0b3a72" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M18 8a6 6 0 10-12 0v4l-2 2v1h16v-1l-2-2V8" stroke="#0b3a72" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
         <!-- list -->
         <div v-if="showNotifications" class="notif-dropdown">
         <div v-if="notifications.length === 0" class="empty">
         No notifications
        </div>
        <div v-for="(n, i) in notifications" :key="i" class="notif-item">
          {{ n }}
          </div>
          </div>
          

        <!-- profile image  -->
        <div class="profile-wrap">
          <img :src="profileSrc" alt="profile" class="profile-img"  @click="toggleDropdown"/>
          <!-- list -->
         <div v-if="showDropdown" class="profile-dropdown">
          <div class="profile-header">
              <img :src="profileSrc" alt="profile-small" class="profile-small"/>
              <div class="profile-name">{{ user.name }} {{ user.lastName }}</div>
            </div>
         <div class="profile-info">
         <p><strong>Name:</strong> {{ user.name }}</p>
         <p><strong>LastName:</strong> {{ user.lastName }}</p>
         <p><strong>D.O.B:</strong> {{ user.dob }}</p>

          <p>
          <strong>Email:</strong>
          <input
            type="email"
            v-model="editableEmail"
            @input="updateEmail"
            class="edit-input"
          />
        </p>
             <p>
          <strong>PhoneNumber:</strong>
          <input
            type="tel"
            v-model="editablePhone"
            @input="updatePhone"
            class="edit-input"
          />
        </p>
             <p><strong>Role:</strong> {{ user.role }}</p>
          </div>
         </div>
       </div>
       </div>
    </header>

    <!-- اtitle -->
    <h2 class="page-title">List of Propositions</h2>

    <!-- table+circle -->
    <div class="content-area">
      <div class="table-wrapper">
        <table class="proposals-table">
          <thead>
            <tr>
              <th>Proposal Title</th>
              <th>Type</th>
              <th> Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, idx) in filteredRows" :key="idx">
              <td class="title-td">{{ row.title }}</td>
              <td class="type-td">{{ row.type }}</td>
              <td class="status-td">{{ row.status }}</td>
              <td class="action-td">
                <button class="action-btn" :class="row.status === 'Evaluated' ? 'view' : 'evaluate'">
                  {{ row.status === 'Evaluated' ? 'View' : 'Evaluate' }}
                </button>
              </td>
            <td class="action-td">
              <router-link :to="{ name: 'evaluatin-membre', params: { id: row.id } }">
              <button class="acction-btn" >open</button>
              </router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- circle -->
      <aside class="progress-area">
        <div class="progress-card">
          <svg class="progress-ring" width="140" height="140" viewBox="0 0 120 120">
            <defs></defs>
            <circle class="ring-bg" cx="60" cy="60" r="52" stroke-width="12" fill="none"/>
            <circle
              class="ring-progress"
              cx="60"
              cy="60"
              r="52"
              stroke-width="12"
              fill="none"
              :style="{ strokeDasharray: circumference, strokeDashoffset: strokeOffset }"
              transform="rotate(-90 60 60)"
            />
            <text x="60" y="62" text-anchor="middle" class="progress-text">{{ percent }}%</text>
          </svg>
          <div class="progress-label">Propositions Evaluated</div>
        </div>
      </aside>
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
import profilePlaceholder from "@/assets/10.jpg"; 

export default {
  name: "SecondPage",
  data() {
    return {
      search: "",
      profileSrc: profilePlaceholder, 
      showNotifications: false,
      showDropdown: false,
      notifications: [
        "Your evaluation has been submitted",
        "New proposition assigned",
        "System update scheduled tomorrow"
      ],
      user: {
        name: "Mouhamed",
        lastName: "Benali",
        dob: "30-04-1993",
        email: "Mbenali@gmail.com",
        phoneNumber: "07957011",
        role: "Committee Member",
      },
      editableEmail: "Mbenali@gmail.com",
      editablePhone: "07957011",
      rows: [
        {title: "Blood Gas Analysis" , type: "Poster", status: "Pending" },
        { title: "Study on Diabetes in Adults", type: "Oral", status: "Pending" },
        {title: "Modeling Respiratory Diseases" , type: "Oral",status: "Evaluated" },
        {title: "Modeling Respiratory Diseases" , type: "Oral",status: "Evaluated" }
      ],
    };
  },
      methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    updateEmail() {
      this.user.email = this.editableEmail;
    },
    updatePhone() {
      this.user.phoneNumber = this.editablePhone;
    },
  },
  computed: {
    filteredRows() {
      if (!this.search) return this.rows;
      const q = this.search.toLowerCase();
      return this.rows.filter(r =>
        (r.title || "").toLowerCase().includes(q) ||
        (r.type || "").toLowerCase().includes(q) ||
        (r.status || "").toLowerCase().includes(q)
      );
    },
    percent() {
      if (!this.rows.length) return 0;
      const evaluated = this.rows.filter(r => r.status === "Evaluated").length;
      return Math.round((evaluated / this.rows.length) * 100);
    },
    circumference() {
      const c = 2 * Math.PI * 52;
      return `${c}`;
    },
    strokeOffset() {
      const c = 2 * Math.PI * 52;
      return `${c * (1 - this.percent / 100)}`;
    }
  }
};

</script>
<style scoped>

.page-wrapper {
  padding: 30px 40px;
  font-family: "Segoe UI", Roboto, "Helvetica Neue", Arial;
  color: #092c4c;
  min-height: 100vh;
  box-sizing: border-box;
}


.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 20px;
}

.left-title {
  font-size: 28px;
  font-weight: 700;
  color: #0b3a72;
}

.center-search {
  display: flex;
  position: relative; 
  width: 420px; 
}

.center-search input {
  width: 100%;
  padding: 10px 20px;
  padding-right: 35px;
  border-radius: 12px;
  border: none;
  background: #e9e9e9;
  font-style: italic;
}
.center-search .icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none; 
  font-size: 18px;
}


.right-icons {
  display: flex;
  align-items: center;
  gap: 14px;
}

.icon-btn {
  background: transparent;
  border: none;
  padding: 8px;
  cursor: pointer;
}
/*notifications*/
.notif-dropdown {
  position: absolute;
  top: 40px;          
  right: 0px;       
  width: 250px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0,0,0,0.15);
  overflow: hidden;
  z-index: 999;
  transition: all 0.2s ease;
}

.notif-item {
  padding: 10px 14px;
  border-bottom: 1px solid #eee;
  font-size: 14px;
  color: #0b3a72;
  cursor: pointer;
}

.notif-item:hover {
  background-color: #f5f8ff;
}

.empty {
  padding: 12px;
  text-align: center;
  font-size: 14px;
  color: #666;
}


.profile-wrap {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid rgba(11,58,114,0.1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.profile-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
  cursor: pointer;
  user-select: none;
  display: block;
  margin-bottom: 10px;
}
.profile-dropdown {
  position: absolute;
  top: 60px;  
  right: 0;
  width: 280px;
  max-height: 400px; 
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
  padding: 12px;
  font-family: Arial, sans-serif;
  color: #0b3a72;
  overflow-y: auto; 
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap:12px;
}
.profile-header{
  display: flex; 
  align-items: center;
  gap: 12px; 
  margin-bottom: 12px;
}
.profile-small{
width: 50px;
 height: 50px;
 border-radius: 50%;
  object-fit: cover;
}
.profile-name{
   font-weight: 700; 
   font-size: 16px;
}
.profile-info p {
  margin: 8px 0;
  font-size: 16px;
}
.edit-input {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 6px 10px;
  font-size: 15px;
  width: 100%;
  margin-top: 4px;
  box-sizing: border-box;
  color: #0b3a72;
}

.edit-input:focus {
  outline: none;
  border-color: #0b3a72;
  box-shadow: 0 0 5px rgba(11, 58, 114, 0.5);
}


.page-title {
  text-align: center;
  color: #0b3a72;
  font-size: 32px;
  margin: 12px 0 26px;
  font-weight: 700;
}


.content-area {
  display: flex;
  gap: 30px;
  align-items: flex-start;
}



.table-wrapper {
  flex: 1 1 0%;
}

.proposals-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 18px;
  /**/
  table-layout: fixed;
}

.proposals-table thead th {
  text-align: left;
  padding: 10px 8px;
  font-weight: 700;
  
}
/**/
.proposals-table thead tr {
    
border-bottom: 3px solid #0b3a72;

}

.proposals-table tbody tr {
  border-bottom: 1px solid rgba(11,58,114,0.15);
  height: 80px;
}

.proposals-table td {
  padding: 10px 8px;
  vertical-align: middle;
}


.action-td {
  width: 120px;
}
.acction-btn{
  border: none;
  padding: 12px 18px;
  border-radius: 10px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  background:#0b3a72 ;
}
.action-btn {
  border: none;
  padding: 12px 18px;
  border-radius: 10px;
  color: white;
  font-size: 16px;
  cursor: pointer;
}


.action-btn.evaluate {
  background: #0b4f9e;
}

.action-btn.view {
  background: #0b4f9e;
  opacity: 0.95;
}


.status-td {
  font-style: italic;
  color: #0b3a72;
  width: 140px;
}

.type-td {
  font-style: italic;
  width: 120px;
}

.title-td {
  font-style: italic;
  text-align: left;
  padding-right: 20px;
}


.progress-area {
  width: 200px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-top: 8px;
}

.progress-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

/* circle */
.ring-bg {
  stroke: #e6e6e6;
}

.ring-progress {
  stroke: #0b4f9e;
  transition: stroke-dashoffset 0.6s cubic-bezier(.4, .0, .2, 1);
  stroke-linecap: round;
}

.progress-text {
  font-size: 20px;
  fill: #0b3a72;
  font-weight: 700;
}

.progress-label {
  text-align: center;
  font-size: 13px;
  color: #0b3a72;
  width: 140px;
  font-weight: 600;
}

/* mobile */
@media (max-width: 900px) {
  .center-search input { width: 300px; max-width: 50%; }
  .page-wrapper { padding: 16px; }
  .content-area { flex-direction: column; gap: 18px; }
  .progress-area { width: 100%; justify-content: flex-end; }
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
