import { useState } from 'react'
import './StyleQuiz.css'

interface QuizQuestion {
  id: number
  question: string
  options: {
    text: string
    value: string
    image: string
  }[]
}

interface StyleResult {
  style: string
  title: string
  description: string
  features: string[]
  image: string
}

function StyleQuiz() {
  const questions: QuizQuestion[] = [
    {
      id: 1,
      question: 'What best describes your ideal living space?',
      options: [
        {
          text: 'Clean lines and minimal clutter',
          value: 'modern',
          image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          text: 'Warm and timeless elegance',
          value: 'classic',
          image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          text: 'Cozy with natural textures',
          value: 'rustic',
          image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=400'
        }
      ]
    },
    {
      id: 2,
      question: 'Which color palette appeals to you most?',
      options: [
        {
          text: 'Neutral whites and grays',
          value: 'modern',
          image: 'https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          text: 'Warm beiges and creams',
          value: 'classic',
          image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          text: 'Earth tones and wood',
          value: 'rustic',
          image: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=400'
        }
      ]
    },
    {
      id: 3,
      question: 'What type of furniture do you prefer?',
      options: [
        {
          text: 'Sleek and contemporary',
          value: 'modern',
          image: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          text: 'Traditional and sophisticated',
          value: 'classic',
          image: 'https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          text: 'Vintage and reclaimed',
          value: 'rustic',
          image: 'https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=400'
        }
      ]
    }
  ]

  const styleResults: Record<string, StyleResult> = {
    modern: {
      style: 'modern',
      title: 'Modern Minimalist',
      description: 'Your style emphasizes clean lines, open spaces, and a sophisticated neutral palette. Perfect for contemporary properties targeting design-conscious buyers.',
      features: ['Neutral color schemes', 'Sleek furniture', 'Minimal accessories', 'Open floor plans'],
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    classic: {
      style: 'classic',
      title: 'Classic Elegance',
      description: 'You appreciate timeless design with traditional elements. This style creates warm, inviting spaces that appeal to a broad range of buyers.',
      features: ['Warm color palettes', 'Traditional furniture', 'Elegant accessories', 'Layered textures'],
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    rustic: {
      style: 'rustic',
      title: 'Rustic Charm',
      description: 'You love natural materials and cozy, lived-in spaces. This style brings warmth and character, perfect for properties with unique architectural features.',
      features: ['Natural wood tones', 'Textured fabrics', 'Vintage accents', 'Organic elements'],
      image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  }

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [showResult, setShowResult] = useState(false)
  const [result, setResult] = useState<StyleResult | null>(null)

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers, value]
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      const styleCounts: Record<string, number> = {}
      newAnswers.forEach(answer => {
        styleCounts[answer] = (styleCounts[answer] || 0) + 1
      })

      const winningStyle = Object.keys(styleCounts).reduce((a, b) =>
        styleCounts[a] > styleCounts[b] ? a : b
      )

      setResult(styleResults[winningStyle])
      setShowResult(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setShowResult(false)
    setResult(null)
  }

  if (showResult && result) {
    return (
      <section className="style-quiz">
        <div className="style-quiz-container">
          <div className="quiz-result">
            <div className="result-content">
              <h2>Your Perfect Staging Style</h2>
              <h3>{result.title}</h3>
              <p>{result.description}</p>

              <div className="result-features">
                <h4>Key Elements:</h4>
                <ul>
                  {result.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="result-actions">
                <a href="#contact" className="result-button primary">
                  Schedule Consultation
                </a>
                <button onClick={resetQuiz} className="result-button secondary">
                  Retake Quiz
                </button>
              </div>
            </div>

            <div className="result-image">
              <img src={result.image} alt={result.title} />
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="style-quiz">
      <div className="style-quiz-container">
        <div className="quiz-header">
          <h2>Find Your Staging Style</h2>
          <p>Answer 3 quick questions to discover the perfect staging approach for your property</p>

          <div className="quiz-progress">
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
            <span className="progress-text">
              Question {currentQuestion + 1} of {questions.length}
            </span>
          </div>
        </div>

        <div className="quiz-question">
          <h3>{questions[currentQuestion].question}</h3>

          <div className="quiz-options">
            {questions[currentQuestion].options.map((option, index) => (
              <div
                key={index}
                className="quiz-option"
                onClick={() => handleAnswer(option.value)}
              >
                <img src={option.image} alt={option.text} />
                <div className="option-overlay">
                  <span>{option.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default StyleQuiz
