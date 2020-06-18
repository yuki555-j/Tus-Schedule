export const isLogin = () => {
  if (process.browser) {
    const cookie = localStorage.getItem("cookie");
    if (!cookie) {
      return false;
    }
    return true;
  }
  return false;
}