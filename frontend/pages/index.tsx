import { useState } from "react";
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
import { auth } from "@/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useToast } from "@/components/ui/use-toast";

export default function Home() {
  const router = useRouter();
  const { toast } = useToast();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const loginfunc = () => {
    signInWithEmailAndPassword(auth, username, password)
      .then((result) => {
        toast({
          title: "Login Successfully",
          description: `${new Date().toLocaleString()}`,
        });
        console.log(result);
      })
      .catch((err) => {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: err.message,
        });
        console.log(err);
      });
  };

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
          <Input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
          <Input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <Button onClick={loginfunc} className="w-full rounded-sm">
            Login
          </Button>
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
