// ======================================================
// 🧠 UOK AI — UNIVERSITY KNOWLEDGE DATABASE
// UNIVERSITY OF KABIANGA SMART CAMPUS NAVIGATOR
//
// This file contains University information only.
// AI/chat functions are handled by prince-ai.js.
// ======================================================

const campusKnowledge = {

    // ==================================================
    // UNIVERSITY LIBRARY
    // ==================================================

    library: {
        name: "University Library",

        keywords: [
            "library",
            "university library",
            "uok library",
            "campus library"
        ],

        info:
        "The University Library provides learning resources, research materials and study spaces for students and staff."
    },


    // ==================================================
    // CAFETERIA / CANTEEN
    // ==================================================

    cafeteria: {
        name: "University Cafeteria",

        keywords: [
            "cafeteria",
            "canteen",
            "food",
            "university cafeteria",
            "campus cafeteria"
        ],

        info:
        "The University Cafeteria and canteen provide food and refreshments for students and members of the University community."
    },


    // ==================================================
    // MAIN GATE
    // ==================================================

    mainGate: {
        name: "Main Gate",

        keywords: [
            "main gate",
            "gate",
            "main entrance",
            "entrance",
            "campus gate",
            "uok gate"
        ],

        info:
        "The Main Gate is the primary entrance and access point to the University of Kabianga Main Campus."
    },


    // ==================================================
    // UNIVERSITY HEALTH CENTRE
    // ==================================================

    healthCentre: {
        name: "University Health Centre",

        keywords: [
            "health centre",
            "health center",
            "university health centre",
            "university health center",
            "uok health centre",
            "uok health center",
            "clinic",
            "university clinic",
            "uok clinic",
            "medical centre",
            "medical center",
            "campus clinic"
        ],

        info:
        "The University Health Centre provides health and medical services to students, staff and other members of the University community. It is located to the left of the Main Gate when entering the Main Campus.",

        directions: [
            "Start from the Main Gate.",
            "Enter the Main Campus through the main entrance.",
            "The University Health Centre is located to the left of the Main Gate when entering the campus."
        ]
    },


    // ==================================================
    // VICE CHANCELLOR'S OFFICE
    // ==================================================

    viceChancellorOffice: {
        name: "Vice Chancellor's Office",

        keywords: [
            "vc office",
            "vice chancellor office",
            "vice chancellor's office",
            "office of the vice chancellor",
            "office of vice chancellor",
            "office of vc",
            "uok vc office"
        ],

        info:
        "The Vice Chancellor's Office is located opposite Frustration Square, near University Hostel 1.",

        directions: [
            "Start from the Main Gate.",
            "Use the central route from the Main Gate.",
            "Continue along the central route toward University Hostel 1.",
            "When you arrive at University Hostel 1, turn right.",
            "The Vice Chancellor's Office is located opposite Frustration Square."
        ]
    },


    // ==================================================
    // UNIVERSITY HOSTEL 1
    // ==================================================

    hostel1: {
        name: "University Hostel 1",

        keywords: [
            "hostel 1",
            "hostel one",
            "university hostel 1",
            "university hostel one",
            "hostel one university",
            "uok hostel 1"
        ],

        info:
        "University Hostel 1 is a campus hostel. It is also an important landmark when navigating toward the Vice Chancellor's Office."
    },


    // ==================================================
    // FRUSTRATION SQUARE
    // ==================================================

    frustrationSquare: {
        name: "Frustration Square",

        keywords: [
            "frustration square",
            "frustration",
            "square"
        ],

        info:
        "Frustration Square is a campus landmark located near University Hostel 1 and opposite the Vice Chancellor's Office."
    },


    // ==================================================
    // LTB1
    // ==================================================

    ltb1: {
        name: "LTB1",

        keywords: [
            "ltb1",
            "ltb 1",
            "lecture theatre 1",
            "lecture theatre one",
            "lecture theatre one"
        ],

        info:
        "LTB1 is one of the lecture and learning facilities at the University of Kabianga. The Smart Campus Navigator provides information and navigation assistance for LTB1."
    },


    // ==================================================
    // LTB2
    // ==================================================

    ltb2: {
        name: "LTB2",

        keywords: [
            "ltb2",
            "ltb 2",
            "lecture theatre 2",
            "lecture theatre two"
        ],

        info:
        "LTB2 is one of the lecture and learning facilities at the University of Kabianga."
    },


    // ==================================================
    // LTB3
    // ==================================================

    ltb3: {
        name: "LTB3",

        keywords: [
            "ltb3",
            "ltb 3",
            "lecture theatre 3",
            "lecture theatre three"
        ],

        info:
        "LTB3 is a major academic and administrative building at the University of Kabianga. It contains lecture halls, offices and other facilities across several floors."
    },


    // ==================================================
    // LTB3 FLOOR INFORMATION
    // ==================================================

    ltb3Floors: {
        name: "LTB3 Floors",

        keywords: [
            "ltb3 floors",
            "ltb 3 floors",
            "inside ltb3",
            "inside ltb 3",
            "ltb3 offices",
            "ltb 3 offices",
            "ltb3 building",
            "ltb 3 building",
            "what is in ltb3",
            "what is inside ltb3"
        ],

        info:
        "LTB3 has several floors. Ground Floor: Dean School of Education, HOD Curriculum and Instruction, HOD Physiology and Foundations, LH1 and LH2. First Floor: Senate Chamber, LH3, Micro Teaching Lab and School of Business Offices. Second Floor: Director of Gender Office, LH5, LH6 and Director of Postgraduate Studies Office. Third Floor: LH7 and LH8."
    },


    // ==================================================
    // LTB3 GROUND FLOOR
    // ==================================================

    ltb3GroundFloor: {
        name: "LTB3 Ground Floor",

        keywords: [
            "ltb3 ground floor",
            "ltb 3 ground floor",
            "ground floor ltb3",
            "ground floor ltb 3"
        ],

        info:
        "The Ground Floor of LTB3 contains the Dean School of Education, HOD Curriculum and Instruction, HOD Physiology and Foundations, LH1 and LH2."
    },


    // ==================================================
    // LTB3 FIRST FLOOR
    // ==================================================

    ltb3FirstFloor: {
        name: "LTB3 First Floor",

        keywords: [
            "ltb3 first floor",
            "ltb 3 first floor",
            "first floor ltb3",
            "first floor ltb 3",
            "senate chamber",
            "micro teaching lab"
        ],

        info:
        "The First Floor of LTB3 contains the Senate Chamber, LH3, Micro Teaching Lab and School of Business Offices, including the Finance Office, Dean School of Business Office and HODs Office."
    },


    // ==================================================
    // LTB3 SECOND FLOOR
    // ==================================================

    ltb3SecondFloor: {
        name: "LTB3 Second Floor",

        keywords: [
            "ltb3 second floor",
            "ltb 3 second floor",
            "second floor ltb3",
            "second floor ltb 3",
            "director of gender",
            "gender office",
            "postgraduate studies office",
            "director postgraduate"
        ],

        info:
        "The Second Floor of LTB3 contains the Director of Gender Office, LH5, LH6 and the Director of Postgraduate Studies Office."
    },


    // ==================================================
    // LTB3 THIRD FLOOR
    // ==================================================

    ltb3ThirdFloor: {
        name: "LTB3 Third Floor",

        keywords: [
            "ltb3 third floor",
            "ltb 3 third floor",
            "third floor ltb3",
            "third floor ltb 3",
            "lh7",
            "lh8"
        ],

        info:
        "The Third Floor of LTB3 contains LH7 and LH8."
    },


    // ==================================================
    // LTB4
    // ==================================================

    ltb4: {
        name: "LTB4",

        keywords: [
            "ltb4",
            "ltb 4",
            "lecture theatre 4",
            "lecture theatre four"
        ],

        info:
        "LTB4 is one of the lecture and learning facilities at the University of Kabianga."
    },


    // ==================================================
    // SCHOOL OF BUSINESS
    // ==================================================

    schoolOfBusiness: {
        name: "School of Business",

        keywords: [
            "school of business",
            "business school",
            "business offices",
            "school business"
        ],

        info:
        "The School of Business has offices in LTB3. The LTB3 School of Business offices include the Finance Office, Dean School of Business Office and HODs Office."
    },


    // ==================================================
    // FINANCE OFFICE — SCHOOL OF BUSINESS
    // ==================================================

    schoolBusinessFinance: {
        name: "School of Business Finance Office",

        keywords: [
            "school of business finance",
            "business finance office",
            "finance office ltb3",
            "finance office school business"
        ],

        info:
        "The School of Business Finance Office is located in the School of Business offices in LTB3."
    },


    // ==================================================
    // DEAN SCHOOL OF BUSINESS
    // ==================================================

    deanBusiness: {
        name: "Dean School of Business Office",

        keywords: [
            "dean school of business",
            "dean business",
            "business dean",
            "dean of business"
        ],

        info:
        "The Dean School of Business Office is located in the School of Business offices in LTB3."
    },


    // ==================================================
    // SCHOOL OF BUSINESS HODs
    // ==================================================

    businessHOD: {
        name: "School of Business HODs Office",

        keywords: [
            "business hod",
            "business hods",
            "hods office",
            "school of business hods"
        ],

        info:
        "The School of Business HODs Office is located in the School of Business offices in LTB3."
    },


    // ==================================================
    // SENATE CHAMBER
    // ==================================================

    senateChamber: {
        name: "Senate Chamber",

        keywords: [
            "senate chamber",
            "senate",
            "uok senate chamber"
        ],

        info:
        "The Senate Chamber is located on the First Floor of LTB3."
    },


    // ==================================================
    // MICRO TEACHING LAB
    // ==================================================

    microTeachingLab: {
        name: "Micro Teaching Lab",

        keywords: [
            "micro teaching lab",
            "micro teaching",
            "microteaching lab"
        ],

        info:
        "The Micro Teaching Lab is located on the First Floor of LTB3."
    },


    // ==================================================
    // DIRECTOR OF GENDER
    // ==================================================

    genderOffice: {
        name: "Director of Gender Office",

        keywords: [
            "director of gender",
            "gender office",
            "gender director",
            "gender affairs"
        ],

        info:
        "The Director of Gender Office is located on the Second Floor of LTB3."
    },


    // ==================================================
    // DIRECTOR OF POSTGRADUATE STUDIES
    // ==================================================

    postgraduateOffice: {
        name: "Director of Postgraduate Studies Office",

        keywords: [
            "director of postgraduate studies",
            "postgraduate studies office",
            "postgraduate office",
            "director postgraduate studies",
            "postgraduate director"
        ],

        info:
        "The Director of Postgraduate Studies Office is located on the Second Floor of LTB3."
    },


    // ==================================================
    // ADMINISTRATION BLOCK
    // ==================================================

    administration: {
        name: "Administration Block",

        keywords: [
            "administration",
            "administration block",
            "admin block",
            "administrative block"
        ],

        info:
        "The Administration Block contains key University administrative offices and services."
    },


    // ==================================================
    // VICE CHANCELLOR
    // ==================================================

    viceChancellor: {
        name: "Vice Chancellor",

        keywords: [
            "vice chancellor",
            "vc",
            "chancellor",
            "prof erick koe ch",
            "erick koe ch"
        ],

        info:
        "The Vice Chancellor of the University of Kabianga is Prof. Erick Koech, Ph.D., MBS."
    },


    // ==================================================
    // DVC ACADEMIC & STUDENT AFFAIRS
    // ==================================================

    dvcAcademic: {
        name: "DVC Academic and Student Affairs",

        keywords: [
            "dvc",
            "dvc academic",
            "dvc academic and student affairs",
            "academic and student affairs",
            "fredrick nyongesa kassilly",
            "prof fredrick kassilly"
        ],

        info:
        "The Deputy Vice Chancellor responsible for Academic and Student Affairs is Prof. Dr. Fredrick Nyongesa Kassilly."
    },


    // ==================================================
    // DVC PLANNING, RESEARCH & DEVELOPMENT
    // ==================================================

    dvcPlanning: {
        name: "DVC Planning, Research and Development",

        keywords: [
            "planning",
            "research",
            "development",
            "planning research",
            "research development",
            "planning research development",
            "maurice owino oduor"
        ],

        info:
        "Planning, Research and Development is under Prof. Maurice Owino Oduor."
    },


    // ==================================================
    // REGISTRAR — ACADEMIC AFFAIRS
    // ==================================================

    registrarAcademic: {
        name: "Registrar Academic Affairs",

        keywords: [
            "registrar academic",
            "registrar academics",
            "academic registrar",
            "registrar academic affairs",
            "cecilia sang",
            "dr cecilia sang"
        ],

        info:
        "The Registrar responsible for Academic Affairs is Dr. Cecilia Sang."
    },


    // ==================================================
    // REGISTRAR — ADMINISTRATION
    // ==================================================

    registrarAdministration: {
        name: "Registrar Administration",

        keywords: [
            "registrar administration",
            "administration registrar",
            "registrar admin",
            "peter k kimalel",
            "peter k. kimalel"
        ],

        info:
        "The Registrar responsible for Administration is Mr. Peter K. Kimalel."
    },


    // ==================================================
    // DEAN OF STUDENTS
    // ==================================================

    deanStudents: {
        name: "Dean of Students",

        keywords: [
            "dean of students",
            "student dean",
            "dean students",
            "peter ngugi",
            "dr peter ngugi"
        ],

        info:
        "The Dean of Students is Dr. Peter Ngugi."
    },


    // ==================================================
    // DIRECTOR ICT
    // ==================================================

    directorICT: {
        name: "Director ICT",

        keywords: [
            "director ict",
            "ict director",
            "ict",
            "geoffrey sowek",
            "director information communication technology"
        ],

        info:
        "The Director of ICT is Mr. Geoffrey Sowek."
    },


    // ==================================================
    // FINANCE OFFICER
    // ==================================================

    financeOfficer: {
        name: "Finance Officer",

        keywords: [
            "finance officer",
            "financial officer",
            "finance",
            "cpa willy koech",
            "willy koech"
        ],

        info:
        "The Finance Officer is CPA Willy Koech."
    },


    // ==================================================
    // STUDENT PORTAL
    // ==================================================

    studentPortal: {
        name: "Student Portal",

        keywords: [
            "student portal",
            "portal",
            "uok portal",
            "student login"
        ],

        info:
        "The University Student Portal provides students with access to relevant online academic and student services."
    },


    // ==================================================
    // UNIT REGISTRATION
    // ==================================================

    unitRegistration: {
        name: "Unit Registration",

        keywords: [
            "unit registration",
            "register units",
            "unit registration process",
            "units"
        ],

        info:
        "Unit registration is the process through which students register for their academic units. Students should use the University's official student systems and follow the University's current registration instructions."
    },


        // ==================================================
    // ONLINE REPORTING
    // ==================================================

    onlineReporting: {
        name: "Online Reporting",

        keywords: [
            "online reporting",
            "report online",
            "how to report",
            "report an issue",
            "report issue",
            "complaint",
            "report problem",
            "report a problem",
            "submit complaint"
        ],

        info:
        "The Smart Campus system can provide information about reporting University-related issues online. For official complaints or reports, students should use the University's designated official reporting channels."
    },


    // ==================================================
    // ADMISSIONS
    // ==================================================

    admissions: {
        name: "Admissions",

        keywords: [
            "admission",
            "admissions",
            "admission office",
            "admissions office",
            "joining university",
            "joining instructions",
            "new student",
            "first year",
            "first years"
        ],

        info:
        "The University of Kabianga provides admission services for students joining its academic programmes. For current admission requirements, procedures and official joining instructions, students should use the University's official admission channels."
    },


    // ==================================================
    // EXAMINATIONS
    // ==================================================

    examinations: {
        name: "Examinations",

        keywords: [
            "exam",
            "exams",
            "examination",
            "examinations",
            "exam timetable",
            "exam results",
            "examination timetable",
            "examination results"
        ],

        info:
        "The University provides examination services and academic examination information to students. For current examination timetables, results and official examination notices, students should use the University's official academic systems and notices."
    },


    // ==================================================
    // POSTGRADUATE STUDIES
    // ==================================================

    postgraduateStudies: {
        name: "Postgraduate Studies",

        keywords: [
            "postgraduate",
            "post graduate",
            "masters",
            "master's",
            "master degree",
            "phd",
            "doctoral",
            "doctoral studies",
            "postgraduate studies"
        ],

        info:
        "The University of Kabianga provides postgraduate study programmes. The Director of Postgraduate Studies Office is located on the Second Floor of LTB3."
    },


    // ==================================================
    // GENDER SERVICES
    // ==================================================

    genderServices: {
        name: "Gender Services",

        keywords: [
            "gender services",
            "gender office",
            "gender affairs",
            "gender support",
            "gender services office"
        ],

        info:
        "The University provides gender-related services and support through the relevant University office. The Director of Gender Office is located on the Second Floor of LTB3."
    }

};
studentFinance: {
    name: "Student Finance",

    keywords: [
        "student finance",
        "student finance office",
        "finance office",
        "where is student finance",
        "location of student finance",
        "student finance location"
    ],

    info:
    "The Student Finance Office is located just before the University Pavilion Gate, opposite Hostel 1.",

    directions: [
        "Start from the Main Gate.",
        "Proceed toward the University Pavilion Gate.",
        "The Student Finance Office is located just before the University Pavilion Gate.",
        "It is opposite Hostel 1."
    ]
},
securityOffice: {
    name: "Security Offices",

    keywords: [
        "security office",
        "security offices",
        "university security",
        "campus security",
        "where is security",
        "where are the security offices",
        "location of security office",
        "security office location"
    ],

    info:
    "The University Security Offices are located on the right side when entering through the Main Gate.",

    directions: [
        "Start from the Main Gate.",
        "Enter through the Main Gate.",
        "The Security Offices are located on your right from the Main Gate."
    ]
},
// ======================================================
// KNOWLEDGE DATABASE STATUS
// ======================================================

console.log("✅ UOK AI knowledge database loaded successfully.");

console.log(
    "📚 Knowledge entries:",
    Object.keys(campusKnowledge).length
);
