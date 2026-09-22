"use client";
import { useActionState } from "react";
import { signIn } from "@/app/admin/actions";

export function LoginForm({ message }: { message?: string }) {
  const [state, action, pending] = useActionState(signIn, undefined);
  return <form action={action} className="mt-8 space-y-5"><label>Email address<input name="email" type="email" autoComplete="email" required placeholder="admin@example.com" /></label><label>Password<input name="password" type="password" autoComplete="current-password" required placeholder="••••••••" /></label>{(state?.error || message) && <p role="alert" className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">{state?.error ?? message}</p>}<button disabled={pending} className="w-full rounded-lg bg-primary-emerald px-4 py-3 text-sm font-medium text-white disabled:opacity-60">{pending ? "Signing in…" : "Sign in"}</button></form>;
}
