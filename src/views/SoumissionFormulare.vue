<template>
<div class="create-wapper">
    <h1 class="title">My article</h1>
    <form class="form" @submit.prevent="saveArticale">
        <div class="row">
            <label>Title</label>
            <textarea placeholder="title of artivale" v-model="article.title"></textarea>
        </div>

         <div class="row">
            <label>Type</label>
            <textarea placeholder="type articale " v-model="article.type"></textarea>
        </div>
        <div class="row">
            <label>Summary</label>
            <textarea placeholder=" Summary of artivale" v-model="article.summary"></textarea>
        </div>
        <button type="button" class="dowlond-btn" @click="openFileExplorer">Pdf</button>
      <input type="file" ref="fileInput" style="display: none;" @change="handleFileUpload">
         <button type="submit" class="send-btn">Send</button>

    </form>
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
    export default{
        data(){
            return{
                article:{
                    title:'',
                    type:'',
                    summary:'',
                },
                selectedFile: null, // لتخزين الملف المختار
            };
        },
        methods:{
            saveArticale() {
            console.log(this.article);
            if (this.selectedFile) {
           console.log("File selected:", this.selectedFile.name);
         }
        },
        openFileExplorer() {
      // فتح File Explorer
      this.$refs.fileInput.click();
    },
    handleFileUpload(event) {
      // حفظ الملف الذي اختاره المستخدم
      this.selectedFile = event.target.files[0];
    }
    }
    };
</script>

<style scoped>
    .create-wapper{
        padding: 40px 60px;
        font-family: "Segoe UI", Roboto, sans-serif;

    }
    .title{
        color:#0b3a72; 
        font-size: 36px;
        font-weight: 700;
        margin-bottom: 70px;
        text-align: center;
    }
    .form{
        width: 90%;
    }
    .row{
       display: flex;
       align-items: flex-start;
       margin-bottom: 20px; 
    }
      label{
        color:#0b3a72; ;
        width: 180px;
        font-size: 18px;
        font-weight: 800;
        margin-top: 6px;
    }
     textarea{
        width: 100%;
        min-height: 35px;
        max-width:700px ;
        padding: 8px 14px;
        border-radius: 25px;
        background:  #dcdcdc;
        border: none;
        resize:vertical;
        text-align: center;
    }
    /*button*/
    .dowlond-btn{
        display: block;
        margin: 30px 0 0 50%;
        padding: 15px 28px;
        background: #003366 ;
        color:white;
        border: none;
        border-radius: 20px;
        font-size: 14px;
        cursor: pointer;
    }
    .send-btn{
         display: block;
        margin: 30px 0 0 50%;
        padding: 15px 28px;
        background: #003366 ;
        color:white;
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