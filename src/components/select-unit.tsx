import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { $Enums } from "@prisma/client"
import { ComponentProps } from "react"

interface SelectUnitProps extends ComponentProps<"select"> {
    value: string
    onValueChange: (value: string) => void
}

export const SelectUnit = ({
    className, value, onValueChange
}: SelectUnitProps) => {

    const units: $Enums.Unit[] = ["KG", "MG", "UN", "DZ", "LT"]
    const defaultValue: $Enums.Unit = "UN"

    return (
        <Select
            value={value}
            onValueChange={onValueChange}
            defaultValue={defaultValue}
        >
            <SelectTrigger className={cn("w-full", className)}>
                <SelectValue />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    {
                        units.map(unit =>
                            <SelectItem
                                key={unit}
                                value={unit}
                            >
                                {unit}
                            </SelectItem>)
                    }
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}