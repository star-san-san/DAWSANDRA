<template>
  <div class="create-wrapper">

    <h1 class="title">Create an event</h1>
     <!--form ابحثي عن و label-->
    <form class="form" @submit.prevent="saveEvent">

      <div class="row">
        <label>Event Title</label>
        <textarea placeholder="title" v-model="event.titre"></textarea>
      </div>

      <div class="row">
        <label>Description</label>
        <textarea placeholder="description" v-model="event.description"></textarea>
      </div>

      <div class="row">
        <label>Theme</label>
        <textarea placeholder="theme" v-model="event.theme"></textarea>
      </div>

      <div class="row">
        <label>Location</label>
        <textarea placeholder="location" v-model="event.lieu"></textarea>
      </div>

      <div class="row">
        <label>Start Date</label>
        <textarea placeholder="Start Date" v-model="event.date_debut"></textarea>
      </div>

      <div class="row">
        <label>End Date</label>
        <textarea placeholder="End Date" v-model="event.date_fin"></textarea>
      </div>


      <!--                  -->
       <div class="session-row">
  <h2 class="section-title">Scientific Sessions</h2>
  <div
    class="row dynamic"
    v-for="(session,index) in event.sessions"
    :key="index"
  >
    <textarea placeholder="Session Title" v-model="session.title"></textarea>
    <textarea placeholder="Time" v-model="session.time"></textarea>
    <textarea placeholder="Room" v-model="session.room"></textarea>
    <textarea placeholder="Moderator" v-model="session.moderator"></textarea>
    
    <button type="button" class="add-btn" @click="addSession">
    add+
    </button>
  </div>
</div>

      <!--                  -->
      <div class="committee-row">
       <h2 class="section-title">Scientific Committee</h2>
       <div
       class="row dynamic"
       v-for ="(member,index) in event.committee"
       :key="index" >
       <textarea 
       placeholder="Name"
       v-model="member.name"></textarea>
       <textarea 
       placeholder="Institution"
       v-model="member.institution"></textarea>
       <textarea placeholder="Role" v-model="member.role"></textarea>
       <textarea 
       placeholder="Email"
       v-model="member.email"></textarea>
       
      <button type="button" class="add-btn" @click="addCommitteeMember">
      add+
      </button>
      </div>
      </div>
      <div class="speaker-row">
      <h2 class="section-title"> Invited Speakers</h2>
      <div class="row dynamic" 
      v-for="(speaker,index) in event.speakers"
      :key="index">
      <textarea
       placeholder="Name"
       v-model="speaker.name"
       ></textarea>

      <textarea
       placeholder="Specialty"
       v-model="speaker.specialty"
        ></textarea>

       <textarea
        placeholder="Institution"
        v-model="speaker.institution"
        ></textarea>
        
       <button type="button" class="add-btn"
        @click="addSpeaker">
        add +
        </button>
        </div>
       </div>
      <button type="submit" class="save-btn">
        Save
      </button>

    </form>

    <!-- عرض البيانات لحظياً (اختياري) -->
     <!--<div class="preview" v-if="saved"-->
      <!--<h2>Saved Event Data:</h2>-->
      <!--<pre>{{ event }}</pre>-->
    
  </div>
</template>

<script>
import api from "../services/api";

export default {
  data() {
    return {
      event: {
        titre: "",
        theme: "",
        description: "",
        lieu: "",
        date_debut: "",
        date_fin: "",
        etat: "a_venir",
        sessions: [{ titre: "", heure: "", salle: "", moderateur: "" }],
        committee: [{ nom: "", institution: "", role: "", email: "" }],
        speakers: [{ nom: "", specialite: "", institution: "" }],
      },
    };
  },
  methods: {
    async saveEvent() {
      try {
        // إرسال البيانات مع تجاهل الحقول الفارغة تلقائياً
        const payload = {
          titre: this.event.titre,
          description: this.event.description || null,
          theme: this.event.theme || null,
          lieu: this.event.lieu || null,
          date_debut: this.event.date_debut || null,
          date_fin: this.event.date_fin || null,
          etat: this.event.etat || "a_venir",
          sessions: this.event.sessions.filter(s => s.titre || s.heure || s.salle || s.moderateur),
          committee: this.event.committee.filter(c => c.nom || c.institution || c.role || c.email),
          speakers: this.event.speakers.filter(sp => sp.nom || sp.specialite || sp.institution),
        };

        const response = await api.post("/evenement", payload);

        alert("Event created successfully ");
        console.log(response.data);

        // تحويل لصفحة قائمة الأحداث (اختياري)
        // this.$router.push("/events");

      } catch (error) {
        console.error(error.response?.data || error);
        alert("Failed to create event ");
      }
    },

    addSession() {
      this.event.sessions.push({ titre: "", heure: "", salle: "", moderateur: "" });
    },
    addCommitteeMember() {
      this.event.committee.push({ nom: "", institution: "", role: "", email: "" });
    },
    addSpeaker() {
      this.event.speakers.push({ nom: "", specialite: "", institution: "" });
    },
  },
};
</script>


<style scoped>
.create-wrapper {
  padding: 40px 60px;
  font-family: "Segoe UI", Roboto, sans-serif;
}

.title {
  color: #0b3a72;
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 70px;
  text-align: center;
}

.form {
  width: 90%;
}

.row {
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
}

label {
  width: 180px;
  font-size: 18px;
  font-weight: 800;
  color: #0b3a72;
  margin-top: 6px;
}

textarea {
  width: 100%;
  min-height: 35px;
  max-height: 120px;
  padding: 8px 14px;
  border-radius: 25px;
  background: #dcdcdc;
  border: none;
  font-size: 14px;
  outline: none;
  resize: vertical;/* أو vertical إذا تريد السماح بالتمديد عمودياً */
  text-align: center;
}
.committee-row{
  display: flex;
  align-items: flex-start;
  gap:20px;
}
.speaker-row{
  display: flex;
  align-items: flex-start;
  gap: 20px;
}
.section-title{
  min-width: 200px;
  margin:40px 0 20px;
  font-size: 22px;
  color: #0b3a72;
}
.dynamic textarea{
  margin-right: 20px;
  width: 230px;
}
.add-btn{
  margin: 10px 0 30px 180px;
  background: transparent;
  border: 2px dashed #0b3a72 ;
  padding: 6px 10px;
  border-radius: 12px;
  cursor: pointer;
  color: #0b3a72;
  margin-left: 10px;
}


.save-btn {
  display: block;
  margin: 30px 0 0 55%;
  padding: 15px 28px;
  background: #003366;
  color: white;
  border: none;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
}

.preview {
  margin-top: 30px;
  padding: 15px;
  background: #f0f0f0;
  border-radius: 12px;
}
.session-row{
  display: flex;
  align-items: flex-start;
  gap:20px;
}
.dynamic textarea{
  margin-right: 20px;
  width: 160px;
}



</style>