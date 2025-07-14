import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import type { UserSignIn } from "@/types/types";

import { Link, useNavigate } from "react-router-dom";

import { routes } from "@/routes";
import { Icons } from "@/components/ui/icons";

import { useUserAuth } from "@/context/userAuthContext";

const initialValue: UserSignIn = {
  email: "",
  password: "",
  confirmPassword: "",
};

const Signup = () => {
  const { googleSignIn, signUp } = useUserAuth();

  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState<UserSignIn>(initialValue);

  const handleGoogleSignIn = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate(routes.home);
    } catch (error) {
      console.error("Google Sign In Error:", error);
    }
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await signUp(userInfo.email, userInfo.password);
      navigate(routes.home);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center">
      <Card className="w-[400px]">
        <form onSubmit={handleSubmit}>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Create an account</CardTitle>
            <CardDescription className="text-center mb-3">
              Enter your email below to create your account
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid grid-cols-2 gap-6">
              <Button variant="outline" className="text-white">
                <Icons.gitHub />
                GitHub
              </Button>
              <Button
                variant="outline"
                className="text-white"
                onClick={handleGoogleSignIn}
              >
                <Icons.google />
                Google
              </Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                value={userInfo.email}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, email: e.target.value })
                }
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={userInfo.password}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, password: e.target.value })
                }
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="confirmPassword"
                value={userInfo.confirmPassword}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, confirmPassword: e.target.value })
                }
              />
            </div>
          </CardContent>
          <CardFooter className="mt-3 flex flex-col">
            <Button type="submit" className="w-full">
              Create account
            </Button>
            <p className="mt-3 text-sm text-center">
              Already have an account? <Link to={routes.login}>Login</Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default Signup;
