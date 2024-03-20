// region wise roles data - fetching logic
const rolesData = {
    'USA': [
        { name: 'Select Role', minRate: '', maxRate: '', buyRate: 0 },
        { name: 'Functional Test Analyst', minRate: { Onsite: 80, Offshore: 22 }, maxRate: { Onsite: 85, Offshore: 27 }, buyRate: { Onsite: 51.5, Offshore: 5.3 } },
        { name: 'Senior Functional Test Analyst', minRate: { Onsite: 90, Offshore: 28 }, maxRate: { Onsite: 95, Offshore: 33 }, buyRate: { Onsite: 59.2, Offshore: 12.2 } },
	{ name: 'Functional Test Lead', minRate: { Onsite: 100, Offshore: 32 }, maxRate: { Onsite: 105, Offshore: 37 }, buyRate: { Onsite: 67.6, Offshore: 15.2 } },
    	{ name: 'Functional Test Architect', minRate: { Onsite: 115, Offshore: 35 }, maxRate: { Onsite: 120, Offshore: 40 }, buyRate: { Onsite: 75.9, Offshore: 19.0 } },
    	{ name: 'Functional Test Manager', minRate: { Onsite: 120, Offshore: 38 }, maxRate: { Onsite: 125, Offshore: 43 }, buyRate: { Onsite: 80.4, Offshore: 21.3 } },
    	{ name: 'Automation Test Analyst', minRate: { Onsite: 90, Offshore: 27 }, maxRate: { Onsite: 95, Offshore: 32 }, buyRate: { Onsite: 57.9, Offshore: 6.5 } },
    	{ name: 'Senior Automation Test Analyst', minRate: { Onsite: 105, Offshore: 30 }, maxRate: { Onsite: 110, Offshore: 35 }, buyRate: { Onsite: 67.6, Offshore: 12.9 } },
    	{ name: 'Automation Test Lead', minRate: { Onsite: 115, Offshore: 37 }, maxRate: { Onsite: 120, Offshore: 42 }, buyRate: { Onsite: 77.2, Offshore: 19.8 } },
    	{ name: 'Automation Test Architect', minRate: { Onsite: 150, Offshore: 45 }, maxRate: { Onsite: 160, Offshore: 50 }, buyRate: { Onsite: 102.9, Offshore: 24.3 } },
    	{ name: 'Performance Test Analyst', minRate: { Onsite: 90, Offshore: 30 }, maxRate: { Onsite: 95, Offshore: 35 }, buyRate: { Onsite: 57.9, Offshore: 6.8 } },
    	{ name: 'Senior Performance Test Analyst', minRate: { Onsite: 105, Offshore: 32 }, maxRate: { Onsite: 110, Offshore: 37 }, buyRate: { Onsite: 74.0, Offshore: 14.5 } },
    	{ name: 'Performance Test Lead', minRate: { Onsite: 125, Offshore: 36 }, maxRate: { Onsite: 130, Offshore: 41 }, buyRate: { Onsite: 83.6, Offshore: 19.0 } },
    	{ name: 'Performance Test Architect', minRate: { Onsite: 150, Offshore: 50 }, maxRate: { Onsite: 160, Offshore: 55 }, buyRate: { Onsite: 102.9, Offshore: 27.4 } },
    	{ name: 'Observability/Chaos/Reliability Engineer', minRate: { Onsite: 110, Offshore: 32 }, maxRate: { Onsite: 115, Offshore: 37 }, buyRate: { Onsite: 70.8, Offshore: 15.2 } },
    	{ name: 'Observability/Chaos/Reliability Lead', minRate: { Onsite: 130, Offshore: 40 }, maxRate: { Onsite: 135, Offshore: 45 }, buyRate: { Onsite: 90.1, Offshore: 24.3 } },
    	{ name: 'Observability/Chaos/Reliability Architect', minRate: { Onsite: 150, Offshore: 50 }, maxRate: { Onsite: 160, Offshore: 55 }, buyRate: { Onsite: 102.9, Offshore: 30.4 } },
    	{ name: 'Security Test Analyst', minRate: { Onsite: 95, Offshore: 30 }, maxRate: { Onsite: 100, Offshore: 35 }, buyRate: { Onsite: 61.1, Offshore: 7.6 } },
    	{ name: 'Senior Security Test Analyst', minRate: { Onsite: 105, Offshore: 32 }, maxRate: { Onsite: 110, Offshore: 37 }, buyRate: { Onsite: 67.6, Offshore: 16.7 } },
    	{ name: 'Security Test Lead', minRate: { Onsite: 120, Offshore: 36 }, maxRate: { Onsite: 125, Offshore: 41 }, buyRate: { Onsite: 77.2, Offshore: 21.3 } },
    	{ name: 'Security Test Architect', minRate: { Onsite: 150, Offshore: 52 }, maxRate: { Onsite: 160, Offshore: 57 }, buyRate: { Onsite: 102.9, Offshore: 24.3 } },
    	{ name: 'SDET', minRate: { Onsite: 100, Offshore: 35 }, maxRate: { Onsite: 105, Offshore: 40 }, buyRate: { Onsite: 64.3, Offshore: 18.3 } },
    	{ name: 'Sr. SDET', minRate: { Onsite: 125, Offshore: 45 }, maxRate: { Onsite: 130, Offshore: 50 }, buyRate: { Onsite: 83.6, Offshore: 22.8 } },
    	{ name: 'Consultant - ATS', minRate: { Onsite: 135, Offshore: 45 }, maxRate: { Onsite: 140, Offshore: 50 }, buyRate: { Onsite: 86.9, Offshore: 12.6 } },
    	{ name: 'Lead Consultant - ATS', minRate: { Onsite: 145, Offshore: 50 }, maxRate: { Onsite: 150, Offshore: 55 }, buyRate: { Onsite: 96.5, Offshore: 15.2 } },
	{ name: 'Program Manager', minRate: { Onsite: 150, Offshore: 50 }, maxRate: { Onsite: 155, Offshore: 55 }, buyRate: { Onsite: 102.9, Offshore: 19.0 } },
    	{ name: 'RPA Tester', minRate: { Onsite: 90, Offshore: 25 }, maxRate: { Onsite: 98, Offshore: 30 }, buyRate: { Onsite: 57.9, Offshore: 9.1 } },
    	{ name: 'Sr. RPA Tester', minRate: { Onsite: 110, Offshore: 30 }, maxRate: { Onsite: 118, Offshore: 35 }, buyRate: { Onsite: 70.8, Offshore: 13.7 } },
    	{ name: 'Project Manager', minRate: { Onsite: 124, Offshore: 42 }, maxRate: { Onsite: 129, Offshore: 47 }, buyRate: { Onsite: 80.4, Offshore: 21.3 } },
    	{ name: 'Sr. Project Manager', minRate: { Onsite: 130, Offshore: 48 }, maxRate: { Onsite: 135, Offshore: 53 }, buyRate: { Onsite: 83.6, Offshore: 24.3 } },
    	{ name: 'Scrum Master', minRate: { Onsite: 108, Offshore: 33 }, maxRate: { Onsite: 113, Offshore: 38 }, buyRate: { Onsite: 70.8, Offshore: 18.3 } },
    	{ name: 'Sr. Scrum Master', minRate: { Onsite: 120, Offshore: 40 }, maxRate: { Onsite: 125, Offshore: 45 }, buyRate: { Onsite: 80.4, Offshore: 22.8 } },
    	{ name: 'Associate Business Analyst - Domain', minRate: { Onsite: 88, Offshore: 25 }, maxRate: { Onsite: 93, Offshore: 30 }, buyRate: { Onsite: 54.7, Offshore: 12.6 } },
    	{ name: 'Business Analyst - Domain', minRate: { Onsite: 95, Offshore: 31 }, maxRate: { Onsite: 100, Offshore: 36 }, buyRate: { Onsite: 64.3, Offshore: 15.2 } },
    	{ name: 'Sr. Business Analyst - Domain', minRate: { Onsite: 110, Offshore: 37 }, maxRate: { Onsite: 115, Offshore: 42 }, buyRate: { Onsite: 77.2, Offshore: 19.0 } },
    	{ name: 'Associate Systems Analyst - COTS', minRate: { Onsite: 90, Offshore: 25 }, maxRate: { Onsite: 95, Offshore: 30 }, buyRate: { Onsite: 57.9, Offshore: 9.1 } },
    	{ name: 'Systems Analyst - COTS', minRate: { Onsite: 102, Offshore: 32 }, maxRate: { Onsite: 107, Offshore: 37 }, buyRate: { Onsite: 70.8, Offshore: 13.7 } },
    	{ name: 'Sr. Systems Analyst - COTS', minRate: { Onsite: 112, Offshore: 36 }, maxRate: { Onsite: 117, Offshore: 41 }, buyRate: { Onsite: 77.2, Offshore: 21.3 } },
    	{ name: 'Associate Data Analyst', minRate: { Onsite: 90, Offshore: 25 }, maxRate: { Onsite: 95, Offshore: 30 }, buyRate: { Onsite: 61.1, Offshore: 11.4 } },
    	{ name: 'Data Analyst', minRate: { Onsite: 100, Offshore: 31 }, maxRate: { Onsite: 105, Offshore: 36 }, buyRate: { Onsite: 70.8, Offshore: 15.2 } },
    	{ name: 'Sr. Data Analyst', minRate: { Onsite: 110, Offshore: 45 }, maxRate: { Onsite: 115, Offshore: 50 }, buyRate: { Onsite: 77.2, Offshore: 26.6 } },
    	{ name: 'Associate Data Scientist', minRate: { Onsite: 100, Offshore: 23 }, maxRate: { Onsite: 105, Offshore: 28 }, buyRate: { Onsite: 64.3, Offshore: 11.4 } },
    	{ name: 'Data Scientist', minRate: { Onsite: 115, Offshore: 42 }, maxRate: { Onsite: 120, Offshore: 47 }, buyRate: { Onsite: 77.2, Offshore: 21.3 } },
    	{ name: 'Sr. Data Scientist', minRate: { Onsite: 135, Offshore: 52 }, maxRate: { Onsite: 140, Offshore: 57 }, buyRate: { Onsite: 90.1, Offshore: 30.4 } },
    	{ name: 'Solution Architect', minRate: { Onsite: 150, Offshore: 50 }, maxRate: { Onsite: 155, Offshore: 55 }, buyRate: { Onsite: 102.9, Offshore: 26.6 } },
{ name: 'Sr Solution Architect', minRate: { Onsite: 165, Offshore: 56 }, maxRate: { Onsite: 170, Offshore: 61 }, buyRate: { Onsite: 115.8, Offshore: 32.0 } },
    	{ name: 'Associate Cloud Engineer(Azure/AWS/Google)', minRate: { Onsite: 115, Offshore: 28 }, maxRate: { Onsite: 120, Offshore: 33 }, buyRate: { Onsite: 74.0, Offshore: 7.6 } },
    	{ name: 'Cloud Engineer(Azure/AWS/Google)', minRate: { Onsite: 125, Offshore: 38 }, maxRate: { Onsite: 130, Offshore: 43 }, buyRate: { Onsite: 83.6, Offshore: 19.0 } },
    	{ name: 'Cloud Architect(Azure/AWS/Google)', minRate: { Onsite: 145, Offshore: 47 }, maxRate: { Onsite: 150, Offshore: 52 }, buyRate: { Onsite: 96.5, Offshore: 26.6 } },
    	{ name: 'Associate Engineer-AWS(Redshift+Glue),Azure(Databricks+ADF),Snowflake', minRate: { Onsite: 115, Offshore: 28 }, maxRate: { Onsite: 120, Offshore: 33 }, buyRate: { Onsite: 74.0, Offshore: 7.6 } },
    	{ name: 'Engineer-AWS(Redshift+Glue),Azure(Databricks+ADF),Snowflake', minRate: { Onsite: 130, Offshore: 39 }, maxRate: { Onsite: 135, Offshore: 44 }, buyRate: { Onsite: 83.6, Offshore: 19.0 } },
    	{ name: 'Architect-AWS(Redshift+Glue),Azure (Databricks+ADF),Snowflake', minRate: { Onsite: 160, Offshore: 46 }, maxRate: { Onsite: 165, Offshore: 51 }, buyRate: { Onsite: 102.9, Offshore: 26.6 } },
    	{ name: 'Database Administrator', minRate: { Onsite: 120, Offshore: 33 }, maxRate: { Onsite: 125, Offshore: 38 }, buyRate: { Onsite: 80.4, Offshore: 11.4 } },
    	{ name: 'Sr. Database Administrator', minRate: { Onsite: 135, Offshore: 40 }, maxRate: { Onsite: 140, Offshore: 45 }, buyRate: { Onsite: 93.3, Offshore: 19.8 } },
    	{ name: 'Agile Coach', minRate: { Onsite: 125, Offshore: 35 }, maxRate: { Onsite: 130, Offshore: 40 }, buyRate: { Onsite: 80.4, Offshore: 15.2 } },
    	{ name: 'Sr. Agile Coach', minRate: { Onsite: 140, Offshore: 42 }, maxRate: { Onsite: 145, Offshore: 47 }, buyRate: { Onsite: 90.1, Offshore: 22.8 } },
    	{ name: 'Associate UI/UX Designer', minRate: { Onsite: 95, Offshore: 26 }, maxRate: { Onsite: 100, Offshore: 31 }, buyRate: { Onsite: 64.3, Offshore: 7.6 } },
    	{ name: 'UI/UX Designer', minRate: { Onsite: 110, Offshore: 32 }, maxRate: { Onsite: 115, Offshore: 37 }, buyRate: { Onsite: 77.2, Offshore: 11.4 } },
    	{ name: 'Sr. UI/UX Designer', minRate: { Onsite: 125, Offshore: 38 }, maxRate: { Onsite: 130, Offshore: 43 }, buyRate: { Onsite: 86.9, Offshore: 19.0 } },
    	{ name: 'Associate InfoSec Consultant', minRate: { Onsite: 105, Offshore: 26 }, maxRate: { Onsite: 110, Offshore: 31 }, buyRate: { Onsite: 70.8, Offshore: 7.6 } },
    	{ name: 'InfoSec Consultant', minRate: { Onsite: 110, Offshore: 32 }, maxRate: { Onsite: 115, Offshore: 37 }, buyRate: { Onsite: 77.2, Offshore: 13.7 } },
    	{ name: 'Sr. InfoSec Consultant', minRate: { Onsite: 120, Offshore: 38 }, maxRate: { Onsite: 125, Offshore: 43 }, buyRate: { Onsite: 83.6, Offshore: 19.0 } },
    	{ name: 'Front-end Associate Developer-Angular/ReactJS /API', minRate: { Onsite: 100, Offshore: 25 }, maxRate: { Onsite: 105, Offshore: 30 }, buyRate: { Onsite: 70.8, Offshore: 10.7 } },
    	{ name: 'Front-end Developer-Angular/ReactJS/API', minRate: { Onsite: 120, Offshore: 35 }, maxRate: { Onsite: 125, Offshore: 40 }, buyRate: { Onsite: 77.2, Offshore: 19.0 } },
    	{ name: 'Front-end Sr. Developer-Angular/ReactJS/API', minRate: { Onsite: 130, Offshore: 45 }, maxRate: { Onsite: 135, Offshore: 50 }, buyRate: { Onsite: 83.6, Offshore: 26.6 } },
	{ name: 'RPA Developer', minRate: { Onsite: 95, Offshore: 26 }, maxRate: { Onsite: 100, Offshore: 31 }, buyRate: { Onsite: 64.3, Offshore: 9.1 } },
    	{ name: 'Sr. RPA Developer', minRate: { Onsite: 105, Offshore: 32 }, maxRate: { Onsite: 110, Offshore: 37 }, buyRate: { Onsite: 70.8, Offshore: 19.0 } },
    	{ name: 'RPA Transformation Lead', minRate: { Onsite: 120, Offshore: 38 }, maxRate: { Onsite: 125, Offshore: 43 }, buyRate: { Onsite: 83.6, Offshore: 22.8 } },
    	{ name: 'RPA Architect', minRate: { Onsite: 150, Offshore: 45 }, maxRate: { Onsite: 155, Offshore: 50 }, buyRate: { Onsite: 102.9, Offshore: 26.6 } },
    	{ name: 'Associate Mobile Developer(React Native/Flutter/Xamarin/Native IOS/Android)', minRate: { Onsite: 105, Offshore: 26 }, maxRate: { Onsite: 110, Offshore: 31 }, buyRate: { Onsite: 74.0, Offshore: 9.1 } },
    	{ name: 'Mobile Developer(React Native/Flutter/Xamarin/Native IOS/Android)', minRate: { Onsite: 120, Offshore: 32 }, maxRate: { Onsite: 125, Offshore: 37 }, buyRate: { Onsite: 83.6, Offshore: 15.2 } },
    	{ name: 'Sr. Mobile Developer(React Native/Flutter/Xamarin/NativeIOS/Android)', minRate: { Onsite: 135, Offshore: 38 }, maxRate: { Onsite: 140, Offshore: 43 }, buyRate: { Onsite: 93.3, Offshore: 22.8 } },
    	{ name: 'Back-end Associate Developer(.Net/Java/C#/PHP/Python/UNIX/Shell/PERL)', minRate: { Onsite: 115, Offshore: 26 }, maxRate: { Onsite: 120, Offshore: 31 }, buyRate: { Onsite: 74.0, Offshore: 7.6 } },
    	{ name: 'Back-end Developer(.Net/Java/C#/PHP/Python/UNIX/Shell/PERL)', minRate: { Onsite: 130, Offshore: 32 }, maxRate: { Onsite: 135, Offshore: 37 }, buyRate: { Onsite: 83.6, Offshore: 19.0 } },
    	{ name: 'Back-end Sr. Developer(.Net/Java/C#/PHP/Python/UNIX/Shell/PERL)', minRate: { Onsite: 145, Offshore: 38 }, maxRate: { Onsite: 150, Offshore: 43 }, buyRate: { Onsite: 93.3, Offshore: 22.8 } },
    	{ name: 'Associate Full Stack Developer', minRate: { Onsite: 120, Offshore: 26 }, maxRate: { Onsite: 125, Offshore: 31 }, buyRate: { Onsite: 77.2, Offshore: 9.1 } },
    	{ name: 'Full Stack Developer', minRate: { Onsite: 135, Offshore: 32 }, maxRate: { Onsite: 140, Offshore: 37 }, buyRate: { Onsite: 86.9, Offshore: 19.0 } },
	{ name: 'Sr. Full Stack Developer', minRate: { Onsite: 145, Offshore: 41 }, maxRate: { Onsite: 150, Offshore: 46 }, buyRate: { Onsite: 96.5, Offshore: 24.3 } },
    	{ name: 'Associate Consultant-DevOps/CI-CD/SRE', minRate: { Onsite: 120, Offshore: 26 }, maxRate: { Onsite: 125, Offshore: 31 }, buyRate: { Onsite: 74.0, Offshore: 7.6 } },
    	{ name: 'Consultant-DevOps/CI-CD/SRE', minRate: { Onsite: 135, Offshore: 32 }, maxRate: { Onsite: 140, Offshore: 37 }, buyRate: { Onsite: 83.6, Offshore: 15.2 } },
    	{ name: 'Sr. Consultant-DevOps/CI-CD/SRE', minRate: { Onsite: 145, Offshore: 40 }, maxRate: { Onsite: 150, Offshore: 45 }, buyRate: { Onsite: 93.3, Offshore: 22.8 } },
    	{ name: 'Associate Consultant-Power BI/Tableau/Looker/Qlik', minRate: { Onsite: 120, Offshore: 26 }, maxRate: { Onsite: 125, Offshore: 31 }, buyRate: { Onsite: 75.9, Offshore: 7.6 } },
    	{ name: 'Consultant-Power BI/Tableau/Looker/Qlik', minRate: { Onsite: 135, Offshore: 32 }, maxRate: { Onsite: 140, Offshore: 37 }, buyRate: { Onsite: 84.9, Offshore: 15.2 } },
    	{ name: 'Sr. Consultant-Power BI/Tableau/Looker/Qlik', minRate: { Onsite: 145, Offshore: 38 }, maxRate: { Onsite: 150, Offshore: 43 }, buyRate: { Onsite: 93.3, Offshore: 22.8 } },
    	{ name: 'ERP Technical Consultant', minRate: { Onsite: 135, Offshore: 35 }, maxRate: { Onsite: 140, Offshore: 40 }, buyRate: { Onsite: 86.9, Offshore: 13.7 } },
    	{ name: 'ERP Sr. Technical Consultant', minRate: { Onsite: 145, Offshore: 45 }, maxRate: { Onsite: 150, Offshore: 50 }, buyRate: { Onsite: 99.7, Offshore: 22.8 } },
    	{ name: 'ERP Functional Consultant', minRate: { Onsite: 130, Offshore: 35 }, maxRate: { Onsite: 135, Offshore: 40 }, buyRate: { Onsite: 86.9, Offshore: 11.4 } },
    	{ name: 'ERP Sr. Functional Consultant', minRate: { Onsite: 140, Offshore: 40 }, maxRate: { Onsite: 145, Offshore: 45 }, buyRate: { Onsite: 99.7, Offshore: 21.3 } }       
    ],
    'Canada': [
	{ name: 'Select Role', minRate: '', maxRate: '', buyRate: 0 },
	{ name: 'Functional Test Analyst', minRate: { Onsite: 75, Offshore: 29 }, maxRate: { Onsite: 80, Offshore: 36 }, buyRate: { Onsite: 48, Offshore: 7 } },
   	{ name: 'Senior Functional Test Analyst', minRate: { Onsite: 85, Offshore: 38 }, maxRate: { Onsite: 90, Offshore: 44 }, buyRate: { Onsite: 57, Offshore: 16 } },
    	{ name: 'Functional Test Lead', minRate: { Onsite: 100, Offshore: 43 }, maxRate: { Onsite: 105, Offshore: 50 }, buyRate: { Onsite: 66, Offshore: 20 } },
    	{ name: 'Functional Test Architect', minRate: { Onsite: 115, Offshore: 47 }, maxRate: { Onsite: 125, Offshore: 54 }, buyRate: { Onsite: 75, Offshore: 25 } },
    	{ name: 'Functional Test Manager', minRate: { Onsite: 115, Offshore: 51 }, maxRate: { Onsite: 120, Offshore: 58 }, buyRate: { Onsite: 75, Offshore: 29 } },
    	{ name: 'Automation Test Analyst', minRate: { Onsite: 80, Offshore: 36 }, maxRate: { Onsite: 85, Offshore: 43 }, buyRate: { Onsite: 51, Offshore: 9 } },
    	{ name: 'Senior Automation Test Analyst', minRate: { Onsite: 90, Offshore: 40 }, maxRate: { Onsite: 95, Offshore: 47 }, buyRate: { Onsite: 57, Offshore: 17 } },
    	{ name: 'Automation Test Lead', minRate: { Onsite: 110, Offshore: 50 }, maxRate: { Onsite: 115, Offshore: 56 }, buyRate: { Onsite: 72, Offshore: 27 } },
    	{ name: 'Automation Test Architect', minRate: { Onsite: 125, Offshore: 60 }, maxRate: { Onsite: 135, Offshore: 67 }, buyRate: { Onsite: 81, Offshore: 33 } },
    	{ name: 'Performance Test Analyst', minRate: { Onsite: 85, Offshore: 40 }, maxRate: { Onsite: 90, Offshore: 47 }, buyRate: { Onsite: 54, Offshore: 9 } },
    	{ name: 'Senior Performance Test Analyst', minRate: { Onsite: 95, Offshore: 43 }, maxRate: { Onsite: 100, Offshore: 50 }, buyRate: { Onsite: 60, Offshore: 19 } },
    	{ name: 'Performance Test Lead', minRate: { Onsite: 110, Offshore: 48 }, maxRate: { Onsite: 115, Offshore: 55 }, buyRate: { Onsite: 69, Offshore: 25 } },
    	{ name: 'Performance Test Architect', minRate: { Onsite: 130, Offshore: 67 }, maxRate: { Onsite: 140, Offshore: 74 }, buyRate: { Onsite: 81, Offshore: 37 } },
    	{ name: 'Observability/Chaos/Reliability Engineer', minRate: { Onsite: 110, Offshore: 43 }, maxRate: { Onsite: 115, Offshore: 50 }, buyRate: { Onsite: 72, Offshore: 20 } },
    	{ name: 'Observability/Chaos/Reliability Lead', minRate: { Onsite: 120, Offshore: 54 }, maxRate: { Onsite: 125, Offshore: 60 }, buyRate: { Onsite: 78, Offshore: 33 } },
    	{ name: 'Observability/Chaos/Reliability Architect', minRate: { Onsite: 135, Offshore: 67 }, maxRate: { Onsite: 145, Offshore: 74 }, buyRate: { Onsite: 87, Offshore: 41 } },
    	{ name: 'Security Test Analyst', minRate: { Onsite: 95, Offshore: 40 }, maxRate: { Onsite: 100, Offshore: 47 }, buyRate: { Onsite: 60, Offshore: 10 } },
   	{ name: 'Senior Security Test Analyst', minRate: { Onsite: 110, Offshore: 43 }, maxRate: { Onsite: 115, Offshore: 50 }, buyRate: { Onsite: 72, Offshore: 22 } },
    	{ name: 'Security Test Lead', minRate: { Onsite: 125, Offshore: 48 }, maxRate: { Onsite: 130, Offshore: 55 }, buyRate: { Onsite: 81, Offshore: 29 } },
    	{ name: 'Security Test Architect', minRate: { Onsite: 140, Offshore: 70 }, maxRate: { Onsite: 150, Offshore: 76 }, buyRate: { Onsite: 90, Offshore: 44 } },
   	{ name: 'SDET', minRate: { Onsite: 105, Offshore: 47 }, maxRate: { Onsite: 110, Offshore: 54 }, buyRate: { Onsite: 69, Offshore: 15 } },
    	{ name: 'Sr. SDET', minRate: { Onsite: 115, Offshore: 60 }, maxRate: { Onsite: 120, Offshore: 67 }, buyRate: { Onsite: 75, Offshore: 31 } },
    	{ name: 'Consultant - ATS', minRate: { Onsite: 135, Offshore: 60 }, maxRate: { Onsite: 145, Offshore: 67 }, buyRate: { Onsite: 87, Offshore: 36 } },
	{ name: 'Program Manager', minRate: { Onsite: 150, Offshore: 67 }, maxRate: { Onsite: 160, Offshore: 74 }, buyRate: { Onsite: 96, Offshore: 37 } },
    	{ name: 'RPA Tester', minRate: { Onsite: 90, Offshore: 34 }, maxRate: { Onsite: 100, Offshore: 40 }, buyRate: { Onsite: 60, Offshore: 9 } },
    	{ name: 'Sr. RPA Tester', minRate: { Onsite: 105, Offshore: 40 }, maxRate: { Onsite: 115, Offshore: 47 }, buyRate: { Onsite: 66, Offshore: 17 } },
    	{ name: 'Project Manager', minRate: { Onsite: 105, Offshore: 57 }, maxRate: { Onsite: 110, Offshore: 63 }, buyRate: { Onsite: 66, Offshore: 29 } },
    	{ name: 'Sr. Project Manager', minRate: { Onsite: 110, Offshore: 65 }, maxRate: { Onsite: 115, Offshore: 72 }, buyRate: { Onsite: 75, Offshore: 33 } },
    	{ name: 'Scrum Master', minRate: { Onsite: 100, Offshore: 45 }, maxRate: { Onsite: 105, Offshore: 51 }, buyRate: { Onsite: 69, Offshore: 24 } },
   	{ name: 'Sr. Scrum Master', minRate: { Onsite: 105, Offshore: 54 }, maxRate: { Onsite: 110, Offshore: 61 }, buyRate: { Onsite: 78, Offshore: 31 } },
   	{ name: 'Associate Business Analyst - Domain', minRate: { Onsite: 80, Offshore: 34 }, maxRate: { Onsite: 85, Offshore: 41 }, buyRate: { Onsite: 51, Offshore: 17 } },
    	{ name: 'Business Analyst - Domain', minRate: { Onsite: 90, Offshore: 42 }, maxRate: { Onsite: 95, Offshore: 49 }, buyRate: { Onsite: 60, Offshore: 20 } },
    	{ name: 'Sr. Business Analyst - Domain', minRate: { Onsite: 110, Offshore: 50 }, maxRate: { Onsite: 115, Offshore: 57 }, buyRate: { Onsite: 72, Offshore: 25 } },
    	{ name: 'Associate Systems Analyst - COTS', minRate: { Onsite: 80, Offshore: 34 }, maxRate: { Onsite: 85, Offshore: 41 }, buyRate: { Onsite: 51, Offshore: 12 } },
    	{ name: 'Systems Analyst - COTS', minRate: { Onsite: 95, Offshore: 43 }, maxRate: { Onsite: 100, Offshore: 50 }, buyRate: { Onsite: 60, Offshore: 18 } },
    	{ name: 'Sr. Systems Analyst - COTS', minRate: { Onsite: 110, Offshore: 49 }, maxRate: { Onsite: 115, Offshore: 55 }, buyRate: { Onsite: 72, Offshore: 29 } },
    	{ name: 'Associate Data Analyst', minRate: { Onsite: 85, Offshore: 34 }, maxRate: { Onsite: 90, Offshore: 41 }, buyRate: { Onsite: 54, Offshore: 15 } },
    	{ name: 'Data Analyst', minRate: { Onsite: 95, Offshore: 42 }, maxRate: { Onsite: 100, Offshore: 49 }, buyRate: { Onsite: 60, Offshore: 20 } },
    	{ name: 'Sr. Data Analyst', minRate: { Onsite: 100, Offshore: 61 }, maxRate: { Onsite: 105, Offshore: 67 }, buyRate: { Onsite: 66, Offshore: 36 } },
    	{ name: 'Associate Data Scientist', minRate: { Onsite: 85, Offshore: 31 }, maxRate: { Onsite: 90, Offshore: 38 }, buyRate: { Onsite: 54, Offshore: 15 } },
    	{ name: 'Data Scientist', minRate: { Onsite: 95, Offshore: 57 }, maxRate: { Onsite: 100, Offshore: 63 }, buyRate: { Onsite: 60, Offshore: 29 } },
    	{ name: 'Sr. Data Scientist', minRate: { Onsite: 115, Offshore: 70 }, maxRate: { Onsite: 120, Offshore: 77 }, buyRate: { Onsite: 78, Offshore: 41 } },
   	 { name: 'Solution Architect', minRate: { Onsite: 130, Offshore: 67 }, maxRate: { Onsite: 135, Offshore: 74 }, buyRate: { Onsite: 90, Offshore: 36 } },
    	{ name: 'Sr Solution Architect', minRate: { Onsite: 140, Offshore: 76 }, maxRate: { Onsite: 145, Offshore: 82 }, buyRate: { Onsite: 108, Offshore: 43 } },
    	{ name: 'Associate Cloud Engineer (Azure/AWS/Google)', minRate: { Onsite: 95, Offshore: 38 }, maxRate: { Onsite: 100, Offshore: 45 }, buyRate: { Onsite: 63, Offshore: 10 } },
    	{ name: 'Cloud Engineer (Azure/AWS/Google)', minRate: { Onsite: 110, Offshore: 51 }, maxRate: { Onsite: 115, Offshore: 58 }, buyRate: { Onsite: 72, Offshore: 25 } },
    	{ name: 'Cloud Architect (Azure/AWS/Google)', minRate: { Onsite: 120, Offshore: 63 }, maxRate: { Onsite: 125, Offshore: 70 }, buyRate: { Onsite: 78, Offshore: 36 } },
    	{ name: 'Associate Engineer - AWS (Redshift+Glue), Azure (Databricks+ADF), Snowflake', minRate: { Onsite: 100, Offshore: 38 }, maxRate: { Onsite: 105, Offshore: 45 }, buyRate: { Onsite: 66, Offshore: 10 } },
    	{ name: 'Engineer -AWS (Redshift+Glue), Azure (Databricks+ADF), Snowflake', minRate: { Onsite: 115, Offshore: 53 }, maxRate: { Onsite: 120, Offshore: 59 }, buyRate: { Onsite: 75, Offshore: 25 } },
    	{ name: 'Architect -AWS (Redshift+Glue), Azure (Databricks+ADF), Snowflake', minRate: { Onsite: 125, Offshore: 62 }, maxRate: { Onsite: 130, Offshore: 69 }, buyRate: { Onsite: 81, Offshore: 36 } },
    	{ name: 'Database Administrator', minRate: { Onsite: 95, Offshore: 45 }, maxRate: { Onsite: 100, Offshore: 51 }, buyRate: { Onsite: 60, Offshore: 15 } },
    	{ name: 'Sr. Database Administrator', minRate: { Onsite: 110, Offshore: 54 }, maxRate: { Onsite: 115, Offshore: 61 }, buyRate: { Onsite: 72, Offshore: 27 } },
    	{ name: 'Agile Coach', minRate: { Onsite: 110, Offshore: 47 }, maxRate: { Onsite: 115, Offshore: 54 }, buyRate: { Onsite: 72, Offshore: 20 } },
    	{ name: 'Sr. Agile Coach', minRate: { Onsite: 120, Offshore: 57 }, maxRate: { Onsite: 125, Offshore: 63 }, buyRate: { Onsite: 78, Offshore: 31 } },
    	{ name: 'Associate UI/UX Designer', minRate: { Onsite: 90, Offshore: 35 }, maxRate: { Onsite: 95, Offshore: 42 }, buyRate: { Onsite: 57, Offshore: 10 } },
    	{ name: 'UI/UX Designer', minRate: { Onsite: 100, Offshore: 43 }, maxRate: { Onsite: 105, Offshore: 50 }, buyRate: { Onsite: 66, Offshore: 15 } },
    	{ name: 'Sr. UI/UX Designer', minRate: { Onsite: 110, Offshore: 51 }, maxRate: { Onsite: 115, Offshore: 58 }, buyRate: { Onsite: 75, Offshore: 25 } },
    	{ name: 'Associate InfoSec Consultant', minRate: { Onsite: 105, Offshore: 35 }, maxRate: { Onsite: 110, Offshore: 42 }, buyRate: { Onsite: 78, Offshore: 10 } },
    	{ name: 'InfoSec Consultant', minRate: { Onsite: 120, Offshore: 43 }, maxRate: { Onsite: 125, Offshore: 50 }, buyRate: { Onsite: 84, Offshore: 18 } },
    	{ name: 'Sr. InfoSec Consultant', minRate: { Onsite: 130, Offshore: 51 }, maxRate: { Onsite: 135, Offshore: 58 }, buyRate: { Onsite: 90, Offshore: 25 } },
    	{ name: 'Front-end Associate Developer - Angular/ReactJS /API/', minRate: { Onsite: 95, Offshore: 34 }, maxRate: { Onsite: 100, Offshore: 41 }, buyRate: { Onsite: 60, Offshore: 14 } },
    	{ name: 'Front-end Developer - Angular/ReactJS/API/', minRate: { Onsite: 105, Offshore: 47 }, maxRate: { Onsite: 110, Offshore: 54 }, buyRate: { Onsite: 69, Offshore: 25 } },
    	{ name: 'Front-end Sr. Developer - Angular/ReactJS/API/', minRate: { Onsite: 120, Offshore: 61 }, maxRate: { Onsite: 125, Offshore: 67 }, buyRate: { Onsite: 78, Offshore: 36 } },
    	{ name: 'RPA Developer', minRate: { Onsite: 95, Offshore: 35 }, maxRate: { Onsite: 100, Offshore: 42 }, buyRate: { Onsite: 60, Offshore: 12 } },
    	{ name: 'Sr. RPA Developer', minRate: { Onsite: 105, Offshore: 43 }, maxRate: { Onsite: 110, Offshore: 50 }, buyRate: { Onsite: 66, Offshore: 25 } },
    	{ name: 'RPA Transformation Lead', minRate: { Onsite: 120, Offshore: 51 }, maxRate: { Onsite: 125, Offshore: 58 }, buyRate: { Onsite: 78, Offshore: 31 } },
    	{ name: 'RPA Architect', minRate: { Onsite: 130, Offshore: 61 }, maxRate: { Onsite: 135, Offshore: 67 }, buyRate: { Onsite: 84, Offshore: 36 } },
    	{ name: 'Associate Mobile Developer (React Native / Flutter / Xamarin / Native IOS / Native Android)', minRate: { Onsite: 85, Offshore: 35 }, maxRate: { Onsite: 90, Offshore: 42 }, buyRate: { Onsite: 54, Offshore: 12 } },
    	{ name: 'Mobile Developer (React Native / Flutter / Xamarin / Native IOS / Native Android)', minRate: { Onsite: 100, Offshore: 43 }, maxRate: { Onsite: 105, Offshore: 50 }, buyRate: { Onsite: 66, Offshore: 20 } },
    	{ name: 'Sr. Mobile Developer (React Native / Flutter / Xamarin / Native IOS / Native Android)', minRate: { Onsite: 115, Offshore: 51 }, maxRate: { Onsite: 120, Offshore: 58 }, buyRate: { Onsite: 78, Offshore: 31 } },
    	{ name: 'Back-end Associate Developer (.Net / Java / C# / PHP / Python/UNIX/Shell/PERL)', minRate: { Onsite: 90, Offshore: 35 }, maxRate: { Onsite: 95, Offshore: 42 }, buyRate: { Onsite: 63, Offshore: 10 } },
    	{ name: 'Back-end Developer (.Net/Java/C#/PHP/Python/UNIX/Shell/PERL)', minRate: { Onsite: 105, Offshore: 43 }, maxRate: { Onsite: 110, Offshore: 50 }, buyRate: { Onsite: 66, Offshore: 25 } },
    	{ name: 'Back-endSr. Developer (.Net/Java/C#/PHP/Python/UNIX/Shell/PERL)', minRate: { Onsite: 120, Offshore: 51 }, maxRate: { Onsite: 125, Offshore: 58 }, buyRate: { Onsite: 75, Offshore: 31 } },
    	{ name: 'Associate Full Stack Developer', minRate: { Onsite: 95, Offshore: 35 }, maxRate: { Onsite: 100, Offshore: 42 }, buyRate: { Onsite: 60, Offshore: 12 } },
    	{ name: 'Full Stack Developer', minRate: { Onsite: 110, Offshore: 43 }, maxRate: { Onsite: 115, Offshore: 50 }, buyRate: { Onsite: 69, Offshore: 25 } },
    	{ name: 'Sr. Full Stack Developer', minRate: { Onsite: 120, Offshore: 55 }, maxRate: { Onsite: 125, Offshore: 62 }, buyRate: { Onsite: 78, Offshore: 33 } },
    	{ name: 'Associate Consultant-DevOps/CI-CD/SRE', minRate: { Onsite: 95, Offshore: 35 }, maxRate: { Onsite: 100, Offshore: 42 }, buyRate: { Onsite: 60, Offshore: 10 } },
    	{ name: 'Consultant-DevOps/CI-CD/SRE', minRate: { Onsite: 110, Offshore: 43 }, maxRate: { Onsite: 115, Offshore: 50 }, buyRate: { Onsite: 69, Offshore: 20 } },
    	{ name: 'Sr. Consultant-DevOps/CI-CD/SRE', minRate: { Onsite: 120, Offshore: 54 }, maxRate: { Onsite: 125, Offshore: 61 }, buyRate: { Onsite: 78, Offshore: 31 } },
    	{ name: 'Associate Consultant -Power BI / Tableau / Looker / Qlik', minRate: { Onsite: 95, Offshore: 35 }, maxRate: { Onsite: 100, Offshore: 42 }, buyRate: { Onsite: 60, Offshore: 10 } },
    	{ name: 'Consultant-Power BI/Tableau/Looker/Qlik', minRate: { Onsite: 110, Offshore: 43 }, maxRate: { Onsite: 115, Offshore: 50 }, buyRate: { Onsite: 69, Offshore: 20 } },
    	{ name: 'Sr. Consultant-Power BI/Tableau/Looker/Qlik', minRate: { Onsite: 120, Offshore: 51 }, maxRate: { Onsite: 125, Offshore: 58 }, buyRate: { Onsite: 78, Offshore: 31 } },
    	{ name: 'ERP Technical Consultant', minRate: { Onsite: 125, Offshore: 47 }, maxRate: { Onsite: 130, Offshore: 54 }, buyRate: { Onsite: 78, Offshore: 18 } },
    	{ name: 'ERP Sr. Technical Consultant', minRate: { Onsite: 135, Offshore: 61 }, maxRate: { Onsite: 140, Offshore: 67 }, buyRate: { Onsite: 90, Offshore: 31 } },
    	{ name: 'ERP Functional Consultant', minRate: { Onsite: 120, Offshore: 47 }, maxRate: { Onsite: 125, Offshore: 54 }, buyRate: { Onsite: 69, Offshore: 15 } },
    	{ name: 'ERP Sr. Functional Consultant', minRate: { Onsite: 130, Offshore: 54 }, maxRate: { Onsite: 135, Offshore: 61 }, buyRate: { Onsite: 84, Offshore: 29 } }
    ],

    'UK': [
        // Roles for UK region
	{ name: 'Select Role', minRate: '', maxRate: '', buyRate: 0 },
	{ name: 'Functional Test Analyst', minRate: { Onsite: 385, Offshore: 155 }, maxRate: { Onsite: 425, Offshore: 190 }, buyRate: { Onsite: 267, Offshore: 38 } },
	{ name: 'Senior Functional Test Analyst', minRate: { Onsite: 400, Offshore: 198 }, maxRate: { Onsite: 440, Offshore: 233 }, buyRate: { Onsite: 293, Offshore: 86 } },
	{ name: 'Functional Test Lead', minRate: { Onsite: 450, Offshore: 226 }, maxRate: { Onsite: 490, Offshore: 261 }, buyRate: { Onsite: 318, Offshore: 107 } },
	{ name: 'Functional Test Architect', minRate: { Onsite: 530, Offshore: 247 }, maxRate: { Onsite: 570, Offshore: 282 }, buyRate: { Onsite: 369, Offshore: 134 } },
	{ name: 'Functional Test Manager', minRate: { Onsite: 530, Offshore: 268 }, maxRate: { Onsite: 570, Offshore: 303 }, buyRate: { Onsite: 394, Offshore: 150 } },
	{ name: 'Functional Test Manager', minRate: { Onsite: 440, Offshore: 190 }, maxRate: { Onsite: 480, Offshore: 226 }, buyRate: { Onsite: 331, Offshore: 46 } },
	{ name: 'Senior Automation Test Analyst', minRate: { Onsite: 490, Offshore: 212 }, maxRate: { Onsite: 530, Offshore: 247 }, buyRate: { Onsite: 356, Offshore: 91 } },
	{ name: 'Automation Test Lead', minRate: { Onsite: 520, Offshore: 261 }, maxRate: { Onsite: 560, Offshore: 296 }, buyRate: { Onsite: 433, Offshore: 140 } },
	{ name: 'Automation Test Architect', minRate: { Onsite: 670, Offshore: 317 }, maxRate: { Onsite: 710, Offshore: 353 }, buyRate: { Onsite: 560, Offshore: 172 } },
	{ name: 'Performance Test Analyst', minRate: { Onsite: 440, Offshore: 212 }, maxRate: { Onsite: 480, Offshore: 247 }, buyRate: { Onsite: 331, Offshore: 48 } },
	{ name: 'Senior Performance Test Analyst', minRate: { Onsite: 490, Offshore: 226 }, maxRate: { Onsite: 530, Offshore: 261 }, buyRate: { Onsite: 382, Offshore: 102 } },
	{ name: 'Performance Test Lead', minRate: { Onsite: 520, Offshore: 254 }, maxRate: { Onsite: 560, Offshore: 289 }, buyRate: { Onsite: 458, Offshore: 134 } },
	{ name: 'Performance Test Architect', minRate: { Onsite: 670, Offshore: 353 }, maxRate: { Onsite: 710, Offshore: 388 }, buyRate: { Onsite: 560, Offshore: 193 } },
	{ name: 'Observability/Chaos/Reliability Engineer', minRate: { Onsite: 520, Offshore: 226 }, maxRate: { Onsite: 560, Offshore: 261 }, buyRate: { Onsite: 433, Offshore: 107 } },
	{ name: 'Observability/Chaos/Reliability Lead', minRate: { Onsite: 620, Offshore: 282 }, maxRate: { Onsite: 660, Offshore: 317 }, buyRate: { Onsite: 534, Offshore: 172 } },
	{ name: 'Observability/Chaos/Reliability Architect', minRate: { Onsite: 700, Offshore: 353 }, maxRate: { Onsite: 740, Offshore: 388 }, buyRate: { Onsite: 560, Offshore: 215 } },
	{ name: 'Security Test Analyst', minRate: { Onsite: 440, Offshore: 212 }, maxRate: { Onsite: 480, Offshore: 247 }, buyRate: { Onsite: 318, Offshore: 54 } },
	{ name: 'Senior Security Test Analyst', minRate: { Onsite: 490, Offshore: 226 }, maxRate: { Onsite: 530, Offshore: 261 }, buyRate: { Onsite: 382, Offshore: 118 } },
	{ name: 'Security Test Lead', minRate: { Onsite: 640, Offshore: 254 }, maxRate: { Onsite: 680, Offshore: 289 }, buyRate: { Onsite: 509, Offshore: 150 } },
	{ name: 'Security Test Architect', minRate: { Onsite: 750, Offshore: 367 }, maxRate: { Onsite: 790, Offshore: 402 }, buyRate: { Onsite: 560, Offshore: 231 } },
	{ name: 'SDET', minRate: { Onsite: 590, Offshore: 247 }, maxRate: { Onsite: 630, Offshore: 282 }, buyRate: { Onsite: 382, Offshore: 81 } },
	{ name: 'Sr. SDET', minRate: { Onsite: 640, Offshore: 317 }, maxRate: { Onsite: 680, Offshore: 353 }, buyRate: { Onsite: 458, Offshore: 161 } },
	{ name: 'Consultant - ATS', minRate: { Onsite: 555, Offshore: 317 }, maxRate: { Onsite: 595, Offshore: 353 }, buyRate: { Onsite: 407, Offshore: 188 } },
	{ name: 'Lead Consultant - ATS', minRate: { Onsite: 670, Offshore: 353 }, maxRate: { Onsite: 710, Offshore: 388 }, buyRate: { Onsite: 534, Offshore: 215 } },
	{ name: 'Program Manager', minRate: { Onsite: 750, Offshore: 353 }, maxRate: { Onsite: 790, Offshore: 388 }, buyRate: { Onsite: 560, Offshore: 193 } },
	{ name: 'RPA Tester', minRate: { Onsite: 425, Offshore: 176 }, maxRate: { Onsite: 465, Offshore: 212 }, buyRate: { Onsite: 254, Offshore: 48 } },
	{ name: 'Sr. RPA Tester', minRate: { Onsite: 550, Offshore: 212 }, maxRate: { Onsite: 590, Offshore: 247 }, buyRate: { Onsite: 356, Offshore: 91 } },
	{ name: 'Project Manager', minRate: { Onsite: 624, Offshore: 296 }, maxRate: { Onsite: 664, Offshore: 332 }, buyRate: { Onsite: 406, Offshore: 150 } },
	{ name: 'Sr. Project Manager', minRate: { Onsite: 670, Offshore: 339 }, maxRate: { Onsite: 710, Offshore: 374 }, buyRate: { Onsite: 433, Offshore: 172 } },
	{ name: 'Scrum Master', minRate: { Onsite: 620, Offshore: 233 }, maxRate: { Onsite: 660, Offshore: 268 }, buyRate: { Onsite: 406, Offshore: 129 } },
	{ name: 'Sr. Scrum Master', minRate: { Onsite: 670, Offshore: 282 }, maxRate: { Onsite: 710, Offshore: 317 }, buyRate: { Onsite: 433, Offshore: 161 } },
	{ name: 'Associate Business Analyst - Domain', minRate: { Onsite: 540, Offshore: 176 }, maxRate: { Onsite: 580, Offshore: 212 }, buyRate: { Onsite: 325, Offshore: 89 } },
	{ name: 'Business Analyst - Domain', minRate: { Onsite: 600, Offshore: 219 }, maxRate: { Onsite: 640, Offshore: 254 }, buyRate: { Onsite: 379, Offshore: 107 } },
	{ name: 'Sr. Business Analyst - Domain', minRate: { Onsite: 700, Offshore: 261 }, maxRate: { Onsite: 740, Offshore: 296 }, buyRate: { Onsite: 460, Offshore: 134 } },
	{ name: 'Associate Systems Analyst-COTS', minRate: { Onsite: 540, Offshore: 176 }, maxRate: { Onsite: 580, Offshore: 212 }, buyRate: { Onsite: 325, Offshore: 64 } },
	{ name: 'Systems Analyst-COTS', minRate: { Onsite: 600, Offshore: 226 }, maxRate: { Onsite: 640, Offshore: 261 }, buyRate: { Onsite: 379, Offshore: 97 } },
	{ name: 'Sr. Systems Analyst-COTS', minRate: { Onsite: 700, Offshore: 254 }, maxRate: { Onsite: 740, Offshore: 289 }, buyRate: { Onsite: 460, Offshore: 150 } },
	{ name: 'Associate Data Analyst', minRate: { Onsite: 440, Offshore: 176 }, maxRate: { Onsite: 480, Offshore: 212 }, buyRate: { Onsite: 271, Offshore: 81 } },
	{ name: 'Data Analyst', minRate: { Onsite: 600, Offshore: 219 }, maxRate: { Onsite: 640, Offshore: 254 }, buyRate: { Onsite: 379, Offshore: 107 } },
	{ name: 'Sr. Data Analyst', minRate: { Onsite: 700, Offshore: 317 }, maxRate: { Onsite: 740, Offshore: 353 }, buyRate: { Onsite: 487, Offshore: 188 } },
	{ name: 'Associate Data Scientist', minRate: { Onsite: 460, Offshore: 162 }, maxRate: { Onsite: 500, Offshore: 198 }, buyRate: { Onsite: 298, Offshore: 81 } },
	{ name: 'Data Scientist', minRate: { Onsite: 670, Offshore: 296 }, maxRate: { Onsite: 710, Offshore: 332 }, buyRate: { Onsite: 433, Offshore: 150 } },
	{ name: 'Sr. Data Scientist', minRate: { Onsite: 800, Offshore: 367 }, maxRate: { Onsite: 840, Offshore: 402 }, buyRate: { Onsite: 541, Offshore: 215 } },
	{ name: 'Solution Architect', minRate: { Onsite: 760, Offshore: 353 }, maxRate: { Onsite: 800, Offshore: 388 }, buyRate: { Onsite: 487, Offshore: 188 } },
	{ name: 'Sr Solution Architect', minRate: { Onsite: 895, Offshore: 395 }, maxRate: { Onsite: 935, Offshore: 430 }, buyRate: { Onsite: 568, Offshore: 225 } },
	{ name: 'Associate Cloud Engineer(Azure/AWS/Google)', minRate: { Onsite: 500, Offshore: 198 }, maxRate: { Onsite: 540, Offshore: 233 }, buyRate: { Onsite: 325, Offshore: 54 } },
	{ name: 'Cloud Engineer(Azure/AWS/Google)', minRate: { Onsite: 655, Offshore: 268 }, maxRate: { Onsite: 695, Offshore: 303 }, buyRate: { Onsite: 433, Offshore: 134 } },
	{ name: 'Cloud Architect(Azure/AWS/Google)', minRate: { Onsite: 895, Offshore: 332 }, maxRate: { Onsite: 935, Offshore: 367 }, buyRate: { Onsite: 596, Offshore: 188 } },
	{ name: 'Associate Engineer-AWS(Redshift+Glue),Azure(Databricks+ADF),Snowflake', minRate: { Onsite: 525, Offshore: 198 }, maxRate: { Onsite: 565, Offshore: 233 }, buyRate: { Onsite: 325, Offshore: 54 } },
	{ name: 'Engineer-AWS(Redshift+Glue),Azure(Databricks+ADF),Snowflake', minRate: { Onsite: 700, Offshore: 275 }, maxRate: { Onsite: 740, Offshore: 310 }, buyRate: { Onsite: 433, Offshore: 134 } },
	{ name: 'Architect-AWS(Redshift+Glue),Azure(Databricks+ADF),Snowflake', minRate: { Onsite: 945, Offshore: 325 }, maxRate: { Onsite: 985, Offshore: 360 }, buyRate: { Onsite: 650, Offshore: 188 } },
	{ name: 'Database Administrator', minRate: { Onsite: 670, Offshore: 233 }, maxRate: { Onsite: 710, Offshore: 268 }, buyRate: { Onsite: 433, Offshore: 81 } },
	{ name: 'Sr. Database Administrator', minRate: { Onsite: 800, Offshore: 282 }, maxRate: { Onsite: 840, Offshore: 317 }, buyRate: { Onsite: 541, Offshore: 140 } },
	{ name: 'Agile Coach', minRate: { Onsite: 650, Offshore: 247 }, maxRate: { Onsite: 690, Offshore: 282 }, buyRate: { Onsite: 406, Offshore: 107 } },
	{ name: 'Sr. Agile Coach', minRate: { Onsite: 700, Offshore: 296 }, maxRate: { Onsite: 740, Offshore: 332 }, buyRate: { Onsite: 460, Offshore: 161 } },
	{ name: 'Associate UI/UX Designer', minRate: { Onsite: 540, Offshore: 183 }, maxRate: { Onsite: 580, Offshore: 219 }, buyRate: { Onsite: 352, Offshore: 54 } },
	{ name: 'UI/UX Designer', minRate: { Onsite: 620, Offshore: 226 }, maxRate: { Onsite: 660, Offshore: 261 }, buyRate: { Onsite: 406, Offshore: 81 } },
	{ name: 'Sr. UI/UX Designer', minRate: { Onsite: 750, Offshore: 268 }, maxRate: { Onsite: 790, Offshore: 303 }, buyRate: { Onsite: 487, Offshore: 134 } },
	{ name: 'Associate InfoSec Consultant', minRate: { Onsite: 460, Offshore: 183 }, maxRate: { Onsite: 500, Offshore: 219 }, buyRate: { Onsite: 298, Offshore: 54 } },
	{ name: 'InfoSec Consultant', minRate: { Onsite: 580, Offshore: 226 }, maxRate: { Onsite: 620, Offshore: 261 }, buyRate: { Onsite: 379, Offshore: 97 } },
	{ name: 'Sr. InfoSec Consultant', minRate: { Onsite: 790, Offshore: 268 }, maxRate: { Onsite: 830, Offshore: 303 }, buyRate: { Onsite: 514, Offshore: 134 } },
	{ name: 'Front-end Associate Developer-Angular/ReactJS/API', minRate: { Onsite: 460, Offshore: 176 }, maxRate: { Onsite: 500, Offshore: 212 }, buyRate: { Onsite: 298, Offshore: 75 } },
	{ name: 'Front-end Developer-Angular/ReactJS/API', minRate: { Onsite: 565, Offshore: 247 }, maxRate: { Onsite: 605, Offshore: 282 }, buyRate: { Onsite: 406, Offshore: 134 } },
	{ name: 'Front-end Sr. Developer-Angular/ReactJS/API', minRate: { Onsite: 830, Offshore: 317 }, maxRate: { Onsite: 870, Offshore: 353 }, buyRate: { Onsite: 541, Offshore: 188 } },
	{ name: 'RPA Developer', minRate: { Onsite: 460, Offshore: 183 }, maxRate: { Onsite: 500, Offshore: 219 }, buyRate: { Onsite: 298, Offshore: 64 } },
	{ name: 'Sr. RPA Developer', minRate: { Onsite: 680, Offshore: 226 }, maxRate: { Onsite: 720, Offshore: 261 }, buyRate: { Onsite: 433, Offshore: 134 } },
	{ name: 'RPA Transformation Lead', minRate: { Onsite: 710, Offshore: 268 }, maxRate: { Onsite: 750, Offshore: 303 }, buyRate: { Onsite: 460, Offshore: 161 } },
	{ name: 'RPA Architect', minRate: { Onsite: 800, Offshore: 317 }, maxRate: { Onsite: 840, Offshore: 353 }, buyRate: { Onsite: 514, Offshore: 188 } },
	{ name: 'Associate Mobile Developer(ReactNative/Flutter/Xamarin/NativeIOS/NativeAndroid)', minRate: { Onsite: 500, Offshore: 183 }, maxRate: { Onsite: 540, Offshore: 219 }, buyRate: { Onsite: 325, Offshore: 64 } },
	{ name: 'Mobile Developer(ReactNative/Flutter/Xamarin/NativeIOS/Native Android)', minRate: { Onsite: 580, Offshore: 226 }, maxRate: { Onsite: 620, Offshore: 261 }, buyRate: { Onsite: 379, Offshore: 107 } },
	{ name: 'Sr. Mobile Developer(ReactNative/Flutter/Xamarin/NativeIOS/NativeAndroid)', minRate: { Onsite: 670, Offshore: 268 }, maxRate: { Onsite: 710, Offshore: 303 }, buyRate: { Onsite: 433, Offshore: 161 } },
	{ name: 'Back-end Associate Developer(.Net/Java/C#/PHP/Python/UNIX/Shell/PERL)', minRate: { Onsite: 500, Offshore: 183 }, maxRate: { Onsite: 540, Offshore: 219 }, buyRate: { Onsite: 325, Offshore: 54 } },
	{ name: 'Back-end Developer(.Net/Java/C#/PHP/Python/UNIX/Shell/PERL)', minRate: { Onsite: 670, Offshore: 226 }, maxRate: { Onsite: 710, Offshore: 261 }, buyRate: { Onsite: 433, Offshore: 134 } },
	{ name: 'Back-end Sr. Developer(.Net/Java/C#/PHP/Python/UNIX/Shell/PERL)', minRate: { Onsite: 750, Offshore: 268 }, maxRate: { Onsite: 790, Offshore: 303 }, buyRate: { Onsite: 487, Offshore: 161 } },
	{ name: 'Associate Full Stack Developer', minRate: { Onsite: 460, Offshore: 183 }, maxRate: { Onsite: 500, Offshore: 219 }, buyRate: { Onsite: 298, Offshore: 64 } },
	{ name: 'Full Stack Developer', minRate: { Onsite: 655, Offshore: 226 }, maxRate: { Onsite: 695, Offshore: 261 }, buyRate: { Onsite: 460, Offshore: 134 } },
	{ name: 'Sr. Full Stack Developer', minRate: { Onsite: 730, Offshore: 289 }, maxRate: { Onsite: 770, Offshore: 325 }, buyRate: { Onsite: 541, Offshore: 172 } },
	{ name: 'Associate Consultant-DevOps/CI-CD/SRE', minRate: { Onsite: 460, Offshore: 183 }, maxRate: { Onsite: 500, Offshore: 219 }, buyRate: { Onsite: 298, Offshore: 54 } },
	{ name: 'Consultant-DevOps/CI-CD/SRE', minRate: { Onsite: 655, Offshore: 226 }, maxRate: { Onsite: 695, Offshore: 261 }, buyRate: { Onsite: 433, Offshore: 107 } },
	{ name: 'Sr. Consultant-DevOps/CI-CD/SRE', minRate: { Onsite: 730, Offshore: 282 }, maxRate: { Onsite: 770, Offshore: 317 }, buyRate: { Onsite: 487, Offshore: 161 } },
	{ name: 'Associate Consultant-Power BI/Tableau/Looker/Qlik', minRate: { Onsite: 460, Offshore: 183 }, maxRate: { Onsite: 500, Offshore: 219 }, buyRate: { Onsite: 298, Offshore: 54 } },
	{ name: 'Consultant-Power BI/Tableau/Looker/Qlik', minRate: { Onsite: 655, Offshore: 226 }, maxRate: { Onsite: 695, Offshore: 261 }, buyRate: { Onsite: 460, Offshore: 107 } },
	{ name: 'Sr. Consultant-Power BI/Tableau/Looker/Qlik', minRate: { Onsite: 730, Offshore: 268 }, maxRate: { Onsite: 770, Offshore: 303 }, buyRate: { Onsite: 541, Offshore: 161 } },
	{ name: 'ERP Technical Consultant', minRate: { Onsite: 675, Offshore: 247 }, maxRate: { Onsite: 715, Offshore: 282 }, buyRate: { Onsite: 433, Offshore: 97 } },
	{ name: 'ERP Sr. Technical Consultant', minRate: { Onsite: 750, Offshore: 317 }, maxRate: { Onsite: 790, Offshore: 353 }, buyRate: { Onsite: 487, Offshore: 161 } },
	{ name: 'ERP Functional Consultant', minRate: { Onsite: 625, Offshore: 247 }, maxRate: { Onsite: 665, Offshore: 282 }, buyRate: { Onsite: 406, Offshore: 81 } },
	{ name: 'ERP Sr. Functional Consultant', minRate: { Onsite: 720, Offshore: 282 }, maxRate: { Onsite: 760, Offshore: 317 }, buyRate: { Onsite: 460, Offshore: 150 } }
    ],

    'AUS': [
        // Roles for Australia region
	{ name: 'Select Role', minRate: '', maxRate: '', buyRate: 0 },
	{ name: 'Functional Test Analyst', minRate: { Onsite: 600, Offshore: 269 }, maxRate: { Onsite: 640, Offshore: 330 }, buyRate: { Onsite: 391.8, Offshore: 65.2 } },
	{ name: 'Senior Functional Test Analyst', minRate: { Onsite: 750, Offshore: 343 }, maxRate: { Onsite: 790, Offshore: 404 }, buyRate: { Onsite: 489.8, Offshore: 149.0 } },
	{ name: 'Functional Test Lead', minRate: { Onsite: 900, Offshore: 392 }, maxRate: { Onsite: 940, Offshore: 453 }, buyRate: { Onsite: 612.3, Offshore: 186.3 } },
	{ name: 'Functional Test Architect', minRate: { Onsite: 1200, Offshore: 428 }, maxRate: { Onsite: 1280, Offshore: 490 }, buyRate: { Onsite: 783.7, Offshore: 232.8 } },
	{ name: 'Functional Test Manager', minRate: { Onsite: 1200, Offshore: 465 }, maxRate: { Onsite: 1240, Offshore: 526 }, buyRate: { Onsite: 832.7, Offshore: 260.8 } },
	{ name: 'Automation Test Analyst', minRate: { Onsite: 800, Offshore: 330 }, maxRate: { Onsite: 840, Offshore: 392 }, buyRate: { Onsite: 465.3, Offshore: 79.2 } },
	{ name: 'Senior Automation Test Analyst', minRate: { Onsite: 950, Offshore: 367 }, maxRate: { Onsite: 990, Offshore: 428 }, buyRate: { Onsite: 612.3, Offshore: 158.3 } },
	{ name: 'Automation Test Lead', minRate: { Onsite: 1200, Offshore: 453 }, maxRate: { Onsite: 1240, Offshore: 514 }, buyRate: { Onsite: 808.2, Offshore: 242.1 } },
	{ name: 'Automation Test Architect', minRate: { Onsite: 1350, Offshore: 551 }, maxRate: { Onsite: 1430, Offshore: 612 }, buyRate: { Onsite: 906.1, Offshore: 298.0 } },
	{ name: 'Performance Test Analyst', minRate: { Onsite: 800, Offshore: 367 }, maxRate: { Onsite: 840, Offshore: 428 }, buyRate: { Onsite: 440.8, Offshore: 83.8 } },
	{ name: 'Senior Performance Test Analyst', minRate: { Onsite: 950, Offshore: 392 }, maxRate: { Onsite: 990, Offshore: 453 }, buyRate: { Onsite: 636.7, Offshore: 176.9 } },
	{ name: 'Performance Test Lead', minRate: { Onsite: 1200, Offshore: 441 }, maxRate: { Onsite: 1240, Offshore: 502 }, buyRate: { Onsite: 832.7, Offshore: 232.8 } },
	{ name: 'Performance Test Architect', minRate: { Onsite: 1400, Offshore: 612 }, maxRate: { Onsite: 1480, Offshore: 673 }, buyRate: { Onsite: 955.1, Offshore: 335.3 } },
	{ name: 'Observability/Chaos/Reliability Engineer', minRate: { Onsite: 950, Offshore: 392 }, maxRate: { Onsite: 990, Offshore: 453 }, buyRate: { Onsite: 636.7, Offshore: 186.3 } },
	{ name: 'Observability/Chaos/Reliability Lead', minRate: { Onsite: 1200, Offshore: 490 }, maxRate: { Onsite: 1240, Offshore: 551 }, buyRate: { Onsite: 832.7, Offshore: 298.0 } },
	{ name: 'Observability/Chaos/Reliability Architect', minRate: { Onsite: 1400, Offshore: 612 }, maxRate: { Onsite: 1480, Offshore: 673 }, buyRate: { Onsite: 955.1, Offshore: 372.5 } },
	{ name: 'Security Test Analyst', minRate: { Onsite: 900, Offshore: 367 }, maxRate: { Onsite: 940, Offshore: 428 }, buyRate: { Onsite: 489.8, Offshore: 93.1 } },
	{ name: 'Senior Security Test Analyst', minRate: { Onsite: 1000, Offshore: 392 }, maxRate: { Onsite: 1040, Offshore: 453 }, buyRate: { Onsite: 661.2, Offshore: 204.9 } },
	{ name: 'Security Test Lead', minRate: { Onsite: 1300, Offshore: 441 }, maxRate: { Onsite: 1340, Offshore: 502 }, buyRate: { Onsite: 881.6, Offshore: 260.8 } },
	{ name: 'Security Test Architect', minRate: { Onsite: 1400, Offshore: 636 }, maxRate: { Onsite: 1480, Offshore: 698 }, buyRate: { Onsite: 955.1, Offshore: 400.5 } },
	{ name: 'SDET', minRate: { Onsite: 850, Offshore: 428 }, maxRate: { Onsite: 890, Offshore: 490 }, buyRate: { Onsite: 538.8, Offshore: 139.7 } },
	{ name: 'Sr. SDET', minRate: { Onsite: 950, Offshore: 551 }, maxRate: { Onsite: 990, Offshore: 612 }, buyRate: { Onsite: 636.7, Offshore: 279.4 } },
	{ name: 'Consultant - ATS', minRate: { Onsite: 1300, Offshore: 551 }, maxRate: { Onsite: 1340, Offshore: 612 }, buyRate: { Onsite: 930.6, Offshore: 325.9 } },
	{ name: 'Lead Consultant - ATS', minRate: { Onsite: 1575, Offshore: 612 }, maxRate: { Onsite: 1615, Offshore: 673 }, buyRate: { Onsite: 1028.6, Offshore: 372.5 } },
	{ name: 'Program Manager', minRate: { Onsite: 1600, Offshore: 612 }, maxRate: { Onsite: 1640, Offshore: 673 }, buyRate: { Onsite: 1077.6, Offshore: 335.3 } },
	{ name: 'RPA Tester', minRate: { Onsite: 680, Offshore: 306 }, maxRate: { Onsite: 720, Offshore: 367 }, buyRate: { Onsite: 440.8, Offshore: 83.8 } },
	{ name: 'Sr. RPA Tester', minRate: { Onsite: 910, Offshore: 367 }, maxRate: { Onsite: 950, Offshore: 428 }, buyRate: { Onsite: 587.8, Offshore: 158.3 } },
	{ name: 'Project Manager', minRate: { Onsite: 1375, Offshore: 514 }, maxRate: { Onsite: 1415, Offshore: 575 }, buyRate: { Onsite: 906.1, Offshore: 260.8 } },
	{ name: 'Sr. Project Manager', minRate: { Onsite: 1450, Offshore: 588 }, maxRate: { Onsite: 1490, Offshore: 649 }, buyRate: { Onsite: 955.1, Offshore: 298.0 } },
	{ name: 'Scrum Master', minRate: { Onsite: 1200, Offshore: 404 }, maxRate: { Onsite: 1240, Offshore: 465 }, buyRate: { Onsite: 783.7, Offshore: 223.5 } },
	{ name: 'Sr. Scrum Master', minRate: { Onsite: 1280, Offshore: 490 }, maxRate: { Onsite: 1320, Offshore: 551 }, buyRate: { Onsite: 881.6, Offshore: 279.4 } },
	{ name: 'Associate Business Analyst - Domain', minRate: { Onsite: 530, Offshore: 306 }, maxRate: { Onsite: 570, Offshore: 367 }, buyRate: { Onsite: 342.9, Offshore: 153.7 } },
	{ name: 'Business Analyst - Domain', minRate: { Onsite: 750, Offshore: 379 }, maxRate: { Onsite: 790, Offshore: 441 }, buyRate: { Onsite: 489.8, Offshore: 186.3 } },
	{ name: 'Sr. Business Analyst - Domain', minRate: { Onsite: 975, Offshore: 453 }, maxRate: { Onsite: 1015, Offshore: 514 }, buyRate: { Onsite: 685.7, Offshore: 232.8 } },
	{ name: 'Associate Systems Analyst - COTS', minRate: { Onsite: 530, Offshore: 306 }, maxRate: { Onsite: 570, Offshore: 367 }, buyRate: { Onsite: 342.9, Offshore: 111.8 } },
	{ name: 'Systems Analyst - COTS', minRate: { Onsite: 750, Offshore: 392 }, maxRate: { Onsite: 790, Offshore: 453 }, buyRate: { Onsite: 489.8, Offshore: 167.6 } },
	{ name: 'Sr. Systems Analyst - COTS', minRate: { Onsite: 975, Offshore: 441 }, maxRate: { Onsite: 1015, Offshore: 502 }, buyRate: { Onsite: 685.7, Offshore: 260.8 } },
	{ name: 'Associate Data Analyst', minRate: { Onsite: 550, Offshore: 306 }, maxRate: { Onsite: 590, Offshore: 367 }, buyRate: { Onsite: 342.9, Offshore: 139.7 } },
	{ name: 'Data Analyst', minRate: { Onsite: 875, Offshore: 379 }, maxRate: { Onsite: 915, Offshore: 441 }, buyRate: { Onsite: 587.8, Offshore: 186.3 } },
	{ name: 'Sr. Data Analyst', minRate: { Onsite: 1100, Offshore: 551 }, maxRate: { Onsite: 1140, Offshore: 612 }, buyRate: { Onsite: 734.7, Offshore: 325.9 } },
	{ name: 'Associate Data Scientist', minRate: { Onsite: 625, Offshore: 282 }, maxRate: { Onsite: 665, Offshore: 343 }, buyRate: { Onsite: 391.8, Offshore: 139.7 } },
	{ name: 'Data Scientist', minRate: { Onsite: 925, Offshore: 514 }, maxRate: { Onsite: 965, Offshore: 575 }, buyRate: { Onsite: 636.7, Offshore: 260.8 } },
	{ name: 'Sr. Data Scientist', minRate: { Onsite: 1225, Offshore: 636 }, maxRate: { Onsite: 1265, Offshore: 698 }, buyRate: { Onsite: 783.7, Offshore: 372.5 } },
	{ name: 'Solution Architect', minRate: { Onsite: 1275, Offshore: 612 }, maxRate: { Onsite: 1315, Offshore: 673 }, buyRate: { Onsite: 881.6, Offshore: 325.9 } },
	{ name: 'Sr Solution Architect', minRate: { Onsite: 1475, Offshore: 685 }, maxRate: { Onsite: 1515, Offshore: 747 }, buyRate: { Onsite: 1028.6, Offshore: 391.1 } },
	{ name: 'Associate Cloud Engineer(Azure/AWS/Google)', minRate: { Onsite: 725, Offshore: 343 }, maxRate: { Onsite: 765, Offshore: 404 }, buyRate: { Onsite: 489.8, Offshore: 93.1 } },
	{ name: 'Cloud Engineer(Azure/AWS/Google)', minRate: { Onsite: 925, Offshore: 465 }, maxRate: { Onsite: 965, Offshore: 526 }, buyRate: { Onsite: 636.7, Offshore: 232.8 } },
	{ name: 'Cloud Architect(Azure/AWS/Google)', minRate: { Onsite: 1125, Offshore: 575 }, maxRate: { Onsite: 1165, Offshore: 636 }, buyRate: { Onsite: 783.7, Offshore: 325.9 } },
	{ name: 'Associate Engineer-AWS(Redshift+Glue),Azure(Databricks+ADF),Snowflake', minRate: { Onsite: 750, Offshore: 343 }, maxRate: { Onsite: 790, Offshore: 404 }, buyRate: { Onsite: 489.8, Offshore: 93.1 } },
	{ name: 'Engineer-AWS(Redshift+Glue),Azure(Databricks+ADF),Snowflake', minRate: { Onsite: 975, Offshore: 477 }, maxRate: { Onsite: 1015, Offshore: 539 }, buyRate: { Onsite: 685.7, Offshore: 232.8 } },
	{ name: 'Architect-AWS(Redshift+Glue),Azure (Databricks+ADF),Snowflake', minRate: { Onsite: 1200, Offshore: 563 }, maxRate: { Onsite: 1240, Offshore: 624 }, buyRate: { Onsite: 832.7, Offshore: 325.9 } },
	{ name: 'Database Administrator', minRate: { Onsite: 925, Offshore: 404 }, maxRate: { Onsite: 965, Offshore: 465 }, buyRate: { Onsite: 636.7, Offshore: 139.7 } },
	{ name: 'Sr. Database Administrator', minRate: { Onsite: 1230, Offshore: 490 }, maxRate: { Onsite: 1270, Offshore: 551 }, buyRate: { Onsite: 783.7, Offshore: 242.1 } },
	{ name: 'Agile Coach', minRate: { Onsite: 1300, Offshore: 428 }, maxRate: { Onsite: 1340, Offshore: 490 }, buyRate: { Onsite: 734.7, Offshore: 186.3 } },
	{ name: 'Sr. Agile Coach', minRate: { Onsite: 1400, Offshore: 514 }, maxRate: { Onsite: 1440, Offshore: 575 }, buyRate: { Onsite: 881.6, Offshore: 279.4 } },
	{ name: 'Associate UI/UX Designer', minRate: { Onsite: 650, Offshore: 318 }, maxRate: { Onsite: 690, Offshore: 379 }, buyRate: { Onsite: 440.8, Offshore: 93.1 } },
	{ name: 'UI/UX Designer', minRate: { Onsite: 950, Offshore: 392 }, maxRate: { Onsite: 990, Offshore: 453 }, buyRate: { Onsite: 636.7, Offshore: 139.7 } },
	{ name: 'Sr. UI/UX Designer', minRate: { Onsite: 1250, Offshore: 465 }, maxRate: { Onsite: 1290, Offshore: 526 }, buyRate: { Onsite: 832.7, Offshore: 232.8 } },
	{ name: 'Associate InfoSec Consultant', minRate: { Onsite: 800, Offshore: 318 }, maxRate: { Onsite: 840, Offshore: 379 }, buyRate: { Onsite: 514.3, Offshore: 93.1 } },
	{ name: 'InfoSec Consultant', minRate: { Onsite: 975, Offshore: 392 }, maxRate: { Onsite: 1015, Offshore: 453 }, buyRate: { Onsite: 661.2, Offshore: 167.6 } },
	{ name: 'Sr. InfoSec Consultant', minRate: { Onsite: 1275, Offshore: 465 }, maxRate: { Onsite: 1315, Offshore: 526 }, buyRate: { Onsite: 857.2, Offshore: 232.8 } },
	{ name: 'Front-end Associate Developer-Angular/ReactJS/API', minRate: { Onsite: 750, Offshore: 306 }, maxRate: { Onsite: 790, Offshore: 367 }, buyRate: { Onsite: 489.8, Offshore: 130.4 } },
	{ name: 'Front-end Developer-Angular/ReactJS/API', minRate: { Onsite: 950, Offshore: 428 }, maxRate: { Onsite: 990, Offshore: 490 }, buyRate: { Onsite: 587.8, Offshore: 232.8 } },
	{ name: 'Front-end Sr. Developer-Angular/ReactJS/API', minRate: { Onsite: 1250, Offshore: 551 }, maxRate: { Onsite: 1290, Offshore: 612 }, buyRate: { Onsite: 832.7, Offshore: 325.9 } },
	{ name: 'RPA Developer', minRate: { Onsite: 900, Offshore: 318 }, maxRate: { Onsite: 940, Offshore: 379 }, buyRate: { Onsite: 612.3, Offshore: 111.8 } },
	{ name: 'Sr. RPA Developer', minRate: { Onsite: 1200, Offshore: 392 }, maxRate: { Onsite: 1240, Offshore: 453 }, buyRate: { Onsite: 808.2, Offshore: 232.8 } },
	{ name: 'RPA Transformation Lead', minRate: { Onsite: 1300, Offshore: 465 }, maxRate: { Onsite: 1340, Offshore: 526 }, buyRate: { Onsite: 832.7, Offshore: 279.4 } },
	{ name: 'RPA Architect', minRate: { Onsite: 1400, Offshore: 551 }, maxRate: { Onsite: 1440, Offshore: 612 }, buyRate: { Onsite: 930.6, Offshore: 325.9 } },
	{ name: 'Associate Mobile Developer(ReactNative/Flutter/Xamarin/NativeIOS/NativeAndroid)', minRate: { Onsite: 750, Offshore: 318 }, maxRate: { Onsite: 790, Offshore: 379 }, buyRate: { Onsite: 489.8, Offshore: 111.8 } },
	{ name: 'Mobile Developer(ReactNative/Flutter/Xamarin/NativeIOS/NativeAndroid)', minRate: { Onsite: 1000, Offshore: 392 }, maxRate: { Onsite: 1040, Offshore: 453 }, buyRate: { Onsite: 661.2, Offshore: 186.3 } },
	{ name: 'Sr. Mobile Developer(ReactNative/Flutter/Xamarin/NativeIOS/NativeAndroid)', minRate: { Onsite: 1300, Offshore: 465 }, maxRate: { Onsite: 1340, Offshore: 526 }, buyRate: { Onsite: 881.6, Offshore: 279.4 } },
	{ name: 'Back-end Associate Developer(.Net/Java/C#/PHP/Python/UNIX/Shell/PERL)', minRate: { Onsite: 750, Offshore: 318 }, maxRate: { Onsite: 790, Offshore: 379 }, buyRate: { Onsite: 391.8, Offshore: 93.1 } },
	{ name: 'Back-end Developer(.Net/Java/C#/PHP/Python/UNIX/Shell/PERL)', minRate: { Onsite: 1000, Offshore: 392 }, maxRate: { Onsite: 1040, Offshore: 453 }, buyRate: { Onsite: 661.2, Offshore: 232.8 } },
	{ name: 'Back-end Sr. Developer(.Net/Java/C#/PHP/Python/UNIX/Shell/PERL)', minRate: { Onsite: 1300, Offshore: 465 }, maxRate: { Onsite: 1340, Offshore: 526 }, buyRate: { Onsite: 857.2, Offshore: 279.4 } },
	{ name: 'Associate Full Stack Developer', minRate: { Onsite: 750, Offshore: 318 }, maxRate: { Onsite: 790, Offshore: 379 }, buyRate: { Onsite: 489.8, Offshore: 111.8 } },
	{ name: 'Full Stack Developer', minRate: { Onsite: 1100, Offshore: 392 }, maxRate: { Onsite: 1140, Offshore: 453 }, buyRate: { Onsite: 734.7, Offshore: 232.8 } },
	{ name: 'Sr. Full Stack Developer', minRate: { Onsite: 1350, Offshore: 502 }, maxRate: { Onsite: 1390, Offshore: 563 }, buyRate: { Onsite: 881.6, Offshore: 298.0 } },
	{ name: 'Associate Consultant-DevOps/CI-CD/SRE', minRate: { Onsite: 750, Offshore: 318 }, maxRate: { Onsite: 790, Offshore: 379 }, buyRate: { Onsite: 489.8, Offshore: 93.1 } },
	{ name: 'Consultant-DevOps/CI-CD/SRE', minRate: { Onsite: 1100, Offshore: 392 }, maxRate: { Onsite: 1140, Offshore: 453 }, buyRate: { Onsite: 734.7, Offshore: 186.3 } },
	{ name: 'Sr. Consultant-DevOps/CI-CD/SRE', minRate: { Onsite: 1350, Offshore: 490 }, maxRate: { Onsite: 1390, Offshore: 551 }, buyRate: { Onsite: 881.6, Offshore: 279.4 } },
	{ name: 'Associate Consultant-Power BI/Tableau/Looker/Qlik', minRate: { Onsite: 750, Offshore: 318 }, maxRate: { Onsite: 790, Offshore: 379 }, buyRate: { Onsite: 489.8, Offshore: 93.1 } },
	{ name: 'Consultant-Power BI/Tableau/Looker/Qlik', minRate: { Onsite: 1100, Offshore: 392 }, maxRate: { Onsite: 1140, Offshore: 453 }, buyRate: { Onsite: 734.7, Offshore: 186.3 } },
	{ name: 'Sr. Consultant-Power BI/Tableau/Looker/Qlik', minRate: { Onsite: 1350, Offshore: 465 }, maxRate: { Onsite: 1390, Offshore: 526 }, buyRate: { Onsite: 881.6, Offshore: 279.4 } },
	{ name: 'ERP Functional Consultant', minRate: { Onsite: 1000, Offshore: 428 }, maxRate: { Onsite: 1040, Offshore: 490 }, buyRate: { Onsite: 636.7, Offshore: 139.7 } },
	{ name: 'ERP Sr. Functional Consultant', minRate: { Onsite: 1350, Offshore: 490 }, maxRate: { Onsite: 1390, Offshore: 551 }, buyRate: { Onsite: 881.6, Offshore: 260.8 } },
	{ name: 'ERP Technical Consultant', minRate: { Onsite: 1050, Offshore: 428 }, maxRate: { Onsite: 1090, Offshore: 490 }, buyRate: { Onsite: 685.7, Offshore: 167.6 } },
	{ name: 'ERP Sr. Technical Consultant', minRate: { Onsite: 1400, Offshore: 551 }, maxRate: { Onsite: 1440, Offshore: 612 }, buyRate: { Onsite: 930.6, Offshore: 279.4 } }
],

    'UAE': [
        // Roles for UAE region
	{ name: 'Select Role', minRate: '', maxRate: '', buyRate: 0 },
	{ name: 'Functional Test Analyst', minRate: { Onsite: 900, Offshore: 450 }, maxRate: { Onsite: 940, Offshore: 490 }, buyRate: { Onsite: 497.1, Offshore: 166 } },
	{ name: 'Senior Functional Test Analyst', minRate: { Onsite: 1300, Offshore: 550 }, maxRate: { Onsite: 1340, Offshore: 590 }, buyRate: { Onsite: 918, Offshore: 284.6 } },
	{name: 'Functional Test Lead', minRate: { Onsite: 1650, Offshore: 800 }, maxRate: { Onsite: 1690, Offshore: 740 }, buyRate: { Onsite: 994.2, Offshore: 474.3 } },
	{name: 'Functional Test Architect', minRate: { Onsite: 2200, Offshore: 1200 }, maxRate: { Onsite: 2280, Offshore: 1240 }, buyRate: { Onsite: 1270.4, Offshore: 592.8 } },
	{name: 'Functional Test Manager', minRate: { Onsite: 2050, Offshore: 1200 }, maxRate: { Onsite: 2090, Offshore: 1240 }, buyRate: { Onsite: 1380.8, Offshore: 664.0 } },
	{name: 'Automation Test Analyst', minRate: { Onsite: 1100, Offshore: 500 }, maxRate: { Onsite: 1140, Offshore: 540 }, buyRate: { Onsite: 607.6, Offshore: 201.6 } },
	{name: 'Senior Automation Test Analyst', minRate: { Onsite: 1350, Offshore: 650 }, maxRate: { Onsite: 1390, Offshore: 690 }, buyRate: { Onsite: 718.0, Offshore: 284.6 } },
	{name: 'Automation Test Lead', minRate: { Onsite: 1700, Offshore: 950 }, maxRate: { Onsite: 1740, Offshore: 840 }, buyRate: { Onsite: 911.3, Offshore: 592.8 } },
	{name: 'Automation Test Architect', minRate: { Onsite: 2400, Offshore: 1300 }, maxRate: { Onsite: 2480, Offshore: 1240 }, buyRate: { Onsite: 1380.8, Offshore: 758.8 } },
	{name: 'Performance Test Analyst', minRate: { Onsite: 1000, Offshore: 500 }, maxRate: { Onsite: 1040, Offshore: 540 }, buyRate: { Onsite: 552.3, Offshore: 213.4 } },
	{name: 'Senior Performance Test Analyst', minRate: { Onsite: 1600, Offshore: 650 }, maxRate: { Onsite: 1640, Offshore: 690 }, buyRate: { Onsite: 994.2, Offshore: 284.6 } },
	{name: 'Performance Test Lead', minRate: { Onsite: 2050, Offshore: 950 }, maxRate: { Onsite: 2090, Offshore: 840 }, buyRate: { Onsite: 1380.8, Offshore: 592.8 } },
	{name: 'Performance Test Architect', minRate: { Onsite: 2500, Offshore: 1300 }, maxRate: { Onsite: 2580, Offshore: 1240 }, buyRate: { Onsite: 1657.0, Offshore: 664.0 } },
	{name: 'Observability/Chaos/Reliability Engineer', minRate: { Onsite: 1300, Offshore: 800 }, maxRate: { Onsite: 1340, Offshore: 840 }, buyRate: { Onsite: 718.0, Offshore: 474.3 } },
	{name: 'Observability/Chaos/Reliability Lead', minRate: { Onsite: 1800, Offshore: 1100 }, maxRate: { Onsite: 1840, Offshore: 1030 }, buyRate: { Onsite: 1049.4, Offshore: 758.8 } },
	{name: 'Observability/Chaos/Reliability Architect', minRate: { Onsite: 2850, Offshore: 1500 }, maxRate: { Onsite: 2930, Offshore: 1540 }, buyRate: { Onsite: 1657.0, Offshore: 948.5 } },
	{name: 'Security Test Analyst', minRate: { Onsite: 1300, Offshore: 700 }, maxRate: { Onsite: 1340, Offshore: 740 }, buyRate: { Onsite: 718.0, Offshore: 237.1 } },
	{name: 'Senior Security Test Analyst', minRate: { Onsite: 1800, Offshore: 800 }, maxRate: { Onsite: 1840, Offshore: 840 }, buyRate: { Onsite: 994.2, Offshore: 379.4 } },
	{name: 'Security Test Lead', minRate: { Onsite: 2500, Offshore: 1050 }, maxRate: { Onsite: 2540, Offshore: 1030 }, buyRate: { Onsite: 1463.7, Offshore: 640.3 } },
	{name: 'Security Test Architect', minRate: { Onsite: 2850, Offshore: 1500 }, maxRate: { Onsite: 2930, Offshore: 1540 }, buyRate: { Onsite: 1657.0, Offshore: 948.5 } },
	{name: 'SDET', minRate: { Onsite: 1750, Offshore: 1092 }, maxRate: { Onsite: 1790, Offshore: 1132 }, buyRate: { Onsite: 994.2, Offshore: 355.7 } },
	{name: 'Sr. SDET', minRate: { Onsite: 2400, Offshore: 1404 }, maxRate: { Onsite: 2440, Offshore: 1444 }, buyRate: { Onsite: 1380.8, Offshore: 711.4 } },
	{name: 'Consultant - ATS', minRate: { Onsite: 2700, Offshore: 1404 }, maxRate: { Onsite: 2740, Offshore: 1444 }, buyRate: { Onsite: 1546.5, Offshore: 830.0 } },
	{name: 'Lead Consultant - ATS', minRate: { Onsite: 3350, Offshore: 1560 }, maxRate: { Onsite: 3390, Offshore: 1600 }, buyRate: { Onsite: 1933.1, Offshore: 948.5 } },
	{name: 'Program Manager', minRate: { Onsite: 3350, Offshore: 1560 }, maxRate: { Onsite: 3390, Offshore: 1600 }, buyRate: { Onsite: 1933.1, Offshore: 853.7 } },
	{name: 'RPA Tester', minRate: { Onsite: 1400, Offshore: 780 }, maxRate: { Onsite: 1440, Offshore: 820 }, buyRate: { Onsite: 850.2, Offshore: 213.4 } },
	{name: 'Sr. RPA Tester', minRate: { Onsite: 1550, Offshore: 936 }, maxRate: { Onsite: 1590, Offshore: 976 }, buyRate: { Onsite: 915.6, Offshore: 403.1 } },
	{name: 'Project Manager', minRate: { Onsite: 2000, Offshore: 1310 }, maxRate: { Onsite: 2040, Offshore: 1466 }, buyRate: { Onsite: 1270.4, Offshore: 664.6 } },
	{name: 'Sr. Project Manager', minRate: { Onsite: 2200, Offshore: 1497 }, maxRate: { Onsite: 2240, Offshore: 1653 }, buyRate: { Onsite: 1380.8, Offshore: 759.5 } },
	{name: 'Scrum Master', minRate: { Onsite: 2000, Offshore: 1029 }, maxRate: { Onsite: 2040, Offshore: 1185 }, buyRate: { Onsite: 1270.4, Offshore: 569.6 } },
	{name: 'Sr. Scrum Master', minRate: { Onsite: 2200, Offshore: 1248 }, maxRate: { Onsite: 2240, Offshore: 1404 }, buyRate: { Onsite: 1380.8, Offshore: 712.0 } },
	{name: 'Associate Business Analyst - Domain', minRate: { Onsite: 1150, Offshore: 780 }, maxRate: { Onsite: 1190, Offshore: 936 }, buyRate: { Onsite: 718.0, Offshore: 391.6 } },
	{name: 'Business Analyst - Domain', minRate: { Onsite: 1400, Offshore: 967 }, maxRate: { Onsite: 1440, Offshore: 1123 }, buyRate: { Onsite: 883.7, Offshore: 474.7 } },
	{name: 'Sr. Business Analyst - Domain', minRate: { Onsite: 2000, Offshore: 1154 }, maxRate: { Onsite: 2040, Offshore: 1310 }, buyRate: { Onsite: 1270.4, Offshore: 593.4 } },
	{name: 'Associate Systems Analyst - COTS', minRate: { Onsite: 1200, Offshore: 780 }, maxRate: { Onsite: 1240, Offshore: 936 }, buyRate: { Onsite: 662.8, Offshore: 284.8 } },
	{name: 'Systems Analyst - COTS', minRate: { Onsite: 1600, Offshore: 998 }, maxRate: { Onsite: 1640, Offshore: 1154 }, buyRate: { Onsite: 994.2, Offshore: 427.2 } },
	{name: 'Sr. Systems Analyst - COTS', minRate: { Onsite: 1900, Offshore: 1123 }, maxRate: { Onsite: 1940, Offshore: 1279 }, buyRate: { Onsite: 1215.1, Offshore: 664.6 } },
	{name: 'Associate Data Analyst', minRate: { Onsite: 1200, Offshore: 780 }, maxRate: { Onsite: 1240, Offshore: 936 }, buyRate: { Onsite: 662.8, Offshore: 356.0 } },
	{name: 'Data Analyst', minRate: { Onsite: 1800, Offshore: 967 }, maxRate: { Onsite: 1840, Offshore: 1123 }, buyRate: { Onsite: 994.2, Offshore: 474.7 } },
	{name: 'Sr. Data Analyst', minRate: { Onsite: 2400, Offshore: 1404 }, maxRate: { Onsite: 2440, Offshore: 1560 }, buyRate: { Onsite: 1325.6, Offshore: 830.7 } },
	{name: 'Associate Data Scientist', minRate: { Onsite: 1280, Offshore: 717 }, maxRate: { Onsite: 1320, Offshore: 873 }, buyRate: { Onsite: 718.0, Offshore: 356.0 } },
	{name: 'Data Scientist', minRate: { Onsite: 2000, Offshore: 1310 }, maxRate: { Onsite: 2040, Offshore: 1466 }, buyRate: { Onsite: 1104.7, Offshore: 664.6 } },
	{name: 'Sr. Data Scientist', minRate: { Onsite: 3000, Offshore: 1622 }, maxRate: { Onsite: 3040, Offshore: 1778 }, buyRate: { Onsite: 1657.0, Offshore: 949.4 } },
	{name: 'Solution Architect', minRate: { Onsite: 2500, Offshore: 1560 }, maxRate: { Onsite: 2540, Offshore: 1716 }, buyRate: { Onsite: 1380.8, Offshore: 830.7 } },
	{name: 'Sr Solution Architect', minRate: { Onsite: 3400, Offshore: 1747 }, maxRate: { Onsite: 3440, Offshore: 1903 }, buyRate: { Onsite: 1933.1, Offshore: 996.9 } },
	{name: 'Associate Cloud Engineer (Azure/AWS/Google)', minRate: { Onsite: 1350, Offshore: 873 }, maxRate: { Onsite: 1390, Offshore: 1029 }, buyRate: { Onsite: 773.3, Offshore: 237.3 } },
	{name: 'Cloud Engineer (Azure/AWS/Google)', minRate: { Onsite: 1750, Offshore: 1185 }, maxRate: { Onsite: 1790, Offshore: 1341 }, buyRate: { Onsite: 994.2, Offshore: 593.4 } },
	{name: 'Cloud Architect (Azure/AWS/Google)', minRate: { Onsite: 2800, Offshore: 1466 }, maxRate: { Onsite: 2840, Offshore: 1622 }, buyRate: { Onsite: 1546.5, Offshore: 830.7 } },
	{name: 'Associate Engineer - AWS (Redshift+Glue), Azure (Databricks+ADF), Snowflake', minRate: { Onsite: 1400, Offshore: 873 }, maxRate: { Onsite: 1440, Offshore: 1029 }, buyRate: { Onsite: 773.3, Offshore: 237.3 } },
	{name: 'Engineer -AWS (Redshift+Glue), Azure (Databricks+ADF), Snowflake', minRate: { Onsite: 1800, Offshore: 1217 }, maxRate: { Onsite: 1840, Offshore: 1373 }, buyRate: { Onsite: 1049.4, Offshore: 593.4 } },
	{name: 'Architect -AWS (Redshift+Glue), Azure (Databricks+ADF), Snowflake', minRate: { Onsite: 3000, Offshore: 1435 }, maxRate: { Onsite: 3040, Offshore: 1591 }, buyRate: { Onsite: 1657.0, Offshore: 830.7 } },
	{name: 'Database Administrator', minRate: { Onsite: 1600, Offshore: 1029 }, maxRate: { Onsite: 1640, Offshore: 1185 }, buyRate: { Onsite: 883.7, Offshore: 356.0 } },
	{name: 'Sr. Database Administrator', minRate: { Onsite: 2500, Offshore: 1248 }, maxRate: { Onsite: 2540, Offshore: 1404 }, buyRate: { Onsite: 1380.8, Offshore: 617.1 } },
	{name: 'Agile Coach', minRate: { Onsite: 2200, Offshore: 1092 }, maxRate: { Onsite: 2240, Offshore: 1248 }, buyRate: { Onsite: 1270.4, Offshore: 474.7 } },
	{name: 'Sr. Agile Coach', minRate: { Onsite: 2500, Offshore: 1310 }, maxRate: { Onsite: 2540, Offshore: 1466 }, buyRate: { Onsite: 1380.8, Offshore: 712.0 } },
	{name: 'Associate UI/UX Designer', minRate: { Onsite: 1550, Offshore: 811 }, maxRate: { Onsite: 1590, Offshore: 967 }, buyRate: { Onsite: 856.1, Offshore: 237.3 } },
	{name: 'UI/UX Designer', minRate: { Onsite: 2000, Offshore: 998 }, maxRate: { Onsite: 2040, Offshore: 1154 }, buyRate: { Onsite: 1104.7, Offshore: 356.0 } },
	{name: 'Sr. UI/UX Designer', minRate: { Onsite: 3000, Offshore: 1185 }, maxRate: { Onsite: 3040, Offshore: 1341 }, buyRate: { Onsite: 1657.0, Offshore: 593.4 } },
	{name: 'Associate InfoSec Consultant', minRate: { Onsite: 1300, Offshore: 811 }, maxRate: { Onsite: 1340, Offshore: 967 }, buyRate: { Onsite: 718.0, Offshore: 237.3 } },
	{name: 'InfoSec Consultant', minRate: { Onsite: 1800, Offshore: 998 }, maxRate: { Onsite: 1840, Offshore: 1154 }, buyRate: { Onsite: 994.2, Offshore: 427.2 } },
	{name: 'Sr. InfoSec Consultant', minRate: { Onsite: 2800, Offshore: 1185 }, maxRate: { Onsite: 2840, Offshore: 1341 }, buyRate: { Onsite: 1546.5, Offshore: 593.4 } },
	{name: 'Front-end Associate Developer - Angular/ReactJS /API/', minRate: { Onsite: 1200, Offshore: 780 }, maxRate: { Onsite: 1240, Offshore: 936 }, buyRate: { Onsite: 662.8, Offshore: 332.3 } },
	{name: 'Front-end Developer - Angular/ReactJS/API/', minRate: { Onsite: 2200, Offshore: 1092 }, maxRate: { Onsite: 2240, Offshore: 1248 }, buyRate: { Onsite: 1215.1, Offshore: 593.4 } },
	{name: 'Front-end Sr. Developer - Angular/ReactJS/API/', minRate: { Onsite: 2800, Offshore: 1404 }, maxRate: { Onsite: 2840, Offshore: 1560 }, buyRate: { Onsite: 1546.5, Offshore: 830.7 } },
	{name: 'RPA Developer', minRate: { Onsite: 1200, Offshore: 811 }, maxRate: { Onsite: 1240, Offshore: 967 }, buyRate: { Onsite: 662.8, Offshore: 284.8 } },
	{name: 'Sr. RPA Developer', minRate: { Onsite: 1800, Offshore: 998 }, maxRate: { Onsite: 1840, Offshore: 1154 }, buyRate: { Onsite: 994.2, Offshore: 593.4 } },
	{name: 'RPA Transformation Lead', minRate: { Onsite: 2200, Offshore: 1185 }, maxRate: { Onsite: 2240, Offshore: 1341 }, buyRate: { Onsite: 1215.1, Offshore: 712.0 } },
	{name: 'RPA Architect', minRate: { Onsite: 2800, Offshore: 1404 }, maxRate: { Onsite: 2840, Offshore: 1560 }, buyRate: { Onsite: 1546.5, Offshore: 830.7 } },
	{name: 'Associate Mobile Developer (React Native/Flutter/Xamarin/Native IOS/Native Android)', minRate:{ Onsite: 1200, Offshore: 811 }, maxRate: { Onsite: 1240, Offshore: 967}, buyRate: { Onsite: 662.8, Offshore: 284.8} },
	{name: 'Mobile Developer (React Native/Flutter/Xamarin/Native IOS/Native Android)', minRate: { Onsite: 1800, Offshore: 998 }, maxRate: { Onsite: 1840, Offshore: 1154 }, buyRate: { Onsite: 994.2, Offshore: 474.7 } },
	{name: 'Sr. Mobile Developer (React Native/Flutter/Xamarin/Native IOS/Native Android)', minRate: { Onsite: 2800, Offshore: 1185 }, maxRate: { Onsite: 2840, Offshore: 1341 }, buyRate: { Onsite: 1546.5, Offshore: 712.0 } },
	{name: 'Back-end Associate Developer (.Net / Java / C# / PHP / Python/UNIX/Shell/PERL)', minRate: { Onsite: 1200, Offshore: 811 }, maxRate: { Onsite: 1240, Offshore: 967 }, buyRate: { Onsite: 662.8, Offshore: 237.3 } },
	{name: 'Back-end Developer (.Net / Java / C# / PHP / Python/UNIX/Shell/PERL)', minRate: { Onsite: 1800, Offshore: 998 }, maxRate: { Onsite: 1840, Offshore: 1154 }, buyRate: { Onsite: 994.2, Offshore: 593.4 } },
	{name: 'Back-end Sr. Developer (.Net / Java / C# / PHP / Python/UNIX/Shell/PERL)', minRate: { Onsite: 2800, Offshore: 1185 }, maxRate: { Onsite: 2840, Offshore: 1341 }, buyRate: { Onsite: 1546.5, Offshore: 712.0 } },
	{name: 'Associate Full Stack Developer', minRate: { Onsite: 1200, Offshore: 811 }, maxRate: { Onsite: 1240, Offshore: 967 }, buyRate: { Onsite: 662.8, Offshore: 284.8 } },
	{name: 'Full Stack Developer', minRate: { Onsite: 1800, Offshore: 998 }, maxRate: { Onsite: 1840, Offshore: 1154 }, buyRate: { Onsite: 994.2, Offshore: 593.4 } },
	{name: 'Sr. Full Stack Developer', minRate: { Onsite: 2800, Offshore: 1279 }, maxRate: { Onsite: 2840, Offshore: 1435 }, buyRate: { Onsite: 1546.5, Offshore: 759.5 } },
	{name: 'Associate Consultant - DevOps / CI-CD / SRE', minRate: { Onsite: 1200, Offshore: 811 }, maxRate: { Onsite: 1240, Offshore: 967 }, buyRate: { Onsite: 662.8, Offshore: 237.3 } },
	{name: 'Consultant - DevOps / CI-CD / SRE', minRate: { Onsite: 1800, Offshore: 998 }, maxRate: { Onsite: 1840, Offshore: 1154 }, buyRate: { Onsite: 994.2, Offshore: 474.7 } },
	{name: 'Sr. Consultant - DevOps / CI-CD / SRE', minRate: { Onsite: 2800, Offshore: 1248 }, maxRate: { Onsite: 2840, Offshore: 1404 }, buyRate: { Onsite: 1546.5, Offshore: 712.0 } },
	{name: 'Associate Consultant -Power BI / Tableau / Looker / Qlik', minRate: { Onsite: 1200, Offshore: 811 }, maxRate: { Onsite: 1240, Offshore: 967 }, buyRate: { Onsite: 662.8, Offshore: 237.3 } },
	{name: 'Consultant - Power BI / Tableau / Looker / Qlik', minRate: { Onsite: 1800, Offshore: 998 }, maxRate: { Onsite: 1840, Offshore: 1154 }, buyRate: { Onsite: 994.2, Offshore: 474.7 } },
	{name: 'Sr. Consultant - Power BI / Tableau / Looker / Qlik', minRate: { Onsite: 2800, Offshore: 1185 }, maxRate: { Onsite: 2840, Offshore: 1341 }, buyRate: { Onsite: 1546.5, Offshore: 712.0 } },
	{name: 'ERP Technical Consultant', minRate: { Onsite: 1450, Offshore: 1092 }, maxRate: { Onsite: 1490, Offshore: 1248 }, buyRate: { Onsite: 828.5, Offshore: 427.2 } },
	{name: 'ERP Sr. Technical Consultant', minRate: { Onsite: 2750, Offshore: 1404 }, maxRate: { Onsite: 2790, Offshore: 1560 }, buyRate: { Onsite: 1546.5, Offshore: 712.0 } },
	{name: 'ERP Functional Consultant', minRate: { Onsite: 1500, Offshore: 1092 }, maxRate: { Onsite: 1540, Offshore: 1248 }, buyRate: { Onsite: 828.5, Offshore: 356.0 } },
	{name: 'ERP Sr. Functional Consultant', minRate: { Onsite: 2800, Offshore: 1248 }, maxRate: { Onsite: 2840, Offshore: 1404 }, buyRate: { Onsite: 1546.5, Offshore: 664.6 } }
]

};

	const regionSelect = document.getElementById("region");
	regionSelect.addEventListener("change", addRow);
        const addButton = document.querySelector('button[onclick="addRow()"]');
    
const locationData = [
    'Onsite',
    'Offshore',
    // Add more location data as needed
];

// Function to dynamically add a new row to the table

function addRow() {
    const region = document.getElementById('region').value;
    if (!region) {
        addButton.disabled = true;
	//alert(region);	
	//console.log(region);
        return;
    } else {
        addButton.disabled = false;
    }

    const rateTableBody = document.getElementById('rateTableBody');
    const newRow = document.createElement('tr');

    // Roles dropdown
    const roleCell = document.createElement('td');
    const roleSelect = document.createElement('select');
    roleSelect.id = 'roleSelect' + (rateTableBody.children.length + 1);
    roleSelect.addEventListener('change', () => {
        const selectedRole = rolesData[region].find(role => role.name === roleSelect.value);
	const location = document.querySelector('#rateTableBody tr:last-child td:nth-child(3) select').value;
	if (selectedRole) {
	    minRateSpan.textContent = getCurrencySymbol() + " " + selectedRole.minRate[location];
            maxRateSpan.textContent = getCurrencySymbol() + " " + selectedRole.maxRate[location];
        } else {
            minRateSpan.textContent = '';
            maxRateSpan.textContent = '';
        }
    });
    rolesData[region].forEach(role => {
        const option = document.createElement('option');
        option.value = role.name;
        option.textContent = role.name;
        roleSelect.appendChild(option);
    });
    roleCell.appendChild(roleSelect);
    newRow.appendChild(roleCell);

    // Count cell
    const countCell = document.createElement('td');
    const countInput = document.createElement('input');
    countInput.type = 'number';
    countInput.min = '0';
    countInput.placeholder = 'Enter Count';
    countCell.appendChild(countInput);
    newRow.appendChild(countCell);

    // Location dropdown
    const locationCell = document.createElement('td');
    const locationSelect = document.createElement('select');
    locationData.forEach(location => {
        const option = document.createElement('option');
        option.value = location;
        option.textContent = location;
        locationSelect.appendChild(option);
    });
    locationCell.appendChild(locationSelect);
    newRow.appendChild(locationCell);

    // Duration cell
    const durationCell = document.createElement('td');
    const durationInput = document.createElement('input');
    durationInput.type = 'number';
    durationInput.min = '0';
    durationInput.placeholder = 'Enter Duration';
    durationCell.appendChild(durationInput);
    newRow.appendChild(durationCell);

    // Min Rate cell
    const minRateCell = document.createElement('td');
    const minRateSpan = document.createElement('span');
    minRateSpan.className = 'min-rate';
    minRateCell.appendChild(minRateSpan);
    newRow.appendChild(minRateCell);

    // Max Rate cell
    const maxRateCell = document.createElement('td');
    const maxRateSpan = document.createElement('span');
    maxRateSpan.className = 'max-rate';
    maxRateCell.appendChild(maxRateSpan);
    newRow.appendChild(maxRateCell);

    // Considered Rate cell
    const consideredRateCell = document.createElement('td');
    const rateInput = document.createElement('input');
    rateInput.type = 'number';
    rateInput.className = 'rate-input';
    rateInput.placeholder = 'Enter Rate';
    consideredRateCell.appendChild(rateInput);
    newRow.appendChild(consideredRateCell);

    // Revenue cell (empty)
    const revenueCell = document.createElement('td');
    newRow.appendChild(revenueCell);
    rateTableBody.appendChild(newRow);

    // Calculate revenue on rate input change
    rateInput.addEventListener('input', () => {
        calculateRevenue(newRow);
    });


    // Update revenue and min/max rates on location change
    locationSelect.addEventListener('change', () => {
        const region = document.getElementById('region').value;
	const selectedRole = rolesData[region].find(role => role.name === roleSelect.value);
        const location = locationSelect.value;
        if (selectedRole) { 
       	    //const currencySymbol = getCurrencySymbol(region);
            minRateSpan.textContent = getCurrencySymbol() + " " + selectedRole.minRate[location];
            maxRateSpan.textContent = getCurrencySymbol() + " " + selectedRole.maxRate[location];
        } else {
            minRateSpan.textContent = '';
            maxRateSpan.textContent = '';
        }
        calculateRevenue(newRow);
    });

    // Update revenue on count change
    countInput.addEventListener('input', () => {
        calculateRevenue(newRow);
    });

    // Update revenue on duration change
    durationInput.addEventListener('input', () => {
        calculateRevenue(newRow);
    });
};

// Function to calculate individual revenue
function calculateRevenue(row) {
    const region = document.getElementById('region').value;
    const count = parseFloat(row.cells[1].querySelector('input').value) || 0;
    const duration = parseFloat(row.cells[3].querySelector('input').value) || 0;
    const rate = parseFloat(row.cells[6].querySelector('input').value) || 0;
    const location = row.cells[2].querySelector('select').value;
    const selectedRole = rolesData[region].find(role => role.name === row.cells[0].querySelector('select').value);
    var locationFactor = 1;
    if (region === "USA" || region === "Canada") {
        locationFactor = location === 'Onsite' ? 8 : 8.5;
    } else if (region === "UK" || region === "AUS" || region === "UAE") {
        locationFactor  = 1;
    };
    const revenue = count * duration * rate * locationFactor;
    row.cells[7].textContent = getCurrencySymbol() + " " + revenue.toFixed(2);
    updateTotalRevenue(0);
}

// Function to calculate GM
function calculateGM() {
    let totalSellAmount = 0;
    let totalBuyAmount = 0;
    const rateTableBody = document.getElementById('rateTableBody');
    const resultsDiv = document.getElementById('results');
    resultsDiv.style.color = 'purple';

    // Iterate over each row in the table
    for (let i = 0; i < rateTableBody.rows.length; i++) {
        const row = rateTableBody.rows[i];

    // Extract data from the row
    const region = document.getElementById('region').value;
    const count = parseFloat(row.cells[1].querySelector('input').value) || 0;
    const duration = parseFloat(row.cells[3].querySelector('input').value) || 0;
    const rate = parseFloat(row.cells[6].querySelector('input').value) || 0;
    const location = row.cells[2].querySelector('select').value;
    const selectedRole = rolesData[region].find(role => role.name === row.cells[0].querySelector('select').value);
    const buyRate = selectedRole.buyRate[location];
    var locationFactor = 1;
    if (region === "USA" || region === "Canada") {
        locationFactor = location === 'Onsite' ? 8 : 8.5;
    } else if (region === "UK" || region === "AUS" || region === "UAE") {
        locationFactor  = 1;
    };
    const revenue = count * duration * rate * locationFactor;
    const totalBuyCost = count * buyRate * duration * locationFactor;
    totalSellAmount += revenue;
    totalBuyAmount += totalBuyCost;
    }
    var discountValue = parseFloat(document.getElementById("discount").value) || 0;
    var contingencyValue = parseFloat(document.getElementById("contingency").value) || 0;
    totalSellAmount = totalSellAmount + contingencyValue - discountValue;
    // Calculate the Gross Margin (GM)
    const gm = ((totalSellAmount - totalBuyAmount) / totalSellAmount) * 100;
    resultsDiv.textContent = 'Margin is: ' + gm.toFixed(2) + '%';

}


// function to calculate total revenue 
function calculateTotalRevenue() {
    const revenueCells = document.querySelectorAll('#rateTableBody td:nth-child(8)');
    let totalRevenue = 0;
    revenueCells.forEach(cell => {
        const revenueValue = parseFloat(cell.textContent.split(' ')[1]);
        if (!isNaN(revenueValue)) {
            totalRevenue += revenueValue;
        }
    });
    var discountValue = parseFloat(document.getElementById("discount").value) || 0;
    var contingencyValue = parseFloat(document.getElementById("contingency").value) || 0;
    totalRevenue = totalRevenue + contingencyValue - discountValue;
    updateTotalRevenue(totalRevenue);
}

//update total revenue label based on any changes in region/role/rate etc.
function updateTotalRevenue(totalRevenue) {
    const totalRevenueElement = document.getElementById('totalRevenue');
    totalRevenueElement.style.color = 'blue';
    totalRevenueElement.style.fontWeight = 'bold';
    totalRevenueElement.textContent = 'Total Revenue: ' + getCurrencySymbol() + totalRevenue.toFixed(2);
}

// Function to get currency symbol based on selected region
function getCurrencySymbol() {
    const region = document.getElementById('region').value;
    switch (region) {
        case 'USA':
            return '$';
        case 'Canada':
            return 'CAD';
        case 'UK':
            return '£';
        case 'AUS':
            return 'AUD';
	case 'UAE':
            return 'AED';
        // Add more cases for other regions as needed
        default:
            return '';
    }
}

// Function to change currency based on selected region
function changeCurrency() {
    const region = document.getElementById('region').value;
    const currencySymbol = getCurrencySymbol(region);
    const rateTableBody = document.getElementById('rateTableBody');
    rateTableBody.innerHTML = '';
    updateTotalRevenue(0);

    //update the text description based on the selected region
    const rateDescription = document.getElementById("rateDescription");
    if (region === "USA" || region === "Canada") {
        rateDescription.textContent = "Please note that Min and Max rates are for per hour.";
    } else if (region === "UK" || region === "AUS" || region === "UAE") {
        rateDescription.textContent = "Please note that Min and Max rates are for per day.";
    } else {
        rateDescription.textContent = "Please select your region";
    };
    rateDescription.style.color = "red";

    // Reset roles dropdown to default (Select Role)
    const roleSelects = document.querySelectorAll('select[id^="roleSelect"]');
    roleSelects.forEach(select => {
        select.innerHTML = '<option value="">Select Role</option>';
    });

    // Clear min and max rates
    const minRateSpans = document.querySelectorAll('.min-rate');
    const maxRateSpans = document.querySelectorAll('.max-rate');
    minRateSpans.forEach(span => span.textContent = '');
    maxRateSpans.forEach(span => span.textContent = '');

    	// Update headers with currency symbol
    	const minRateHeader = document.querySelector('th:nth-child(5)');
   	const maxRateHeader = document.querySelector('th:nth-child(6)');
    	const consideredRateHeader = document.querySelector('th:nth-child(7)');
    	const revenueHeader = document.querySelector('th:nth-child(8)');
    	
	// Create a span element for the currency symbol to control size/color etc
	const currencySpan = document.createElement('span');
	currencySpan.textContent = '(' + currencySymbol + ')';
	currencySpan.style.fontSize = '0.7em'; // Adjust the font size as needed
	currencySpan.style.color = 'green';

	// Replace the currency symbol text content with the span element
	minRateHeader.textContent = 'Min Rate ';
	minRateHeader.appendChild(currencySpan.cloneNode(true)); // Clone the span for each header
	maxRateHeader.textContent = 'Max Rate ';
	maxRateHeader.appendChild(currencySpan.cloneNode(true));
	consideredRateHeader.textContent = 'Sell Rate ';
	consideredRateHeader.appendChild(currencySpan.cloneNode(true));
	revenueHeader.textContent = 'Revenue ';
	revenueHeader.appendChild(currencySpan.cloneNode(true));
}


// Add initial row
addRow();
