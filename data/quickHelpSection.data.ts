import { QuickHelpProps } from "@/types/quickHelp.types";
import { BriefcaseBusiness, Building2, CircleHelp, FileText, UserRound, Wrench } from "lucide-react";

export const QuickHelpCategories: QuickHelpProps[] = [
    {
        id: 1,
        title: "Finding Jobs",
        description: "Search and discover jobs that match your skills and interests.",
        icon: BriefcaseBusiness,
    },
    {
        id: 2,
        title: "Job Applications",
        description: "Get help with applying for jobs and understanding job listings.",
        icon: FileText,
    },
    {
        id: 3,
        title: "Account & Login",
        description: "Manage your account, profile, login, and signup issues.",
        icon: UserRound,
    },
    {
        id: 4,
        title: "For Employers",
        description: "Learn how to create and manage job postings on JobsMint.",
        icon: Building2,
    },
    {
        id: 5,
        title: "Technical Support",
        description: "Having trouble with the website? We're here to help.",
        icon: Wrench,
    },
    {
        id: 6,
        title: "Other Questions",
        description: "Can't find what you're looking for? Get additional help.",
        icon: CircleHelp,
    },
]