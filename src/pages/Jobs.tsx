import { useEffect } from "react";

export default function Jobs() {

    useEffect(() => {
        const fetchJobApi = async () => {
            const apiUrl = import.meta.env.VITE_JOBS_BASE_API_URL;

            const response = await fetch(`${apiUrl}/api/jobs`);
            if (!response.ok) throw new Error('Jobs API isn`t responding');

            const data = await response.json();
            console.log(data);
        }

        fetchJobApi();
    }, []);

    return (
        <main className="px-12 py-30 min-h-screen">
            <h1>Job Page</h1>
        </main>
    );
}