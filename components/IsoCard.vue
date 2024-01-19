<template>
    <div
        class="relative bg-zinc-950/80 rounded-lg backdrop-blur-sm border border-zinc-800 max-w-screen-md flex flex-col justify-center">
        <img :src="image" :alt="title" class="w-full sm:w-96 rounded-t-lg">

        <div class="flex p-4 justify-between">
            <div class="flex flex-col mb-12">
                <h1 class="text-lg font-medium mb-2">{{ title.toUpperCase() }}</h1>
                <div class="flex items-center divide-x divide-zinc-800">
                    <span class="text-xs px-2">
                    {{ size }}GB
                    </span>
                    <span class="text-xs px-2">
                    x64
                    </span>
                </div>
            </div>
        </div>

        <div class="flex absolute bottom-0 w-full border-t border-zinc-800 divide-x divide-zinc-800">

            <a :href="url" class='w-1/2 inline-flex text-blue-500 justify-center p-2 rounded-bl-lg'>
                <Icon name="iconoir:download" class="w-6 h-6" />
            </a>

            <a target='_blank' href="https://fosstorrents.com/distributions/parch-linux/"
                class='w-1/2 inline-flex text-blue-500 justify-center p-2 text-[15px] rounded-br-lg'>
                Torrent
            </a>

        </div>

    </div>
</template>

<script>
export default {
    name: "IsoCard",
    props: {
        title: String, size: Number, url: String, image: String,
    }
}
</script>