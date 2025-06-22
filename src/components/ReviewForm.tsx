"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon, UploadCloud } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { StarRating } from './StarRating';
import Image from 'next/image';
import { useToast } from "@/hooks/use-toast"

const reviewFormSchema = z.object({
  perfumeName: z.string().min(2, { message: "Perfume name must be at least 2 characters." }),
  comment: z.string().min(10, { message: "Comment must be at least 10 characters." }),
  dateUsed: z.date({ required_error: "A date of first use is required." }),
  rating: z.number().min(1, { message: "Please provide a rating." }),
  photo: z.any().optional(),
});

type ReviewFormValues = z.infer<typeof reviewFormSchema>;

export default function ReviewForm() {
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<ReviewFormValues>({
    resolver: zodResolver(reviewFormSchema),
    defaultValues: {
      perfumeName: "",
      comment: "",
      rating: 0,
    },
  });

  function onSubmit(data: ReviewFormValues) {
    console.log(data);
    toast({
        title: "Review Submitted!",
        description: "Thank you for your review. It is now pending approval.",
        variant: "default",
    })
    form.reset();
    setPhotoPreview(null);
  }

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setPhotoPreview(URL.createObjectURL(file));
      form.setValue('photo', file);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-4">
                <FormField
                    control={form.control}
                    name="photo"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Upload Photo</FormLabel>
                        <FormControl>
                            <div className="relative flex justify-center items-center w-full h-48 border-2 border-dashed rounded-lg cursor-pointer hover:bg-muted">
                                <Input
                                    type="file"
                                    id="photo"
                                    accept="image/*"
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                    onChange={handlePhotoChange}
                                />
                                {photoPreview ? (
                                    <Image src={photoPreview} alt="Photo preview" layout="fill" objectFit="cover" className="rounded-lg"/>
                                ) : (
                                    <div className="text-center text-muted-foreground">
                                    <UploadCloud className="mx-auto h-12 w-12"/>
                                    <p>Click to upload or drag and drop</p>
                                    </div>
                                )}
                            </div>
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="rating"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Your Rating</FormLabel>
                        <FormControl>
                            <div>
                                <StarRating rating={field.value} onRatingChange={field.onChange} />
                            </div>
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
            </div>
            <div className="space-y-4">
                <FormField
                control={form.control}
                name="perfumeName"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Perfume Name / Title</FormLabel>
                    <FormControl>
                        <Input placeholder="e.g., Chanel No. 5" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />

                <FormField
                control={form.control}
                name="comment"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Comments</FormLabel>
                    <FormControl>
                        <Textarea
                        placeholder="Tell us about your experience..."
                        className="resize-none"
                        rows={6}
                        {...field}
                        />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />

                <FormField
                control={form.control}
                name="dateUsed"
                render={({ field }) => (
                    <FormItem className="flex flex-col">
                    <FormLabel>Date First Used</FormLabel>
                    <Popover>
                        <PopoverTrigger asChild>
                        <FormControl>
                            <Button
                            variant={"outline"}
                            className={cn(
                                "w-full pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                            )}
                            >
                            {field.value ? (
                                format(field.value, "PPP")
                            ) : (
                                <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                        </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                            }
                            initialFocus
                        />
                        </PopoverContent>
                    </Popover>
                    <FormMessage />
                    </FormItem>
                )}
                />
            </div>
        </div>

        <Button type="submit" className="w-full sm:w-auto">Submit Review</Button>
      </form>
    </Form>
  );
}
