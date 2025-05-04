// Social media links
const socialMediaLinks = [
    // { name: 'Twitter', url: 'https://twitter.com/yourusername', icon: 'fab fa-twitter' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/alwassikhan/', icon: 'fab fa-linkedin' },
    // { name: 'GitHub', url: 'https://github.com/yourusername', icon: 'fab fa-github' },
    { name: 'Instagram', url: 'https://www.instagram.com/wassi_real/', icon: 'fab fa-instagram' },
    { name: 'Youtube', url: 'https://www.youtube.com/@wassi_real', icon: 'fab fa-youtube' },
    { name: 'Reddit', url: 'https://www.reddit.com/user/NoMuscle1255/', icon: 'fab fa-reddit' },
    { name: 'Twitter', url: 'https://x.com/wassireal', icon: 'fab fa-twitter' },
];

// Other sites or projects
// const otherSites = [
//     { name: 'SoftoDesign', url: 'https://softodesign.com', icon: 'https://softodesign.com/assets/website-removebg-preview-1500h.png' },
//     { name: 'SoftoUltra', url: 'https://softoultra.com', icon: 'https://softoultra.com/_app/immutable/assets/favicon.DYDz1lNQ.png' },
//     { name: 'YouTube Channel', url: 'https://www.youtube.com/yourchannel', icon: 'fab fa-youtube' },
// ];
// Other sites or projects
const otherSites = [
    { 
        name: 'SoftoDesign', 
        url: 'https://softodesign.com', 
        icon: 'https://softodesign.com/assets/website-removebg-preview-1500h.png',
        isImage: true 
    },
    { 
        name: 'SoftoUltra (Sold)', 
        url: 'https://softoultra.com', 
        icon: 'https://ph-files.imgix.net/76e4e7fe-a6f7-4904-9d38-c0516dd0d7c1.png?auto=format',
        isImage: true 
    },
    { 
        name: 'CreateFlow', 
        url: 'https://createflow.softodesign.com/', 
        icon: 'https://createflow.softodesign.com/assets/8-400h.png',
        isImage: true 
    },
    { 
        name: 'Writerr', 
        url: 'https://writerr.softodesign.com/', 
        icon: 'https://writerr.softodesign.com/_app/immutable/assets/favicon.CJa5JeG7.png',
        isImage: true 
    },
    // { 
    //     name: 'LinkList (In dev)', 
    //     url: '#', 
    //     icon: 'https://ik.imagekit.io/softoultra/Startup%20Logo/linklist.png?updatedAt=1735658119549',
    //     isImage: true 
    // },
    { 
        name: 'MicroDeals (In dev)', 
        url: 'https://microdeals.online/', 
        icon: 'https://ik.imagekit.io/softoultra/Startup%20Logo/linklist.png?updatedAt=1735658119549',
        isImage: true 
    },
];



// Function to create link elements
// function createLinkElement(item) {
//     const a = document.createElement('a');
//     a.className = 'link-item';
//     a.href = item.url;
//     a.target = '_blank';
//     a.rel = 'noopener noreferrer';
    
//     const icon = document.createElement('i');
//     icon.className = item.icon;
    
//     const span = document.createElement('span');
//     span.textContent = item.name;
    
//     a.appendChild(icon);
//     a.appendChild(document.createElement('br'));
//     a.appendChild(span);
    
//     return a;
// }
// Function to create link elements
function createLinkElement(item) {
    const a = document.createElement('a');
    a.className = 'link-item';
    a.href = item.url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    
    if (item.isImage) {
        const img = document.createElement('img');
        img.src = item.icon;
        img.alt = item.name;
        img.style.width = '45px';  // Adjust size as needed
        img.style.height = '45px';
        a.appendChild(img);
    } else {
        const icon = document.createElement('i');
        icon.className = item.icon;
        a.appendChild(icon);
    }
    
    a.appendChild(document.createElement('br'));
    
    const span = document.createElement('span');
    span.textContent = item.name;
    a.appendChild(span);
    
    return a;
}



// Populate social media links
const socialLinksContainer = document.getElementById('social-links');
socialMediaLinks.forEach(link => {
    socialLinksContainer.appendChild(createLinkElement(link));
});

// Populate other sites
const siteLinksContainer = document.getElementById('site-links');
otherSites.forEach(site => {
    siteLinksContainer.appendChild(createLinkElement(site));
});

// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    if (body.classList.contains('light-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    body.classList.add('light-mode');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
}

// Save theme preference when changed
themeToggle.addEventListener('click', () => {
    if (body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }
});


// Add projects data
const projects = [
    {
        name: "Portfolio Website",
        description: "Personal portfolio with dark/light mode",
        url: "#",
        icon: "fas fa-globe"
    },
    {
        name: "E-commerce Platform",
        description: "Online store with payment processing",
        url: "#",
        icon: "fas fa-shopping-cart"
    },
    {
        name: "Task Management App",
        description: "Productivity tool for organizing tasks",
        url: "#",
        icon: "fas fa-tasks"
    },
    {
        name: "AI Content Generator",
        description: "Tool that uses AI to create marketing content",
        url: "#",
        icon: "fas fa-robot"
    },
    {
        name: "Social Media Dashboard",
        description: "Analytics platform for social media management",
        url: "#",
        icon: "fas fa-chart-line"
    }
];

// Populate projects
const projectsGrid = document.getElementById('projects-grid');
if (projectsGrid) {
    projects.forEach(project => {
        // Create project card using the existing createLinkElement function with modifications
        const a = document.createElement('a');
        a.className = 'link-item project-item';
        a.href = project.url;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        
        const icon = document.createElement('i');
        icon.className = project.icon;
        icon.style.fontSize = '2.8rem'; // Larger icons for projects
        a.appendChild(icon);
        
        a.appendChild(document.createElement('br'));
        
        const name = document.createElement('span');
        name.textContent = project.name;
        name.style.fontWeight = '600';
        name.style.fontSize = '1.2rem';
        a.appendChild(name);
        
        const description = document.createElement('p');
        description.textContent = project.description;
        description.style.fontSize = '0.9rem';
        description.style.marginTop = '0.8rem';
        description.style.opacity = '0.8';
        a.appendChild(description);
        
        projectsGrid.appendChild(a);
    });
}

