"use client";

import React, { useState } from "react";
import type { Student } from "@/lib/types";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Award, Sparkles, Loader2 } from "lucide-react";
import { suggestReasonAction } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";

interface RewardDialogProps {
  student: Student;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export function RewardDialog({ student, isOpen, onOpenChange }: RewardDialogProps) {
  const [reason, setReason] = useState("");
  const [isSuggesting, setIsSuggesting] = useState(false);
  const { toast } = useToast();

  const handleSuggestReason = async () => {
    setIsSuggesting(true);
    const result = await suggestReasonAction(student.id);
    if (result.success && result.reason) {
      setReason(result.reason);
      toast({
        title: "Suggestion Generated",
        description: "An AI-powered reason has been suggested for you.",
      });
    } else {
      toast({
        variant: "destructive",
        title: "Error",
        description: result.error || "Could not generate a suggestion.",
      });
    }
    setIsSuggesting(false);
  };
  
  const handleSubmit = () => {
    // Here you would typically handle the form submission, e.g., save to a database.
    toast({
        title: "XP Awarded!",
        description: `Successfully granted bonus XP to ${student.name}.`,
    });
    onOpenChange(false);
    setReason("");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Award className="h-6 w-6 text-accent" />
            Grant Bonus XP
          </DialogTitle>
          <DialogDescription>
            Reward {student.name} for exceptional effort or achievement.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="xp-amount" className="text-right">
              XP Amount
            </Label>
            <Input id="xp-amount" type="number" defaultValue="100" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-start gap-4">
            <Label htmlFor="reason" className="text-right pt-2">
              Reason
            </Label>
            <div className="col-span-3 flex flex-col gap-2">
              <Textarea
                id="reason"
                placeholder="e.g., 'Excellent participation in class discussion.'"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="min-h-[100px]"
              />
              <Button
                variant="outline"
                size="sm"
                onClick={handleSuggestReason}
                disabled={isSuggesting}
              >
                {isSuggesting ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Sparkles className="mr-2 h-4 w-4 text-accent" />
                )}
                Suggest with AI
              </Button>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
          <Button type="submit" onClick={handleSubmit}>Grant XP</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
