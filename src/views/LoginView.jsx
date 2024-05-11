import { useUserToggleContext } from '../hook/useUserToggleContext'

export function LoginView() {
     const { loginUser } = useUserToggleContext();

     const handleSubmit = (e) => {
          e.preventDefault();
          loginUser(e.target.username.value, e.target.password.value);
     }


     return (
          <section className=" flex flex-col items-center w-full gap-8">
               <h2 className="text-2xl font-bold text-center">Log in</h2>
               <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-screen-sm gap-4">
                    <label className="flex flex-col w-full" >
                         Username:
                         <input type="text" name="username" className="px-4 py-2 border" placeholder="Patrocleo" autoComplete='username' />
                    </label>
                    <label className="flex flex-col w-full" >
                         Password:
                         <input type="password" name="password" className="px-4 py-2 border" placeholder="*********" autoComplete="current-password" />
                    </label>
                    <button className="rounded-xl hover:bg-gray-300 hover:text-black py-2 text-xl font-bold transition-colors border-2">Log in</button>
               </form>
          </section>
     )
}