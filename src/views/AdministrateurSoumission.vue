<template>
    <div class="header">
       <div class=" center-container">
        <div class="center-search">
        <input type="text" placeholder="search" v-model="search"/>
        <span class="icon">🔍</span>
        </div>
    </div>
    </div>
    <div class="title-container">
       <h1 class="left-title">List of Soumission</h1>

    </div>
    
    
    <!--table-->
    <div class="content-area">
        <div class="table-warpper">
            <table class="proposals-table">
                <thead>
                    <tr>
                        
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Participant Type</th>
                        <th>Pdf</th>
                        <th>Status</th>
                        <th>Actions</th>
                       
                    </tr>
                </thead>
                <tbody>
                    

                    <tr v-for="p in filteredParticipants" :key="p.id">
                        
                   
                    <td>{{ p.firstName }}</td>
                    <td>{{ p.lastName }}</td>
                    <td>{{ p.email }}</td>
                    <td>{{ p.type }}</td>
                    <td>
                        <button class="pdf-btn" @click="downloadPdf(p)">
                            pdf
                            </button>
                    </td>

                    <td>{{ p.status }}</td>
                    <td class="action-cell">
                        <div class="dropdown">
                            <button @click="toggleMenu(p)" class ="action-btn">
                                Status
                            </button>
                            <ul v-if="p.showMenu" class="dropdown-menu">
                                <li @click="updateStatus(p,'Accepte')">Accepte</li>
                                 <li @click="updateStatus(p,'Refuse')">Refuse</li>
                                  <li @click="updateStatus(p,'En attante')">En attante</li>
                                </ul>

                        </div>

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
    <!---->
</template>
<script>
    export default {
        data(){
            return{
                search: "",
                participants:[
                   { id:1,firstName: "Ali", lastName: "Ben", email: "ali@gmail.com", type: "Participant", pdf:"...", status: "En attente", showMenu: false },
                   { id: 2, firstName: "Sara", lastName: "Bou", email: "sara@gmail.com", type: "Communicant", pdf:"...", status: "Accepté", showMenu: false },
                   { id: 3, firstName: "Nour", lastName: "Amar", email: "nour@gmail.com", type: "Participant", pdf:"...", status: "Refusé", showMenu: false },
                   { id:4,firstName: "Mouhamed", lastName: "Saleem", email: "mouh@gmail.com", type: "Participant", pdf:"...", status: "En attente", showMenu: false },
                   { id: 5, firstName: "Salma", lastName: "Bouazouz", email: "salma@gmail.com", type: "Communicant", pdf:"...", status: "Accepté", showMenu: false },
                   { id: 6, firstName: "Silia", lastName: "Kharaf", email: "silia@gmail.com", type: "Participant", pdf:"...", status: "Refusé", showMenu: false },
        
        
                ],
            };
        },
        computed:{
            filteredParticipants(){
                return this.participants.filter(p =>
                    p.firstName.toLowerCase().includes(this.search.toLowerCase())
                );
            }
        },
        methods:{
            toggleMenu(p){
                this.participants.forEach(part => part.showMenu = false);
                p.showMenu=! p.showMenu;
            },
            updateStatus(p,newStatus){
                p.status=newStatus;
                p.showMenu=false;
            },
            downloadPdf(p) {
                alert("download pdf" + p.firstName);
            }
        }

    };
    </script>
    <style scoped>
    .header{
     display: flex;
     flex-direction: column;
     width: 100%;
    }
    .title-container{
        display: flex;
        justify-content: flex-start;
    }
    
    .left-title {
        margin-top: 40px;
        margin-bottom: 70px;
        font-size: 28px;
        font-weight: 700;
        color:#0b3a72;
        margin-left: 500px;
    }   
     .center-container{
        display: flex;
        justify-content: flex-end;
        width: 100%;
        padding-right: 20px;
        padding-top: 10px;
    }
    .center-search{
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
      background: #e9e9e9 ; 
      text-align: center;
      flex: 1; 
      
    } 
    .center-search .icon {
     position: absolute;
     right: 15px;
     pointer-events: none;
     font-size: 18px;
    }

    .content-area{
        display: block;
        
    }
     .table-warpper{
        flex:1;
        
     }
     .proposals-table{
        width: 100%;
        border-collapse: collapse;
        font-size: 18px;
        table-layout: fixed;
        
     }
     .proposals-table thead tr{
        border-bottom:3px solid #0b3a72 ;
     }
     .proposals-table th,
     .proposals-table td{
        padding: 10px;
        text-align: left;
     }
     .pdf-btn {
      padding:10px 10px ;
      color: white;
      border-radius: 10px;
      border: none;
      background: #0b3a72;
      font-size: 15px;
     }
     .action-btn{
        padding: 10px 16px;
        border-radius: 10px;
        border: none;
        color: white;
        background: #0b3a72;
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
    <!--بقي جزء توزيع المقترحات-->