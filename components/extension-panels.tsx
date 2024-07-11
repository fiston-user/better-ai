import { useExtension } from "@/contexts/extension-context"

import Summary from "./summary"
import Transcript from "./transcript/transcript"

export default function ExtensionPanels() {
  const { extensionPanel } = useExtension()

  return (
    <div>
      {extensionPanel === "Summary" && <Summary />}
      {extensionPanel === "Transcript" && <Transcript />}
      {extensionPanel === "Chat" && <h1>Chat Panel</h1>}
    </div>
  )
}
