import { useUserToggleContext } from '../hook/useUserToggleContext'

export function RegisterView() {

     const loginUser = useUserToggleContext()

     const handleSubmit = (e) => {
          e.preventDefault();
          fetch("https://e-commerce-db-65ce.onrender.com/user", {
               method: "POST",
               headers: {
                    'Content-Type': 'application/json',
               },
               body: JSON.stringify({
                    username: e.target.username.value.toLowerCase(),
                    first_name: e.target.first_name.value,
                    last_name: e.target.last_name.value,
                    email: e.target.email.value,
                    password: e.target.password.value
               })
          }).then(r => r.json()).then(({ ok }) => {

               console.log(ok)

               if (ok) {
                    loginUser(e.target.username.value, e.target.password.value);
               }
          })
     }

     return (
          <section className=" flex flex-col items-center w-full gap-8">
               <h2 className="text-3xl text-orange-600">Create your user</h2>
               <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-screen-sm gap-4">
                    <label className="flex flex-col w-full gap-1">
                         Username
                         <input className="w-full p-2 border rounded-sm outline-none" min={8} max={20} type="text" name="username" placeholder="username" autoComplete='username' required />
                    </label>
                    <label className="flex flex-col w-full gap-1">
                         First Name
                         <input className="w-full p-2 border rounded-sm outline-none" type="text" name="first_name" placeholder="first name" required />
                    </label>
                    <label className="flex flex-col w-full gap-1">
                         Last Name
                         <input className="w-full p-2 border rounded-sm outline-none" type="text" name="last_name" placeholder="last name" required />
                    </label>
                    <label className="flex flex-col w-full gap-1">
                         Email
                         <input className="w-full p-2 border rounded-sm outline-none" type="email" name="email" placeholder="email" required />
                    </label>
                    <label className="flex flex-col w-full gap-1">
                         Password
                         <input className="w-full p-2 border rounded-sm outline-none" min={8} max={64} type="password" name="password" placeholder="password" autoComplete='current-password' required />
                    </label>
                    <button className="rounded-xl hover:bg-gray-300 hover:text-black py-2 text-xl transition-colors border-2">Create user</button>
               </form>
          </section>
     )
}