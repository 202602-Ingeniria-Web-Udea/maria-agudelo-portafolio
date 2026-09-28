const SocialIcons = [
    {
        name: 'Instagram',
        icon: 'akar-icons:instagram-fill',
        link: 'https://www.instagram.com/m_agudelo.28?stkn=MTYzNGVoOHptazBvaw==',
    },
    {
        name: 'Linkedin',
        icon: 'akar-icons:linkedin-fill',
        link: 'https://www.linkedin.com/in/maria-de-los-angeles-agudelo-759a22331?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
    },
    {
        name: 'Github',
        icon: 'akar-icons:github-fill',
        link: 'https://github.com/MariAgudelo2/',
    },
    {
        name: 'mail',
        icon: 'charm:mail',
        link: 'mailto:maria.aagudelo@edea.edu.co?subject=Job%20Opportunity%20-%20Maria%20Agudelo',
    },
];

const About = [
    {
        left: 'Age',
        right: '20',
    },
    {
        left: 'Address',
        right: 'Itagüí, Antioquia',
    },
];

const Languages = [
    {
        language: 'Spanish',
        percentage: '100%',
    },
    {
        language: 'English',
        percentage: '90%',
    },
    {
        language: 'Portuguese',
        percentage: '50%',
    },
];

const ProgrammingLanguages = [
    {
        language: 'Python',
        percentage: '75%',
    },
    {
        language: 'Java',
        percentage: '80%',
    },
    {
        language: 'SQL',
        percentage: '60%',
    },
    {
        language: 'React',
        percentage: '50%',
    },   
];

const SoftSkills = [
    {
        skill: 'Leadership',
    },
    {
        skill: 'Assertive communication',
    },
    {
        skill: 'Teamwork',
    },
    {
        skill: 'Critical thinking',
    }, 
]

const Knowledge = [
    {
        icon: 'bi:shield-fill-check',
        title: 'Quality Assurance (QA)',
        description: 'Serenity BDD, Selenium WebDriver, Cypress, Cucumber, Postman, JUnit, Mockito, SpringBootTest, WebMvcTest, JaCoCo',
    },
    {
        icon: 'bxs:data',
        title: 'Data Engineering',
        description: 'PostgreSQL, Pandas, Data Modeling, Google Apps Scripts, Power Platform',
    },
    {
        icon: 'arcticons:microsoft-power-bi',
        title: 'Engineering & Tools',
        description: 'Git/GitHub, CI/CD Pipelines, Next.js / TypeScript basics, Agile Methodologies (Scrum).',
    },
]

const Education = [
    {
        institution: 'Universidad de Antioquia',
        degree: 'Systems Engineering',
        date: '2023 - now',
        detail: `Currently in my 8th semester, pursuing a strong academic background centered on Data Engineering and 
        Software Quality Assurance. My coursework and hands-on projects focus on relational and non-relational database 
        design, ETL pipeline development, software testing methodologies, and automated testing frameworks, combining 
        analytical data modeling with rigorous quality control standards.`,
    },
]

const Portfolio = [
    {
        image: '',
        title: 'Kaggle Project',
        description: 'Repository for the Model I course project, developed around a Kaggle competition.',
        url: 'https://github.com/MariAgudelo2/Proyecto_KAGGLE',
    },
    {
        image: '',
        title: 'UdeA Sports Agent',
        description: 'An accessible chatbot that lets the university community check space availability and make reservations through a conversational menu, without having to visit the office. Available 24/7.',
        url: 'https://github.com/MariAgudelo2/UdeA_Sport_Agent',
    },
    {
        image: '',
        title: 'Automated Finance API Tests',
        description: 'An automated test suite for a financial management API. It validates user registration and login, category creation, and income and expense transactions, including invalid input scenarios. Built with Java, Serenity BDD, and Cucumber.',
        url: 'https://github.com/MariAgudelo2/Automated-API-Tests-Finance-App',
    }
]

export { SocialIcons, About, Languages, ProgrammingLanguages, SoftSkills, Knowledge, Education, Portfolio};