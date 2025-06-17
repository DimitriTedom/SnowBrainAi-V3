"use client";
import { AutosizeTextarea, AutosizeTextAreaRef } from "@/components/ui/autosize-textarea"
import { Button } from "@/components/ui/button";
import { SendIcon } from "lucide-react";
import { useRef, useState } from "react";

const JobInfoForm = () => {
  const [jobDescription,setJobDescription] = useState("")
  const textareaRef = useRef<AutosizeTextAreaRef>(null)
  
  const handleSubmit = () =>{

  }
  const handleChange = (e:{target:{value:React.SetStateAction<string>}
  }) =>{
    setJobDescription(e.target.value)
  }
  return (
    <div className="w-full max-w-2xl pt-3 mb-3 z-10 mx-auto">
      <div className="flex flex-col border-[0.5px] border-zine-300 mx-2 md:mx-o items-stretch transition-all duration-200 relative shadow-md rounded-2xl bg-white dark:bg-[#090c1a]">
      <div className="flex flex-col gap-3.5 m-3.5">
          <AutosizeTextarea
            ref={textareaRef}
            rows={3}
            value={jobDescription}
            onChange={handleChange}
            maxHeight={180}
            minHeight={100}
            onKeyDown={(e)=>{
              if (e.key === "Enter" && !e.shiftKey) {
                handleSubmit();
                // textareaRef ?.current?.textArea?.focus();
              }
            }}
            placeholder="Paste Job title & description"
            className="resize-none pr-12 text-base !border font-normal !shadow-none !ring-0 focus-visible:!ring-offset-0 focus-visible:!ring-0"
          />
      </div>
      <div className="flex-end w-full px-5 py-2">
              <Button  disabled={!jobDescription} size={"icon"} onClick={handleSubmit} className="hover:cursor-pointer bg-purple-800 hover:bg-[#090c1a]">
                <SendIcon/>
              </Button>
      </div>
      </div>
    </div>
  )
}

export default JobInfoForm