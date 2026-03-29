// BackgroundBeamsDemo.tsx
"use client";

import { useState } from "react";
import Container from "@/components/Responsive/Container";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ChevronRight,
  Zap,
  Layers,
  Users,
  ArrowRight,
  Star,
  Sparkles,
  Code,
  GitBranch,
  Shield,
  Rocket,
  BarChart3,
  MessageSquare,
  Settings,
  Database,
  Cloud,
  Lock,
} from "lucide-react";
import { TextGenerateEffectDemo } from "../TextGenerateEffectDemo/TextGenerateEffectDemo";
import feature from "../Data/features";
import testimonial from "../Data/testimonials";
import integration from "../Data/integrations";
import companies from "../Data/companie";
import { BackgroundBeamsTwo } from "@/components/ui/BackgroundBeamsTwo";
import Image from "next/image";

export function BackgroundBeamsDemo() {
  const [activeTab, setActiveTab] = useState("features");

  // ! features
  const features = feature;
  // ! testimonials
  const testimonials = testimonial;
  // ! integrations
  const integrations = integration;
  // ! companied
  const companied = companies;

  //  main content
  return (
    <div className="relative flex flex-col overflow-hidden bg-background text-foreground min-h-screen">
      <BackgroundBeams />
      <BackgroundBeamsTwo />

      <Container className="relative z-10 grow">
        <div className="flex flex-col items-center justify-center min-h-screen py-5 md:my-10">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <Badge
              variant="outline"
              className="bg-primary/10 text-primary border-primary/20 px-3 py-1 text-xs font-medium">
              <Sparkles className="w-3 h-3 mr-1" />
              Version 2.0 is here
            </Badge>
          </div>

          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center">
            <TextGenerateEffectDemo />

            <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-relaxed text-muted-foreground">
              Meet the system for modern software development.
              <br className="hidden sm:block" />
              Streamline issues, projects, and product roadmaps with AI-powered
              workflows.
            </p>

            {/* Feature Pills */}
            <div className="mt-8 flex flex-wrap  justify-center gap-3 text-sm">
              <span className="inline-flex items-center gap-1.5 rounded-full border bg-secondary/50 px-4 py-2">
                <Zap size={16} className="text-primary" />
                <span>AI Issue tracking</span>
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border bg-secondary/50 px-4 py-2">
                <Layers size={16} className="text-primary" />
                <span>Smart sprint planning</span>
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border bg-secondary/50 px-4 py-2">
                <Users size={16} className="text-primary" />
                <span>Team workflows</span>
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button className="group relative overflow-hidden bg-primary px-8 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                <span className="relative z-10 flex items-center gap-2 font-semibold">
                  Get started free
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
              </Button>

              <Button
                variant="outline"
                className="group flex items-center gap-2 border-2 px-6 transition-all duration-300 hover:bg-secondary/50 hover:-translate-y-0.5">
                <span className="flex items-center gap-1">
                  <span className="rounded-full font-bold text-ring">New</span>
                  <span className="font-medium">Koda agent for Slack</span>
                </span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            <p className="mt-8 text-sm text-center text-muted-foreground opacity-80">
              Trusted by 1,000+ developers · Open source · MIT Licensed
            </p>
          </div>

          {/* Social Proof Section */}
          <div className="mt-16 w-full max-w-4xl">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold mb-2">
                Join developers from leading companies
              </h2>
              <p className="text-muted-foreground">
                Building the future of software development
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8 opacity-60">
              {companied.map((company, index) => (
                <div
                  key={index}
                  className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  {company}
                </div>
              ))}
            </div>
          </div>

          {/* Features/Integrations/Testimonials Tabs */}
          <div className="mt-16 w-full max-w-5xl mx-auto">
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8 bg-card/50 backdrop-blur-sm border border-border/50">
                <TabsTrigger
                  value="features"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Features
                </TabsTrigger>
                <TabsTrigger
                  value="integrations"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Integrations
                </TabsTrigger>
                <TabsTrigger
                  value="testimonials"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Testimonials
                </TabsTrigger>
              </TabsList>

              <TabsContent value="features" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {features.map((feature, index) => (
                    <Card
                      key={index}
                      className="border-border/50 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div className="p-2 rounded-md bg-primary/10 text-primary">
                            {feature.icon}
                          </div>
                          {feature.badge && (
                            <Badge
                              variant="secondary"
                              className="text-xs bg-primary/10 text-primary border-primary/20">
                              {feature.badge}
                            </Badge>
                          )}
                        </div>
                        <CardTitle className="text-lg">
                          {feature.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-sm">
                          {feature.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="integrations" className="space-y-4">
                <Card className="border-border/50 bg-card/30 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl">
                      Connect with your favorite tools
                    </CardTitle>
                    <CardDescription>
                      Integrate seamlessly with the tools your team already uses
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {integrations.map((integration, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 p-3 rounded-md border border-border/50 bg-card/50 hover:bg-accent/50 transition-colors">
                          <div className="text-primary">{integration.icon}</div>
                          <span className="text-sm font-medium">
                            {integration.name}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 text-center">
                      <Button variant="outline" className="group">
                        View all integrations
                        <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="testimonials" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {testimonials.map((testimonial, index) => (
                    <Card
                      key={index}
                      className="border-border/50 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-center gap-2">
                          <div className="relative w-10 h-10 rounded-full overflow-hidden">
                            <Image
                              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=870&auto=format&fit=crop"
                              alt="person"
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <CardTitle className="text-sm">
                              {testimonial.name}
                            </CardTitle>
                            <CardDescription className="text-xs">
                              {testimonial.role}
                            </CardDescription>
                          </div>
                        </div>
                        <div className="flex">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-3 w-3 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground italic">
                          &quot;{testimonial.content}&quot;
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </Container>
    </div>
  );
}
