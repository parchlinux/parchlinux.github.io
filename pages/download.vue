<template>
    <div class="max-w-screen-lg min-h-screen mx-auto mb-20 mt-10 p-4 flex flex-col items-center">
        <h1
            class="text-center text-[28px] sm:text-[36px] mb-12 font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-sky-600">
            Choose Your Desktop</h1>

        <div class="flex justify-center flex-wrap gap-8">
            <IsoCard :title="'Parch GNOME'" :size="1.7" :url="'https://github.com/parchlinux/Parch-iso-gnome/releases/'" :image="'/img/GNOME.webp'" />
            <IsoCard :title="'Parch KDE'" :size="1.9" :url="'https://github.com/parchlinux/parch-iso-plasma/releases/'" :image="'/img/PLASMA.webp'" />
            <IsoCard :title="'Parch XFCE'" :size="1.5" :url="'https://github.com/parchlinux/parch-iso-xfce/releases/'" :image="'/img/XFCE.webp'" />
            <IsoCard :title="'Parch CINNAMON'" :size="1.5" :url="'https://github.com/parchlinux/parch-iso-cinnamon/releases/'" :image="'/img/CINNAMON.webp'" />
        </div>

        <div class="h-60"></div>
    </div>
</template>

<script>
import IsoCard from '../components/IsoCard.vue'

export default {
    name: "Get",
    components: {
        IsoCard,
    }
}

</script>