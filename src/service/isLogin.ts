export const isLogin = () => {
  var date = new Date();
  var year = date.getFullYear();
  const cookie = localStorage.getItem(`MoodleSession${year}`);
  if(!cookie) {
    return 0;
  }
  return 1;
}