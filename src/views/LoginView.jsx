import { useState } from "react";
import { useUserToggleContext } from "../hook/useUserToggleContext";
import { loginValidateUser } from "../schema/user";
import { Container } from "../components/containers/Container";

export function LoginView() {
  const { login } = useUserToggleContext();
  const [inputErrorMessage, setInputErrorMessage] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    if (e.target.classList.contains("border-red-500")) {
      e.target.classList.remove("border-red-500");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const input = {
      email: e.target.email.value.toLowerCase(),
      password: e.target.password.value,
    };

    const result = loginValidateUser({ input: input });

    if (result.success) {
      const { email, password } = result.data;
      login(email, password);
      return;
    }

    setInputErrorMessage({
      email: "",
      password: "",
    });

    const newErrors = {};
    result.error.errors.map((err) => {
      document.getElementById(err.path[0]).classList.add("border-red-500");
      newErrors[err.path[0]] = err.message;
    });

    setInputErrorMessage(newErrors);
  };

  return (
    <Container className=" flex w-full flex-col items-center gap-8">
      <h2 className="text-center text-2xl font-bold">Log in</h2>
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-screen-sm flex-col gap-4"
      >
        <label className="flex w-full flex-col">
          E-mail:
          <input
            id="email"
            type="text"
            name="email"
            className="border px-4 py-2"
            placeholder="Patrocleo@protrocleo.com"
            autoComplete="email"
            onChange={handleChange}
          />
          <span className=" max-sm:text-sm">
            {inputErrorMessage.email != "" && inputErrorMessage.email}
          </span>
        </label>
        <label className="flex w-full flex-col">
          Password:
          <input
            id="password"
            type="password"
            name="password"
            className="border px-4 py-2"
            placeholder="*********"
            autoComplete="current-password"
            onChange={handleChange}
          />
          <span className=" max-sm:text-sm">
            {inputErrorMessage.password != "" && inputErrorMessage.password}
          </span>
        </label>
        <button className="rounded-xl border-2 py-2 text-xl font-bold transition-colors hover:bg-gray-300 hover:text-black">
          Log in
        </button>
      </form>
    </Container>
  );
}
