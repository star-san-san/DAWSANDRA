<template>
  <div class="event-details p-6 bg-gray-100 min-h-screen">
    <!-- عنوان الصفحة -->
    <h1 class="text-2xl font-bold mb-4">Details of Event</h1>

    <!-- بطاقة الحدث -->
    <div class="bg-gray-200 p-6 rounded-lg shadow-md space-y-6">

      <!-- معلومات الحدث الأساسية -->
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

      <!-- اللجنة العلمية -->
      <div>
        <h3 class="font-semibold mb-2">Scientific Committee:</h3>
        <ul class="list-disc list-inside">
          <li>Dr. Ahmed Ali – Committee Chair</li>
          <li>Dr. Samira Khaled – Member of the Judging Panel</li>
        </ul>
        <button @click="addCommitteeMember" class="mt-2 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
          Add Member
        </button>
        <button @click="removeCommitteeMember" class="mt-2 ml-2 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700">
          Remove Member
        </button>
      </div>

      <!-- الجلسات -->
      <div>
        <h3 class="font-semibold mb-2">Sessions:</h3>
        <ul class="list-disc list-inside">
          <li v-for="session in sessions" :key="session.id">{{ session.name }} ({{ session.date }})</li>
        </ul>
        <button @click="addSession" class="mt-2 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
          Add Session
        </button>
        <button @click="removeSession" class="mt-2 ml-2 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700">
          Remove Session
        </button>
      </div>

      <!-- المشاركون والتسجيلات -->
      <div>
        <h3 class="font-semibold mb-2">Participants and Registrations</h3>
        <p>Total Registered: {{ totalRegistered }}</p>
        <p>Accepted: {{ registrationStatus.accepted }}</p>
        <p>Under Review: {{ registrationStatus.underReview }}</p>
        <p>Rejected: {{ registrationStatus.rejected }}</p>
        <button @click="approveRegistration" class="mt-2 px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700">
          Approve
        </button>
        <button @click="rejectRegistration" class="mt-2 ml-2 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700">
          Reject
        </button>
      </div>

    </div>
  </div>
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

// دوال الأزرار
function addCommitteeMember() {
  alert('Add Committee Member clicked!');
}

function removeCommitteeMember() {
  alert('Remove Committee Member clicked!');
}

function addSession() {
  alert('Add Session clicked!');
}

function removeSession() {
  alert('Remove Session clicked!');
}

function approveRegistration() {
  alert('Approve Registration clicked!');
}

function rejectRegistration() {
  alert('Reject Registration clicked!');
}
</script>

<style scoped>
/* الأساسيات */
body {
  margin: 0;
  padding: 0;
  font-family: 'Arial', sans-serif;
  background-color: #f3f4f6;
  color: #1f2937;
}

/* حاوية الصفحة */
.event-details {
  padding: 2rem;
  min-height: 100vh;
}

/* عنوان الصفحة */
.event-details h1 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #003366; /* أزرق داكن */
}

/* بطاقة الحدث */
.event-details .bg-gray-200 {
  background-color: #e5e7eb; /* رمادي فاتح */
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* عنوان الحدث */
.event-details h2 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #003366;
}

/* وصف الحدث */
.event-details p {
  font-size: 1rem;
  line-height: 1.6;
}

/* التاريخ والمكان */
.event-details p.text-sm {
  font-size: 0.875rem;
  color: #4b5563;
  margin-top: 0.5rem;
}

/* العناوين الفرعية */
.event-details h3 {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #003366;
}

/* القوائم */
.event-details ul {
  list-style-type: disc;
  padding-left: 1.5rem;
  color: #003366;
}

.event-details ul li {
  margin-bottom: 0.5rem;
}

/* الأزرار */
.event-details button {
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
}

button:hover {
  opacity: 0.9;
}

/* ألوان الأزرار */
.bg-blue-600 {
  background-color: #1d4ed8;
  color: white;
}

.bg-blue-600:hover {
  background-color: #1e40af;
}

.bg-red-600 {
  background-color: #dc2626;
  color: white;
}

.bg-red-600:hover {
  background-color: #b91c1c;
}

.bg-green-600 {
  background-color: #16a34a;
  color: white;
}

.bg-green-600:hover {
  background-color: #15803d;
}

/* التباعد بين الأزرار */
button + button {
  margin-left: 0.5rem;
}

</style>
<!-- عم يغطي المطلوب جزئيًا (عرض البرنامج، جلسات، لجنة، مشاركين).

لكي يغطي المطلوب بالكامل، يجب:

إضافة حقل sessionId أو ما شابه لكل مداخلة.

عرض المداخلات تحت الجلسات المناسبة.

تعديل الأزرار لتسمح بإضافة/تعديل/حذف الجلسات فعليًا وليس مجرد تنبيه.
-->