import { Activity, Flame, Users, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";



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

export default function StatsPage() {
    return (
        <div className="min-h-screen p-6 lg:p-10 max-w-350 mx-auto space-y-10">
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
        </div>
    );
}