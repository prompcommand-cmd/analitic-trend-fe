<template>
    <div class="flex flex-col h-screen bg-slate-50">
        <div class="flex-grow flex flex-col items-center justify-center gap-6">
            <div class="font-semibold text-xl">Page not found</div>
            <DxButton class="custom-button primary-main-button !w-100" :use-submit-behavior="false" text="Go back" @click="() => router.push({ path: '/' })" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
</script>
