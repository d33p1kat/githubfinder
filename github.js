class Github {
    constructor(){
        this.client_id = "32c8e2a1bfc3976366b1";
        this.client_secret = "b518ff63554d3a99dcbd1b8015d9399a948e29e9";
        this.repos_count = 5
        this.repos_sort = 'created: asc';
    }
    async getuser(user){
       const profileresponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}client_secret=${this.client_secret}`)
       const reporesponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count }&sort=${this.repos_sort}&client_id=${this.client_id}client_secret=${this.client_secret}`)
       const profiledata = await profileresponse.json();
       const repodata = await reporesponse.json();
       return {
           profile : profiledata,
           repo:  repodata
       }
    }
}