import { motion, AnimatePresence } from "motion/react";
import { 
  Cloud, 
  Container, 
  Code2, 
  ShieldCheck, 
  Terminal, 
  Cpu, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  ChevronRight,
  Server,
  Workflow,
  Database,
  Monitor
} from "lucide-react";
import { useState, useEffect } from "react";

const SKILLS = [
  {
    category: "Cloud Platforms",
    icon: <Cloud className="w-5 h-5" />,
    items: ["AWS", "Microsoft Azure", "Google Cloud Platform"]
  },
  {
    category: "Containers & Orchestration",
    icon: <Container className="w-5 h-5" />,
    items: ["Docker", "Kubernetes", "Amazon EKS", "Azure AKS", "Helm"]
  },
  {
    category: "Infrastructure as Code",
    icon: <Code2 className="w-5 h-5" />,
    items: ["Terraform", "ARM Templates"]
  },
  {
    category: "CI/CD & Version Control",
    icon: <Workflow className="w-5 h-5" />,
    items: ["Jenkins", "Azure DevOps", "GitHub Actions", "Argo CD", "GitLab"]
  },
  {
    category: "Security & Monitoring",
    icon: <ShieldCheck className="w-5 h-5" />,
    items: ["IAM", "SonarQube", "CloudWatch", "Azure Monitor", "Prometheus", "Grafana"]
  },
  {
    category: "Programming & AI",
    icon: <Terminal className="w-5 h-5" />,
    items: ["Python", "Shell Scripting", "AWS SageMaker", "Amazon Bedrock"]
  }
];

const EXPERIENCE = [
  {
    company: "Enhanced Software Solutions Pvt. Ltd.",
    role: "DevOps Engineer",
    period: "June 2023 – September 2025",
    location: "Thane, India",
    points: [
      "Engineered and managed AWS/Azure infrastructure using Terraform, improving production reliability and scalability.",
      "Delivered AWS migration and Azure migration initiatives from on-prem environments with minimal downtime.",
      "Led migration of on-prem workloads to Kubernetes (EKS/AKS) and standardized deployments with Docker and Helm.",
      "Implemented Azure DevOps CI/CD pipelines and proactive monitoring with CloudWatch and Azure Monitor.",
      "Accelerated release cycles by 70% and reduced cloud total cost of ownership by 60%."
    ]
  },
  {
    company: "Vinayak IT Solutions Kolhapur",
    role: "Junior Software Engineer",
    period: "July 2020 – June 2022",
    location: "Kolhapur, India",
    points: [
      "Developed a cloud-based POS platform on AWS supporting 10+ restaurant locations and 2K+ daily transactions.",
      "Built serverless event workflows with Lambda, SNS, and SQS for real-time order processing and notifications.",
      "Improved platform scalability and performance, achieving 99.99% uptime and 40% lower peak-time latency."
    ]
  }
];

const PROJECTS = [
  {
    title: "Cloud Platform Modernization (AWS EKS)",
    client: "Abbott India Ltd.",
    points: [
      "Modernized 10+ mission-critical on-prem applications into microservices on Amazon EKS.",
      "Built a secure AWS landing zone (VPC, IAM, EKS, RDS, ElastiCache) using Terraform.",
      "Enhanced CI/CD pipelines for Docker-based builds and automated Kubernetes rollouts."
    ]
  },
  {
    title: "Automated Azure Infrastructure Provisioning",
    client: "Internal Project",
    points: [
      "Provisioned Azure infrastructure using modular Terraform with secure remote state in Azure Storage.",
      "Built Azure DevOps pipelines for Terraform plan/apply and microservices releases with Key Vault integration.",
      "Deployed Dockerized services to AKS via ACR and Helm, enabling rolling updates and autoscaling."
    ]
  },
  {
    title: "Cloud-Native ETL Platform on AWS",
    client: "Data Engineering Project",
    points: [
      "Architected a hybrid ETL platform using AWS Glue and Amazon EMR for large-scale serverless data processing.",
      "Implemented AWS Step Functions to orchestrate complex workloads with dynamic EMR cluster provisioning.",
      "Built a scalable S3/Lambda ingestion layer using medallion architecture for raw and processed data zones."
    ]
  },
  {
    title: "DevSecOps & IAM Governance Automation",
    client: "Security & Compliance Project",
    points: [
      "Built an enterprise-grade DevSecOps pipeline in Azure DevOps using Okta for automated identity lifecycle governance.",
      "Implemented Terraform for HIPAA-aligned Azure resource provisioning with version-controlled, auditable deployments.",
      "Integrated SonarQube static analysis into CI pipelines to identify security vulnerabilities early in the SDLC."
    ]
  }
];

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "skills", "experience", "projects", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="glass rounded-full px-6 py-3 flex items-center gap-8"
        >
          {["home", "skills", "experience", "projects", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className={`text-sm font-medium capitalize transition-colors hover:text-blue-400 ${
                activeSection === item ? "text-blue-400" : "text-gray-400"
              }`}
            >
              {item}
            </button>
          ))}
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-600/20 blur-[120px] rounded-full animate-pulse delay-700" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full glass text-xs font-mono text-blue-400 mb-6"
          >
            AVAILABLE FOR NEW OPPORTUNITIES
          </motion.span>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8">
            Wasimahamad <span className="text-gradient">Mulla</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed mb-12 max-w-2xl mx-auto">
            Results-driven <span className="text-white">DevOps Engineer</span> with 4+ years of experience designing and operating cloud-native platforms on AWS and Azure.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => scrollTo('contact')}
              className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-colors flex items-center gap-2"
            >
              Get in touch <Mail className="w-4 h-4" />
            </button>
            <a 
              href="https://linkedin.com/in/wasimahamad" 
              target="_blank" 
              className="px-8 py-4 glass rounded-full font-semibold hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              LinkedIn <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <div className="w-px h-12 bg-gradient-to-b from-blue-500 to-transparent" />
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold mb-3">Technical Expertise</h2>
            <p className="text-gray-400 max-w-xl">Specialized in Kubernetes, Terraform, CI/CD automation, and observability.</p>
          </div>
          <div className="flex gap-2">
            <div className="px-3 py-1 rounded-full glass text-[10px] font-mono text-blue-400">CLOUD NATIVE</div>
            <div className="px-3 py-1 rounded-full glass text-[10px] font-mono text-emerald-400">AUTOMATION</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SKILLS.map((skill, idx) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="p-5 rounded-2xl glass hover:bg-white/[0.03] transition-all group flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0 group-hover:bg-blue-500/20 transition-colors">
                {skill.icon}
              </div>
              <div>
                <h3 className="text-sm font-semibold mb-2 text-gray-200">{skill.category}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {skill.items.map(item => (
                    <span key={item} className="px-2 py-0.5 rounded-md bg-white/5 text-[11px] text-gray-400 border border-white/5">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 bg-white/2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-4xl font-bold mb-4">Work Experience</h2>
            <p className="text-gray-400 max-w-xl">A track record of delivering cloud migrations and highly available production systems.</p>
          </div>

          <div className="space-y-12">
            {EXPERIENCE.map((exp, idx) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-12 border-l border-white/10"
              >
                <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold">{exp.role}</h3>
                    <p className="text-blue-400 font-medium">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-mono text-gray-400">{exp.period}</p>
                    <p className="text-sm text-gray-500">{exp.location}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {exp.points.map((point, i) => (
                    <li key={i} className="text-gray-400 flex gap-3">
                      <ChevronRight className="w-4 h-4 text-blue-500 shrink-0 mt-1" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-400 max-w-xl">Key initiatives focused on modernization and infrastructure automation.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-10 rounded-[2rem] glass relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Server className="w-24 h-24" />
              </div>
              <div className="relative z-10">
                <span className="text-xs font-mono text-blue-400 mb-4 block">CLIENT: {project.client}</span>
                <h3 className="text-3xl font-bold mb-8">{project.title}</h3>
                <ul className="space-y-4">
                  {project.points.map((point, i) => (
                    <li key={i} className="text-gray-400 flex gap-3 leading-relaxed">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-[3rem] p-16 md:p-24"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">Let's build something <span className="text-gradient">reliable</span>.</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Currently open to new opportunities and collaborations. Feel free to reach out for a chat about DevOps, Cloud, or Platform Engineering.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="mailto:wasimahamad.mulla@gmail.com" 
              className="px-10 py-5 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-all hover:scale-105 flex items-center gap-3"
            >
              <Mail className="w-5 h-5" /> Say Hello
            </a>
            <div className="flex gap-4">
              <a href="https://github.com/vasssim-portfolio/" target="_blank" className="w-16 h-16 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/wasimahamad" target="_blank" className="w-16 h-16 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 text-center text-gray-500 text-sm font-mono">
        <p>© {new Date().getFullYear()} Wasimahamad Mulla. Built with React & Tailwind.</p>
      </footer>
    </div>
  );
}
