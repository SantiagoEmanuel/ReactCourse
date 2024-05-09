import { useUserToggleContext } from '../hook/useUserToggleContext'

export function RegisterView() {

     const loginUser = useUserToggleContext()

     const handleSubmit = (e) => {
          e.preventDefault();
          fetch("http://localhost:5000/user", {
               method: "POST",
               headers: {
                    'Content-Type': 'application/json',
               },
               body: JSON.stringify({
                    username: e.target.username.value,
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
               <h2 className="text-3xl text-orange-400">Register</h2>
               <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-screen-sm gap-4">
                    <label className="flex flex-col w-full gap-1">
                         Username
                         <input className="w-full p-2 border outline-none" type="text" name="username" placeholder="username" />
                    </label>
                    <label className="flex flex-col w-full gap-1">
                         First Name
                         <input className="w-full p-2 border outline-none" type="text" name="first_name" placeholder="first name" />
                    </label>
                    <label className="flex flex-col w-full gap-1">
                         Last Name
                         <input className="w-full p-2 border outline-none" type="text" name="last_name" placeholder="last name" />
                    </label>
                    <label className="flex flex-col w-full gap-1">
                         Email
                         <input className="w-full p-2 border outline-none" type="email" name="email" placeholder="email" />
                    </label>
                    <label className="flex flex-col w-full gap-1">
                         Password
                         <input className="w-full p-2 border outline-none" type="password" name="password" placeholder="password" />
                    </label>
                    <button className="rounded-xl py-4 text-xl text-orange-400 border">Create user</button>
               </form>
          </section>
     )
}