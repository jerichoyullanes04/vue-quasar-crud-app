import { createApp, ref, defineComponent } from "vue";
import { useRouter } from "vue-router";

export default {
  // ... other component options ...

  methods: {
    // myFunction() {
    //   console.log("test");
    // },

    navigateToNextPage() {
      this.$router.push({ name: "table-page" });
      //this.$router.push("/TablePage.vue");
    },

    // async navigateToNextPage() {
    //   await this.$router.push({ name: "table-page" });
    //   //this.$router.push("/TablePage.vue");
    // },
  },
};
