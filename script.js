window.addEventListener("load", function() {
    this.fetch("https://coney-s.github.io/profile-website/jobs.json", {cache: "no-cache"}).then(function(response) {
        response.json().then(function(json) {

            console.log(json);

            for (let i = 0; i < json.length; i++) {
                const div = document.getElementById("careers");

                let jobElement = document.createElement('div');
                jobElement.className = 'job';

                jobElement.innerHTML = `
                    <div class="row">
                        <div class="col-lg-6">
                            <h3 class="green"><strong>${json[i].company}</strong></h3>
                            <p>${json[i].date}</p>
                        </div>
                        <div class="col-lg-6">
                            <h3><strong>${json[i].position}</strong></h3>
                            <p>${json[i].description}</p>
                            <p>${json[i].location}</p>
                        </div>
                    </div>  
                    <br>          
                `;

                div.append(jobElement);
            }
        })
    })})