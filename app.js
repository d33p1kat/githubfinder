const github = new Github;
const ui = new Ui;
document.getElementById("searchuser").addEventListener('keyup', (e) => {
    const username = (e.target.value);
    if (username !== ""){
        github.getuser(username)
          .then(data => {
              if(data.profile.message === "Not Found"){
                  ui.showalert();
              }else{
                 ui.showprofile(data.profile);
                 ui.showrepodata(data.repo);
              }
            });
        
    }else{
        //clearprofile
        ui.clearprofile();
    }
    e.preventDefault();
});