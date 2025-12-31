<script setup lang="ts">
import { ref } from 'vue'; // استورد ref من Vue

const search = ref(''); // قم بتعريف متغير search لربطه بحقل البحث
// ... باقي الكود ...
</script>

<template>
<div class="page-wrapper">
    <header class="topbar">
        <div class="left-title"> mes eva</div>
        <div class="center-search">
            <input type="text" placeholder="search" v-model="search">
        </div>
        <div class="right-icons">
            <button class="icon-btn">
                <svg> </svg>
                </button>
            <div class="profile-wrap">
                <img  alt="profile" class="profile-img"/>
            </div>
        </div>
    </header>

     <h2 class="page-title">list of proposition</h2>
     <!-- contient-->
      <div class="content-area">
        <!--      1        -->
        <!--صندوق يحيط بالجدول-->
        <div class="table-wrapper">
            <!--table-->
            <table class="proposala-table">
                <!--the head of table-->
            <thead>
                <!-- tr =ROW-->
                <tr>
                    <th></th>
                    <th>status</th>
                    <th>type</th>
                    <th>proposal title</th>
                </tr>
            </thead>
            <!--body of table-->
            <tbody>
                <!--key=مفتاح فريد لكل صف-->
                <!--tr=ROW-->
                <tr v-for="(row,idx) in filteredRows":key="idx">
                <!--button-->
                <!--خلية جدول=td-->
                <td class="action-td">
                    <button class="action-btn" :class="row.status === 'Evaluated'? 'view' : 'evaluate'">
                     {{ row.status ==='Evaluated'? 'View' : 'Evaluate' }}
                   </button>     
                </td>
                <!--عرض بيانات المقترح باستخدام Mustache syntax: {{ variable }}-->
            <td class="status-td">{{ row.status }}</td>
            <td class="type-td">{{  row.type}}</td>
            <td class="title-td">{{ row.title }}</td>
            </tbody>
            </table>

            <!--      2        -->
                  <!--عنصر جانبي =aside -->
        <aside class="progress-area">
            <div class="progress-card">
                <svg class="progress-ring" width="140" height="140" view-box="0 0 120 120" >
                    <circle class="ring-bg" cx="60" cy="60" r="52" stroke-width="12" fill="none"/>
                    <circle class="ring-progress" cx="60" cy="60" r="52" stroke-width="12" fill="none"/>
                    <!--مزال ابحتي عنها-->
                      : style="{strokeDasharray: circumference,strokeDashoffset:strokeOffset }"
                      transform="rotate(-90 60 60)"
                </svg>
                <div class="progress-lable">propositions evaluted</div>

            </div>

        </aside>

        </div>
      </div>
</div>

</template>