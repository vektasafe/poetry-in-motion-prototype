"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface QuizResponse {
  bodyType: string
  skinTone: string
  style: string[]
  budget: string
  colors: string[]
  occasions: string[]
}

const quizSteps = [
  {
    id: "body-type",
    title: "What's your body type?",
    description: "This helps us recommend pieces that flatter your silhouette",
    type: "single",
    options: ["Pear", "Apple", "Hourglass", "Rectangle", "Inverted Triangle", "Prefer not to say"],
  },
  {
    id: "skin-tone",
    title: "What's your skin tone?",
    description: "We'll recommend colors that complement your complexion",
    type: "single",
    options: ["Fair", "Light", "Medium", "Olive", "Deep", "Prefer not to say"],
  },
  {
    id: "style",
    title: "What's your style vibe?",
    description: "Select all that resonate with you",
    type: "multiple",
    options: ["Minimalist", "Maximalist", "Streetwear", "Bohemian", "Preppy", "Edgy", "Romantic", "Sporty"],
  },
  {
    id: "budget",
    title: "What's your budget per piece?",
    description: "This helps us find pieces in your price range",
    type: "single",
    options: ["Under $30", "$30-50", "$50-80", "$80-120", "$120+"],
  },
  {
    id: "colors",
    title: "What colors do you love?",
    description: "Select your favorite colors",
    type: "multiple",
    options: ["Black", "White", "Neutrals", "Pastels", "Vibrant", "Earth Tones", "Jewel Tones", "Metallics"],
  },
  {
    id: "occasions",
    title: "What occasions do you dress for?",
    description: "Help us understand your lifestyle",
    type: "multiple",
    options: ["Casual/Everyday", "Work/Professional", "Social Events", "Dates", "Gym/Active", "Nightlife"],
  },
]

export default function QuizPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [responses, setResponses] = useState<QuizResponse>({
    bodyType: "",
    skinTone: "",
    style: [],
    budget: "",
    colors: [],
    occasions: [],
  })
  const [isLoading, setIsLoading] = useState(false)

  const currentQuestion = quizSteps[currentStep]
  const progress = ((currentStep + 1) / quizSteps.length) * 100

  const handleSingleSelect = (option: string) => {
    const key = currentQuestion.id as keyof QuizResponse
    setResponses((prev) => ({
      ...prev,
      [key]: option,
    }))
  }

  const handleMultipleSelect = (option: string) => {
    const key = currentQuestion.id as keyof QuizResponse
    const currentArray = responses[key] as string[]
    setResponses((prev) => ({
      ...prev,
      [key]: currentArray.includes(option) ? currentArray.filter((item) => item !== option) : [...currentArray, option],
    }))
  }

  const handleNext = () => {
    if (currentStep < quizSteps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      handleSubmit()
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async () => {
    setIsLoading(true)
    // Simulate API call to save preferences and generate recommendations
    await new Promise((resolve) => setTimeout(resolve, 1500))
    // Store responses in localStorage for demo
    localStorage.setItem("userPreferences", JSON.stringify(responses))
    router.push("/recommendations")
  }

  const isCurrentStepValid = () => {
    const key = currentQuestion.id as keyof QuizResponse
    if (currentQuestion.type === "single") {
      return responses[key] !== ""
    } else {
      return (responses[key] as string[]).length > 0
    }
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card/50">
        <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center">
              <Sparkles className="h-5 w-5 text-accent-foreground" />
            </div>
            <span className="font-bold text-foreground">StyleAI Quiz</span>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>
                Question {currentStep + 1} of {quizSteps.length}
              </span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-accent to-accent/60 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Quiz Content */}
      <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Question */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">{currentQuestion.title}</h1>
            <p className="text-lg text-muted-foreground">{currentQuestion.description}</p>
          </div>

          {/* Options */}
          <div className="space-y-3">
            {currentQuestion.options.map((option) => {
              const key = currentQuestion.id as keyof QuizResponse
              const isSelected =
                currentQuestion.type === "single"
                  ? responses[key] === option
                  : (responses[key] as string[]).includes(option)

              return (
                <button
                  key={option}
                  onClick={() => {
                    if (currentQuestion.type === "single") {
                      handleSingleSelect(option)
                    } else {
                      handleMultipleSelect(option)
                    }
                  }}
                  className={`w-full p-4 rounded-lg border-2 transition text-left font-medium ${
                    isSelected
                      ? "border-accent bg-accent/10 text-foreground"
                      : "border-border bg-card hover:border-accent/50 text-foreground"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`h-5 w-5 rounded border-2 flex items-center justify-center transition ${
                        isSelected ? "border-accent bg-accent" : "border-border"
                      }`}
                    >
                      {isSelected && <div className="h-2 w-2 bg-accent-foreground rounded-full" />}
                    </div>
                    <span>{option}</span>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Navigation */}
          <div className="flex gap-4 pt-8">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className="gap-2 bg-transparent"
            >
              <ArrowLeft className="h-4 w-4" />
              Previous
            </Button>
            <Button onClick={handleNext} disabled={!isCurrentStepValid() || isLoading} className="ml-auto gap-2">
              {isLoading ? (
                <>
                  <div className="h-4 w-4 rounded-full border-2 border-accent-foreground border-t-transparent animate-spin" />
                  Analyzing...
                </>
              ) : currentStep === quizSteps.length - 1 ? (
                <>
                  Get Recommendations
                  <Sparkles className="h-4 w-4" />
                </>
              ) : (
                <>
                  Next
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
