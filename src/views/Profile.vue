<template>
  <div class="page-wrapper" @click="closeAll">

    <!-- HEADER -->
    <header class="topbar" @click.stop>

      <div class="left-title">Mes Évaluations</div>

      <div class="center-search">
        <input type="text" placeholder="search" v-model="search" />
      </div>

      <!-- RIGHT ICONS -->
      <div class="right-icons" @click.stop>

        <!-- NOTIFICATION ICON -->
        <div class="notif-icon" @click.stop="toggleNotifications">
          🔔
        </div>

        <!-- NOTIFICATION DROPDOWN -->
        <div v-if="showNotifications" class="notif-menu" @click.stop>
          <p v-if="notifications.length === 0">No notifications</p>
          <p v-for="(n, i) in notifications" :key="i" class="notif-item">
            {{ n }}
          </p>
        </div>

        <!-- PROFILE IMAGE -->
        <img
          :src="profileSrc"
          class="profile-img"
          @click.stop="toggleProfile"
        />

        <!-- PROFILE DROPDOWN -->
        <div v-if="showProfile" class="profile-menu" @click.stop>

          <h3 class="profile-title">
            {{ user.name }} {{ user.lastName }}
          </h3>

          <p><strong>Name:</strong> {{ user.name }}</p>

          <p><strong>LastName:</strong> {{ user.lastName }}</p>

          <p><strong>D.O.B:</strong> {{ user.dob }}</p>

          <p>
            <strong>Email:</strong>
            <input v-model="editableEmail" @input="updateEmail" class="profile-input" />
          </p>

          <p>
            <strong>Phone:</strong>
            <input v-model="editablePhone" @input="updatePhone" class="profile-input" />
          </p>

          <p><strong>Role:</strong> {{ user.role }}</p>
        </div>

      </div>
    </header>

    <!-- TITLE -->
    <h2 class="page-title">List of Propositions</h2>

    <!-- TABLE + ASIDE -->
    <div class="content-area">
      <div class="table-wrapper">
        <table class="proposals-table">
          <thead>
            <tr>
              <th></th>
              <th>Status</th>
              <th>Type</th>
              <th>Proposal Title</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, idx) in filteredRows" :key="idx">
              <td class="action-td">
                <button class="action-btn" :class="row.status === 'Evaluated' ? 'view' : 'evaluate'">
                  {{ row.status === 'Evaluated' ? 'View' : 'Evaluate' }}
                </button>
              </td>
              <td class="status-td">{{ row.status }}</td>
              <td class="type-td">{{ row.type }}</td>
              <td class="title-td">{{ row.title }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <aside class="progress-area">
        <div class="progress-card">
          <svg class="progress-ring" width="140" height="140" viewBox="0 0 120 120">
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
      showProfile: false,

      notifications: [
        "Your evaluation has been submitted",
        "New proposition assigned",
        "System maintenance tonight"
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
        { status: "Pending", type: "Poster", title: "Blood Gas Analysis" },
        { status: "Pending", type: "Oral", title: "Study on Diabetes in Adults" },
        { status: "Evaluated", type: "Oral", title: "Modeling Respiratory Diseases" },
        { status: "Evaluated", type: "Oral", title: "Modeling Respiratory Diseases" }
      ],
    };
  },

  methods: {
    toggleNotifications() {
      this.showNotifications = !this.showNotifications;
      this.showProfile = false;
    },

    toggleProfile() {
      this.showProfile = !this.showProfile;
      this.showNotifications = false;
    },

    updateEmail() {
      this.user.email = this.editableEmail;
    },

    updatePhone() {
      this.user.phoneNumber = this.editablePhone;
    },

    closeAll() {
      this.showNotifications = false;
      this.showProfile = false;
    }
  },

  computed: {
    filteredRows() {
      if (!this.search) return this.rows;
      const q = this.search.toLowerCase();
      return this.rows.filter(r =>
        r.title.toLowerCase().includes(q) ||
        r.type.toLowerCase().includes(q) ||
        r.status.toLowerCase().includes(q)
      );
    },

    percent() {
      if (!this.rows.length) return 0;
      const evaluated = this.rows.filter(r => r.status === "Evaluated").length;
      return Math.round((evaluated / this.rows.length) * 100);
    },

    circumference() {
      return 2 * Math.PI * 52;
    },

    strokeOffset() {
      return this.circumference * (1 - this.percent / 100);
    }
  }
};
</script>
<style scoped>
.page-wrapper {
  padding: 30px 40px;
  font-family: "Segoe UI", Roboto;
  color: #092c4c;
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.left-title {
  font-size: 28px;
  font-weight: 700;
  color: #0b3a72;
}

.center-search input {
  width: 420px;
  padding: 10px 20px;
  border-radius: 12px;
  border: none;
  background: #e9e9e9;
  text-align: center;
}

/* RIGHT ICONS */
.right-icons {
  display: flex;
  align-items: center;
  gap: 16px;
  position: relative;
}

/* NOTIFICATION ICON */
.notif-icon {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 2px solid #003366;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 18px;
}

/* NOTIFICATION DROPDOWN */
.notif-menu {
  position: absolute;
  top: 50px;
  right: 110px;
  width: 230px;
  background: #fff;
  border-radius: 10px;
  padding: 12px;
  box-shadow: 0 3px 10px #0003;
  z-index: 1000;
}

.notif-item {
  padding: 6px 0;
  color: #0b3a72;
}

/* PROFILE IMAGE */
.profile-img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 2px solid #ccc;
  cursor: pointer;
}

/* PROFILE DROPDOWN */
.profile-menu {
  position: absolute;
  top: 55px;
  right: 0;
  width: 250px;
  background: #fff;
  padding: 12px;
  box-shadow: 0 3px 10px #0003;
  border-radius: 10px;
  z-index: 1000;
}

.profile-title {
  font-size: 17px;
  font-weight: bold;
}

.profile-input {
  width: 100%;
  padding: 6px;
  margin-top: 4px;
  border: 1px solid #aaa;
  border-radius: 6px;
}

/* TITLE */
.page-title {
  text-align: center;
  color: #0b3a72;
  font-size: 32px;
  margin: 20px 0;
  font-weight: 700;
}

/* TABLE AREA */
.content-area {
  display: flex;
  gap: 30px;
}

.table-wrapper {
  flex: 1;
}

.proposals-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 18px;
}

.proposals-table thead tr {
  border-bottom: 3px solid #0b3a72;
}

.proposals-table td,
.proposals-table th {
  padding: 10px;
}

.action-btn {
  padding: 10px 16px;
  border-radius: 10px;
  border: none;
  color: white;
  background: #0b4f9e;
}

.progress-area {
  width: 200px;
}

.ring-bg {
  stroke: #e6e6e6;
}

.ring-progress {
  stroke: #0b4f9e;
  stroke-linecap: round;
  transition: stroke-dashoffset .5s;
}

.progress-text {
  fill: #0b3a72;
  font-size: 20px;
  font-weight: 700;
}
</style>
