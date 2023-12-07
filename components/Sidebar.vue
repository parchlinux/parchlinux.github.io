<template>
    <aside v-show="menuToggle" @mouseleave="menuToggle = false"
        class="p-6 bg-zinc-950/80 backdrop-blur-lg fixed right-0 top-0 h-screen px-4 py-4 w-full z-50">

        <div class='w-full flex items-center justify-between mb-20'>
            <div class='flex justify-start items-center'>
                <img src="/img/logo.svg" alt="Logo" class="w-10 h-10">
            </div>

            <button @click="menuToggle = !menuToggle" class='hover:bg-zinc-800 p-1 rounded-xl'>
                <Icon name="iconamoon:close-duotone" class="w-7 h-7" />
            </button>
        </div>

        <ul class="space-y-2 w-full text-xs font-semibold px-10">
            <li>
                <NuxtLink to="/" @click="menuToggle = false"
                    class="flex items-center px-2 py-2.5 hover:bg-blue-500 rounded-xl hover:text-white">
                    <span class="flex-1 ml-3 whitespace-nowrap">HOME</span>
                </NuxtLink>
            </li>

            <li>
                <NuxtLink to="/download" @click="menuToggle = false"
                    class="flex items-center px-2 py-2.5 hover:bg-blue-500 rounded-xl hover:text-white">
                    <span class="flex-1 ml-3 whitespace-nowrap">DOWNLOAD</span>
                </NuxtLink>
            </li>

            <li>
                <NuxtLink to="/about" @click="menuToggle = false"
                    class="flex items-center px-2 py-2.5 hover:bg-blue-500 rounded-xl hover:text-white">
                    <span class="flex-1 ml-3 whitespace-nowrap">ABOUT</span>
                </NuxtLink>
            </li>

            <li>
                <a target="_blank" href="https://blog.parchlinux.com" @click="menuToggle = false"
                    class="flex items-center px-2 py-2.5 hover:bg-blue-500 rounded-xl hover:text-white">
                    <span class="flex-1 ml-3 whitespace-nowrap">BLOG</span>
                </a>
            </li>

            <li>
                <a target="_blank" href="https://wiki.parchlinux.com" @click="menuToggle = false"
                    class="flex items-center px-2 py-2.5 hover:bg-blue-500 rounded-xl hover:text-white">
                    <span class="flex-1 ml-3 whitespace-nowrap">WIKI</span>
                </a>
            </li>

            <li>
                <a target="_blank" href="https://forum.parchlinux.com" @click="menuToggle = false"
                    class="flex items-center px-2 py-2.5 hover:bg-blue-500 rounded-xl hover:text-white">
                    <span class="flex-1 ml-3 whitespace-nowrap">FORUM</span>
                </a>
            </li>
            
            <li>
                <NuxtLink to="/team" @click="menuToggle = false"
                    class="flex items-center px-2 py-2.5 hover:bg-blue-500 rounded-xl hover:text-white">
                    <span class="flex-1 ml-3 whitespace-nowrap">TEAM</span>
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/privacy" @click="menuToggle = false"
                    class="flex items-center px-2 py-2.5 hover:bg-blue-500 rounded-xl hover:text-white">
                    <span class="flex-1 ml-3 whitespace-nowrap">PRIVACY</span>
                </NuxtLink>
            </li>
        </ul>
    </aside>
</template>

<script setup>

let menuToggle = useMenuToggle()

</script>
