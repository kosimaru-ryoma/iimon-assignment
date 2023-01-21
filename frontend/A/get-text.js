const get_fact_req = async () => {
  const url = "https://catfact.ninja/fact";
  const res = await fetch(url);

  if (res.status != 200) {
    alert("sorry cant get fact");
  }
  const data = await res.json();
  return data;
};

const insert_random_fact_into_html = () => {
  get_fact_req()
    .then((res) => {
      document.getElementById("fact_contents").textContent = res.fact;
    })
    .catch((err) => {
      console.log(err);
      alert("sorry cant get fact");
    });
};
