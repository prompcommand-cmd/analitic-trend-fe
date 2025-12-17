<template>
  <div
    class="relative min-h-screen flex items-center justify-center w-full h-full bg-gradient-to-br from-primary via-secondary to-accent"
  >
    <form
      @submit.prevent="onFormSubmit"
      class="login-card w-[90%] sm:w-[400px] p-8 rounded-lg bg-white/20 backdrop-blur-md shadow-xl"
    >
      <h2 class="text-2xl font-bold text-white text-center mb-6">
        Login to your account
      </h2>

      <input
        type="email"
        v-model="formData.email"
        placeholder="Email Address..."
        class="w-full px-4 py-2 mb-4 rounded-md bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-accent transition"
      />

      <input
        :type="showPassword ? 'text' : 'password'"
        v-model="formData.password"
        placeholder="Password..."
        class="w-full px-4 py-2 mb-4 rounded-md bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-accent transition"
      />

      <button
        type="submit"
        class="w-full bg-accent hover:bg-secondary text-white font-semibold py-2 rounded-md transition"
      >
        Login
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAppStore } from "@/@/stores/app-store";
import { LoginWithEmail } from "@/auth/@service/auth-service";

const appStore = useAppStore();
const router = useRouter();
const showPassword = ref(false);
const formData = ref({ email: "", password: "" });

const onFormSubmit = (e: any) => {
  e.preventDefault();

  appStore.showSpinner = true;

  LoginWithEmail(formData.value)
    .then((response) => {
      window.localStorage.setItem("token", response.token);

      // redirect to home
      router.push({ path: "/" });
    })
    .finally(() => {
      appStore.showSpinner = false;
    });
};
</script>

<style scoped></style>
