function paramValue() {
    let value = new URLSearchParams(window.location.search)
    return value.get("course")
}

// alert(paramValue())

let data = {
    "c":{
        "courseHeading":"C,C++ Programming",
        "coursePara":"C and C++ are widely-used programming languages in software development, especially for system-level programming, embedded systems, and gaming. Mastery of these languages can lead to career opportunities in industries such as aerospace, defense, automotive, and gaming, where performance and efficiency are critical.",
        "courseImg":"./images/cor1.jpeg",
        "courseHour":"64 Hours",
        "topics":["C Basics, Variable and Data Types","Compound Data Types","Control Statement & Functions","Error Handling","I/O Functions","Arrays, Strings & OOPs Concepts","Basic Procedural Programming","Command line compilation","File Handling","Libraries"],
        "pro1":"Bank Management System",
        "pro2":"Hospital Management System",
        "pro3":"Contact Management System",
        "pro4":"School Billing System",
        "proHead":"Software Development"
    },
    "cpulse":{
        "courseHeading":"C,C++ Programming",
        "coursePara":"C and C++ are widely-used programming languages in software development, especially for system-level programming, embedded systems, and gaming. Mastery of these languages can lead to career opportunities in industries such as aerospace, defense, automotive, and gaming, where performance and efficiency are critical.",
        "courseImg":"./images/cor1.jpeg",
        "courseHour":"64 Hours",
        "topics":["C Basics, Variable and Data Types","Compound Data Types","Control Statement & Functions","Error Handling","I/O Functions","Arrays, Strings & OOPs Concepts","Basic Procedural Programming","Command line compilation","File Handling","Libraries"],
        "pro1":"Bank Management System",
        "pro2":"Hospital Management System",
        "pro3":"Contact Management System",
        "pro4":"School Billing System",
        "proHead":"Software Development"
    },
    "web design":
    {
        "courseHeading":"Web Design Course",
        "coursePara":"Web design refers to the process of creating the visual appearance and layout of websites. It encompasses various elements including layout, color scheme, typography, graphics, and user interface design. Web designers use a combination of graphic design principles and technical skills to design websites that are visually appealing, easy to navigate, and effectively communicate the intended message or information.",
        "courseImg":"./images/cor2.jpg",
        "courseHour":"60 Hours",
        "topics":["HTML & CSS basics","Web structure","Buttons","Media elements","Components","Styling and Layout","Responsive design","CMS & dynamic content","Java Script","Document Object Model (DOM)"],
        "pro1":"Netflix Home Page Clone",
        "pro2":"Restaurant Website",
        "pro3":"Student Result Management System",
        "pro4":"Online Code Editor",
        "proHead":"Web Development"
    },
    "office automation":
    {
        "courseHeading":"Office Automation",
        "coursePara":"Office automation is a general term that describes the different types of computer systems and software that are used to collect digitally, store, transfer, alter and utilise office information to execute tasks. In essence, office automation helps to manage data.",
        "courseImg":"./images/cor3.jpg",
        "courseHour":"45 Hours",
        "topics":["Operating system","Computer Fundamentals","MS Word","MS Excel","MS PowerPoint","Computer","Internet","Slide transitions","Spreadsheet"],
        "pro1":"Netflix Home Page Clone",
        "pro2":"Restaurant Website",
        "pro3":"Student Result Management System",
        "pro4":"Online Code Editor",
        "proHead":"Web Development"
    },
    "photoshop":
    {
        "courseHeading":"Photoshop",
        "coursePara":"Photoshop is an image creation, graphic design and photo editing software developed by Adobe. The software provides many image editing features for pixel-based images, raster graphics and vector graphics. Adobe Photoshop was first released in 1988. Created by Thomas and John Knoll, it was initially developed for Macintosh computers but is now available for Windows and macOS platforms.",
        "courseImg":"./images/cor4.jpg",
        "courseHour":"30 Hours",
        "topics":["Photoshop Basics","Layers","Retouching","Selection","Editing photos in Photoshop","Text","Color balance","Apply layer effects"],
        "pro1":"Color Corrections",
        "pro2":"Digital Painting",
        "pro3":"Special Effects",
        "pro4":"Matte Paintings",
        "proHead":"Photoshop"
    },
    "java":
    {
        "courseHeading":"JAVA",
        "coursePara":"Java is a programming language that is class-based and object-oriented. It is designed to be general-purpose and aims to have fewer implementation dependencies, and serves as a computing platform for application development.",
        "courseImg":"./images/cor5.jpg",
        "courseHour":"60 Hours",
        "topics":["Decision Constructs","Event handling & multi threading","Interfaces","JAVA packages and collection","OOPs Concepts"],
        "pro1":"Bank Management Software",
        "pro2":"Temperature Converter",
        "pro3":"Electricity Billing System",
        "pro4":"Supermarket Billing Software",
        "proHead":"Software Development"
    },
    "python":
    {
        "courseHeading":"Python",
        "coursePara":"Python is a versatile and widely used programming language known for its simplicity and readability. It is used in various domains such as web development, data science, machine learning, and automation, making it a valuable skill for career opportunities in software development, data analysis, and artificial intelligence.",
        "courseImg":"./images/cor6.jpg",
        "courseHour":"60 Hours",
        "topics":["Control Flow","Database Connectivity & Networking: SQL","Files, Modules & Packages","Functions & Data Structures","OOPs","Reference & Thread"],
        "pro1":"Banking System",
        "pro2":"Speech Recognition in different Language",
        "pro3":"Get Live Status of running train",
        "pro4":"Hotel Bill Management System",
        "proHead":"Software Development"
    },
    "c sharp":
    {
        "courseHeading":"C Sharp",
        "coursePara":"C# (C-Sharp) is a programming language developed by Microsoft that runs on the .NET Framework. C# is used to develop web apps, desktop apps, mobile apps, games and much more.",
        "courseImg":"./images/cor7.jpeg",
        "courseHour":"68 Hours",
        "topics":["Data types","Conditionals and loops","Collections","File & Exception handling","OOPs","Reference & Thread","Database"],
        "pro1":"Drawing app",
        "pro2":"Health administration",
        "pro3":"Online voting application",
        "pro4":"ATM software",
        "proHead":"Software Development"
    },
    "dart":
    {
        "courseHeading":"Dart",
        "coursePara":"Dart is an open-source, general-purpose, object-oriented programming language with C-style syntax developed by Google in 2011. The purpose of Dart programming is to create a frontend user interfaces for the web and mobile apps. It is under active development, compiled to native machine code for building mobile apps, inspired by other programming languages such as Java, JavaScript, C#, and is Strongly Typed. Since Dart is a compiled language so you cannot execute your code directly; instead, the compiler parses it and transfer it into machine code.",
        "courseImg":"./images/cor8.jpg",
        "courseHour":"45 Hours",
        "topics":["Data types","Conditionals and loops","Collections","File & Exception handling","OOPs","Reference & Thread","Database"],
        "pro1":"Tic-Tac-Toe Game",
        "pro2":"TODO List App",
        "pro3":"Password Generator",
        "pro4":"Calculatore",
        "proHead":"Mobile App Development"
    },
    "flutter":
    {
        "courseHeading":"Flutter",
        "coursePara":"Flutter is an open-source UI software development kit created by Google. It can be used to develop cross platform applications from a single codebase for the web, Fuchsia, Android, iOS, Linux, macOS, and Windows. First described in 2015, Flutter was released in May 2017.",
        "courseImg":"./images/cor9.jpeg",
        "courseHour":"68 Hours",
        "topics":["Flutter para iniciantes","Navigation","Widgets","Animation","Firebase","Networking","Android app Setup"],
        "pro1":"Price comparison app",
        "pro2":"Flutter music player",
        "pro3":"Fwitter",
        "pro4":"Netflix clone",
        "proHead":"Mobile App Development"
    },
    "android app development java":
    {
        "courseHeading":"Android App Development using JAVA",
        "coursePara":"With the increasing demand for mobile applications, Java has emerged as a popular programming language for developing Android apps. It offers concise, expressive, and safe coding practices, making it a valuable skill for a successful career in mobile app development.",
        "courseImg":"./images/cor10.jpg",
        "courseHour":"90 Hours",
        "topics":["Android App development","Android studio","Game Development","Libraries","Menu & Layouts","Firebase"],
        "pro1":"Music application",
        "pro2":"News app",
        "pro3":"Quiz app",
        "pro4":"Library management",
        "proHead":"Mobile App Development"
    },
    "android app development kotlin":
    {
        "courseHeading":"Android App Development using Kotlin",
        "coursePara":"With the increasing demand for mobile applications, Kotlin has emerged as a popular programming language for developing Android apps. It offers concise, expressive, and safe coding practices, making it a valuable skill for a successful career in mobile app development.",
        "courseImg":"./images/cor10.jpg",
        "courseHour":"90 Hours",
        "topics":["Android App development","Android studio","Game Development","Libraries","Menu & Layouts","Firebase"],
        "pro1":"Music application",
        "pro2":"News app",
        "pro3":"Quiz app",
        "pro4":"Library management",
        "proHead":"Mobile App Development"
    },
    "html":
    {
        "courseHeading":"HTML",
        "coursePara":"HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.",
        "courseImg":"./images/cor11.jpg",
        "courseHour":"20 Hours",
        "topics":["HTML entities","HTML tables and forms","HTML images","Anchor tag","HTML lists","HTML elements","HTML attributes"],
        "pro1":"Portfolio page",
        "pro2":"Landing page",
        "pro3":"Restaurant website",
        "pro4":"Photography website",
        "proHead":"Web App Development"
    },
    "java script":
    {
        "courseHeading":"JavaScript",
        "coursePara":"JavaScript is the Programming Language for the Web. JavaScript can update and change both HTML and CSS. JavaScript can calculate, manipulate and validate data.",
        "courseImg":"./images/cor12.jpg",
        "courseHour":"60 Hours",
        "topics":["JavaScript basics","Promises","Functions","Async/await","Arrays","Arrow functions","OOPs","Objects"],
        "pro1":"Portfolio page",
        "pro2":"Landing page",
        "pro3":"Restaurant website",
        "pro4":"Photography website",
        "proHead":"Web App Development"
    },
    "full stack mern":
    {
        "courseHeading":"Full Stack MERN",
        "coursePara":"Full-stack development using MERN (MongoDB, Express, React, Node.js) stack allows developers to build end-to-end web applications. This skillset is highly valued in the software industry, providing career opportunities as a full-stack developer capable of developing both the front-end and back-end of web applications.",
        "courseImg":"./images/cor13.png",
        "courseHour":"160 Hours",
        "topics":["React.js","Bootstrap","CSS3","Database","HTML","JavaScript","jQuery","JSON","MongoDB","Express.js","GitHub","Heroku","Node.js","Restful API"],
        "pro1":"Ecommerce Shopping cart",
        "pro2":"Online Examination portal",
        "pro3":"CRUD Operation with Passport authentication",
        "pro4":"Youtube Streaming Website",
        "proHead":"Web App Development"
    },
    "full stack mean":
    {
        "courseHeading":"Full Stack MEAN",
        "coursePara":"Full-stack development using MEAN (MongoDB, Express, Angular, Node.js) stack allows developers to build end-to-end web applications. This skillset is highly valued in the software industry, providing career opportunities as a full-stack developer capable of developing both the front-end and back-end of web applications.",
        "courseImg":"./images/cor13.png",
        "courseHour":"160 Hours",
        "topics":["Angular","Bootstrap","CSS3","Database","HTML","JavaScript","jQuery","JSON","MongoDB","Express.js","GitHub","Heroku","Node.js","Restful API"],
        "pro1":"Ecommerce Shopping cart",
        "pro2":"Online Examination portal",
        "pro3":"CRUD Operation with Passport authentication",
        "pro4":"Youtube Streaming Website",
        "proHead":"Web App Development"
    },
    "full stack java":
    {
        "courseHeading":"Full Stack Java",
        "coursePara":"Java Full Stack Development refers to the development of both front-end (client-side) and back-end (server-side) parts of a web application. This involves using Java programming language for server-side development, along with front-end technologies like HTML, CSS, JavaScript, and frameworks like Reactjs.",
        "courseImg":"./images/cor14.jpg",
        "courseHour":"160 Hours",
        "topics":["Java","JSP","Servlet","JSTL","SpringBoot","Bootstrap","CSS3","Database","HTML","JavaScript","JSON","Mysql","GitHub","Heroku","Restful API"],
        "pro1":"Ecommerce Shopping cart",
        "pro2":"Online Examination portal",
        "pro3":"CRUD Operation with Passport authentication",
        "pro4":"Youtube Streaming Website",
        "proHead":"Web App Development"
    },
    "full stack python":
    {
        "courseHeading":"Full Stack Python",
        "coursePara":"Full-stack development refers to the design, implementation and testing of both the client, and server sides of a web application. A Python full-stack developer is proficient in handling the front- and back-end of a website or an application.",
        "courseImg":"./images/cor15.jpg",
        "courseHour":"160 Hours",
        "topics":["Python","Django","JQuery","Bootstrap","CSS3","Database","HTML","JavaScript","JSON","Mysql","GitHub","Heroku","Restful API"],
        "pro1":"Ecommerce Shopping cart",
        "pro2":"Online Examination portal",
        "pro3":"CRUD Operation with Passport authentication",
        "pro4":"Youtube Streaming Website",
        "proHead":"Web App Development"
    },
    "django":
    {
        "courseHeading":"Django",
        "coursePara":"Django is a high-level web framework written in Python that enables developers to build robust and maintainable web applications quickly and efficiently. With its batteries-included philosophy, Django includes everything you need to build a web application from scratch, making it a popular choice for developers of all levels of expertise.",
        "courseImg":"./images/cor16.jpg",
        "courseHour":"56 Hours",
        "topics":["Basic Python","Django models","Django file upload","Bootstrap","Django forms","Django CRUD","Django project MVT structure"],
        "pro1":"Weather app",
        "pro2":"Chat application",
        "pro3":"Quiz application",
        "pro4":"Dictionary application",
        "proHead":"Web App Development"
    },
    "wordpress":
    {
        "courseHeading":"WordPress",
        "coursePara":"WordPress is a web content management system. It was originally created as a tool to publish blogs but has evolved to support publishing other web content, including more traditional websites, mailing lists and Internet forum, media galleries, membership sites, learning management systems and online stores.",
        "courseImg":"./images/cor17.jpg",
        "courseHour":"60 Hours",
        "topics":["Plugins","Theme blocks","Search engine optimization","CSS","Google Analytics","Marketing","Basic hosting knowledge","JavaScript","Business websites","Templates"],
        "pro1":"Blog or Personal Website",
        "pro2":"Business Website",
        "pro3":"Ecommerce Website",
        "pro4":"Membership Website",
        "proHead":"Website Development"
    },
    "php":
    {
        "courseHeading":"PHP",
        "coursePara":"PHP is a general-purpose scripting language geared towards web development. It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1993 and released in 1995. The PHP reference implementation is now produced by the PHP Group.",
        "courseImg":"./images/cor18.jpg",
        "courseHour":"60 Hours",
        "topics":["Databases","Cookies","Functions","Connection handling","External files","Features","MySQL database","Exceptions","Oop in php4 and php5"],
        "pro1":"A chatbot for students",
        "pro2":"E-commerce",
        "pro3":"Timetable generator",
        "pro4":"Product rating system",
        "proHead":"Web App Development"
    },
    "react developer":
    {
        "courseHeading":"React developer",
        "coursePara":"A React developer uses their programming skills to create JavaScript-based applications for web or mobile environments. They typically specialize in front-end development, such as building user interfaces (UI).",
        "courseImg":"./images/cor19.jpg",
        "courseHour":"80 Hours",
        "topics":["JSX","HTML and CSS","Git","Node and npm package","JavaScript","Hooks","Document Object Model","State management","Props and state in React","Virtual DOM","Components"],
        "pro1":"Todo app",
        "pro2":"E-commerce",
        "pro3":"Weather app",
        "pro4":"Chat application",
        "proHead":"Web App Development"
    },
    "advanced java":
    {
        "courseHeading":"Advanced Java",
        "coursePara":"Advanced Java, beyond its foundational concepts, comprises a sophisticated set of programming principles and techniques for building robust, scalable, and enterprise-level applications. It includes advanced topics such as multithreading, networking, database connectivity, and frameworks like Spring and Hibernate.",
        "courseImg":"./images/cor20.jpg",
        "courseHour":"60 Hours",
        "topics":["JDBC","Multithreading","Collections framework","JSP","JSTL","Servlet","Spring Boot"],
        "pro1":"Library management",
        "pro2":"Online Banking",
        "pro3":"Health administration",
        "pro4":"Chat application",
        "proHead":"Web App Development"
    },
    "asp":
    {
        "courseHeading":"ASP.net with C#",
        "coursePara":"ASP.net is a popular web development framework, and C# is a programming language used in the Microsoft .NET framework. Learning ASP.net with C# can open up career opportunities in web development, software engineering, and application development, as ASP.net is widely used for building web applications and services",
        "courseImg":"./images/cor21.jpg",
        "courseHour":"100 Hours",
        "topics":["Bootstrap","CSS3","HTML","Java Script","JQuery","Web hosting","C#","Cookies management","MVC","Web forms"],
        "pro1":"Organic Food Traceability System",
        "pro2":"Online Banking",
        "pro3":"E-Commerce Website",
        "pro4":"Online Newspaper Delivery System",
        "proHead":"Web App Development"
    },
    "mysql":
    {
        "courseHeading":"MYSQL",
        "coursePara":"MySQL is an open-source relational database management system. Its name is a combination of My, the name of co-founder Michael Widenius's daughter My, and SQL, the acronym for Structured Query Language.",
        "courseImg":"./images/cor22.jpg",
        "courseHour":"20 Hours",
        "topics":["Delete columns","CREATE DATABASE","MySQL string","MySQL index","Joins"],
        "pro1":"Health administration",
        "pro2":"Library management",
        "pro3":"Banking system",
        "pro4":"Blood donation database",
        "proHead":"Database Development"
    },
    "sql":
    {
        "courseHeading":"SQL",
        "coursePara":"Structured Query Language is a domain-specific language used to manage data, especially in a relational database management system. It is particularly useful in handling structured data, i.e., data incorporating relations among entities and variables.",
        "courseImg":"./images/cor23.png",
        "courseHour":"20 Hours",
        "topics":["Delete columns","CREATE DATABASE","SQL string","SQL index","Joins"],
        "pro1":"Health administration",
        "pro2":"Library management",
        "pro3":"Banking system",
        "pro4":"Blood donation database",
        "proHead":"Database Development"
    },
    "network":
    {
        "courseHeading":"Network Engineering - Routing and Switching",
        "coursePara":"Network engineers play a crucial role in designing, implementing, and maintaining computer networks. Learning routing and switching can open up many career opportunities in network engineering, including network design, implementation, and troubleshooting, as networking is a critical component of modern IT infrastructure. Cyber security is another growing field where network engineers are on high demand.",
        "courseImg":"./images/cor24.jpg",
        "courseHour":"70 Hours",
        "topics":["Infrastructure service","Network Fundamentals","Security & Management","Switching","WAN"],
        "pro1":"Web Application Firewall",
        "pro2":"Facial Authentication System",
        "pro3":"System for Image Steganography",
        "pro4":"Website Scraper",
        "proHead":"IT Infrastructure Management"
    },
    "cloud computing":
    {
        "courseHeading":"Cloud computing",
        "coursePara":"Cloud computing is the on-demand availability of computer system resources, especially data storage and computing power, without direct active management by the user. Large clouds often have functions distributed over multiple locations, each of which is a data center.",
        "courseImg":"./images/cor25.jpeg",
        "courseHour":"56 Hours",
        "topics":["Defining cloud computing","Cloud implementations","Cloud networking","Cloud security","Deployment models","Virtualization"],
        "pro1":"Attendance tracker",
        "pro2":"Online blood bank system",
        "pro3":"Bug tracker",
        "pro4":"Chatbots",
        "proHead":"IT Infrastructure Management"
    },
    "ethical hacking":
    {
        "courseHeading":"Ethical Hacking",
        "coursePara":"According to a Gartner study, nearly 68% of global business leaders believe cybersecurity risks are increasing. As cybersecurity threats continue to increase, ethical hackers play a critical role in safeguarding digital assets and protecting against cyber-attacks. Ethical hackers are in high demand by organizations seeking to identify vulnerabilities and implement robust security measures, making it a lucrative career option in the cybersecurity field.",
        "courseImg":"./images/cor26.jpg",
        "courseHour":"68 Hours",
        "topics":["Cloud computing","Cryptography","Foot printing & reconnaissance","Hacking web servers","Social engineering","SQL injection","System hacking"],
        "pro1":"Encryption",
        "pro2":"Packet sniffer",
        "pro3":"Wireshark",
        "pro4":"Antivirus",
        "proHead":"IT Infrastructure Management"
    },
    "ui ux":
    {
        "courseHeading":"UI UX",
        "coursePara":"UI/UX design course to gain expertise in crafting user-friendly digital experiences. Learn design principles, research methods, and prototyping techniques. UI/UX designers are essential for modern businesses, shaping efficient user interactions. Start your creative journey in this high-demand field with us!",
        "courseImg":"./images/cor27.jpg",
        "courseHour":"68 Hours",
        "topics":["Information architecture","User research","Interaction design","Visual design","Empathy","Wireframe","Design psychology","UX terms","User interface design"],
        "pro1":"Single landing page",
        "pro2":"Blog or online journal",
        "pro3":"Desktop background image",
        "pro4":"Email templates",
        "proHead":"UI UX"
    },
    "tally":
    {
        "courseHeading":"Tally",
        "coursePara":"Tally is an ERP accounting software package used for recording day to day business data of a company. It is used to automate and integrate all your business operations, such as purchasing, finance, sales, inventory, manufacturing.",
        "courseImg":"./images/cor28.jpg",
        "courseHour":"60 Hours",
        "topics":["Accounting vouchers","GST","Inventory information","Payroll","Bill of materials","Cost","Order processing","Fundamentals of Tally ERP 9"],
        "pro1":"Digital Transformation Initiative",
        "pro2":"Customer Enhancement Program",
        "pro3":"New Product Development - Market Expansion",
        "pro4":"Employee Training and Development Overhaul",
        "proHead":"Tally"
    },
    "advanced tally":
    {
        "courseHeading":"Advanced Tally",
        "coursePara":"Advanced Tally program or Tally ERP 9 program covers essential characteristics like cheque printing, cheque administration, payroll compliances such as provident fund (PF), auto bank reconciling, statutory compliances like GST and TDS, interest calculations, etc.",
        "courseImg":"./images/cor28.jpg",
        "courseHour":"45 Hours",
        "topics":["Accounting vouchers","GST","Inventory information","Payroll","Bill of materials","Cost","Order processing","Fundamentals of Tally ERP 9"],
        "pro1":"Digital Transformation Initiative",
        "pro2":"Customer Enhancement Program",
        "pro3":"New Product Development - Market Expansion",
        "pro4":"Employee Training and Development Overhaul",
        "proHead":"Tally"
    },
    "selenium automation":
    {
        "courseHeading":"Selenium Automation Testing",
        "coursePara":"Selenium is an open source umbrella project for a range of tools and libraries aimed at supporting browser automation. It provides a playback tool for authoring functional tests across most modern web browsers, without the need to learn a test scripting language.",
        "courseImg":"./images/cor29.png",
        "courseHour":"60 Hours",
        "topics":["Selenium automation framework","Selenium Grid","Java programming for selenium","Page Object Model","Selenium WebElement Commands","Object creation"],
        "pro1":"Automated patient data transmission",
        "pro2":"Automated ticket booking",
        "pro3":"Automated fitness data implementation",
        "pro4":"Whatsapp scraping",
        "proHead":"Software Testing"
    },
    "selenium web driver":
    {
        "courseHeading":"Selenium Web Driver With Java",
        "coursePara":"Selenium WebDriver is a web framework that permits you to execute cross-browser tests. This tool is used for automating web-based application testing to verify that it performs expectedly. Selenium WebDriver allows you to choose a programming language to create test scripts.",
        "courseImg":"./images/cor29.png",
        "courseHour":"90 Hours",
        "topics":["Java","Selenium automation framework","Selenium Grid","Java programming for selenium","Page Object Model","Selenium WebElement Commands","Object creation"],
        "pro1":"Automated patient data transmission",
        "pro2":"Automated ticket booking",
        "pro3":"Automated fitness data implementation",
        "pro4":"Whatsapp scraping",
        "proHead":"Software Testing"
    },
    "iot":
    {
        "courseHeading":"Internet Of Things",
        "coursePara":"The Internet of things describes devices with sensors, processing ability, software and other technologies that connect and exchange data with other devices and systems over the Internet or other communications networks. The Internet of things encompasses electronics, communication, and computer science engineering.",
        "courseImg":"./images/cor30.jpg",
        "courseHour":"90 Hours",
        "topics":["IoT security","Energy IoT","Smart city","Smart homes","Air pollution","Smart agriculture","IoT communication technologies","Artificial intelligence","Health monitoring system"],
        "pro1":"Smart parking system",
        "pro2":"Agriculture",
        "pro3":"Smart gas leakage detector bot",
        "pro4":"Smart traffic lights",
        "proHead":"IOT"
    },
    "data science":
    {
        "courseHeading":"Data Science Using Python",
        "coursePara":"Python is a programming language widely used by Data Scientists. Python has in-built mathematical libraries and functions, making it easier to calculate mathematical problems and to perform data analysis.",
        "courseImg":"./images/cor31.jpg",
        "courseHour":"68 Hours",
        "topics":["Python fundamentals","Data manipulation and analysis","Data visualization","Data storage and retrieval","Pandas and Numpy"],
        "pro1":"Fake news detection",
        "pro2":"Film",
        "pro3":"Natural language processing",
        "pro4":"Time series analysis",
        "proHead":"Data Science"
    },
    "ai":
    {
        "courseHeading":"AI (Artificial Intelligence Using Python)",
        "coursePara":"AI (Artificial Intelligence Using Python) typically refers to the application of artificial intelligence (AI) techniques and algorithms using the Python programming language. Python has become a popular choice for AI development due to its simplicity, readability, and vast ecosystem of libraries and tools tailored for machine learning and AI.",
        "courseImg":"./images/cor32.jpg",
        "courseHour":"90 Hours",
        "topics":["Python Programming Basics","NumPy and Pandas","Data Preprocessing","Machine Learning Basics","Deep Learning","Natural Language Processing (NLP)","Computer Vision","Deployment and Model Serving"],
        "pro1":"Chess and Other Games",
        "pro2":"Object Detection",
        "pro3":"Face Recognition",
        "pro4":"Mask Detection",
        "proHead":"AI"
    },
    "ml":
    {
        "courseHeading":"ML (Machine Learning Using Python)",
        "coursePara":"ML (Machine Learning Using Python) refers to the practice of applying machine learning techniques and algorithms using the Python programming language. Python has become the de facto language of choice for many machine learning practitioners due to its simplicity, readability, extensive libraries, and a vibrant community.",
        "courseImg":"./images/cor33.jpg",
        "courseHour":"90 Hours",
        "topics":["Types of Learning","Clustering in Machine Learning","Different Types of Clustering Algorithm","Analysis of test data using K-Means Clustering in Python","K-means++ Algorithm"],
        "pro1":"Chess and Other Games",
        "pro2":"Object Detection",
        "pro3":"Face Recognition",
        "pro4":"Mask Detection",
        "proHead":"ML"
    }
}

let course = paramValue()
let keys = Object.keys(data)
for(let i=0;i<keys.length;i++)
{
    if (course === keys[i]) {
        let allData=data[keys[i]]
        document.getElementById("courseHeading").innerHTML = allData["courseHeading"]
        document.getElementById("coursePara").innerHTML = allData["coursePara"]
        document.getElementById("courseImg").src = allData["courseImg"]
        document.getElementById("courseHour").innerHTML = allData["courseHour"]
        let topics = document.getElementById("topics")
             let allTopics=allData["topics"]
        for (let j = 0; j < allTopics.length; j++) {
            let list = document.createElement("li")
            list.innerText = allTopics[j]
            topics.appendChild(list)
        }
     
        document.querySelectorAll(".proHead").forEach((val,key)=>
        {
            val.innerHTML=allData["proHead"]
        })

        document.getElementById("pro1").innerHTML = allData["pro1"]
        document.getElementById("pro2").innerHTML = allData["pro2"]
        document.getElementById("pro3").innerHTML = allData["pro3"]
        document.getElementById("pro4").innerHTML = allData["pro4"]
    }
}



