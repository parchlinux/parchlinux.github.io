<template>
    <div class="max-w-screen-lg min-h-screen mx-auto mb-20 mt-10 p-4 flex flex-col items-center">
        <h1 class="text-center text-[28px] sm:text-[36px] mb-12 font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-sky-600">
            Choose Your Desktop
        </h1>

        <div class="flex justify-center flex-wrap gap-8">
                <IsoCard v-for="iso in isoImages" v-show="iso.download" :key="iso.name" :title="iso.name" :size="iso.size" :url="iso.link" :image="iso.photo" />
        </div>

        <div class="h-60"></div>
    </div>
</template>

<script>
import IsoCard from '../components/IsoCard.vue'
import { isoImages } from '../data/isoImages'

export default {
    name: "Get",
    components: {
        IsoCard,
    },
    data() {
        return {
            isoImages: isoImages,
        }
    },
}

</script>