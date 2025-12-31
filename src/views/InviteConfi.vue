<template>
  <div class="content-area">
    <!-- عنوان الصفحة -->
    <div class="title-container">
      <h1 class="left-title">Guest / Speaker Details</h1>
    </div>

    <!-- جدول المعلومات -->
    <div class="table-warpper">
      <table class="proposals-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Institution</th>
            <th>Session / Talk</th>
            <th>Date & Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="guest in guests" :key="guest.id">
            <td>{{ guest.name }}</td>
            <td>{{ guest.role }}</td>
            <td>{{ guest.institution }}</td>
            <td>{{ guest.session }}</td>
            <td>{{ guest.date }}</td>
            <td>
              <button class="pdf-btn" @click="downloadPdf(guest)">PDF</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
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
          institution: "University of Cairo",
          session: "AI in Biology",
          date: "15-03-2026 | 09:00 AM",
          pdf: "link-to-pdf"
        },
        {
          id: 2,
          name: "Dr. Samira Khaled",
          role: "Guest Moderator",
          institution: "University of Tunis",
          session: "Round Table: Future of Medicine",
          date: "16-03-2026 | 02:00 PM",
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
</style>
