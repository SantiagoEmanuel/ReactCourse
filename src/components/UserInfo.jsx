import { ShowAvatar } from "./ui/ShowAvatar";

export function UserInfo({ user }) {
  return (
    <header className="m-auto max-w-[600px] ">
      <div className="content-center">
        <ShowAvatar
          avatar={user.avatar}
          alt={`${user.first_name} ${user.last_name} avatar`}
          className="m-auto h-auto w-[200px] rounded-full"
        />
      </div>
      <div className="flex flex-col gap-4 pt-4">
        <h2 className=" text-center text-2xl font-normal">
          {user.first_name} {user.last_name}
        </h2>
        <div className="flex flex-col items-center justify-center">
          <p className="opacity-40">@{user.username}</p>
          <p className="opacity-40">{user.email}</p>
        </div>
      </div>
    </header>
  );
}
