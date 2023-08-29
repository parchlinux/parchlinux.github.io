<template>
    <div class="max-w-screen-md min-h-screen flex justify-center mx-auto p-4">
        <div>
            <div class="flex flex-col md:flex-row gap-4 p-2 mb-28">

                <div @mouseleave="menuToggle = !menuToggle" class="md:hidden relative flex flex-col gap-4 items-center group">
                    <button @click="menuToggle = !menuToggle" type="button" class="rounded-xl bg-zinc-950/90 border border-zinc-800 font-medium text-sm inline-flex justify-center items-center min-w-[150px] px-4 py-2">
                        {{ currentUser.toUpperCase() }} <Icon name="heroicons:chevron-down-20-solid" class="w-6 h-6"/>
                    </button>

                    <div v-if="menuToggle"
                        class="absolute mt-[45px] min-w-[150px] bg-zinc-950/90 border border-zinc-800 backdrop-blur-sm px-2 py-2 flex flex-col rounded-xl gap-2">
                        <button v-for="name in users" :key="name" type="button"
                            @click="setCurrentUser(name); menuToggle = false"
                            :class="{ 'bg-sky-500': name === currentUser, 'hover:bg-zinc-800': name !== currentUser, 'text-sm font-medium rounded-xl py-1.5': true }">
                            {{ name.toUpperCase() }}
                        </button>
                    </div>

                </div>

                <div
                    class="hidden md:flex flex-col w-full max-w-[170px] rounded-xl px-2 py-2 gap-1 bg-zinc-950/90 border border-zinc-800 text-xs font-medium">
                    <button v-for="name in users" :key="name" type="button"
                        @click="setCurrentUser(name); menuToggle = false"
                        :class="{ 'bg-sky-500/70': name === currentUser, 'hover:bg-zinc-800': name !== currentUser, 'text-left text-sm font-medium rounded-xl px-3 py-1.5': true }">
                        {{ name.toUpperCase() }}
                    </button>
                </div>

                <div v-if="currentUser">
                    <div
                        class="flex items-center justify-center flex-col mt-8 md:mt-0 bg-zinc-950/90 border border-zinc-800 rounded-xl p-4">
                        <div class="mb-4 flex flex-col sm:flex-row justify-center items-center sm:items-start p-3">
                            <img :src="usersInfo[currentUser].image" :alt="usersInfo[currentUser].name"
                                class="rounded-xl w-full sm:w-52" />

                            <div class="mt-6 sm:mt-2 sm:ml-4">
                                <h2 class="font-medium text-center sm:text-left text-base mb-2">
                                    {{ usersInfo[currentUser].name.toUpperCase() }}
                                </h2>
                                <h3 class="font-semibold text-center sm:text-left text-xs mb-2 text-sky-600">{{
                                    usersInfo[currentUser].stack.toUpperCase() }}</h3>
                                <p class="text-[15px] text-center sm:text-left text-gray-300">
                                    {{ usersInfo[currentUser].about }}
                                </p>
                            </div>
                        </div>

                        <div class="flex flex-wrap gap-2">
                            <a v-if="usersInfo[currentUser].socials.twitter" target='_blank'
                                :href="usersInfo[currentUser].socials.twitter" rel="noopener noreferrer"
                                class='social-link'>
                                <Icon name="mdi:twitter" class='w-7 h-7' />
                            </a>
                            <a v-if="usersInfo[currentUser].socials.github" target='_blank'
                                :href="usersInfo[currentUser].socials.github" rel="noopener noreferrer" class='social-link'>
                                <Icon name="mdi:github" class='w-7 h-7' />
                            </a>
                            <a v-if="usersInfo[currentUser].socials.mastodon" target='_blank'
                                :href="usersInfo[currentUser].socials.mastodon" rel="me" class='social-link'>
                                <Icon name="mdi:mastodon" class='w-7 h-7' />
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import { users, usersInfo } from '../data/index'

export default {

    data() {
        return {
            currentUser: 'sohrab',
            menuToggle: false,
            users: users,
            usersInfo: usersInfo,
        }
    },
    methods: {
        setCurrentUser(name) {
            this.currentUser = name;
        }
    }
}
</script>