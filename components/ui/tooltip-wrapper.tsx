import { Tooltip } from "@radix-ui/react-tooltip"

import { TooltipContent, TooltipProvider, TooltipTrigger } from "./tooltip"

export function ToolTipWrapper({ children, text }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent>
          <p>{text}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
