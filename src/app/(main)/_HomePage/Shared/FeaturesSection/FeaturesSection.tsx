"use client";
import { useState } from "react";
import { FeatureTabs } from "./Shared/FeatureTabs";
import { FeaturePreview } from "./Shared/FeaturePreview";
import featureData from "./Shared/FeatureData";
import Container from "@/components/Responsive/Container";

const DATA = featureData;

export default function FeaturesSection() {
  const [active, setActive] = useState(DATA[0]);

  return (
    <section>
      <Container>
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          {/* Content Block */}
          <div className="w-full lg:w-100 shrink-0">
            <h2 className="text-4xl font-bold tracking-tighter mb-12 text-foreground leading-[1.1]">
              Ideate and specify <br /> what to build next
            </h2>

            <FeatureTabs
              features={DATA}
              activeId={active.id}
              onSelect={(id) => setActive(DATA.find((d) => d.id === id)!)}
            />
          </div>

          {/* Visualization Block */}
          <div className="w-full grow pt-4">
            <FeaturePreview {...active} />
          </div>
        </div>
      </Container>
    </section>
  );
}
