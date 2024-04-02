<template>
    <footer class="relative border-t border-zinc-900">
        <div class="absolute inset-x-0 flex items-center justify-center -top-3">
            <div class="relative flex justify-center h-10 w-14">
                <div class="absolute w-full h-full inset-0 -top-[2px] blur-[6px] bg-black rounded-full">
                </div>
                <img src="/img/logo.svg" class="relative w-6 h-6">
            </div>
        </div>
        <div class="max-w-screen-lg mx-auto py-8">
            <div class="sm:relative flex flex-col items-center gap-3 lg:flex-row sm:justify-between">
                <span class="text-sm text-gray-300 text-center">© BSS OSF - All Rights Reserved.</span>
                <div class="hidden lg:block text-sm 2xl:text-base font-medium text-gray-300 px-4">
                    <ul class="gap-6 flex flex-wrap justify-center">
                        <li>
                            <NuxtLink to="/" class="hover:text-blue-600">
                                Home
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/download" class="hover:text-blue-600">
                                Download
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/about" class="hover:text-blue-600">
                                About
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/privacy" class="hover:text-blue-600">
                                Privacy
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/team" class="hover:text-blue-600">
                                Team
                            </NuxtLink>
                        </li>
                    </ul>
                    <br>
                    <p class="text-center">Power by <a href="https://vuejs.org" class="active-link">Vue.js</a></p>
                    <p class="text-center">View website source <a href="https://github.com/parchlinux/parchlinux.github.io" class="active-link">at</a></p>
                </div>


                <div class="flex flex-wrap gap-6">

                    <a target='_blank' rel='me' href='http://mas.to/@bssfoss'>
                        <Icon name="mdi:mastodon" class="w-5 h-5 hover:scale-110 transition" />
                    </a>

                    <a target='_blank' href='https://t.me/parchlinux'>
                        <Icon name="mdi:telegram" class="w-5 h-5 hover:scale-110 transition" />
                    </a>

                    <a href="https://github.com/parchlinux" target="_blank">
                        <Icon name="uil:github" class="w-5 h-5 hover:scale-110 transition" />
                    </a>

                    <a href="https://twitter.com/bssfoss" target="_blank">
                        <Icon name="uil:twitter" class="w-5 h-5 hover:scale-110 transition" />
                    </a>

                    <a href="https://discord.gg/9RW5cRByAM" target="_blank">
                        <Icon name="ic:baseline-discord" class="w-5 h-5 hover:scale-110 transition" />
                    </a>
                </div>
                
            </div>



        </div>
    </footer>
</template>
<script>
export default {

}
</script>

