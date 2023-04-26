<script setup>
import { /*RouterLink,*/ RouterView } from 'vue-router'
import MaryPopin from './components/MaryPopin.vue'
import LoginForm from './components/LoginForm.vue'
import RegisterForm from './components/LoginForm.vue'

import { ref } from 'vue'
const showLogin = ref(false)
const showRegister = ref(false)

const notifications = ref(0)
</script>

<template>
    <div class="app">
    <header id="header">
      <div id="logo">
        <img src="/logo.svg" alt="vueflix">
      </div>
      <nav id="nav">
        <ul>
          <li><RouterLink to="/">Accueil</RouterLink></li>
          <li><RouterLink to="/about">À propos</RouterLink></li>
        </ul>
      </nav>
      <div id="profile">
        <span class="notifications" v-show="notifications > 0"><span>{{ notifications }}</span>notifications</span>
        <button class="register">S'inscrire</button>
        <button class="auth" v-on:click="$event=> notifications++">Connexion</button>
      </div>
    </header>
    <RouterView />
      <footer>© Vueflix {{ new Date().getFullYear() }} - Mentions légales - <RouterLink to="/about">À propos</RouterLink></footer>

      <MaryPopin v-if="showLogin">
        <LoginForm></LoginForm>
      </MaryPopin> 


      <MaryPopin v-if="showRegister">
        <RegisterForm></RegisterForm>
      </MaryPopin>
  </div>
</template>

