import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Database, 
  RotateCcw, 
  Play, 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  Server, 
  Cpu, 
  Layers, 
  Flame,
  Code,
  Activity
} from 'lucide-react';

export default function SystemSandbox() {
  const [activeMode, setActiveMode] = useState('redis'); // 'redis' | 'base62' | 'algo'

  // Redis Simulator State
  const [redisKeys, setRedisKeys] = useState({});
  const [selectedKey, setSelectedKey] = useState('finnova-dashboard');
  const [isFetching, setIsFetching] = useState(false);
  const [lastFetchResult, setLastFetchResult] = useState(null);
  const [fetchStats, setFetchStats] = useState({ hits: 0, misses: 0, totalMsSaved: 0 });

  // Base62 Shortener State
  const [longUrlInput, setLongUrlInput] = useState('https://github.com/SyntaxNova/FinNova-AI-Powered-Personal-Finance');
  const [shortUrlResult, setShortUrlResult] = useState(null);

  // Mini Algo Simulator State
  const [arrayBars, setArrayBars] = useState([38, 72, 15, 90, 44, 25, 60, 10]);
  const [comparingIdxs, setComparingIdxs] = useState([]);
  const [sortedIdxs, setSortedIdxs] = useState([]);
  const [isSorting, setIsSorting] = useState(false);

  // Redis Simulator Logic
  const sampleData = {
    'finnova-dashboard': { id: 101, url: 'https://finnova-ai-finance.vercel.app/', title: 'FinNova AI Dashboard' },
    'spring-security-jwt': { id: 102, url: 'https://spring.io/projects/spring-security', title: 'Spring Security Docs' },
    'redis-cache-spec': { id: 103, url: 'https://redis.io/docs/data-types/strings/', title: 'Redis Cache-Aside Pattern' },
    'aws-vpc-architecture': { id: 104, url: 'https://aws.amazon.com/vpc/', title: 'AWS Cloud Architecting Spec' }
  };

  const handleFetchKey = (key) => {
    setIsFetching(true);
    setLastFetchResult(null);

    const startTime = performance.now();
    const isCached = !!redisKeys[key];

    setTimeout(() => {
      const endTime = performance.now();
      const latency = isCached ? Math.floor(Math.random() * 12 + 8) : Math.floor(Math.random() * 25 + 115); // ~15ms vs ~125ms

      if (isCached) {
        setFetchStats(prev => ({
          ...prev,
          hits: prev.hits + 1,
          totalMsSaved: prev.totalMsSaved + 105
        }));
        setLastFetchResult({
          source: 'Redis In-Memory Cache (Cache-Aside)',
          status: 'CACHE HIT',
          latency: `${latency}ms`,
          data: redisKeys[key],
          speedup: '82% faster'
        });
      } else {
        // Cache miss -> fetch from DB & warm cache
        const dbData = sampleData[key] || { id: 999, url: `https://sh.rt/${key}`, title: `Custom resource for ${key}` };
        setRedisKeys(prev => ({ ...prev, [key]: dbData }));
        setFetchStats(prev => ({
          ...prev,
          misses: prev.misses + 1
        }));
        setLastFetchResult({
          source: 'PostgreSQL Database (Warmed into Redis)',
          status: 'CACHE MISS',
          latency: `${latency}ms`,
          data: dbData,
          speedup: 'Baseline DB query'
        });
      }
      setIsFetching(false);
    }, isCached ? 150 : 500);
  };

  const clearRedisCache = () => {
    setRedisKeys({});
    setLastFetchResult(null);
  };

  // Base62 Converter Logic
  const handleEncodeUrl = (e) => {
    e.preventDefault();
    if (!longUrlInput.trim()) return;

    // Simulate auto-increment ID to Base62
    const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const fakeId = Math.floor(Math.random() * 9000000) + 1000000;
    let n = fakeId;
    let shortCode = '';
    while (n > 0) {
      shortCode = chars[n % 62] + shortCode;
      n = Math.floor(n / 62);
    }

    setShortUrlResult({
      databaseId: fakeId,
      originalUrl: longUrlInput,
      shortCode: shortCode,
      shortUrl: `https://sh.rt/${shortCode}`,
      dtoPayload: {
        shortCode: shortCode,
        originalUrl: longUrlInput,
        createdAt: new Date().toISOString(),
        clicksCount: 0
      }
    });
  };

  // Mini Algo Sort Simulation (One Bubble Step)
  const stepBubbleSort = () => {
    let arr = [...arrayBars];
    let n = arr.length;
    let swapped = false;

    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        setComparingIdxs([i, i + 1]);
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        setArrayBars(arr);
        swapped = true;
        break;
      }
    }

    if (!swapped) {
      setSortedIdxs([0, 1, 2, 3, 4, 5, 6, 7]);
      setComparingIdxs([]);
    }
  };

  const resetArray = () => {
    setArrayBars([38, 72, 15, 90, 44, 25, 60, 10]);
    setComparingIdxs([]);
    setSortedIdxs([]);
  };

  return (
    <section id="sandbox" className="py-24 relative overflow-hidden bg-[#07090e]">
      {/* Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-3">
            <Activity className="w-3.5 h-3.5 text-cyan-400" />
            <span>Interactive Engineering Sandbox</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Live <span className="bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">System Playground</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Experience the actual backend architectures described in my resume. Test the Redis Cache-Aside latency cut or test Base62 link generation right in your browser!
          </p>

          {/* Sandbox Mode Selector */}
          <div className="mt-8 inline-flex p-1 rounded-2xl bg-slate-900/90 border border-white/10 shadow-lg">
            <button
              onClick={() => setActiveMode('redis')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeMode === 'redis'
                  ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Zap className="w-4 h-4 text-amber-400" />
              <span>Redis Cache-Aside Simulator</span>
            </button>
            <button
              onClick={() => setActiveMode('base62')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeMode === 'base62'
                  ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span>Base62 URL Encoder</span>
            </button>
            <button
              onClick={() => setActiveMode('algo')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeMode === 'algo'
                  ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Layers className="w-4 h-4 text-purple-400" />
              <span>AlgoVision Mini-Step</span>
            </button>
          </div>
        </div>

        {/* Mode 1: Redis Simulator */}
        {activeMode === 'redis' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto glass-card rounded-3xl p-6 sm:p-8 border border-white/10"
          >
            <div className="flex flex-wrap items-center justify-between pb-6 border-b border-white/10 gap-4">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <span className="p-1.5 rounded-lg bg-red-500/20 text-red-400 font-mono text-sm">REDIS</span>
                  <span>Cache-Aside Simulation (120ms vs &lt;25ms)</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  First fetch queries PostgreSQL (Cache Miss, ~120ms) and populates Redis. Subsequent fetches hit Redis RAM (&lt;25ms).
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono">
                <span className="px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                  Hits: {fetchStats.hits}
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-rose-500/10 text-rose-300 border border-rose-500/30">
                  Misses: {fetchStats.misses}
                </span>
                <button
                  onClick={clearRedisCache}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-white/10 flex items-center gap-1"
                  title="Flush Redis Cache"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Flush</span>
                </button>
              </div>
            </div>

            {/* Keys to Test */}
            <div className="mt-6">
              <label className="text-xs font-mono text-slate-400 block mb-2">
                Select or Click an Endpoint Key to query:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {Object.keys(sampleData).map((key) => {
                  const inCache = !!redisKeys[key];
                  return (
                    <button
                      key={key}
                      onClick={() => {
                        setSelectedKey(key);
                        handleFetchKey(key);
                      }}
                      disabled={isFetching}
                      className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                        selectedKey === key
                          ? 'bg-indigo-900/40 border-indigo-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.2)]'
                          : 'bg-slate-900/60 border-white/5 hover:border-white/20 text-slate-300'
                      }`}
                    >
                      <div className="truncate pr-2">
                        <span className="font-mono text-xs font-semibold block text-slate-200">
                          GET /api/v1/{key}
                        </span>
                        <span className="text-[11px] text-slate-400 truncate block">
                          {sampleData[key].title}
                        </span>
                      </div>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full shrink-0 ${
                        inCache
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                          : 'bg-slate-800 text-slate-400 border border-white/5'
                      }`}>
                        {inCache ? '⚡ In Redis' : '🐘 DB Only'}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Fetch Status & Latency Gauge */}
            <div className="mt-8 pt-6 border-t border-white/10">
              {isFetching ? (
                <div className="p-6 rounded-2xl bg-slate-900/80 border border-white/10 flex items-center justify-center gap-3 text-cyan-400 font-mono text-sm animate-pulse">
                  <div className="w-4 h-4 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
                  <span>Executing HTTP GET & Redis Cache-Aside Pipeline...</span>
                </div>
              ) : lastFetchResult ? (
                <div className={`p-6 rounded-2xl border transition-all ${
                  lastFetchResult.status === 'CACHE HIT'
                    ? 'bg-emerald-950/30 border-emerald-500/40'
                    : 'bg-indigo-950/30 border-indigo-500/40'
                }`}>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className={`px-2.5 py-1 rounded-md text-xs font-mono font-bold ${
                        lastFetchResult.status === 'CACHE HIT'
                          ? 'bg-emerald-500 text-black'
                          : 'bg-indigo-500 text-white'
                      }`}>
                        {lastFetchResult.status}
                      </span>
                      <span className="text-xs font-mono text-slate-300">
                        {lastFetchResult.source}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 font-mono">
                      <span className="text-xs text-slate-400">Response Latency:</span>
                      <span className={`text-base font-bold ${
                        lastFetchResult.status === 'CACHE HIT' ? 'text-emerald-400' : 'text-amber-400'
                      }`}>
                        {lastFetchResult.latency}
                      </span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-slate-300">
                        {lastFetchResult.speedup}
                      </span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-xs font-mono text-slate-300">
                    <span className="text-slate-400 block mb-1">Payload returned to Client:</span>
                    <pre className="text-cyan-300 overflow-x-auto">
                      {JSON.stringify(lastFetchResult.data, null, 2)}
                    </pre>
                  </div>
                </div>
              ) : (
                <div className="text-center p-8 border border-dashed border-white/10 rounded-2xl text-slate-400 text-sm font-mono">
                  Click any endpoint above to simulate a live client request!
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* Mode 2: Base62 URL Encoder */}
        {activeMode === 'base62' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto glass-card rounded-3xl p-6 sm:p-8 border border-white/10"
          >
            <div className="pb-6 border-b border-white/10">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-400 font-mono text-sm">BASE62</span>
                <span>Collision-Free Short URL Generator</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Converts database primary keys to base-62 character sets ([0-9, a-z, A-Z]), producing ultra-compact short links.
              </p>
            </div>

            <form onSubmit={handleEncodeUrl} className="mt-6 space-y-4">
              <div>
                <label className="text-xs font-mono text-slate-400 block mb-2">
                  Enter Long Destination URL:
                </label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="url"
                    value={longUrlInput}
                    onChange={(e) => setLongUrlInput(e.target.value)}
                    placeholder="https://example.com/very/long/path/to/resource"
                    className="flex-1 px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-slate-100 font-mono text-sm focus:outline-none focus:border-cyan-400"
                    required
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-mono text-xs font-bold transition-all shadow-md shrink-0"
                  >
                    Generate Base62 Link
                  </button>
                </div>
              </div>
            </form>

            {shortUrlResult && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-5 rounded-2xl bg-indigo-950/30 border border-indigo-500/30 space-y-4 font-mono text-xs"
              >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3 rounded-xl bg-slate-900 border border-white/5">
                    <span className="text-slate-400 block">PostgreSQL Sequence ID:</span>
                    <span className="text-base font-bold text-indigo-400">#{shortUrlResult.databaseId}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900 border border-white/5">
                    <span className="text-slate-400 block">Base62 Short Code:</span>
                    <span className="text-base font-bold text-cyan-300">{shortUrlResult.shortCode}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900 border border-white/5">
                    <span className="text-slate-400 block">Generated Short URL:</span>
                    <span className="text-base font-bold text-emerald-400">{shortUrlResult.shortUrl}</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-black/50 border border-white/5">
                  <span className="text-slate-400 block mb-1">Spring Boot DTO JSON Response:</span>
                  <pre className="text-cyan-300 overflow-x-auto">
                    {JSON.stringify(shortUrlResult.dtoPayload, null, 2)}
                  </pre>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}

        {/* Mode 3: Mini Algo Step */}
        {activeMode === 'algo' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto glass-card rounded-3xl p-6 sm:p-8 border border-white/10"
          >
            <div className="flex flex-wrap items-center justify-between pb-6 border-b border-white/10 gap-4">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <span className="p-1.5 rounded-lg bg-purple-500/20 text-purple-400 font-mono text-sm">ALGOVISION</span>
                  <span>Interactive Algorithm Step Engine</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Demonstrating state-driven rendering and memoization logic from the AlgoVision project.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={stepBubbleSort}
                  className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-mono text-xs font-semibold flex items-center gap-1.5 transition-all shadow-md"
                >
                  <Play className="w-3.5 h-3.5" />
                  <span>Execute Step</span>
                </button>
                <button
                  onClick={resetArray}
                  className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-mono text-xs flex items-center gap-1 border border-white/10"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              </div>
            </div>

            {/* Visualizer Canvas Bars */}
            <div className="mt-8 h-48 flex items-end justify-center gap-3 px-4 pb-2 bg-slate-950/60 rounded-2xl border border-white/5">
              {arrayBars.map((val, idx) => {
                const isComparing = comparingIdxs.includes(idx);
                const isSorted = sortedIdxs.includes(idx);

                return (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-2 max-w-[48px]">
                    <span className="text-[10px] font-mono text-slate-400">{val}</span>
                    <motion.div
                      layout
                      style={{ height: `${val * 1.5}px` }}
                      className={`w-full rounded-t-lg transition-colors duration-200 ${
                        isComparing
                          ? 'bg-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.8)]'
                          : isSorted
                            ? 'bg-emerald-400'
                            : 'bg-indigo-600 hover:bg-indigo-500'
                      }`}
                    />
                    <span className="text-[9px] font-mono text-slate-500">[{idx}]</span>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 flex items-center justify-center gap-6 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-indigo-600" /> Unsorted
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-cyan-400" /> Comparing / Active Pointer
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-emerald-400" /> Sorted Position
              </span>
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
}
