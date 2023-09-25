import { ref } from "vue";

export const useValidation = () => {
  const text = ref("");
  const hasError = ref(true);

  const validateInput = () => {
    if (text.value.trim() === "") {
      hasError.value = true;
    } else {
      hasError.value = false;
    }
  };

  return {
    text,
    hasError,
    validateInput,
  };
};
