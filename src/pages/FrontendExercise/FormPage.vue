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
    <!-- FORM PAGE -->
    <transition appear name="fade">
      <div class="form-page">
        <div class="form-page-header">
          <div class="back-icon-container">
            <img
              @click="navigateToPreviousPage"
              class="back-icon"
              src="~assets/icons/arrow_back.svg"
              alt=""
            />
          </div>
          <div class="title">Staff Profile Details</div>
        </div>

        <div class="row justify-center items-center">
          <div class="q-pa-md" style="width: 456px">
            <q-scroll-area style="height: 500px; max-width: 456px">
              <q-form @submit="submitForm">
                <div class="form-input-container">
                  <span class="form-label">Name:</span>
                  <q-input
                    dense
                    color="teal"
                    outlined
                    v-model="name"
                    placeholder="Enter Name"
                  />
                </div>
                <div class="form-input-container">
                  <span class="form-label">Employee ID:</span>
                  <q-input
                    dense
                    color="teal"
                    outlined
                    v-model="id"
                    placeholder="Enter Employee ID"
                  />
                </div>
                <div class="form-input-container">
                  <span class="form-label">Email:</span>
                  <q-input
                    dense
                    color="teal"
                    outlined
                    v-model="email"
                    placeholder="Email"
                    type="email"
                  />
                </div>
                <div class="form-input-container">
                  <span class="form-label">Current Task:</span>
                  <q-input
                    dense
                    color="teal"
                    outlined
                    v-model="task"
                    placeholder="Enter current task"
                  />
                </div>
                <div class="form-input-container">
                  <span class="form-label">Description:</span>
                  <q-input
                    type="textarea"
                    color="teal"
                    outlined
                    v-model="desc"
                    placeholder="Enter Description"
                  />
                </div>
                <div class="form-input-container">
                  <span class="form-label">Status:</span>
                  <q-input
                    dense
                    color="teal"
                    outlined
                    v-model="status"
                    placeholder="Enter Status"
                  />
                </div>

                <div class="form-input-container">
                  <span class="form-label">House Address:</span>
                  <q-input
                    dense
                    color="teal"
                    outlined
                    v-model="address"
                    placeholder="Enter House Address"
                  />
                </div>
                <button type="submit" class="save-btn">Save Changes</button>
                <!-- <q-btn type="submit" label="Save Changes" color="primary" /> -->
              </q-form>
            </q-scroll-area>
          </div>
        </div>
      </div>
    </transition>
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
</style>

<script src="./scripts/FormPage.js"></script>
