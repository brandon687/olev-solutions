import { useQuery } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { ContactSubmission } from "@shared/schema";
import { format } from "date-fns";

export default function Submissions() {
  const { data: submissions, isLoading } = useQuery<ContactSubmission[]>({
    queryKey: ["/api/contact-submissions"],
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Loading submissions...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Contact Submissions</h1>
          <p className="text-muted-foreground">
            {submissions?.length || 0} total submission{submissions?.length !== 1 ? 's' : ''}
          </p>
        </div>

        {!submissions || submissions.length === 0 ? (
          <Card className="p-12 text-center">
            <p className="text-muted-foreground">No submissions yet</p>
          </Card>
        ) : (
          <div className="space-y-4">
            {submissions.map((submission) => (
              <Card key={submission.id} className="p-6" data-testid={`submission-${submission.id}`}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold">{submission.name}</h3>
                    <p className="text-sm text-muted-foreground">{submission.company}</p>
                  </div>
                  <Badge variant="secondary">
                    {format(new Date(submission.submittedAt), "MMM d, yyyy 'at' h:mm a")}
                  </Badge>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="text-sm">
                    <span className="text-muted-foreground">Email:</span>{" "}
                    <a href={`mailto:${submission.email}`} className="text-primary hover:underline">
                      {submission.email}
                    </a>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-1">Message:</p>
                  <p className="text-foreground whitespace-pre-wrap">{submission.message}</p>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
