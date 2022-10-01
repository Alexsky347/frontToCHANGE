export async function getUserInformations() {
  console.log("ee -> ", process.env);
  const BACKEND_URL = process.env.API_BACKEND_URL;
  const USER_BACKEND = process.env.USER_BACKEND_URL;
  // Fetch data from external API
  const res = await fetch(`${BACKEND_URL}/users/${USER_BACKEND}/`);
  const data = await res.json();
  console.log(data);

  // Pass data to the page via props
  return { props: { data } };
}
