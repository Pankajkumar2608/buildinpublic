"use client";
import React, { useState } from "react";
import {
  Users,
  Activity,
  Zap,
  Target,
  CheckCircle2,
  Clock,
  ArrowUpRight,
  MessageSquare,
  Plus,
  Flame,
} from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Premium Stat Card Component
const PremiumStat = ({ label, value, icon: Icon, description, trend }: any) => (
  <div className="relative group overflow-hidden rounded-2xl border bg-card/50 p-6 transition-all hover:bg-card/80">
    {/* Subtle Background Glow */}
    <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary/5 blur-3xl group-hover:bg-primary/10 transition-all" />

    <div className="flex items-center justify-between">
      <div className="rounded-lg bg-primary/10 p-2.5">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      {trend && (
        <Badge
          variant="secondary"
          className="bg-emerald-500/10 text-emerald-500 border-none font-mono text-[10px]"
        >
          {trend}
        </Badge>
      )}
    </div>

    <div className="mt-4 space-y-1">
      <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
        {label}
      </p>
      <div className="flex items-baseline gap-2">
        <h2 className="text-3xl font-bold font-mono tracking-tighter">
          {value}
        </h2>
      </div>
      <p className="text-[11px] text-muted-foreground/60 italic">
        {description}
      </p>
    </div>
  </div>
);

export default function BuildPublicDashboard() {
  const [postContent, setPostContent] = useState("");

  return (
    <div className="min-h-screen p-6 lg:p-10 max-w-350 mx-auto space-y-10">
      {/* 1. HERO / HEADER SECTION */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-1">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/10 border-none px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold">
            Community Live
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            The Public{" "}
            <span className="text-muted-foreground/40 italic">Feed</span>
          </h1>
        </div>
      </div>

      {/* 2. PREMIUM STATS HEADER (Bento Style) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <PremiumStat
          label="Network Size"
          value="1,247"
          icon={Users}
          description="Total developers shipping"
          trend="+12% this week"
        />
        <PremiumStat
          label="Active Pulse"
          value="89"
          icon={Activity}
          description="Members active in the last hour"
        />
        <PremiumStat
          label="Daily Velocity"
          value="453"
          icon={Zap}
          description="Updates shared in 24 hours"
          trend="Peak performance"
        />
        {/* Special Streak Card */}
        <div className="relative overflow-hidden rounded-2xl border bg-primary p-6 text-primary-foreground">
          <Flame className="absolute -right-2 -bottom-2 h-24 w-24 opacity-20 rotate-12" />
          <p className="text-sm font-medium uppercase tracking-wider opacity-80">
            Global Streak
          </p>
          <h2 className="text-4xl font-black font-mono mt-2">124 Days</h2>
          <p className="text-[11px] mt-2 opacity-70 italic">
            The community hasn't missed a day.
          </p>
        </div>
      </div> 

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* 3. MAIN FEED (Left side) */}
        <div className="lg:col-span-8 space-y-8">
          {/* Create Update (Premium Input) */}
          <div className="group relative rounded-3xl border bg-card p-1 shadow-2xl shadow-primary/5 transition-all hover:border-primary/20">
            <div className="p-5 space-y-4">
              <div className="flex gap-4">
                <Avatar className="h-12 w-12 border-2 border-primary/10">
                  <AvatarFallback>AC</AvatarFallback>
                </Avatar>
                <Textarea
                  placeholder="Log your progress... What are you shipping today?"
                  className="border-none bg-transparent text-lg p-2 focus-visible:ring-0 resize-none  placeholder:text-muted-foreground/40"
                  onChange={(e) => setPostContent(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-between border-t border-border/50 pt-4">
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="rounded-full text-xs hover:bg-primary/5 hover:text-primary"
                  >
                    <Plus className="h-3 w-3 mr-1" /> Add Agenda
                  </Button>
                </div>
                <Button
                  disabled={!postContent}
                  className="rounded-full shadow-lg shadow-primary/20 px-8 font-bold tracking-tight"
                >
                  Broadcast Update
                </Button>
              </div>
            </div>
          </div>

          {/* Post Item */}
          {[1, 2].map((i) => (
            <div
              key={i}
              className="group relative rounded-xl border bg-card/50 transition-all hover:border-primary/30"
            >
              <div className="p-4">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex gap-3">
                    <Avatar className="h-9 w-9 border rounded-lg">
                      <AvatarFallback className="text-xs">JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-sm font-bold flex items-center gap-2 leading-none">
                        Alex Rivera
                      </h4>
                      <p className="text-[11px] text-muted-foreground mt-1">
                        Building{" "}
                        <span className="text-foreground font-medium">
                          Lumina AI
                        </span>{" "}
                        • 2h ago
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] font-mono text-muted-foreground bg-muted/50 px-2 py-0.5 rounded-md border">
                    <Clock className="h-3 w-3" /> D12
                  </div>
                </div>
                {/* Content Area */}
                <p className="text-sm leading-snug text-foreground/90 mb-4 font-medium italic">
                  "Just finished the landing page hero section. Struggling with
                  3D transforms, but the aesthetic is coming together."
                </p>
                {/* Internal Grid - Now more like a Log */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {" "}
                  {/* Reduced gap from 4 to 2 */}
                  <div className="rounded-lg bg-muted/20 p-3 border border-border/50">
                    <p className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground mb-2 flex items-center gap-1.5">
                      <Target className="h-3 w-3" /> Objective
                    </p>
                    <ul className="space-y-1.5">
                      <li className="text-[12px] flex items-center gap-2">
                        <div className="h-1 w-1 rounded-full bg-primary" />
                        <span className="truncate">Framer Motion entrance</span>
                      </li>
                      <li className="text-[12px] flex items-center gap-2 text-muted-foreground/50 line-through">
                        <div className="h-1 w-1 rounded-full bg-muted" />
                        <span className="truncate">Mobile nav flicker</span>
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-lg bg-emerald-500/3 p-3 border border-emerald-500/10">
                    <p className="text-[9px] font-bold uppercase tracking-widest text-emerald-600 mb-2 flex items-center gap-1.5">
                      <CheckCircle2 className="h-3 w-3" /> Shipped
                    </p>
                    <div className="text-[12px] font-semibold flex items-center gap-2 text-emerald-700/80">
                      <ArrowUpRight className="h-3 w-3" /> Landing Page V1
                    </div>
                  </div>
                </div>
                {/* Footer / Actions */}
                <div className="mt-4 flex items-center justify-between border-t border-border/50 pt-3">
                  <div className="flex gap-4">
                    <button className="flex items-center gap-1.5 text-[11px] font-bold text-muted-foreground hover:text-primary transition-colors">
                      <MessageSquare className="h-3.5 w-3.5" /> 12
                    </button>
                    <button className="flex items-center gap-1.5 text-[11px] font-bold text-muted-foreground hover:text-orange-500 transition-colors">
                      <Zap className="h-3.5 w-3.5" /> 45
                    </button>
                  </div>
                  <Button
                    variant="ghost"
                    className="h-7 px-3 text-[10px] font-bold uppercase tracking-wider hover:bg-muted"
                  >
                    View Log
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 4. SIDEBAR (Right side) */}
        {/* <div className="lg:col-span-4 space-y-6">
          <div className="rounded-3xl border bg-card p-6 space-y-6">
            <h3 className="font-bold text-sm uppercase tracking-widest text-muted-foreground">
              Trending Journeys
            </h3>
            <div className="space-y-4">
              {["100DaysOfCode", "SaaS", "Web3", "Design"].map((tag) => (
                <div
                  key={tag}
                  className="flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span className="text-sm font-bold">#{tag}</span>
                  </div>
                  <span className="text-[10px] font-mono opacity-40 group-hover:opacity-100">
                    1.2k posts
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
