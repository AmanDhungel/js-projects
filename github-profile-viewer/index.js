async function fetchGitHubProfile() {
    const username = document.getElementById('username').value;
    const profileInfoElement = document.getElementById('profile-info');

    try {
      // Fetch user data from GitHub API
      const response = await fetch(`https://api.github.com/users/${username}`);
      const userData = await response.json();

      // Display user information
      profileInfoElement.innerHTML = `
        <h2>${userData.name || username}</h2>
        <img id="profile-img" src="${userData.avatar_url}" alt="Profile Image">
        <p>Followers: ${userData.followers}</p>
        <p>Following: ${userData.following}</p>
        <p>Public Repositories: ${userData.public_repos}</p>
        <a href="${userData.html_url}" target="_blank">View on GitHub</a>
      `;
    } catch (error) {
      console.error('Error fetching GitHub profile:', error);
      profileInfoElement.innerHTML = '<p style="color: red;">Error fetching GitHub profile. Please check the username.</p>';
    }
  }