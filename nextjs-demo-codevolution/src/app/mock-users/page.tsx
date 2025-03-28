import { revalidatePath } from "next/cache";
import { auth, currentUser } from "@clerk/nextjs/server";

type MockUser = {
  id: number;
  name: string;
};

export default async function MockUsers() {
  const authObj = await auth();
  const userObj = await currentUser();
  console.log(authObj, userObj);

  //   await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(
    "https://67e6dcfa6530dbd31111ba88.mockapi.io/users"
  );
  const users = await response.json();

  async function addUser(formData: FormData) {
    "use server";
    const name = formData.get("name") as string;
    const res = await fetch(
      "https://67e6dcfa6530dbd31111ba88.mockapi.io/users",
      {
        method: "POST",
        body: JSON.stringify({ name }),
        headers: { "Content-Type": "application/json", Authorization: "KEY" },
      }
    );
    const newUser = await res.json();
    revalidatePath("/mock-users");
    console.log(newUser);
  }

  return (
    <div className="py-10">
      <form action={addUser} className="mb-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="p-2 ml-2 bg-white rounded-md text-gray-800"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 ml-4 text-white p-2 rounded-md"
        >
          Add User
        </button>
      </form>
      <ul className="grid grid-cols-4 gap-4 p-10">
        {users.map((user: MockUser) => (
          <li
            key={user.id}
            className="p-4 bg-white shadow-md rounded-lg text-gray-800"
          >
            {user.id} ({user.name})
          </li>
        ))}
      </ul>
    </div>
  );
}
