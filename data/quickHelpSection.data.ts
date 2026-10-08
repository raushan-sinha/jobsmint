import { QuickHelpProps } from "@/types/quickHelp.types";
import { BriefcaseBusiness, Building2, CircleHelp, FileText, UserRound, Wrench } from "lucide-react";

export const QuickHelpCategories: QuickHelpProps[] = [
    {
        title: "Finding Jobs",
        description: "Search and discover jobs that match your skills and interests.",
        icon: BriefcaseBusiness,
    },
    {
        title: "Job Applications",
        description: "Get help with applying for jobs and understanding job listings.",
        icon: FileText,
    },
    {
        title: "Account & Login",
        description: "Manage your account, profile, login, and signup issues.",
        icon: UserRound,
    },
    {
        title: "For Employers",
        description: "Learn how to create and manage job postings on JobsMint.",
        icon: Building2,
    },
    {
        title: "Technical Support",
        description: "Having trouble with the website? We're here to help.",
        icon: Wrench,
    },
    {
        title: "Other Questions",
        description: "Can't find what you're looking for? Get additional help.",
        icon: CircleHelp,
    },
]