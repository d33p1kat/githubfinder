class Ui{
    constructor(){
        this.profile = document.getElementById("profile");
    }
    showalert(){
        const container = document.getElementById("containerone");
        const cont = document.getElementById("newcard");
        const div = document.createElement("div");
        div.className = "alert alert-danger"
        div.appendChild(document.createTextNode("User Not Found"))
        container.insertBefore(div, cont);
        setTimeout(clearError, 1000);
    }
    showprofile(user){
        this.profile.innerHTML = `
        <div class='card card-body mb-3'>
            <div class="row">
                <div class="col-md-3">
                    <img class="img-fluid mb-2" src="${user.avatar_url}">
                    <a href ="${user.html_url}" target="_blank" class="btn btn-primary btn-block">View Profile</a>
                </div>
                <div class="col-md-9">
                    <span class="badge badge-primary p-3"> Public_Repos ${user.public_repos}</span>
                    <span class="badge badge-secondary p-3"> Public_Gists ${user.public_gists}</span>
                    <span class="badge badge-success p-3"> Followers ${user.followers}</span>
                    <span class="badge badge-info p-3"> Following ${user.following}</span>
                <br><br>
                <ul class="list-group">
                    <li class="list-group-item">Company: ${user.company}</li> 
                    <li class="list-group-item">Website: ${user.blog}</li>
                    <li class="list-group-item">Location: ${user.location}</li>
                    <li class="list-group-item">Member Since: ${user.created_at}</li>
                </ul>
                </div>
            </div>
         </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>
        `;
       
        
    }
    showrepodata(repos){
        let output = "";
        repos.forEach(function(repo){
            output += 
            `<div class="card card-body mb-2">
                 <div class="row">
                    <div class="col-md-6">
                       <a href ="${repo.html_url}" target="_blank" class="btn btn-primary btn-block">${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                        <span class="badge badge-primary p-3"> Stars: ${repo.stargazers_count}</span>
                        <span class="badge badge-secondary p-3"> Watchers: ${repo.watchers_count}</span>
                        <span class="badge badge-success p-3"> Forks: ${repo.forks_count}</span>
                    </div>
                 </div>  
            </div>`
        })
        document.getElementById("repos").innerHTML = output;
    }
    clearprofile (){
        this.profile.innerHTML = "";
    }
}


function clearError(){
    document.querySelector(".alert").remove();
};