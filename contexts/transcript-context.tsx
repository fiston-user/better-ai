import type { Transcript } from "@/lib/constants"
import { cleanJsonTranscript } from "@/utils/functions"
import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode
} from "react"

import { useExtension } from "./extension-context"

interface TranscriptContext {
  transcriptSearch: string
  setTranscriptSearch: (search: string) => void
  transcriptJson: Transcript[]
}

const TranscriptContext = createContext<TranscriptContext | undefined>(
  undefined
)

export function useTranscript() {
  const context = useContext(TranscriptContext)
  if (!context) {
    throw new Error("useTranscript must be used within a TranscriptProvider")
  }

  return context
}

interface TranscriptProviderProps {
  children: ReactNode
}

export function TranscriptProvider({ children }: TranscriptProviderProps) {
  const [transcriptSearch, setTranscriptSearch] = useState<string>("")

  const { extensionLoading, extensionData } = useExtension()

  const transcriptJson = useMemo(() => {
    if (!extensionLoading && extensionData && extensionData.transcript) {
      return cleanJsonTranscript(extensionData.transcript)
    }
    return []
  }, [extensionData, extensionLoading])

  const value = {
    transcriptSearch,
    setTranscriptSearch,
    transcriptJson
  }

  return (
    <TranscriptContext.Provider value={value}>
      {children}
    </TranscriptContext.Provider>
  )
}
