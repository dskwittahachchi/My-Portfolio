"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { Github, GitPullRequest, GitCommit, GitBranch } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function OpenSource() {
  // Static GitHub data for the portfolio
  const githubData = {
    username: "dskwittahachchi",
    repos: 24,
    commits: "1,000+",
    prs: 15,
    stars: 12
  };

  return (
    <section id="opensource" className="relative z-10 scroll-mt-24">
      <SectionHeading number="05" title="Code in the Wild" />

      <div className="glass-panel p-8 rounded-xl border border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <Github className="w-64 h-64 text-cyber-cyan" />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          
          <div className="flex-1">
            <h3 className="font-heading text-3xl font-bold text-white mb-2 flex items-center gap-3">
              <Github className="w-8 h-8 text-cyber-cyan" />
              Developer Activity
            </h3>
            <p className="text-gray-400 font-mono text-sm mb-6">github.com/{githubData.username}</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-cyber-dark/50 p-4 rounded border border-white/5">
                <div className="text-gray-500 font-mono text-xs mb-1 flex items-center gap-2"><GitCommit className="w-3 h-3" /> COMMITS</div>
                <div className="text-xl font-bold text-white">{githubData.commits}</div>
              </div>
              <div className="bg-cyber-dark/50 p-4 rounded border border-white/5">
                <div className="text-gray-500 font-mono text-xs mb-1 flex items-center gap-2"><GitPullRequest className="w-3 h-3" /> PRs</div>
                <div className="text-xl font-bold text-white">{githubData.prs}</div>
              </div>
              <div className="bg-cyber-dark/50 p-4 rounded border border-white/5">
                <div className="text-gray-500 font-mono text-xs mb-1 flex items-center gap-2"><GitBranch className="w-3 h-3" /> REPOSITORIES</div>
                <div className="text-xl font-bold text-white">{githubData.repos}</div>
              </div>
              <div className="bg-cyber-dark/50 p-4 rounded border border-white/5">
                <div className="text-gray-500 font-mono text-xs mb-1 flex items-center gap-2"><span className="text-[10px]">★</span> STARS</div>
                <div className="text-xl font-bold text-white">{githubData.stars}</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
             <a href={`https://github.com/${githubData.username}`} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full md:w-auto hover:border-cyber-cyan hover:text-cyber-cyan">View GitHub Profile</Button>
             </a>
          </div>

        </div>
      </div>
    </section>
  );
}
