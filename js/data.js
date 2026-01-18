const resumeData = {
    profile: {
        name: "Sarath Suresh",
        location: "6027 8th Ave NE, Seattle, WA, USA - 98115",
        email: "saraths96@gmail.com",
        linkedin: "sarathsuresh96",
        dob: "20.04.1996",
        phone: "+1 206-396-9020",
        roles: ["GeoData Scientist", "Hydrologist", "Civil Engineer", "ML/AI in Earth Science"],
        about: `<i><span class="text-white">'Access to water data is as much a basic right as access to water itself!'</span></i> <br><br>Just as clean, safe water is a fundamental human right,
                so too should <span class="text-white">open access to the data</span> that governs it be.  As a research scholar at <span class="text-white">SASWE Labs, University of Washington</span>, 
                I leverage the power of <span class="text-white">satellite remote sensing</span> and <span class="text-white">hydrological models</span> to realize this vision. 
                I collaborate with <span class="text-white">regional stakeholders</span> to provide tools and solutions that address 
                water-related challenges. Currently, my research focuses on assessing the impact of <span class="text-white">hydropower dams</span> 
                on <span class="text-white">downstream flooding</span> and <span class="text-white">agricultural productivity</span> across the world.
                <br><br> <span class="text-white">Together, let us champion the cause for open and accessible water data!</span> `,
        image: "assets/images/proPic.jpg"
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
            title: "Has Hydropower Made the World More Flood-Prone?",
            authors: "<strong>Suresh, S.</strong> and Hossain, F.",
            year: "2025",
            venue: "Earth's Future",
            doi: "10.1029/2025EF006648",
            type: "Journal",
            abstract: `Hydropower has emerged as a cornerstone of global renewable energy initiatives, providing a reliable and renewable source of electricity essential to achieving low emissions targets. 
                        However, its expansion, especially in high-precipitation and mountainous regions of developing countries, has sparked growing concerns about its role in exacerbating downstream flood risks.
                         This study critically examines the complex relationship between hydropower development and flood risk through the analysis of 107 major hydropower dams in such regions of the world spanning a period of 40 years.
                         While 41.1% of the studied dams were found to exhibit flood mitigating characteristics by buffering against extreme inflows, 26.2% of dams were likely to exacerbate flood risks,
                         primarily due to a steady increase in precipitation rates and sedimentation-induced capacity loss. Hydropower dams in regions with shorter downstream river lengths were found to be more flood-inducing than flood-protecting.
                         While regions with flood-protecting dams naturally trigger urbanization and economic growth due to perceived safety and stable energy availability, these benefits are accompanied by the cost of increased deforestation.
                         The study identified hotspots in South America and South Asia, where hydropower dams are more likely to be clustered as flood inducing in nature. Overall, the study calls for a paradigm shift in hydropower planning and management, 
                         emphasizing the integration of adaptive flood risk mitigation into energy production strategies keeping in mind the anticipated changes in climate and land cover along with a robust sedimentation management strategy during the dam's service lifespan.`,
            pdfUrl: "assets/publications_pdf/essd-grain-preprint-v1.pdf"
        },
        {
            title: "GRAIN – A Global Registry of Agricultural Irrigation Networks",
            authors: "<strong>Suresh, S.</strong>, Hossain, F., Mishra, V., Hossain, N",
            year: "2025",
            venue: "Earth System Science Data",
            doi: "10.5194/essd-2025-488",
            type: "Journal (Preprint)",
            abstract: 'abc',
            pdfUrl: "assets/publications_pdf/essd-grain-preprint-v1.pdf"
        },
        {
            title: "Satellite-based Tracking of Reservoir Operations for Flood Management During the 2018 Extreme Weather Event in Kerala, India",
            authors: "<strong>Suresh, S.</strong>, Hossain, F., Minocha, S., Das, P., Khan, S., Lee, H., Andreadis, K., Oddo, P.",
            year: "2024",
            venue: "Remote Sensing of the Environment",
            doi: "10.1016/j.rse.2024.114149",
            type: "Journal",
            abstract: "Analysis of reservoir operations during the 2018 Kerala extreme weather event using satellite altimetry and hydrological models to understand flood management strategies.",
            pdfUrl: "assets/publications_pdf/essd-grain-preprint-v1.pdf"
        },
        {
            title: "Forecast-Informed Reservoir Operations within a Satellite-Based Framework for Mountainous and High-Precipitation Regions: Case of the 2018 Kerala Floods",
            authors: "Das, P., <strong>Suresh, S.</strong>, Hossain, F., Balakrishnan, V., Jainet, P.J., Lee, H., Laverde, M., Hosen, K., Meechaiya, C. and Towashiraporn, P.",
            year: "2025",
            venue: "Journal of Hydrologic Engineering",
            doi: "10.1061/JHYEFF.HEENG-6276",
            type: "Journal",
            abstract: "Forecast-Informed Reservoir Operations within a Satellite-Based Framework for Mountainous and High-Precipitation Regions: Case of the 2018 Kerala Floods.",
            pdfUrl: "assets/publications_pdf/essd-grain-preprint-v1.pdf"
        },
        {
            title: "ResORR: A globally scalable and satellite data-driven algorithm for river flow regulation due to reservoir operations",
            authors: "Das, P., Hossain, F., Minocha, S., <strong>Suresh, S.</strong>, Darkwah, G.K., Lee, H., Andreadis, K., Laverde-Barajas, M. and Oddo, P.",
            year: "2024",
            venue: "Environmental Modelling & Software",
            doi: "10.1016/j.envsoft.2024.106026",
            type: "Journal",
            abstract: "ResORR: A globally scalable and satellite data-driven algorithm for river flow regulation due to reservoir operations.",
            pdfUrl: "assets/publications_pdf/essd-grain-preprint-v1.pdf"
        },
        {
            title: "Reservoir Assessment Tool version 3.0: a scalable and user-friendly software platform to mobilize the global water management community",
            authors: "Minocha, S., Hossain, F., Das, P., <strong>Suresh, S.</strong>, Khan, S., Darkwah, G., Lee, H., Galelli, S., Andreadis, K. and Oddo, P.",
            year: "2023",
            venue: "Geoscientific Model Development Discussions",
            doi: "10.5194/gmd-17-3137-2024",
            type: "Journal",
            abstract: "Reservoir Assessment Tool version 3.0: a scalable and user-friendly software platform to mobilize the global water management community.",
            pdfUrl: "assets/publications_pdf/essd-grain-preprint-v1.pdf"
        },
        {
            title: "Reconstruction of the hydro-thermal behavior of regulated river networks of the Columbia River Basin using satellite remote sensing and data-driven techniques",
            authors: "Darkwah, G., Hossain, F., Tchervenski, V., Holtgrieve, G., Graves, D., Seaton, C., Minocha, S., Das, P., Khan, S. and <strong>Suresh, S.</strong>",
            year: "2024",
            venue: "Earth's Future",
            doi: "10.1029/2024EF004815",
            type: "Journal",
            abstract: "Reconstruction of the hydro-thermal behavior of regulated river networks of the Columbia River Basin using satellite remote sensing and data-driven techniques.",
            pdfUrl: "assets/publications_pdf/essd-grain-preprint-v1.pdf"
        }
    ],
    conferences: [
        {
            title: "Impact of Hydropower on Flood Risk and Food Production – Insights from Satellite Observations and the new GRAIN Dataset",
            authors: "<strong>Suresh, S.</strong>, Hossain, F., Mishra, V., Hossain, N. ",
            year: "2025",
            venue: "AGU Fall Meeting Abstracts 2025, H41L-1321",
            description: "AGU Fall Meeting abstract on the use of GRAIN data in providing insights into the effect of hydropower dams and downstream agriculture and flood risk."
        },
        {
            title: "Satellite Earth Observations Based Tracking of Reservoir Operations for Flood Preparedness in Mountainous and High Precipitation Regions: A Case of the 2018 Kerala Floods",
            authors: "<strong>Suresh, S.</strong>, Hossain, F., Minocha, S., Das, P., Khan, S., Lee, H., Andreadis, K., et al.",
            year: "2023",
            venue: "AGU Fall Meeting Abstracts 2023, H31S-1725",
            description: "AGU Fall Meeting abstract on satellite-based reservoir tracking for flood preparedness in mountainous regions, with a focus on the 2018 Kerala floods."
        },
        {
            title: "Effect of Marine Growth on Wave Loading on Small Diameter Tubular Structural Members",
            authors: "<strong> Suresh, S. </strong>, Behera,M., R., Moideen, R.",
            year: "2020",
            venue: "International Conference on Hydraulics, Water Resources and Coastal Engineering (HYDRO 2020), NIT Rourkela",
            description: "Investigates how marine growth alters hydrodynamic loading on offshore tubular structures."
        },
        {
            title: "Hidden Sediments, Lost Capacity: How Swiftly Are Global Reservoirs Depleting?",
            authors: "Minocha, S., Hossain, F., Zhao, J., <strong>Suresh, S.</strong>, Das, P.",
            year: "2024",
            venue: "AGU Fall Meeting Abstracts 2024, H53E-1146",
            description: "AGU Fall Meeting abstract on global reservoir sedimentation and capacity loss trends."
        },
        {
            title: "Collaborative Water Management for Advancing Open Science in Regulated River Basins with the Open-Source Reservoir Assessment Tool (RAT) 3.0: A Python Package Integrating Cloud …",
            authors: "Minocha, S., Hossain, F., Das, P., <strong>Suresh, S.</strong>, Khan, S., Darkwah, G.",
            year: "2023",
            venue: "AGU Fall Meeting Abstracts 2023, H31W-1809",
            description: "AGU Fall Meeting abstract on RAT 3.0 and open-science workflows for regulated basins."
        },
        {
            title: "Reconstruction of the Hydro-Thermal History of Regulated River Networks Using Satellite Remote Sensing and Data-driven Techniques",
            authors: "Darkwah, G., Hossain, F., Holtgrieve, G. W., Das, P., <strong>Suresh, S.</strong>",
            year: "2023",
            venue: "AGU Fall Meeting Abstracts 2023, H32B-01",
            description: "AGU Fall Meeting abstract on hydro-thermal reconstruction of regulated river networks using satellite remote sensing."
        },
       
        
    ],
    patents: [
        {
            title: "MarGro v.1.0",
            authors: "Suresh, S. et al.",
            year: "2021",
            venue: "Indian Trademark No: 5027217",
            description: "A tool to compute wave forces acting on offshore structural members under varying marine growth."
        }
    ],
    projects: [
        {
            title: "GRAIN",
            subtitle: "Global Registry of Agricultural Irrigation Networks",
            period: "Apr.2025 – Present",
            description: "The Global Registry of Agricultural Irrigation Networks (GRAIN) is a first of its kind open-access geospatial database of the world's irrigation canals. GRAIN combines OpenStreetMap (OSM) data with a ML based workflow to identify over 3.8 million km of irrigation canals across 95 countries.",
            image: "assets/images/grain_pic.png",
            link: "https://grain-canals.readthedocs.io/en/latest/"
        },
        {
            title: "Has Hydropower Made the World Flood-Prone?",
            subtitle: "A study on hydropower and flood risk",
            period: "Feb.2024 – Feb.2025",
            description: "A study on 100+ reservoirs across the equatorial belt that utilises 40+ years of satellite data to demystify the impact of Hydropower dams on flood risk. Published in AGU Earth's Future.",
            image: "assets/images/agu_earths_future.png",
            link: "https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2025EF006648"
        },
        
        {
            title: "RAT-Kerala Tool",
            subtitle: "A one stop monitoring tool for 20 Hydropower Dams in Kerala",
            period: "Sep.2024 – Nov.2024",
            description: "The Reservoir Assessment Tool – Kerala is a fully satellite-based tool that enables the transparent and near real time tracking of multiple reservoirs in the state of Kerala. The tool utilizes satellite derived storage estimates and hydrologically modelled inflow data to estimate critical reservoir operations data such as dam releases.",
            image: "assets/images/rat-kerala.jpg"
        },
        {
            title: "Satellite Based Reservoir Monitoring for 2018 Kerala Floods",
            subtitle: "A study on reservoir operations during extreme weather",
            period: "Sep.2024 – Nov.2024",
            description: "A study utilising a purely satellite data and VIC5.0 hydrological based model for reservoir monitoring to analyze operations during the 2018 extreme weather event in Kerala, India. Published in Remote Sensing of Environment.",
            image: "assets/images/elsevier_logo_2.png",
            link: "https://www.sciencedirect.com/science/article/abs/pii/S0034425724001603"
        },
        {
            title: "PyWRIS",
            subtitle: "A Python Package for India WRIS data",
            period: "Sep.2024 – Nov.2024",
            description: "Developed a Python package to access and analyze data from the India Water Resources Information System (IndiaWRIS). Implemented unique features including automated web scraping, rich hypertext support for Jupyter notebooks and built-in Plotly-based visualization capabilities.",
            image: "assets/gifs/pywris_functionalities.gif",
            link: "https://github.com/sureshsarath/PyWRIS"
        },
        {
            title: "From Plate to Planet",
            subtitle: "Interactive Data Visualization",
            period: "Jan. 2024 – Mar. 2024",
            description: "A blog style interactive visualization built using VegaLite, JavaScript and Observable. Analyzed global datasets on methane emissions, meat consumption, and animal welfare to explore the role of environmental and ethical concerns in motivating shifts toward veganism.",
            image: "assets/gifs/from_plate_to_planet.gif",
            link: "https://observablehq.com/@sarath-suresh2-ws/from-plate-to-planet"
        },
        
        // {
        //     title: "Image Steganography",
        //     subtitle: "Data encryption within images",
        //     period: "Jun. 2019 – Jan.2021",
        //     description: "Implemented Image Steganography, the process of encrypting data within images, using the Least Significant Bit method in MATLAB, for images and text.",
        //     image: "assets/images/project4.png"
        // }
    ],
    skills: {
        courses: ["Water Systems Management", "Data Processing in Remote Sensing", "Geospatial Data Analysis", "Data Visualization", "Software Development for Data Scientists", "Numerical Methods", "Digital Image Processing"],
        software: ["Python", "JavaScript", "MATLAB", "ArcGIS / QGIS", "Tableau", "Observable", "VegaLite", "STAAD Pro", "AutoCAD"]
    }
};
