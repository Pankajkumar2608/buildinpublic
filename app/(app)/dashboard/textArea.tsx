"use client";
import React, { useState, useMemo } from "react";
import {
    Target, CheckCircle2,
    ArrowUpRight
} from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function BuildInPublicPoster() {
    const [text, setText] = useState("");

    // This function parses the raw text into structured data
    const parsedData = useMemo(() => {
        const lines = text.split("\n");

        return {
            // Normal text: lines that don't start with /
            content: lines
                .filter(line => !line.startsWith("/"))
                .join(" ")
                .trim(),

            // Objectives: lines starting with /objective or /o
            objectives: lines
                .filter(line => line.startsWith("/objective"))
                .map(line => line.replace("/objective", "").trim())
                .filter(Boolean),

            // Shipped: lines starting with /shipped or /s
            shipped: lines
                .filter(line => line.startsWith("/shipped"))
                .map(line => line.replace("/shipped", "").trim())
                .filter(Boolean),
        };
    }, [text]);

    return (
        <div className="max-w-2xl mx-auto p-4 space-y-5">
            {/* 1. INPUT AREA */}
            <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest mb-2 text-muted-foreground">
                    Draft your update (Use /objective or /shipped)
                </label>
                <Textarea
                    placeholder={`Today was great! \n/objective Fix login bug \n/shipped V1 Landing Page`}
                    className="min-h-[120px] bg-zinc-900/50 border-zinc-800"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>

            {/* 2. DYNAMIC PREVIEW (Matches your image) */}
            {text && (
                <div className="space-y-4">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Live Preview</p>

                    <div className="rounded-2xl border border-zinc-800 bg-[#0c0c0c] p-5 shadow-2xl">

                        {/* Body Content */}
                        {parsedData.content && (
                            <p className="text-[13px] leading-relaxed text-zinc-200 italic mb-6 font-medium">
                                "{parsedData.content}"
                            </p>
                        )}

                        {/* Structured Grid */}
                        {(parsedData.objectives.length > 0 || parsedData.shipped.length > 0) && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                                {/* Objective Box */}
                                <div className="rounded-xl border border-zinc-800/50 bg-zinc-900/20 p-4">
                                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500 mb-3 flex items-center gap-2">
                                        <Target className="h-3 w-3" /> Objective
                                    </p>
                                    <ul className="space-y-2">
                                        {parsedData.objectives.map((item, i) => (
                                            <li key={i} className="text-[12px] text-zinc-300 flex items-start gap-2">
                                                <span className="text-zinc-600 mt-1">•</span> {item}
                                            </li>
                                        ))}
                                        {parsedData.objectives.length === 0 && <li className="text-[11px] text-zinc-700 italic">No objectives listed</li>}
                                    </ul>
                                </div>

                                {/* Shipped Box */}
                                <div className="rounded-xl border border-emerald-500/10 bg-emerald-500/[0.02] p-4">
                                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-emerald-500 mb-3 flex items-center gap-2">
                                        <CheckCircle2 className="h-3 w-3" /> Shipped
                                    </p>
                                    <ul className="space-y-2">
                                        {parsedData.shipped.map((item, i) => (
                                            <li key={i} className="text-[12px] font-semibold text-emerald-500/80 flex items-center gap-2">
                                                <ArrowUpRight className="h-3.5 w-3.5" /> {item}
                                            </li>
                                        ))}
                                        {parsedData.shipped.length === 0 && <li className="text-[11px] text-zinc-700 italic">Nothing shipped yet</li>}
                                    </ul>
                                </div>
                            </div>
                        )}
                        <Button className="w-full mt-2">Post Update</Button>
                    </div>
                </div>
            )}
        </div>
    );
}