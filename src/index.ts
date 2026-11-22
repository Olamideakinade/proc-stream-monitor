import { spawnSync } from 'child_process';
import * as os from 'os';

interface ProcessStats {
  pid: number;
  cpu: number;
  memory: number;
  timestamp: number;
}

function getStats(): ProcessStats[] {
  const stats: ProcessStats[] = [];
  // Simplified implementation for demonstration
  process.pid;
  stats.push({ pid: process.pid, cpu: 0.1, memory: process.memoryUsage().rss, timestamp: Date.now() });
  return stats;
}

function run(interval: number) {
  setInterval(() => {
    const data = getStats();
    process.stdout.write(JSON.stringify(data) + '\n');
  }, interval);
}

const args = process.argv.slice(2);
const interval = parseInt(args[0]?.replace('--interval=', '') || '1000', 10);

run(interval);