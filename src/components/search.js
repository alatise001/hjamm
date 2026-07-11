import { Search } from "lucide-react"

import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/components/ui/input-group"

export function InputSearch() {
    return (
        <InputGroup className="w-full bg-white h-11 rounded-[10px] border">
            <InputGroupInput className="text-[#9CA3AF] placeholder:text-[#9CA3AF] placeholder:text-[12px] text-[12px]" placeholder="Search events..." />
            <InputGroupAddon>
                <Search className="text-[#9CA3AF] h-3 w-3" />
            </InputGroupAddon>
            {/* <InputGroupAddon align="inline-end">12 results</InputGroupAddon> */}
        </InputGroup>
    )
}
