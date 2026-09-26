export default async function JobsPage() {
    const response = await fetch('https://jobsmint.vercel.app/api/jobs');
    const result = await response.json();
    console.log(result);

    return (
        <h1>Jobs Page</h1>
    )
}