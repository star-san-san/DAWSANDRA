//استيراد axios لارسال طلبات http 
import axios from "axios";
//كل طلب يبدا ب
//http://127.0.0.1:8000/api تلقائيا
const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  headers: {
    Accept: "application/json",//تخبر axios انها تريد رد json فقط
  },
});

// إضافة التوكن تلقائيًا في كل request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");//جلب token من local storage
//اذا كان هناك token يضيفه تلقائيا حسب الطلب
//Route::middleware('auth:sanctum') مايجعل هذا يعمل بنجاح
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
//يمكنك استخدامه في أي مكان
export default api;
