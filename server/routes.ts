import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      
      console.log("New contact submission received:");
      console.log(`Name: ${submission.name}`);
      console.log(`Email: ${submission.email}`);
      console.log(`Company: ${submission.company}`);
      console.log(`Message: ${submission.message}`);
      console.log("---");

      res.json({ 
        success: true, 
        message: "Contact submission received successfully",
        id: submission.id 
      });
    } catch (error) {
      console.error("Error processing contact submission:", error);
      res.status(400).json({ 
        success: false, 
        message: "Invalid contact submission data" 
      });
    }
  });

  app.get("/api/contact-submissions", async (req, res) => {
    try {
      const submissions = await storage.getAllContactSubmissions();
      res.json(submissions);
    } catch (error) {
      console.error("Error fetching contact submissions:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch submissions" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
