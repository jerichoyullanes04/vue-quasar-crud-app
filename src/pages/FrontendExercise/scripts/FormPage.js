import { ref } from "vue";
import axios from "axios";

export default {
  methods: {
    navigateToPreviousPage() {
      this.$router.push({ name: "table-page" });
      console.log("back to previous page");
    },
  },

  setup() {
    let form = ref({
      id: null,
      name: null,
      email: null,
      task: null,
      desc: null,
      address: null,
      status: null,
    });

    let storeID = null;
    let rows = ref([]);

    const checkStoreID = () => {
      if (!storeID) {
        return false;
      }
      return true;
    };

    const getID = (id) => {
      storeID = id;
      if (checkStoreID()) {
        getData();
      }
    };

    const getData = () => {
      axios.get(`http://localhost:5000/posts/${storeID}`).then((response) => {
        form.value.id = response.data.id;
        form.value.name = response.data.name;
        form.value.email = response.data.email;
        form.value.task = response.data.task;
        form.value.desc = response.data.desc;
        form.value.address = response.data.address;
        form.value.status = response.data.status;
      });
    };

    const updateData = () => {
      axios.put(`http://localhost:5000/posts/${storeID}`, {
        id: form.value.id,
        name: form.value.name,
        email: form.value.email,
        task: form.value.task,
        desc: form.value.desc,
        address: form.value.address,
        status: form.value.status,
      });
    };

    const saveChanges = () => {
      axios.post("http://localhost:5000/posts", form.value).then((response) => {
        if (response.status === 5) {
          rows.value.unshift(response.data);
          form.value.id = null;
          form.value.name = null;
          form.value.email = null;
          form.value.task = null;
          form.value.desc = null;
          form.value.address = null;
          form.value.status = null;
        }
      });
    };

    return {
      form,
      checkStoreID,
      getID,
      updateData,
      saveChanges,
      editDialog: ref(false),
      addDialog: ref(false),
    };
  },

  mounted() {
    const id = this.$route.query.id;
    this.getID(id);
  },
};
