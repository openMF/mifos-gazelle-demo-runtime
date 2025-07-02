import { useState } from 'react';
import { ChevronLeft, ChevronRight, RotateCcw, ExternalLink } from 'lucide-react';
import { SampleDemoJsonFile } from '@/data/sampleDemoFile';
import { Button } from '@/components/ui/button';



export const DemoPage=()=> {
  const [currentStep, setCurrentStep] = useState(0);
  const [iframeUrl, setIframeUrl] = useState("https://sandbox.mifos.community");

  const totalSteps = SampleDemoJsonFile.steps.length;
  const currentStepData = SampleDemoJsonFile.steps[currentStep];

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      const nextStepIndex = currentStep + 1;
      setCurrentStep(nextStepIndex);
      const nextStep = SampleDemoJsonFile.steps[nextStepIndex];
      if (nextStep?.url) {
        setIframeUrl(nextStep.url);
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      const prevStepIndex = currentStep - 1;
      setCurrentStep(prevStepIndex);
      const prevStep = SampleDemoJsonFile.steps[prevStepIndex];
      if (prevStep?.url) {
        setIframeUrl(prevStep.url);
      }
    }
  };

  const handleStepClick = (stepIndex:number) => {
    setCurrentStep(stepIndex);
    const step = SampleDemoJsonFile.steps[stepIndex];
    if (step?.url) {
      setIframeUrl(step.url);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setIframeUrl("https://sandbox.mifos.community");
  };

  return (
    <div className="h-screen bg-gray-200 flex dark:bg-gray-900">
      <div className="demo-details bg-white h-full w-1/3 shadow-lg overflow-y-auto dark:bg-gray-900 ">
        <div className="p-6">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                {SampleDemoJsonFile.demoName}
              </h1>
              <button
                onClick={handleReset}
                className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 dark:text-white
                 dark:hover:bg-gray-700 rounded-md transition-colors"
                title="Reset Tutorial"
              >
                <RotateCcw size={16} />
              </button>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              {SampleDemoJsonFile.demoDescription}
            </p>
          </div>

          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-500 dark:text-white mb-2">
              <span>Progress</span>
              <span>{currentStep + 1} of {totalSteps}</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2">
              <div 
                className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="mb-6">
            <div className="bg-blue-50 dark:bg-gray-800 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <h3 className="font-semibold text-blue-900 dark:text-white mb-2">
                Step {currentStep + 1}: {currentStepData?.title}
              </h3>
              <p className="text-blue-800 dark:text-gray-400 text-sm leading-relaxed">
                {currentStepData?.description}
              </p>
              {currentStepData?.url && (
                <div className="mt-3">
                  <a 
                    href={currentStepData.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 dark:text-blue-400 text-sm"
                  >
                    <ExternalLink size={14} />
                    Open in new tab
                  </a>
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-between">
            <Button
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className="flex items-center gap-2 px-4 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer"
            >
              <ChevronLeft size={16} />
              Previous
            </Button>
            <Button
              onClick={handleNext}
              disabled={currentStep === SampleDemoJsonFile.steps.length - 1}
              className="flex items-center gap-2 px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 dark:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer"
            >
              Next
              <ChevronRight size={16} />
            </Button>
          </div>

          <div className="mb-6 my-2">
            <h4 className="font-medium text-gray-700 dark:text-gray-400 mb-3">All Steps:</h4>
            <div className="space-y-2 overflow-y-auto h-[200px] p-2">
              {SampleDemoJsonFile.steps.map((step, index) => (
                <button
                  key={index}
                  onClick={() => handleStepClick(index)}
                  className={`w-full text-left p-3 rounded-lg border transition-all ${
                    index === currentStep
                      ? 'bg-blue-100 border-blue-300 text-blue-800 dark:text-gray-600'
                      : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-800 dark:hover:bg-gray-900 dark:text-gray-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium min-w-6 min-h-6 ${
                      index === currentStep 
                        ? 'bg-blue-600 dark:bg-blue-400 text-white' 
                        : index < currentStep 
                        ? 'bg-green-500 dark:bg-green-700 text-white' 
                        : 'bg-gray-300 dark:bg-blue-300 text-gray-600'
                    }`}>
                      {index < currentStep ? '✓' : index + 1}
                    </div>
                    <div>
                      <div className="font-medium text-sm">{step.title}</div>
                      <div className="text-xs text-gray-500 mt-1 line-clamp-2">{step.description}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          
        </div>
      </div>

      <div className="iframe bg-gray-100 h-full w-2/3 dark:bg-gray-900">
        <div className="h-full flex flex-col">
          <div className="bg-white border-b px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-sm text-gray-600 font-mono truncate">{iframeUrl}</span>
            </div>
            <button
              onClick={() => setIframeUrl(iframeUrl)}
              className="p-1 text-gray-500 hover:text-gray-700 rounded"
              title="Refresh"
            >
              <RotateCcw size={16} />
            </button>
          </div>

          <div className="flex-1 bg-white">
            <iframe
              src={iframeUrl}
              className="w-full h-full border-0"
              title="MifosX Demo"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-top-navigation"
            />
          </div>
        </div>
      </div>
    </div>
  );
}