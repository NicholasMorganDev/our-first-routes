export default function SignUp ({ setUser }) {

  return (
    <section style={{ background: '#ffff0030'}}>
      <h1>Sign Up</h1>
      <button onClick={() => setUser('New User')}>Sign Up</button>
    </section>
  )
}