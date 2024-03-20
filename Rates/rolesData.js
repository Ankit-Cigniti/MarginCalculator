 const rolesData = {
           USA: [          
		{name:"Functional Test Analyst", experience: "1-3 Years", onsite: { min: 80, minmargin: "35.7%", max: 85, maxmargin: "39.4%" }, offshore: { min: 22, minmargin: "75.8%", max: 27, maxmargin: "80.3%" } },
  		{name:" Senior Functional Test Analyst", experience: "4-8 Years",onsite: { min: 90, minmargin: "34.2%",max: 95 , maxmargin: "37.7%"},    offshore: { min: 28, minmargin: "56.5%",max: 33, maxmargin: "63.1%" }  },
  		{name:"Functional Test Lead", experience: "8-10 Years",onsite: { min: 100, minmargin: "32.4%",max: 105, maxmargin: "35.7%" },    offshore: { min: 32, minmargin: "52.4%",max: 37, maxmargin: "58.9%" }  },
  		{name:"Functional Test Architect" ,experience: "10+ Years",onsite: { min: 115, minmargin: "34.0%",max: 120, maxmargin: "36.7%" },     offshore: { min: 35, minmargin: "45.7%",max: 40, maxmargin: "52.4%" }  },
		{name:"Functional Test Manager",  experience: "10+ Years", onsite: { min: 120, minmargin: "33.0%", max: 125, maxmargin: "35.7%" }, offshore: { min: 38, minmargin: "43.9%", max: 43, maxmargin: "50.5%" } },
  		{name:"Automation Test Analyst",  experience: "1-3 Years", onsite: { min: 90, minmargin: "35.7%", max: 95, maxmargin: "39.0%" }, offshore: { min: 27, minmargin: "76.0%", max: 32, maxmargin: "79.8%" } },
		{name:"Senior Automation Test Analyst", experience: "4-8 Years", onsite: { min: 105, minmargin: "35.7%", max: 110, maxmargin: "38.6%" }, offshore: { min: 30, minmargin: "56.9%", max: 35, maxmargin: "63.0%" } },
		{name:"Automation Test Lead", experience: "9-12 Years", onsite: { min: 115, minmargin: "32.9%", max: 120, maxmargin: "35.7%" }, offshore: { min: 37, minmargin: "46.5%", max: 42, maxmargin: "52.9%" } },
		{name:"Automation Test Architect", experience: "12+ Years", onsite: { min: 150, minmargin: "31.4%", max: 160, maxmargin: "35.7%" }, offshore: { min: 45, minmargin: "45.9%", max: 50, maxmargin: "51.3%" } },
		{name:"Performance Test Analyst", experience: "1-3 Years", onsite: { min: 90, minmargin: "35.7%", max: 95, maxmargin: "39.0%" }, offshore: { min: 30, minmargin: "77.2%", max: 35, maxmargin: "80.4%" } },
		{name:"Senior Performance Test Analyst", experience: "4-8 Years", onsite: { min: 105, minmargin: "29.5%", max: 110, maxmargin: "32.7%" }, offshore: { min: 32, minmargin: "54.8%", max: 37, maxmargin: "60.9%" } },
		{name:"Performance Test Lead", experience: "9-12 Years", onsite: { min: 125, minmargin: "33.1%", max: 130, maxmargin: "35.7%" }, offshore: { min: 36, minmargin: "47.2%", max: 41, maxmargin: "53.6%" } },
		{name:"Performance Test Architect", experience: "12+ Years", onsite: { min: 150, minmargin: "31.4%", max: 160, maxmargin: "35.7%" }, offshore: { min: 50, minmargin: "45.2%", max: 55, maxmargin: "50.2%" } },
		{name:"Observability/Chaos/Reliability Engineer",experience:"4-8 Years",onsite: {min:110,minmargin:"35.7%", max:115,maxmargin:"38.5%"}, offshore:{min:32,minmargin:"52.4%",max:37,maxmargin:"58.9%"}},
		{ name: "Observability/Chaos/Reliability Lead", experience: "9-12 Years", onsite: { min: 130, minmargin: "30.7%", max: 135, maxmargin: "33.3%" }, offshore: { min: 40, minmargin: "39.1%", max: 45, maxmargin: "45.9%" } },
		{ name: "Observability/Chaos/Reliability Architect", experience: "12+ Years", onsite: { min: 150, minmargin: "31.4%", max: 160, maxmargin: "35.7%" }, offshore: { min: 50, minmargin: "39.1%", max: 55, maxmargin: "44.7%" } },
		{ name: "Security Test Analyst", experience: "1-3 Years", onsite: { min: 95, minmargin: "35.7%", max: 100, maxmargin: "38.9%" }, offshore: { min: 30, minmargin: "74.6%", max: 35, maxmargin: "78.3%" } },
		{ name: "Senior Security Test Analyst", experience: "4-8 Years", onsite: { min: 105, minmargin: "35.7%", max: 110, maxmargin: "38.6%" }, offshore: { min: 32, minmargin: "47.7%", max: 37, maxmargin: "54.8%" } },
		{ name: "Security Test Lead", experience: "9-12 Years", onsite: { min: 120, minmargin: "35.7%", max: 125, maxmargin: "38.2%" }, offshore: { min: 36, minmargin: "40.8%", max: 41, maxmargin: "48.0%" } },
		{ name: "Security Test Architect", experience: "12+ Years", onsite: { min: 150, minmargin: "31.4%", max: 160, maxmargin: "35.7%" }, offshore: { min: 52, minmargin: "53.2%", max: 57, maxmargin: "57.3%" } },
		{ name: "SDET", experience: "2-6 Years", onsite: { min: 100, minmargin: "35.7%", max: 105, maxmargin: "38.7%" }, offshore: { min: 35, minmargin: "47.8%", max: 40, maxmargin: "54.3%" } },
		{ name: "Sr SDET", experience: "7-10 Years", onsite: { min: 125, minmargin: "33.1%", max: 130, maxmargin: "35.7%" }, offshore: { min: 45, minmargin: "49.3%", max: 50, maxmargin: "54.3%" } },
		{ name: "Consultant ATS", experience: "10-14 Years", onsite: { min: 135, minmargin: "35.7%", max: 140, maxmargin: "38.0%" }, offshore: { min: 45, minmargin: "72.1%", max: 50, maxmargin: "74.9%" } },
		{ name: "Lead Consultant ATS", experience: "14+ Years", onsite: { min: 145, minmargin: "33.4%", max: 150, maxmargin: "35.7%" }, offshore: { min: 50, minmargin: "69.6%", max: 55, maxmargin: "72.3%" } },
		{ name: "Program Manager", experience: "15+ Years", onsite: { min: 150, minmargin: "31.4%", max: 155, maxmargin: "33.6%" }, offshore: { min: 50, minmargin: "62.0%", max: 55, maxmargin: "65.4%" } },
		{ name: "RPA Tester", experience: "1-3 Years", onsite: { min: 90, minmargin: "35.7%", max: 98, maxmargin: "40.9%" }, offshore: { min: 25, minmargin: "63.5%", max: 30, maxmargin: "69.6%" } },
		{ name: "Sr RPA Tester", experience: "4-8 Years", onsite: { min: 110, minmargin: "35.7%", max: 118, maxmargin: "40.0%" }, offshore: { min: 30, minmargin: "54.3%", max: 35, maxmargin: "60.9%" } },
		{ name: "Project Manager", experience: "6-8 Years", onsite: { min: 124, minmargin: "35.1%", max: 129, maxmargin: "37.7%" }, offshore: { min: 42, minmargin: "49.3%", max: 47, maxmargin: "54.7%" } },
		{ name: "Sr Project Manager", experience: "9-12 Years", onsite: { min: 130, minmargin: "35.7%", max: 135, maxmargin: "38.0%" }, offshore: { min: 48, minmargin: "49.3%", max: 53, maxmargin: "54.1%" } },
		{ name: "Scrum Master", experience: "6-8 Years", onsite: { min: 108, minmargin: "34.5%", max: 113, maxmargin: "37.4%" }, offshore: { min: 33, minmargin: "44.7%", max: 38, maxmargin: "51.9%" } },
		{ name: "Sr Scrum Master", experience: "9-12 Years", onsite: { min: 120, minmargin: "33.0%", max: 125, maxmargin: "35.7%" }, offshore: { min: 40, minmargin: "42.9%", max: 45, maxmargin: "49.3%" } },
		{ name: "Associate Business Analyst Domain", experience: "1-3 Years", onsite: { min: 88, minmargin: "37.9%", max: 93, maxmargin: "41.2%" }, offshore: { min: 25, minmargin: "49.8%", max: 30, maxmargin: "58.2%" } },
		{ name: "Business Analyst Domain", experience: "4-8 Years", onsite: { min: 95, minmargin: "32.3%", max: 100, maxmargin: "35.7%" }, offshore: { min: 31, minmargin: "50.9%", max: 36, maxmargin: "57.7%" } },
		{ name: "Sr Business Analyst Domain", experience: "9-12 Years", onsite: { min: 110, minmargin: "29.8%", max: 115, maxmargin: "32.9%" }, offshore: { min: 38, minmargin: "52.9%", max: 43, maxmargin: "54.7%" } },
		{name: "Associate Systems Analyst COTS", experience: "1-3 Years", onsite: { min: 90, minmargin: "35.7%", max: 95, maxmargin: "39.0%" }, offshore: { min: 25, minmargin: "63.5%", max: 30, maxmargin: "69.6%" } },
		{name: "Systems Analyst COTS",experience: "4-8 Years", onsite: { min: 102, minmargin: "30.6%", max: 107, maxmargin: "33.9%" }, offshore: { min: 32, minmargin: "57.2%", max: 37, maxmargin: "63.0%" } },
		{name: "Sr. Systems Analyst COTS", experience: "9-12 Years", onsite: { min: 112, minmargin: "31.1%", max: 117, maxmargin: "34.0%" }, offshore: { min: 36, minmargin: "40.8%", max: 41, maxmargin: "48.0%" } },
		{name: "Associate Data Analyst", experience: "1-3 Years", onsite: { min: 90, minmargin: "32.1%", max: 95, maxmargin: "35.7%" }, offshore: { min: 25, minmargin: "54.3%", max: 30, maxmargin: "62.0%" } },
		 {name: "Data Analyst", experience: "4-8 Years", onsite: { min: 100, minmargin: "29.2%", max: 105, maxmargin: "32.6%" }, offshore: { min: 31, minmargin: "50.9%", max: 36, maxmargin: "57.7%" } },
  		{name: "Sr. Data Analyst", experience: "9-12 Years", onsite: { min: 110, minmargin: "29.8%", max: 115, maxmargin: "32.9%" }, offshore: { min: 45, minmargin: "40.8%", max: 50, maxmargin: "46.7%" } },
		{name: "Associate Data Scientist", experience: "1-3 Years", onsite: { min: 100, minmargin: "35.7%", max: 105, maxmargin: "38.7%" }, offshore: { min: 23, minmargin: "50.4%", max: 28, maxmargin: "59.2%" } },
		{name: "Data Scientist",  experience: "4-8 Years", onsite: { min: 115, minmargin: "32.9%", max: 120, maxmargin: "35.7%" }, offshore: { min: 42, minmargin: "49.3%", max: 47, maxmargin: "54.7%" } },
		{name: "Sr. Data Scientist", experience: "9-12 Years", onsite: { min: 135, minmargin: "33.3%", max: 140, maxmargin: "35.7%" }, offshore: { min: 52, minmargin: "41.5%", max: 57, maxmargin: "46.6%" } },
		{name: "Solution Architect", experience: "8-10 Years", onsite: { min: 150, minmargin: "31.4%", max: 155, maxmargin: "33.6%" }, offshore: { min: 50, minmargin: "46.7%", max: 55, maxmargin: "51.6%" } },
		{name: "Sr. Solution Architect", experience: "11-14 Years", onsite: { min: 165, minmargin: "29.8%", max: 170, maxmargin: "31.9%" }, offshore: { min: 56, minmargin: "42.9%", max: 61, maxmargin: "47.6%" } },
		{name: "Associate Cloud Engineer-Azure/AWS/Google",experience: "1-3 Years", onsite: { min: 115, minmargin: "35.7%", max: 120, maxmargin: "38.3%" }, offshore: { min: 28, minmargin: "72.8%", max: 33, maxmargin: "76.9%" } },
		{name: "Cloud Engineer-Azure/AWS/Google", experience: "4-8 Years", onsite: { min: 125, minmargin: "33.1%", max: 130, maxmargin: "35.7%" }, offshore: { min: 38, minmargin: "49.9%", max: 43, maxmargin: "55.8%" } },
		{name: "Cloud Architect-Azure/AWS/Google", experience: "9-12 Years", onsite: { min: 145, minmargin: "33.4%", max: 150, maxmargin: "35.7%" }, offshore: { min: 47, minmargin: "43.3%", max: 52, maxmargin: "48.8%" } },
		{name: "Associate Engineer-AWS/Redshift/Glue/Azure/Databricks/ADF/Snowflake", experience: "1-3 Years", onsite: { min: 115, minmargin: "35.7%", max: 120, maxmargin: "38.3%" }, offshore: { min: 28, minmargin: "72.8%", max: 33, maxmargin: "76.9%" } },
		{name: "Engineer-AWS/Redshift/Glue/Azure/Databricks/ADF/Snowflake", experience: "4-8 Years", onsite: { min: 130, minmargin: "35.7%", max: 135, maxmargin: "38.0%" }, offshore: { min: 39, minmargin: "51.2%", max: 44, maxmargin: "56.8%" } },
		{name: "Architect-AWS/Redshift/Glue/Azure/Databricks/ADF/Snowflake", experience: "9-12 Years", onsite: { min: 160, minmargin: "35.7%", max: 165, maxmargin: "37.6%" }, offshore: { min: 46, minmargin: "42.1%", max: 51, maxmargin: "47.8%" } },
		{name: "Database Administrator", experience: "6-8 Years", onsite: { min: 120, minmargin: "33.0%", max: 125, maxmargin: "35.7%" }, offshore: { min: 33, minmargin: "65.4%", max: 38, maxmargin: "70.0%" } },
		{name: "Sr. Database Administrator", experience: "9-12 Years", onsite: { min: 135, minmargin: "30.9%", max: 140, maxmargin: "33.4%" }, offshore: { min: 40, minmargin: "50.5%", max: 45, maxmargin: "56.0%" } },
		{name: "Agile Coach",  experience: "6-8 Years", onsite: { min: 125, minmargin: "35.7%", max: 130, maxmargin: "38.1%" }, offshore: { min: 35, minmargin: "56.5%", max: 40, maxmargin: "62.0%" } },
		{name: "Sr. Agile Coach",  experience: "9-12 Years", onsite: { min: 140, minmargin: "35.7%", max: 145, maxmargin: "37.9%" }, offshore: { min: 42, minmargin: "45.7%", max: 47, maxmargin: "51.4%" } },
		{name: "Associate UI/UX Designer", experience: "1-3 Years", onsite: { min: 95, minmargin: "32.3%", max: 100, maxmargin: "35.7%" }, offshore: { min: 26, minmargin: "70.7%", max: 31, maxmargin: "75.5%" } },
		{name: "UI/UX Designer", experience: "4-8 Years", onsite: { min: 110, minmargin: "29.8%", max: 115, maxmargin: "32.9%" }, offshore: { min: 32, minmargin: "64.3%", max: 37, maxmargin: "69.2%" } },
		{name: "Sr. UI/UX Designer", experience: "9-12 Years", onsite: { min: 125, minmargin: "30.5%", max: 130, maxmargin: "33.2%" }, offshore: { min: 38, minmargin: "49.9%", max: 43, maxmargin: "55.8%" } },
		{name: "Associate InfoSec Consultant", experience: "1-3 Years", onsite: { min: 105, minmargin: "32.6%", max: 110, maxmargin: "35.7%" }, offshore: { min: 26, minmargin: "70.7%", max: 31, maxmargin: "75.5%" } },
		{name: "InfoSec Consultant", experience: "4-8 Years", onsite: { min: 110, minmargin: "29.8%", max: 115, maxmargin: "32.9%" }, offshore: { min: 32, minmargin: "57.2%", max: 37, maxmargin: "63.0%" } },
		{name: "Sr. InfoSec Consultant", experience: "9-12 Years", onsite: { min: 120, minmargin: "30.3%", max: 125, maxmargin: "33.1%" }, offshore: { min: 38, minmargin: "49.9%", max: 43, maxmargin: "55.8%" } },
		{name: "Front-end Associate Developer-Angular/ReactJS/API", experience: "1-3 Years", onsite: { min: 100, minmargin: "29.2%", max: 105, maxmargin: "32.6%" }, offshore: { min: 25, minmargin: "57.4%", max: 30, maxmargin: "64.5%" } },
		{name: "Front-end Developer-Angular/ReactJS/API",  experience: "4-8 Years", onsite: { min: 120, minmargin: "35.7%", max: 125, maxmargin: "38.2%" }, offshore: { min: 35, minmargin: "45.7%", max: 40, maxmargin: "52.4%" } },
		{name: "Front-end Sr. Developer-Angular/ReactJS/API",  experience: "9-12 Years", onsite: { min: 130, minmargin: "35.7%", max: 135, maxmargin: "38.0%" }, offshore: { min: 45, minmargin: "40.8%", max: 50, maxmargin: "46.7%" } },
		{name: "RPA Developer", experience: "3-8 Years", onsite: { min: 95, minmargin: "32.3%", max: 100, maxmargin: "35.7%" }, offshore: { min: 26, minmargin: "64.9%", max: 31, maxmargin: "70.5%" } },
		{name: "Sr. RPA Developer", experience: "9-12 Years", onsite: { min: 105, minmargin: "32.6%", max: 110, maxmargin: "35.7%" }, offshore: { min: 32, minmargin: "40.6%", max: 37, maxmargin: "48.6%" } },
		{name: "RPA Transformation Lead",  experience: "8-12 Years", onsite: { min: 120, minmargin: "30.3%", max: 125, maxmargin: "33.1%" }, offshore: { min: 38, minmargin: "39.9%", max: 43, maxmargin: "46.9%" } },
		{name: "RPA Architect", experience: "13-16 Years", onsite: { min: 150, minmargin: "31.4%", max: 155, maxmargin: "33.6%" }, offshore: { min: 45, minmargin: "40.8%", max: 50, maxmargin: "46.7%" } },
		{name: "Associate Mobile Developer-ReactNative/Flutter/Xamarin/NativeIOS/NativeAndroid",  experience: "1-3 Years", onsite: { min: 105, minmargin: "29.5%", max: 110, maxmargin: "32.7%" }, offshore: { min: 26, minmargin: "64.9%", max: 31, maxmargin: "70.5%" } },
		{name: "Mobile Developer-ReactNative/Flutter/Xamarin/NativeIOS/NativeAndroid", experience: "4-8 Years", onsite: { min: 120, minmargin: "30.3%", max: 125, maxmargin: "33.1%" }, offshore: { min: 32, minmargin: "52.4%", max: 37, maxmargin: "58.9%" } },
		{name: "Sr. Mobile Developer-ReactNative/Flutter/Xamarin/NativeIOS/NativeAndroid", experience: "9-12 Years", onsite: { min: 135, minmargin: "30.9%", max: 140, maxmargin: "33.4%" }, offshore: { min: 38, minmargin: "39.9%", max: 43, maxmargin: "46.9%" } },
		{name: "Back-end Associate Developer-.Net/Java/C#/PHP/Python/UNIX/Shell/PERL", experience: "1-3 Years", onsite: { min: 115, minmargin: "35.7%", max: 120, maxmargin: "38.3%" }, offshore: { min: 26, minmargin: "70.7%", max: 31, maxmargin: "75.5%" } },
		{name: "Back-end Developer-.Net/Java/C#/PHP/Python/UNIX/Shell/PERL", experience: "4-8 Years", onsite: { min: 130, minmargin: "35.7%", max: 135, maxmargin: "38.0%" }, offshore: { min: 32, minmargin: "40.6%", max: 37, maxmargin: "48.6%" } },
		{name: "Back-end Sr. Developer-.Net/Java/C#/PHP/Python/UNIX/Shell/PERL", experience: "9-12 Years", onsite: { min: 145, minmargin: "35.7%", max: 150, maxmargin: "37.8%" }, offshore: { min: 38, minmargin: "39.9%", max: 43, maxmargin: "46.9%" } },
		{name: "Associate Full Stack Developer", experience: "1-3 Years", onsite: { min: 120, minmargin: "35.7%", max: 125, maxmargin: "38.2%" }, offshore: { min: 26, minmargin: "64.9%", max: 31, maxmargin: "70.5%" } },
		{name: "Full Stack Developer", experience: "4-8 Years", onsite: { min: 135, minmargin: "35.7%", max: 140, maxmargin: "38.0%" }, offshore: { min: 32, minmargin: "40.6%", max: 37, maxmargin: "48.6%" } },
		{name: "Sr. Full Stack Developer", experience: "9-12 Years", onsite: { min: 145, minmargin: "33.4%", max: 150, maxmargin: "35.7%" }, offshore: { min: 41, minmargin: "40.6%", max: 46, maxmargin: "47.1%" } },
		{name: "Associate Consultant-DevOps/CI-CD/SRE", experience: "1-3 Years", onsite: { min: 120, minmargin: "38.3%", max: 125, maxmargin: "40.8%" }, offshore: { min: 26, minmargin: "70.7%", max: 31, maxmargin: "75.5%" } },
		{name: "Consultant-DevOps/CI-CD/SRE", experience: "4-8 Years", onsite: { min: 135, minmargin: "38.0%", max: 140, maxmargin: "40.3%" }, offshore: { min: 32, minmargin: "52.4%", max: 37, maxmargin: "58.9%" } },
		{name: "Sr. Consultant-DevOps/CI-CD/SRE", experience: "9-12 Years", onsite: { min: 145, minmargin: "35.7%", max: 150, maxmargin: "37.8%" }, offshore: { min: 40, minmargin: "42.9%", max: 45, maxmargin: "49.3%" } },
		{name: "Associate Consultant- Power BI/Tableau/Looker/Qlik",  experience: "1-3 Years", onsite: { min: 120, minmargin: "36.7%", max: 125, maxmargin: "39.3%" }, offshore: { min: 26, minmargin: "70.7%", max: 31, maxmargin: "75.5%" } },
		{name: "Consultant-Power BI/Tableau/Looker/Qlik",  experience: "4-8 Years", onsite: { min: 135, minmargin: "37.1%", max: 140, maxmargin: "39.3%" }, offshore: { min: 32, minmargin: "52.4%", max: 37, maxmargin: "58.9%" } },
		{name: "Sr. Consultant-Power BI/Tableau/Looker/Qlik", experience: "9-12 Years", onsite: { min: 145, minmargin: "35.7%", max: 150, maxmargin: "37.8%" }, offshore: { min: 38, minmargin: "39.9%", max: 43, maxmargin: "46.9%" } },
		{name: "ERP Technical Consultant",  experience: "6-8 Years", onsite: { min: 135, minmargin: "35.7%", max: 140, maxmargin: "38.0%" }, offshore: { min: 35, minmargin: "60.9%", max: 40, maxmargin: "65.8%" } },
		{name: "ERP Sr. Technical Consultant", experience: "9-12 Years", onsite: { min: 145, minmargin: "31.2%", max: 150, maxmargin: "33.5%" }, offshore: { min: 45, minmargin: "49.3%", max: 50, maxmargin: "54.3%" } },
		{name: "ERP Functional Consultant", experience: "6-8 Years", onsite: { min: 130, minmargin: "33.2%", max: 135, maxmargin: "35.7%" }, offshore: { min: 35, minmargin: "67.4%", max: 40, maxmargin: "71.5%" } },
		{name: "ERP Sr Functional Consultant", experience: "9-12 Years", onsite: { min: 140, minmargin: "28.8%", max: 145, maxmargin: "31.2%" }, offshore: { min: 40, minmargin: "46.7%", max: 45, maxmargin: "52.7%" } }		
             ],
 	
UK: [
		{name: "Functional Test Analyst", experience: "1-3 Years", onsite: { min: 385, minmargin: "30.6%", max: 425, maxmargin: "37.1%" }, offshore: { min: 155, minmargin: "75.8%", max: 190, maxmargin: "80.3%" } },
		{name: "Senior Functional Test Analyst", experience: "4-8 Years", onsite: { min: 400, minmargin: "26.8%", max: 440, maxmargin: "33.5%" }, offshore: { min: 198, minmargin: "56.5%", max: 233, maxmargin: "63.1%" } },
		{name: "Functional Test Lead", experience: "8-10 Years", onsite: { min: 450, minmargin: "29.3%", max: 490, maxmargin: "35.1%" }, offshore: { min: 226, minmargin: "52.4%", max: 261, maxmargin: "58.9%" } },
		{name: "Functional Test Architect", experience: "10+ Years", onsite: { min: 530, minmargin: "30.4%", max: 570, maxmargin: "35.3%" }, offshore: { min: 247, minmargin: "45.7%", max: 282, maxmargin: "52.4%" } },
		{name: "Functional Test Manager", experience: "10+ Years", onsite: { min: 530, minmargin: "25.6%", max: 570, maxmargin: "30.8%" }, offshore: { min: 268, minmargin: "43.9%", max: 303, maxmargin: "50.5%" } },
		{name: "Automation Test Analyst", experience: "1-3 Years", onsite: { min: 440, minmargin: "24.8%", max: 480, maxmargin: "31.1%" }, offshore: { min: 190, minmargin: "76.0%", max: 226, maxmargin: "79.8%" } },
		{name: "Senior Automation Test Analyst", experience: "4-8 Years", onsite: { min: 490, minmargin: "27.3%", max: 530, maxmargin: "32.8%" }, offshore: { min: 212, minmargin: "56.9%", max: 247, maxmargin: "63.0%" } },
		{name: "Automation Test Lead", experience: "9-12 Years", onsite: { min: 520, minmargin: "16.8%", max: 560, maxmargin: "22.8%" }, offshore: { min: 261, minmargin: "46.5%", max: 296, maxmargin: "52.9%" } },
		{name: "Automation Test Architect", experience: "12+ Years", onsite: { min: 670, minmargin: "16.4%", max: 710, maxmargin: "21.2%" }, offshore: { min: 317, minmargin: "45.9%", max: 353, maxmargin: "51.3%" } },
		{name: "Performance Test Analyst", experience: "1-3 Years", onsite: { min: 440, minmargin: "24.8%", max: 480, maxmargin: "31.1%" }, offshore: { min: 212, minmargin: "77.2%", max: 247, maxmargin: "80.4%" } },
		{name: "Senior Performance Test Analyst", experience: "4-8 Years", onsite: { min: 490, minmargin: "22.1%", max: 530, maxmargin: "28.0%" }, offshore: { min: 226, minmargin: "54.8%", max: 261, maxmargin: "60.9%" } },
		{name: "Performance Test Lead", experience: "9-12 Years", onsite: { min: 520, minmargin: "11.9%", max: 560, maxmargin: "18.2%" }, offshore: { min: 254, minmargin: "47.2%", max: 289, maxmargin: "53.6%" } },
		{name: "Performance Test Architect", experience: "12+ Years", onsite: { min: 670, minmargin: "16.4%", max: 710, maxmargin: "21.2%" }, offshore: { min: 353, minmargin: "45.2%", max: 388, maxmargin: "50.2%" } },
		{name: "Observability/Chaos/Reliability Engineer",  experience: "4-8 Years", onsite: { min: 520, minmargin: "16.8%", max: 560, maxmargin: "22.8%" }, offshore: { min: 226, minmargin: "52.4%", max: 261, maxmargin: "58.9%" } },
		{name: "Observability/Chaos/Reliability Lead",  experience: "9-12 Years", onsite: { min: 620, minmargin: "13.8%", max: 660, maxmargin: "19.0%" }, offshore: { min: 282, minmargin: "39.1%", max: 317, maxmargin: "45.9%" } },
		{name: "Observability/Chaos/Reliability Architect", experience: "12+ Years", onsite: { min: 700, minmargin: "20.0%", max: 740, maxmargin: "24.4%" }, offshore: { min: 353, minmargin: "39.1%", max: 388, maxmargin: "44.7%" } },
		{name: "Security Test Analyst",  experience: "1-3 Years", onsite: { min: 440, minmargin: "27.7%", max: 480, maxmargin: "33.7%" }, offshore: { min: 212, minmargin: "74.6%", max: 247, maxmargin: "78.3%" } },
		{name: "Senior Security Test Analyst", experience: "4-8 Years", onsite: { min: 490, minmargin: "22.1%", max: 530, maxmargin: "28.0%" }, offshore: { min: 226, minmargin: "47.7%", max: 261, maxmargin: "54.8%" } },
		{name: "Security Test Lead", experience: "9-12 Years", onsite: { min: 640, minmargin: "20.5%", max: 680, maxmargin: "25.2%" }, offshore: { min: 254, minmargin: "40.8%", max: 289, maxmargin: "48.0%" } },
		{name: "Security Test Architect", experience: "12+ Years", onsite: { min: 750, minmargin: "25.4%", max: 790, maxmargin: "29.1%" }, offshore: { min: 367, minmargin: "37.1%", max: 402, maxmargin: "42.6%" } },
		{name: "SDET", experience: "2-6 Years", onsite: { min: 590, minmargin: "35.3%", max: 630, maxmargin: "39.4%" }, offshore: { min: 247, minmargin: "67.4%", max: 282, maxmargin: "71.5%" } },
		{name: "Sr. SDET", experience: "7-10 Years", onsite: { min: 640, minmargin: "28.4%", max: 680, maxmargin: "32.6%" }, offshore: { min: 317, minmargin: "49.3%", max: 353, maxmargin: "54.3%" } },
		{name: "Consultant ATS", experience: "10-14 Years", onsite: { min: 555, minmargin: "26.6%", max: 595, maxmargin: "31.6%" }, offshore: { min: 317, minmargin: "40.8%", max: 353, maxmargin: "46.7%" } },
		{name: "Lead Consultant ATS", experience: "14+ Years", onsite: { min: 670, minmargin: "20.2%", max: 710, maxmargin: "24.7%" }, offshore: { min: 353, minmargin: "39.1%", max: 388, maxmargin: "44.7%" } },
		{name: "Program Manager", experience: "15+ Years", onsite: { min: 750, minmargin: "25.4%", max: 790, maxmargin: "29.1%" }, offshore: { min: 353, minmargin: "45.2%", max: 388, maxmargin: "50.2%" } },
		{name: "RPA Tester",  experience: "1-3 Years", onsite: { min: 425, minmargin: "40.1%", max: 465, maxmargin: "45.3%" }, offshore: { min: 176, minmargin: "72.6%", max: 212, maxmargin: "77.2%" } },
		{name: "Sr. RPA Tester", experience: "4-8 Years", onsite: { min: 550, minmargin: "35.2%", max: 590, maxmargin: "39.6%" }, offshore: { min: 212, minmargin: "56.9%", max: 247, maxmargin: "63.0%" } },
		{name: "Project Manager", experience: "6-8 Years", onsite: { min: 624, minmargin: "34.9%", max: 664, maxmargin: "38.8%" }, offshore: { min: 296, minmargin: "49.3%", max: 332, maxmargin: "54.7%" } },
		{name: "Sr. Project Manager", experience: "9-12 Years", onsite: { min: 670, minmargin: "35.4%", max: 710, maxmargin: "39.0%" }, offshore: { min: 339, minmargin: "49.3%", max: 374, maxmargin: "54.1%" } },
		{name: "Scrum Master", experience: "6-8 Years", onsite: { min: 620, minmargin: "34.5%", max: 660, maxmargin: "38.5%" }, offshore: { min: 233, minmargin: "44.7%", max: 268, maxmargin: "51.9%" } },
		{name: "Sr. Scrum Master", experience: "9-12 Years", onsite: { min: 670, minmargin: "35.4%", max: 710, maxmargin: "39.0%" }, offshore: { min: 282, minmargin: "42.9%", max: 317, maxmargin: "49.3%" } },
		{name: "Associate Business Analyst Domain", experience: "1-3 Years", onsite: { min: 540, minmargin: "39.8%", max: 580, maxmargin: "44.0%" }, offshore: { min: 176, minmargin: "49.8%", max: 212, maxmargin: "58.2%" } },
		{name: "Business Analyst Domain", experience: "4-8 Years", onsite: { min: 600, minmargin: "36.8%", max: 640, maxmargin: "40.8%" }, offshore: { min: 219, minmargin: "50.9%", max: 254, maxmargin: "57.7%" } },
		{name: "Sr. Business Analyst Domain", experience: "9-12 Years", onsite: { min: 700, minmargin: "34.3%", max: 740, maxmargin: "37.8%" }, offshore: { min: 261, minmargin: "48.6%", max: 296, maxmargin: "54.7%" } },
		{name: "Associate Systems Analyst-COTS", experience: "1-3 Years", onsite: { min: 540, minmargin: "39.8%", max: 580, maxmargin: "44.0%" }, offshore: { min: 176, minmargin: "63.5%", max: 212, maxmargin: "69.6%" } },
		{name: "Systems Analyst-COTS", experience: "4-8 Years", onsite: { min: 600, minmargin: "36.8%", max: 640, maxmargin: "40.8%" }, offshore: { min: 226, minmargin: "57.2%", max: 261, maxmargin: "63.0%" } },
		{name: "Sr. Systems Analyst-COTS", experience: "9-12 Years", onsite: { min: 700, minmargin: "34.3%", max: 740, maxmargin: "37.8%" }, offshore: { min: 254, minmargin: "40.8%", max: 289, maxmargin: "48.0%" } },
		{name: "Associate Data Analyst", experience: "1-3 Years", onsite: { min: 440, minmargin: "38.5%", max: 480, maxmargin: "43.6%" }, offshore: { min: 176, minmargin: "54.3%", max: 212, maxmargin: "62.0%" } },
		{name: "Data Analyst", experience: "4-8 Years", onsite: { min: 600, minmargin: "36.8%", max: 640, maxmargin: "40.8%" }, offshore: { min: 219, minmargin: "50.9%", max: 254, maxmargin: "57.7%" } },
		{name: "Sr. Data Analyst", experience: "9-12 Years", onsite: { min: 700, minmargin: "30.4%", max: 740, maxmargin: "34.2%" }, offshore: { min: 317, minmargin: "40.8%", max: 353, maxmargin: "46.7%" } },
		{name: "Associate Data Scientist", experience: "1-3 Years", onsite: { min: 460, minmargin: "35.3%", max: 500, maxmargin: "40.4%" }, offshore: { min: 162, minmargin: "50.4%", max: 198, maxmargin: "59.2%" } },
		{name: "Data Scientist", experience: "4-8 Years", onsite: { min: 670, minmargin: "35.4%", max: 710, maxmargin: "39.0%" }, offshore: { min: 296, minmargin: "49.3%", max: 332, maxmargin: "54.7%" } },
		{name: "Sr. Data Scientist", experience: "9-12 Years", onsite: { min: 800, minmargin: "32.3%", max: 840, maxmargin: "35.5%" }, offshore: { min: 367, minmargin: "41.5%", max: 402, maxmargin: "46.6%" } },
		{name: "Solution Architect", experience: "8-10 Years", onsite: { min: 760, minmargin: "35.9%", max: 800, maxmargin: "39.1%" }, offshore: { min: 353, minmargin: "46.7%", max: 388, maxmargin: "51.6%" } },
		{name: "Sr. Solution Architect", experience: "11-14 Years", onsite: { min: 895, minmargin: "36.5%", max: 935, maxmargin: "39.2%" }, offshore: { min: 395, minmargin: "42.9%", max: 430, maxmargin: "47.6%" } },
		{name: "Associate Cloud Engineer-Azure/AWS/Google", experience: "1-3 Years", onsite: { min: 500, minmargin: "35.0%", max: 540, maxmargin: "39.8%" }, offshore: { min: 198, minmargin: "72.8%", max: 233, maxmargin: "76.9%" } },
		{name: "Cloud Engineer-Azure/AWS/Google", experience: "4-8 Years", onsite: { min: 655, minmargin: "33.9%", max: 695, maxmargin: "37.7%" }, offshore: { min: 268, minmargin: "49.9%", max: 303, maxmargin: "55.8%" } },
		{name: "Cloud Architect-Azure/AWS/Google", experience: "9-12 Years", onsite: { min: 895, minmargin: "33.5%", max: 935, maxmargin: "36.3%" }, offshore: { min: 332, minmargin: "43.3%", max: 367, maxmargin: "48.8%" } },
		{name: "Associate Engineer-AWS/Redshift/Glue/Azure/Databricks/ADF/Snowflake", experience: "1-3 Years", onsite: { min: 525, minmargin: "38.1%", max: 565, maxmargin: "42.5%" }, offshore: { min: 198, minmargin: "72.8%", max: 233, maxmargin: "76.9%" } },
		{name: "Engineer-AWS/Redshift/Glue/Azure/Databricks/ADF/Snowflake", experience: "4-8 Years", onsite: { min: 700, minmargin: "38.1%", max: 740, maxmargin: "41.5%" }, offshore: { min: 275, minmargin: "51.2%", max: 310, maxmargin: "56.8%" } },
		{name: "Architect-AWS/Redshift/Glue/Azure/Databricks/ADF/Snowflake", experience: "9-12 Years", onsite: { min: 945, minmargin: "31.3%", max: 985, maxmargin: "34.0%" }, offshore: { min: 325, minmargin: "42.1%", max: 360, maxmargin: "47.8%" } },
		{name: "Database Administrator", experience: "6-8 Years", onsite: { min: 670, minmargin: "35.4%", max: 710, maxmargin: "39.0%" }, offshore: { min: 233, minmargin: "65.4%", max: 268, maxmargin: "70.0%" } },
		{name: "Sr. Database Administrator", experience: "9-12 Years", onsite: { min: 800, minmargin: "32.3%", max: 840, maxmargin: "35.5%" }, offshore: { min: 282, minmargin: "50.5%", max: 317, maxmargin: "56.0%" } },
		{name: "Agile Coach", experience: "6-8 Years", onsite: { min: 650, minmargin: "37.5%", max: 690, maxmargin: "41.2%" }, offshore: { min: 247, minmargin: "56.5%", max: 282, maxmargin: "62.0%" } },
		{name: "Sr. Agile Coach", experience: "9-12 Years", onsite: { min: 700, minmargin: "34.3%", max: 740, maxmargin: "37.8%" }, offshore: { min: 296, minmargin: "45.7%", max: 332, maxmargin: "51.4%" } },
		{name: "Associate UI/UX Designer", experience: "1-3 Years", onsite: { min: 540, minmargin: "34.8%", max: 580, maxmargin: "39.3%" }, offshore: { min: 183, minmargin: "70.7%", max: 219, maxmargin: "75.5%" } },
		{name: "UI/UX Designer", experience: "4-8 Years", onsite: { min: 620, minmargin: "34.5%", max: 660, maxmargin: "38.5%" }, offshore: { min: 226, minmargin: "64.3%", max: 261, maxmargin: "69.2%" } },
		{name: "Sr. UI/UX Designer", experience: "9-12 Years", onsite: { min: 750, minmargin: "35.0%", max: 790, maxmargin: "38.3%" }, offshore: { min: 268, minmargin: "49.9%", max: 303, maxmargin: "55.8%" } },
		{name: "Associate InfoSec Consultant", experience: "1-3 Years", onsite: { min: 460, minmargin: "35.3%", max: 500, maxmargin: "40.4%" }, offshore: { min: 183, minmargin: "70.7%", max: 219, maxmargin: "75.5%" } },
		{name: "InfoSec Consultant", experience: "4-8 Years", onsite: { min: 580, minmargin: "34.7%", max: 620, maxmargin: "38.9%" }, offshore: { min: 226, minmargin: "57.2%", max: 261, maxmargin: "63.0%" } },
		{name: "Sr. InfoSec Consultant", experience: "9-12 Years", onsite: { min: 790, minmargin: "34.9%", max: 830, maxmargin: "38.0%" }, offshore: { min: 268, minmargin: "49.9%", max: 303, maxmargin: "55.8%" } },
		{name: "Front-end Associate Developer-Angular/ReactJS/API", experience: "1-3 Years", onsite: { min: 460, minmargin: "35.3%", max: 500, maxmargin: "40.4%" }, offshore: { min: 176, minmargin: "57.4%", max: 212, maxmargin: "64.5%" } },
		{name: "Front-end Developer Angular ReactJS API", experience: "4-8 Years", onsite: { min: 565, minmargin: "28.1%", max: 605, maxmargin: "32.9%" }, offshore: { min: 247, minmargin: "45.7%", max: 282, maxmargin: "52.4%" } },
		{name: "Front-end Sr. Developer-Angular/ReactJS/API", experience: "9-12 Years", onsite: { min: 830, minmargin: "34.8%", max: 870, maxmargin: "37.8%" }, offshore: { min: 317, minmargin: "40.8%", max: 353, maxmargin: "46.7%" } },
		{name: "RPA Developer", experience: "3-8 Years", onsite: { min: 460, minmargin: "35.3%", max: 500, maxmargin: "40.4%" }, offshore: { min: 183, minmargin: "64.9%", max: 219, maxmargin: "70.5%" } },
		{name: "Sr. RPA Developer", experience: "9-12 Years", onsite: { min: 680, minmargin: "36.3%", max: 720, maxmargin: "39.8%" }, offshore: { min: 226, minmargin: "40.6%", max: 261, maxmargin: "48.6%" } },
		{name: "RPA Transformation Lead",  experience: "8-12 Years", onsite: { min: 710, minmargin: "35.2%", max: 750, maxmargin: "38.6%" }, offshore: { min: 268, minmargin: "39.9%", max: 303, maxmargin: "46.9%" } },
		{name: "RPA Architect", experience: "13-16 Years", onsite: { min: 800, minmargin: "35.7%", max: 840, maxmargin: "38.8%" }, offshore: { min: 317, minmargin: "40.8%", max: 353, maxmargin: "46.7%" } },
		{name: "Associate Mobile Developer-ReactNative/Flutter/Xamarin/NativeIOS/NativeAndroid" , experience: "1-3 Years", onsite: { min: 500, minmargin: "35.0%", max: 540, maxmargin: "39.8%" }, offshore: { min: 183, minmargin: "64.9%", max: 219, maxmargin: "70.5%" } },
		{name: "Mobile Developer-ReactNative/Flutter/Xamarin/NativeIOS/NativeAndroid" , experience: "4-8 Years", onsite: { min: 580, minmargin: "34.7%", max: 620, maxmargin: "38.9%" }, offshore: { min: 226, minmargin: "52.4%", max: 261, maxmargin: "58.9%" } },
		{name: "Sr. Mobile Developer-ReactNative/Flutter/Xamarin/NativeIOS/NativeAndroid", experience: "9-12 Years", onsite: { min: 670, minmargin: "35.4%", max: 710, maxmargin: "39.0%" }, offshore: { min: 268, minmargin: "39.9%", max: 303, maxmargin: "46.9%" } },
		{name: "Back-End Associate Developer-.Net/Java/C#/PHP/Python/UNIX/Shell/PERL", experience: "1-3 Years", onsite: { min: 500, minmargin: "35.0%", max: 540, maxmargin: "39.8%" }, offshore: { min: 183, minmargin: "70.7%", max: 219, maxmargin: "75.5%" } },
		{name: "Back-End Developer-.Net/Java/C#/PHP/Python/UNIX/Shell/PERL", experience: "4-8 Years", onsite: { min: 670, minmargin: "35.4%", max: 710, maxmargin: "39.0%" }, offshore: { min: 226, minmargin: "40.6%", max: 261, maxmargin: "48.6%" } },
		{name: "Back-End Sr. Developer-.Net/Java/C#/PHP/Python/UNIX/Shell/PERL", experience: "9-12 Years", onsite: { min: 750, minmargin: "35.0%", max: 790, maxmargin: "38.3%" }, offshore: { min: 268, minmargin: "39.9%", max: 303, maxmargin: "46.9%" } },
		{name: "Associate Full Stack Developer", experience: "1-3 Years", onsite: { min: 460, minmargin: "35.3%", max: 500, maxmargin: "40.4%" }, offshore: { min: 183, minmargin: "64.9%", max: 219, maxmargin: "70.5%" } },
		{name: "Full Stack Developer",  experience: "4-8 Years", onsite: { min: 655, minmargin: "29.7%", max: 695, maxmargin: "33.8%" }, offshore: { min: 226, minmargin: "40.6%", max: 261, maxmargin: "48.6%" } },
		{name: "Sr. Full Stack Developer", experience: "9-12 Years", onsite: { min: 730, minmargin: "25.8%", max: 770, maxmargin: "29.7%" }, offshore: { min: 289, minmargin: "40.6%", max: 325, maxmargin: "47.1%" } },
		{name: "Associate Consultant-DevOps/CI-CD/SRE", experience: "1-3 Years", onsite: { min: 460, minmargin: "35.3%", max: 500, maxmargin: "40.4%" }, offshore: { min: 183, minmargin: "70.7%", max: 219, maxmargin: "75.5%" } },
		{name: "Consultant-DevOps/CI-CD/SRE", experience: "4-8 Years", onsite: { min: 655, minmargin: "33.9%", max: 695, maxmargin: "37.7%" }, offshore: { min: 226, minmargin: "52.4%", max: 261, maxmargin: "58.9%" } },
		{name: "Sr. Consultant-DevOps/CI-CD/SRE", experience: "9-12 Years", onsite: { min: 730, minmargin: "33.3%", max: 770, maxmargin: "36.7%" }, offshore: { min: 282, minmargin: "42.9%", max: 317, maxmargin: "49.3%" } },
		{name: "Associate Consultant-Power BI/Tableau/Looker/Qlik", experience: "1-3 Years", onsite: { min: 460, minmargin: "35.3%", max: 500, maxmargin: "40.4%" }, offshore: { min: 183, minmargin: "70.7%", max: 219, maxmargin: "75.5%" } },
		{name: "Consultant-Power BI/Tableau/Looker/Qlik", experience: "4-8 Years", onsite: { min: 655, minmargin: "29.7%", max: 695, maxmargin: "33.8%" }, offshore: { min: 226, minmargin: "52.4%", max: 261, maxmargin: "58.9%" } },
		{name: "Sr. Consultant-Power BI/Tableau/Looker/Qlik", experience: "9-12 Years", onsite: { min: 730, minmargin: "25.8%", max: 770, maxmargin: "29.7%" }, offshore: { min: 268, minmargin: "39.9%", max: 303, maxmargin: "46.9%" } },
		{name: "ERP Technical Consultant", experience: "6-8 Years", onsite: { min: 675, minmargin: "35.8%", max: 715, maxmargin: "39.4%" }, offshore: { min: 247, minmargin: "60.9%", max: 282, maxmargin: "65.8%" } },
		{name: "ERP Sr Technical Consultant", experience: "9-12 Years", onsite: { min: 750, minmargin: "35.0%", max: 790, maxmargin: "38.3%" }, offshore: { min: 317, minmargin: "49.3%", max: 353, maxmargin: "54.3%" } },
		{name: "ERP Functional Consultant", experience: "6-8 Years", onsite: { min: 625, minmargin: "35.0%", max: 665, maxmargin: "38.9%" }, offshore: { min: 247, minmargin: "67.4%", max: 282, maxmargin: "71.5%" } },	
		{name: "ERP Sr Functional Consultant", experience: "9-12 Years", onsite: { min: 720, minmargin: "36.1%", max: 760, maxmargin: "39.4%" }, offshore: { min: 282, minmargin: "46.7%", max: 317, maxmargin: "52.7%" } }

 ],

Canada:[
                { name: "Functional Test Analyst", experience: "1-3 Years", onsite: { min: 75, minmargin: "35.7%", max: 80, maxmargin: "39.7%" }, offshore: { min: 29, minmargin: "75.8%", max: 36, maxmargin: "80.3%" } },
		{ name: "Senior Functional Test Analyst", experience: "4-8 Years", onsite: { min: 85, minmargin: "32.6%", max: 90, maxmargin: "36.4%" }, offshore: { min: 38, minmargin: "56.5%", max: 44, maxmargin: "63.1%" } },
		{ name: "Functional Test Lead", experience: "8-10 Years", onsite: { min: 100, minmargin: "33.7%", max: 105, maxmargin: "36.9%" }, offshore: { min: 43, minmargin: "52.4%", max: 50, maxmargin: "58.9%" } }, 	
		{ name: "Functional Test Architect", experience: "10+ Years", onsite: { min: 115, minmargin: "34.5%", max: 125, maxmargin: "39.7%" }, offshore: { min: 47, minmargin: "45.7%", max: 54, maxmargin: "52.4%" } }, 
		{ name: "Functional Test Manager", experience: "10+ Years", onsite: { min: 115, minmargin: "34.5%", max: 120, maxmargin: "37.2%" }, offshore: { min: 51, minmargin: "43.9%", max: 58, maxmargin: "50.5%" } }, 
		{ name: "Automation Test Analyst", experience: "1-3 Years", onsite: { min: 80, minmargin: "36.0%", max: 85, maxmargin: "39.7%" }, offshore: { min: 36, minmargin: "76.0%", max: 43, maxmargin: "79.8%" } }, 
		{ name: "Senior Automation Test Analyst", experience: "4-8 Years", onsite: { min: 90, minmargin: "36.4%", max: 95, maxmargin: "39.7%" }, offshore: { min: 40, minmargin: "56.9%", max: 47, maxmargin: "63.0%" } }, 
		{ name: "Automation Test Lead", experience: "9-12 Years", onsite: { min: 110, minmargin: "34.2%", max: 115, maxmargin: "37.1%" }, offshore: { min: 50, minmargin: "46.5%", max: 56, maxmargin: "52.9%" } }, 
		{ name: "Automation Test Architect", experience: "12+ Years", onsite: { min: 125, minmargin: "34.9%", max: 135, maxmargin: "39.7%" }, offshore: { min: 60, minmargin: "45.9%", max: 67, maxmargin: "51.3%" } }, 
		{ name: "Performance Test Analyst", experience: "1-3 Years", onsite: { min: 85, minmargin: "36.2%", max: 90, maxmargin: "39.7%" }, offshore: { min: 40, minmargin: "77.2%", max: 47, maxmargin: "80.4%" } }, 
		{ name: "Senior Performance Test Analyst", experience: "4-8 Years", onsite: { min: 95, minmargin: "36.6%", max: 100, maxmargin: "39.7%" }, offshore: { min: 43, minmargin: "54.8%", max: 50, maxmargin: "60.9%" } }, 
		{ name: "Performance Test Lead", experience: "9-12 Years", onsite: { min: 110, minmargin: "37.0%", max: 115, maxmargin: "39.7%" }, offshore: { min: 48, minmargin: "47.2%", max: 55, maxmargin: "53.6%" } }, 
		{ name: "Performance Test Architect", experience: "12+ Years", onsite: { min: 130, minmargin: "37.4%", max: 140, maxmargin: "41.9%" }, offshore: { min: 67, minmargin: "45.2%", max: 74, maxmargin: "50.2%" } }, 
		{ name: "Observability/Chaos/Reliability Engineer", experience: "4-8 Years", onsite: { min: 110, minmargin: "34.2%", max: 115, maxmargin: "37.1%" }, offshore: { min: 43, minmargin: "52.4%", max: 50, maxmargin: "58.9%" } }, 
		{ name: "Observability/Chaos/Reliability Lead", experience: "9-12 Years", onsite: { min: 120, minmargin: "34.7%", max: 125, maxmargin: "37.3%" }, offshore: { min: 54, minmargin: "39.1%", max: 60, maxmargin: "45.9%" } }, 
		{ name: "Observability/Chaos/Reliability Architect", experience: "12+ Years", onsite: { min: 135, minmargin: "35.3%", max: 145, maxmargin: "39.7%" }, offshore: { min: 67, minmargin: "39.1%", max: 74, maxmargin: "44.7%" } }, 
		{ name: "Security Test Analyst", experience: "1-3 Years", onsite: { min: 95, minmargin: "36.6%", max: 100, maxmargin: "39.7%" }, offshore: { min: 40, minmargin: "74.6%", max: 47, maxmargin: "78.3%" } },
		{ name: "Senior Security Test Analyst", experience: "4-8 Years", onsite: { min: 110, minmargin: "34.2%", max: 115, maxmargin: "37.1%" }, offshore: { min: 43, minmargin: "47.7%", max: 50, maxmargin: "54.8%" } }, 
		{ name: "Security Test Lead", experience: "9-12 Years", onsite: { min: 125, minmargin: "34.9%", max: 130, maxmargin: "37.4%" }, offshore: { min: 48, minmargin: "40.8%", max: 55, maxmargin: "48.0%" } }, 
		{ name: "Security Test Architect", experience: "12+ Years", onsite: { min: 140, minmargin: "35.4%", max: 150, maxmargin: "39.7%" }, offshore: { min: 70, minmargin: "37.1%", max: 76, maxmargin: "42.6%" } }, 
		{ name: "SDET", experience: "2-6 Years", onsite: { min: 105, minmargin: "34.0%", max: 110, maxmargin: "37.0%" }, offshore: { min: 47, minmargin: "67.4%", max: 54, maxmargin: "71.5%" } }, 
		{ name: "Sr. SDET", experience: "7-10 Years", onsite: { min: 115, minmargin: "34.5%", max: 120, maxmargin: "37.2%" }, offshore: { min: 60, minmargin: "49.3%", max: 67, maxmargin: "54.3%" } }, 
		{ name: "Consultant-ATS", experience: "10-14 Years", onsite: { min: 135, minmargin: "35.3%", max: 145, maxmargin: "39.7%" }, offshore: { min: 60, minmargin: "40.8%", max: 67, maxmargin: "46.7%" } }, 
		{ name: "Lead Consultant-ATS", experience: "14+ Years", onsite: { min: 140, minmargin: "35.4%", max: 150, maxmargin: "39.7%" }, offshore: { min: 67, minmargin: "39.1%", max: 74, maxmargin: "44.7%" } }, 
		{ name: "Program Manager", experience: "15+ Years", onsite: { min: 150, minmargin: "35.7%", max: 160, maxmargin: "39.7%" }, offshore: { min: 67, minmargin: "45.2%", max: 74, maxmargin: "50.2%" } }, 
		{ name: "RPA Tester", experience: "1-3 Years", onsite: { min: 90, minmargin: "33.0%", max: 100, maxmargin: "39.7%" }, offshore: { min: 34, minmargin: "72.6%", max: 40, maxmargin: "77.2%" } }, 
		{ name: "Sr. RPA Tester", experience: "4-8 Years", onsite: { min: 105, minmargin: "36.9%", max: 115, maxmargin: "42.3%" }, offshore: { min: 40, minmargin: "56.9%", max: 47, maxmargin: "63.0%" } }, 
		{ name: "Project Manager", experience: "6-8 Years", onsite: { min: 105, minmargin: "36.9%", max: 110, maxmargin: "39.7%" }, offshore: { min: 57, minmargin: "49.9%", max: 63, maxmargin: "54.7%" } }, 
		{ name: "Sr. Project Manager", experience: "9-12 Years", onsite: { min: 110, minmargin: "31.5%", max: 115, maxmargin: "34.5%" }, offshore: { min: 65, minmargin: "49.8%", max: 72, maxmargin: "54.7%" } }, 
		{ name: "Scrum Master", experience: "6-8 Years", onsite: { min: 100, minmargin: "30.7%", max: 105, maxmargin: "34.0%" }, offshore: { min: 45, minmargin: "45.6%", max: 51, maxmargin: "52.0%" } }, 
		 { name: "Sr. Scrum Master", experience: "9-12 Years", onsite: { min: 105, minmargin: "25.4%", max: 110, maxmargin: "28.8%" }, offshore: { min: 54, minmargin: "43.4%", max: 61, maxmargin: "49.9%" } }, 
		{ name: "Associate Business Analyst Domain", experience: "1-3 Years", onsite: { min: 80, minmargin: "36.0%", max: 85, maxmargin: "39.7%" }, offshore: { min: 34, minmargin: "50.5%", max: 41, maxmargin: "59.0%" } }, 
		{ name: "Business Analyst Domain", experience: "4-8 Years", onsite: { min: 90, minmargin: "33.0%", max: 95, maxmargin: "36.6%" }, offshore: { min: 42, minmargin: "51.5%", max: 49, maxmargin: "58.4%" } },
		{ name: "Sr. Business Analyst Domain", experience: "9-12 Years", onsite: { min: 110, minmargin: "34.2%", max: 115, maxmargin: "37.1%" }, offshore: { min: 50, minmargin: "49.0%", max: 57, maxmargin: "55.3%" } }, 
		{ name: "Associate Systems Analyst-COTS", experience: "1-3 Years", onsite: { min: 80, minmargin: "36.0%", max: 85, maxmargin: "39.7%" }, offshore: { min: 34, minmargin: "64.0%", max: 41, maxmargin: "70.2%" } }, 
		{ name: "Systems Analyst-COTS", experience: "4-8 Years", onsite: { min: 95, minmargin: "36.6%", max: 100, maxmargin: "39.7%" }, offshore: { min: 43, minmargin: "57.3%", max: 50, maxmargin: "63.3%" } }, 
		{ name: "Sr Systems Analyst-COTS", experience: "9-12 Years", onsite: { min: 110, minmargin: "34.2%", max: 115, maxmargin: "37.1%" }, offshore: { min: 49, minmargin: "41.7%", max: 55, maxmargin: "48.1%" } }, 
		{ name: "Associate Data Analyst", experience: "1-3 Years", onsite: { min: 85, minmargin: "36.2%", max: 90, maxmargin: "39.7%" }, offshore: { min: 34, minmargin: "55.0%", max: 41, maxmargin: "62.7%" } }, 
		{ name: "Data Analyst", experience: "4-8 Years", onsite: { min: 95, minmargin: "36.6%", max: 100, maxmargin: "39.7%" }, offshore: { min: 42, minmargin: "51.5%", max: 49, maxmargin: "58.4%" } }, 
		{ name: "Sr. Data Analyst", experience: "9-12 Years", onsite: { min: 100, minmargin: "33.7%", max: 105, maxmargin: "36.9%" }, offshore: { min: 61, minmargin: "41.5%", max: 67, maxmargin: "46.7%" } }, 
		{ name: "Associate Data Scientist", experience: "1-3 Years", onsite: { min: 85, minmargin: "36.2%", max: 90, maxmargin: "39.7%" }, offshore: { min: 31, minmargin: "50.7%", max: 38, maxmargin: "59.8%" } }, 
		{ name: "Data Scientist", experience: "4-8 Years", onsite: { min: 95, minmargin: "36.6%", max: 100, maxmargin: "39.7%" }, offshore: { min: 57, minmargin: "49.9%", max: 63, maxmargin: "54.7%" } }, 
		{ name: "Sr. Data Scientist", experience: "9-12 Years", onsite: { min: 115, minmargin: "31.9%", max: 120, maxmargin: "34.7%" }, offshore: { min: 70, minmargin: "41.7%", max: 77, maxmargin: "47.0%" } }, 
		{ name: "Solution Architect", experience: "8-10 Years", onsite: { min: 130, minmargin: "30.5%", max: 135, maxmargin: "33.0%" }, offshore: { min: 67, minmargin: "46.7%", max: 74, maxmargin: "51.8%" } }, 
		{ name: "Sr. Solution Architect", experience: "11-14 Years", onsite: { min: 140, minmargin: "22.5%", max: 145, maxmargin: "25.2%" }, offshore: { min: 76, minmargin: "43.7%", max: 82, maxmargin: "47.8%" } }, 
		{ name: "Associate Cloud Engineer", experience: "1-3 Years", onsite: { min: 95, minmargin: "33.4%", max: 100, maxmargin: "36.7%" }, offshore: { min: 38, minmargin: "73.2%", max: 45, maxmargin: "77.3%" } }, 
		{ name: "Cloud Engineer", experience: "4-8 Years", onsite: { min: 110, minmargin: "34.2%", max: 115, maxmargin: "37.1%" }, offshore: { min: 51, minmargin: "50.0%", max: 58, maxmargin: "56.1%" } }, 
		 { name: "Cloud Architect", experience: "9-12 Years", onsite: { min: 120, minmargin: "34.7%", max: 125, maxmargin: "37.3%" }, offshore: { min: 63, minmargin: "43.4%", max: 70, maxmargin: "49.0%" } }, 
		{ name: "Associate Engineer-AWS/Redshift/Glue/Azure/Databricks/ADF/Snowflake", experience: "1-3 Years", onsite: { min: 100, minmargin: "33.7%", max: 105, maxmargin: "36.9%" }, offshore: { min: 38, minmargin: "73.2%", max: 45, maxmargin: "77.3%" } }, 
		{ name: "Engineer-AWS/Redshift/Glue/Azure/Databricks/ADF/Snowflake", experience: "4-8 Years", onsite: { min: 115, minmargin: "34.5%", max: 120, maxmargin: "37.2%" }, offshore: { min: 53, minmargin: "51.9%", max: 59, maxmargin: "56.8%" } }, 
		{ name: "Architect-AWS/Redshift/Glue/Azure/Databricks/ADF/Snowflake", experience: "9-12 Years", onsite: { min: 125, minmargin: "34.9%", max: 130, maxmargin: "37.4%" }, offshore: { min: 62, minmargin: "42.4%", max: 69, maxmargin: "48.3%" } }, 
		{ name: "Database Administrator", experience: "6-8 Years", onsite: { min: 95, minmargin: "36.6%", max: 100, maxmargin: "39.7%" }, offshore: { min: 45, minmargin: "66.0%", max: 51, maxmargin: "70.0%" } }, 
		{ name: "Sr. Database Administrator", experience: "9-12 Years", onsite: { min: 110, minmargin: "34.2%", max: 115, maxmargin: "37.1%" }, offshore: { min: 54, minmargin: "50.9%", max: 61, maxmargin: "56.5%" } }, 
		{ name: "Agile Coach", experience: "6-8 Years", onsite: { min: 110, minmargin: "34.2%", max: 115, maxmargin: "37.1%" }, offshore: { min: 47, minmargin: "56.6%", max: 54, maxmargin: "62.2%" } }, 
		{ name: "Sr. Agile Coach", experience: "9-12 Years", onsite: { min: 120, minmargin: "34.7%", max: 125, maxmargin: "37.3%" }, offshore: { min: 57, minmargin: "46.3%", max: 63, maxmargin: "51.5%" } }, 
		{ name: "Associate UI/UX Designer", experience: "1-3 Years", onsite: { min: 90, minmargin: "36.4%", max: 95, maxmargin: "39.7%" }, offshore: { min: 35, minmargin: "70.9%", max: 42, maxmargin: "75.7%" } }, 
		{ name: "UI/UX Designer", experience: "4-8 Years", onsite: { min: 100, minmargin: "33.7%", max: 105, maxmargin: "36.9%" }, offshore: { min: 43, minmargin: "64.4%", max: 50, maxmargin: "69.4%" } }, 
		{ name: "Senior UI/UX Designer", experience: "9-12 Years", onsite: { min: 110, minmargin: "31.5%", max: 115, maxmargin: "34.5%" }, offshore: { min: 51, minmargin: "50.0%", max: 58, maxmargin: "56.1%" } }, 
		{ name: "Associate InfoSec Consultant", experience: "1-3 Years", onsite: { min: 105, minmargin: "25.4%", max: 110, maxmargin: "28.8%" }, offshore: { min: 35, minmargin: "70.9%", max: 42, maxmargin: "75.7%" } }, 
		{ name: "InfoSec Consultant", experience: "4-8 Years", onsite: { min: 120, minmargin: "29.7%", max: 125, maxmargin: "32.5%" }, offshore: { min: 43, minmargin: "57.3%", max: 50, maxmargin: "63.3%" } }, 
		{ name: "Senior InfoSec Consultant", experience: "9-12 Years", onsite: { min: 130, minmargin: "30.5%", max: 135, maxmargin: "33.0%" }, offshore: { min: 51, minmargin: "50.0%", max: 58, maxmargin: "56.1%" } }, 
		{ name: "Front-end Associate Developer-Angular/ReactJS/API", experience: "1-3 Years", onsite: { min: 95, minmargin: "36.6%", max: 100, maxmargin: "39.7%" }, offshore: { min: 34, minmargin: "58.0%", max: 41, maxmargin: "65.2%" } }, 
		{ name: "Front-end Developer-Angular/ReactJS/API", experience: "4-8 Years", onsite: { min: 105, minmargin: "34.0%", max: 110, maxmargin: "37.0%" }, offshore: { min: 47, minmargin: "45.8%", max: 54, maxmargin: "52.8%" } }, 
		{ name: "Front-end Senior Developer-Angular/ReactJS/API", experience: "9-12 Years", onsite: { min: 120, minmargin: "34.7%", max: 125, maxmargin: "37.3%" }, offshore: { min: 61, minmargin: "41.5%", max: 67, maxmargin: "46.7%" } }, 
		{ name: "RPA Developer", experience: "3-8 Years", onsite: { min: 95, minmargin: "36.6%", max: 100, maxmargin: "39.7%" }, offshore: { min: 35, minmargin: "65.0%", max: 42, maxmargin: "70.9%" } }, 
		{ name: "Sr. RPA Developer", experience: "9-12 Years", onsite: { min: 105, minmargin: "36.9%", max: 110, maxmargin: "39.7%" }, offshore: { min: 43, minmargin: "40.7%", max: 50, maxmargin: "49.0%" } },
		{ name: "RPA Transformation Lead",  experience: "8-12 Years", onsite: { min: 120, minmargin: "34.7%", max: 125, maxmargin: "37.3%" }, offshore: { min: 51, minmargin: "40.0%", max: 58, maxmargin: "47.3%" } },
		{ name: "RPA Architect", experience: "13-16 Years", onsite: { min: 130, minmargin: "35.1%", max: 135, maxmargin: "37.5%" }, offshore: { min: 61, minmargin: "41.5%", max: 67, maxmargin: "46.7%" } },
		{ name: "Associate Mobile Developer-ReactNative/Flutter/Xamarin/NativeIOS/NativeAndroid", experience: "1-3 Years", onsite: { min: 85, minmargin: "36.2%", max: 90, maxmargin: "39.7%" }, offshore: { min: 35, minmargin: "65.0%", max: 42, maxmargin: "70.9%" } },
		{ name: "Mobile Developer-ReactNative/Flutter/Xamarin/Native/IOS/NativeAndroid", experience: "4-8 Years", onsite: { min: 100, minmargin: "33.7%", max: 105, maxmargin: "36.9%" }, offshore: { min: 43, minmargin: "52.6%", max: 50, maxmargin: "59.2%" } },
		{ name: "Sr. Mobile Developer-ReactNative/Flutter/Xamarin/NativeIOS/NativeAndroid", experience: "9-12 Years", onsite: { min: 115, minmargin: "31.9%", max: 120, maxmargin: "34.7%" }, offshore: { min: 51, minmargin: "40.0%", max: 58, maxmargin: "47.3%" } },
		{ name: "Back-endAssociate Developer-.Net/Java/C#/PHP/Python/UNIX/Shell/PERL", experience: "1-3 Years", onsite: { min: 90, minmargin: "29.7%", max: 95, maxmargin: "33.4%" }, offshore: { min: 35, minmargin: "70.9%", max: 42, maxmargin: "75.7%" } },
		{ name: "Back-end Developer-.Net/Java/C#/PHP/Python/UNIX/Shell/PERL", experience: "4-8 Years", onsite: { min: 105, minmargin: "36.9%", max: 110, maxmargin: "39.7%" }, offshore: { min: 43, minmargin: "40.7%", max: 50, maxmargin: "49.0%" } },
		{ name: "Back-end Sr. Developer-.Net/Java/C#/PHP/Python/UNIX/Shell/PERL", experience: "9-12 Years", onsite: { min: 120, minmargin: "37.2%", max: 125, maxmargin: "39.7%" }, offshore: { min: 51, minmargin: "40.0%", max: 58, maxmargin: "47.3%" } },
		{ name: "Associate Full Stack Developer", experience: "1-3 Years", onsite: { min: 95, minmargin: "36.6%", max: 100, maxmargin: "39.7%" }, offshore: { min: 35, minmargin: "65.0%", max: 42, maxmargin: "70.9%" } },
		{ name: "Full Stack Developer", experience: "4-8 Years", onsite: { min: 110, minmargin: "37.0%", max: 115, maxmargin: "39.7%" }, offshore: { min: 43, minmargin: "40.7%", max: 50, maxmargin: "49.0%" } },
		{ name: "Sr. Full Stack Developer", experience: "9-12 Years", onsite: { min: 120, minmargin: "34.7%", max: 125, maxmargin: "37.3%" }, offshore: { min: 55, minmargin: "40.7%", max: 62, maxmargin: "47.4%" } },
		{ name: "Associate Consultant-DevOps/CI-CD/SRE", experience: "1-3 Years", onsite: { min: 95, minmargin: "36.6%", max: 100, maxmargin: "39.7%" }, offshore: { min: 35, minmargin: "70.9%", max: 42, maxmargin: "75.7%" } },
		{ name: "Consultant-DevOps/CI-CD/SRE", experience: "4-8 Years", onsite: { min: 110, minmargin: "34.2%", max: 115, maxmargin: "37.1%" }, offshore: { min: 43, minmargin: "40.7%", max: 50, maxmargin: "49.0%" } },
		{ name: "Sr. Consultant-DevOps/CI-CD/SRE", experience: "9-12 Years", onsite: { min: 125, minmargin: "32.3%", max: 130, maxmargin: "35.0%" }, offshore: { min: 51, minmargin: "40.0%", max: 58, maxmargin: "47.3%" } },
		{ name: "ERP Technical Consultant", experience: "6-8 Years", onsite: { min: 125, minmargin: "37.3%", max: 130, maxmargin: "39.7%" }, offshore: { min: 47, minmargin: "61.0%", max: 54, maxmargin: "66.0%" } },
		{ name: "ERP Sr. Technical Consultant", experience: "9-12 Years", onsite: { min: 135, minmargin: "33.0%", max: 140, maxmargin: "35.4%" }, offshore: { min: 61, minmargin: "49.9%", max: 67, maxmargin: "54.3%" } },
		{ name: "ERP Functional Consultant", experience: "6-8 Years", onsite: { min: 120, minmargin: "42.2%", max: 125, maxmargin: "44.5%" }, offshore: { min: 47, minmargin: "67.5%", max: 54, maxmargin: "71.7%" } },
		{name: "ERP Sr. Functional Consultant", experience: "9-12 Years", onsite: { min: 130, minmargin: "35.1%", max: 135, maxmargin: "37.5%" }, offshore: { min: 54, minmargin: "47.1%", max: 61, maxmargin: "53.2%" } }
       ],
UAE: [
		{ "name": "Functional Test Analyst", "experience": "1-3 Years", "onsite": { "min": 900, "minmargin": "44.8%", "max": 940, "maxmargin": "47.1%" }, "offshore": { "min": 450, "minmargin": "63.1%", "max": 490, "maxmargin": "66.1%" } },
		{ "name": "Senior Functional Test Analyst", "experience": "4-8 Years", "onsite": { "min": 1300, "minmargin": "44.8%", "max": 1340, "maxmargin": "46.4%" }, "offshore": { "min": 550, "minmargin": "48.3%", "max": 590, "maxmargin": "51.8%" } },
		{ "name": "Functional Test Lead", "experience": "8-10 Years", "onsite": { "min": 1650, "minmargin": "39.7%", "max": 1690, "maxmargin": "41.2%" }, "offshore": { "min": 800, "minmargin": "40.7%", "max": 740, "maxmargin": "35.9%" } },
		{ "name": "Functional Test Architect", "experience": "10+ Years", "onsite": { "min": 2200, "minmargin": "42.3%", "max": 2280, "maxmargin": "44.3%" }, "offshore": { "min": 1200, "minmargin": "50.6%", "max": 1240, "maxmargin": "52.2%" } },
		{ "name": "Functional Test Manager", "experience": "10+ Years", "onsite": { "min": 2050, "minmargin": "32.6%", "max": 2090, "maxmargin": "33.9%" }, "offshore": { "min": 1200, "minmargin": "44.7%", "max": 1240, "maxmargin": "46.5%" } },
		{ "name": "Automation Test Analyst", "experience": "1-3 Years", "onsite": { "min": 1100, "minmargin": "44.8%", "max": 1140, "maxmargin": "46.7%" }, "offshore": { "min": 500, "minmargin": "59.7%", "max": 540, "maxmargin": "62.7%" } },
		{ "name": "Senior Automation Test Analyst", "experience": "4-8 Years", "onsite": { "min": 1350, "minmargin": "46.8%", "max": 1390, "maxmargin": "48.3%" }, "offshore": { "min": 650, "minmargin": "56.2%", "max": 690, "maxmargin": "58.8%" } },
		{ "name": "Automation Test Lead", "experience": "9-12 Years", "onsite": { "min": 1700, "minmargin": "46.4%", "max": 1740, "maxmargin": "47.6%" }, "offshore": { "min": 950, "minmargin": "37.6%", "max": 840, "maxmargin": "29.4%" } },
		{ "name": "Automation Test Architect", "experience": "12+ Years", "onsite": { "min": 2400, "minmargin": "42.5%", "max": 2480, "maxmargin": "44.3%" }, "offshore": { "min": 1300, "minmargin": "41.6%", "max": 1240, "maxmargin": "38.8%" } },
		{ "name": "Performance Test Analyst", "experience": "1-3 Years", "onsite": { "min": 1000, "minmargin": "44.8%", "max": 1040, "maxmargin": "46.9%" }, "offshore": { "min": 500, "minmargin": "57.3%", "max": 540, "maxmargin": "60.5%" } },
		{ "name": "Senior Performance Test Analyst", "experience": "4-8 Years", "onsite": { "min": 1600, "minmargin": "37.9%", "max": 1640, "maxmargin": "39.4%" }, "offshore": { "min": 650, "minmargin": "56.2%", "max": 690, "maxmargin": "58.8%" } },
		{ "name": "Performance Test Lead", "experience": "9-12 Years", "onsite": { "min": 2050, "minmargin": "32.6%", "max": 2090, "maxmargin": "33.9%" }, "offshore": { "min": 950, "minmargin": "37.6%", "max": 840, "maxmargin": "29.4%" } },
		{ "name": "Performance Test Architect", "experience": "12+ Years", "onsite": { "min": 2500, "minmargin": "33.7%", "max": 2580, "maxmargin": "35.8%" }, "offshore": { "min": 1300, "minmargin": "48.9%", "max": 1240, "maxmargin": "46.5%" } },
		{ "name": "Observability/Chaos/Reliability Engineer", "experience": "4-8 Years", "onsite": { "min": 1300, "minmargin": "44.8%", "max": 1340, "maxmargin": "46.4%" }, "offshore": { "min": 800, "minmargin": "40.7%", "max": 840, "maxmargin": "43.5%" } },
		{ "name": "Observability/Chaos/Reliability Lead", "experience": "9-12 Years", "onsite": { "min": 1800, "minmargin": "41.7%", "max": 1840, "maxmargin": "43.0%" }, "offshore": { "min": 1100, "minmargin": "31.0%", "max": 1030, "maxmargin": "26.3%" } },
		{ "name": "Observability/Chaos/Reliability Architect", "experience": "12+ Years", "onsite": { "min": 2850, "minmargin": "41.9%", "max": 2930, "maxmargin": "43.4%" }, "offshore": { "min": 1500, "minmargin": "36.8%", "max": 1540, "maxmargin": "38.4%" } },
		{ "name": "Security Test Analyst", "experience": "1-3 Years", "onsite": { "min": 1300, "minmargin": "44.8%", "max": 1340, "maxmargin": "46.4%" }, "offshore": { "min": 700, "minmargin": "66.1%", "max": 740, "maxmargin": "68.0%" } },
		{ "name": "Senior Security Test Analyst", "experience": "4-8 Years", "onsite": { "min": 1800, "minmargin": "44.8%", "max": 1840, "maxmargin": "46.0%" }, "offshore": { "min": 800, "minmargin": "52.6%", "max": 840, "maxmargin": "54.8%" } },
		{ "name": "Security Test Lead", "experience": "9-12 Years", "onsite": { "min": 2500, "minmargin": "41.5%", "max": 2540, "maxmargin": "42.4%" }, "offshore": { "min": 1050, "minmargin": "39.0%", "max": 1030, "maxmargin": "37.8%" } },
		{ "name": "Security Test Architect", "experience": "12+ Years", "onsite": { "min": 2850, "minmargin": "41.9%", "max": 2930, "maxmargin": "43.4%" }, "offshore": { "min": 1500, "minmargin": "36.8%", "max": 1540, "maxmargin": "38.4%" } },
		{ "name": "SDET", "experience": "2-6 Years", "onsite": { "min": 1750, "minmargin": "43.2%", "max": 1790, "maxmargin": "44.5%" }, "offshore": { "min": 1092, "minmargin": "67.4%", "max": 1132, "maxmargin": "68.6%" } },
		{ "name": "Sr. SDET", "experience": "7-10 Years", "onsite": { "min": 2400, "minmargin": "42.5%", "max": 2440, "maxmargin": "43.4%" }, "offshore": { "min": 1404, "minmargin": "49.3%", "max": 1444, "maxmargin": "50.7%" } },
		{ "name": "Consultant - ATS", "experience": "10-14 Years", "onsite": { "min": 2700, "minmargin": "42.7%", "max": 2740, "maxmargin": "43.6%" }, "offshore": { "min": 1404, "minmargin": "40.9%", "max": 1444, "maxmargin": "42.5%" } },
		{ "name": "Lead Consultant - ATS", "experience": "14+ Years", "onsite": { "min": 3350, "minmargin": "42.3%", "max": 3390, "maxmargin": "43.0%" }, "offshore": { "min": 1560, "minmargin": "39.2%", "max": 1600, "maxmargin": "40.7%" } },
		{ "name": "Program Manager", "experience": "15+ Years", "onsite": { "min": 3350, "minmargin": "42.3%", "max": 3390, "maxmargin": "43.0%" }, "offshore": { "min": 1560, "minmargin": "45.3%", "max": 1600, "maxmargin": "46.6%" } },
		{ "name": "RPA Tester", "experience": "1-3 Years", "onsite": { "min": 1400, "minmargin": "39.3%", "max": 1440, "maxmargin": "41.0%" }, "offshore": { "min": 780, "minmargin": "72.6%", "max": 820, "maxmargin": "74.0%" } },
		{ "name": "Sr. RPA Tester", "experience": "4-8 Years", "onsite": { "min": 1550, "minmargin": "40.9%", "max": 1590, "maxmargin": "42.4%" }, "offshore": { "min": 936, "minmargin": "56.9%", "max": 976, "maxmargin": "58.7%" } },
		{ "name": "Project Manager", "experience": "3-8 Years", "onsite": { "min": 2000, "minmargin": "36.5%", "max": 2040, "maxmargin": "37.7%" }, "offshore": { "min": 1310, "minmargin": "49.3%", "max": 1466, "maxmargin": "54.7%" } },
		{ "name": "Sr. Project Manager", "experience": "8-12 Years", "onsite": { "min": 2200, "minmargin": "37.2%", "max": 2240, "maxmargin": "38.4%" }, "offshore": { "min": 1497, "minmargin": "49.3%", "max": 1653, "maxmargin": "54.1%" } },
		{ "name": "Scrum Master", "experience": "3-8 Years", "onsite": { "min": 2000, "minmargin": "36.5%", "max": 2040, "maxmargin": "37.7%" }, "offshore": { "min": 1029, "minmargin": "44.7%", "max": 1185, "maxmargin": "51.9%" } },
		{ "name": "Sr. Scrum Master", "experience": "8-12 Years", "onsite": { "min": 2200, "minmargin": "37.2%", "max": 2240, "maxmargin": "38.4%" }, "offshore": { "min": 1248, "minmargin": "42.9%", "max": 1404, "maxmargin": "49.3%" } },
		{ "name": "Associate Business Analyst - Domain", "experience": "0-3 Years", "onsite": { "min": 1150, "minmargin": "37.6%", "max": 1190, "maxmargin": "39.7%" }, "offshore": { "min": 780, "minmargin": "49.8%", "max": 936, "maxmargin": "58.2%" } },
		{ "name": "Business Analyst - Domain", "experience": "3-8 Years", "onsite": { "min": 1400, "minmargin": "36.9%", "max": 1440, "maxmargin": "38.6%" }, "offshore": { "min": 967, "minmargin": "50.9%", "max": 1123, "maxmargin": "57.7%" } },
		{ "name": "Sr. Business Analyst - Domain", "experience": "8-12 Years", "onsite": { "min": 2000, "minmargin": "36.5%", "max": 2040, "maxmargin": "37.7%" }, "offshore": { "min": 1154, "minmargin": "48.6%", "max": 1310, "maxmargin": "54.7%" } },
		{ "name": "Associate Systems Analyst - COTS", "experience": "0-3 Years", "onsite": { "min": 1200, "minmargin": "44.8%", "max": 1240, "maxmargin": "46.5%" }, "offshore": { "min": 780, "minmargin": "63.5%", "max": 936, "maxmargin": "69.6%" } },
		{ "name": "Systems Analyst - COTS", "experience": "3-8 Years", "onsite": { "min": 1600, "minmargin": "37.9%", "max": 1640, "maxmargin": "39.4%" }, "offshore": { "min": 998, "minmargin": "57.2%", "max": 1154, "maxmargin": "63.0%" } },
		{ "name": "Sr. Systems Analyst - COTS", "experience": "8-12 Years", "onsite": { "min": 1900, "minmargin": "36.0%", "max": 1940, "maxmargin": "37.4%" }, "offshore": { "min": 1123, "minmargin": "40.8%", "max": 1279, "maxmargin": "48.0%" } },
		{ "name": "Associate Data Analyst", "experience": "0-3 Years", "onsite": { "min": 1200, "minmargin": "44.8%", "max": 1240, "maxmargin": "46.5%" }, "offshore": { "min": 780, "minmargin": "54.3%", "max": 936, "maxmargin": "62.0%" } },
		{ "name": "Data Analyst", "experience": "3-8 Years", "onsite": { "min": 1800, "minmargin": "44.8%", "max": 1840, "maxmargin": "46.0%" }, "offshore": { "min": 967, "minmargin": "50.9%", "max": 1123, "maxmargin": "57.7%" } },
		{ "name": "Sr. Data Analyst", "experience": "8-12 Years", "onsite": { "min": 2400, "minmargin": "44.8%", "max": 2440, "maxmargin": "45.7%" }, "offshore": { "min": 1404, "minmargin": "40.8%", "max": 1560, "maxmargin": "46.7%" } },
		{ "name": "Associate Data Scientist", "experience": "0-3 Years", "onsite": { "min": 1280, "minmargin": "43.9%", "max": 1320, "maxmargin": "45.6%" }, "offshore": { "min": 717, "minmargin": "50.4%", "max": 873, "maxmargin": "59.2%" } },
		{ "name": "Data Scientist", "experience": "3-8 Years", "onsite": { "min": 2000, "minmargin": "44.8%", "max": 2040, "maxmargin": "45.9%" }, "offshore": { "min": 1310, "minmargin": "49.3%", "max": 1466, "maxmargin": "54.7%" } },
		{ "name": "Sr. Data Scientist", "experience": "8-12 Years", "onsite": { "min": 3000, "minmargin": "44.8%", "max": 3040, "maxmargin": "45.5%" }, "offshore": { "min": 1622, "minmargin": "41.5%", "max": 1778, "maxmargin": "46.6%" } },
		{ "name": "Solution Architect", "experience": "8-12 Years", "onsite": { "min": 2500, "minmargin": "44.8%", "max": 2540, "maxmargin": "45.6%" }, "offshore": { "min": 1560, "minmargin": "46.7%", "max": 1716, "maxmargin": "51.6%" } },
		{ "name": "Sr Solution Architect", "experience": "0-3 Years", "onsite": { "min": 3400, "minmargin": "43.1%", "max": 3440, "maxmargin": "43.8%" }, "offshore": { "min": 1747, "minmargin": "42.9%", "max": 1903, "maxmargin": "47.6%" } },
		{ "name": "Associate Cloud Engineer (Azure/AWS/Google)", "experience": "3-8 Years", "onsite": { "min": 1350, "minmargin": "42.7%", "max": 1390, "maxmargin": "44.4%" }, "offshore": { "min": 873, "minmargin": "72.8%", "max": 1029, "maxmargin": "76.9%" } },
		{ "name": "Cloud Engineer (Azure/AWS/Google)", "experience": "8-12 Years", "onsite": { "min": 1750, "minmargin": "43.2%", "max": 1790, "maxmargin": "44.5%" }, "offshore": { "min": 1185, "minmargin": "49.9%", "max": 1341, "maxmargin": "55.8%" } },
		{ "name": "Cloud Architect (Azure/AWS/Google)", "experience": "0-3 Years", "onsite": { "min": 2800, "minmargin": "44.8%", "max": 2840, "maxmargin": "45.5%" }, "offshore": { "min": 1466, "minmargin": "43.3%", "max": 1622, "maxmargin": "48.8%" } },
		{ "name": "Associate Engineer - AWS (Redshift+Glue), Azure (Databricks+ADF), Snowflake", "experience": "3-8 Years", "onsite": { "min": 1400, "minmargin": "44.8%", "max": 1440, "maxmargin": "46.3%" }, "offshore": { "min": 873, "minmargin": "72.8%", "max": 1029, "maxmargin": "76.9%" } },
		{ "name": "Engineer -AWS (Redshift+Glue), Azure (Databricks+ADF), Snowflake", "experience": "8-12 Years", "onsite": { "min": 1800, "minmargin": "41.7%", "max": 1840, "maxmargin": "43.0%" }, "offshore": { "min": 1217, "minmargin": "51.2%", "max": 1373, "maxmargin": "56.8%" } },
		{ "name": "Architect -AWS (Redshift+Glue), Azure (Databricks+ADF), Snowflake", "experience": "0-3 Years", "onsite": { "min": 3000, "minmargin": "44.8%", "max": 3040, "maxmargin": "45.5%" }, "offshore": { "min": 1435, "minmargin": "42.1%", "max": 1591, "maxmargin": "47.8%" } },
		{ "name": "Database Administrator", "experience": "3-8 Years", "onsite": { "min": 1600, "minmargin": "44.8%", "max": 1640, "maxmargin": "46.1%" }, "offshore": { "min": 1029, "minmargin": "65.4%", "max": 1185, "maxmargin": "70.0%" } },
		{ "name": "Sr. Database Administrator", "experience": "8-12 Years", "onsite": { "min": 2500, "minmargin": "44.8%", "max": 2540, "maxmargin": "45.6%" }, "offshore": { "min": 1248, "minmargin": "50.5%", "max": 1404, "maxmargin": "56.0%" } },
		{ "name": "Agile Coach", "experience": "0-3 Years", "onsite": { "min": 2200, "minmargin": "42.3%", "max": 2240, "maxmargin": "43.3%" }, "offshore": { "min": 1092, "minmargin": "56.5%", "max": 1248, "maxmargin": "62.0%" } },
		{ "name": "Sr. Agile Coach", "experience": "3-8 Years", "onsite": { "min": 2500, "minmargin": "44.8%", "max": 2540, "maxmargin": "45.6%" }, "offshore": { "min": 1310, "minmargin": "45.7%", "max": 1466, "maxmargin": "51.4%" } },
		{ "name": "Associate UI/UX Designer", "experience": "8-12 Years", "onsite": { "min": 1550, "minmargin": "44.8%", "max": 1590, "maxmargin": "46.2%" }, "offshore": { "min": 811, "minmargin": "70.7%", "max": 967, "maxmargin": "75.5%" } },
		{ "name": "UI/UX Designer", "experience": "3-8 Years", "onsite": { "min": 2000, "minmargin": "44.8%", "max": 2040, "maxmargin": "45.9%" }, "offshore": { "min": 998, "minmargin": "64.3%", "max": 1154, "maxmargin": "69.2%" } },
		{ "name": "Sr. UI/UX Designer", "experience": "8-12 Years", "onsite": { "min": 3000, "minmargin": "44.8%", "max": 3040, "maxmargin": "45.5%" }, "offshore": { "min": 1185, "minmargin": "49.9%", "max": 1341, "maxmargin": "55.8%" } },
		{ "name": "Associate InfoSec Consultant", "experience": "0-3 Years", "onsite": { "min": 1300, "minmargin": "44.8%", "max": 1340, "maxmargin": "46.4%" }, "offshore": { "min": 811, "minmargin": "70.7%", "max": 967, "maxmargin": "75.5%" } },
		{ "name": "InfoSec Consultant", "experience": "3-8 Years", "onsite": { "min": 1800, "minmargin": "44.8%", "max": 1840, "maxmargin": "46.0%" }, "offshore": { "min": 998, "minmargin": "57.2%", "max": 1154, "maxmargin": "63.0%" } },
		{ "name": "Sr. InfoSec Consultant", "experience": "8-12 Years", "onsite": { "min": 2800, "minmargin": "44.8%", "max": 2840, "maxmargin": "45.5%" }, "offshore": { "min": 1185, "minmargin": "49.9%", "max": 1341, "maxmargin": "55.8%" } },
		{ "name": "Front-end Associate Developer - Angular/ReactJS /API/", "experience": "0-3 Years", "onsite": { "min": 1200, "minmargin": "44.8%", "max": 1240, "maxmargin": "46.5%" }, "offshore": { "min": 780, "minmargin": "57.4%", "max": 936, "maxmargin": "64.5%" } },
		{ "name": "Front-end Developer - Angular/ReactJS/API/", "experience": "3-8 Years", "onsite": { "min": 2200, "minmargin": "44.8%", "max": 2240, "maxmargin": "45.8%" }, "offshore": { "min": 1092, "minmargin": "45.7%", "max": 1248, "maxmargin": "52.4%" } },
		{ "name": "Front-end Sr. Developer - Angular/ReactJS/API/", "experience": "8-12 Years", "onsite": { "min": 2800, "minmargin": "44.8%", "max": 2840, "maxmargin": "45.5%" }, "offshore": { "min": 1404, "minmargin": "40.8%", "max": 1560, "maxmargin": "46.7%" } },
		{ "name": "RPA Developer", "experience": "0-3 Years", "onsite": { "min": 1200, "minmargin": "44.8%", "max": 1240, "maxmargin": "46.5%" }, "offshore": { "min": 811, "minmargin": "64.9%", "max": 967, "maxmargin": "70.5%" } },
		{ "name": "Sr. RPA Developer", "experience": "3-8 Years", "onsite": { "min": 1800, "minmargin": "44.8%", "max": 1840, "maxmargin": "46.0%" }, "offshore": { "min": 998, "minmargin": "40.6%", "max": 1154, "maxmargin": "48.6%" } },
		{ "name": "RPA Transformation Lead", "experience": "8-12 Years", "onsite": { "min": 2200, "minmargin": "44.8%", "max": 2240, "maxmargin": "45.8%" }, "offshore": { "min": 1185, "minmargin": "39.9%", "max": 1341, "maxmargin": "46.9%" } },
		{ "name": "RPA Architect", "experience": "0-3 Years", "onsite": { "min": 2800, "minmargin": "44.8%", "max": 2840, "maxmargin": "45.5%" }, "offshore": { "min": 1404, "minmargin": "40.8%", "max": 1560, "maxmargin": "46.7%" } },
		{ "name": "Associate Mobile Developer (React Native / Flutter / Xamarin / Native IOS / Native Android)", "experience": "3-8 Years", "onsite": { "min": 1200, "minmargin": "44.8%", "max": 1240, "maxmargin": "46.5%" }, "offshore": { "min": 811, "minmargin": "64.9%", "max": 967, "maxmargin": "70.5%" } },
		{ "name": "Mobile Developer (React Native / Flutter / Xamarin / Native IOS / Native Android)", "experience": "0-3 Years", "onsite": { "min": 1800, "minmargin": "44.8%", "max": 1840, "maxmargin": "46.0%" }, "offshore": { "min": 998, "minmargin": "52.4%", "max": 1154, "maxmargin": "58.9%" } },
		{ "name": "Sr. Mobile Developer (React Native / Flutter / Xamarin / Native IOS / Native Android)", "experience": "3-8 Years", "onsite": { "min": 2800, "minmargin": "44.8%", "max": 2840, "maxmargin": "45.5%" }, "offshore": { "min": 1185, "minmargin": "39.9%", "max": 1341, "maxmargin": "46.9%" } },
		{ "name": "Back-end Associate Developer (.Net / Java / C# / PHP / Python/UNIX/Shell/PERL)", "experience": "8-12 Years", "onsite": { "min": 1200, "minmargin": "44.8%", "max": 1240, "maxmargin": "46.5%" }, "offshore": { "min": 811, "minmargin": "70.7%", "max": 967, "maxmargin": "75.5%" } },
		{ "name": "Back-end Developer (.Net / Java / C# / PHP / Python/UNIX/Shell/PERL)", "experience": "12-16 Years", "onsite": { "min": 1800, "minmargin": "44.8%", "max": 1840, "maxmargin": "46.0%" }, "offshore": { "min": 998, "minmargin": "40.6%", "max": 1154, "maxmargin": "48.6%" } },
		{ "name": "Back-end Sr. Developer (.Net / Java / C# / PHP / Python/UNIX/Shell/PERL)", "experience": "0-3 Years", "onsite": { "min": 2800, "minmargin": "44.8%", "max": 2840, "maxmargin": "45.5%" }, "offshore": { "min": 1185, "minmargin": "39.9%", "max": 1341, "maxmargin": "46.9%" } },
		{ "name": "Associate Full Stack Developer", "experience": "3-8 Years", "onsite": { "min": 1200, "minmargin": "44.8%", "max": 1240, "maxmargin": "46.5%" }, "offshore": { "min": 811, "minmargin": "64.9%", "max": 967, "maxmargin": "70.5%" } },
		{ "name": "Full Stack Developer", "experience": "8-12 Years", "onsite": { "min": 1800, "minmargin": "44.8%", "max": 1840, "maxmargin": "46.0%" }, "offshore": { "min": 998, "minmargin": "40.6%", "max": 1154, "maxmargin": "48.6%" } },
		{ "name": "Sr. Full Stack Developer", "experience": "0-3 Years", "onsite": { "min": 2800, "minmargin": "44.8%", "max": 2840, "maxmargin": "45.5%" }, "offshore": { "min": 1279, "minmargin": "40.6%", "max": 1435, "maxmargin": "47.1%" } },
		{ "name": "Associate Consultant - DevOps / CI-CD / SRE", "experience": "3-8 Years", "onsite": { "min": 1200, "minmargin": "44.8%", "max": 1240, "maxmargin": "46.5%" }, "offshore": { "min": 811, "minmargin": "70.7%", "max": 967, "maxmargin": "75.5%" } },
		{ "name": "Consultant - DevOps / CI-CD / SRE", "experience": "8-12 Years", "onsite": { "min": 1800, "minmargin": "44.8%", "max": 1840, "maxmargin": "46.0%" }, "offshore": { "min": 998, "minmargin": "52.4%", "max": 1154, "maxmargin": "58.9%" } },
		{ "name": "Sr. Consultant - DevOps / CI-CD / SRE", "experience": "0-3 Years", "onsite": { "min": 2800, "minmargin": "44.8%", "max": 2840, "maxmargin": "45.5%" }, "offshore": { "min": 1248, "minmargin": "42.9%", "max": 1404, "maxmargin": "49.3%" } },
		{ "name": "Associate Consultant -Power BI / Tableau / Looker / Qlik", "experience": "3-8 Years", "onsite": { "min": 1200, "minmargin": "44.8%", "max": 1240, "maxmargin": "46.5%" }, "offshore": { "min": 811, "minmargin": "70.7%", "max": 967, "maxmargin": "75.5%" } },
		{ "name": "Consultant - Power BI / Tableau / Looker / Qlik", "experience": "8-12 Years", "onsite": { "min": 1800, "minmargin": "44.8%", "max": 1840, "maxmargin": "46.0%" }, "offshore": { "min": 998, "minmargin": "52.4%", "max": 1154, "maxmargin": "58.9%" } },
		{ "name": "Sr. Consultant - Power BI / Tableau / Looker / Qlik", "experience": "0-3 Years", "onsite": { "min": 2800, "minmargin": "44.8%", "max": 2840, "maxmargin": "45.5%" }, "offshore": { "min": 1185, "minmargin": "39.9%", "max": 1341, "maxmargin": "46.9%" } },
		{ "name": "ERP Technical Consultant", "experience": "3-8 Years", "onsite": { "min": 1450, "minmargin": "42.9%", "max": 1490, "maxmargin": "44.4%" }, "offshore": { "min": 1092, "minmargin": "60.9%", "max": 1248, "maxmargin": "65.8%" } },
		{ "name": "ERP Sr. Technical Consultant", "experience": "8-12 Years", "onsite": { "min": 2750, "minmargin": "43.8%", "max": 2790, "maxmargin": "44.6%" }, "offshore": { "min": 1404, "minmargin": "49.3%", "max": 1560, "maxmargin": "54.3%" } },
		{ "name": "ERP Functional Consultant", "experience": "0-3 Years", "onsite": { "min": 1500, "minmargin": "44.8%", "max": 1540, "maxmargin": "46.2%" }, "offshore": { "min": 1092, "minmargin": "67.4%", "max": 1248, "maxmargin": "71.5%" } },
		{ "name": "ERP Sr. Functional Consultant", "experience": "3-8 Years", "onsite": { "min": 2800, "minmargin": "44.8%", "max": 2840, "maxmargin": "45.5%" }, "offshore": { "min": 1248, "minmargin": "46.7%", "max": 1404, "maxmargin": "52.7%" } }
		],

AUS: [
		{ name: "Functional Test Analyst", experience: "1-3 Years", onsite: { min: 600, minmargin: "34.7%", max: 640, maxmargin: "38.8%" }, offshore: { min: 269, minmargin: "75.8%", max: 330, maxmargin: "80.3%" } },
		{ name: "Senior Functional Test Analyst", experience: "4-8 Years", onsite: { min: 750, minmargin: "34.7%", max: 790, maxmargin: "38.0%" }, offshore: { min: 343, minmargin: "56.5%", max: 404, maxmargin: "63.1%" } },
		{ name: "Functional Test Lead", experience: "8-10 Years", onsite: { min: 900, minmargin: "32.0%", max: 940, maxmargin: "34.9%" }, offshore: { min: 392, minmargin: "52.4%", max: 453, maxmargin: "58.9%" } },
		{ name: "Functional Test Architect", experience: "10+ Years", onsite: { min: 1200, minmargin: "34.7%", max: 1280, maxmargin: "38.8%" }, offshore: { min: 428, minmargin: "45.7%", max: 490, maxmargin: "52.4%" } },
		{ name: "Functional Test Manager", experience: "10+ Years", onsite: { min: 1200, minmargin: "30.6%", max: 1240, maxmargin: "32.8%" }, offshore: { min: 465, minmargin: "43.9%", max: 526, maxmargin: "50.5%" } },
		{ name: "Automation Test Analyst", experience: "1-3 Years", onsite: { min: 800, minmargin: "41.8%", max: 840, maxmargin: "44.6%" }, offshore: { min: 330, minmargin: "76.0%", max: 392, maxmargin: "79.8%" } },
		{ name: "Senior Automation Test Analyst", experience: "4-8 Years", onsite: { min: 950, minmargin: "35.6%", max: 990, maxmargin: "38.2%" }, offshore: { min: 367, minmargin: "56.9%", max: 428, maxmargin: "63.0%" } },
		{ name: "Automation Test Lead", experience: "9-12 Years", onsite: { min: 1200, minmargin: "32.7%", max: 1240, maxmargin: "34.8%" }, offshore: { min: 453, minmargin: "46.5%", max: 514, maxmargin: "52.9%" } },
		{ name: "Automation Test Architect", experience: "12+ Years", onsite: { min: 1350, minmargin: "32.9%", max: 1430, maxmargin: "36.6%" }, offshore: { min: 551, minmargin: "45.9%", max: 612, maxmargin: "51.3%" } },
		{ name: "Performance Test Analyst", experience: "1-3 Years", onsite: { min: 800, minmargin: "44.9%", max: 840, maxmargin: "47.5%" }, offshore: { min: 367, minmargin: "77.2%", max: 428, maxmargin: "80.4%" } },
		{ name: "Senior Performance Test Analyst", experience: "4-8 Years", onsite: { min: 950, minmargin: "33.0%", max: 990, maxmargin: "35.7%" }, offshore: { min: 392, minmargin: "54.8%", max: 453, maxmargin: "60.9%" } },
		{ name: "Performance Test Lead", experience: "9-12 Years", onsite: { min: 1200, minmargin: "30.6%", max: 1240, maxmargin: "32.8%" }, offshore: { min: 441, minmargin: "47.2%", max: 502, maxmargin: "53.6%" } },
		{ name: "Performance Test Architect", experience: "12+ Years", onsite: { min: 1400, minmargin: "31.8%", max: 1480, maxmargin: "35.5%" }, offshore: { min: 612, minmargin: "45.2%", max: 673, maxmargin: "50.2%" } },
		{ name: "Observability/Chaos/Reliability Engineer", experience: "4-8 Years", onsite: { min: 950, minmargin: "33.0%", max: 990, maxmargin: "35.7%" }, offshore: { min: 392, minmargin: "52.4%", max: 453, maxmargin: "58.9%" } },
		{ name: "Observability/Chaos/Reliability Lead", experience: "9-12 Years", onsite: { min: 1200, minmargin: "30.6%", max: 1240, maxmargin: "32.8%" }, offshore: { min: 490, minmargin: "39.1%", max: 551, maxmargin: "45.9%" } },
		{ name: "Observability/Chaos/Reliability Architect", experience: "12+ Years", onsite: { min: 1400, minmargin: "31.8%", max: 1480, maxmargin: "35.5%" }, offshore: { min: 612, minmargin: "39.1%", max: 673, maxmargin: "44.7%" } },
		{ name: "Security Test Analyst", experience: "1-3 Years", onsite: { min: 900, minmargin: "45.6%", max: 940, maxmargin: "47.9%" }, offshore: { min: 367, minmargin: "74.6%", max: 428, maxmargin: "78.3%" } },
		{ name: "Senior Security Test Analyst", experience: "4-8 Years", onsite: { min: 1000, minmargin: "33.9%", max: 1040, maxmargin: "36.4%" }, offshore: { min: 392, minmargin: "47.7%", max: 453, maxmargin: "54.8%" } },
		{ name: "Security Test Lead", experience: "9-12 Years", onsite: { min: 1300, minmargin: "32.2%", max: 1340, maxmargin: "34.2%" }, offshore: { min: 441, minmargin: "40.8%", max: 502, maxmargin: "48.0%" } },
		{ name: "Security Test Architect", experience: "12+ Years", onsite: { min: 1400, minmargin: "31.8%", max: 1480, maxmargin: "35.5%" }, offshore: { min: 636, minmargin: "37.1%", max: 698, maxmargin: "42.6%" } },
		{ name: "SDET", experience: "2-6 Years", onsite: { min: 850, minmargin: "36.6%", max: 890, maxmargin: "39.5%" }, offshore: { min: 428, minmargin: "67.4%", max: 490, maxmargin: "71.5%" } },
		{ name: "Sr. SDET", experience: "7-10 Years", onsite: { min: 950, minmargin: "33.0%", max: 990, maxmargin: "35.7%" }, offshore: { min: 551, minmargin: "49.3%", max: 612, maxmargin: "54.3%" } },
		{ name: "Consultant - ATS", experience: "10-14 Years", onsite: { min: 1300, minmargin: "28.4%", max: 1340, maxmargin: "30.6%" }, offshore: { min: 551, minmargin: "40.8%", max: 612, maxmargin: "46.7%" } },
		{ name: "Lead Consultant - ATS", experience: "14+ Years", onsite: { min: 1575, minmargin: "34.7%", max: 1615, maxmargin: "36.3%" }, offshore: { min: 612, minmargin: "39.1%", max: 673, maxmargin: "44.7%" } },
		{ name: "Program Manager", experience: "15+ Years", onsite: { min: 1600, minmargin: "32.7%", max: 1640, maxmargin: "34.3%" }, offshore: { min: 612, minmargin: "45.2%", max: 673, maxmargin: "50.2%" } },
		{ name: "RPA Tester", experience: "1-3 Years", onsite: { min: 680, minmargin: "35.2%", max: 720, maxmargin: "38.8%" }, offshore: { min: 306, minmargin: "72.6%", max: 367, maxmargin: "77.2%" } },
		{ name: "Sr. RPA Tester", experience: "4-8 Years", onsite: { min: 910, minmargin: "35.4%", max: 950, maxmargin: "38.1%" }, offshore: { min: 367, minmargin: "56.9%", max: 428, maxmargin: "63.0%" } },
		{ name: "Project Manager", experience: "6-8 Years", onsite: { min: 1375, minmargin: "34.1%", max: 1415, maxmargin: "36.0%" }, offshore: { min: 514, minmargin: "49.3%", max: 575, maxmargin: "54.7%" } },
		{ name: "Sr. Project Manager", experience: "9-12 Years", onsite: { min: 1450, minmargin: "34.1%", max: 1490, maxmargin: "35.9%" }, offshore: { min: 588, minmargin: "49.3%", max: 649, maxmargin: "54.1%" } },
		{ name: "Scrum Master", experience: "6-8 Years", onsite: { min: 1200, minmargin: "34.7%", max: 1240, maxmargin: "36.8%" }, offshore: { min: 404, minmargin: "44.7%", max: 465, maxmargin: "51.9%" } },
		{ name: "Sr. Scrum Master", experience: "9-12 Years", onsite: { min: 1280, minmargin: "31.1%", max: 1320, maxmargin: "33.2%" }, offshore: { min: 490, minmargin: "42.9%", max: 551, maxmargin: "49.3%" } },
		{ name: "Associate Business Analyst - Domain", experience: "1-3 Years", onsite: { min: 530, minmargin: "35.3%", max: 570, maxmargin: "39.8%" }, offshore: { min: 306, minmargin: "49.8%", max: 367, maxmargin: "58.2%" } },
		{ name: "Business Analyst - Domain", experience: "4-8 Years", onsite: { min: 750, minmargin: "34.7%", max: 790, maxmargin: "38.0%" }, offshore: { min: 379, minmargin: "50.9%", max: 441, maxmargin: "57.7%" } },
		{ name: "Sr. Business Analyst - Domain", experience: "9-12 Years", onsite: { min: 975, minmargin: "29.7%", max: 1015, maxmargin: "32.4%" }, offshore: { min: 453, minmargin: "48.6%", max: 514, maxmargin: "54.7%" } },
		{ name: "Associate Systems Analyst - COTS", experience: "1-3 Years", onsite: { min: 530, minmargin: "35.3%", max: 570, maxmargin: "39.8%" }, offshore: { min: 306, minmargin: "63.5%", max: 367, maxmargin: "69.6%" } },
		{ name: "Systems Analyst - COTS", experience: "4-8 Years", onsite: { min: 750, minmargin: "34.7%", max: 790, maxmargin: "38.0%" }, offshore: { min: 392, minmargin: "57.2%", max: 453, maxmargin: "63.0%" } },
		{ name: "Sr. Systems Analyst - COTS", experience: "9-12 Years", onsite: { min: 975, minmargin: "29.7%", max: 1015, maxmargin: "32.4%" }, offshore: { min: 441, minmargin: "40.8%", max: 502, maxmargin: "48.0%" } },
		{ name: "Associate Data Analyst", experience: "1-3 Years", onsite: { min: 550, minmargin: "37.7%", max: 590, maxmargin: "41.9%" }, offshore: { min: 306, minmargin: "54.3%", max: 367, maxmargin: "62.0%" } },
		{ name: "Data Analyst", experience: "4-8 Years", onsite: { min: 875, minmargin: "32.8%", max: 915, maxmargin: "35.8%" }, offshore: { min: 379, minmargin: "50.9%", max: 441, maxmargin: "57.7%" } },
		{ name: "Sr. Data Analyst", experience: "9-12 Years", onsite: { min: 1100, minmargin: "33.2%", max: 1140, maxmargin: "35.6%" }, offshore: { min: 551, minmargin: "40.8%", max: 612, maxmargin: "46.7%" } },
		{ name: "Associate Data Scientist", experience: "1-3 Years", onsite: { min: 625, minmargin: "37.3%", max: 665, maxmargin: "41.1%" }, offshore: { min: 282, minmargin: "50.4%", max: 343, maxmargin: "59.2%" } },
		{ name: "Data Scientist", experience: "4-8 Years", onsite: { min: 925, minmargin: "31.2%", max: 965, maxmargin: "34.0%" }, offshore: { min: 514, minmargin: "49.3%", max: 575, maxmargin: "54.7%" } },
		{ name: "Sr. Data Scientist", experience: "9-12 Years", onsite: { min: 1225, minmargin: "36.0%", max: 1265, maxmargin: "38.0%" }, offshore: { min: 636, minmargin: "41.5%", max: 698, maxmargin: "46.6%" } },
		{ name: "Solution Architect", experience: "8-10 Years", onsite: { min: 1275, minmargin: "30.9%", max: 1315, maxmargin: "33.0%" }, offshore: { min: 612, minmargin: "46.7%", max: 673, maxmargin: "51.6%" } },
		{ name: "Sr Solution Architect", experience: "11-14 Years", onsite: { min: 1475, minmargin: "30.3%", max: 1515, maxmargin: "32.1%" }, offshore: { min: 685, minmargin: "42.9%", max: 747, maxmargin: "47.6%" } },
		{ name: "Associate Cloud Engineer (Azure/AWS/Google)", experience: "1-3 Years", onsite: { min: 725, minmargin: "32.4%", max: 765, maxmargin: "36.0%" }, offshore: { min: 343, minmargin: "72.8%", max: 404, maxmargin: "76.9%" } },
		{ name: "Cloud Engineer (Azure/AWS/Google)", experience: "4-8 Years", onsite: { min: 925, minmargin: "31.2%", max: 965, maxmargin: "34.0%" }, offshore: { min: 465, minmargin: "49.9%", max: 526, maxmargin: "55.8%" } },
		{ name: "Cloud Architect (Azure/AWS/Google)", experience: "9-12 Years", onsite: { min: 1125, minmargin: "30.3%", max: 1165, maxmargin: "32.7%" }, offshore: { min: 575, minmargin: "43.3%", max: 636, maxmargin: "48.8%" } },
		{ name: "Associate Engineer - AWS (Redshift+Glue), Azure (Databricks+ADF), Snowflake", experience: "1-3 Years", onsite: { min: 750, minmargin: "34.7%", max: 790, maxmargin: "38.0%" }, offshore: { min: 343, minmargin: "72.8%", max: 404, maxmargin: "76.9%" } },
		{ name: "Engineer -AWS (Redshift+Glue), Azure (Databricks+ADF), Snowflake", experience: "4-8 Years", onsite: { min: 975, minmargin: "29.7%", max: 1015, maxmargin: "32.4%" }, offshore: { min: 477, minmargin: "51.2%", max: 539, maxmargin: "56.8%" } },
		{ name: "Architect -AWS (Redshift+Glue), Azure (Databricks+ADF), Snowflake", experience: "9-12 Years", onsite: { min: 1200, minmargin: "30.6%", max: 1240, maxmargin: "32.8%" }, offshore: { min: 563, minmargin: "42.1%", max: 624, maxmargin: "47.8%" } },
		{ name: "Database Administrator", experience: "3-8 Years", onsite: { min: 925, minmargin: "31.2%", max: 965, maxmargin: "34.0%" }, offshore: { min: 404, minmargin: "65.4%", max: 465, maxmargin: "70.0%" } },
		{ name: "Sr. Database Administrator", experience: "9-12 Years", onsite: { min: 1230, minmargin: "36.3%", max: 1270, maxmargin: "38.3%" }, offshore: { min: 490, minmargin: "50.5%", max: 551, maxmargin: "56.0%" } },
		{ name: "Agile Coach", experience: "6-8 Years", onsite: { min: 1300, minmargin: "43.5%", max: 1340, maxmargin: "45.2%" }, offshore: { min: 428, minmargin: "56.5%", max: 490, maxmargin: "62.0%" } },
		{ name: "Sr. Agile Coach", experience: "9-12 Years", onsite: { min: 1400, minmargin: "37.0%", max: 1440, maxmargin: "38.8%" }, offshore: { min: 514, minmargin: "45.7%", max: 575, maxmargin: "51.4%" } },
		{ name: "Associate UI/UX Designer", experience: "1-3 Years", onsite: { min: 650, minmargin: "32.2%", max: 690, maxmargin: "36.1%" }, offshore: { min: 318, minmargin: "70.7%", max: 379, maxmargin: "75.5%" } },
		{ name: "UI/UX Designer", experience: "4-8 Years", onsite: { min: 950, minmargin: "33.0%", max: 990, maxmargin: "35.7%" }, offshore: { min: 392, minmargin: "64.3%", max: 453, maxmargin: "69.2%" } },
		{ name: "Sr. UI/UX Designer", experience: "9-12 Years", onsite: { min: 1250, minmargin: "33.4%", max: 1290, maxmargin: "35.5%" }, offshore: { min: 465, minmargin: "49.9%", max: 526, maxmargin: "55.8%" } },
		{ name: "Associate InfoSec Consultant", experience: "1-3 Years", onsite: { min: 800, minmargin: "35.7%", max: 840, maxmargin: "38.8%" }, offshore: { min: 318, minmargin: "70.7%", max: 379, maxmargin: "75.5%" } },
		{ name: "InfoSec Consultant", experience: "4-8 Years", onsite: { min: 975, minmargin: "32.2%", max: 1015, maxmargin: "34.9%" }, offshore: { min: 392, minmargin: "57.2%", max: 453, maxmargin: "63.0%" } },
		{ name: "Sr. InfoSec Consultant", experience: "9-12 Years", onsite: { min: 1275, minmargin: "32.8%", max: 1315, maxmargin: "34.8%" }, offshore: { min: 465, minmargin: "49.9%", max: 526, maxmargin: "55.8%" } },
		{ name: "Front-end Associate Developer - Angular/ReactJS /API/", experience: "1-3 Years", onsite: { min: 750, minmargin: "34.7%", max: 790, maxmargin: "38.0%" }, offshore: { min: 306, minmargin: "57.4%", max: 367, maxmargin: "64.5%" } },
		{ name: "Front-end Developer - Angular/ReactJS/API/", experience: "4-8 Years", onsite: { min: 950, minmargin: "38.1%", max: 990, maxmargin: "40.6%" }, offshore: { min: 428, minmargin: "45.7%", max: 490, maxmargin: "52.4%" } },
		{ name: "Front-end Sr. Developer - Angular/ReactJS/API/", experience: "9-12 Years", onsite: { min: 1250, minmargin: "33.4%", max: 1290, maxmargin: "35.5%" }, offshore: { min: 551, minmargin: "40.8%", max: 612, maxmargin: "46.7%" } },
		{ name: "RPA Developer", experience: "3-8 Years", onsite: { min: 900, minmargin: "32.0%", max: 940, maxmargin: "34.9%" }, offshore: { min: 318, minmargin: "64.9%", max: 379, maxmargin: "70.5%" } },
		{ name: "Sr. RPA Developer", experience: "9-12 Years", onsite: { min: 1200, minmargin: "32.7%", max: 1240, maxmargin: "34.8%" }, offshore: { min: 392, minmargin: "40.6%", max: 453, maxmargin: "48.6%" } },
		{ name: "RPA Transformation Lead", experience: "8-12 Years", onsite: { min: 1300, minmargin: "35.9%", max: 1340, maxmargin: "37.9%" }, offshore: { min: 465, minmargin: "39.9%", max: 526, maxmargin: "46.9%" } },
		{ name: "RPA Architect", experience: "13-16 Years", onsite: { min: 1400, minmargin: "33.5%", max: 1440, maxmargin: "35.4%" }, offshore: { min: 551, minmargin: "40.8%", max: 612, maxmargin: "46.7%" } },
		{ name: "Associate Mobile Developer (React Native / Flutter / Xamarin / Native IOS / Native Android)", experience: "1-3 Years", onsite: { min: 750, minmargin: "34.7%", max: 790, maxmargin: "38.0%" }, offshore: { min: 318, minmargin: "64.9%", max: 379, maxmargin: "70.5%" } },
		{ name: "Mobile Developer (React Native / Flutter / Xamarin / Native IOS / Native Android)", experience: "4-8 Years", onsite: { min: 1000, minmargin: "33.9%", max: 1040, maxmargin: "36.4%" }, offshore: { min: 392, minmargin: "52.4%", max: 453, maxmargin: "58.9%" } },
		{ name: "Sr. Mobile Developer (React Native / Flutter / Xamarin / Native IOS / Native Android)", experience: "9-12 Years", onsite: { min: 1300, minmargin: "32.2%", max: 1340, maxmargin: "34.2%" }, offshore: { min: 465, minmargin: "39.9%", max: 526, maxmargin: "46.9%" } },
		{ name: "Back-end Associate Developer (.Net / Java / C# / PHP / Python/UNIX/Shell/PERL)", experience: "1-3 Years", onsite: { min: 750, minmargin: "47.8%", max: 790, maxmargin: "50.4%" }, offshore: { min: 318, minmargin: "70.7%", max: 379, maxmargin: "75.5%" } },
		{ name: "Back-end Developer (.Net / Java / C# / PHP / Python/UNIX/Shell/PERL)", experience: "4-8 Years", onsite: { min: 1000, minmargin: "33.9%", max: 1040, maxmargin: "36.4%" }, offshore: { min: 392, minmargin: "40.6%", max: 453, maxmargin: "48.6%" } },
		{ name: "Back-endSr. Developer (.Net / Java / C# / PHP / Python/UNIX/Shell/PERL)", experience: "9-12 Years", onsite: { min: 1300, minmargin: "34.1%", max: 1340, maxmargin: "36.0%" }, offshore: { min: 465, minmargin: "39.9%", max: 526, maxmargin: "46.9%" } },
		{ name: "Associate Full Stack Developer", experience: "1-3 Years", onsite: { min: 750, minmargin: "34.7%", max: 790, maxmargin: "38.0%" }, offshore: { min: 318, minmargin: "64.9%", max: 379, maxmargin: "70.5%" } },
		{ name: "Full Stack Developer", experience: "4-8 Years", onsite: { min: 1100, minmargin: "33.2%", max: 1140, maxmargin: "35.6%" }, offshore: { min: 392, minmargin: "40.6%", max: 453, maxmargin: "48.6%" } },
		{ name: "Sr. Full Stack Developer", experience: "9-12 Years", onsite: { min: 1350, minmargin: "34.7%", max: 1390, maxmargin: "36.6%" }, offshore: { min: 502, minmargin: "40.6%", max: 563, maxmargin: "47.1%" } },
		{ name: "Associate Consultant - DevOps / CI-CD / SRE", experience: "1-3 Years", onsite: { min: 750, minmargin: "34.7%", max: 790, maxmargin: "38.0%" }, offshore: { min: 318, minmargin: "70.7%", max: 379, maxmargin: "75.5%" } },
		{ name: "Consultant - DevOps / CI-CD / SRE", experience: "4-8 Years", onsite: { min: 1100, minmargin: "33.2%", max: 1140, maxmargin: "35.6%" }, offshore: { min: 392, minmargin: "52.4%", max: 453, maxmargin: "58.9%" } },
		{ name: "Sr. Consultant - DevOps / CI-CD / SRE", experience: "9-12 Years", onsite: { min: 1350, minmargin: "34.7%", max: 1390, maxmargin: "36.6%" }, offshore: { min: 490, minmargin: "42.9%", max: 551, maxmargin: "49.3%" } },
		{ name: "Associate Consultant -Power BI / Tableau / Looker / Qlik", experience: "1-3 Years", onsite: { min: 750, minmargin: "34.7%", max: 790, maxmargin: "38.0%" }, offshore: { min: 318, minmargin: "70.7%", max: 379, maxmargin: "75.5%" } },
		{ name: "Consultant - Power BI / Tableau / Looker / Qlik", experience: "4-8 Years", onsite: { min: 1100, minmargin: "33.2%", max: 1140, maxmargin: "35.6%" }, offshore: { min: 392, minmargin: "52.4%", max: 453, maxmargin: "58.9%" } },
		{ name: "Sr. Consultant - Power BI / Tableau / Looker / Qlik", experience: "9-12 Years", onsite: { min: 1350, minmargin: "34.7%", max: 1390, maxmargin: "36.6%" }, offshore: { min: 465, minmargin: "39.9%", max: 526, maxmargin: "46.9%" } },
		{ name: "ERP Functional Consultant", experience: "6-8 Years", onsite: { min: 1000, minmargin: "36.3%", max: 1040, maxmargin: "38.8%" }, offshore: { min: 428, minmargin: "67.4%", max: 490, maxmargin: "71.5%" } },
		{ name: "ERP Sr. Functional Consultant", experience: "9-12 Years", onsite: { min: 1350, minmargin: "34.7%", max: 1390, maxmargin: "36.6%" }, offshore: { min: 490, minmargin: "46.7%", max: 551, maxmargin: "52.7%" } },
		{ name: "ERP Technical Consultant", experience: "6-8 Years", onsite: { min: 1050, minmargin: "34.7%", max: 1090, maxmargin: "37.1%" }, offshore: { min: 428, minmargin: "60.9%", max: 490, maxmargin: "65.8%" } },
		{ name: "ERP Sr. Technical Consultant", experience: "9-12 Years", onsite: { min: 1400, minmargin: "33.5%", max: 1440, maxmargin: "35.4%" }, offshore: { min: 551, minmargin: "49.3%", max: 612, maxmargin: "54.3%" } }
]
            // Add more regions here
  };

function populate() {
    const region = document.getElementById('region').value;
    const rateTableBody = document.getElementById('rateTableBody');
    const currencySymbol = getCurrencySymbol(region);

    // Fetch roles data based on the selected region
    const rolesDataForRegion = rolesData[region];

    // Clear existing table rows
    rateTableBody.innerHTML = '';

        rolesDataForRegion.forEach(role => {
        const newRow = document.createElement('tr');

        // Populate each cell with role data	
        const cells = [
            role.name,
            role.experience,
            currencySymbol + ' ' + role.onsite.min,
            role.onsite.minmargin,
            currencySymbol + ' ' + role.onsite.max,
            role.onsite.maxmargin,
            currencySymbol + ' ' + role.offshore.min,
            role.offshore.minmargin,
            currencySymbol + ' ' + role.offshore.max,
            role.offshore.maxmargin
        		];
	
      
       // Create and append cells to the row
        cells.forEach(cellData => {
            const cell = document.createElement('td');
            cell.textContent = cellData;
            newRow.appendChild(cell);
        });

        // Append the row to the table body
        rateTableBody.appendChild(newRow);
        });	
}

function clearRateSpans(rowIndex) {
    const row = document.querySelector(`#rateTableBody tr:nth-child(${rowIndex})`);
    for (let i = 2; i < row.cells.length; i++) {
        row.cells[i].textContent = '';
    }
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
//console.log(region);

    const currencySymbol = getCurrencySymbol(region);
//console.log(currencySymbol);
    const rateTableBody = document.getElementById('rateTableBody');
    rateTableBody.innerHTML = '';
    populate(); 

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

    // Update the currency symbol in the table headings
    const currencySpan = document.createElement('span');
    currencySpan.textContent = '(' + currencySymbol + ')';
    currencySpan.style.fontSize = '0.7em'; // Adjust the font size as needed
    currencySpan.style.color = 'green';

       // Update headers with currency symbol
    	const onsiteMinRateHeader = document.querySelector('th:nth-child(3)');
   	const onsiteMaxRateHeader = document.querySelector('th:nth-child(5)');
    	const offshoreMinRateHeader  = document.querySelector('th:nth-child(7)');
    	const offshoreMaxRateHeader = document.querySelector('th:nth-child(9)');
    	
	// Replace the currency symbol text content with the span element
	onsiteMinRateHeader.textContent = 'Onsite Min Rate ';
	onsiteMinRateHeader.appendChild(currencySpan.cloneNode(true)); // Clone the span for each header
	onsiteMaxRateHeader.textContent = 'Onsite Max Rate ';
	onsiteMaxRateHeader.appendChild(currencySpan.cloneNode(true));
	offshoreMinRateHeader.textContent = 'Offshore Min Rate ';
	offshoreMinRateHeader.appendChild(currencySpan.cloneNode(true));
	offshoreMaxRateHeader.textContent = 'Offshore Max Rate ';
	offshoreMaxRateHeader.appendChild(currencySpan.cloneNode(true));
    
}

