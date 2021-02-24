(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(7),i=t.n(r),s=(t(13),t(1)),c=t(2),o=t(4),m=t(3),u=t(5),d=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},"I am ",e.name,"."),l.a.createElement("h3",{style:{color:"#fff",fontFamily:"sans-serif "}}," A ",e.role,".",e.roleDescription),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"_blank"},l.a.createElement("i",{className:e.className})))})))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"})))))}}]),a}(n.Component),p=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:"images/pic.jpeg",alt:""})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,e.aboutme),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,e.name),l.a.createElement("br",null),l.a.createElement("span",null,e.address),l.a.createElement("br",null),l.a.createElement("span",null,e.contact),l.a.createElement("br",null),l.a.createElement("span",null,e.email)))))))}}]),a}(n.Component),h=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map(function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.UniversityName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("p",null,"\u2022 ",l.a.createElement("em",{className:"date"},e.MonthOfPassing," ",e.YearOfPassing))),l.a.createElement("p",null,e.Achievements)))}))),l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Work"))),l.a.createElement("div",{className:"nine columns main-col"},e.work&&e.work.map(function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.CompanyName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("br",null),l.a.createElement("em",{className:"date"},e.MonthOfLeaving," ",e.YearOfLeaving)),l.a.createElement("p",null,e.Achievements.map(function(e){return l.a.createElement("div",null,"\u25cf ",e," ")}))))}))),l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"}),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("p",null,e.skillsDescription),l.a.createElement("div",{className:"bars"},l.a.createElement("ul",{className:"skills"},e.skills&&e.skills.map(function(e){return l.a.createElement("li",null,l.a.createElement("span",{className:"bar-expand ".concat(e.skillname.toLowerCase())}),l.a.createElement("em",null,e.skillname))}))))))}}]),a}(n.Component),v=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"portfolio"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("h1",null,"Check Out Some of My Projects."),l.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e.portfolio&&e.portfolio.map(function(e){return l.a.createElement("div",{className:"columns portfolio-item"},l.a.createElement("div",{className:"item-wrap"},l.a.createElement("a",{href:e.url,onClick:function(){return window.open(e.url)}},l.a.createElement("img",{src:"".concat(e.imgurl),className:"item-img"}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"portfolio-item-meta"},l.a.createElement("h5",null,e.name),l.a.createElement("p",null,e.description))))))})))))}}]),a}(n.Component),E=(n.Component,function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"row section-head"},l.a.createElement("div",{className:"ten columns"},l.a.createElement("p",{className:"lead"},"Feel free to contact me",l.a.createElement("hr",null)))),l.a.createElement("div",{className:"row"},l.a.createElement("aside",{className:"eigth columns footer-widgets"},l.a.createElement("div",{className:"widget"},l.a.createElement("h4",null,"  Email:",l.a.createElement("span",null)," ",e.email),l.a.createElement("h4",null,"Linked in:",l.a.createElement("span",null)," ",e.linkedinId)))))}}]),a}(n.Component)),f=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",null,l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))}))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),g={imagebaseurl:"images/portfolio/coffee.jpg",name:"Neel Narvankar",role:"Software and Full Stack Engineer",linkedinId:"https://www.linkedin.com/in/neelnarvankar30/",skypeid:"Your skypeid",roleDescription:"",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/neelnarvankar30/",className:"fa fa-linkedin"},{name:"github",url:"https://github.com/neelnarvankar30",className:"fa fa-github"},{name:"skype",url:"",className:"fa fa-twitter"}],aboutme:"Graduate Computer Science student with a focus on Software Development and Full Stack Engineering. My professional goal is to apply my skills towards designing, developing, testing, and implementing high-quality Software. In addition to my technical interests, I have a love for helping others through mentoring.",address:"9451 Lee Hwy, Fairfax VA",contact:"703-341-9457",email:"neelnarvankar30@gmail.com",website:"",education:[{UniversityName:"George Mason University",specialization:"Masters in Computer Science",MonthOfPassing:"May",YearOfPassing:"2021",Achievements:""},{UniversityName:"University of Mymbai",specialization:"Bachelors in Information Iechnology",MonthOfPassing:"May",YearOfPassing:"2019",Achievements:""}],work:[{CompanyName:"Graduate Teaching Assistant",specialization:"C#, ASP.NET, JavaScript, AWS",MonthOfLeaving:"August",YearOfLeaving:"2020 - Present",Achievements:["Graduate Teaching Assistant and Lab Instructor for Application Development in AWS Cloud, C# application development, and Advanced Web Development at George Mason University.","Responsible for instructing and helping students in development and programming applications using ASP.NET in Cloud, and for coaching undergraduate students to develop skills in JavaScript and C#."]},{CompanyName:"React JS Developer",specialization:"ReactJS, Bootstrap, HTML, CSS",MonthOfLeaving:"Nov",YearOfLeaving:"2020 - Jan 2021",Achievements:["Developed chrome extension using React JS called as Hypothesizer, this chrome extension acts as a debugging for react applications, it helps the developer to generate the correct hypothesis for what might be the problem.","Created test cases for end-to-end testing of the application using React JS, used Bootstrap, working with JSON files to store, and retrieve the hypothesis"]},{CompanyName:"Research Assistant",specialization:"C# and VR Software Development",MonthOfLeaving:"Dec",YearOfLeaving:"2020 - Aug 2021",Achievements:["Implemented a fully controlled and laboratory-validated ecological system in Virtual Reality using C# and Unity3d to help research capturing boundaries of peripersonal space at the individual subject level.","Led the development of C# scripts for the successful implementation of the project, also used the XR development Tool kit, Developed the Per-Personal Space virtual model on VIVE 3D","Achieved results that were helpful in successfully completing the experiment.","Developed environment for ROKOKO smart-suit development. Programmed a Full-immersive smart-suit experience using Unity3d and Rokoko software."]},{CompanyName:"Research Assistant",specialization:"Python developer (Human-Machine Interaction and Artificial Intelligence)",MonthOfLeaving:"Dec",YearOfLeaving:"2020 - Aug 2021",Achievements:["Worked on Sony\u2019s Aibo AI robot-dog to research Human-Machine Interaction. Wrote Web API\u2019s to train the robot using Python. ","Programmed Aibo AI Robot using Python to interact with humans, Programmed/trained Aibo for Speech recognition using Cognitive Phrases, Aibo was able to perform actions by speech recognition. ","Developed and maintained a Database of memories generated by Aibo. Maintained data integrity for the data collected by Aibo. Performed SQL commands for retrieving and maintaining data."]}],portfolio:[{name:"Wha2Do",description:"Android application for creating To-do list and day scheduler/planner",imgurl:"images/wha2do.jpg",url:"https://github.com/neelnarvankar30/wha2do"},{name:"Sports Match Predictor",description:"mobileapp",imgurl:"images/Data.jpg",url:"https://github.com/neelnarvankar30/IPL-MatchPredictor"},{name:"Destine",description:"A Travel Website",imgurl:"images/destine.jpg",url:"https://github.com/neelnarvankar30/Destine-A-Travel-Site"}]},b=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(d,{resumeData:g}),l.a.createElement(p,{resumeData:g}),l.a.createElement(h,{resumeData:g}),l.a.createElement(v,{resumeData:g}),l.a.createElement(E,{resumeData:g}),l.a.createElement(f,{resumeData:g}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,a,t){e.exports=t(15)}},[[8,2,1]]]);
//# sourceMappingURL=main.24c763fd.chunk.js.map