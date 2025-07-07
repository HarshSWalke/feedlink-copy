import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";
import { LANGUAGES, useI18n } from "@/lib/utils.tsx";

const LanguageSelector = () => {
  const { language, setLanguage } = useI18n();
  const selectedLanguage = LANGUAGES.find(l => l.code === language) || LANGUAGES[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="bg-white/90 backdrop-blur-sm border-2 border-golden/30 hover:border-golden hover:bg-golden/10 transition-all duration-300">
          <Globe className="w-4 h-4 mr-2" />
          <span className="hidden sm:inline">{selectedLanguage.name}</span>
          <span className="sm:hidden">{selectedLanguage.flag}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white/95 backdrop-blur-sm border-2 border-golden/30">
        {LANGUAGES.map((language) => (
          <DropdownMenuItem 
            key={language.code}
            onClick={() => setLanguage(language.code)}
            className="hover:bg-golden/20 cursor-pointer"
          >
            <span className="mr-2">{language.flag}</span>
            {language.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
