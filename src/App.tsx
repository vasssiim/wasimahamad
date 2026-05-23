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
  Phone,
  Download,
  ExternalLink, 
  ChevronRight,
  Server,
  Workflow,
  Database,
  Monitor,
  Activity,
  BarChart3,
  Package,
  Anchor,
  Eye,
  ShieldAlert,
  Sun,
  Moon,
  Play,
  Check,
  Loader2
} from "lucide-react";
import { 
  SiDocker, 
  SiKubernetes, 
  SiTerraform, 
  SiAnsible, 
  SiHelm, 
  SiArgo, 
  SiGithubactions, 
  SiJenkins, 
  SiPrometheus, 
  SiGrafana, 
  SiSonarqubecloud, 
  SiDynatrace,
  SiRedhatopenshift
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { Brain, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

const CORE_TECH = [
  { name: "AWS", icon: <FaAws size={40} />, color: "#FF9900" },
  { name: "Docker", icon: <SiDocker size={40} />, color: "#2496ED" },
  { name: "Kubernetes", icon: <SiKubernetes size={40} />, color: "#326CE5" },
  { name: "OpenShift", icon: <SiRedhatopenshift size={40} />, color: "#EE0000" },
  { name: "Terraform", icon: <SiTerraform size={40} />, color: "#7B42BC" },
  { name: "Ansible", icon: <SiAnsible size={40} />, color: "#EE0000" },
  { name: "Helm", icon: <SiHelm size={40} />, color: "#387cc3" }, // High contrast corporate blue
  { name: "ArgoCD", icon: <SiArgo size={40} />, color: "#EF7B4D" },
  { name: "GitHub Actions", icon: <SiGithubactions size={40} />, color: "#2088FF" },
  { name: "Jenkins", icon: <SiJenkins size={40} />, color: "#D24939" },
  { name: "Prometheus", icon: <SiPrometheus size={40} />, color: "#E6522C" },
  { name: "Grafana", icon: <SiGrafana size={40} />, color: "#F46800" },
  { name: "SonarQube", icon: <SiSonarqubecloud size={40} />, color: "#4E9BCD" },
  { name: "Dynatrace", icon: <SiDynatrace size={40} />, color: "#734796" },
  { name: "SageMaker", icon: <Brain size={40} />, color: "#FF9900" },
  { name: "Bedrock", icon: <Sparkles size={40} />, color: "#FF9900" },
  { 
    name: "RAG", 
    icon: (
      <div className="relative flex items-center justify-center w-12 h-10 select-none">
        <Database size={24} className="absolute left-1/4 top-1/2 -translate-y-1/2 opacity-70 text-emerald-500" />
        <Brain size={24} className="absolute right-1/4 top-1/2 -translate-y-1/2 opacity-95 text-indigo-500" />
        <Sparkles size={14} className="absolute -top-1.5 right-1 text-amber-500 animate-pulse" />
      </div>
    ), 
    color: "#4F46E5" 
  },
  { 
    name: "LLM", 
    icon: (
      <div className="relative flex items-center justify-center w-12 h-10 select-none">
        <Cpu size={22} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-500" />
        <Sparkles size={20} className="text-purple-500 animate-pulse" />
      </div>
    ), 
    color: "#8B5CF6" 
  },
];

const SKILLS = [
  {
    category: "Cloud Platforms",
    icon: <Cloud className="w-5 h-5" />,
    items: ["AWS", "Microsoft Azure", "Google Cloud Platform"],
    description: "Design scale-out, multi-region secure virtual private clouds and network frameworks.",
    theme: {
      accent: "indigo",
      text: "text-indigo-600",
      bg: "bg-indigo-50/10",
      border: "border-indigo-100",
      badge: "bg-slate-50 text-slate-700 border-slate-200/60 hover:bg-slate-100/70",
      badgeSelected: "bg-indigo-600 border-indigo-600 text-white shadow-sm shadow-indigo-100",
      iconContainer: "bg-indigo-50 text-indigo-600 border-indigo-100"
    }
  },
  {
    category: "Containers & Orchestration",
    icon: <Container className="w-5 h-5" />,
    items: ["Docker", "Kubernetes", "OpenShift", "Amazon EKS", "Azure AKS", "Helm"],
    description: "Orchestrate automated deployments, elastic scaling, self-healing, and ingress routing.",
    theme: {
      accent: "blue",
      text: "text-blue-600",
      bg: "bg-blue-50/10",
      border: "border-blue-100",
      badge: "bg-slate-50 text-slate-700 border-slate-200/60 hover:bg-slate-100/70",
      badgeSelected: "bg-blue-600 border-blue-600 text-white shadow-sm shadow-blue-100",
      iconContainer: "bg-blue-50 text-blue-600 border-blue-100"
    }
  },
  {
    category: "Infrastructure as Code",
    icon: <Code2 className="w-5 h-5" />,
    items: ["Terraform", "ARM Templates"],
    description: "Write clean, modular blueprints for repeatable, predictable network stacks.",
    theme: {
      accent: "violet",
      text: "text-violet-600",
      bg: "bg-violet-50/10",
      border: "border-violet-100",
      badge: "bg-slate-50 text-slate-700 border-slate-200/60 hover:bg-slate-100/70",
      badgeSelected: "bg-violet-600 border-violet-600 text-white shadow-sm shadow-violet-100",
      iconContainer: "bg-violet-50 text-violet-600 border-violet-100"
    }
  },
  {
    category: "CI/CD & Version Control",
    icon: <Workflow className="w-5 h-5" />,
    items: ["Jenkins", "Azure DevOps", "GitHub Actions", "Argo CD", "GitLab"],
    description: "Automate code quality checks, static scans, regression pipelines, and deployment rollouts.",
    theme: {
      accent: "rose",
      text: "text-rose-600",
      bg: "bg-rose-50/10",
      border: "border-rose-100",
      badge: "bg-slate-50 text-slate-700 border-slate-200/60 hover:bg-slate-100/70",
      badgeSelected: "bg-rose-600 border-rose-600 text-white shadow-sm shadow-rose-100",
      iconContainer: "bg-rose-50 text-rose-600 border-rose-100"
    }
  },
  {
    category: "Security & Monitoring",
    icon: <ShieldCheck className="w-5 h-5" />,
    items: ["IAM", "SonarQube", "CloudWatch", "Azure Monitor", "Prometheus", "Grafana"],
    description: "Establish automated continuous auditing, logs, real-time alerts, and metric dashboards.",
    theme: {
      accent: "emerald",
      text: "text-emerald-600",
      bg: "bg-emerald-50/10",
      border: "border-emerald-100",
      badge: "bg-slate-50 text-slate-700 border-slate-200/60 hover:bg-slate-100/70",
      badgeSelected: "bg-emerald-600 border-emerald-600 text-white shadow-sm shadow-emerald-100",
      iconContainer: "bg-emerald-50 text-emerald-600 border-emerald-100"
    }
  },
  {
    category: "Programming & AI",
    icon: <Terminal className="w-5 h-5" />,
    items: ["Python", "Shell Scripting", "RAG", "LLM", "AWS SageMaker", "Amazon Bedrock"],
    description: "Develop serverless scripts, task engines, and model pipelines for analytics ops.",
    theme: {
      accent: "amber",
      text: "text-amber-600",
      bg: "bg-amber-50/10",
      border: "border-amber-100",
      badge: "bg-slate-50 text-slate-700 border-slate-200/60 hover:bg-slate-100/70",
      badgeSelected: "bg-amber-600 border-amber-600 text-white shadow-sm shadow-amber-100",
      iconContainer: "bg-amber-50 text-amber-600 border-amber-100"
    }
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
    link: "https://vasssiim.github.io/portfolio_EKSModernization/",
    icon: <Container className="w-24 h-24" />,
    points: [
      "Modernized 10+ mission-critical on-prem applications into microservices on Amazon EKS.",
      "Built a secure AWS landing zone (VPC, IAM, EKS, RDS, ElastiCache) using Terraform.",
      "Enhanced CI/CD pipelines for Docker-based builds and automated Kubernetes rollouts."
    ]
  },
  {
    title: "Automated Azure Infrastructure Provisioning",
    client: "Internal Project",
    link: "https://vasssiim.github.io/portfolio_AzureTerraform/",
    icon: <Code2 className="w-24 h-24" />,
    points: [
      "Provisioned Azure infrastructure using modular Terraform with secure remote state in Azure Storage.",
      "Built Azure DevOps pipelines for Terraform plan/apply and microservices releases with Key Vault integration.",
      "Deployed Dockerized services to AKS via ACR and Helm, enabling rolling updates and autoscaling."
    ]
  },
  {
    title: "Cloud-Native ETL Platform on AWS",
    client: "Data Engineering Project",
    link: "https://vasssiim.github.io/portfolio_ETLPlatform/",
    icon: <Database className="w-24 h-24" />,
    points: [
      "Architected a hybrid ETL platform using AWS Glue and Amazon EMR for large-scale serverless data processing.",
      "Implemented AWS Step Functions to orchestrate complex workloads with dynamic EMR cluster provisioning.",
      "Built a scalable S3/Lambda ingestion layer using medallion architecture for raw and processed data zones."
    ]
  },
  {
    title: "DevSecOps & IAM Governance Automation",
    client: "Security & Compliance Project",
    link: "https://github.com/vasssiim/portfolio_DevSecOps",
    icon: <ShieldCheck className="w-24 h-24" />,
    points: [
      "Built an enterprise-grade DevSecOps pipeline in Azure DevOps using Okta for automated identity lifecycle governance.",
      "Implemented Terraform for HIPAA-aligned Azure resource provisioning with version-controlled, auditable deployments.",
      "Integrated SonarQube static analysis into CI pipelines to identify security vulnerabilities early in the SDLC."
    ]
  }
];

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [selectedTools, setSelectedTools] = useState<Record<string, string>>({
    "Cloud Platforms": "AWS",
    "Containers & Orchestration": "Kubernetes",
    "Infrastructure as Code": "Terraform",
    "CI/CD & Version Control": "Azure DevOps",
    "Security & Monitoring": "Prometheus",
    "Programming & AI": "Python"
  });

  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationStep, setSimulationStep] = useState<number>(-1);
  const [consoleLogs, setConsoleLogs] = useState<Array<{type: string, text: string}>>([
    { type: "info", text: "🤖 DevOps pipeline board simulator idling. Ready to test." },
    { type: "info", text: "💡 Tip: Click and choose different tools inside the expertise cards on the left, then click 'Launch Deployment Pipeline' to run a custom build simulation!" }
  ]);

  const runSimulation = async () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setSimulationStep(0);
    setConsoleLogs([
      { type: "info", text: "🚀 Starting live integration & delivery workload simulation run..." },
      { type: "info", text: "⚙️ Blueprint configuration loaded from your custom technical stack." }
    ]);

    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    // Step 0: Plan & Code
    await delay(1200);
    const aiTool = selectedTools["Programming & AI"];
    setConsoleLogs(prev => [
      ...prev,
      { type: "success", text: `✔ [STAGE 1] WORKSPACE: Source codebase compilation succeeded with interpreter: ${aiTool}.` },
      { type: "info", text: aiTool === "RAG" 
        ? "ℹ️ RAG Indexer: Embedded chunk queries & optimized Pinecone / Milvus vector index lookup similarity parameters." 
        : aiTool === "LLM"
        ? "ℹ️ LLM Framework: Instantiated context windows with HuggingFace generation pipeline configuration."
        : "ℹ️ Webhook synchronized: repository state mapped to active pipeline runner." }
    ]);
    setSimulationStep(1);

    // Step 1: CI/CD Pipeline
    await delay(1200);
    setConsoleLogs(prev => [
      ...prev,
      { type: "success", text: `✔ [STAGE 2] CI/CD: Automated build agent booted up cleanly under ${selectedTools["CI/CD & Version Control"]}.` },
      { type: "info", text: "ℹ️ SonarQube: Quality Gate evaluation completed. Core index has 92% patch coverage." },
      { type: "info", text: "ℹ️ Registry: Docker container image built, optimized, and pushed to secure repository." }
    ]);
    setSimulationStep(2);

    // Step 2: Infrastructure IaC
    await delay(1200);
    setConsoleLogs(prev => [
      ...prev,
      { type: "success", text: `✔ [STAGE 3] IaC: Synchronized cloud blueprints utilizing IaC engine: ${selectedTools["Infrastructure as Code"]}.` },
      { type: "info", text: `ℹ️ State Engine: Applying Terraform changes to resource provider contexts on ${selectedTools["Cloud Platforms"]}.` },
      { type: "info", text: "✔ Applied cleanly: 12 cloud resources active, 3 subnets configured, 0 infrastructure errors." }
    ]);
    setSimulationStep(3);

    // Step 3: Deployment Orchestration
    await delay(1200);
    const orchTool = selectedTools["Containers & Orchestration"];
    setConsoleLogs(prev => [
      ...prev,
      { type: "success", text: `✔ [STAGE 4] DEPLOY: Dispatched container definition manifest down to ${orchTool}.` },
      { type: "info", text: orchTool === "OpenShift"
        ? `ℹ️ OpenShift CLI (oc): Synchronizing DeploymentConfigs, Route resource definitions, and custom Security Context Limits.`
        : `ℹ️ Cluster Manager: Directing container replica sets rolling update into ${selectedTools["Cloud Platforms"]} landing zone.` },
      { type: "info", text: "✔ Traffic shifting: All nodes responding on target port 3000. Ingress active." }
    ]);
    setSimulationStep(4);

    // Step 4: Observability Rigging
    await delay(1200);
    setConsoleLogs(prev => [
      ...prev,
      { type: "success", text: `✔ [STAGE 5] MONITORS: Active health instrumentation configured via ${selectedTools["Security & Monitoring"]}.` },
      { type: "success", text: "🎉 SUCCESS: Modular deployment execution finished. System reports 100% HEALTHY (Zero Downtime guaranteed)." }
    ]);
    setSimulationStep(5);
    setIsSimulating(false);
  };

  const handleSelectTool = (category: string, tool: string) => {
    setSelectedTools(prev => ({
      ...prev,
      [category]: tool
    }));
  };

  useEffect(() => {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "skills", "experience", "strategy", "projects", "contact"];
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
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-3 sm:p-6 bg-gradient-to-b from-white/90 via-white/40 to-transparent backdrop-blur-[4px]">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="glass rounded-full px-3.5 py-2 sm:px-5 sm:py-2.5 flex items-center gap-1.5 sm:gap-4 shadow-lg max-w-[95vw] md:max-w-none overflow-x-auto scrollbar-none"
        >
          {["home", "skills", "experience", "strategy", "projects", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className={`whitespace-nowrap flex-shrink-0 text-xs sm:text-sm font-medium capitalize transition-all duration-300 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full ${
                activeSection === item 
                  ? "text-blue-600 bg-blue-50/80 font-semibold shadow-xs" 
                  : "text-slate-600 hover:text-blue-600 hover:bg-slate-100/50"
              }`}
            >
              {item === "strategy" ? "Strategy" : item}
            </button>
          ))}
          <div className="w-px h-5 bg-slate-200 mx-1 sm:mx-2 flex-shrink-0" />
          <a 
            href="https://drive.google.com/uc?export=download&id=1w9njQhvdhgZyUgaBzIatY8v3TATIBsqD" 
            target="_blank"
            rel="noopener noreferrer"
            download="Wasimahamad_Mulla_Resume.pdf"
            className="whitespace-nowrap flex-shrink-0 text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full hover:bg-blue-50/50"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-[100dvh] pt-28 pb-16 flex flex-col items-center justify-center px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-radial-[circle_at_center_rgba(120,119,198,0.03)]">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 blur-[125px] rounded-full animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 blur-[125px] rounded-full animate-pulse-glow delay-700" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl"
        >
          <motion.span 
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-mono font-bold tracking-wider mb-6 border border-emerald-200/80 shadow-xs"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
            </span>
            AVAILABLE FOR NEW OPPORTUNITIES
          </motion.span>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tighter mb-6 text-slate-900 leading-tight">
            Wasimahamad <span className="text-gradient">Mulla</span>
          </h1>
          <p className="text-base sm:text-lg md:text-2xl text-slate-600 font-light leading-relaxed mb-10 max-w-2xl mx-auto px-2">
            Results-driven <span className="text-slate-900 font-semibold">DevOps Engineer</span> with 4+ years of experience designing and operating cloud-native platforms on AWS and Azure.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full max-w-lg mx-auto px-4 sm:px-0">
            <button 
              onClick={() => scrollTo('contact')}
              className="group relative px-6 py-3.5 sm:px-8 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold transition-all hover:scale-[1.03] active:scale-[0.98] flex items-center justify-center gap-3 shadow-lg shadow-blue-500/25 cursor-pointer text-base"
            >
              <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Get in touch
            </button>

            <a 
              href="https://drive.google.com/uc?export=download&id=1w9njQhvdhgZyUgaBzIatY8v3TATIBsqD" 
              target="_blank"
              rel="noopener noreferrer"
              download="Wasimahamad_Mulla_Resume.pdf"
              className="px-6 py-3.5 sm:px-8 sm:py-4 glass rounded-2xl font-bold hover:bg-slate-100 text-slate-900 transition-all hover:scale-[1.03] active:scale-[0.98] flex items-center justify-center gap-3 border border-slate-200 cursor-pointer text-base"
            >
              <Download className="w-5 h-5" />
              Resume
            </a>
            
            <div className="flex items-center gap-1 p-1.5 glass rounded-2xl justify-center h-[52px] sm:h-auto">
              <a 
                href="tel:8007370003" 
                className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl hover:bg-slate-200/60 transition-colors group"
                title="Call"
              >
                <Phone className="w-5 h-5 text-slate-500 group-hover:text-blue-600 transition-colors" />
              </a>
              <div className="w-px h-6 bg-slate-200" />
              <a 
                href="https://github.com/vasssiim" 
                target="_blank" 
                className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl hover:bg-slate-200/60 transition-colors group"
                title="GitHub"
              >
                <Github className="w-5 h-5 text-slate-500 group-hover:text-blue-600 transition-colors" />
              </a>
              <div className="w-px h-6 bg-slate-200" />
              <a 
                href="https://linkedin.com/in/wasimahamad" 
                target="_blank" 
                className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl hover:bg-slate-200/60 transition-colors group"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-slate-500 group-hover:text-blue-600 transition-colors" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block"
        >
          <div className="w-px h-12 bg-gradient-to-b from-blue-500 to-transparent" />
        </motion.div>
      </section>

      {/* Core Tech Grid (Stable) */}
      <div className="py-16 sm:py-24 border-y border-slate-200 bg-slate-50/50 relative overflow-hidden">
        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: `linear-gradient(to right, #4f4f4f 1px, transparent 1px), linear-gradient(to bottom, #4f4f4f 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg via-transparent to-bg" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-12 sm:gap-y-16 gap-x-6 sm:gap-x-8 justify-items-center">
            {CORE_TECH.map((tech, idx) => (
              <motion.div 
                key={tech.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.03 }}
                className="flex flex-col items-center gap-4 sm:gap-6 group cursor-default relative animate-none"
              >
                {/* Hover Glow */}
                <div 
                  className="absolute inset-0 -m-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl rounded-full"
                  style={{ background: `radial-gradient(circle, ${tech.color}33 0%, transparent 70%)` }}
                />
                
                <div 
                  className="relative z-10 transition-all duration-500 group-hover:scale-110 group-hover:brightness-110 drop-shadow-[0_0_15px_rgba(0,0,0,0.1)]"
                  style={{ color: tech.color }}
                >
                  {tech.icon}
                </div>
                <span className="relative z-10 text-[10px] sm:text-[11px] font-mono font-bold text-slate-500 group-hover:text-slate-800 transition-colors uppercase tracking-[0.15em] sm:tracking-[0.2em] text-center">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <section id="skills" className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3 text-slate-900">
              Technical <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-slate-600 max-w-xl">
              Click individual tool badges to assemble your custom deployment blueprint stack, and simulate a zero-downtime deployment.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <div className="px-3.5 py-1.5 rounded-full bg-blue-50 text-[10px] font-mono font-bold tracking-wider text-blue-600 border border-blue-200/50">CLOUD NATIVE</div>
            <div className="px-3.5 py-1.5 rounded-full bg-emerald-50 text-[10px] font-mono font-bold tracking-wider text-emerald-600 border border-emerald-200/50">AUTOMATION</div>
            <div className="px-3.5 py-1.5 rounded-full bg-indigo-50 text-[10px] font-mono font-bold tracking-wider text-indigo-600 border border-indigo-200/50">DEVSECOPS</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Panel: Category Selector Cards */}
          <div className="lg:col-span-6 space-y-4">
            {SKILLS.map((skill, idx) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="p-5 rounded-3xl border border-slate-200/80 bg-white/70 backdrop-blur-md flex flex-col gap-3 relative group hover:shadow-lg hover:border-slate-300 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300 ${skill.theme.iconContainer}`}>
                    {skill.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center justify-between gap-1.5">
                      <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {skill.category}
                      </h3>
                      <span className="text-[9px] font-mono font-extrabold uppercase px-2 py-0.5 rounded-lg bg-slate-100 text-slate-700 tracking-wider">
                        Active: {selectedTools[skill.category]}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </div>
                
                {/* Clickable Tool Pills */}
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {skill.items.map(item => {
                    const isSelected = selectedTools[skill.category] === item;
                    return (
                      <button
                        key={item}
                        onClick={() => handleSelectTool(skill.category, item)}
                        disabled={isSimulating}
                        className={`px-2.5 py-1.5 rounded-xl text-xs font-mono font-medium border transition-all duration-205 cursor-pointer disabled:opacity-50 ${
                          isSelected 
                            ? skill.theme.badgeSelected 
                            : `${skill.theme.badge} border-slate-200/50 hover:border-slate-300`
                        }`}
                      >
                        {item}
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Panel: Interactive DevOps Sandbox Simulation Board */}
          <div className="lg:col-span-6 lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-slate-200/85 bg-slate-900 p-6 md:p-8 text-white shadow-xl relative overflow-hidden flex flex-col h-full"
            >
              {/* Dynamic status glowing header */}
              <div className="absolute top-0 right-0 p-4 opacity-15 pointer-events-none">
                <Cpu className="w-24 h-24 text-blue-400 rotate-12" />
              </div>

              <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-3.5 w-3.5 relative">
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isSimulating ? 'bg-amber-400' : 'bg-emerald-400'}`}></span>
                    <span className={`relative inline-flex rounded-full h-3.5 w-3.5 ${isSimulating ? 'bg-amber-500' : 'bg-emerald-500'}`}></span>
                  </span>
                  <div>
                    <span className="text-xs font-mono font-bold tracking-widest text-slate-400 block">PIPELINE SANDBOX</span>
                    <span className="text-xs font-medium text-slate-300 mt-0.5 block">
                      {isSimulating ? 'Deploying Workload...' : 'Status: System Standby'}
                    </span>
                  </div>
                </div>

                <button
                  onClick={runSimulation}
                  disabled={isSimulating}
                  className={`px-4 py-2.5 rounded-xl font-bold text-xs font-mono transition-all duration-300 flex items-center gap-2 shadow-lg hover:scale-[1.02] active:scale-[0.98] cursor-pointer ${
                    isSimulating 
                      ? 'bg-slate-800 text-slate-500 border border-slate-700 pointer-events-none' 
                      : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-950/40 border border-emerald-500'
                  }`}
                >
                  {isSimulating ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      SIMULATING...
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 fill-current" />
                      LAUNCH PIPELINE
                    </>
                  )}
                </button>
              </div>

              {/* Visualized Pipeline Path Blueprint */}
              <div className="bg-slate-950/80 rounded-2xl p-5 border border-slate-800 mb-6 flex flex-col gap-4 relative">
                <h4 className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">
                  Live Stack Pipeline Blueprint
                </h4>
                
                {/* 5 Sequential Nodes */}
                <div className="grid grid-cols-5 gap-1.5 md:gap-3 justify-items-center relative">
                  {/* Connecting line */}
                  <div className="absolute top-4 left-[10%] right-[10%] h-0.5 bg-slate-800 z-0" />
                  
                  {/* Active glowing line filling during simulation */}
                  <div 
                    className="absolute top-4 left-[10%] h-0.5 bg-emerald-500 transition-all duration-300 z-0"
                    style={{ 
                      width: `${simulationStep === -1 ? 0 : (Math.min(simulationStep, 4) / 4) * 80}%`,
                      opacity: simulationStep >= 0 ? 1 : 0
                    }}
                  />

                  {/* Node 1: Code */}
                  <div className="flex flex-col items-center gap-1.5 z-10 relative">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 text-xs transition-all duration-300 ${
                      simulationStep >= 0 
                        ? 'bg-emerald-950 border-emerald-500 text-emerald-400 shadow-md shadow-emerald-500/20' 
                        : 'bg-slate-900 border-slate-800 text-slate-500'
                    }`}>
                      {simulationStep > 0 ? <Check className="w-3.5 h-3.5" /> : "1"}
                    </div>
                    <span className="text-[9px] font-bold text-slate-400 tracking-tight text-center">Plan</span>
                    <span className="text-[8px] font-mono text-emerald-400 font-bold bg-slate-900/40 px-1 rounded truncate max-w-[62px]">
                      {selectedTools["Programming & AI"]}
                    </span>
                  </div>

                  {/* Node 2: CI/CD */}
                  <div className="flex flex-col items-center gap-1.5 z-10 relative">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 text-xs transition-all duration-300 ${
                      simulationStep >= 1 
                        ? 'bg-emerald-950 border-emerald-500 text-emerald-400 shadow-md shadow-emerald-500/20' 
                        : 'bg-slate-900 border-slate-800 text-slate-500'
                    }`}>
                      {simulationStep > 1 ? <Check className="w-3.5 h-3.5" /> : "2"}
                    </div>
                    <span className="text-[9px] font-bold text-slate-400 tracking-tight text-center">CI/CD</span>
                    <span className="text-[8px] font-mono text-emerald-400 font-bold bg-slate-900/40 px-1 rounded truncate max-w-[62px]">
                      {selectedTools["CI/CD & Version Control"]}
                    </span>
                  </div>

                  {/* Node 3: IaC */}
                  <div className="flex flex-col items-center gap-1.5 z-10 relative">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 text-xs transition-all duration-300 ${
                      simulationStep >= 2 
                        ? 'bg-emerald-950 border-emerald-500 text-emerald-400 shadow-md shadow-emerald-500/20' 
                        : 'bg-slate-900 border-slate-800 text-slate-500'
                    }`}>
                      {simulationStep > 2 ? <Check className="w-3.5 h-3.5" /> : "3"}
                    </div>
                    <span className="text-[9px] font-bold text-slate-400 tracking-tight text-center">IaC</span>
                    <span className="text-[8px] font-mono text-emerald-400 font-bold bg-slate-900/40 px-1 rounded truncate max-w-[62px]">
                      {selectedTools["Infrastructure as Code"]}
                    </span>
                  </div>

                  {/* Node 4: Run */}
                  <div className="flex flex-col items-center gap-1.5 z-10 relative">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 text-xs transition-all duration-300 ${
                      simulationStep >= 3 
                        ? 'bg-emerald-950 border-emerald-500 text-emerald-400 shadow-md shadow-emerald-500/20' 
                        : 'bg-slate-900 border-slate-800 text-slate-500'
                    }`}>
                      {simulationStep > 3 ? <Check className="w-3.5 h-3.5" /> : "4"}
                    </div>
                    <span className="text-[9px] font-bold text-slate-400 tracking-tight text-center">Deploy</span>
                    <span className="text-[8px] font-mono text-emerald-400 font-bold bg-slate-900/40 px-1 rounded truncate max-w-[62px]">
                      {selectedTools["Containers & Orchestration"]}
                    </span>
                  </div>

                  {/* Node 5: Watch */}
                  <div className="flex flex-col items-center gap-1.5 z-10 relative">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 text-xs transition-all duration-300 ${
                      simulationStep >= 4 
                        ? 'bg-emerald-950 border-emerald-500 text-emerald-400 shadow-md shadow-emerald-500/20' 
                        : 'bg-slate-900 border-slate-800 text-slate-500'
                    }`}>
                      {simulationStep > 4 ? <Check className="w-3.5 h-3.5" /> : "5"}
                    </div>
                    <span className="text-[9px] font-bold text-slate-400 tracking-tight text-center">Monitor</span>
                    <span className="text-[8px] font-mono text-emerald-400 font-bold bg-slate-900/40 px-1 rounded truncate max-w-[62px]">
                      {selectedTools["Security & Monitoring"]}
                    </span>
                  </div>
                </div>
              </div>

              {/* Terminal Emulated Logs Feed */}
              <div className="flex-1 flex flex-col bg-black/95 rounded-2xl p-4 font-mono text-xs border border-slate-800 h-64 overflow-hidden shadow-inner relative justify-between">
                <div className="absolute top-3 right-3 flex items-center gap-1 text-[10px] font-mono text-slate-600 uppercase">
                  <span>TTY1</span>
                  <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full animate-pulse-glow" />
                </div>
                
                <div className="overflow-y-auto space-y-2 pr-2 custom-scrollbar flex-1 max-h-52">
                  <AnimatePresence initial={false}>
                    {consoleLogs.map((log, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -5, y: 5 }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        exit={{ opacity: 0 }}
                        className={`${
                          log.type === 'success' 
                            ? 'text-emerald-400 font-bold' 
                            : log.type === 'error' 
                            ? 'text-rose-400' 
                            : 'text-slate-350'
                        }`}
                      >
                        {log.text}
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                <div className="mt-3 pt-3 border-t border-slate-900 flex items-center justify-between text-[10px] text-slate-500">
                  <span>Host: cluster.wasim.local</span>
                  <span>Port: 3000 (HTTP)</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 sm:py-24 md:py-32 bg-slate-50/40 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">Work Experience</h2>
            <p className="text-slate-600 max-w-xl text-sm sm:text-base">A proven background architectural history of scaling distributed systems, streamlining deployment velocity, and optimizing infrastructure operations.</p>
          </div>

          <div className="space-y-12">
            {EXPERIENCE.map((exp, idx) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-6 sm:pl-12 border-l border-slate-200 pb-8 last:pb-0 group"
              >
                {/* Responsive glowing timeline node */}
                <div className="absolute left-0 top-1.5 -translate-x-1/2 w-5 h-5 rounded-full bg-slate-50 border-4 border-blue-500 z-10 transition-transform duration-300 group-hover:scale-125" />
                <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-sans tracking-tight group-hover:text-blue-600 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-blue-600 font-semibold text-base sm:text-lg">{exp.company}</p>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="text-xs sm:text-sm font-mono font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-full border border-slate-200/50 inline-block shadow-xs">
                      {exp.period}
                    </p>
                    <p className="text-[10px] sm:text-xs font-mono text-slate-500 mt-2 uppercase tracking-wider">{exp.location}</p>
                  </div>
                </div>
                <ul className="space-y-3 max-w-4xl">
                  {exp.points.map((point, i) => (
                    <li key={i} className="text-slate-600 flex gap-2.5 sm:gap-3 leading-relaxed text-sm sm:text-base">
                      <ChevronRight className="w-4 h-4 text-blue-600 shrink-0 mt-1 transition-transform duration-300 group-hover:translate-x-1" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment Strategy Section */}
      <section id="strategy" className="py-16 sm:py-24 md:py-32 bg-slate-50/50 border-y border-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.03),transparent_70%)]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-12 sm:mb-20 text-center px-2">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 text-slate-900 tracking-tight"
            >
              Deployment <span className="text-gradient">Strategy</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed"
            >
              Mastering high-availability release patterns to ensure zero-downtime and seamless user experiences in production environments.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass rounded-[1.5rem] sm:rounded-[2.5rem] p-5 sm:p-8 md:p-14 relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 border border-emerald-500/15">
                    <Activity className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="text-xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Blue-Green Deployment</h3>
                </div>
                
                <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
                  A powerful release strategy that reduces downtime and risk by running two identical production environments. Traffic is routed to one (Blue) while the new version is tested in the other (Green), allowing for instant rollback if issues arise.
                </p>

                <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
                  {[
                    "Zero Downtime Releases",
                    "Instant Rollback Capability",
                    "Parallel Environment Testing",
                    "Reduced Deployment Risk"
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-700">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 shrink-0">
                        <ShieldCheck className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-semibold text-sm sm:text-base">{feat}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="https://vasssiim.github.io/portfolio_BlueGreenDeployment/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3.5 sm:px-8 sm:py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-bold transition-all hover:scale-[1.03] active:scale-[0.98] shadow-lg shadow-emerald-500/25 cursor-pointer text-sm sm:text-base"
                >
                  View Deployment Live <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 animate-none" />
                </a>
              </div>

              <div className="relative group mt-4 lg:mt-0">
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/15 to-blue-500/15 blur-3xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                <div className="relative glass rounded-3xl p-6 sm:p-8 border border-slate-200 flex flex-col gap-6 sm:gap-8 shadow-md">
                  {/* Visual representation of Blue-Green */}
                  <div className="flex justify-between items-center px-2 sm:px-4">
                    <div className="flex flex-col items-center gap-2 sm:gap-3">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-600 border border-blue-500/25">
                        <Server className="w-6 h-6 sm:w-8 sm:h-8" />
                      </div>
                      <span className="text-[10px] sm:text-xs font-mono font-bold text-blue-600">BLUE (OLD)</span>
                    </div>
                    <div className="flex-1 flex justify-center mx-1 sm:mx-2">
                      <div className="w-full max-w-[60px] sm:max-w-[100px] h-px bg-gradient-to-r from-blue-500/50 to-emerald-500/50 relative">
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-1.5 py-0.5 rounded-full bg-slate-100 border border-slate-200/50 text-[7px] sm:text-[8px] font-extrabold tracking-wider whitespace-nowrap">ROUTE</div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-2 sm:gap-3">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 border border-emerald-500/30 shadow-lg shadow-emerald-500/25 animate-pulse">
                        <Server className="w-6 h-6 sm:w-8 sm:h-8" />
                      </div>
                      <span className="text-[10px] sm:text-xs font-mono font-bold text-emerald-600 uppercase">Green (New)</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-100/50 border border-slate-200/55 space-y-3">
                    <div className="h-2 w-3/4 bg-slate-200/70 rounded-full" />
                    <div className="h-2 w-1/2 bg-slate-200/70 rounded-full" />
                    <div className="h-2 w-2/3 bg-slate-200/70 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-20 px-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-slate-900 tracking-tight">Featured Projects</h2>
          <p className="text-slate-600 max-w-xl text-sm sm:text-base">Deep architectural design showcases centering high performance, resilience, and DevSecOps compliance.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-6 sm:p-10 rounded-[1.5rem] sm:rounded-[2.5rem] glass-interactive relative overflow-hidden group flex flex-col justify-between h-full cursor-default"
            >
              {/* Dynamic decorative backdrop icons mapping */}
              <div className="absolute top-0 right-0 p-8 text-slate-400 opacity-[0.06] transition-opacity group-hover:opacity-[0.11] pointer-events-none">
                {project.icon}
              </div>
              
              <div className="relative z-10 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono font-bold tracking-widest text-blue-600 mb-4 block uppercase">CLIENT: {project.client}</span>
                  <h3 className="text-xl sm:text-3xl font-extrabold mb-6 sm:mb-8 text-slate-900 tracking-tight">{project.title}</h3>
                  <ul className="space-y-3 sm:space-y-4">
                    {project.points.map((point, i) => (
                      <li key={i} className="text-slate-600 flex gap-2.5 sm:gap-3 leading-relaxed text-sm sm:text-base">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0 group-hover:scale-125 transition-all duration-350" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {project.link && (
                  <div className="mt-8 pt-6 border-t border-slate-150">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-blue-600 bg-blue-50/55 hover:bg-blue-100/50 border border-blue-500/10 transition-all group/btn cursor-pointer"
                    >
                      View Live Project 
                      <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-[1.5rem] sm:rounded-[2.5rem] p-6 sm:p-10 md:p-14 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10 relative overflow-hidden shadow-2xl"
        >
          <div className="text-center lg:text-left max-w-xl">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-4 tracking-tight text-slate-900 leading-tight">
              Let's build something <span className="text-gradient">reliable</span>.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
              Open to new opportunities in DevOps, Cloud Architecture, and Platform Engineering. Let's start the conversation.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0 w-full lg:w-auto">
            <a 
              href="https://drive.google.com/uc?export=download&id=1w9njQhvdhgZyUgaBzIatY8v3TATIBsqD" 
              target="_blank"
              rel="noopener noreferrer"
              download="Wasimahamad_Mulla_Resume.pdf"
              className="w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 glass rounded-2xl font-bold hover:bg-slate-100 text-slate-900 transition-all hover:scale-[1.03] active:scale-[0.98] flex items-center justify-center gap-3 border border-slate-200 cursor-pointer text-base"
            >
              <Download className="w-5 h-5" /> Resume
            </a>
            <a 
              href="mailto:wasimahamad.mulla@gmail.com" 
              className="w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold transition-all hover:scale-[1.03] active:scale-[0.98] flex items-center justify-center gap-3 shadow-lg shadow-blue-500/25 cursor-pointer text-base"
            >
              <Mail className="w-5 h-5" /> Say Hello
            </a>
            <div className="flex gap-2.5 sm:gap-4 mt-2 sm:mt-0 justify-center w-full sm:w-auto">
              <a href="tel:8007370003" className="w-12 h-12 sm:w-14 sm:h-14 glass-interactive rounded-2xl flex items-center justify-center group" title="Call">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-slate-500 group-hover:text-blue-600 transition-all group-hover:scale-110" />
              </a>
              <a href="https://github.com/vasssiim" target="_blank" rel="noopener noreferrer" className="w-12 h-12 sm:w-14 sm:h-14 glass-interactive rounded-2xl flex items-center justify-center group" title="GitHub">
                <Github className="w-5 h-5 sm:w-6 sm:h-6 text-slate-500 group-hover:text-blue-600 transition-all group-hover:scale-110" />
              </a>
              <a href="https://linkedin.com/in/wasimahamad" target="_blank" rel="noopener noreferrer" className="w-12 h-12 sm:w-14 sm:h-14 glass-interactive rounded-2xl flex items-center justify-center group" title="LinkedIn">
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-slate-500 group-hover:text-blue-600 transition-all group-hover:scale-110" />
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 sm:px-6 border-t border-slate-200 text-center text-slate-500 text-xs sm:text-sm font-mono tracking-wider">
        <p>© {new Date().getFullYear()} Wasimahamad Mulla. Built with React & Tailwind.</p>
      </footer>
    </div>
  );
}
