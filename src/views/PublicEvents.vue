<template>
  <div class="container">

    <!-- Title + Search -->
    <div class="top-bar">
      <h1 class="title">Events</h1>

      <div class="search-box">
        <input 
          type="text" 
          v-model="search"
          placeholder="search"
        />
        <span class="icon">🔍</span>
      </div>
    </div>

    <!-- Upcoming Events -->
    <div class="section">
      <table class="event-table">

        <thead>
          <tr>
            <th>title</th>
            <th>Description</th>
            <th>Dates</th>
            <th>Location</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="event in filteredUpcoming" :key="event.id">
            <td class="title-col">{{ event.title }}</td>
            <td class="desc-col">{{ event.description }}</td>
            <td>{{ event.dates }}</td>
            <td>{{ event.location }}</td>
            <td>
              <router-link :to="{ name: 'public-event-details', params: { id: event.id } }">
              <button class="details-btn" >Details</button>
              <!--<button class="details-btn" @click="viewDetails(event)">Details</button>
-->
              </router-link>
            </td>
          </tr>
        </tbody>

      </table>
    </div>
    <div class="separator-line"></div>
    <!-- Archive -->
    <h2 class="archive-title">Archive</h2>

    <div class="section">
      <table class="event-table">

        <tbody>
          <tr v-for="event in filteredArchive" :key="event.id">
            <td class="title-col">{{ event.title }}</td>
            <td class="date-col">{{ event.dates }}</td>
            <td class="location-col">{{ event.location }}</td>
           <td>
            <router-link :to="{ name: 'public-event-details', params: { id: event.id } }">
            <button class="details-btn" >Details</button>
            </router-link>
              
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
      search: "",
      upcoming: [
        {
          id: 1,
          title: "Cancer",
          description:
            "Cancer is a group of diseases characterized by the uncontrolled growth and spread of abnormal cells.",
          dates: "1-5/12/2025",
          location: "mariot-constantine",
        },
        {
          id: 2,
          title: "colonoscopy",
          description:
            "A colonoscopy is a common medical procedure used to examine the inner lining of the colon.",
          dates: "4-6/4/2026",
          location: "univ-constantine3",
        },
        {
            id: 3,
            title:"AI in Biological Research",
             description:
            "Artificial Intelligence accelerates biological research by efficiently analyzing massive and complex datasets like genomics.It is used to accurately predict drug targets and identify disease markers, making the discovery of new therapies much faster.",
          dates: "4-5/7/2026",
          location: "univ-constantine1",
        },
      ],

      archive: [
        {
          id: 3,
          title: "Genetic Diabetes",
          dates: "5-7/3/2021",
          location: "mariot-constantine",
        },
        {
          id: 4,
          title: "Thyroid Gland",
          dates: "1-5/5/2020",
          location: "univ-constantine3",
        },
        {
          id: 5,
          title: "Poliomyelitis",
          dates: "30-31/1/2019",
          location: "univ-constantine1",
        },
        {
            id: 6,
          title: "World Health Expo",
          dates: "25-27/2/2019",
          location: "univ-constantine1", 
        },
        {
             id: 7,
          title: "MEDICA",
          dates: "30-31/1/2018",
          location: "univ-oran1",
        },
      ],
    };
  },

  computed: {
    filteredUpcoming() {
      return this.upcoming.filter(e =>
        e.title.toLowerCase().includes(this.search.toLowerCase())
      );
    },
    filteredArchive() {
      return this.archive.filter(e =>
        e.title.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },

  methods: {
    /*viewDetails(e) {
      alert("Details for " + e.title);
    }*/
  }
};
</script>



<style scoped>
/* CONTAINER */
.container {
  padding: 20px;
  font-family: "Arial";
}

/* TITLE & SEARCH */
.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
       margin-top: 40px;
        margin-bottom: 70px;
        font-size: 28px;
        font-weight: 700;
        color:#0b3a72;
        margin-left: 500px;
}

/* SEARCH BOX - SAME AS YOUR IMAGE */
.search-box {
  position: relative;
  display: flex;
  align-items: center;
  background: #eee;
  padding: 5px 15px;
  border-radius: 20px;
  width: 300px;
  margin-top: -50px;
  
}

.search-box input {
  border: none;
  background: none;
  outline: none;
  width: 100%;
  font-size: 14px;
  padding: 10px 40px 10px 20px;
  text-align: center;
  
  
}

.search-box .icon{
  position: absolute;
  right: 10px;
  font-size: 16px;
  pointer-events: none;
}

.icon {
  margin-left: 5px;
}

/* TABLE SECTION */
.section {
  background: #e7e7e7;
  border-radius: 15px;
  padding: 20px;
  margin-top: 20px;
}

.event-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 10px;
}

.event-table th {
  text-align: left;
  font-weight: bold;
}

.title-col {
  font-weight: bold;
  width: 100px;
}

.desc-col {
  width: 350px;
  font-size: 14px;
}

.date-col, .location-col {
  font-weight: bold;
}
.location-col{
 min-width: 300px;
}

/* DETAILS BUTTON */
.details-btn {
  background: #0a3a70;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 13px;
}

.details-btn:hover {
  background: #07294f;
}

/* ARCHIVE TITLE */
.archive-title {
  text-align: center;
  margin-top: 20px;
  font-weight: bold;
}
.separator-line{
 width: 100%;
 height: 1px ;
 background: #bfbfbf;
 margin: 30px 0 ;
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
