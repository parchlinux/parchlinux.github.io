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


export default {
    name: "DefaultLayout",
    components: {
        Navbar, Footer, Sidebar
    }
}
</script>
