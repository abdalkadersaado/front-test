import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import i18n from "./locales/i18n";

/* import bootstrap@5.2.3  */
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

/** vue notification */
import VueNotifications from "vue-notifications";
import iziToast from "izitoast"; // https://github.com/dolce/iziToast
import "izitoast/dist/css/iziToast.min.css";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faFileUpload } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faTextWidth, faFileImage } from "@fortawesome/free-solid-svg-icons";

library.add(faFileUpload, faPlus, faTextWidth, faFileImage);

function toast({ title, message, type, timeout }) {
  if (type === VueNotifications.types.warn) type = "warning";
  return iziToast[type]({ title, message, timeout });
}
const options = {
  success: toast,
  error: toast,
  info: toast,
  warn: toast,
  question: toast,
};
// for translate pages
let lang = localStorage.getItem("lang");
document.documentElement.lang = lang;
/** End Notification */

const firebaseConfig = {
  apiKey: "AIzaSyD3F2zIcZlTFsy0V8cGwmFzxWVd3pd2K_E",
  authDomain: "media-3702f.firebaseapp.com",
  projectId: "media-3702f",
  storageBucket: "media-3702f.appspot.com",
  messagingSenderId: "658430014475",
  appId: "1:658430014475:web:4be85681f0c4208231830e",
  measurementId: "G-4ZPQ8STC0M",
};
const app = initializeApp(firebaseConfig);
getStorage(app);

createApp(App)
  .use(store)
  .use(i18n)
  .use(VueNotifications, options)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
