import { computed } from "vue";
import { useStore } from "vuex";

const useAuth = () => {
  const store = useStore();
  const checkAuthStatus = async () => {
    const resp = await store.dispatch("auth/checkAuthentication");
    return resp;
  };
  return {
    checkAuthStatus,
    authStatus: computed(() => store.getters["auth/currentState"]),
  };
};
export default useAuth;
