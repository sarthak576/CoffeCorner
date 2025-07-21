export default function SignInPage() {
  setTimeout(() => {
    // Replace with your real Google OAuth Client ID
    google.accounts.id.initialize({
      client_id: "68501595720-8l5s4tu5lcifqddp8tf9tti1bfsiv4qh.apps.googleusercontent.com",
      callback: handleCredentialResponse,
    });

    google.accounts.id.renderButton(
      document.getElementById("googleSignInBtn"),
      { theme: "outline", size: "large" }
    );
  }, 0); // Allow DOM to load

  function handleCredentialResponse(response) {
    console.log("Google JWT Token:", response.credential);
    alert("✅ Logged In via Google");
    localStorage.setItem("google_token", response.credential);
  }

  return `
    <div style="text-align: center; margin-top: 100px;">
      <h2>Sign In</h2>
      <div id="googleSignInBtn"></div>
    </div>
  `;
}
