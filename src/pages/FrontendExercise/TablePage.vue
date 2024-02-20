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
    <!-- TABLE PAGE -->

    <Transition appear name="fade">
      <div class="table-page">
        <div class="table-container-header">
          <div class="left"><div class="title">Employee List</div></div>
          <div class="right">
            <button @click="navigateToNextPage" class="add-employee-btn">
              Add Employee
            </button>
            <form class="search-employee-form">
              <input
                class="search-employee-input"
                type="search"
                placeholder="Search"
              />
            </form>
          </div>
        </div>
        <div class="filters">
          <div class="filter-label">Filter:</div>
          <div class="filter-by">
            <select class="filter-select">
              <option>All</option>
              <option>Sample 1</option>
              <option>Sample 2</option>
            </select>
          </div>
          <div class="select-date">
            <input
              type="text"
              class="select-date-input"
              placeholder="Select Date"
              v-model="input"
            />
            <q-popup-proxy :breakpoint="600">
              <q-date v-model="input" @input="updateInput" />
            </q-popup-proxy>
          </div>
        </div>
        <q-page>
          <q-table
            square
            hide-bottom
            :rows="rows"
            :columns="columns"
            :rows-per-page-options="[10, 20, 30, 50]"
            :rows-per-page="6"
            row-key="id"
            @row-click="onRowClick"
            flat
            bordered
            virtual-scroll
            style="height: 390px"
          >
            <!-- <template v-slot:body="props">
              <q-tr :props="props">
                <q-td auto-width v-for="col in columns" :key="col.name">
                  {{ props.row[col.field] }}
                </q-td>
              </q-tr>
            </template> -->
            <template v-slot:body-cell-actions="props">
              <q-td :props="props">
                <!-- <q-btn icon="mode_edit" @click="onEdit(props.row)"></q-btn>
                <q-btn icon="delete" @click="onDelete(props.row)"></q-btn> -->
                <q-btn flat round icon="more_vert">
                  <q-popup-proxy :breakpoint="600">
                    <div class="popup">
                      <div @click="editEmployee(props)" v-ripple class="edit">
                        Edit
                      </div>
                      <div @click="deleteEmployee()" v-ripple class="delete">
                        Delete
                      </div>
                    </div>
                  </q-popup-proxy></q-btn
                >
              </q-td>
            </template>
          </q-table>
        </q-page>
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

.popup {
  width: 170px;
  font-size: 14px;
  font-family: "Source Sans 3", sans-serif;
  font-weight: 400;

  .edit,
  .delete {
    padding: 5px;
  }

  .edit:hover,
  .delete:hover {
    background-color: #249990;
    color: white;
    cursor: pointer;
  }
}
</style>

<script src="./scripts/TablePage.js"></script>
