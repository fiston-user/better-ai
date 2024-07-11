import { forwardRef, type RefObject } from "react"

interface TranscriptContentProps {
  ref: RefObject<HTMLDivElement>
}

const TranscriptContent = forwardRef<HTMLDivElement, TranscriptContentProps>(
  (props, ref) => {
    return <div ref={ref}></div>
  }
)
