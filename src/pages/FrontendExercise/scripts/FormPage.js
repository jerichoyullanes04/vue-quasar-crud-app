import { createApp, ref, defineComponent } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

export default {
  methods: {
    // myFunction() {
    //   console.log("test");
    // },

    navigateToPreviousPage() {
      this.$router.push({ name: "table-page" });
      console.log("back to previous page");
    },

    // async navigateToNextPage() {
    //   await this.$router.push({ name: "form-page" });
    //   //this.$router.push("/FormPage.vue");
    // },
  },

  name: "MyForm",
  setup(props) {
    const users = ref([]);
    const name = ref("");
    const id = ref("");
    const email = ref("");
    const task = ref("");
    const desc = ref("");
    const status = ref("");
    const address = ref("");
    const router = useRouter();

    const navigateToPreviousPage = () => {
      router.push({ name: "table-page" });
      console.log("back to the previous page");
    };

    const submitForm = async () => {
      // Handle form submission logic here
      // console.log("Form submitted:", {
      //   id: id.value,
      //   name: name.value,
      //   email: email.value,
      //   task: task.value,
      //   desc: desc.value,
      //   status: status.value,
      //   address: address.value,
      // });

      const user = {
        id: id.value,
        name: name.value,
        email: email.value,
        task: task.value,
        desc: desc.value,
        status: status.value,
        address: address.value,
      };
      addUserLocally(user);

      try {
        // Save data to the server
        await saveUserToServer(user);
        clearForm();
      } catch (error) {
        console.error("Error saving user:", error);
      }

      navigateToPreviousPage();
    };

    const addUserLocally = (user) => {
      // Add user to local data for immediate UI update
      users.value.push(user);
    };

    const saveUserToServer = async (user) => {
      // Save user data to the server using Axios
      await axios.post("http://localhost:5000/posts", user);
    };

    const clearForm = () => {
      // Clear form fields after submission
      name.value = "";
      id.value = "";
      email.value = "";
      task.value = "";
      desc.value = "";
      status.value = "";
      address.value = "";
    };

    return {
      name,
      id,
      email,
      task,
      desc,
      status,
      address,
      submitForm,
    };
  },
};
