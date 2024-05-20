import { useUserToggleContext } from "../hook/useUserToggleContext";

export function RegisterView() {
  const { createNewUser } = useUserToggleContext();
  const handleSubmit = (e) => {
    e.preventDefault();

    const info = {
      username: e.target.username.value,
      first_name: e.target.first_name.value,
      last_name: e.target.last_name.value,
      avatar: e.target.avatarUrl.value,
    };

    createNewUser(
      e.target.email.value.toLowerCase(),
      e.target.password.value,
      info,
    );
  };

  return (
    <section className=" flex w-full flex-col items-center gap-8">
      <h2 className="text-center text-3xl">Create your user</h2>
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-screen-sm flex-col gap-4"
      >
        <label className="flex w-full flex-col gap-1">
          Email
          <input
            className="w-full rounded-sm border p-2 outline-none"
            type="email"
            name="email"
            placeholder="email"
            required
          />
        </label>
        <label className="flex w-full flex-col gap-1">
          Password
          <input
            className="w-full rounded-sm border p-2 outline-none"
            min={8}
            max={64}
            type="password"
            name="password"
            placeholder="password"
            autoComplete="current-password"
            required
          />
        </label>
        <div className="flex gap-4 max-[500px]:flex-col">
          <label className="flex w-full flex-col gap-1">
            Username
            <input
              className="w-full rounded-sm border p-2 outline-none"
              type="text"
              name="username"
              placeholder="Patrocleo"
            />
          </label>
          <label className="flex w-full flex-col gap-1">
            Avatar Url
            <input
              className="w-full rounded-sm border p-2 outline-none"
              type="text"
              name="avatarUrl"
              placeholder="Patrocleo"
            />
          </label>
        </div>
        <div className="flex gap-4 max-[500px]:flex-col">
          <label className="flex w-full flex-col gap-1">
            First Name
            <input
              className="w-full rounded-sm border p-2 outline-none"
              type="text"
              name="first_name"
              placeholder="Patrocleo"
            />
          </label>
          <label className="flex w-full flex-col gap-1">
            Last Name
            <input
              className="w-full rounded-sm border p-2 outline-none"
              type="text"
              name="last_name"
              placeholder="Bimbo"
            />
          </label>
        </div>
        <button className="rounded-xl border-2 py-2 text-xl transition-colors hover:bg-gray-300 hover:text-black">
          Create user
        </button>
      </form>
    </section>
  );
}
