import { useState } from "react";
import { useUserToggleContext } from "../hook/useUserToggleContext";
import { creationValidateUser } from "../schema/user";
import { Container } from "../components/containers/Container";

export function RegisterView() {
  const { createNewUser } = useUserToggleContext();
  const [inputErrorMessage, setInputErrorMessage] = useState({
    email: "",
    username: "",
    password: "",
    avatar: "",
    first_name: "",
    last_name: "",
  });
  const handleChange = (e) => {
    if (e.target.classList.contains("border-red-500")) {
      e.target.classList.remove("border-red-500");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const input = {
      username: e.target.username.value,
      first_name: e.target.first_name.value,
      last_name: e.target.last_name.value,
      avatar: e.target.avatar.value,
      password: e.target.password.value,
      email: e.target.email.value.toLowerCase(),
    };

    const result = creationValidateUser({ input: input });

    if (result.success) {
      const { email, password, username, first_name, last_name, avatar } =
        result.data;

      createNewUser(email, password, {
        username,
        first_name,
        last_name,
        avatar,
      });
      return;
    }

    setInputErrorMessage({
      email: "",
      username: "",
      password: "",
      avatar: "",
      first_name: "",
      last_name: "",
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
      <h2 className="text-center text-3xl">Create your user</h2>
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-screen-sm flex-col gap-4"
      >
        <label className="flex w-full flex-col gap-1">
          Email
          <input
            id="email"
            className="w-full rounded-sm border p-2 outline-none"
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="email"
          />
          <span className=" font-semibold max-sm:text-xs">
            {inputErrorMessage.email != "" && inputErrorMessage.email}
          </span>
        </label>
        <label className="flex w-full flex-col gap-1">
          Password
          <input
            id="password"
            className="w-full rounded-sm border p-2 outline-none"
            min={8}
            max={64}
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="password"
            autoComplete="current-password"
          />
          <span className=" font-semibold max-sm:text-xs">
            {inputErrorMessage.password != "" && inputErrorMessage.password}
          </span>
        </label>
        <div className="flex gap-4 max-[500px]:flex-col">
          <label className="flex w-full flex-col gap-1">
            Username
            <input
              id="username"
              className="w-full rounded-sm border p-2 outline-none"
              type="text"
              name="username"
              onChange={handleChange}
              placeholder="Patrocleo"
            />
            <span className=" font-semibold max-sm:text-xs">
              {inputErrorMessage.username != "" && inputErrorMessage.username}
            </span>
          </label>
          <label className="flex w-full flex-col gap-1">
            Avatar Url
            <input
              id="avatar"
              className="w-full rounded-sm border p-2 outline-none"
              type="text"
              name="avatar"
              onChange={handleChange}
              placeholder="Patrocleo"
            />
            <span className=" font-semibold max-sm:text-xs">
              {inputErrorMessage.avatar != "" && inputErrorMessage.avatar}
            </span>
          </label>
        </div>
        <div className="flex gap-4 max-[500px]:flex-col">
          <label className="flex w-full flex-col gap-1">
            First Name
            <input
              id="first_name"
              className="w-full rounded-sm border p-2 outline-none"
              type="text"
              name="first_name"
              onChange={handleChange}
              placeholder="Patrocleo"
            />
            <span className=" font-semibold max-sm:text-xs">
              {inputErrorMessage.first_name != "" &&
                inputErrorMessage.first_name}
            </span>
          </label>
          <label className="flex w-full flex-col gap-1">
            Last Name
            <input
              id="last_name"
              className="w-full rounded-sm border p-2 outline-none"
              type="text"
              name="last_name"
              onChange={handleChange}
              placeholder="Bimbo"
            />
            <span className=" font-semibold max-sm:text-xs">
              {inputErrorMessage.last_name != "" && inputErrorMessage.last_name}
            </span>
          </label>
        </div>
        <button className="rounded-xl border-2 py-2 text-xl transition-colors hover:bg-gray-300 hover:text-black">
          Create user
        </button>
      </form>
    </Container>
  );
}
