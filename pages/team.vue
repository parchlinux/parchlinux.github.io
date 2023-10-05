<template>
    <div class="max-w-screen-lg min-h-screen flex justify-center mx-auto p-4 flex-wrap gap-6 py-10 mb-10">
        <div v-for="currentUser in users">
            <div
                class="flex items-center justify-center flex-col mt-8 md:mt-0 bg-zinc-950/90 border border-zinc-800 rounded-xl p-4">
                <div class="mb-4 flex flex-col justify-center items-center sm:items-start p-3">
                    <img :src="usersInfo[currentUser].image" :alt="usersInfo[currentUser].name"
                        class="rounded-xl w-full sm:w-52" />

                    <div class="mt-6 sm:mt-2 sm:ml-4">
                        <h2 class="font-medium text-center sm:text-left text-base mb-2">
                            {{ usersInfo[currentUser].name.toUpperCase() }}
                        </h2>
                        <h3 class="font-semibold text-center sm:text-left text-xs mb-2 text-sky-600">{{
                            usersInfo[currentUser].stack.toUpperCase() }}</h3>
                    </div>
                </div>

                <div class="flex flex-wrap gap-2">
                    <a v-if="usersInfo[currentUser].socials.twitter" target='_blank'
                        :href="usersInfo[currentUser].socials.twitter" rel="noopener noreferrer" class='social-link'>
                        <Icon name="mdi:twitter" class='w-6 h-6' />
                    </a>
                    <a v-if="usersInfo[currentUser].socials.github" target='_blank'
                        :href="usersInfo[currentUser].socials.github" rel="noopener noreferrer" class='social-link'>
                        <Icon name="mdi:github" class='w-6 h-6' />
                    </a>
                    <a v-if="usersInfo[currentUser].socials.mastodon" target='_blank'
                        :href="usersInfo[currentUser].socials.mastodon" rel="me" class='social-link'>
                        <Icon name="mdi:mastodon" class='w-6 h-6' />
                    </a>
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