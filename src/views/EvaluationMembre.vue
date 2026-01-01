<template>
  <div class="page">
    <h1 class="title">Evaluate</h1>

    <div class="content">
      <!-- LEFT SIDE -->
      <div class="left">
        <h2>Blood Gas Analysis</h2>

        <p>
         <i> Blood Gas Analysis</i> <i>(BGA)</i> is a rapid diagnostic test that 
         measures blood pH oxygen <i>(O₂)</i>, and carbon dioxide
         <i>(CO₂)</i> levels to assess the body’s respiratory and metabolic status
         It provides clinicians with crucial information about how effectively the lungs are delivering oxygen and
         lungs are delivering oxygen and
         removing carbon dioxide, as well as how well the kidneys are maintaining acid base balance.
         BGA is commonly used in emergency and critical care settings because it helps detect  
          life-threatening abnormalities such as respiratory failure
          metabolic acidosis, and metabolic alkalosis.
          It also assists in monitoring patients on mechanical ventilation, evaluating the effectiveness 
          of oxygen therapy and guiding treatment decisions during acute illnesses
         Additionally, blood gas results can reveal underlying conditions like sepsis, diabetic ketoacidosis
           dehydration or renal impairment.
         Clinicians rely on this test to make rapid and precise interventions
         ensuring timely management of patients with unstable physiological states
        </p>

        <button class="pdf-btn">pdf</button>
      </div>

      <!-- RIGHT SIDE -->
      <div class="right">
        <h2>Notation</h2>

        <!-- Stars Section -->
      <div class="ratings">
      <div 
       class="rating-row" 
       v-for="(rating, index) in ratings" 
      :key="index"
        >
       <span>{{ rating.label }}:</span>
       <span class="stars">
       <span 
        v-for="i in 5" 
        :key="rating.key + i"
        class="star"
        :class="{ active: i <= rating.value }"
        @click="rating.value = i"
      >
        {{ i <= rating.value ? "★" : "☆" }}
      </span>
    </span>
  </div>
</div>


        <h3>Commentaires</h3>
        <textarea v-model="comment" class="comment-box"></textarea>

        <h3>Décision</h3>

        <div class="decision">
          <label>
            <input type="radio" value="accepted" v-model="decision">
            Accepté
          </label>

          <label>
            <input type="radio" value="refused" v-model="decision">
            Refusé
          </label>

          <label>
            <input type="radio" value="correct" v-model="decision">
            À corriger
          </label>
        </div>

        <button class="save-btn" @click="save">save</button>
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
import { ref , reactive  } from "vue";
const ratings = reactive([
  { label: "Pertinence", value: 0, key: "p" },
  { label: "Qualité", value: 0, key: "q" },
  { label: "Originalité", value: 0, key: "o" }
]);

const comment = ref("");
const decision = ref("accepted");

function save() {
  console.log({
     ratings: ratings.map(r => ({ label: r.label, value: r.value })),
    comment: comment.value,
    decision: decision.value
  });
  alert("Saved!");
}
</script>

<style scoped>
.page {
  font-family: "Arial", sans-serif;
  padding: 30px;
}

.title {
  text-align: center;
  color: #003366;
  margin-bottom: 20px;
}

.content {
  display: flex;
  justify-content: space-between;
}

.left {
  width: 50%;
  padding-right: 40px;
}
.left p {
  margin-top: 60px;   /* يمكنك تعديل القيمة كما تريد */
}


.pdf-btn {
  margin-top: 20px;
  background: #003366;
  color: white;
  padding: 10px 30px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
}

.right {
  width: 30%;
  background: #002d5c;
  color: white;
  padding: 22px;
  border-radius: 16px;
}

.rating-row {
  margin-bottom: 8px;
  font-size: 16px;
}

.stars {
  margin-left: 10px;
}

.star {
  cursor: pointer;
  font-size: 20px;
  color:#466b93 ;

}

.star.active {
  color: white;
}

.comment-box {
  width: 80%;
  height: 35px;
  border-radius: 12px;
  border: none;
  padding: 6px 10px;
  font-size: 14px;
  margin-bottom: 20px;
}

.decision label {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 16px;
}

.save-btn {
  margin-top: 15px;
  background: white;
  color: #003366;
  padding: 8px 24px;
  border-radius: 16px;
  border: none;
  cursor: pointer;
  font-size: 15px;
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