# Proc Stream Monitor

[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/Olamideakinade/proc-stream-monitor)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

![Project Snapshot](preview.svg)

A command-line utility to monitor CPU and Memory usage of active system processes in real-time. Designed for low overhead and precise data extraction.

## Capabilities
- Real-time CPU/RSS memory tracking per PID.
- JSON output format for pipe-compatibility with downstream analytical tools.
- configurable sampling intervals.
- Error handling for restricted process access.

## Quickstart
```bash
npm install
npm run build
./dist/index.js --interval 1000
```

## Architecture
Uses `os` and `child_process` modules to query `/proc` (on Linux) or platform-specific APIs. The engine utilizes a non-blocking event loop to sample process states, minimizing the impact of the monitoring tool itself on the system.

## License
MIT