export function getAuthForm() {
  return `
    <form class="mui-form" id="auth-form">
      <div class="mui-textfield mui-textfield--float-label">
        <input
          type="email"
          id="email"
          requred
        />
        <label for="email">Email</label>
      </div>
      <div class="mui-textfield mui-textfield--float-label">
        <input
          type="password"
          id="password"
          requred
        />
        <label for="password">Password</label>
      </div>
      <button
        type="submit"
        class="mui-btn mui-btn--raised mui-btn--primary auth-btn"
      >
        Ask a question
      </button>
    </form>
  `
}

export function authWithEmailAndPassword(email, password) {
  return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.API_KEY}`, {
    method: 'POST',
    body: JSON.stringify({ email, password, returnSecureToken: true }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(data => data.idToken)
}