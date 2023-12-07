<template>
    <nav class="p-4 w-full flex justify-between items-center z-50">

        <div class="flex items-center gap-1">
            <NuxtLink to="/">
                <!-- <h1 class="text-xl font-bold">Parch Linux</h1> -->
                <img src="/img/logo.svg" alt="Logo" class="w-10 h-10">
            </NuxtLink>
        </div>

        <div class="lg:hidden">
            <Icon name="ic:round-menu" @click="menuToggle = !menuToggle"
                class="w-9 h-9 hover:bg-zinc-900 rounded-lg p-1.5 transition" />
        </div>

        <div class="hidden lg:block text-sm 2xl:text-base font-medium">
            <ul class="gap-6 flex flex-wrap">
                <li>
                    <NuxtLink to="/" class="hover:text-blue-600">
                        HOME
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/download" class="hover:text-blue-600">
                        DOWNLOAD
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about" class="hover:text-blue-600">
                        ABOUT
                    </NuxtLink>
                </li>
                <li>
                    <a target="_blank" href="https://blog.parchlinux.com" class="hover:text-blue-600">
                        BLOG
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://wiki.parchlinux.com" class="hover:text-blue-600">
                        WIKI
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://forum.parchlinux.com" class="hover:text-blue-600">
                        FORUM
                    </a>
                </li>
            </ul>
        </div>


        <div class="hidden lg:flex flex-wrap gap-6">

            <a href="https://github.com/parchlinux" target="_blank">
                <Icon name="uil:github" class="w-5 h-5 hover:scale-110 transition" />
            </a>

            <a href="https://twitter.com/bssfoss" target="_blank">
                <Icon name="uil:twitter" class="w-5 h-5 hover:scale-110 transition" />
            </a>

            <a href="https://daramet.com/parchlinux" target="_blank">
                <Icon name="ph:coffee-fill" class="w-5 h-5 hover:scale-110 transition" />
            </a>

        </div>
    </nav>
</template>
<script setup>

let menuToggle = useMenuToggle()

</script>
