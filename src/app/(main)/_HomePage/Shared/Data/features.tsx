import {
  Zap,
  GitBranch,
  Shield,
  Rocket,
  BarChart3,
  MessageSquare,
} from "lucide-react";
const feature = [
  {
    icon: <Zap className="h-6 w-6" />,
    title: "AI-Powered Development",
    description:
      "Leverage AI to accelerate your development workflow with intelligent code suggestions and automated testing.",
    badge: "Popular",
  },
  {
    icon: <GitBranch className="h-6 w-6" />,
    title: "Seamless Integration",
    description:
      "Connect with your favorite tools and platforms with our extensive library of integrations.",
    badge: null,
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Enterprise Security",
    description:
      "Bank-level encryption and security protocols to keep your code and data safe.",
    badge: "Secure",
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: "Rapid Deployment",
    description:
      "Deploy your applications in seconds with our optimized CI/CD pipelines.",
    badge: null,
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Advanced Analytics",
    description:
      "Gain insights into your development process with detailed analytics and reporting.",
    badge: "Advanced",
  },
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: "Team Collaboration",
    description:
      "Work together efficiently with real-time collaboration tools and communication features.",
    badge: null,
  },
];

export default feature;
