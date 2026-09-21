"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { reserve } from "@/content/reserve";
import { ui } from "@/content/ui";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { ReactNode } from "react";
import { todayInputValue } from "@/lib/site";

const schema = z.object({
  name: z.string().trim().min(2, ui.formErrors.name),
  phone: z.string().regex(/^[6-9]\d{9}$/, ui.formErrors.phone),
  date: z.string().min(1, ui.formErrors.date),
  time: z.string().min(1, ui.formErrors.time),
  partySize: z.string().min(1, ui.formErrors.party),
  notes: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

export function ReservationForm() {
  const [done, setDone] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      phone: "",
      date: todayInputValue(),
      time: "",
      partySize: "2",
      notes: "",
    },
  });

  async function onSubmit(values: FormValues) {
    const response = await fetch("/api/enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "reservation", ...values }),
    });
    if (!response.ok) return;
    setDone(true);
    reset({
      name: "",
      phone: "",
      date: todayInputValue(),
      time: "",
      partySize: "2",
      notes: "",
    });
  }

  if (done) {
    return (
      <div className="border border-ink/10 bg-paper p-8">
        <h2 className="font-display text-3xl">{reserve.successTitle}</h2>
        <p className="mt-4 text-ink-soft">{reserve.successBody}</p>
        <Button className="mt-8" type="button" onClick={() => setDone(false)}>
          {reserve.anotherLabel}
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="border border-ink/10 bg-paper p-6 md:p-8">
      <h2 className="font-display text-3xl">{reserve.formTitle}</h2>
      <p className="mt-2 text-sm text-ink-soft">{reserve.formNote}</p>
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <Field label={reserve.nameLabel} error={errors.name?.message} className="sm:col-span-2">
          <Input {...register("name")} autoComplete="name" />
        </Field>
        <Field label={reserve.phoneLabel} error={errors.phone?.message}>
          <Input {...register("phone")} inputMode="numeric" autoComplete="tel" />
        </Field>
        <Field label={reserve.partyLabel} error={errors.partySize?.message}>
          <Controller
            control={control}
            name="partySize"
            render={({ field }) => (
              <Select
                value={field.value}
                onValueChange={(value) => field.onChange(value ?? "")}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {reserve.partySizes.map((size) => (
                    <SelectItem key={size} value={String(size)}>
                      {size}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        </Field>
        <Field label={reserve.dateLabel} error={errors.date?.message}>
          <Input type="date" min={todayInputValue()} {...register("date")} />
        </Field>
        <Field label={reserve.timeLabel} error={errors.time?.message}>
          <Controller
            control={control}
            name="time"
            render={({ field }) => (
              <Select
                value={field.value}
                onValueChange={(value) => field.onChange(value ?? "")}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {reserve.times.map((time) => (
                    <SelectItem key={time} value={time}>
                      {time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        </Field>
        <Field label={reserve.notesLabel} className="sm:col-span-2">
          <textarea
            {...register("notes")}
            placeholder={reserve.notesPlaceholder}
            rows={4}
            className="w-full rounded-sm border border-ink/20 bg-paper px-3 py-3 text-base outline-none placeholder:text-muted-foreground focus-visible:border-terracotta focus-visible:ring-2 focus-visible:ring-terracotta/30"
          />
        </Field>
      </div>
      <Button type="submit" className="mt-8 w-full sm:w-auto" disabled={isSubmitting}>
        {isSubmitting ? reserve.pendingLabel : reserve.submitLabel}
      </Button>
    </form>
  );
}

function Field({
  label,
  error,
  children,
  className = "",
}: {
  label: string;
  error?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-[0.68rem] tracking-[0.16em] uppercase text-muted-foreground">
        {label}
      </span>
      {children}
      {error ? <span className="mt-1 block text-sm text-destructive">{error}</span> : null}
    </label>
  );
}
