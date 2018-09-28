class GitHub {
    constructor() {
        // My local keys for this project, there is not a server or an easy way to encrypt the GitHub API Client ID & Client Secret for a training application
        // You can easily generate your own GitHub API by getting started here, https://developer.github.com/program/
        this.client_id = 'e82781d37739dc5fffb6';
        this.client_secret = 'b6b92c06bd739a6ccdd755c302cceaf2edd677f6';
        // limiting the return of repos to 5 and showing the most recent in ascending order
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        // Selecting GitHub name and then Repos / ? is quesry string
        const profileResponse = await fetch(`https://api.github.com/users/${user}?lient_id=${this.client_id}&client_secret=${this.client_secret}`);

        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await reposResponse.json();

        return {
            profile,
            repos,
        }
    }
}
