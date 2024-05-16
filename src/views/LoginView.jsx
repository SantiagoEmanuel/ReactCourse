import { useUserToggleContext } from "../hook/useUserToggleContext";

export function LoginView() {
  const { login } = useUserToggleContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(e.target.email.value.toLowerCase(), e.target.password.value);
  };

  return (
    <section className=" flex w-full flex-col items-center gap-8">
      <h2 className="text-center text-2xl font-bold">Log in</h2>
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-screen-sm flex-col gap-4"
      >
        <label className="flex w-full flex-col">
          E-mail:
          <input
            type="text"
            name="email"
            className="border px-4 py-2"
            placeholder="Patrocleo@protrocleo.com"
            autoComplete="email"
          />
        </label>
        <label className="flex w-full flex-col">
          Password:
          <input
            type="password"
            name="password"
            className="border px-4 py-2"
            placeholder="*********"
            autoComplete="current-password"
          />
        </label>
        <button className="rounded-xl border-2 py-2 text-xl font-bold transition-colors hover:bg-gray-300 hover:text-black">
          Log in
        </button>
      </form>
    </section>
  );
}
