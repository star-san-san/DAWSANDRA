<template>
  <div class="content-area">
    <div class="top-left-link">
      <router-link to="invite-form">Send an invitation ! </router-link>
    </div>
    <div class="title-container">
      <h1 class="left-title">Guest / Speaker Details</h1>
    </div>
    <div class="table-warpper">
      <table class="proposals-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="guest in guests" :key="guest.id">
            <td>{{ guest.name }}</td>
            <td>{{ guest.role }}</td>
            <td>{{ guest.email }}</td>
            <td>
              <button class="pdf-btn" @click="downloadPdf(guest)">PDF</button>
            </td>
          </tr>
        </tbody>
      </table>
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
  data() {
    return {
      guests: [
        {
          id: 1,
          name: "Dr. Ahmed Ali",
          role: "Invited Speaker",
          email: "ahmedaa@gmail.com",
          pdf: "link-to-pdf"
        },
        {
          id: 2,
          name: "Dr. Samira Khaled",
          role: "Guest Moderator",
          email: "samira@gmail.com ",
          pdf: "link-to-pdf"
        }
      ]
    };
  },
  methods: {
    downloadPdf(guest) {
      alert("Downloading PDF for " + guest.name);
      // هنا يمكنك ربطها بمكتبة PDF حقيقية
    }
  }
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
.title-container {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 30px;
}

.left-title {
  font-size: 28px;
  font-weight: 700;
  color: #0b3a72;
  margin-left: 20px;
}

.table-warpper {
  overflow-x: auto;
  padding:0 20px ;
  box-sizing: border-box ;
}

.proposals-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 18px;
  table-layout: fixed;
}

.proposals-table thead tr {
  border-bottom: 3px solid #0b3a72;
}

.proposals-table th,
.proposals-table td {
  padding: 10px;
  text-align: left;
}

.pdf-btn {
  padding: 10px 10px;
  color: white;
  border-radius: 10px;
  border: none;
  background: #0b3a72;
  font-size: 15px;
  cursor: pointer;
}

.pdf-btn:hover {
  opacity: 0.8;
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
