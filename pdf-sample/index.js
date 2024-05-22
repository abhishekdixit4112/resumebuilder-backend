module.exports = ({
    name,
    email,
    phone,
    linkedin,
    github,
    leetcode,
    
    edu1_school,
    edu1_year,
    edu1_qualification,
    grade1,
    edu2_school,
    edu2_year,
    edu2_qualification,
    grade2,
    
    proj1_title,
    proj1_link,
    proj1_desc,
    proj2_title,
    proj2_link,
    proj2_desc,

    skill1,
    skill2,
    skill3,
    skill4,

    exp1_org,
    exp1_pos,
    exp1_desc,
    exp1_dur,
    exp2_org,
    exp2_pos,
    exp2_desc,
    exp2_dur,
    
    achiev1,
    achiev2,
    achiev3,

    certif1,
    certif2,
    certif3,
   

    extra_1,
    extra_2,
}) => {
    return `
        <!doctype html>
        <html>
            <head>
                <!-- Font Awesome -->
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css">
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
                <!-- Bootstrap core CSS -->
                <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">
                <!-- Material Design Bootstrap -->
                <link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.7.5/css/mdb.min.css" rel="stylesheet">
    
                <style>
                  html{
                      zoom: 0.55;
                  }    
                  .rule{
                    border-bottom: 1px solid black;
                    width:80%;
                  }
                  .mobile{
                    margin-top:-10px;
                  }
                  .email{
                    margin-bottom: 0;    
                  }
                  body{
                    font-family: 'Garamond';
                  }
                </style>
            
            </head>
            <body>
    
            <div class="col-lg-8 mx-auto">
            <br/><br/>
            <div class="row text-center">
                <div class="col-lg-6">
                    <h1><b>${name}</b></h1>
                    <p class="lead email text-decoration-underline"><strong>Email:</strong> ${email}</p>
                    <p class="lead text-decoration-underline"><strong>Contact:</strong> (+91)${phone}</p>
                    <p class="lead text-decoration-underline"><strong>LinkedIn:</strong> ${linkedin}</p>
                    <p class="lead text-decoration-underline"><strong>Github:</strong> ${github}</p>
                    <p class="lead text-decoration-underline"><strong>LeetCode:</strong> ${leetcode}</p>
                </div>    
            </div>
          
            <hr/>

            <div class="col-lg-8 mx-auto bg-light">
                  <h3><b>Education</b></h3>
            </div>
            <div class="col-lg-8 mx-auto">
                  <p class="lead"><b>${edu1_school}</b>-- ${edu1_year}</p>
                  <p class="lead">${edu1_qualification}--${grade1}</p>
                  
            </div>
            <div class="col-lg-8 mx-auto">
            <p class="lead"><b>${edu2_school}</b>-- ${edu2_year}</p>
            <p class="lead">${edu2_qualification}--${grade2}</p>
            
            </div>

            <div class="col-lg-8 mx-auto bg-light">
                  <h3><b>CourseWork / Skills</b></h3>
            </div>
            <div class="col-lg-8 row mx-auto">
            <li><p class="lead"><b>Technologies/FrameWork: </b>${skill1} </p></li>
            <li><p class="lead"><b>Languages: </b>${skill2} </p></li>
            <li><p class="lead"><b>Developer Tools: </b>${skill3} </p></li>
            <li><p class="lead"><b>Relevant courseWork: </b>${skill4} </p></li>
               
            </div>
    
            <div class="col-lg-8 mx-auto bg-light">
            <h3><b>Projects</b></h3>
            </div>
            <div class="col-lg-8 mx-auto">
            <p class="lead"><b class="text-decoration-underline">${proj1_title}</b>:${proj1_desc}</p>
            <p class="mt-0"><a href="${proj1_link}">${proj1_link}</a></p>
             </div>
              <div class="col-lg-8 mx-auto">
              <p class="lead"><b class="text-decoration-underline">${proj2_title}</b>:${proj2_desc}</p>
              <p class="mt-0"><a href="${proj2_link}">${proj2_link}</a></p>
            </div>      
      

            <div class="col-lg-8 mx-auto bg-light">
                  <h3><b>Experience</b></h3>
            </div>
            <div class="col-lg-8 mx-auto">
                  <p class="lead"><b class="text-decoration-underline">${exp1_org}</b>: ${exp1_pos} (${exp1_dur})</p>
                  <p class="mt-0">${exp1_desc}</p>
            </div>
            <div class="col-lg-8 mx-auto">
                  <p class="lead"><b class="text-decoration-underline">${exp2_org}</b> : ${exp2_pos}(${exp2_dur})</p>
                  <p class="mt-0">${exp2_desc}</p>
            </div>
               
            <div class="col-lg-8 mx-auto bg-light">
                  <h3><b>Achievements</b></h3>
            </div>
            <div class="col-lg-8 mx-auto">
                 
                    <p class="lead">${achiev1} </p>
                    <p class="lead">${achiev2} </p>
                    <p class="lead">${achiev3} </p>
            </div>

            <div class="col-lg-8 mx-auto bg-light">
                  <h3><b>Certifications</b></h3>
            </div>
            <div class="col-lg-8 mx-auto">
                 
                    <p class="lead">${certif1} </p>
                    <p class="lead">${certif2} </p>
                    <p class="lead">${certif3} </p>
            </div>
            
            <div class="col-lg-8 mx-auto bg-light">
                  <h3><b>Extra-Curriculars/Activities</b></h3>
            </div>
            <div class="col-lg-8 mx-auto">
                  <ul>
                    <li><p class="lead"><b>Languages: </b>${extra_1} </p></li>
                    <li><p class="lead"><b>Hobbies: </b>${extra_2} </p></li>
                  </ul>
                  
            </div>
            
                <!-- JQuery -->
                <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
                <!-- Bootstrap tooltips -->
                <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js"></script>
                <!-- Bootstrap core JavaScript -->
                <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js"></script>
                <!-- MDB core JavaScript -->
                <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.7.5/js/mdb.min.js"></script>
            </body>
        </html> 
      `;
};