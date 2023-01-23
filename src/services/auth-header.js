export default function authHeader() {
  let user = JSON.parse(localStorage.getItem("user"));
  let token = JSON.parse(localStorage.getItem("token"));
  const lang = localStorage.getItem("lang") || "en";

  if (user && token) {
    return {
      Authorization: "Bearer " + token,
      Accept: "application/json",
      "Content-Type": "application/json",
      lang: lang,
    };
  } else {
    return {};
  }
}
