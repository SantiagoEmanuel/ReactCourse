export const createUser = (username, first_name, last_name, email, password) => {
     fetch("https://e-commerce-db-65ce.onrender.com/user", {
          method: "POST",
          headers: {
               'Content-Type': 'application/json',
          },
          body: JSON.stringify({
               username: username,
               first_name: first_name,
               last_name: last_name,
               email: email,
               password: password
          })
     }).then(r => r.json()).then(({ ok }) => {
          return ok;
     })
}