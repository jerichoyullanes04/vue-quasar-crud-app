<template class="dashboard-page">
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- TOP BAR -->
  <div class="top-bar">
    <div class="left-side">search</div>
    <div class="right-side">
      <q-icon name="bootstrap-icons" class="bi bi-bell-fill" />
      <q-icon name="bootstrap-icons" class="bi bi-person-circle" />
    </div>
  </div>

  <!-- SIDE BAR -->
  <div class="side-bar"></div>

  <!-- MENU -->
  <div class="menu">Menu</div>

  <!-- DASHBOARD -->
  <div class="main-container">
    <transition
      appear
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
      :duration="2000"
    >
      <div class="dashboard">
        <!-- Place your elements here -->
        <span class="title">Dashboard</span>
        <q-icon name="bootstrap-icons" class="bi bi-gem" />

        <q-icon name="bootstrap-icons" class="bi bi-house-door-fill" />

        <q-icon name="bootstrap-icons" class="bi bi-list" />
        <q-icon name="bootstrap-icons" class="bi bi-bell-fill" />
        <q-icon name="bootstrap-icons" class="bi bi-person-circle" />
      </div>
    </transition>
  </div>

  <!--  
  <transition
    appear
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
    :duration="2000"
  >
    <div class="table">
      Table
    </div>
  </transition>

  <transition
    appear
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
    :duration="2000"
  >
    <div class="form">
      Form
    </div>
  </transition>
  -->
</template>

<style lang="scss" scope>
@import "./styles/DashboardPage.scss";
</style>

<script src="./scripts/DashboardPage.js">
import "bootstrap-icons/font/bootstrap-icons.css";
</script>
