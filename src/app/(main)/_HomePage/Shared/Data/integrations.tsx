import {
  Code,
  GitBranch,
  MessageSquare,
  Settings,
  Database,
  Cloud,
  Lock,
} from "lucide-react";

const integration = [
  { name: "GitHub", icon: <Code className="h-5 w-5" /> },
  { name: "GitLab", icon: <GitBranch className="h-5 w-5" /> },
  { name: "AWS", icon: <Cloud className="h-5 w-5" /> },
  { name: "Docker", icon: <Database className="h-5 w-5" /> },
  { name: "Slack", icon: <MessageSquare className="h-5 w-5" /> },
  { name: "Jira", icon: <Settings className="h-5 w-5" /> },
  { name: "Azure", icon: <Cloud className="h-5 w-5" /> },
  { name: "Vault", icon: <Lock className="h-5 w-5" /> },
];

export default integration;
