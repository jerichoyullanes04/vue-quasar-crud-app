<template class="dashboard-page">
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- TOP BAR -->
  <div class="top-bar">
    <div class="left-side">
      <form class="search-bar">
        <input
          class="search-bar"
          type="search"
          placeholder="Search Filter..."
        />
      </form>
    </div>
    <div class="right-side">
      <img class="notif-icon" src="~assets/icons/notifications.svg" alt="" />

      <img class="user-icon" src="~assets/icons/user.svg" alt="" />
    </div>
  </div>

  <!-- SIDE BAR -->
  <div class="side-bar">
    <div class="side-bar-top">
      <img class="logo-icon" src="~assets/icons/diamond.svg" alt="" />
    </div>
    <div class="side-bar-bottom">
      <img class="home-icon" src="~assets/icons/home.svg" alt="" />
      <img class="menu-icon" src="~assets/icons/menu.svg" alt="" />
      <div>Menu</div>
    </div>
  </div>

  <!-- MENU -->
  <div class="menu">
    <div class="title">Menu</div>
    <div class="menu-links">
      <img class="acc-icon" src="~assets/icons/account_balance.svg" alt="" />
      <div>menu 1</div>
    </div>
    <div class="menu-links">
      <img class="groups-icon" src="~assets/icons/groups.svg" alt="" />
      <div>menu 2</div>
    </div>
    <div class="menu-links">
      <img class="legend-icon" src="~assets/icons/legend_toggle.svg" alt="" />
      <div>menu 3</div>
    </div>
  </div>

  <div class="main-container">
    <!-- DASHBOARD PAGE -->
    <Transition appear name="fade">
      <div class="dashboard-page">
        <!-- Place your elements here -->
        <div class="title">Dashboard</div>

        <!-- CARD 1 -->
        <div class="row">
          <q-card
            flat
            v-ripple
            @click="navigateToNextPage"
            class="my-card text-black col cursor-pointer q-hoverable"
            style="border: 1px solid rgba(59, 59, 59, 0.2)"
          >
            <q-card-section>
              <div
                class="text-h6"
                style="font-family: Source Sans 3, sans-serif; font-weight: 700"
              >
                CARD 1
              </div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              <div class="desc">description</div>
            </q-card-section>
          </q-card>

          <!-- CARD 2 -->
          <q-card
            @click="navigateToNextPage"
            flat
            v-ripple
            class="my-card text-black col cursor-pointer q-hoverable"
            style="border: 1px solid rgba(59, 59, 59, 0.2)"
          >
            <q-card-section>
              <div
                class="text-h6"
                style="font-family: Source Sans 3, sans-serif; font-weight: 700"
              >
                CARD 2
              </div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              <div class="desc">description</div>
            </q-card-section>
          </q-card>

          <!-- CARD 3 -->
          <q-card
            @click="navigateToNextPage"
            flat
            v-ripple
            class="my-card text-black col cursor-pointer q-hoverable"
            style="border: 1px solid rgba(59, 59, 59, 0.2)"
          >
            <q-card-section>
              <div
                class="text-h6"
                style="font-family: Source Sans 3, sans-serif; font-weight: 700"
              >
                CARD 3
              </div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              <div class="desc">description</div>
            </q-card-section>
          </q-card>

          <!-- CARD 4 -->
          <q-card
            @click="navigateToNextPage"
            flat
            v-ripple
            class="my-card text-black col cursor-pointer q-hoverable"
            style="border: 1px solid rgba(59, 59, 59, 0.2)"
          >
            <q-card-section>
              <div
                class="text-h6"
                style="font-family: Source Sans 3, sans-serif; font-weight: 700"
              >
                CARD 4
              </div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              <div class="desc">description</div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style lang="scss" scope>
@import "./styles/DashboardPage.scss";
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.my-card:hover {
  background-color: #ebebeb;
}
</style>

<script src="./scripts/DashboardPage.js"></script>
