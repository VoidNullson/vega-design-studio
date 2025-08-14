import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ArrowRight, ExternalLink, Target, CheckCircle2, Lightbulb } from "lucide-react";

const caseStudies = [/* shortened for brevity */];

export default function VegaCaseStudies() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:py-16">
      <div className="mb-8 text-center md:mb-12">
        <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-3xl md:text-5xl font-bold tracking-tight">
          Selected Work
        </motion.h1>
        <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
          Case studies that show how Vega Design Studio blends strategy, design, and code to drive outcomes.
        </p>
      </div>
      {/* Tabs to switch between projects */}
    </div>
  );
}
