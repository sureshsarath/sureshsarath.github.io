const resumeData = {
    profile: {
        name: "Sarath Suresh",
        location: "6027 8th Ave NE, Seattle, WA, USA - 98115",
        email: "saraths96@gmail.com",
        linkedin: "sarathsuresh96",
        dob: "20.04.1996",
        phone: "+1 206-396-9020",
        roles: ["GeoData Scientist", "Hydrologist", "Civil Engineer", "ML/AI in Earth Science"],
        about: `<i>'Access to water data is as much a basic right as access to water itself!'</i> <br><br>Just as clean, safe water is a fundamental human right,
                so too should open access to the data that governs it be.  As a research scholar at SASWE Labs, University of Washington, 
                I leverage the power of satellite remote sensing and hydrological models to realize this vision. 
                I collaborate with regional stakeholders to provide tools and solutions that address 
                water-related challenges. Currently, my research focuses on assessing the impact of hydropower 
                dams on downstream flooding and agricultural productivity across the world.
                <br><br> Together, let us champion the cause for open and accessible water data!`,
        image: "assets/proPic.jpg"
    },
    education: [
        {
            institution: "University of Washington",
            location: "Seattle, United States",
            degree: "Ph.D in Civil and Environmental Engineering",
            gpa: "3.94 / 4",
            period: "Dec. 2022 - Present"
        },
        {
            institution: "Indian Institute of Technology, Bombay",
            location: "India",
            degree: "M.Tech in Ocean Engineering",
            gpa: "9.87 / 10.0",
            period: "Jul. 2019 - Jun. 2021"
        },
        {
            institution: "Mahatma Gandhi University, Kerala",
            location: "India",
            degree: "B.Tech in Civil Engineering",
            gpa: "7.95 / 10.0",
            period: "Jun. 2014 - May. 2018"
        }
    ],
    experience: [
        {
            organization: "SASWE Research Group, University of Washington",
            location: "Seattle, United States",
            role: "Graduate Research Assistant",
            period: "Dec. 2022 - present",
            details: [
                "Developed the Global Registry of Agricultural Irrigation Networks (GRAIN) dataset, the first open-access geospatial database of global irrigation canals, using a ML based workflow.",
                "Developed RAT-Kerala, a satellite data and hydrological model based reservoir monitoring tool for Kerala, India.",
                "Provided training and technical support to the Centre for Water Resources Development and Management (CWRDM), Kerala for adoption and long-term maintenance of RAT-Kerala.",
                "Working on assessing the impact of hydropower dams on global flood risk and food production."
            ]
        },
        {
            organization: "AXIS Bank",
            location: "Mumbai, India",
            role: "Product Owner – Digital Banking and Transformations",
            period: "Jul. 2021- Nov. 2022",
            details: [
                "Led a cross-functional team of 8 developers and 2 testers to digitize the Axis Bank Forex Card platform.",
                "Implemented a JIRA based sprint planning and tracking framework, to accelerate AGILE software development workflows.",
                "Increased annual revenue from ₹3.1 crore to ₹6.3 crore through Google Analytics driven data analysis of user drop-offs, enabling identification and prioritization of high-impact user stories."
            ]
        },
        {
            organization: "Indian Institute of Technology Bombay",
            location: "Mumbai, India",
            role: "Graduate Teaching Assistant, Department of Civil Engineering",
            period: "Jul. 2019 – Jun. 2021",
            details: [
                "Developed MarGro, a MATLAB based GUI Tool to compute differential wave loading on offshore structures due to marine growth of varying thickness, in collaboration with ONGC.",
                "Patented MarGro v.1.0 at Trademark Registry Mumbai (Indian Trademark No: 5027217)",
                "Taught the MATLAB programming module of the course CE-705 Ocean Engineering Laboratory to first-year M.Tech students.",
                "Assisted instruction and lab sessions for CE-213 Fluid Mechanics Laboratory"
            ]
        },
        {
            organization: "FACT Engineering and Design Organization (FEDO)",
            location: "Kochi, India",
            role: "Research Intern",
            period: "Apr. 2018- Jun. 2018",
            details: [
                "Undertook the structural design of a 23-storey residential tower using STAAD-Pro",
                "Analyzed geotechnical survey data with MATLAB and designed pile foundations for a residential tower complex."
            ]
        },
        {
            organization: "Kannur International Airport (KIAL)",
            location: "Kannur, India",
            role: "Runway Design Intern",
            period: "Jan. 2018 – Feb. 2018",
            details: []
        }
    ],
    achievements: [
        { title: "AWRA Fellowship Award", organization: "American Water Resource Association, Washington Section", year: "2024" },
        { title: "Rank 1 – M.Tech Ocean Engineering", organization: "Indian Institute of Technology, Bombay", year: "2021" },
        { title: "HYDRO 2020 Best Paper", organization: "National Institute of Technology, Rourkela", year: "2020" },
        { title: "All India Rank 3 – EFLU Entrance 2014", organization: "English and Foreign Languages University, Hyderabad", year: "2014" }
    ],
    publications: [
        {
            title: "GRAIN – A Global Registry of Agricultural Irrigation Networks",
            authors: "Suresh, S. et al.",
            year: "2025",
            venue: "Earth System Science Data (in review)",
            type: "Journal",
            abstract: "Abstract content placeholder. The paper describes the development of the GRAIN dataset..."
        },
        {
            title: "Has Hydropower made the World more Flood-Prone?",
            authors: "Suresh, S. and Hossain, F.",
            year: "2025",
            venue: "AGU Earth's Future (preprint)",
            doi: "10.22541/essoar.175573840.03013701/v1",
            type: "Journal",
            abstract: "This study investigates the correlation between hydropower dam construction and downstream flood frequency on a global scale."
        },
        {
            title: "Satellite-based Tracking of Reservoir Operations for Flood Management During the 2018 Extreme Weather Event in Kerala, India",
            authors: "Suresh, S. et al.",
            year: "2024",
            venue: "Remote Sensing of Environment",
            doi: "10.1016/j.rse.2024.114149",
            type: "Journal",
            abstract: "Analysis of reservoir operations during the 2018 Kerala floods using satellite altimetry and precipitation data."
        }
    ],
    projects: [
        {
            title: "GRAIN",
            subtitle: "Global Registry of Agricultural Irrigation Networks",
            period: "Apr.2025 – Present",
            description: "The Global Registry of Agricultural Irrigation Networks (GRAIN) is a first of its kind open-access geospatial database of the world's irrigation canals. GRAIN combines OpenStreetMap (OSM) data with a ML based workflow to identify over 3.8 million km of irrigation canals across 95 countries.",
            image: "assets/grain_pic.png",
            link: "https://grain-canals.readthedocs.io/en/latest/"
        },
         {
            title: "RAT-Kerala",
            subtitle: "A Python Package for India WRIS data",
            period: "Sep.2024 – Nov.2024",
            description: "The Reservoir Assessment Tool – Kerala is a fully satellite-based tool that enables the transparent and near real time tracking of multiple reservoirs in the state of Kerala. The tool utilizes satellite derived storage estimates and hydrologically modelled inflow data to estimate critical reservoir operations data such as dam releases.",
            image: "assets/rat-kerala.jpg"
        },
        {
            title: "PyWRIS",
            subtitle: "A Python Package for India WRIS data",
            period: "Sep.2024 – Nov.2024",
            description: "Developed a Python package to access and analyze data from the India Water Resources Information System (IndiaWRIS). Implemented unique features including automated web scraping, rich hypertext support for Jupyter notebooks and built-in Plotly-based visualization capabilities.",
            image: "assets/pywris_functionalities.gif"
        },
        {
            title: "From Plate to Planet",
            subtitle: "Interactive Data Visualization",
            period: "Jan. 2024 – Mar. 2024",
            description: "A blog style interactive visualization built using VegaLite, JavaScript and Observable. Analyzed global datasets on methane emissions, meat consumption, and animal welfare to explore the role of environmental and ethical concerns in motivating shifts toward veganism.",
            image: "assets/project2.png"
        },
        {
            title: "Optimal AE Sensor Placement for Crack Localization",
            subtitle: "ML model for sensor optimization",
            period: "Jun.2019 – Jan.2021",
            description: "Developed a CatBoost based ML model to optimize the number and spatial arrangement of acoustic emission sensors for accurately localizing cracks in concrete slabs of varying geometry.",
            image: "assets/project3.png"
        },
        {
            title: "Image Steganography",
            subtitle: "Data encryption within images",
            period: "Jun. 2019 – Jan.2021",
            description: "Implemented Image Steganography, the process of encrypting data within images, using the Least Significant Bit method in MATLAB, for images and text.",
            image: "assets/project4.png"
        }
    ],
    skills: {
        courses: ["Water Systems Management", "Data Processing in Remote Sensing", "Geospatial Data Analysis", "Data Visualization", "Software Development for Data Scientists", "Numerical Methods", "Digital Image Processing"],
        software: ["Python", "JavaScript", "MATLAB", "ArcGIS / QGIS", "Tableau", "Observable", "VegaLite", "STAAD Pro", "AutoCAD"]
    }
};
