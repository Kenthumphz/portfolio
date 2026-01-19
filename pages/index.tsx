import React from 'react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Mail, Phone, MapPin, Linkedin, Briefcase, GraduationCap, Code2, ExternalLink } from 'lucide-react'

const Index = () => {

  const skills = {
    "Business Intelligence": ["Excel", "Power BI", "Tableau", "Qlikview", "Qlik Sense", "Looker Studio"],
    "Cloud/Big Data": ["Snowflake", "Hadoop/Hive", "GCP"],
    "Database Management": ["PostgreSQL", "SSMS", "MySQL", "SQL"],
    "ETL Tools": ["Alteryx", "Dataform", "Datafusion"],
    "Web Analytics": ["Google Analytics", "Adobe Analytics", "Content Square", "BrandWatch", "Sprinklr", "Fanpage Karma", "SemRush"],
    "Programming": ["Python (Pandas, Numpy, Matplotlib)", "PySpark", "SQL"],
    "Languages": ["English (Native)", "German (Working Proficiency)"]
  };

  const experience = [
    {
      title: "Data Analyst",
      company: "Ford Motor Company",
      period: "Apr 2023 - Present",
      description: "Leading data analytics initiatives and dashboard development for enterprise-level insights."
    },
    {
      title: "Data Analyst",
      company: "MRM Germany",
      period: "May 2022 - Jan 2023",
      description: "Developed comprehensive analytics solutions for client campaigns and digital strategies."
    },
    {
      title: "Data Analyst",
      company: "Cheil Germany",
      period: "Nov 2021 - Feb 2022",
      description: "Created data-driven insights for marketing campaigns and client reporting."
    },
    {
      title: "Data Analyst Intern",
      company: "Ford-Werke GmbH",
      period: "Oct 2020 - Aug 2021",
      description: "Contributed to data analysis projects and learned enterprise BI tools."
    },
    {
      title: "Business Analyst",
      company: "First Bank of Nigeria Plc",
      period: "Oct 2017 - Sep 2019",
      description: "Analyzed business processes and provided data-driven recommendations."
    }
  ];

  const projects = [
    {
      title: "Spotify Music",
      year: "2025",
      description: "The business lacked clarity on sales patterns and customer behavior, risking ineffective pricing and missed revenue. I analyzed Walmart sales data to uncover trends, seasonality, and top-performing products, enabling better inventory planning, targeted promotions, and informed sales strategies.",
      image: "/portfolio/screenshots/spotify-overview.png",
      tags: ["Retail Analytics", "Power BI", "Sales Analysis", "Trend Analysis", "Inventory Insights", "Dashboard Design"],
      highlight: true,
      link: "/portfolio/spotify-music"
    },
    {
      title: "Consumer Financial Complaints",
      year: "2025",
      description: "Healthcare administrators had limited visibility into patient risk, costs, and hospital performance. I analyzed admissions, length of stay, and cost data across hospitals using Power BI to highlight high-risk areas and cost-intensive trends, supporting proactive care and efficient resource allocation.",
      image: "/portfolio/screenshots/consumer_financial_complaints_overview.png",
      tags: ["Healthcare Analytics", "Power BI", "Cost Analysis", "Data Storytelling", "DAXx", "Stakeholder Insights"],
      highlight: false,
      link: "/portfolio/consumer-financial-complaints"
    },
    {
      title: "Airbnb Seattle EDA",
      year: "2025",
      description: "Airbnb hosts and investors lacked insight into pricing and revenue drivers. Using SQL and Python, I performed exploratory analysis, examined pricing trends, customer sentiment, and host activity to identify key factors supporting smarter pricing and listing strategies.",
      image: "/portfolio/screenshots/placeholder-airbnb.png",
      tags: ["Pricing Analytics", "SQL", "Exploratory Data Analysis", "Market Analysis", "Customer Insights", "Data Storytelling"],
      highlight: false
    },
    {
      title: "HR Analytics: Voice of Employees (VOE)",
      year: "2025",
      description: "The organization had employee data but had limited visibility into engagement and satisfaction. I analyzed workforce and feedback data to identify engagement patterns and drivers of attrition, helping Human Resources(HR) design more effective retention and engagement strategies.",
      image: "/portfolio/screenshots/placeholder-hr.png",
      tags: ["People Analytics", "Microsoft Excel", "Employee Engagement", "Performance Analysis", "Workforce Insights", "HR Analytics"],
      highlight: false
    }
  ];

  const services = [
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Business Intelligence & Dashboard Development",
      description: "Transform your data into actionable insights with custom dashboards and BI solutions. Expertise in Power BI, Tableau, Qlik Sense, and Looker Studio to create intuitive, real-time visualizations that drive strategic decision-making."
    },
    {
      icon: <Code2 className="h-6 w-6" />,
      title: "Data Pipeline Automation & ETL",
      description: "Streamline your data workflows with automated ETL pipelines using Alteryx, Dataform, and Datafusion. Design scalable solutions that ensure data quality, reduce manual processes, and accelerate time-to-insight."
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Cloud & Big Data Solutions",
      description: "Leverage cloud technologies (GCP, Snowflake, Hadoop/Hive) to build robust data infrastructures. From data warehousing to big data processing, create scalable solutions that grow with your business."
    },
    {
      icon: <Code2 className="h-6 w-6" />,
      title: "Web & Digital Analytics",
      description: "Comprehensive digital analytics using Google Analytics, Adobe Analytics, and social listening tools. Track user behavior, measure campaign performance, and optimize digital strategies with data-driven recommendations."
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Data Migration & System Integration",
      description: "Seamlessly migrate your analytics infrastructure between platforms (QlikView → Tableau → Power BI). Minimize disruption while upgrading your BI capabilities and ensuring data continuity."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 pt-24 pb-20 md:pt-40 md:pb-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />
        <div className="container mx-auto max-w-6xl relative">
          <div className="text-center space-y-8 animate-fade-in">
              <div className="mx-auto w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-glow">
              <img src="/portfolio/Kent.jpeg" alt="Emmanuel Humphrey" className="object-cover w-full h-full scale-125" style={{objectPosition: 'center 35%'}} />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-scale-in">
                Emmanuel Humphrey
              </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Data Analyst | Business Intelligence Expert | Cloud Solutions Architect
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <a href="#projects">
                <Button size="lg" className="gap-2 shadow-lg hover:shadow-glow transition-all">
                  <Briefcase className="h-5 w-5" />
                  View Projects
                </Button>
              </a>
              <a href="mailto:Humphreyemmanuel29@gmail.com">
                <Button size="lg" variant="outline" className="gap-2">
                  <Mail className="h-5 w-5" />
                  Get In Touch
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/emmanuel-humphrey/" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="gap-2">
                  <Linkedin className="h-5 w-5" />
                  View LinkedIn
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 py-16 md:py-24">
        <div className="container mx-auto max-w-6xl">
          <Card className="border-primary/20 shadow-lg hover:shadow-glow transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-3xl">About Me</CardTitle>
            </CardHeader>
            <CardContent className="text-lg text-muted-foreground leading-relaxed">
              A data-driven and motivated Data Analyst with over 5 years of experience in data pipeline automation, 
              business intelligence, and advanced analytics. Proven expertise in leveraging cloud technologies like GCP, 
              Hadoop, BI technologies like Power BI, Tableau, Looker Studio, and Qlik Sense to transform raw data into 
              actionable insights. Skilled in developing impactful dashboards, conducting sentiment and web analysis, and 
              collaborating with stakeholders to drive strategic, data-informed decisions.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Experience Section */}
      <section className="px-6 py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-12">
            <Briefcase className="h-8 w-8 text-primary" />
            <h2 className="text-4xl font-bold">Experience</h2>
          </div>
          <div className="space-y-6">
            {experience.map((job, index) => (
              <Card key={index} className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-glow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <CardTitle className="text-2xl">{job.title}</CardTitle>
                    <Badge variant="secondary" className="w-fit">{job.period}</Badge>
                  </div>
                  <CardDescription className="text-lg text-primary">{job.company}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{job.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="px-6 py-16 md:py-24">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-12">
            <GraduationCap className="h-8 w-8 text-primary" />
            <h2 className="text-4xl font-bold">Education</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-glow">
              <CardHeader>
                <CardTitle className="text-2xl">M.Sc. Economic Policy</CardTitle>
                <CardDescription className="text-lg">Universität Siegen</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="outline">2018 - 2021</Badge>
              </CardContent>
            </Card>
            <Card className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-glow">
              <CardHeader>
                <CardTitle className="text-2xl">B.Sc. Economics</CardTitle>
                <CardDescription className="text-lg">University of Port-Harcourt</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="outline">2011 - 2015</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-6 py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-12">
            <Code2 className="h-8 w-8 text-primary" />
            <h2 className="text-4xl font-bold">Skills & Expertise</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <Card key={category} className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-glow">
                <CardHeader>
                  <CardTitle className="text-xl">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="hover-scale">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-6 py-16 md:py-24">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12">Notable Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className={`border-primary/20 hover:border-primary/40 transition-all hover:shadow-glow overflow-hidden ${
                  project.highlight ? 'ring-2 ring-accent/50' : ''
                } ${project.link ? 'cursor-pointer' : ''}`}
                onClick={() => project.link && window.open(project.link, '_blank')}
              >
                {/* Project Preview Image */}
                <div className="relative h-48 bg-muted overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                  />
                  {project.highlight && (
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-gradient-to-r from-primary to-accent">Featured</Badge>
                    </div>
                  )}
                </div>
                
                <CardHeader className="pb-3">
                  <div className="mb-2">
                    <div className="flex items-start justify-between gap-4">
                      <CardTitle className="text-2xl">
                        {project.link ? (
                          <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                            {project.title}
                          </a>
                        ) : (
                          project.title
                        )}
                      </CardTitle>
                      <Badge variant="outline" className="text-xs">{project.year}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-6 py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12">Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-glow hover-scale"
              >
                <CardHeader>
                  <div className="flex items-center gap-3 text-primary mb-2">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 py-16 md:py-24">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-primary/20 shadow-lg hover:shadow-glow transition-all">
            <CardHeader className="text-center">
              <CardTitle className="text-4xl mb-4">Let's Connect</CardTitle>
              <CardDescription className="text-lg">
                Ready to transform your data into actionable insights?
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <a 
                  href="mailto:Humphreyemmanuel29@gmail.com"
                  className="flex items-center gap-3 p-4 rounded-lg border border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all group"
                >
                  <Mail className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">Humphreyemmanuel29@gmail.com</p>
                  </div>
                </a>
                <a 
                  href="tel:017643648249"
                  className="flex items-center gap-3 p-4 rounded-lg border border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all group"
                >
                  <Phone className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-sm text-muted-foreground">017643648249</p>
                  </div>
                </a>
                <div className="flex items-center gap-3 p-4 rounded-lg border border-primary/20">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">Wuppertal, Germany</p>
                  </div>
                </div>
                <a 
                  href="https://www.linkedin.com/in/emmanuel-humphrey/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-lg border border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all group"
                >
                  <Linkedin className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                  <div className="flex items-center gap-2">
                    <div>
                      <p className="font-medium">LinkedIn</p>
                      <p className="text-sm text-muted-foreground">View Profile</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  </div>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-primary/20 bg-muted/30">
        <div className="container mx-auto max-w-6xl text-center text-muted-foreground">
          <p>© 2025 Emmanuel Humphrey. All rights reserved.</p>
          <p className="mt-2 text-sm">Transforming data into strategic insights</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
