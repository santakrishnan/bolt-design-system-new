"use client"

import { BotIcon, ChevronDownIcon } from "lucide-react"
import { useLanguageContext } from "@/components/language-selector"
import { Button } from "@/examples/base/ui-rtl/button"
import { ButtonGroup } from "@/examples/base/ui-rtl/button-group"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/examples/base/ui-rtl/popover"
import { Separator } from "@/examples/base/ui-rtl/separator"
import { Textarea } from "@/examples/base/ui-rtl/textarea"

const translations = {
  ar: {
    dir: "rtl" as const,
    copilot: "المساعد",
    openPopover: "فتح القائمة",
    agentTasks: "مهام الوكيل",
    placeholder: "صف مهمتك بلغة طبيعية.",
    startTask: "ابدأ مهمة جديدة مع المساعد",
    description:
      "صف مهمتك بلغة طبيعية. سيعمل المساعد في الخلفية ويفتح طلب سحب لمراجعتك.",
  },
  he: {
    dir: "rtl" as const,
    copilot: "עוזר",
    openPopover: "פתח תפריט",
    agentTasks: "משימות סוכן",
    placeholder: "תאר את המשימה שלך בשפה טבעית.",
    startTask: "התחל משימה חדשה עם העוזר",
    description:
      "תאר את המשימה שלך בשפה טבעית. העוזר יעבוד ברקע ויפתח בקשת משיכה לבדיקתך.",
  },
}

export function ButtonGroupPopover() {
  const context = useLanguageContext()
  const lang = context?.language === "he" ? "he" : "ar"
  const t = translations[lang]

  return (
    <ButtonGroup dir={t.dir}>
      <Button size="sm" variant="outline">
        <BotIcon /> {t.copilot}
      </Button>
      <Popover>
        <PopoverTrigger
          render={
            <Button
              aria-label={t.openPopover}
              size="icon-sm"
              variant="outline"
            />
          }
        >
          <ChevronDownIcon />
        </PopoverTrigger>
        <PopoverContent
          align="start"
          className="p-0"
          data-lang={lang}
          dir={t.dir}
        >
          <div className="px-4 py-3">
            <div className="font-medium text-sm">{t.agentTasks}</div>
          </div>
          <Separator />
          <div className="p-4 text-sm *:[p:not(:last-child)]:mb-2">
            <Textarea
              className="mb-4 resize-none"
              placeholder={t.placeholder}
            />
            <p className="font-medium">{t.startTask}</p>
            <p className="text-muted-foreground">{t.description}</p>
          </div>
        </PopoverContent>
      </Popover>
    </ButtonGroup>
  )
}
