import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAQQh6LRSRzfQ8hERJpNyjgnCPMandL06A",
    authDomain: "dorich-js-v3.firebaseapp.com",
    projectId: "dorich-js-v3",
    storageBucket: "dorich-js-v3.appspot.com",
    messagingSenderId: "937991129414",
    appId: "1:937991129414:web:911ed666a8bb111f8d3d47",
    measurementId: "G-VQ117RLYVH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
analytics.app.automaticDataCollectionEnabled = true;