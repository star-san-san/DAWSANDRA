<template>
  <div class="header">
    <div class="center-container">
      <div class="center-search">
        <input type="text" placeholder="search" v-model="search"/>
        <span class="icon">🔍</span>
      </div>
    </div>
  </div>

  <div class="title-container">
    <h1 class="left-title">Certificates & Statistics</h1>
  </div>

  <!-- Table for participants -->
  <div class="content-area">
    <div class="table-warpper">
      <table class="proposals-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Participant Type</th>
            <th>Status</th>
            <th>Generate Certificate</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="p in filteredParticipants" :key="p.id">
            <td>{{ p.name }}</td>
            <td>{{ p.type }}</td>
            <td>{{ p.status }}</td>
            <td>
              <button class="pdf-btn" @click="generateCertificate(p)">
                Generate
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Statistics section -->
  <div class="content-area" style="margin-top: 30px;">
    <h2>Statistics</h2>
    <p>Total Submissions: {{ totalSubmissions }}</p>
    <p>Acceptance Rate: {{ acceptanceRate }}%</p>

    

    <h3>Distribution by Countries:</h3>
    <ul>
      <li v-for="(count, country) in countries" :key="country">
        {{ country }}: {{ count }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      participants: [
        { id: 1, name: "Ali Ahmed", type: "Participant", status: "Accepted" },
        { id: 2, name: "Sara Khaled", type: "Reviewer", status: "Accepted" },
        { id: 3, name: "Mona Salah", type: "Committee Member", status: "Accepted" }
      ],
      totalSubmissions: 100,
      acceptanceRate: 80,
      countries: {
        "Algeria": 50,
        "Tunisia": 30,
        "Morocco": 20
      }
    };
  },
  computed: {
    filteredParticipants() {
      return this.participants.filter(p =>
        p.name.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  },
  methods: {
    generateCertificate(p) {
      alert(`Certificate generated for ${p.name}`);
      
    }
  }
};
</script>

<style scoped>
.header {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.title-container {
  display: flex;
  justify-content: flex-start;
}

.left-title {
  margin-top: 40px;
  margin-bottom: 20px;
  font-size: 28px;
  font-weight: 700;
  color: #0b3a72;
  margin-left: 20px;
}

.center-container {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding-right: 20px;
  padding-top: 10px;
}

.center-search {
  position: relative;
  display: flex;
  align-items: center;
  margin-right: 20px;
  padding-top: 10px;
}

.center-search input {
  padding: 10px 40px 10px 20px;
  width: 300px;
  border-radius: 12px;
  border: none;
  background: #e9e9e9;
  text-align: center;
  flex: 1;
}

.center-search .icon {
  position: absolute;
  right: 15px;
  pointer-events: none;
  font-size: 18px;
}

.content-area {
  display: block;
   padding:0 20px ;
  box-sizing: border-box ;
}

.table-warpper {
  flex: 1;
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
  background-color: #094a86;
}
</style>
