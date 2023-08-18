import { auth } from "@/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";

type userType = "doctor" | "ambulance" | string;

export default function Register() {
  const { toast } = useToast();
  const [userType, setUserType] = useState<userType>();
  const [name, setName] = useState<string>();

  const [username, setUsername] = useState<string>();

  const [password, setPassword] = useState<string>();

  useEffect(() => {
    setUsername(name && userType && `${name.toLowerCase()}@${userType}.wd`);
  }, [name, userType]);

  const createNewUser = async () => {
    if (!username || !password) return;

    createUserWithEmailAndPassword(auth, username, password)
      .then((userCred) => {
        toast({
          title: "Registered Successfully",
          description: Date.now().toLocaleString(),
        });
      })
      .catch(() => {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with Registering with us.",
        });
      });
  };

  return (
    <main
      className={`flex min-h-screen gap-10 px-10 md:px-0 flex-col items-center justify-center`}
    >
      <Card className="p-5 absolute left-5 top-5">LOGO</Card>
      <Card className="w-full md:w-96">
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>Please fill the following details</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <Input
            onChange={(e) => setName(e.target?.value)}
            type="text"
            placeholder="Name"
          />

          <Select
            onValueChange={(e) => {
              setUserType(e);
            }}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Admin Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="doctor">Doctor</SelectItem>
              <SelectItem value="ambulance">Ambulance Driver</SelectItem>
            </SelectContent>
          </Select>
          <Input
            type="text"
            value={name && userType && `${name.toLowerCase()}@${userType}.wd`}
            readOnly
            placeholder="Your Username"
          />
          <Input
            type="password"
            onChange={(e) => setPassword(e.target?.value)}
            placeholder="Password"
          />

          <Button
            disabled={!userType || !name}
            onClick={createNewUser}
            className="w-full rounded-sm"
          >
            {userType == "doctor"
              ? "Register as Doctor"
              : userType == "ambulance"
              ? "Register as Ambulance Driver"
              : null}
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
