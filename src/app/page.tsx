import { 
  CardHeader, CardTitle, CardFooter, CardDescription 
} from "@/components/ui/card"
import { Card } from "@/components/card-border-animated"
import { ButtonsLogin } from "@/components/buttons-login"

export default function Home() {
  return (
    <div className="h-dvh w-full flex items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle className="text-4xl">
            Onigiri
          </CardTitle>
          <CardDescription className="pt-3 text-base">
            Realizar login
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <ButtonsLogin />
        </CardFooter>
      </Card>
    </div>
  )
}
