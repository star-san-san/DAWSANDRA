<template>
  <div class="event-details p-6 bg-gray-100 min-h-screen">
    <div class="top-left-link">
      <router-link to="soumission-form">Send the submission ! </router-link>
    </div>

    <h1 class="text-2xl font-bold mb-4">Details of Event</h1>

    <div class="bg-gray-200 p-6 rounded-lg shadow-md space-y-6">

      <div>
        <h2 class="text-xl font-semibold mb-2">🤖 AI in Biological Research</h2>
        <p class="mb-2">
            Artificial Intelligence (AI) is rapidly transforming biological research by accelerating the
            e analysis of vast and complex datasets, such as genomic sequences, protein structures, and cell images. 
            AI tools, particularly Machine Learning, are used to predict drug targets, identify disease biomarkers, and model the behavior of biological systems with high accuracy.
             This capability significantly speeds up the discovery of new therapies and offers a deeper understanding of life's fundamental processes, making the research process faster and more efficient.
          </p>
        <p class="text-sm">15-3-2026 | Univ-Constantine1</p>
      </div>

      <div>
        <h3 class="font-semibold mb-2">Scientific Committee:</h3>
        <ul class="list-disc list-inside">
          <li>Dr. Ahmed Ali – Committee Chair</li>
          <li>Dr. Samira Khaled – Member of the Judging Panel</li>
        </ul>
      </div>

      <div>
        <h3 class="font-semibold mb-2">Sessions:</h3>
        <ul class="list-disc list-inside">
          <li v-for="session in sessions" :key="session.id">{{ session.name }} ({{ session.date }})</li>
        </ul>
        
      </div>

      <div>
        <h3 class="font-semibold mb-2">Participants and Registrations</h3>
        <p>Total Registered: {{ totalRegistered }}</p>
        <p>Accepted: {{ registrationStatus.accepted }}</p>
        <p>Under Review: {{ registrationStatus.underReview }}</p>
        <p>Rejected: {{ registrationStatus.rejected }}</p>
        
      </div>

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

<script setup>
import { reactive, ref } from 'vue';

// بيانات الجلسات
const sessions = reactive([
  { id: 1, name: 'Session 1: Artificial Intelligence and its Applications', date: 'March 15, 2026 – 9:00 AM' },
  { id: 2, name: 'Session 2: Artificial Intelligence and Biology', date: 'March 15, 2026 – 11:00 AM' },
]);

// بيانات التسجيلات
const totalRegistered = ref(120);
const registrationStatus = reactive({
  accepted: 80,
  underReview: 30,
  rejected: 10,
});


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
body {
  margin: 0;
  padding: 0;
  font-family: 'Arial', sans-serif;
  background-color: #f3f4f6;
  color: #1f2937;
}

.event-details {
  padding: 2rem;
  min-height: 100vh;
}

.event-details h1 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #003366; 
}

.event-details .bg-gray-200 {
  background-color: #e5e7eb; 
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.event-details h2 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #003366;
}

.event-details p {
  font-size: 1rem;
  line-height: 1.6;
}

.event-details p.text-sm {
  font-size: 0.875rem;
  color: #4b5563;
  margin-top: 0.5rem;
}

.event-details h3 {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #003366;
}

.event-details ul {
  list-style-type: disc;
  padding-left: 1.5rem;
  color: #003366;
}

.event-details ul li {
  margin-bottom: 0.5rem;
}
/*fotter*/

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
