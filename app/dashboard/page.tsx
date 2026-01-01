"use client";
import React, { useState } from "react";
import {
  Send,
  Home,
  PlusCircle,
  User,
  Compass,
  LogOut,
  MessageCircle,
  CheckCircle2,
  Target,
  Filter,
  Calendar,
  Menu,
  X,
  TrendingUp,
  Users,
  Activity,
} from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

export default function BuildPublicDashboard() {
  const [postContent, setPostContent] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const [filterView, setFilterView] = useState("all");
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const currentUser = {
    name: "Alex Chen",
    username: "alexchen",
    journey: "Learning Backend Development",
    currentDay: 7,
    totalPosts: 6,
    weekStreak: 5,
  };

  const platformStats = {
    totalUsers: 1247,
    activeToday: 89,
    activeLast7Days: 453,
  };

  const posts = [
    {
      id: 1,
      author: "Sarah Martinez",
      username: "sarahm",
      journey: "Building a SaaS Product",
      day: 45,
      timestamp: "2 hours ago",
      date: "Jan 15, 2026",
      agenda: [
        "Fix authentication bug users reported",
        "Design pricing page mockup",
        "Write blog post about our tech stack",
      ],
      achieved: [
        "Bug fixed and deployed",
        "Pricing page 60% done",
        "Blog post outline completed",
      ],
      learnings:
        "Learned that user feedback is gold. The bug fix took 30 mins but understanding the issue took 2 hours.",
      comments: 3,
    },
    {
      id: 2,
      author: "Mike Chen",
      username: "mikechen",
      journey: "Learning React & Node.js",
      day: 12,
      timestamp: "4 hours ago",
      date: "Jan 15, 2026",
      agenda: [
        "Building a REST API for my side project",
        "Learning about JWT authentication",
      ],
      achieved: [
        "Successfully implemented user registration endpoint",
        "Database schema designed and tested",
      ],
      comments: 1,
    },
    {
      id: 3,
      author: "Priya Kumar",
      username: "priyak",
      journey: "Freelance Developer",
      day: 89,
      timestamp: "6 hours ago",
      date: "Jan 15, 2026",
      agenda: [
        "Delivered website redesign for Coffee Shop client",
        "Started on e-commerce integration",
      ],
      achieved: [
        "Refactored portfolio site code",
        "Added 3 new case studies",
        "Client approved the redesign",
      ],
      learnings:
        "Sometimes the best progress is cleaning up old code. Refactoring is productive work too.",
      comments: 5,
    },
  ];

  const handlePost = async () => {
    if (!postContent.trim()) return;
    setIsPosting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsPosting(false);
    setPostContent("");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-card border-b px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold">BuildLog</h1>
        <button
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          className="p-2 hover:bg-muted rounded-lg transition-colors"
        >
          {showMobileMenu ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </header>

      {/* Mobile Sidebar Overlay */}
      {showMobileMenu && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-background/80 backdrop-blur-sm"
          onClick={() => setShowMobileMenu(false)}
        >
          <aside
            className="w-80 max-w-[85vw] h-full bg-card border-r flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b">
              <h1 className="text-2xl font-bold">BuildLog</h1>
              <p className="text-xs text-muted-foreground mt-1">
                Track progress. Stay accountable.
              </p>
            </div>

            <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
              <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl bg-primary text-primary-foreground font-medium text-sm transition-all">
                <Home className="h-5 w-5" />
                Home
              </button>

              <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl hover:bg-muted transition-all text-sm">
                <PlusCircle className="h-5 w-5" />
                Post Update
              </button>

              <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl hover:bg-muted transition-all text-sm">
                <User className="h-5 w-5" />
                My Journey
              </button>

              <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl hover:bg-muted transition-all text-sm">
                <Compass className="h-5 w-5" />
                Explore
              </button>

              <div className="pt-6 mt-6 border-t space-y-3">
                <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-4">
                  Your Progress
                </h3>
                <div className="px-4 py-3 rounded-xl bg-muted/50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-muted-foreground">
                      Current Journey
                    </span>
                    <span className="text-xs font-semibold">
                      Day {currentUser.currentDay}
                    </span>
                  </div>
                  <p className="text-sm font-medium mb-3">
                    {currentUser.journey}
                  </p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Posts</span>
                    <span className="font-semibold">
                      {currentUser.totalPosts}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs mt-1">
                    <span className="text-muted-foreground">Week streak</span>
                    <span className="font-semibold text-orange-600">
                      {currentUser.weekStreak} days
                    </span>
                  </div>
                </div>
              </div>
            </nav>

            <div className="p-4 border-t">
              <div className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-muted transition-all cursor-pointer">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold text-sm">
                  {currentUser.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold truncate">
                    {currentUser.name}
                  </p>
                  <p className="text-xs text-muted-foreground truncate">
                    @{currentUser.username}
                  </p>
                </div>
                <button className="text-muted-foreground hover:text-foreground transition-colors">
                  <LogOut className="h-4 w-4" />
                </button>
              </div>
            </div>
          </aside>
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-72 xl:w-80 border-r flex-col fixed h-screen bg-card">
        <div className="p-6 border-b">
          <h1 className="text-2xl font-bold">BuildLog</h1>
          <p className="text-xs text-muted-foreground mt-1">
            Track progress. Stay accountable.
          </p>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl bg-primary text-primary-foreground font-medium text-sm transition-all">
            <Home className="h-5 w-5" />
            Home
          </button>

          <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl hover:bg-muted transition-all text-sm">
            <PlusCircle className="h-5 w-5" />
            Post Update
          </button>

          <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl hover:bg-muted transition-all text-sm">
            <User className="h-5 w-5" />
            My Journey
          </button>

          <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl hover:bg-muted transition-all text-sm">
            <Compass className="h-5 w-5" />
            Explore
          </button>

          <div className="pt-6 mt-6 border-t space-y-3">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-4">
              Your Progress
            </h3>
            <div className="px-4 py-3 rounded-xl bg-muted/50">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-muted-foreground">
                  Current Journey
                </span>
                <span className="text-xs font-semibold">
                  Day {currentUser.currentDay}
                </span>
              </div>
              <p className="text-sm font-medium mb-3">{currentUser.journey}</p>
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Posts</span>
                <span className="font-semibold">{currentUser.totalPosts}</span>
              </div>
              <div className="flex items-center justify-between text-xs mt-1">
                <span className="text-muted-foreground">Week streak</span>
                <span className="font-semibold text-orange-600">
                  {currentUser.weekStreak} days
                </span>
              </div>
            </div>
          </div>
        </nav>

        <div className="p-4 border-t">
          <div className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-muted transition-all cursor-pointer">
            <div className="h-10 w-10 rounded-full bg-liner-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold text-sm">
              {currentUser.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold truncate">
                {currentUser.name}
              </p>
              <p className="text-xs text-muted-foreground truncate">
                @{currentUser.username}
              </p>
            </div>
            <button className="text-muted-foreground hover:text-foreground transition-colors">
              <LogOut className="h-4 w-4" />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-72 xl:ml-80 pt-16 lg:pt-0">
        <div className="max-w-4xl mx-auto">
          {/* Platform Stats */}
          <div className="border-b bg-card/50 backdrop-blur-sm sticky top-16 lg:top-0 z-10">
            <div className="px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
              <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
                <div className="text-center p-3 sm:p-4 rounded-xl bg-background border">
                  <div className="flex items-center justify-center gap-1.5 mb-1.5 sm:mb-2">
                    <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-blue-500" />
                    <p className="text-[10px] sm:text-xs font-medium text-muted-foreground uppercase tracking-wider hidden sm:block">
                      Total Builders
                    </p>
                    <Users className="h-3 w-3 text-muted-foreground sm:hidden" />
                  </div>
                  <p className="text-xl sm:text-2xl lg:text-3xl font-bold">
                    {platformStats.totalUsers.toLocaleString()}
                  </p>
                  <p className="text-[10px] text-muted-foreground mt-1 sm:hidden">
                    Builders
                  </p>
                </div>
                <div className="text-center p-3 sm:p-4 rounded-xl bg-background border">
                  <div className="flex items-center justify-center gap-1.5 mb-1.5 sm:mb-2">
                    <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-green-500 animate-pulse" />
                    <p className="text-[10px] sm:text-xs font-medium text-muted-foreground uppercase tracking-wider hidden sm:block">
                      Active Today
                    </p>
                    <Activity className="h-3 w-3 text-muted-foreground sm:hidden" />
                  </div>
                  <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-600">
                    {platformStats.activeToday}
                  </p>
                  <p className="text-[10px] text-muted-foreground mt-1 sm:hidden">
                    Today
                  </p>
                </div>
                <div className="text-center p-3 sm:p-4 rounded-xl bg-background border">
                  <div className="flex items-center justify-center gap-1.5 mb-1.5 sm:mb-2">
                    <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-purple-500" />
                    <p className="text-[10px] sm:text-xs font-medium text-muted-foreground uppercase tracking-wider hidden sm:block">
                      This Week
                    </p>
                    <TrendingUp className="h-3 w-3 text-muted-foreground sm:hidden" />
                  </div>
                  <p className="text-xl sm:text-2xl lg:text-3xl font-bold">
                    {platformStats.activeLast7Days}
                  </p>
                  <p className="text-[10px] text-muted-foreground mt-1 sm:hidden">
                    Week
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Post Update Section */}
          <div className="border-b bg-card p-4 sm:p-6 lg:p-8">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                {currentUser.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>

              <div className="flex-1 min-w-0">
                <div className="mb-3">
                  <h3 className="text-sm font-semibold mb-1">
                    Log Today's Progress
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Day {currentUser.currentDay} • {currentUser.journey}
                  </p>
                </div>

                <textarea
                  value={postContent}
                  onChange={(e) => setPostContent(e.target.value)}
                  placeholder="What did you work on today?&#10;&#10;📋 Agenda:&#10;• Task 1&#10;• Task 2&#10;&#10;✅ Achieved:&#10;• Completed X&#10;&#10;💭 Learnings:&#10;• Key insight"
                  className="w-full min-h-[140px] sm:min-h-[180px] p-3 sm:p-4 rounded-xl border bg-background resize-none focus:outline-none focus:ring-2 focus:ring-ring text-sm leading-relaxed"
                  maxLength={1000}
                />

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-4">
                  <div className="flex items-center gap-3 sm:gap-4 text-xs text-muted-foreground">
                    <span>{postContent.length}/1000</span>
                    <div className="h-3 border-l hidden sm:block" />
                    <span className="flex items-center gap-1 text-xs">
                      <Calendar className="h-3 w-3" />
                      {new Date().toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <button
                    onClick={handlePost}
                    disabled={!postContent.trim() || isPosting}
                    className="w-full sm:w-auto px-6 py-2.5 bg-primary hover:bg-primary/90 disabled:bg-muted disabled:text-muted-foreground text-primary-foreground rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 disabled:cursor-not-allowed shadow-sm hover:shadow"
                  >
                    {isPosting ? (
                      <>
                        <div className="h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        Publishing...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Publish Update
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Filter Bar */}
          <div className="border-b bg-card/50 px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
                <Filter className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <span className="text-sm font-medium flex-shrink-0">
                  Filter:
                </span>
                <div className="flex gap-2">
                  {["all", "today", "week"].map((filter) => (
                    <button
                      key={filter}
                      onClick={() => setFilterView(filter)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                        filterView === filter
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted hover:bg-muted/80"
                      }`}
                    >
                      {filter === "all"
                        ? "All"
                        : filter === "today"
                        ? "Today"
                        : "Week"}
                    </button>
                  ))}
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                {posts.length} updates
              </p>
            </div>
          </div>

          {/* Timeline Feed */}
          <div className="divide-y">
            {posts.map((post) => (
              <article
                key={post.id}
                className="p-4 sm:p-6 lg:p-8 bg-card hover:bg-muted/20 transition-colors"
              >
                {/* Post Header */}
                <div className="flex items-start gap-3 sm:gap-4 mb-4">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                    {post.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-1">
                      <h3 className="font-semibold text-sm sm:text-base truncate">
                        {post.author}
                      </h3>
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                        <span className="hidden sm:inline">
                          @{post.username}
                        </span>
                        <span className="hidden sm:inline">•</span>
                        <span>{post.timestamp}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs flex-wrap">
                      <span className="px-2 py-1 rounded-md bg-primary/10 text-primary font-medium truncate max-w-[200px]">
                        {post.journey}
                      </span>
                      <span className="text-muted-foreground">
                        Day {post.day}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Post Content */}
                <div className="sm:ml-16 space-y-4">
                  {post.agenda && post.agenda.length > 0 && (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        <Target className="h-3.5 w-3.5" />
                        <span>Agenda</span>
                      </div>
                      <ul className="space-y-1.5 pl-1">
                        {post.agenda.map((item, i) => (
                          <li
                            key={i}
                            className="text-sm flex items-start gap-2"
                          >
                            <span className="text-muted-foreground mt-1 flex-shrink-0">
                              •
                            </span>
                            <span className="break-words">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {post.achieved && post.achieved.length > 0 && (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs font-semibold text-green-600 uppercase tracking-wider">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        <span>Achieved</span>
                      </div>
                      <ul className="space-y-1.5 pl-1">
                        {post.achieved.map((item, i) => (
                          <li
                            key={i}
                            className="text-sm flex items-start gap-2"
                          >
                            <span className="text-green-600 mt-1 shrink-0">
                              ✓
                            </span>
                            <span className="wrap-break-words">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {post.learnings && (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 uppercase tracking-wider">
                        <span>💭</span>
                        <span>Learnings</span>
                      </div>
                      <p className="text-sm text-muted-foreground italic pl-1 break-words">
                        {post.learnings}
                      </p>
                    </div>
                  )}

                  {/* Interaction Footer */}
                  <div className="pt-4 mt-4 border-t flex items-center justify-between">
                    <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-medium group">
                      <div className="p-2 rounded-lg group-hover:bg-primary/10 transition-colors">
                        <MessageCircle className="h-4 w-4" />
                      </div>
                      <span className="hidden sm:inline">
                        {post.comments}{" "}
                        {post.comments === 1 ? "comment" : "comments"}
                      </span>
                      <span className="sm:hidden">{post.comments}</span>
                    </button>
                    <span className="text-xs text-muted-foreground">
                      {post.date}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="p-6 sm:p-8 text-center border-t bg-card">
            <button className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-6 py-2 rounded-lg hover:bg-muted">
              Load more updates
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}