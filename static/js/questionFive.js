async function handleFive() {
    const response = await axios.get("https://reqres.in/api/users?page=2").catch(function (error) {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log('Error', error.message);
    }
    console.log(error.config);
  });
    console.log("Axios data");
    console.log(
      `${response.data.data[0].first_name} ${response.data.data[0].last_name}`,
    );
    console.log(`email: ${response.data.data[0].email}`);
    document.getElementById("check-console").innerHTML = "Check console!";
}
