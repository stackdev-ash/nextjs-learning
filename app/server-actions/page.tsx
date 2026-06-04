async function submitForm(formdata:FormData) {
    "use server";
    const name = formdata.get("name");
    console.log(name);
}

export default function Page() {
    return (
    <form action={submitForm}>
      <input
        type="text"
        name="name"
        placeholder="Enter Name"
      />

      <button type="submit">
        Submit
      </button>
    </form>
  );
}