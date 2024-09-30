export async function signup(req, res) {
  try {
    res.send("SignUp route");
  } catch (error) {}
}

export async function login(req, res) {
  res.send("Login route");
}

export async function logout(req, res) {
  res.send("Logout route");
}
