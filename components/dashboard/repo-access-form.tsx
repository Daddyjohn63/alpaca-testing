'use client'

import { useForm } from "react-hook-form";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from 'zod';
import { RepoAccessSchema } from "@/schemas";
import { useState, useTransition } from "react";

export const RepoAccessForm = () => {

  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>()
  const [success, setSuccess] = useState<string | undefined>()

  const form = useForm<z.infer<typeof RepoAccessSchema>>({
    resolver: zodResolver(RepoAccessSchema),
    defaultValues: {
      username: '',
    }
  })

  const onSubmit = (values: z.infer<typeof RepoAccessSchema>) => {

    setError(undefined)
    setSuccess(undefined)

    startTransition(async ()=> {

      const res = await fetch('/api/github/repo-invite', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          username: values.username
        })
      })

      if(!res) {
        setError('Something went wrong')
      }

      const data = await res.json()

      if(data.error) {
        setError(data.error)
        return
      }

      setSuccess(data.success)

    })
  }

  return (
    <div className="max-w-lg border border-border py-5 px-7 rounded-md">
      <Form {...form}>
        <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Github Username</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="MartyMcFlyDev"
                      disabled={isPending}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <div>
              <FormError message={error} />
              <FormSuccess message={success} />
              <Button type="submit">Submit</Button>
            </div>
          </div>
        </form>
      </Form>

    </div>
  )
}
