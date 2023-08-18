import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import { useState } from "react";

export default function Register() {
  const [username, setUsername] = useState();
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
          <Input type="text" placeholder="Name" />
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Admin Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="doctor">Doctor</SelectItem>
              <SelectItem value="ambulance">Ambulance</SelectItem>
            </SelectContent>
          </Select>
          <Input type="text" readOnly placeholder="Your Username" />
          <Input type="password" placeholder="Password" />

          <Button className="w-full rounded-sm">Login</Button>
          <Button variant={"outline"} className="w-full rounded-sm">
            Register with us
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
