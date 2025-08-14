import { useEffect, useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  ExternalLink,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
// import { useLocation } from 'react-router-dom';
// import { fetchDemoData } from '@/lib/api/fetchDemoData';
import { SamplePlatformDemo } from '@/data/platform-demo';
import { Button } from '@/components/ui/button';
import { getUniqueBaseUrls, mapUrl } from '@/lib/demofileparser/getBaseUrl';

interface Step {
  title: string;
  description: string;
  url?: string;
}

interface Demo {
  demoID: string;
  demoName: string;
  demoDescription: string;
  steps: Step[];
}

export const DemoPage = () => {
  const [demoData, setDemoData] = useState<Demo | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeBaseUrl, setActiveBaseUrl] = useState<string>('');
  const firstStepUrl = SamplePlatformDemo?.steps[0].url;
  const [baseUrls, setBaseUrls] = useState<Map<string, string>>(
    firstStepUrl
      ? new Map([[firstStepUrl, firstStepUrl]])
      : new Map([
          [
            SamplePlatformDemo?.steps[0].url || '',
            SamplePlatformDemo?.steps[0].url || '',
          ],
        ])
  );

  // const location = useLocation();

  useEffect(() => {
    // const demoTitle = location.pathname.split('/')[2];
    // fetchDemoData()
    //   .then(setDemoData)
    //   .finally(() => setIsLoading(false));
    setIsLoading(false);
    setDemoData(SamplePlatformDemo);
    setIframeUrl(SamplePlatformDemo?.steps[0].url ?? '');
    const initialUrl = SamplePlatformDemo?.steps[0].url ?? '';
    const parsedUrl = new URL(initialUrl);
    handleStepTransition(0, parsedUrl.href);
    const initialBaseUrl = `${parsedUrl.protocol}//${parsedUrl.hostname}`;
    setActiveBaseUrl(initialBaseUrl);
  }, []);

  const [currentStep, setCurrentStep] = useState(0);
  const [iframeUrl, setIframeUrl] = useState('');
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlay && demoData) {
      interval = setInterval(() => {
        handleNext();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, []);

  const totalSteps = demoData?.steps.length ?? 0;
  const currentStepData = demoData?.steps[currentStep];

  const handleStepTransition = (stepIndex: number, url?: string) => {
    setIsTransitioning(true);
    setCurrentStep(stepIndex);
    if (url) {
      setTimeout(() => {
        const parsedUrl = new URL(url);
        const baseUrl = `${parsedUrl.protocol}//${parsedUrl.hostname}`;
        setActiveBaseUrl(baseUrl);
        getUniqueBaseUrls(url, setBaseUrls);
        setIframeUrl(url);
        setTimeout(() => setIsTransitioning(false), 300);
      }, 150);
    } else {
      setTimeout(() => setIsTransitioning(false), 300);
    }
  };

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      const nextStepIndex = currentStep + 1;
      const nextStep = demoData?.steps[nextStepIndex];
      handleStepTransition(nextStepIndex, nextStep?.url);
    } else {
      setIsAutoPlay(false);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      const prevStepIndex = currentStep - 1;
      const prevStep = demoData?.steps[prevStepIndex];
      handleStepTransition(prevStepIndex, prevStep?.url);
    }
  };

  const handleStepClick = (stepIndex: number) => {
    const step = demoData?.steps[stepIndex];
    handleStepTransition(stepIndex, step?.url);
  };

  const handleReset = () => {
    setIsAutoPlay(false);
    handleStepTransition(0, firstStepUrl);
    setActiveBaseUrl('');
  };

  if (isLoading) {
    return (
      <div
        className="h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-900
       dark:to-indigo-950 flex items-center justify-center"
      >
        <div className="text-center space-y-4">
          <div className="relative">
            <div
              className="w-16 h-16 border-4 border-blue-200 dark:border-blue-800 rounded-full animate-spin border-t-blue-600
             dark:border-t-blue-400"
            ></div>
            <Sparkles className="absolute inset-0 m-auto w-6 h-6 text-blue-600 dark:text-blue-400 animate-pulse" />
          </div>
          <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
            Loading your demo experience...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="md:h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-900
     dark:to-indigo-950 flex overflow-y-auto md:overflow-hidden flex-col md:flex-row"
    >
      <div
        className="demo-details bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl min-h-28 md:h-full w-full md:w-1/3 shadow-2xl overflow-y-auto border-r
       border-white/20 dark:border-gray-700/20"
      >
        <div className="p-8 space-y-8">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-600 rounded-full opacity-10 blur-xl"></div>
            <div className="flex items-start justify-between mb-6 relative">
              <div className="space-y-2">
                <h1
                  className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 
                bg-clip-text text-transparent leading-tight"
                >
                  {demoData?.demoName}
                </h1>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-green-600 dark:text-green-400 font-medium">
                    Live Demo
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={handleReset}
                  className="group p-3 bg-white/50 dark:bg-gray-800/50 hover:bg-white/70 dark:hover:bg-gray-800/70 text-gray-700
                   dark:text-gray-300 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 backdrop-blur-sm border
                    border-white/20 dark:border-gray-700/20"
                  title="Reset Tutorial"
                >
                  <RotateCcw
                    size={16}
                    className="group-hover:rotate-180 transition-transform duration-500"
                  />
                </button>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {demoData?.demoDescription}
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between text-sm font-medium">
              <span className="text-gray-700 dark:text-gray-300">Progress</span>
              <span className="text-blue-600 dark:text-blue-400">
                {currentStep + 1} of {totalSteps}
              </span>
            </div>
            <div className="relative">
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full transition-all duration-700 ease-out 
                  relative overflow-hidden"
                  style={{
                    width: `${((currentStep + 1) / totalSteps) * 100}%`,
                  }}
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                </div>
              </div>
              <div
                className="absolute top-0 w-1 h-3 bg-white rounded-full shadow-lg transition-all duration-700 ease-out"
                style={{
                  left: `${((currentStep + 1) / totalSteps) * 100}%`,
                  transform: 'translateX(-50%)',
                }}
              ></div>
            </div>
          </div>

          <div
            className={`relative transition-all duration-500 ${isTransitioning ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}
          >
            <div
              className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800/50 dark:to-indigo-900/20 border
             border-blue-200/50 dark:border-blue-700/30 p-6 rounded-2xl backdrop-blur-sm relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600"></div>
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full opacity-10 blur-xl"></div>

              <div className="flex items-start gap-4 relative">
                <div
                  className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center
                 text-white font-bold shadow-lg"
                >
                  {currentStep + 1}
                </div>
                <div className="flex-1 space-y-3">
                  <h3 className="font-bold text-xl text-gray-900 dark:text-white">
                    {currentStepData?.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {currentStepData?.description}
                  </p>
                  {currentStepData?.url && (
                    <a
                      href={currentStepData.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 
                      font-medium transition-colors group"
                    >
                      <ExternalLink
                        size={16}
                        className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200"
                      />
                      Open in new tab
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between gap-4">
            <button
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className="group flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-white/70 dark:bg-gray-800/70 hover:bg-white
               dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl shadow-lg hover:shadow-xl disabled:opacity-50 
               disabled:cursor-not-allowed transition-all duration-200 backdrop-blur-sm border border-white/20 dark:border-gray-700/20 font-medium"
              title="Go to previous step"
            >
              <ChevronLeft
                size={18}
                className="group-hover:-translate-x-1 transition-transform duration-200"
              />
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={currentStep === totalSteps - 1}
              className="group flex-1 flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600
               hover:to-blue-700 text-white rounded-xl shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all 
               duration-200 font-medium transform hover:scale-105"
              title="Go to next step"
            >
              Next
              <ChevronRight
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </button>
          </div>

          <div className="space-y-4 hidden md:block lg:block xl:block">
            <h4 className="font-bold text-lg text-gray-800 dark:text-gray-200 flex items-center gap-2">
              <Sparkles size={18} className="text-blue-500" />
              Tutorial Steps
            </h4>
            <div className="space-y-3">
              {demoData?.steps.map((step, index) => (
                <button
                  key={index}
                  onClick={() => handleStepClick(index)}
                  className={`group w-full text-left p-4 rounded-xl border transition-all duration-300 transform hover:scale-[1.02] ${
                    index === currentStep
                      ? 'bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 border-blue-300dark:border-blue-600 shadow-lg scale-[1.02]'
                      : 'bg-white/50 dark:bg-gray-800/30 border-gray-200/50 dark:border-gray-700/30 hover:bg-white/70 dark:hover:bg-gray-800/50 shadow-md hover:shadow-lg'
                  } backdrop-blur-sm`}
                  title={`Go to step: ${step.title}`}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 relative">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                          index === currentStep
                            ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg scale-110'
                            : index < currentStep
                              ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-md'
                              : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                        }`}
                      >
                        {index < currentStep ? (
                          <CheckCircle2 size={14} />
                        ) : (
                          index + 1
                        )}
                      </div>
                      {index < currentStep && (
                        <div className="absolute -inset-1 bg-green-400 rounded-full animate-ping opacity-30"></div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div
                        className={`font-semibold text-sm mb-1 transition-colors ${
                          index === currentStep
                            ? 'text-blue-900 dark:text-blue-100'
                            : 'text-gray-800 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-gray-100'
                        }`}
                      >
                        {step.title}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed">
                        {step.description}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="iframe bg-white dark:bg-gray-900 h-[800px] md:h-full md:w-2/3 relative overflow-hidden">
        <div className="h-full flex flex-col relative">
          <div
            className="bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border-b border-gray-200
           dark:border-gray-700 flex items-center justify-between shadow-sm"
          >
            <div className="flex items-center gap-1 min-h-10 px-2 py-0">
              <div className="flex gap-1">
                <div className="w-3 h-3 bg-red-500 rounded-full shadow-sm hover:bg-red-600 transition-colors cursor-pointer"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full shadow-sm hover:bg-yellow-600 transition-colors cursor-pointer"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full shadow-sm hover:bg-green-600 transition-colors cursor-pointer"></div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg px-2  flex-1 max-w-md">
                <span
                  className="text-sm min-w-20 max-w-40 text-gray-600 dark:text-gray-400 font-mono truncate block"
                  title={activeBaseUrl}
                >
                  {activeBaseUrl}
                </span>
              </div>
            </div>
            <div className="w-full h-full flex">
              {Array.from(baseUrls.keys())
                .filter(baseUrl => baseUrl && mapUrl.has(baseUrl))
                .map((baseUrl, idx) => (
                  <Button
                    key={idx}
                    className={`h-full max-w-40 rounded-none flex-1 transition-all duration-200 cursor-pointer
        ${
          iframeUrl?.startsWith(baseUrl)
            ? 'bg-blue-400 hover:bg-blue-500 text-white shadow-sm dark:bg-blue-600'
            : 'bg-gray-200 hover:bg-gray-300 text-gray-500 dark:bg-slate-400 dark:text-gray-600'
        } font-semibold`}
                    onClick={() => setActiveBaseUrl(baseUrl)}
                  >
                    {mapUrl.get(baseUrl)}
                  </Button>
                ))}
            </div>

            <button
              onClick={() => setIframeUrl(iframeUrl + '?refresh=' + Date.now())}
              className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 rounded-lg hover:bg-gray-100
               dark:hover:bg-gray-800 transition-all duration-200 group"
              title="Refresh"
            >
              <RotateCcw
                size={18}
                className="group-hover:rotate-180 transition-transform duration-500"
              />
            </button>
          </div>

          <div className="flex-1 relative bg-white dark:bg-gray-400">
            {isTransitioning && (
              <div className="absolute inset-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-10 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div
                    className="w-12 h-12 border-4 border-blue-200 dark:border-blue-800 rounded-full animate-spin border-t-blue-600
                   dark:border-t-blue-400"
                  ></div>
                  <p className="text-gray-600 dark:text-gray-400 font-medium">
                    Loading step...
                  </p>
                </div>
              </div>
            )}
            {Array.from(baseUrls.entries()).map(([baseUrl, url]) => (
              <iframe
                key={baseUrl}
                src={url}
                className={`w-full h-full border-0 absolute top-0 left-0 transition-opacity duration-300 ${
                  activeBaseUrl === baseUrl
                    ? 'opacity-100 z-10'
                    : 'opacity-0 z-0'
                }`}
                title="MifosX Demo"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-top-navigation-by-user-activation"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
