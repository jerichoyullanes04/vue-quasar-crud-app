import { createApp, ref, defineComponent } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import { httpGet } from "boot/axios";

// DASHBOARD PAGE FUNCTION //

//  TABLE PAGE FUNCTION //
export default {
  data() {
    return {
      input: null, // Initialize input variable
    };
  },
  methods: {
    // myFunction() {
    //   console.log("test");
    // },

    navigateToNextPage() {
      console.log("test table add");
      this.$router.push({ name: "form-page" });
    },

    onSelectAction(row) {
      console.log("test select");
      selectedRow.value = row;
      form.value.id = row.id;
    },

    updateInput(date) {
      // Update input variable with the selected date
      this.input = date;
    },

    // async navigateToNextPage() {
    //   await this.$router.push({ name: "form-page" });
    //   //this.$router.push("/FormPage.vue");
    // },
  },

  name: "MyTable",
  setup() {
    // Sample data
    // const tableData = ref([
    //   {
    //     id: 1,
    //     name: "John Doe",
    //     email: "john@example.com",
    //     status: "single",
    //     address: "palmera",
    //   },
    //   {
    //     id: 2,
    //     name: "Jane Doe",
    //     email: "jane@example.com",
    //     status: "single",
    //     address: "palmera",
    //   },
    //   // Add more rows as needed
    // ]);

    const router = useRouter();
    // Define table rows
    const rows = ref([]);
    // Define table columns
    const columns = ref([
      {
        name: "id",
        required: true,
        label: "Employee ID",
        align: "left",
        field: "id",
        sortable: true,
        headerStyle: "width: 0px",
      },
      {
        name: "name",
        align: "left",
        label: "Name",
        field: "name",
        sortable: true,
        headerStyle: "width: 0px",
      },
      {
        name: "email",
        align: "left",
        label: "Email",
        field: "email",
        sortable: true,
        headerStyle: "width: 300px",
      },
      {
        name: "status",
        align: "left",
        label: "Status",
        field: "status",
        sortable: true,
        headerStyle: "width: 300px",
      },
      {
        name: "address",
        align: "left",
        label: "Address",
        field: "address",
        sortable: true,
        headerStyle: "width: 300px",
      },
      { name: "actions", label: "Action" },
    ]);

    // HTTP Request Function using Axios to fetch data from the API
    const getData = () => {
      axios.get("http://localhost:5000/posts").then((response) => {
        rows.value = response.data;
      });
    };

    getData(); // Execute the HTTP Request Function

    /* FORM FUNCTION AND VARIABLES */
    let form = ref({
      id: 1,
      name: null,
      email: null,
      status: null,
      address: null,
    });

    // SELECT Todo Function
    let selectedRow = ref({});
    const onRowClick = (evt, row) => {
      selectedRow.value = row;
      form.value.title = row.id;
      console.log(form.value.title);
    };

    // Edit Todo Function
    let editBtnLoadingState = ref(false);
    const editEmployee = () => {
      //console.log("Testing Edit Button");
      ///console.log(selectedRow.value);

      const data = defineComponent([selectedRow.value]);
      console.log(data);
      // this.$router.push({
      //   name: "form-page",
      //   params: {
      //     id: row.id,
      //     name: row.name,
      //     email: row.email,
      //     status: row.status,
      //     address: row.address,
      //   },
      // });

      router.push({ name: "form-page" });
    };

    // DELETE Todo Function
    let deleteBtnLoadingState = ref(false);
    const deleteEmployee = () => {
      deleteBtnLoadingState.value = true;
      axios
        .delete(`http://localhost:5000/posts/${selectedRow.value.id}`)
        .then((response) => {
          if (response.status === 200) {
            rows.value = rows.value.filter(
              (row) => row.id !== selectedRow.value.id
            );
            form.value.title = null;
            selectedRow.value = {};
          }
          deleteBtnLoadingState.value = false;
        });
    };

    return {
      rows,
      columns,
      form,
      selectedRow,
      onRowClick,
      editEmployee,
      deleteEmployee,
    };
  },
};
