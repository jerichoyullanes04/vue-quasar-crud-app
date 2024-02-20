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
              <q-form @submit="!checkStoreID() ? saveChanges() : updateData()">
                <!--name-->
                <div class="form-input-container">
                  <span class="form-label">Name:</span>
                  <q-input
                    v-model="form.name"
                    placeholder="Enter Name"
                    outlined
                    color="teal"
                    :rules="[
                      (val) => (val && val.length > 0) || 'Field is Required!',
                    ]"
                  >
                  </q-input>
                </div>
                <!--name end-->

                <!--id-->
                <div class="form-input-container">
                  <span class="form-label">Employee ID:</span>
                  <q-input
                    v-model="form.id"
                    placeholder="Enter Employer ID"
                    color="teal"
                    outlined
                    :rules="[
                      (val) => (val && val.length > 0) || 'Field is Required!',
                    ]"
                  >
                  </q-input>
                </div>
                <!--id end-->

                <!--email-->
                <div class="form-input-container">
                  <span class="form-label">Email:</span>
                  <q-input
                    v-model="form.email"
                    placeholder="Enter Email: exampl@gmail.com"
                    color="teal"
                    outlined
                    :rules="[
                      (val) => (val && val.length > 0) || 'Field is Required!',
                    ]"
                  >
                  </q-input>
                </div>
                <!--email end-->

                <!--task-->
                <div class="form-input-container">
                  <span class="form-label">Current Task:</span>
                  <q-input
                    v-model="form.task"
                    placeholder="Enter Current Task"
                    color="teal"
                    outlined
                    :rules="[
                      (val) => (val && val.length > 0) || 'Field is Required!',
                    ]"
                  >
                  </q-input>
                </div>
                <!--task end-->

                <!--description-->
                <div class="form-input-container">
                  <span class="form-label">Description:</span>
                  <q-input
                    v-model="form.desc"
                    placeholder="Enter Task Description"
                    color="teal"
                    outlined
                    style="height: 168px"
                    type="textarea"
                    :rules="[
                      (val) => (val && val.length > 0) || 'Field is Required!',
                    ]"
                  >
                  </q-input>
                </div>
                <!--description end-->

                <!--status-->
                <div class="form-input-container">
                  <span class="form-label">Status:</span>
                  <q-input
                    v-model="form.status"
                    placeholder="Enter Task Status"
                    color="teal"
                    outlined
                    :rules="[
                      (val) => (val && val.length > 0) || 'Field is Required!',
                    ]"
                  >
                  </q-input>
                </div>
                <!--status end-->

                <!--address-->
                <div class="form-input-container">
                  <span class="form-label">Description:</span>
                  <q-input
                    v-model="form.address"
                    placeholder="Enter Address Ex: Brgy. Kaypian, San Jose Del Monte City."
                    color="teal"
                    outlined
                    style="padding-bottom: 32"
                    :rules="[
                      (val) => (val && val.length > 0) || 'Field is Required!',
                    ]"
                  >
                  </q-input>
                </div>
                <!--address end-->

                <!--submit button-->
                <button
                  type="submit"
                  :label="!checkStoreID() ? 'Add Employee' : 'Save Changes'"
                  rounded
                  color="secondary"
                  @click="
                    !checkStoreID() ? (addDialog = true) : (editDialog = true)
                  "
                  class="save-btn"
                >
                  Save Changes
                </button>

                <!--add dialog-->
                <q-dialog v-model="addDialog">
                  <q-card style="width: 250px">
                    <q-card-section
                      class="column flex flex-center wrap items-center"
                    >
                      <div class="q-pb-md">Employee Added!</div>
                      <q-btn
                        color="secondary"
                        outlined
                        @click="navigateToPreviousPage"
                        label="Close"
                      ></q-btn>
                    </q-card-section>
                  </q-card>
                </q-dialog>
                <!--add dialog end-->

                <!--edit dialog-->
                <q-dialog v-model="editDialog">
                  <q-card style="width: 250px">
                    <q-card-section
                      class="column flex flex-center wrap items-center"
                    >
                      <div class="q-pb-md">Changes Saved!</div>
                      <q-btn
                        color="secondary"
                        outlined
                        @click="navigateToPreviousPage"
                        label="Close"
                      ></q-btn>
                    </q-card-section>
                  </q-card>
                </q-dialog>
                <!--edit dialog end-->
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
