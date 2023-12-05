<template>
    <div>
        <Navbar />
        <slot />
        <Sidebar />
        <Footer />
        
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import Sidebar from '../components/Sidebar.vue'
import "pure-snow.js/style.css"; // Remember to import style.css
import { createSnow, showSnow } from "pure-snow.js";
document.addEventListener("DOMContentLoaded",()=>{
    createSnow(); // creates snowflakes and generate css for them
showSnow(true);
})


export default {
    name: "DefaultLayout",
    components: {
        Navbar, Footer, Sidebar
    }
}
</script>