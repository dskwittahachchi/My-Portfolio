// Portfolio data — update these values with your real information
export const personalInfo = {
    name: 'Shashil Kasmira Wittahachchi',
    title: 'IT Undergraduate | Web Developer | Project Management Enthusiast',
    bio: 'Passionate IT undergraduate with a strong foundation in full-stack web development. I love building elegant, efficient solutions and turning complex ideas into clean, user-friendly applications.',
    email: 'dskwittahachchi@gmail.com',
    phone: '+94 769016773',
    location: 'Sri Lanka',
    github: 'https://github.com/dskwittahachchi',
    linkedin: 'https://www.linkedin.com/in/shashilkwittahachchi',
    cvLink: '/cv/Shashil_CV.pdf', // Place your CV in public/cv/
};

export const skills = [
    {
        category: 'Frontend',
        icon: '🎨',
        items: [
            { name: 'HTML5', level: 90 },
            { name: 'CSS3', level: 85 },
            { name: 'JavaScript', level: 82 },
            { name: 'React.js', level: 78 },
            { name: 'Tailwind CSS', level: 80 },
        ],
    },
    {
        category: 'Backend',
        icon: '⚙️',
        items: [
            { name: 'Java', level: 80 },
            { name: 'Spring Boot', level: 72 },
            { name: 'PHP', level: 65 },
            { name: 'Node.js', level: 60 },
        ],
    },
    {
        category: 'Databases',
        icon: '🗄️',
        items: [
            { name: 'MySQL', level: 78 },
        ],
    },
    {
        category: 'Tools & Others',
        icon: '🛠️',
        items: [
            { name: 'Git', level: 82 },
            { name: 'GitHub', level: 85 },
            { name: 'Postman', level: 75 },
            { name: 'VS Code', level: 90 },
        ],
    },
];

export const projects = [
    {
        id: 1,
        title: 'Wedding Hall Reservation System',
        description:
            'An online booking platform for wedding venues. Features real-time availability checking, customer management, and automated confirmation emails. Built as a full-stack Java web application.',
        tech: ['Java', 'Spring Boot', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
        category: 'Full Stack',
        github: 'https://github.com/dskwittahachchi/Wedding-Hall-Reservation-System-Java-Web-App-/tree/main/Wedding%20Hall%20Reservation%20System',
        demo: '#',
        featured: true,
        gradient: 'from-pink-500 to-rose-500',
    },
    {
        id: 2,
        title: 'Online Clothing Store',
        description:
            'A responsive e-commerce web application for a clothing brand with product catalog, shopping cart, and order management functionality.',
        tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
        category: 'Web App',
        github: 'https://github.com/dskwittahachchi/Online-Clothing-Store',
        demo: '#',
        featured: true,
        gradient: 'from-violet-500 to-purple-500',
    },
    {
        id: 3,
        title: 'Cleaning Company Website',
        description:
            'A professional full-stack website for a cleaning company, featuring service listings, booking forms, and a modern responsive design.',
        tech: ['HTML', 'CSS', 'JavaScript', 'Node.js'],
        category: 'Full Stack',
        github: 'https://github.com/dskwittahachchi/Cleaning-Company-Website',
        demo: '#',
        featured: true,
        gradient: 'from-cyan-500 to-teal-500',
    },
];

export const categories = ['All', 'Full Stack', 'Web App', 'Frontend'];

export const timeline = [
    {
        year: '2024 – Present',
        title: 'Bachelor of Information Technology',
        organization: 'SLIIT University - Malabe',
        description:
            'Studying IT with a focus on software engineering, databases, and project management. Maintained a strong GPA while working on multiple practical projects.',
        type: 'education',
        icon: '🎓',
    },
    {
        year: '2024',
        title: 'Full-Stack Developer (Academic Project)',
        organization: 'University Project',
        description:
            'Developed an Admin Dashboard System using Spring Boot and React as a semester project, implementing full REST API integration.',
        type: 'project',
        icon: '💻',
    },
    {
        year: '2025',
        title: 'Wedding Hall Reservation System',
        organization: 'Academic / Freelance',
        description:
            'Designed and built a full-stack reservation management system with Spring Boot backend and vanilla JS frontend.',
        type: 'project',
        icon: '🏛️',
    },
    {
        year: '2023',
        title: 'Certificate in Professional English & Information Technology',
        organization: 'Aquinas College of Higher Studies',
        description:
            'Completed a professional certificate program covering English communication skills and foundational Information Technology concepts.',
        type: 'certification',
        icon: '📜',
    },
    {
        year: '2023',
        title: 'Advanced Level — Physical Science',
        organization: 'Ananda Sasthralaya National College - Matugama',
        description:
            'Completed A/Ls with a focus on Mathematics, Physics, and ICT. Qualified for university entrance.',
        type: 'education',
        icon: '📚',
    },
];

export const socialLinks = [
    { label: 'GitHub', href: 'https://github.com/dskwittahachchi', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shashilkwittahachchi', icon: 'linkedin' },
    { label: 'Email', href: 'mailto:dskwittahachchi@gmail.com', icon: 'mail' },
];
