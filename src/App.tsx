import { useState, useEffect, useMemo } from 'react';
import {
  odontologyQuizQuestions,
  operativeQuizQuestions,
  surgeryQuizQuestions
} from './data/dummyData';
import { 
  CheckCircle2, 
  XCircle, 
  AlertCircle, 
  Check, 
  ChevronRight, 
  ChevronLeft, 
  BookOpen, 
  Sparkles, 
  Clock, 
  Flag, 
  Filter, 
  Layers, 
  ListCheck, 
  HelpCircle,
  RefreshCw,
  Play,
  Pause,
  FolderKanban
} from 'lucide-react';

const QUIZ_FILTERS = [
  { id: 'odontology', name: 'Odontology Quiz', questions: odontologyQuizQuestions },
  { id: 'operative', name: 'Operative Quiz', questions: operativeQuizQuestions },
  { id: 'surgery', name: 'Surgery Quiz', questions: surgeryQuizQuestions }
] as const;

export default function App() {
  const [selectedSubject, setSelectedSubject] = useState<string>('odontology');
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Set<number>>(new Set());
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [viewMode, setViewMode] = useState<'list' | 'step'>('list'); // 'list' or 'step'
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [filterMode, setFilterMode] = useState<string>('all'); // 'all', 'incorrect', 'correct', 'flagged'
  
  // Timer state - now defaults to NOT running automatically
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  // Subject-filtered questions pool
  const activeQuestionsPool = useMemo(() => {
    const selectedQuiz = QUIZ_FILTERS.find((quiz) => quiz.id === selectedSubject);
    return selectedQuiz ? selectedQuiz.questions : odontologyQuizQuestions;
  }, [selectedSubject]);

  // Timer logic
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;

    if (isTimerRunning && !isSubmitted) {
      interval = setInterval(() => {
        setTimeElapsed((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isTimerRunning, isSubmitted]);

  // Format seconds to mm:ss
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Toggle Timer Play/Pause
  const toggleTimer = () => {
    setIsTimerRunning(!isTimerRunning);
  };

  // Handle option selection
  const handleSelectOption = (questionId: number, optionId: string) => {
    if (isSubmitted) return;
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: optionId
    }));
  };

  // Handle toggle flag
  const toggleFlag = (questionId: number) => {
    setFlaggedQuestions((prev) => {
      const next = new Set(prev);
      if (next.has(questionId)) {
        next.delete(questionId);
      } else {
        next.add(questionId);
      }
      return next;
    });
  };

  // Compute total answered in active pool
  const answeredCount = activeQuestionsPool.filter(q => userAnswers[q.id] !== undefined).length;
  const totalQuestions = activeQuestionsPool.length;

  // Calculate score upon submission
  const scoreResults = useMemo(() => {
    let correctCount = 0;
    activeQuestionsPool.forEach((q) => {
      if (userAnswers[q.id] === q.correctAnswer) {
        correctCount++;
      }
    });
    const percentage = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
    return { correctCount, percentage, total: totalQuestions };
  }, [userAnswers, activeQuestionsPool, totalQuestions]);

  // Handle submit
  const handleSubmit = () => {
    if (answeredCount < totalQuestions) {
      const confirmSubmit = window.confirm(
        `អ្នកបានឆ្លើយតែ ${answeredCount} ក្នុងចំណោម ${totalQuestions} សំណួរ។ តើអ្នកពិតជាចង់បញ្ជូន (Submit) ឥឡូវនេះមែនទេ?`
      );
      if (!confirmSubmit) return;
    }
    setIsSubmitted(true);
    setIsTimerRunning(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Reset quiz
  const handleReset = () => {
    if (window.confirm("តើអ្នកចង់ធ្វើលំហាត់សារជាថ្មីមែនទេ?")) {
      setUserAnswers({});
      setFlaggedQuestions(new Set());
      setIsSubmitted(false);
      setCurrentStepIndex(0);
      setTimeElapsed(0);
      setIsTimerRunning(false);
      setFilterMode('all');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Filtered list based on correctness or flag
  const filteredQuestions = useMemo(() => {
    return activeQuestionsPool.filter((q) => {
      const isCorrect = userAnswers[q.id] === q.correctAnswer;
      const isFlagged = flaggedQuestions.has(q.id);

      if (filterMode === 'correct') return isCorrect && isSubmitted;
      if (filterMode === 'incorrect') return !isCorrect && isSubmitted;
      if (filterMode === 'flagged') return isFlagged;
      return true;
    });
  }, [activeQuestionsPool, userAnswers, isSubmitted, filterMode, flaggedQuestions]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased pb-12">
      {/* Header Bar */}
      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-600 text-white p-2 rounded-xl shadow-md">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-900 leading-tight">
                Dental Knowledge Quiz Platform
              </h1>
              <p className="text-xs text-slate-500 font-medium">
                សំណួរត្រៀមប្រឡង ({totalQuestions} សំណួរក្នុងកម្រងនេះ)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Timer Control Button */}
            <div className="flex items-center gap-2 bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-lg text-sm font-semibold">
              <Clock className={`w-4 h-4 ${isTimerRunning ? 'text-emerald-600 animate-pulse' : 'text-slate-400'}`} />
              <span className="font-mono">{formatTime(timeElapsed)}</span>
              {!isSubmitted && (
                <button
                  onClick={toggleTimer}
                  className={`ml-1 px-2 py-0.5 rounded text-xs font-bold text-white transition-all flex items-center gap-1 ${
                    isTimerRunning ? 'bg-amber-500 hover:bg-amber-600' : 'bg-emerald-600 hover:bg-emerald-700'
                  }`}
                >
                  {isTimerRunning ? (
                    <>
                      <Pause className="w-3 h-3" /> ផ្អាក
                    </>
                  ) : (
                    <>
                      <Play className="w-3 h-3" /> ចាប់ផ្តើម Timer
                    </>
                  )}
                </button>
              )}
            </div>

            {/* Mode Switcher (List vs Step) */}
            {!isSubmitted && (
              <div className="hidden sm:flex bg-slate-100 p-1 rounded-lg border border-slate-200">
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all flex items-center gap-1 ${
                    viewMode === 'list'
                      ? 'bg-white text-indigo-600 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <ListCheck className="w-3.5 h-3.5" />
                  បញ្ជីទាំងអស់
                </button>
                <button
                  onClick={() => setViewMode('step')}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all flex items-center gap-1 ${
                    viewMode === 'step'
                      ? 'bg-white text-indigo-600 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  ម្តងមួយសំណួរ
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-100 h-1.5">
          <div
            className="bg-indigo-600 h-full transition-all duration-300 ease-out"
            style={{ width: `${totalQuestions > 0 ? (answeredCount / totalQuestions) * 100 : 0}%` }}
          />
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 mt-6">

        {/* Subject / Exam Filter Bar */}
        <div className="mb-6 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-2 mb-2 text-slate-700 font-bold text-sm">
            <FolderKanban className="w-4 h-4 text-indigo-600" />
            <span>Choose Quiz Set:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {QUIZ_FILTERS.map((quiz) => {
              const count = quiz.questions.length;
              const isActive = selectedSubject === quiz.id;

              return (
                <button
                  key={quiz.id}
                  disabled={isSubmitted}
                  onClick={() => {
                    setSelectedSubject(quiz.id);
                    setCurrentStepIndex(0);
                  }}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
                  } disabled:opacity-60`}
                >
                  <span>{quiz.name}</span>
                  <span className={`px-1.5 py-0.5 rounded-full text-[10px] ${
                    isActive ? 'bg-indigo-800 text-white' : 'bg-slate-200 text-slate-700'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Result Card when Submitted */}
        {isSubmitted && (
          <div className="bg-white rounded-2xl p-6 mb-8 border border-slate-200 shadow-md">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div
                  className={`w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-extrabold shadow-inner ${
                    scoreResults.percentage >= 70
                      ? 'bg-emerald-100 text-emerald-700 border border-emerald-300'
                      : scoreResults.percentage >= 50
                      ? 'bg-amber-100 text-amber-700 border border-amber-300'
                      : 'bg-rose-100 text-rose-700 border border-rose-300'
                  }`}
                >
                  {scoreResults.percentage}%
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-slate-900">
                      លទ្ធផលប្រឡងរបស់អ្នក
                    </span>
                    {scoreResults.percentage >= 70 ? (
                      <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5" /> ជាប់ល្អប្រសើរ
                      </span>
                    ) : (
                      <span className="bg-rose-100 text-rose-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                        ត្រូវការខិតខំបន្ថែម
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-slate-600 mt-1">
                    អ្នកឆ្លើយត្រូវ{' '}
                    <span className="font-bold text-emerald-600">
                      {scoreResults.correctCount}
                    </span>{' '}
                    ក្នុងចំណោម{' '}
                    <span className="font-bold text-slate-800">
                      {scoreResults.total}
                    </span>{' '}
                    សំណួរ
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    រយៈពេលចំណាយ៖ {formatTime(timeElapsed)}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto">
                <button
                  onClick={handleReset}
                  className="flex-1 md:flex-initial flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-2.5 rounded-xl shadow-md transition-all active:scale-95"
                >
                  <RefreshCw className="w-4 h-4" />
                  ធ្វើលំហាត់ឡើងវិញ
                </button>
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 mt-6 pt-6 border-t border-slate-100">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" /> តម្រងមើល៖
              </span>
              {[
                { id: 'all', label: `ទាំងអស់ (${totalQuestions})` },
                {
                  id: 'incorrect',
                  label: `ខុស (${totalQuestions - scoreResults.correctCount})`
                },
                {
                  id: 'correct',
                  label: `ត្រូវ (${scoreResults.correctCount})`
                },
                {
                  id: 'flagged',
                  label: `ចំនាំទុក (${flaggedQuestions.size})`
                }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setFilterMode(tab.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    filterMode === tab.id
                      ? 'bg-slate-900 text-white shadow'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Unsubmitted Top Stats & Controls */}
        {!isSubmitted && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-4 text-sm text-slate-600">
              <div>
                ឆ្លើយរួច៖{' '}
                <span className="font-bold text-indigo-600">
                  {answeredCount}
                </span>{' '}
                / {totalQuestions}
              </div>
              <div className="h-4 w-px bg-slate-300" />
              <div>
                ចំណាំទុក (Flagged):{' '}
                <span className="font-bold text-amber-600">
                  {flaggedQuestions.size}
                </span>
              </div>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              <Check className="w-4 h-4" />
              បញ្ជូនចម្លើយ (Submit)
            </button>
          </div>
        )}

        {}
        {!isSubmitted && viewMode === 'step' ? (
          /* STEP-BY-STEP MODE */
          activeQuestionsPool.length > 0 ? (
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md">
              <div className="flex items-start justify-between gap-4 mb-4">
                <span className="inline-block bg-indigo-50 text-indigo-700 font-bold text-xs px-3 py-1 rounded-full border border-indigo-200">
                  សំណួរទី {currentStepIndex + 1} នៃ {totalQuestions}
                </span>
                <button
                  onClick={() =>
                    toggleFlag(activeQuestionsPool[currentStepIndex].id)
                  }
                  className={`p-2 rounded-lg transition-all ${
                    flaggedQuestions.has(activeQuestionsPool[currentStepIndex].id)
                      ? 'bg-amber-100 text-amber-600'
                      : 'bg-slate-100 text-slate-400 hover:text-amber-500'
                  }`}
                  title="ចំណាំសំណួរនេះ"
                >
                  <Flag className="w-4 h-4 fill-current" />
                </button>
              </div>

              <h2 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug mb-6">
                {activeQuestionsPool[currentStepIndex].question}
              </h2>

              <div className="space-y-3 mb-8">
                {activeQuestionsPool[currentStepIndex].options.map((opt) => {
                  const qId = activeQuestionsPool[currentStepIndex].id;
                  const isSelected = userAnswers[qId] === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => handleSelectOption(qId, opt.id)}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center justify-between ${
                        isSelected
                          ? 'border-indigo-600 bg-indigo-50/50 text-indigo-900 shadow-sm'
                          : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs uppercase ${
                            isSelected
                              ? 'bg-indigo-600 text-white'
                              : 'bg-slate-100 text-slate-600'
                          }`}
                        >
                          {opt.id}
                        </span>
                        <span className="text-sm sm:text-base font-medium">
                          {opt.text}
                        </span>
                      </div>
                      {isSelected && (
                        <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <button
                  disabled={currentStepIndex === 0}
                  onClick={() => setCurrentStepIndex((prev) => prev - 1)}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 disabled:opacity-40 disabled:pointer-events-none transition-all"
                >
                  <ChevronLeft className="w-4 h-4" />
                  ថយក្រោយ
                </button>

                <div className="text-xs text-slate-400 font-medium">
                  {currentStepIndex + 1} / {totalQuestions}
                </div>

                {currentStepIndex < totalQuestions - 1 ? (
                  <button
                    onClick={() => setCurrentStepIndex((prev) => prev + 1)}
                    className="flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 text-white shadow transition-all"
                  >
                    បន្តទៅមុខ
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    className="flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow transition-all"
                  >
                    <Check className="w-4 h-4" />
                    បញ្ជូន
                  </button>
                )}
              </div>
            </div>
          ) : null
        ) : (
          /* LIST MODE */
          <div className="space-y-6">
            {filteredQuestions.length === 0 ? (
              <div className="bg-white p-12 text-center rounded-2xl border border-slate-200 shadow-sm text-slate-500">
                <HelpCircle className="w-12 h-12 mx-auto text-slate-300 mb-3" />
                <p className="font-semibold text-lg">មិនមានសំណួរក្នុងតម្រងនេះទេ</p>
                <p className="text-xs text-slate-400 mt-1">
                  សូមជ្រើសរើសប្រភេទតម្រង ឬប្រធានបទផ្សេងទៀត។
                </p>
              </div>
            ) : (
              filteredQuestions.map((q, idx) => {
                const selectedOpt = userAnswers[q.id];
                const isCorrect = selectedOpt === q.correctAnswer;
                const isFlagged = flaggedQuestions.has(q.id);

                return (
                  <div
                    key={q.id}
                    id={`q-${q.id}`}
                    className={`bg-white rounded-2xl p-6 border-2 transition-all shadow-sm ${
                      isSubmitted
                        ? isCorrect
                          ? 'border-emerald-300 bg-emerald-50/20'
                          : 'border-rose-300 bg-rose-50/20'
                        : selectedOpt
                        ? 'border-indigo-200'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-xs px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200">
                          សំណួរ #{idx + 1}
                        </span>
                        {isSubmitted && (
                          <span
                            className={`text-xs font-bold px-2.5 py-1 rounded-lg flex items-center gap-1 ${
                              isCorrect
                                ? 'bg-emerald-100 text-emerald-800'
                                : 'bg-rose-100 text-rose-800'
                            }`}
                          >
                            {isCorrect ? (
                              <>
                                <CheckCircle2 className="w-3.5 h-3.5" /> ត្រឹមត្រូវ
                              </>
                            ) : (
                              <>
                                <XCircle className="w-3.5 h-3.5" /> មិនត្រឹមត្រូវ
                              </>
                            )}
                          </span>
                        )}
                      </div>

                      {!isSubmitted && (
                        <button
                          onClick={() => toggleFlag(q.id)}
                          className={`p-1.5 rounded-lg transition-all ${
                            isFlagged
                              ? 'bg-amber-100 text-amber-600'
                              : 'text-slate-300 hover:text-amber-500 hover:bg-slate-100'
                          }`}
                          title="ចំណាំសំណួរនេះ"
                        >
                          <Flag className="w-4 h-4 fill-current" />
                        </button>
                      )}
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed mb-4">
                      {q.question}
                    </h3>

                    <div className="grid grid-cols-1 gap-2.5">
                      {q.options.map((opt) => {
                        const isThisSelected = selectedOpt === opt.id;
                        const isThisCorrect = opt.id === q.correctAnswer;

                        let styleClasses =
                          'border-slate-200 hover:bg-slate-50 text-slate-700';

                        if (isSubmitted) {
                          if (isThisCorrect) {
                            styleClasses =
                              'border-emerald-500 bg-emerald-50 text-emerald-900 font-semibold ring-1 ring-emerald-400';
                          } else if (isThisSelected && !isThisCorrect) {
                            styleClasses =
                              'border-rose-400 bg-rose-50 text-rose-900 line-through opacity-80';
                          } else {
                            styleClasses =
                              'border-slate-200 opacity-60 text-slate-500';
                          }
                        } else if (isThisSelected) {
                          styleClasses =
                            'border-indigo-600 bg-indigo-50/60 text-indigo-900 font-semibold shadow-sm';
                        }

                        return (
                          <div
                            key={opt.id}
                            onClick={() => handleSelectOption(q.id, opt.id)}
                            className={`p-3.5 rounded-xl border-2 transition-all flex items-center justify-between cursor-pointer ${styleClasses}`}
                          >
                            <div className="flex items-center gap-3">
                              <span
                                className={`w-6 h-6 rounded-md flex items-center justify-center font-bold text-xs uppercase ${
                                  isSubmitted && isThisCorrect
                                    ? 'bg-emerald-600 text-white'
                                    : isSubmitted && isThisSelected && !isThisCorrect
                                    ? 'bg-rose-600 text-white'
                                    : isThisSelected
                                    ? 'bg-indigo-600 text-white'
                                    : 'bg-slate-100 text-slate-600'
                                }`}
                              >
                                {opt.id}
                              </span>
                              <span className="text-sm sm:text-base font-medium">
                                {opt.text}
                              </span>
                            </div>

                            <div className="shrink-0 ml-2">
                              {isSubmitted ? (
                                isThisCorrect ? (
                                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                                ) : isThisSelected ? (
                                  <XCircle className="w-5 h-5 text-rose-500" />
                                ) : null
                              ) : (
                                isThisSelected && (
                                  <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                                )
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {isSubmitted && q.explanation && (
                      <div className="mt-4 p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs sm:text-sm text-slate-700 flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-indigo-900 block mb-0.5">
                            ពន្យល់បន្ថែម (Explanation):
                          </span>
                          {q.explanation}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        )}

        {/* Floating Bottom Action Bar for List Mode */}
        {!isSubmitted && viewMode === 'list' && (
          <div className="fixed bottom-4 left-0 right-0 z-20 px-4">
            <div className="max-w-md mx-auto bg-slate-900/90 backdrop-blur-md text-white p-3 rounded-2xl shadow-xl flex items-center justify-between border border-slate-700">
              <div className="pl-3 text-xs">
                <span className="font-bold text-emerald-400">
                  {answeredCount}
                </span>{' '}
                នៃ {totalQuestions} ឆ្លើយរួច
              </div>
              <button
                onClick={handleSubmit}
                className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-5 py-2 rounded-xl text-xs shadow transition-all active:scale-95 flex items-center gap-1.5"
              >
                <Check className="w-4 h-4" />
                បញ្ជូនចម្លើយ
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}