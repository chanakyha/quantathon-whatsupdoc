import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <main
      className={`flex min-h-screen gap-10 px-10 md:px-0 flex-col items-center justify-center`}
    >
      <Card className="p-5 absolute left-5 top-5">LOGO</Card>
      <Card className="w-full md:w-96">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Login using your ID and Password</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <Input type="text" placeholder="Username" />
          <Input type="password" placeholder="Password" />
          <Button className="w-full rounded-sm">Login</Button>
          <Button
            onClick={() => router.push("/register")}
            variant={"outline"}
            className="w-full rounded-sm"
          >
            Register with us
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
