const getLocalStorage = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("auth");
  }
};

const setLocalStorage = (auth: string) => {
  if (typeof window !== "undefined") {
    return localStorage.setItem("auth", auth);
  }
};

const clearLocalStorage = () => {
  if (typeof window !== "undefined") {
    return localStorage.clear();
  }
};

export { getLocalStorage, setLocalStorage, clearLocalStorage };
