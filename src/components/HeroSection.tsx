<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nimara - Premium Hero Section</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        /* Premium animations */
        @keyframes float {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(30px, -30px) scale(1.05); }
            66% { transform: translate(-20px, 20px) scale(0.95); }
        }
        
        @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
        }
        
        @keyframes slideDown {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes scaleIn {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
        }
        
        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
        }

        @keyframes progressFill {
            from { width: 0; }
            to { width: var(--progress); }
        }

        /* Classes */
        .animate-float {
            animation: float 20s ease-in-out infinite;
        }
        
        .animate-float-reverse {
            animation: float 25s ease-in-out infinite reverse;
        }
        
        .animate-shimmer {
            animation: shimmer 3s infinite;
        }
        
        .animate-slide-down {
            animation: slideDown 1s ease-out forwards;
        }
        
        .animate-fade-up {
            animation: fadeInUp 1s ease-out forwards;
        }
        
        .animate-scale-in {
            animation: scaleIn 1.2s ease-out forwards;
        }
        
        .animate-pulse {
            animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .progress-fill {
            animation: progressFill 2s ease-out forwards;
        }

        /* Delays */
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-500 { animation-delay: 500ms; }
        .delay-600 { animation-delay: 600ms; }
        .delay-700 { animation-delay: 700ms; }
        .delay-800 { animation-delay: 800ms; }
        .delay-900 { animation-delay: 900ms; }
        .delay-1000 { animation-delay: 1000ms; }
        .delay-1200 { animation-delay: 1200ms; }
        .delay-1500 { animation-delay: 1500ms; }

        /* Premium hover effects */
        .hover-lift {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .hover-lift:hover {
            transform: translateY(-2px) scale(1.02);
            box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.15);
        }

        /* Glass effect */
        .glass {
            background: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
        }

        /* Noise texture */
        .noise-texture {
            background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
            opacity: 0.015;
        }

        /* Word rotation */
        .word-rotate {
            position: relative;
            display: inline-block;
        }
        
        .word-rotate span {
            position: absolute;
            left: 0;
            opacity: 0;
            transform: translateY(10px);
            transition: all 0.5s ease;
        }
        
        .word-rotate span.active {
            opacity: 1;
            transform: translateY(0);
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
            width: 8px;
        }
        
        ::-webkit-scrollbar-track {
            background: #f1f1f1;
        }
        
        ::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
            background: #555;
        }
    </style>
</head>
<body class="bg-white">

    <!-- Premium Hero Section -->
    <section class="relative min-h-screen flex items-center bg-gradient-to-b from-white via-gray-50/30 to-white overflow-hidden">
        <!-- Background elements -->
        <div class="absolute inset-0">
            <!-- Noise texture -->
            <div class="absolute inset-0 noise-texture pointer-events-none"></div>
            
            <!-- Floating orbs -->
            <div class="absolute top-0 left-1/4 w-[500px] h-[500px]">
                <div class="w-full h-full rounded-full bg-gradient-to-br from-teal-100/40 to-transparent blur-3xl animate-float"></div>
            </div>
            <div class="absolute bottom-0 right-1/4 w-[400px] h-[400px]">
                <div class="w-full h-full rounded-full bg-gradient-to-tr from-slate-100/40 to-transparent blur-3xl animate-float-reverse"></div>
            </div>
        </div>

        <div class="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
            <div class="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                
                <!-- Left: Content -->
                <div class="max-w-xl">
                    <!-- Badge -->
                    <div class="inline-block mb-8 animate-fade-up opacity-0">
                        <div class="flex items-center gap-3 px-5 py-2.5 bg-white rounded-full shadow-sm border border-gray-100">
                            <div class="flex gap-1">
                                <span class="w-1.5 h-1.5 bg-teal-500 rounded-full animate-pulse"></span>
                                <span class="w-1.5 h-1.5 bg-teal-500 rounded-full animate-pulse delay-200"></span>
                                <span class="w-1.5 h-1.5 bg-teal-500 rounded-full animate-pulse delay-400"></span>
                            </div>
                            <span class="text-xs font-medium text-gray-600 tracking-wide">
                                TRUSTED BY 200+ CANADIAN NONPROFITS
                            </span>
                        </div>
                    </div>

                    <!-- Headline -->
                    <h1 class="text-5xl sm:text-6xl lg:text-7xl font-extralight text-gray-900 leading-[1.05] mb-8 animate-fade-up opacity-0 delay-100">
                        Close the gaps
                        <br />
                        that keep you
                        <br />
                        <span class="relative inline-flex items-baseline">
                            <span class="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-teal-600/10 blur-2xl"></span>
                            <span class="word-rotate">
                                <span class="font-normal bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent active">Fundable</span>
                                <span class="font-normal bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent">Compliant</span>
                                <span class="font-normal bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent">Impactful</span>
                                <span class="invisible font-normal">Fundable</span>
                            </span>
                        </span>
                    </h1>

                    <!-- Description -->
                    <p class="text-xl text-gray-600 mb-12 leading-relaxed font-light animate-fade-up opacity-0 delay-200">
                        We install the files that pass audits and satisfy funders—
                        <span class="text-gray-800 font-normal">board rules</span>, 
                        <span class="text-gray-800 font-normal">money tracking</span>, 
                        <span class="text-gray-800 font-normal">staff folders</span>.
                    </p>

                    <!-- CTAs -->
                    <div class="space-y-4 mb-16 animate-fade-up opacity-0 delay-300">
                        <div class="flex flex-col sm:flex-row gap-4">
                            <button class="group relative px-8 py-4 overflow-hidden rounded-2xl bg-gradient-to-r from-gray-900 to-gray-800 text-white font-medium shadow-xl hover-lift">
                                <span class="relative z-10 flex items-center justify-center gap-2">
                                    Get Your Health Score
                                    <svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </span>
                                <div class="absolute inset-0 bg-gradient-to-r from-teal-600 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </button>
                            
                            <button class="group px-8 py-4 rounded-2xl border border-gray-200 glass text-gray-700 font-medium transition-all duration-300 hover:border-gray-300 hover:bg-white hover:shadow-lg">
                                <span class="flex items-center justify-center gap-2">
                                    <div class="relative w-5 h-5">
                                        <div class="absolute inset-0 bg-gray-400 rounded-full opacity-20 animate-ping"></div>
                                        <svg class="relative w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    Watch Overview
                                </span>
                            </button>
                        </div>
                    </div>

                    <!-- Stats -->
                    <div class="flex items-center gap-8 animate-fade-up opacity-0 delay-400">
                        <div class="flex items-baseline gap-2">
                            <span class="text-4xl font-extralight text-gray-900">6</span>
                            <span class="text-sm font-medium text-gray-500 uppercase tracking-wider">weeks</span>
                        </div>
                        <div class="w-px h-8 bg-gray-200"></div>
                        <div class="flex items-baseline gap-2">
                            <span class="text-4xl font-extralight text-gray-900">100%</span>
                            <span class="text-sm font-medium text-gray-500 uppercase tracking-wider">guarantee</span>
                        </div>
                    </div>
                </div>

                <!-- Right: Dashboard -->
                <div class="relative animate-scale-in opacity-0 delay-600">
                    <!-- Glow -->
                    <div class="absolute -inset-4 bg-gradient-to-r from-teal-500/20 via-transparent to-slate-500/20 rounded-3xl blur-2xl opacity-50"></div>
                    
                    <!-- Card -->
                    <div class="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                        <!-- Header -->
                        <div class="px-8 pt-8 pb-6 border-b border-gray-100 bg-gradient-to-b from-gray-50/50 to-transparent">
                            <div class="flex items-center justify-between">
                                <div class="flex items-center gap-4">
                                    <div class="relative">
                                        <div class="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center">
                                            <span class="text-white font-bold text-2xl">N</span>
                                        </div>
                                        <div class="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
                                    </div>
                                    <div>
                                        <h3 class="text-lg font-semibold text-gray-900">Health Dashboard</h3>
                                        <p class="text-xs text-gray-500 font-medium mt-0.5">Live monitoring</p>
                                    </div>
                                </div>
                                <div class="flex items-center gap-2">
                                    <span class="text-xs text-gray-400">LIVE</span>
                                    <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                </div>
                            </div>
                        </div>

                        <!-- Body -->
                        <div class="p-8">
                            <!-- Metrics -->
                            <div class="space-y-8">
                                <!-- Metric 1 -->
                                <div class="relative">
                                    <div class="flex items-center justify-between mb-3">
                                        <div class="flex items-center gap-3">
                                            <span class="text-2xl">📋</span>
                                            <span class="text-sm font-medium text-gray-700">Governance & Board</span>
                                        </div>
                                        <span class="text-sm font-bold text-gray-900 tabular-nums">98%</span>
                                    </div>
                                    <div class="relative h-3 bg-gray-100 rounded-full overflow-hidden">
                                        <div class="absolute inset-y-0 left-0 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full progress-fill delay-700" style="--progress: 98%;">
                                            <div class="absolute inset-0 bg-white/30 animate-shimmer"></div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Metric 2 -->
                                <div class="relative">
                                    <div class="flex items-center justify-between mb-3">
                                        <div class="flex items-center gap-3">
                                            <span class="text-2xl">💰</span>
                                            <span class="text-sm font-medium text-gray-700">Financial Systems</span>
                                        </div>
                                        <span class="text-sm font-bold text-gray-900 tabular-nums">92%</span>
                                    </div>
                                    <div class="relative h-3 bg-gray-100 rounded-full overflow-hidden">
                                        <div class="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full progress-fill delay-900" style="--progress: 92%;">
                                            <div class="absolute inset-0 bg-white/30 animate-shimmer"></div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Metric 3 -->
                                <div class="relative">
                                    <div class="flex items-center justify-between mb-3">
                                        <div class="flex items-center gap-3">
                                            <span class="text-2xl">👥</span>
                                            <span class="text-sm font-medium text-gray-700">HR & Compliance</span>
                                        </div>
                                        <span class="text-sm font-bold text-gray-900 tabular-nums">88%</span>
                                    </div>
                                    <div class="relative h-3 bg-gray-100 rounded-full overflow-hidden">
                                        <div class="absolute inset-y-0 left-0 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full progress-fill delay-1000" style="--progress: 88%;">
                                            <div class="absolute inset-0 bg-white/30 animate-shimmer"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Score -->
                            <div class="mt-10 pt-8 border-t border-gray-100">
                                <div class="flex items-center justify-between">
                                    <div>
                                        <p class="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Overall Score</p>
                                        <div class="flex items-center gap-2">
                                            <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                            </svg>
                                            <span class="text-sm font-semibold text-gray-700">Funding Ready</span>
                                        </div>
                                    </div>
                                    <div class="text-right">
                                        <span class="text-6xl font-extralight text-gray-900 animate-fade-up opacity-0 delay-1500">92</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Word rotation script -->
    <script>
        // Word rotation
        const words = ['Fundable', 'Compliant', 'Impactful'];
        let currentIndex = 0;
        
        setInterval(() => {
            const wordElements = document.querySelectorAll('.word-rotate span:not(.invisible)');
            wordElements.forEach(el => el.classList.remove('active'));
            currentIndex = (currentIndex + 1) % words.length;
            wordElements[currentIndex].classList.add('active');
        }, 3500);
    </script>

</body>
</html>