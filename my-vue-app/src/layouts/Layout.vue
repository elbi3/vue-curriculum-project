<script setup>
import { RouterView } from 'vue-router';
import HomeHeader from '@/components/HomeHeader.vue';
import HomeFooter from '@/components/HomeFooter.vue';
import HomeNav from '@/components/HomeNav.vue';

</script>

<template>
    <div class="layout-wrapper">
        <HomeHeader />
        <HomeNav />
        <main>
            <RouterView /> <!-- page content slots in here -->
        </main>
        <HomeFooter />
    </div>
</template>

<style>
</style>